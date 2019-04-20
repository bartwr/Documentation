(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{231:function(a,t,e){"use strict";e.r(t);var s=e(2),o=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"how-to-activate-custom-consensus-modules-on-an-existing-komodo-assetchain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-activate-custom-consensus-modules-on-an-existing-komodo-assetchain","aria-hidden":"true"}},[a._v("#")]),a._v(" How to Activate Custom Consensus modules on an Existing Komodo Assetchain")]),a._v(" "),e("p",[a._v("If you have an existing assetchain based on Komodo platform without Custom Consensus modules enabled, you can activate it at any time. Komodo daemon now supports the command-line parameter "),e("code",[a._v("-ac_ccactivate=height")]),a._v(" , using which you can activate CC on a non-CC enabled chain in a future block height.")]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("p",[a._v("The first existing chain which doesn't have CC enabled, whose startup command looks like this")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("EXAMPLE -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("72000000 -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("24.54.206.138 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),e("p",[a._v("It was a very easy way to start a chain using Komodo technology, with very few parameters. In order to activate CC in this chain, all we have to do is the following:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("EXAMPLE -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("72000000 -ac_ccactivate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("140 -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("24.54.206.138 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),e("p",[e("code",[a._v("-ac_ccactivate=140")]),a._v(" means, Custom Consensus modules are activated at block 140. You can set this parameter to any block height you want the CC to be activated.")]),a._v(" "),e("p",[a._v("As this is a hardforking change, all nodes must update. If the chain is being notarized, Notary Nodes need to update to the new parameters as well for the notarization to continue without disruption past the activation block.")]),a._v(" "),e("p",[a._v("Once CC is activated on a chain, do not change the startup script. If you do, that will create a new fork.")]),a._v(" "),e("p",[a._v("By default, "),e("code",[a._v("-ac_ccactivate=height")]),a._v(" uses "),e("code",[a._v("-ac_cc=2")]),a._v(" (If you "),e("router-link",{attrs:{to:"/basic-docs/installations/asset-chain-parameters.html"}},[a._v("recall")]),a._v(", "),e("code",[a._v("-ac_cc")]),a._v(" is the parameter that defines the cluster of chains which can have cross chain Custom Consensus modules). But, you cant add -ac_cc=2 to the command line, as this will create a new fork. "),e("code",[a._v("-ac_ccactivate=height")]),a._v(" will take care of those things automagically.")],1),a._v(" "),e("p",[a._v("Also, addressindex=1 and spentindex=1 need to be in the configuration file, but the daemon will take care of setting this up when "),e("code",[a._v("-ac_ccactivate=height")]),a._v(" is included as a command-line parameter.")])])},[],!1,null,null,null);t.default=o.exports}}]);