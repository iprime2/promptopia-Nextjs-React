import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export async function POST(request) {
  const { userId, prompt, tag } = await request.json()
  try {
    await connectToDB()
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    })

    await newPrompt.save()

    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response('Failed to create new Prompt', { status: 400 })
  }
}

// export const POST = async (request) => {
//   console.log(request)
//   const { userId, prompt, tag } = request.body
//   try {
//     await connectToDB()
//     const newPrompt = new Prompt({
//       creator: userId,
//       prompt,
//       tag,
//     })

//     await newPrompt.save()

//     return new Response(JSON.stringify(newPrompt), { status: 201 })
//   } catch (error) {
//     console.log(error)
//     return new Response('Failed to create new Prompt', { status: 400 })
//   }
// }
