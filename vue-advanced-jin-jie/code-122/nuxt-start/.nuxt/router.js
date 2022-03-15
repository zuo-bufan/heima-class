import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5948eb24 = () => interopDefault(import('../pages/layout.vue' /* webpackChunkName: "pages/layout" */))
const _1fd986a7 = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "pages/layout/index" */))
const _19e2851a = () => interopDefault(import('../pages/layout/three.vue' /* webpackChunkName: "pages/layout/three" */))
const _68f8be61 = () => interopDefault(import('../pages/layout/two.vue' /* webpackChunkName: "pages/layout/two" */))
const _dfb268ca = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _35ee02e2 = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _0815df6e = () => interopDefault(import('../pages/test/two.vue' /* webpackChunkName: "pages/test/two" */))
const _8b378606 = () => interopDefault(import('../pages/test/twos/index.vue' /* webpackChunkName: "pages/test/twos/index" */))
const _44260cf6 = () => interopDefault(import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */))
const _1c596bc8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/layout",
    component: _5948eb24,
    children: [{
      path: "",
      component: _1fd986a7,
      name: "layout"
    }, {
      path: "three",
      component: _19e2851a,
      name: "layout-three"
    }, {
      path: "two",
      component: _68f8be61,
      name: "layout-two"
    }]
  }, {
    path: "/list",
    component: _dfb268ca,
    name: "list"
  }, {
    path: "/test",
    component: _35ee02e2,
    name: "test"
  }, {
    path: "/test/two",
    component: _0815df6e,
    name: "test-two"
  }, {
    path: "/test/twos",
    component: _8b378606,
    name: "test-twos"
  }, {
    path: "/detail/:id?",
    component: _44260cf6,
    name: "detail-id"
  }, {
    path: "/",
    component: _1c596bc8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
