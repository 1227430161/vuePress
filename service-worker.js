/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f2ea406d0ec0c8b353680b8e9da47dd4"
  },
  {
    "url": "about/about-me.html",
    "revision": "159c3f2e25c938da965d69cfbe607da8"
  },
  {
    "url": "about/about-personal.html",
    "revision": "3d77b3f8cda041ab783b3efc2d0ecd38"
  },
  {
    "url": "about/index.html",
    "revision": "4856adf9f2a71862d1392ff9ad2f7c04"
  },
  {
    "url": "assets/css/0.styles.6547fc11.css",
    "revision": "b88752e5d5486a48efca928824b2417a"
  },
  {
    "url": "assets/image/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "0966ea3e4de6b0d0bf9efb89eb98d7bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8a626e1.js",
    "revision": "625fd27ac232c14b2ed797f4609d0278"
  },
  {
    "url": "assets/js/11.3ec5f4e6.js",
    "revision": "aa5b86ecf36073466b3334da0ff15c36"
  },
  {
    "url": "assets/js/12.e79a19df.js",
    "revision": "dcfedcf1871eda4512b289e1b7a39b98"
  },
  {
    "url": "assets/js/13.8d20127e.js",
    "revision": "201c9b1adc957591964a9691929a8911"
  },
  {
    "url": "assets/js/14.31e04131.js",
    "revision": "c6e9303278cb6b6f7c32c06587c00f73"
  },
  {
    "url": "assets/js/15.957f707c.js",
    "revision": "7efaa63083e995900bc402063f7e2a98"
  },
  {
    "url": "assets/js/16.f5f2a9a6.js",
    "revision": "ee8f67b7ad09c5da0c530d3a7e1ce740"
  },
  {
    "url": "assets/js/17.d46b5231.js",
    "revision": "e8afa767a248b98def2e0c5b01d80582"
  },
  {
    "url": "assets/js/18.43d8b234.js",
    "revision": "c24bd4bbf1657145f5137f39a12aa9b0"
  },
  {
    "url": "assets/js/19.d82a71fe.js",
    "revision": "68663c5e392768433873be575500dda3"
  },
  {
    "url": "assets/js/2.74b98a7c.js",
    "revision": "bbfc59c2fb205db5525b8bac653b5947"
  },
  {
    "url": "assets/js/20.17d83c1e.js",
    "revision": "ea8dd639be2d1ddba5c37b5519ccfc33"
  },
  {
    "url": "assets/js/21.5d0d3938.js",
    "revision": "45b4c34dc96c155278befd1fd229d7b0"
  },
  {
    "url": "assets/js/22.5997de6a.js",
    "revision": "b79d28da7f59152ae8a1e30509f7e82f"
  },
  {
    "url": "assets/js/23.5e9f6590.js",
    "revision": "06042f3fd8f53ef496b34adb9afb6294"
  },
  {
    "url": "assets/js/24.04e32ddf.js",
    "revision": "e55e0765b90b58238d06086058f76ad2"
  },
  {
    "url": "assets/js/25.af46948a.js",
    "revision": "f3f6eac44cc7c931b18c26ce1e4f50c6"
  },
  {
    "url": "assets/js/3.05601c5b.js",
    "revision": "72eadbcc0d06da0734275fd42fcdef27"
  },
  {
    "url": "assets/js/4.fb7e5adb.js",
    "revision": "af99aa80691d00e493d361f69c78e1cd"
  },
  {
    "url": "assets/js/5.119aabb1.js",
    "revision": "7c803ea4933ccdc82e14ae67a021450a"
  },
  {
    "url": "assets/js/6.a059b34a.js",
    "revision": "87186d2893dc419f1616a64784e49265"
  },
  {
    "url": "assets/js/7.db1b163e.js",
    "revision": "41499be5d81aef84429e54b386e543b9"
  },
  {
    "url": "assets/js/8.676aca0a.js",
    "revision": "9d353068cfbb9168caea7d33cc23ce60"
  },
  {
    "url": "assets/js/9.59c4ac11.js",
    "revision": "52b855277e662a12ba01e15100ba6207"
  },
  {
    "url": "assets/js/app.3241e816.js",
    "revision": "1ae1fe6f597de030ef890ab5f96e6846"
  },
  {
    "url": "frontend/CSS.html",
    "revision": "013de6df9880e1963b8f1d004b44de22"
  },
  {
    "url": "frontend/JavaScript.html",
    "revision": "e80959e9ed97ac9867e316b9a2ead075"
  },
  {
    "url": "frontend/Vue.html",
    "revision": "44a735e58639457a1e5d947234054209"
  },
  {
    "url": "guide.html",
    "revision": "4fd7607eb390e4129def3b0531a84653"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "9453067b1c62d5027cf41f01f9e02112"
  },
  {
    "url": "life/food.html",
    "revision": "ce3749c2b0db2b33e4b400f0ee8727eb"
  },
  {
    "url": "life/hometown.html",
    "revision": "a36a21a95f8511872e1de108b1b18bff"
  },
  {
    "url": "life/index.html",
    "revision": "d150532c5109afbfd2f781ddb8e733ac"
  },
  {
    "url": "life/training.html",
    "revision": "39de036083378b1837557b1c8faf6df1"
  },
  {
    "url": "tools/Git.html",
    "revision": "e3ee8b9766514be7a9a148909403aba9"
  },
  {
    "url": "tools/Github.html",
    "revision": "55f7a3ae43c462a00634750ff5949d5f"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "9d0efb31291bfed2496d5ec1dc4e2b9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
