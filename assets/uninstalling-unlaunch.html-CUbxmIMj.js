import{_ as l,r as i,o as s,c as u,a as n,d as e,b as a,w as t}from"./app-ADwmQ4ft.js";const c={},r=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,[n("strong",null,"Instalacja lub odinstalowanie Unlaunch może losowo zablokować konsolę! Zostałeś ostrzeżony!")])],-1),h=n("p",null,[n("strong",null,"OSTRZEŻENIE:"),e(" Odinstalowanie może zablokować Twój Nintendo DSi. Oto kilka przypadków powodów, dla których możesz chcieć odinstalować Unlaunch, ale z rozwiązaniami które nie wymagają odinstalowania.")],-1),d=n("strong",null,"The Unlaunch Background is scary:",-1),m=n("strong",null,"I'm having an issue with Unlaunch or my console after installing it:",-1),p=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"Zmniejszenie szans na zablokowanie, upewnij się, że nie zainstalowałeś żadnych nielegalnych DSiWare do twojego systemu NAND (przekierowanie SDNAND dostarczone przez hiyaCFW nie liczy się), lub w inny sposób manipulowałeś plikami systemowymi.")],-1),g=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[e("When uninstalling Unlaunch, you should "),n("strong",null,"NOT"),e(" use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Please see below for information on uninstalling it properly.")])],-1),w=n("p",null,"If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.",-1);function _(y,N){const o=i("RouterLink");return s(),u("div",null,[r,h,n("ul",null,[n("li",null,[d,e(),a(o,{to:"/pl_PL/installing-unlaunch.html"},{default:t(()=>[e("Reinstall Unlaunch")]),_:1}),e(" using the new instructions. Obecnie zawierają instrukcje dotyczące zmiany tła")]),n("li",null,[m,e(" The "),a(o,{to:"/pl_PL/troubleshooting.html#unlaunch"},{default:t(()=>[e("Troubleshooting")]),_:1}),e(" page will explain how to fix many issues you may have")])]),p,g,n("p",null,[e("Once you have reviewed the above information, follow the "),a(o,{to:"/pl_PL/dumping-nand.html"},{default:t(()=>[e("Dumping NAND")]),_:1}),e(" instructions to make a new NAND backup, then proceed to "),a(o,{to:"/pl_PL/restoring-nand.html"},{default:t(()=>[e("Restoring a NAND Backup")]),_:1}),e(". This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.")]),w])}const k=l(c,[["render",_],["__file","uninstalling-unlaunch.html.vue"]]);export{k as default};