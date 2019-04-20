(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{248:function(t,a,e){"use strict";e.r(a);var o=e(2),i=Object(o.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"chapter-05-cc-validation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chapter-05-cc-validation","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 05 - CC Validation")]),t._v(" "),e("p",[t._v('CC validation is what its all about, not the "hokey pokey"!')]),t._v(" "),e("p",[t._v("Each CC must have its own validation function and when the blockchain is validating a transaction, it will call the CC validation code. It is totally up to the CC validation whether to validate it or not.")]),t._v(" "),e("p",[t._v("Any set of rules that you can think of and implement can be part of the validation. Make sure that there is no ambiguity! Make sure that all transactions that should be rejected are in fact rejected.")]),t._v(" "),e("p",[t._v("Also, make sure any rpc calls that create a CC transaction dont create anything that doesnt validate.")]),t._v(" "),e("p",[t._v("Really, that is all that needs to be said about validation that is generic, as it is just a concept and gets a dedicated function to determine if a transaction is valid or not.")]),t._v(" "),e("p",[t._v("For most of the initial CC contracts, I made a function code for various functions of the CC contract and add that along with the creation txid. That enables the validation of the transactions much easier, as the required data is right there in the opreturn.")]),t._v(" "),e("p",[t._v("You do need to be careful not to cause a deadlock as the CC validation code is called while already locked in the main loop of the bitcoin protocol. As long as the provided CC contracts are used as models, you should keep out of deadlock troubles.")])])},[],!1,null,null,null);a.default=i.exports}}]);