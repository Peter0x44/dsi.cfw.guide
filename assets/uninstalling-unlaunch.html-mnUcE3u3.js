import{_ as a,r as i,o as s,c as u,a as n,d as t,b as l,w as o}from"./app-ADwmQ4ft.js";const c={},r=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,[n("strong",null,"正在安装或卸载Unlaunch，可能会随机是你的机器变砖！ 你已被警告！")])],-1),h=n("p",null,[n("strong",null,"警告:"),t(" 卸载Unlaunch可能会砖掉你的 DSi 。 这里有一些关于您可能想要卸载Unlaunch，但并不需要卸载Unlaunch就可解决问题的例子。")],-1),d=n("strong",null,"The Unlaunch Background is scary:",-1),_=n("strong",null,"没有开机界面，且音乐丢失：",-1),g=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"减少变砖的几率， 请确保您的系统NAND中的没有安装任何非合法的 DSiWare(不包括HiyaCFW 提供的 SDNAND 重定向)， 或以其他方式篡改系统文件。")],-1),N=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[t("When uninstalling Unlaunch, you should "),n("strong",null,"NOT"),t(" use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Please see below for information on uninstalling it properly.")])],-1),m=n("p",null,"If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.",-1);function p(f,b){const e=i("RouterLink");return s(),u("div",null,[r,h,n("ul",null,[n("li",null,[d,t(),l(e,{to:"/zh_CN/installing-unlaunch.html"},{default:o(()=>[t("Reinstall Unlaunch")]),_:1}),t(" using the new instructions. 它们现在包含关于如何改变背景的说明")]),n("li",null,[_,t(" 使用 "),l(e,{to:"/zh_CN/troubleshooting.html#unlaunch"},{default:o(()=>[t("新操作说明")]),_:1}),t(" 重新安装。 它们现在包含缓解此问题的说明")])]),g,N,n("p",null,[t("Once you have reviewed the above information, follow the "),l(e,{to:"/zh_CN/dumping-nand.html"},{default:o(()=>[t("Dumping NAND")]),_:1}),t(" instructions to make a new NAND backup, then proceed to "),l(e,{to:"/zh_CN/restoring-nand.html"},{default:o(()=>[t("Restoring a NAND Backup")]),_:1}),t(". This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.")]),m])}const y=a(c,[["render",p],["__file","uninstalling-unlaunch.html.vue"]]);export{y as default};
