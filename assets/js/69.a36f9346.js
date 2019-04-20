(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{255:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"chapter-11-oracles-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chapter-11-oracles-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 11 - Oracles Example")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/oracles.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracles CC"),e("OutboundLink")],1),t._v(" is an example where it ended up being simpler than I first expected, but at the same time a lot more powerful. It is one of the smaller CC, but it enables creation of an arbitrary number of data markets, in a performant way.")]),t._v(" "),e("p",[t._v("In order to gain the performance, some clever usage of special addresses was needed. It was a bit tricky to generate a special address to keep track of the latest data.")]),t._v(" "),e("p",[t._v("Let's back up to the beginning. Just what is an oracle? In this context it is something that puts data that is not on the blockchain, onto the blockchain. Since everything other than the transactions and blocks are not in the blockchain, there is a very large universe of data that can be oracle-ized. It can be literally anything, from the obvious like prices to specific results relative to an arbitrary description.")]),t._v(" "),e("p",[t._v("The most difficult issue about oracles is that they need to be trusted to various degree to provide accurate and timely data. The danger is that if a trusted node is used to write data to the blockchain, it creates a trust point and a single point of attack. Ultimately there is nothing that can ensure only valid data is written to the blockchain, so what is done is to reinforce good behavior via pay per datapoint. However, for critical data, higher level processing is needed that combines multiple data providers into a validated signal.")]),t._v(" "),e("p",[t._v("At the oracles CC level, it is enough that there is financial incentive to provide good data. Also it is needed to allow multiple vendors for each data that is required and to enable efficient ways to update and query the data.")]),t._v(" "),e("h2",{attrs:{id:"the-following-are-the-rpc-calls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-following-are-the-rpc-calls","aria-hidden":"true"}},[t._v("#")]),t._v(" The following are the rpc calls:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("oraclescreate name description "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v("\noracleslist\noraclesinfo oracletxid\noraclesregister oracletxid datafee\noraclessubscribe oracletxid publisher amount\noraclesdata oracletxid hexstr\noraclessamples oracletxid batonutxo num\n")])])]),e("p",[t._v("The first step is to create a specific data description with "),e("code",[t._v("oraclescreate")]),t._v(", which also defines the format of the binary data. This creates an oracletxid, which is used in the other rpc calls. "),e("code",[t._v("name")]),t._v(" and "),e("code",[t._v("description")]),t._v(" are just arbitrary strings, with name preferably being a short name used to access the data. The format is a string comprised of a single character per data element:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("256 char string\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("65536 char string\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("256 binary data\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("65536 binary data\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 1 byte signed little endian number, "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),t._v(" unsigned\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 2 byte signed little endian number, "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'T'")]),t._v(" unsigned\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 4 byte signed little endian number, "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I'")]),t._v(" unsigned\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'l'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 8 byte signed little endian number, "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L'")]),t._v(" unsigned\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h'")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 32 byte "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),t._v("\n")])])]),e("p",[t._v("For example, if the datapoint is comprised of a "),e("code",[t._v("4byte")]),t._v(" timestamp and an "),e("code",[t._v("8byte")]),t._v(" number the format string would be: "),e("code",[t._v('"IL"')])]),t._v(" "),e("p",[e("code",[t._v("oracleslist")]),t._v(" displays a list of all the "),e("code",[t._v("oraclestxid")]),t._v(" and "),e("code",[t._v("oraclesinfo")]),t._v(" displays information about the specific "),e("code",[t._v("oracletxid")]),t._v(". Each "),e("code",[t._v("oracletxid")]),t._v(" deterministically generates a marker address and a small amount is sent to that address to mark a transaction's relation to the "),e("code",[t._v("oracltxid")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4895f631316a649e216153aee7a574bd281686265dc4e8d37597f72353facac3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BTCUSD"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coindeskpricedata"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"format"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"marker"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RVqJCSrdBm1gYJZS1h7dgtHioA5TEYzNRk"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registered"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"publisher"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"02ebc786cb83de8dc3922ab83c21f3f8a2f3216940c3bf9da43ce39e2a3a882c92"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baton"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RKY4zmHJZ5mNtf6tfKE5VMsKoV71Euej3i"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"batontxid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4de10b01242ce1a5e29d5fbb03098b4519976879e05ad0458ef7174ed9127f18"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lifetime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.50000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"funds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.01000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datafee"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.01000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("A "),e("code",[t._v("data publisher")]),t._v(" needs to register a "),e("code",[t._v("datafee")]),t._v(" and their "),e("code",[t._v("pubkey")]),t._v(" for a specific "),e("code",[t._v("oracletxid")]),t._v(". "),e("code",[t._v("datafee")]),t._v(" needs to be at least as big as a "),e("code",[t._v("txfee")]),t._v(". Using "),e("code",[t._v("oraclesregister")]),t._v(" the current "),e("code",[t._v("datafee")]),t._v(" can be updated so a "),e("code",[t._v("publisher")]),t._v(" can adapt to market conditions. Once registered, subscribers can prepay for some number of datapoints to a specific "),e("code",[t._v("publisher")]),t._v(" using the "),e("code",[t._v("oraclessubscribe")]),t._v(" rpc. At first, it is likely that the "),e("code",[t._v("publisher")]),t._v(" would pay themselves to enable the posting of initial data points so the potential subscribers can evaluate the quality and consistency of the data.")]),t._v(" "),e("p",[t._v("The one final rpc is "),e("code",[t._v("oraclessamples")]),t._v(", which returns the most recent samples of data from a specific "),e("code",[t._v("publisher")]),t._v(". In order to have a performant solution to track all the potential data streams from all the publishers for all the "),e("code",[t._v("oracletxid")]),t._v(", a baton "),e("code",[t._v("utxo")]),t._v(" is used. This is an output sent to a specific address and expected to have just a single "),e("code",[t._v("utxo")]),t._v(" at any given time to allow for direct lookup. "),e("code",[t._v("oraclessamples")]),t._v(" requires a starting "),e("code",[t._v("txid")]),t._v(" to use and with each datapoint having the prior "),e("code",[t._v("batontxid")]),t._v(", there is a reverse linked list to traverse the most recent data.")]),t._v(" "),e("h2",{attrs:{id:"vin-vout-allocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vin-vout-allocation","aria-hidden":"true"}},[t._v("#")]),t._v(" VIN/VOUT allocation")]),t._v(" "),e("p",[t._v("In order to implement this, the following vin/vout contraints are used:")]),t._v(" "),e("h3",{attrs:{id:"create"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[t._v("#")]),t._v(" create")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("vins.*: normal inputs\nvout.0: txfee tag to oracle normal address\nvout.1: change, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" any\nvout.n-1: opreturn with name and description and "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data\n")])])]),e("h3",{attrs:{id:"register"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register","aria-hidden":"true"}},[t._v("#")]),t._v(" register")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("vins.*: normal inputs\nvout.0: txfee tag to normal marker address\nvout.1: baton CC utxo\nvout.2: change, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" any\nvout.n-1: opreturn with oracletxid, pubkey and price per data point\n")])])]),e("h3",{attrs:{id:"subscribe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscribe","aria-hidden":"true"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("vins.*: normal inputs\nvout.0: subscription fee to publishers CC address\nvout.1: change, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" any\nvout.n-1: opreturn with oracletxid, registered provider's pubkey, amount\n")])])]),e("h3",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v(" data")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("vin.0: normal input\nvin.1: baton CC utxo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most of the time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvin.2+: subscription or data vout.0\nvout.0: change to publishers CC address\nvout.1: baton CC utxo\nvout.2: payment "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" dataprovider\nvout.3: change, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" any\nvout.n-1: opreturn with oracletxid, prevbatontxid and data "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" proper "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("oraclesdata")]),t._v(" transaction is the most complex as it needs to find and spend the baton "),e("code",[t._v("utxo")]),t._v(", use the correct "),e("code",[t._v("datafee")]),t._v(" and spend funds from the locked subscription funds. With the above, the oracles CC is complete and allows the creations of massively parallel data streams from multiple vendors that uses free market feedback via payments, ie. poorly performing providers wont get renewals.")]),t._v(" "),e("p",[t._v("I expect that at first, the data providers will just be dapp developers deploying a working system including the required data, but its structure allows open market competition. Of course, specific dapps could restrict themselves to using only publishers from a whitelist of pubkeys. The potential usecases for oracles CC is quite varied and limited only by the imagination.")])])},[],!1,null,null,null);a.default=r.exports}}]);