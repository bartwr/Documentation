(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{246:function(t,e,a){"use strict";a.r(e);var s=a(2),o=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-01-op-checkcryptocondition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-01-op-checkcryptocondition","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 01 - OP_CHECKCRYPTOCONDITION")]),t._v(" "),a("p",[t._v('In the prior chapter the utxo was explained. However, the specific mechanism used to send a payment was not explained. Contrary to what most people might think, on the blockchain there are not entries that say "pay X amount to address". Instead what exists is a bitcoin script that must be satisfied in order for the funds to be able to be spent.')]),t._v(" "),a("p",[t._v("Originally, there was the pay to pubkey script:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pubkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("checksig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("About as simple of a payment script that you can get. Basically the pubkey's signature is checked and if it is valid, you get to spend it. One problem satoshi realized was that with Quantum Computers such payment scripts are vulnerable! So, he made a way to have a cold address, ie. an address whose pubkey isnt known. At least it isnt known until it is spent, so it is only Quantum resistant prior to the first spend. This line of reasoning is why we have one time use addresses and a new change address for each transaction. Maybe in some ways, this is too forward thinking as it makes things a lot more confusing to use and easier to lose track of all the required private keys.")]),t._v(" "),a("p",[t._v("However, it is here to stay and its script is:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hash the pubkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pubkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verify "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),t._v(" matches"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("checksig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v('With this, the blockchain has what maps to "pay to address", just that the address is actually a base58 encoded (prefix + pubkeyhash). Hey, if it wasnt complicated, it would be easy!')]),t._v(" "),a("p",[t._v("In order to spend a "),a("code",[t._v("p2pkh")]),t._v(" (pay to pubkey hash) utxo, you need to divulge the pubkey in addition to having a valid signature. After the first spend from an address, its security is degraded to "),a("code",[t._v("p2pk")]),t._v(" (pay to pubkey) as its pubkey is now known. The net result is that each reused address takes 25 extra bytes on the blockchain, and that is why for addresses that are expected to be reused, I just use the p2pk script.")]),t._v(" "),a("p",[t._v("Originally, bitcoin allowed any type of script opcodes to be used directly. The problem was some of them caused problems and satoshi decided to disable them and only allow standard forms of payments. Thus the "),a("code",[t._v("p2pk")]),t._v(" and "),a("code",[t._v("p2pkh")]),t._v(' became 99%+ of bitcoin transactions. However, going from having a fully scriptable language that can create countless payment scripts (and bugs!), to having just 2 . . . well it was a "short term" limitation. It did last for some years but eventually a compromise '),a("code",[t._v("p2sh")]),t._v(" script was allowed to be standard. This is a pay to script hash, so it can have a standard format as the normal "),a("code",[t._v("p2pkh")]),t._v(", but have infinitely more flexibility.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hash the script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verify "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),t._v(" matches"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Wait, something is wrong! If it was just that, then anybody that found out what the required script (called redeemscript) was, they could just spend it. I forgot to say that the redeemscript is then used to determine if the payment can be spent or not. So you can have a normal "),a("code",[t._v("p2pk")]),t._v(" or "),a("code",[t._v("p2pkh")]),t._v(" redeemscript inside a "),a("code",[t._v("p2sh")]),t._v(" script.")]),t._v(" "),a("p",[t._v("OK, I know that just got really confusing. Let us have a more clear example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("redeemscript "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("- pay to pubkey\n")])])]),a("p",[a("code",[t._v("p2sh")]),t._v(" becomes the hash of the redeem script + the compares")]),t._v(" "),a("p",[t._v("So to spend it, you need to divulge the redeemscript, which in turn requires you to divulge the pubkey. Put it all together and the "),a("code",[t._v("p2sh")]),t._v(" mechanism verifies you not only had the correct redeemscript by comparing its hash, but that when the redeemscript is run, it is satisfied. In this case, that the pubkey's signature was valid.")]),t._v(" "),a("p",[t._v("If you are still following, there is some good news! "),a("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(" scripts are actually simpler than "),a("code",[t._v("p2sh")]),t._v(" scripts in some sense as there isnt this extra level of script inside a scripthash. "),a("a",{attrs:{href:"https://github.com/libscott",target:"_blank",rel:"noopener noreferrer"}},[t._v("@libscott"),a("OutboundLink")],1),t._v(" implemented the addition of "),a("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(" to the set of bitcoin opcodes and what it does is makes sure that a CryptoConditions script is properly signed.")]),t._v(" "),a("p",[t._v("Which gets us to the CryptoConditions specification, which is a monster of a "),a("a",{attrs:{href:"https://tools.ietf.org/html/draft-thomas-crypto-conditions-04",target:"_blank",rel:"noopener noreferrer"}},[t._v("IETF (Internet standards)"),a("OutboundLink")],1),t._v(" draft and has hundred(s) of pages of specification. I am sure you are happy to know that you dont really need to know about it much at all! Just know that you can create all sorts of cryptoconditions and its binary encoding can be used in a bitcoin utxo. If the standard CC contracts dont have the power you need, it is always possible to expand on it. So far, most all the CC contracts only need the power of a 1of1 CC script, which is 1 signature combined with custom constraints. The realtime payment channels CC is the only one of the reference CC contracts so far that didnt fit into this model, it needed a 1of2 CC script.")]),t._v(" "),a("p",[t._v("The best part is that all these opcode level things are not needed at all. I just wanted to explain it for those that need to know all the details of everything.")])])},[],!1,null,null,null);e.default=o.exports}}]);