import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const { messages, disability, location } = await req.json()

  const systemPrompt = `You are AdaptFit's friendly and knowledgeable adaptive fashion advisor. You help people with physical disabilities find clothing that works for their specific needs.

Your expertise covers:
- Adaptive clothing features (magnetic closures, Velcro, open-back designs, seated fit, sensory-friendly fabrics)
- Specific disability needs and how fashion can accommodate them
- Real adaptive fashion brands and retailers
- Dressing tips and techniques
- Sizing, fit, and modification advice

${disability ? `Current user context — Disability/condition: ${disability}` : ''}
${location ? `User location/region: ${location}` : ''}

Be warm, practical, and specific. Avoid generic advice. When recommending brands, mention: Tommy Adaptive, Nike FlyEase, Zappos Adaptive, IZ Adaptive, Silvert's, Buck & Buck, Joe & Bella, Slick Chicks, Rebirth Garments, Care+Wear, Target Adaptive, Gap Adaptive, Lands' End Adaptive, Ffora, Primary Adaptive, and Columbia Adaptive — whichever are most relevant.

Keep responses concise and actionable. Use bullet points for lists.`

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await client.messages.stream({
          model: 'claude-opus-4-7',
          max_tokens: 1024,
          thinking: { type: 'adaptive' },
          system: systemPrompt,
          messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        })

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            const data = `data: ${JSON.stringify(event.delta.text)}\n\n`
            controller.enqueue(encoder.encode(data))
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
