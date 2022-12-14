const routes = {
  home: "/",
  users: {
    create: "/users/create",
    read: {
      collection: "/users",
      single: (userId) => `/users/${userId}`,
    },
    update: (userId) => `/users/${userId}/edit`,
  },
}

export default routes
