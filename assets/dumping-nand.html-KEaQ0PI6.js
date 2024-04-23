import{_ as i,r as o,o as d,c as r,a as e,d as t,b as a,w as c,e as l}from"./app-ADwmQ4ft.js";const h={},m=l('<p>Ez az oldal a NAND mentés készítéséről szól, ami egy másolata a Nintendo DSi belső tárolójának. Ez a hiyaCFW telepítéséhez és a NO$gba-hoz és melonDS-hez DSi emulációhoz használható.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Legyél biztos benne, hogy az SD kártyán van legalább 250MB szabad hely, egyébként hibáüzenetbe fogsz futni a dumpTool-ban.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Erősen ajánlott, hogy végrehajtsd ezt. Egy NAND mentés használható visszaállítási pontjaként a jövőben, ha brickelődne az eszközöd.</p></div><h2 id="i-resz-sd-kartya-telepites" tabindex="-1"><a class="header-anchor" href="#i-resz-sd-kartya-telepites" aria-hidden="true">#</a> I. rész - SD kártya telepítés</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Ha már letöltötted a dumpTool-t az útmutató egy másik része alapján, akkor átugorhatod ezt a részt.</p></div>',5),z={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[t("Rakd a "),e("code",null,"dumpTool.nds"),t("-t bárhova az SD kártyádon")],-1),p=l('<h2 id="ii-resz-a-nand-dumpolasa" tabindex="-1"><a class="header-anchor" href="#ii-resz-a-nand-dumpolasa" aria-hidden="true">#</a> II. rész - A NAND dumpolása</h2><ol><li>Indítsd el a <code>dumpTool</code>-t a TWiLight Menu++-on keresztül</li><li>Nyomd meg az <kbd class="face">A</kbd> gombot a Nintendo DSi-den a NAND dumpolás indításához <ul><li>Egy NAND mentés általában 7 percig tart</li></ul></li><li>Ha a NAND mentés kész, nyomd meg a <kbd>START</kbd> gombot a Nintendo DSi-den, hogy kilép a dumpTool-ból</li><li>Kapcsold ki a konzolodat és helyezd vissza az SD kártyádat az eszközödbe</li><li>Tárold ezt a mentés egy biztonságos helyen, ahol nem veszted el <ul><li>Ha lehet, több mentésed legyen különböző tároló eszközökön</li><li>Ha elmentetted máshová, törölheted az SD kártyádról</li></ul></li></ol>',2),b={class:"custom-container warning"},k=e("p",{class:"custom-container-title"},"WARNING",-1),_=e("code",null,"nand.bin",-1),g=e("code",null,"nand.bin.sha1",-1),y=e("code",null,"nand.bin",-1),N={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},v={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1);function T(D,S){const n=o("ExternalLinkIcon"),s=o("RouterLink");return d(),r("div",null,[m,e("ol",null,[e("li",null,[t("Töltsd le a "),e("a",z,[t("dumpTool"),a(n)]),t(" legfrissebb kiadását")]),u]),p,e("div",b,[k,e("p",null,[t("Az SHA1 hash-e a "),_,t("-nek nem fog egyezni a "),g,t(" fájlban tárolt értékkel. Ez azért van, mert a dumpTool további adatokat ad hozzá a "),y,t("-hez, amit no$gba láblécnek hívunk, miután az SHA1 hash kiszámításra került. Használhatod a "),e("a",N,[t("hiyaCFW Helper"),a(n)]),t("-t olyan másolat létrehozásához, amiben nincs benne ez a lábléc.")])]),e("div",v,[f,e("p",null,[t("Folytatás az "),a(s,{to:"/hu_HU/installing-unlaunch.html"},{default:c(()=>[t("Unlaunch telepítésével")]),_:1}),t(" (Opcionális)")])])])}const H=i(h,[["render",T],["__file","dumping-nand.html.vue"]]);export{H as default};
