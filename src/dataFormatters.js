import { DateTime } from "luxon"

export const formatUser = (user) => ({
  ...user,
  birthDate: DateTime.fromISO(user.birthDate).toFormat("yyyy-MM-dd"),
})
