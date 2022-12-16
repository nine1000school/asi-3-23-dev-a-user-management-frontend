import config from "@/config.js"

const apiRoutes = {
  users: {
    create: () => `${config.api.baseURL}/users`,
    read: {
      collection: () => `${config.api.baseURL}/users`,
      single: (userId) => `${config.api.baseURL}/users/${userId}`,
    },
    update: (userId) => `${config.api.baseURL}/users/${userId}`,
    delete: (userId) => `${config.api.baseURL}/users/${userId}`,
    sign: {
      in: () => `${config.api.baseURL}/sign-in`,
      up: () => `${config.api.baseURL}/sign-up`,
    },
  },
}

export default apiRoutes
