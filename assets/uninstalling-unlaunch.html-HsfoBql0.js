import{_ as e,r as c,o as s,c as u,a as n,b as a,w as o,d as t}from"./app-ADwmQ4ft.js";const i={},r=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,[n("strong",null,"Unlaunchのインストール・アンインストールでは本体がランダムにブリック（文鎮化）することがあります！ 警告しましたよ！")])],-1),h=n("p",null,"**警告：**Unlaunchのアンインストールにより、お使いのDSiがブリックする可能性があります。 Unlaunchをアンインストールしたくても、そうせずに済む場合がいくつかあります。例えば：",-1),_=n("strong",null,"Unlaunchの背景が怖い：",-1),d=n("strong",null,"Unlaunchインストール後、Unlaunchや本体に問題が起きている：",-1),N=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"ブリックの可能性を減らすために、NANDバックアップ上に不正なDSiウェアがインストールされていないか（hiyaCFWによるSD NANDリダイレクトは除く）、システムファイルが改ざんされていないかを確認してください。")],-1),m=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[t("Unlaunchを削除するとき、本体上でUnlaunch付属のアンインストーラを"),n("strong",null,"使ってはいけません"),t("。本体がブリックするおそれがあります。 正しくアンインストールする方法については、以下をご覧ください。")])],-1),p=n("p",null,"no$gbaを使用できない場合や、no$gbaでUnlaunchをアンインストール後にエラーが発生した場合は、Unlaunchインストール以前のNANDバックアップをフラッシュすることも可能です。しかし、以前Unlaunch含んでいたNANDバックアップをまず使ってみるのをお勧めします。 UnlaunchはアンインストールされてもNANDにno$gbaフッターを埋め込んだままなので、上記操作によって、Hardmodが必要となるブリックの場合も修復が格段に簡単になるためです。",-1);function g(U,D){const l=c("RouterLink");return s(),u("div",null,[r,h,n("ul",null,[n("li",null,[_,a(l,{to:"/ja_JP/installing-unlaunch.html"},{default:o(()=>[t("Unlaunchの再インストール")]),_:1}),t("で解決します。 背景を変更する手順も紹介されています")]),n("li",null,[d,a(l,{to:"/ja_JP/troubleshooting.html#unlaunch"},{default:o(()=>[t("トラブルシューティング")]),_:1}),t("ページに、問題解決に役立つ情報があります")])]),N,m,n("p",null,[t("Once you have reviewed the above information, follow the "),a(l,{to:"/ja_JP/dumping-nand.html"},{default:o(()=>[t("Dumping NAND")]),_:1}),t(" instructions to make a new NAND backup, then proceed to "),a(l,{to:"/ja_JP/restoring-nand.html"},{default:o(()=>[t("Restoring a NAND Backup")]),_:1}),t(". これにより、NANDバックアップからUnlaunchをアンインストールし、本体に書き込むことができます。")]),p])}const A=e(i,[["render",g],["__file","uninstalling-unlaunch.html.vue"]]);export{A as default};