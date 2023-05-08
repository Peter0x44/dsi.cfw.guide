import{_ as l,o as c,c as d,a as e,d as o,b as t,w as r,e as i,r as a}from"./app.5fbb2fce.js";const h={},u=i('<p>\u8FD9\u4E2A\u9875\u9762\u7528\u4E8E\u5907\u4EFDNAND\uFF0C\u5B83\u662FDSi\u5185\u90E8\u6570\u636E\u7684\u62F7\u8D1D\u3002 It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Make sure the SD card has at least 250MB of free space, or else you&#39;ll run into an error message in dumpTool.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.</p></div><h2 id="\u7B2C\u4E00\u8282-sd-\u5361\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u8282-sd-\u5361\u8BBE\u7F6E" aria-hidden="true">#</a> \u7B2C\u4E00\u8282 - SD \u5361\u8BBE\u7F6E</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you have already downloaded dumpTool from another section of this guide, you can skip this section.</p></div>',5),p={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[o("\u5C06 "),e("code",null,"dumpTool.nds"),o(" \u653E\u7F6E\u5728\u4F60SD\u5361\u7684\u4EFB\u610F\u4F4D\u7F6E")],-1),m=i('<h2 id="\u7B2C\u4E8C\u8282\u2014\u2014\u63D0\u53D6nand" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u8282\u2014\u2014\u63D0\u53D6nand" aria-hidden="true">#</a> \u7B2C\u4E8C\u8282\u2014\u2014\u63D0\u53D6NAND</h2><ol><li>\u901A\u8FC7 TWiLight \u83DC\u5355++ \u542F\u52A8 <code>dumpTool</code></li><li>\u70B9\u51FBNintendo DSi\u4E0A\u7684 <kbd class="face">A</kbd> \u952E\u6765\u5F00\u59CB\u63D0\u53D6\u4F60\u7684 NAND <ul><li>NAND\u5907\u4EFD\u4E00\u822C\u9700\u89817\u5206\u949F\u5DE6\u53F3</li></ul></li><li>\u5F53NAND\u5907\u4EFD\u5B8C\u6210\u540E\uFF0C\u6309 <kbd>START</kbd> \u6309\u94AE\u9000\u51FA\u63D0\u53D6\u5DE5\u5177</li><li>\u5173\u95EDDSi\u5E76\u5C06SD\u5361\u63D2\u5165\u60A8\u7684\u7535\u8111\u4E2D</li><li>\u5C06\u6B64\u5907\u4EFD\u5B58\u50A8\u5728\u4EFB\u4F55\u5B89\u5168\u4E14\u4E0D\u4F1A\u4E22\u5931\u7684\u5730\u65B9 <ul><li>\u5982\u679C\u53EF\u80FD\uFF0C\u8BF7\u5728\u4E0D\u540C\u7684\u5B58\u50A8\u8BBE\u5907\u4E0A\u505A\u591A\u4E2A\u5907\u4EFD</li><li>\u5982\u679C\u4F60\u5728\u5176\u4ED6\u5730\u65B9\u5B8C\u6210\u4E86\u5907\u4EFD\uFF0C\u4F60\u53EF\u4EE5\u5728SD\u5361\u4E2D\u5C06\u5176\u5220\u9664</li></ul></li></ol>',2),f={class:"custom-container warning"},b=e("p",{class:"custom-container-title"},"WARNING",-1),N=e("code",null,"nand.bin",-1),T=e("code",null,"nand.bin.sha1",-1),k=e("code",null,"nand.bin",-1),g={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},D={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"TIP",-1);function v(A,I){const n=a("ExternalLinkIcon"),s=a("RouterLink");return c(),d("div",null,[u,e("ol",null,[e("li",null,[o("\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684 "),e("a",p,[o("dumpTool"),t(n)])]),_]),m,e("div",f,[b,e("p",null,[o("The SHA1 hash of the "),N,o(" will not match the hash stored in "),T,o(". This is because dumpTool adds additional data known as a no$gba footer to the "),k,o(" file after the SHA1 hash is calculated. You can use the "),e("a",g,[o("hiyaCFW Helper"),t(n)]),o(" to create a copy without the footer.")])]),e("div",D,[S,e("p",null,[o("Continue to "),t(s,{to:"/zh_CN/installing-unlaunch.html"},{default:r(()=>[o("Installing Unlaunch")]),_:1}),o(" (Optional)")])])])}var w=l(h,[["render",v],["__file","dumping-nand.html.vue"]]);export{w as default};
