(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1063:function(t,n,o){"use strict";var s=o(330);o.n(s).a},1140:function(t,n,o){"use strict";o.r(n);var s={props:{prompt:{type:Boolean,default:!1}},data:function(){return{user_agent:"",showAll:!1,downloading:null,defaultDownload:null,downloads:{macos:{default:{text:"MacOS",subtext:"64-bit",link:"/#/download/desktop/mac"}},windows:{default:{text:"Windows",subtext:"64-bit",link:"/#/download/desktop/windows"},generic32:{text:"Windows",subtext:"32-bit",link:"/#/download/desktop/windows-32bit"}},linux:{default:{text:"Linux",subtext:"64-bit",link:"/#/download/desktop/linux"},generic32:{text:"Linux",subtext:"32-bit",link:"/#/download/desktop/linux-32bit"},debian64:{text:"Linux",subtext:"64-bit Debian",link:"/#/download/desktop/linux-64bit-debian"},debian32:{text:"Linux",subtext:"32-bit Debian",link:"/#/download/desktop/linux-32bit-debian"}}}}},created:function(){this.getOS()},methods:{getOS:function(){var t=window.navigator.userAgent,n=window.navigator.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(n)?this.user_agent="macos":-1!==["iPhone","iPad","iPod"].indexOf(n)?this.user_agent="ios":-1!==["Win32","Win64","Windows","WinCE"].indexOf(n)?this.user_agent="windows":/Android/.test(t)?this.user_agent="android":/Linux/.test(n)&&(this.user_agent="linux"),this.defaultDownload=this.downloads[this.user_agent].default},showAllPlatforms:function(){this.showAll=!this.showAll},startDownload:function(t){this.downloading=t}}},i=(o(1063),o(0)),e=Object(i.a)(s,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"welcome-block"},[o("div",{staticClass:"welcome-block__header"},[o("c-img",{attrs:{src:"/static/img/logo-white.svg",alt:"Logo"}})],1),t._v(" "),o("div",{staticClass:"welcome-block__download-block"},[o("div",{staticClass:"info"},[t.prompt?o("h4",{staticClass:"font-weight-bold text-uppercase h3"},[t._v("This requires our desktop version")]):t._e(),t._v(" "),t.prompt?o("p",{staticClass:"h4"},[t._v("\n                Creating an account is not safe within a browser,\n                so we built BlockHub it's own fortress,\n                safer environment for you to do much more!\n            ")]):t._e(),t._v(" "),t.prompt?t._e():o("h4",{staticClass:"font-weight-bold text-uppercase h3"},[t._v("DO MORE WITH OUR DESKTOP CLIENT")]),t._v(" "),t.prompt?t._e():o("p",{staticClass:"h4"},[t._v("\n                Some actions are not safe within a browser, so we have built BlockHub it’s own fortress, a safer environment for you to do much more!\n            ")]),t._v(" "),o("div",{staticClass:"action d-flex align-items-center"},[t.downloading?t._e():o("a",{staticClass:"btn btn-outline-success",attrs:{href:t.defaultDownload.link},on:{click:function(n){t.startDownload(t.defaultDownload)}}},[o("strong",[t._v("Download Now")]),t._v(" "),o("small",[t._v("for "+t._s(t.defaultDownload.text))])]),t._v(" "),t.downloading?o("div",[t._v("\n                    Downloading now. "),o("a",{attrs:{href:t.downloading.link}},[t._v("Click here")]),o("br"),t._v(" if it doesn't start in 10 seconds.\n                ")]):t._e(),t._v(" "),o("div",{staticClass:"download_info",on:{click:t.showAllPlatforms}},[o("h6",[t._v("Using another OS?")]),t._v(" "),o("p",[t._v("We are multiplatform, enjoy!")]),t._v(" "),o("i",{staticClass:"fab fa-apple"}),t._v(" "),o("i",{staticClass:"fab fa-linux"}),t._v(" "),o("i",{staticClass:"fab fa-windows"})])])]),t._v(" "),t.showAll?o("div",{staticClass:"other_options"},t._l(t.downloads,function(n,s){return o("div",{key:s},t._l(n,function(n,s){return o("a",{key:s,staticClass:"btn",attrs:{href:n.link}},[o("strong",[t._v(t._s(n.text))]),t._v(" "),o("small",[t._v(t._s(n.subtext))])])}))})):t._e()]),t._v(" "),o("div",{staticClass:"welcome-block__screen"},[o("c-img",{attrs:{src:"/static/img/welcome-box.png"}})],1)])},[],!1,null,"3a924ede",null);n.default=e.exports},330:function(t,n){}}]);