(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{276:function(e,a,t){"use strict";t.r(a);var s=t(2),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"encrypt-komodo-s-wallet-dat-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-komodo-s-wallet-dat-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Encrypt Komodo's "),t("strong",[e._v("wallet.dat")]),e._v(" File")]),e._v(" "),t("h2",{attrs:{id:"how-to-encrypt-komodo-wallet-dat-with-password-to-make-it-more-secure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-encrypt-komodo-wallet-dat-with-password-to-make-it-more-secure","aria-hidden":"true"}},[e._v("#")]),e._v(" How to Encrypt Komodo "),t("strong",[e._v("wallet.dat")]),e._v(" with password to make it more secure?")]),e._v(" "),t("p",[e._v("Komodo supports "),t("code",[e._v("encryptwallet")]),e._v(" RPC to secure your "),t("strong",[e._v("wallet.dat")]),e._v(" file. After encrypting your wallet, you need to unlock it before making any transaction or dumping privkey of an address. This prevents unauthorized access to the coins stored in your wallet.")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements:")]),e._v(" "),t("ul",[t("li",[e._v("Native wallet daemon for KMD and/or any "),t("code",[e._v("-ac_public")]),e._v(" chains. (This feature is not applicable to SPV or Lite mode)")])]),e._v(" "),t("h3",{attrs:{id:"precautions-best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#precautions-best-practices","aria-hidden":"true"}},[e._v("#")]),e._v(" Precautions / Best Practices:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Don't encrypt any wallet with private addresses ("),t("code",[e._v("z-addresses")]),e._v("). Transfer your funds from a private z address to transparent R address first ("),t("a",{attrs:{href:"https://support.komodoplatform.com/en/support/solutions/articles/29000026955-perform-z-transactions-using-agama",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Don't forget your password. If you do, you will lose access to your funds.")])]),e._v(" "),t("li",[t("p",[e._v("Use a strong password containing letters (UPPERCASE, lowercase), numbers, special characters.")])]),e._v(" "),t("li",[t("p",[e._v("Always keep a backup or write down your password, passphrase and private keys in a safe place.")])]),e._v(" "),t("li",[t("p",[e._v("Always back up your "),t("strong",[e._v("wallet.dat")]),e._v(" in a safe place. It is recommended to do it after every send transaction.")])]),e._v(" "),t("li",[t("p",[e._v("You are responsible for your funds, not the developers. Always "),t("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("ask"),t("OutboundLink")],1),e._v(" when in doubt.")])])]),e._v(" "),t("h2",{attrs:{id:"encrypt-your-wallet-with-a-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-your-wallet-with-a-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Encrypt your Wallet with a Password")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("encryptwallet")]),e._v(" command will encrypt your "),t("strong",[e._v("wallet.dat")]),e._v(" with a password that you provide. "),t("strong",[e._v("Usage:")]),e._v(" "),t("code",[e._v('encryptwallet "password"')])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli encryptwallet Y0urSecureP@$"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$phras3")]),e._v("\n")])])]),t("p",[e._v("Issuing this command will return you the following output and shut down the daemon.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("wallet encrypted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Komodo server stopping, restart to run with encrypted wallet. The keypool has been flushed, you need to "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" a new backup.\n")])])]),t("p",[e._v("Now, start your native coin wallet again. Your "),t("strong",[e._v("wallet.dat")]),e._v(" is already encrypted. Most of the wallet features will now require you to unlock the wallet first before performing those actions. You will get output like below:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("error code: -13\nerror message:\nError: Please enter the wallet passphrase with walletpassphrase first.\n")])])]),t("p",[e._v("That means, without unlocking your wallet, you can't send funds or dump private key of any address that the wallet holds. Follow the next step for commands to unlock your wallet.")]),e._v(" "),t("h2",{attrs:{id:"unlock-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unlock-wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" Unlock Wallet")]),e._v(" "),t("p",[e._v("You need to use "),t("code",[e._v("walletpassphrase")]),e._v(" command with your password and timeout time to unlock your wallet for sending funds or some other actions. Use the "),t("code",[e._v("timeout")]),e._v(" option to set a timer for how many seconds the wallet will be unlocked before locking automatically. "),t("strong",[e._v("Usage:")]),e._v(" "),t("code",[e._v('walletpassphrase "passphrase" timeout')])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli walletpassphrase Y0urSecureP@$"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$phras3")]),e._v(" 60\n")])])]),t("p",[e._v("This above command will unlock your wallet for 60 seconds and will "),t("strong",[e._v("NOT")]),e._v(" return any output in your console. You can perform any actions with your wallet without any restrictions in the next 60 seconds. Change the timeout numbers to your liking.")]),e._v(" "),t("h2",{attrs:{id:"lock-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lock-wallet","aria-hidden":"true"}},[e._v("#")]),e._v(" Lock Wallet")]),e._v(" "),t("p",[e._v("If you want to lock the wallet before the "),t("code",[e._v("timeout")]),e._v(" specified is reached, use the command "),t("code",[e._v("walletlock")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli walletlock\n")])])]),t("h2",{attrs:{id:"how-to-change-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-password","aria-hidden":"true"}},[e._v("#")]),e._v(" How to change password?")]),e._v(" "),t("p",[t("strong",[e._v("Usage:")]),e._v(" "),t("code",[e._v('walletpassphrasechange "oldpassphrase" "newpassphrase"')])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli walletpassphrasechange Y0urSecureP@$"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$phras3")]),e._v(" YourNewSecur3Pa$"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$phr@se")]),e._v("\n")])])]),t("p",[e._v("After issuing this command, there will be no output in your teminal console. But, "),t("code",[e._v("debug.log")]),e._v(" will print a similar line:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("2018-12-05 15:39:38 Wallet passphrase changed to an nDeriveIterations of 299405\n")])])]),t("p",[e._v("This means your password has been changed successfully. Use the new password for unlocking your wallet from this time onward until you change it again.")])])},[],!1,null,null,null);a.default=r.exports}}]);