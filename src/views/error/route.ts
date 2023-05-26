const route = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    name: 'NotFound',
    path: '/404',
    component: function () {
      return import('@/views/error/NotFound.vue')
    }
  }
]

export default route
