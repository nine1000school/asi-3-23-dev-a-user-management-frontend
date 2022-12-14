import config from "@/config.js"

const apiRoutes = {
  users: {
    create: () => `${config.api.baseUrl}/users`,
    read: {
      collection: () => `${config.api.baseUrl}/users`,
      single: (userId) => `${config.api.baseUrl}/users/${userId}`,
    },
    update: (userId) => `${config.api.baseUrl}/users/${userId}`,
    delete: (userId) => `${config.api.baseUrl}/users/${userId}`,
  },
}

export default apiRoutes
