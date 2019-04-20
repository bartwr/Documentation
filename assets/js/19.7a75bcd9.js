(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{233:function(e,s,a){"use strict";a.r(s);var t=a(2),r=Object(t.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"custom-consensus-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-consensus-instructions","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Consensus Instructions")]),e._v(" "),a("h2",{attrs:{id:"understanding-the-types-of-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-types-of-addresses","aria-hidden":"true"}},[e._v("#")]),e._v(" Understanding the Types of Addresses")]),e._v(" "),a("p",[e._v("The method of transferring contract-related assets is often slightly different than the typical asset-chain transaction.")]),e._v(" "),a("p",[e._v("When making a transaction on an asset chain, you typically only deal with a sending address and a receiving address. To move coins, you might use methods such as "),a("code",[e._v("sendtoaddress")]),e._v(" or "),a("code",[e._v("z_sendmany")]),e._v(".")]),e._v(" "),a("p",[e._v("When using Custom Consensus, however, there are a few new types of addresses to keep in mind when working with transactions. It is not necessary to fully understand all of the address types, but basic knowledge about a few addresses will be necessary.")]),e._v(" "),a("h2",{attrs:{id:"creating-and-launching-with-a-pubkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-launching-with-a-pubkey","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating and Launching With a Pubkey")]),e._v(" "),a("p",[e._v("The first address you must understand is the pubkey. Any user using a Custom Consensus based contract must have a pubkey indicated in their daemon. This forms the basis for all addresses related to various contract modules.")]),e._v(" "),a("p",[e._v("Typically, each contract module will take the pubkey, combine it with a unique and contract-specific number called the "),a("code",[e._v("EVAL code")]),e._v(", and create a new "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Base58Check_encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("Base58Check"),a("OutboundLink")],1),e._v(" encoded address from it. This "),a("code",[e._v("Base58Check")]),e._v(" encoded address will be the address you use for interacting with the specific Custom Consensus-based contract.")]),e._v(" "),a("p",[e._v("To get a pubkey, launch the chain with the normal launch parameters and execute the "),a("router-link",{attrs:{to:"/basic-docs/komodo-api/wallet.html#getnewaddress"}},[e._v("getnewaddress")]),e._v(" rpc call.")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD getnewaddress\n")])])]),a("p",[e._v("This will return a new address:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("DO_NOT_USE_ADDRESSgg2ionaes1J5L786\n")])])]),a("p",[e._v("Now, execute the "),a("router-link",{attrs:{to:"/basic-docs/komodo-api/util.html#validateaddress"}},[e._v("validateaddress")]),e._v(" RPC.")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD validateaddress DO_NOT_USE_ADDRESSgg2ionaes1J5L786\n")])])]),a("p",[e._v("This will return a json object with many properties. In the properties you will see:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pubkey"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756"')]),e._v("\n")])])]),a("p",[e._v("This is will be your contract pubkey; you must now indicate it to the daemon.")]),e._v(" "),a("p",[e._v("To do this, first stop the daemon.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD stop\n")])])]),a("p",[e._v("Then relaunch your daemon using the required parameters, and make sure to include your pubkey as an additional parameter. For example:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD -ac_supply"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777777 -ac_cc"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777 -pubkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756\n")])])]),a("h2",{attrs:{id:"other-types-of-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-types-of-addresses","aria-hidden":"true"}},[e._v("#")]),e._v(" Other Types of Addresses")]),e._v(" "),a("p",[e._v("The daemon will now use the above pubkey as the basis for all addresses used for the different contract modules.")]),e._v(" "),a("p",[e._v("To discover the addresses the pubkey provides, you will typically use an "),a("code",[e._v("address")]),e._v(" related RPC from the list of available RPC calls of your chosen contract module. For example, "),a("code",[e._v("faucetaddress")]),e._v(" would return a response like this:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"FaucetCCaddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"R9zHrofhRbub7ER77B7NrVch3A63R39GuC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Faucetmarker"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RKQV4oYs4rvxAWx1J43VnT73rSTVtUeckk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"GatewaysPubkey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"03ea9c062b9652d8eff34879b504eda0717895d27597aaeb60347d65eed96ccb40"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"FaucetCCassets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RQ3ZQycSBM5MPPEopxoEC6R7VLRo1Fmk6f"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"myCCaddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RReGLfH2MTrkeLSepkVy5vnQPE29g7KofS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"myaddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RJYiWn3FRCSSLf9Pe5RJcbrKQYosaMburP"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("In this list, the "),a("code",[e._v("FaucetCCaddress")]),e._v(" is the address that corresponds to the default "),a("code",[e._v("Faucet")]),e._v(" contract. "),a("code",[e._v("myCCaddress")]),e._v(" is the address your node uses for interacting with the "),a("code",[e._v("Faucet")]),e._v(" contract; it is based on the combination of your pubkey and the "),a("code",[e._v("Faucet")]),e._v(" contract's unique "),a("code",[e._v("EVAL")]),e._v(" code (which you do not typically see).")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("myaddress")]),e._v(" property is the unmodified address that corresponds to your pubkey.")]),e._v(" "),a("p",[e._v("The use-cases of the different addresses depends on the functionality in question, and the desired outcome.")]),e._v(" "),a("p",[e._v("Also, each contract module has its own RPC calls for moving coins or tokens. For example, if you are dealing with the "),a("code",[e._v("tokens")]),e._v(" contract, you may use the "),a("router-link",{attrs:{to:"/basic-docs/customconsensus/tokens.html#tokentransfer"}},[e._v("tokentransfer")]),e._v(" method.")],1)])},[],!1,null,null,null);s.default=r.exports}}]);