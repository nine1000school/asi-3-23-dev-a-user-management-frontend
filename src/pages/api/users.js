import { InvalidArgumentError } from "@/api/errors.js"
import mw from "@/api/mw.js"
import { DateTime } from "luxon"

const logger = async (req, res, next) => {
  console.log(`${req.method} - ${DateTime.now().toISODate()}`)

  await next()
}

const handler = mw({
  GET: [
    logger,
    async (req, res) => {
      res.send("YEAAAAAAAAAAH! GET USERS EVERYWHERE~~~~~~!")
    },
  ],
  POST: async (req, res) => {
    throw new InvalidArgumentError()

    res.send("BOOOOOOOOOOOOOOOH! POST USERS è_é")
  },
})

export default handler
