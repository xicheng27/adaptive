import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { brands } from '@/lib/brands'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const brandCatalog = brands
  .map(
    (b) =>
      `• ${b.name} (id: ${b.id}) — ${b.description} Features: ${b.features.join(', ')}. Ships to: ${b.shipping.join(', ')}.`,
  )
  .join('\n')

const systemPrompt = `You are WearAble's adaptive fashion specialist. A user has described their disability, condition, or clothing needs in their own words. Your job is to return a ranked list of the most relevant brands from the catalog below, with a short explanation for each.

BRAND CATALOG:
${brandCatalog}

INSTRUCTIONS:
- Recommend 3–6 brands, ranked best-first.
- For each brand, write one or two sentences explaining exactly WHY it fits their specific needs.
- Use this format for each entry:
  **[number]. [Brand Name]** — [explanation]
- If the user mentions a location, only include brands that ship there.
- Be specific and practical. Reference actual features from the catalog.
- After the list, add one short paragraph of general dressing tips relevant to their condition.
- Do not recommend brands outside the catalog.`

export async function POST(req: NextRequest) {
  const { description, location } = await req.json() as { description: string; location?: string }

  const userMessage = location
    ? `My needs: ${description}\nMy location: ${location}`
    : `My needs: ${description}`

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await client.messages.stream({
          model: 'claude-opus-4-7',
          max_tokens: 1024,
          thinking: { type: 'adaptive' },
          system: systemPrompt,
          messages: [{ role: 'user', content: userMessage }],
        })

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(event.delta.text)}\n\n`))
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        controller.close()
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Unknown error'
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`))
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
