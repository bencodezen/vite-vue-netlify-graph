import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

const buildAction = async function () {
  const BUILD_HOOK =
    'https://api.netlify.com/build_hooks/62fefde419ae1d2c11e30a2d'

  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200
  }
}

const handler = schedule('* * * * *', buildAction)

export { handler }
