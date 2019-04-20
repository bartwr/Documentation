(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{303:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"setting-up-a-full-relay-fr-node-for-mmv1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-full-relay-fr-node-for-mmv1","aria-hidden":"true"}},[t._v("#")]),t._v(" Setting up a Full Relay(FR) Node for mmV1")]),t._v(" "),s("h2",{attrs:{id:"what-is-a-full-relay-fr-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-full-relay-fr-node","aria-hidden":"true"}},[t._v("#")]),t._v(" What is a Full Relay (FR) node?")]),t._v(" "),s("p",[t._v("Full Relay nodes (FR) create the p2p network & only relays data-packets for BarterDEX and allows ordermatching to happen. They don't trade. FR nodes never touch any funds of any sort and are equivalent to a bulletin board. There is no need to fund the wallet of a FR node. Bob and Alice connect to the FR network. Bob places orders and Alice fills the orders. It is ideal to have at least 3 FR nodes in each netid.")]),t._v(" "),s("h2",{attrs:{id:"how-to-setup-an-fr-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-setup-an-fr-node","aria-hidden":"true"}},[t._v("#")]),t._v(" How to setup an FR node?")]),t._v(" "),s("p",[t._v("A FR node is just "),s("code",[t._v("marketmaker")]),t._v(" launched with "),s("code",[t._v("client:0")]),t._v(" parameter. Very easy to setup, just follow along without skipping any steps.")]),t._v(" "),s("h3",{attrs:{id:"install-the-following-dependency-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-following-dependency-packages","aria-hidden":"true"}},[t._v("#")]),t._v(" Install the following dependency packages:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmake "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" libcurl4-openssl-dev build-essential\n")])])]),s("h3",{attrs:{id:"install-nanomsg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-nanomsg","aria-hidden":"true"}},[t._v("#")]),t._v(" Install "),s("code",[t._v("nanomsg")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nanomsg/nanomsg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" nanomsg\ncmake "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -DNN_TESTS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OFF -DNN_ENABLE_DOC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OFF\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ldconfig\n")])])]),s("h3",{attrs:{id:"clone-the-supernet-repo-from-github-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-supernet-repo-from-github-install","aria-hidden":"true"}},[t._v("#")]),t._v(" Clone the SuperNET repo from github & Install:")]),t._v(" "),s("p",[t._v("Clone the repo, checkout "),s("code",[t._v("dev")]),t._v(" branch for latest and install.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/jl777/SuperNET\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/SuperNET/iguana/exchanges\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n./install\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" passphrase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/dexscripts/passphrase\n")])])]),s("h3",{attrs:{id:"edit-the-client-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-client-script","aria-hidden":"true"}},[t._v("#")]),t._v(" Edit the "),s("code",[t._v("client")]),t._v(" script")]),t._v(" "),s("p",[t._v("The client script inside the directory "),s("code",[t._v("~/SuperNET/iguana/dexscripts")]),t._v(" should look as follows to be running a FR node.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" passphrase\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" coins\n./stop\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/exchanges/updateprices "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("./updateprices\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n./m_mm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pkill")]),t._v(" -15 marketmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstdbuf -oL "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" ./marketmaker "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"gui\\":\\"nogui\\",\\"client\\":0, \\"userhome\\":\\"/${HOME#"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}\\", \\"passphrase\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$passphrase")]),t._v('\\", \\"coins\\":'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$coins")]),t._v('}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("p",[t._v("barterDEX is now installed in your system.")]),t._v(" "),s("h3",{attrs:{id:"starting-fr-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-fr-node","aria-hidden":"true"}},[t._v("#")]),t._v(" Starting FR node")]),t._v(" "),s("p",[t._v("Every time you want to run a Full Relay node (FR), open a new terminal window and type the following:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/SuperNET/iguana/dexscripts\n./client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("h2",{attrs:{id:"how-to-setup-fr-nodes-for-different-netids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-setup-fr-nodes-for-different-netids","aria-hidden":"true"}},[t._v("#")]),t._v(" How to setup FR nodes for different netids?")]),t._v(" "),s("p",[t._v("You need to edit the value of "),s("code",[t._v("netid")]),t._v(" in the "),s("code",[t._v("client")]),t._v(" script along with "),s("code",[t._v("client:0")]),t._v(" parameter.")]),t._v(" "),s("h3",{attrs:{id:"client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("client")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" passphrase\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" coins\n./stop\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/exchanges/updateprices "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("./updateprices\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n./m_mm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pkill")]),t._v(" -15 marketmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstdbuf -oL "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" ./marketmaker "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"gui\\":\\"nogui\\",\\"client\\":0,\\"netid\\":1024, \\"userhome\\":\\"/${HOME#"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}\\", \\"passphrase\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$passphrase")]),t._v('\\", \\"coins\\":'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$coins")]),t._v('}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("h3",{attrs:{id:"stopping-a-fr-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopping-a-fr-node","aria-hidden":"true"}},[t._v("#")]),t._v(" Stopping a FR node")]),t._v(" "),s("p",[t._v("Just use the following command in any terminal session to stop marketmaker. This will stop the running FR node.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pkill")]),t._v(" -15 marketmaker\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);