import config from "@/config.js"

const apiRoutes = {
  users: {
    create: () => `${config.api.baseUrl}/users`,
    read: {
      collection: () => `${config.api.baseUrl}/users`,
    },
    delete: (userId) => `${config.api.baseUrl}/users/${userId}`,
  },
}

export default apiRoutes
