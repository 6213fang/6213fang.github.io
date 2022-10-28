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
    "revision": "f3521809c4244adbe1d10da3b3222ab9"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.a502440a.js",
    "revision": "76a68ca257f880dd46e996652e7a6d45"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.d38ad00d.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.dc06c030.js",
    "revision": "eb07e8d21fe5864cf762d7fa683aa4fa"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c18d403a6447162c920d6117a7fb0058"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d45402f645eb7c63309efd07eff25a10"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a4a16e5fc94f53af11a494ef47058d01"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "25be55d8a6c6448f9c8bfd791165bb40"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "290e8060f10315e8bcd796afdca797a8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4327ac9d4467de25ab0c2cc1cc088fae"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "2fbe52edb47a362c616ff07196e8770b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "dc58c53889e33e7b53c629b0d27e0d3a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c1d5d259f8e1fe6cb3f09f3d8c675b81"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c304030b319c18d53349ce66bacdd923"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ee2532f05118a61895e0c25e47a042f5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "513d42ec3351fc0c4b01709bd7cc433c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "373d808ba45776ea326992309f2af913"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e2b9dc5a7dcea5e7cabb24bb042194f4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dafcf5003305b554a1468b49ef6d5c5a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7692f6d2c11dbf5990f92fa7b9db13fd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7ec7c139ecabb2ae5081e1d46abe5271"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "06492fbb9f639f755335c2f319f738f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "1fea2c7ab1199a150a8e909ffb852d8b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9ad57d2aa9d0d23c12fc0957ab84adef"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fe6b03dffadc984dd3ff5f7a53cc1df3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b2134cc28350d164c21bfa316830c007"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "737640ccb9c90865cc0eaa8a793a171f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "412838e1eb5122252edc5159d991ec09"
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
