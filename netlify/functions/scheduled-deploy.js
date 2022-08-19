import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/62fefde419ae1d2c11e30a2d'

const buildAction = async function () {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response.json())
  })

  return {
    statusCode: 200
  }
}

const handler = schedule('* * * * *', buildAction)

export { handler }
