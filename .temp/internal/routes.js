/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\vuePress\\vuePress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-c8078d1c",
    path: "/about3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c8078d1c").then(next)
    },
  },
  {
    name: "v-1b6c7da9",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1b6c7da9").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-55226714",
    path: "/about1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-55226714").then(next)
    },
  },
  {
    name: "v-511824e5",
    path: "/css/c-aaa.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-511824e5").then(next)
    },
  },
  {
    name: "v-7f42eff0",
    path: "/about4.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7f42eff0").then(next)
    },
  },
  {
    name: "v-d810321c",
    path: "/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d810321c").then(next)
    },
  },
  {
    name: "v-9d0cd976",
    path: "/css/c-bbb.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9d0cd976").then(next)
    },
  },
  {
    name: "v-11db01a5",
    path: "/css/c-ccc.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-11db01a5").then(next)
    },
  },
  {
    name: "v-131ec7f3",
    path: "/javascript/j-aaa.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-131ec7f3").then(next)
    },
  },
  {
    name: "v-44d3181e",
    path: "/javascript/j-bbb.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-44d3181e").then(next)
    },
  },
  {
    name: "v-afe3c022",
    path: "/javascript/j-ccc.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-afe3c022").then(next)
    },
  },
  {
    name: "v-4ef3da9c",
    path: "/test1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ef3da9c").then(next)
    },
  },
  {
    name: "v-0e24e62e",
    path: "/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0e24e62e").then(next)
    },
  },
  {
    path: "/css/index.html",
    redirect: "/css/"
  },
  {
    name: "v-4ea176a8",
    path: "/javascript/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ea176a8").then(next)
    },
  },
  {
    path: "/javascript/index.html",
    redirect: "/javascript/"
  },
  {
    name: "v-34165592",
    path: "/test2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-34165592").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]