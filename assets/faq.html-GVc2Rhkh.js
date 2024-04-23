import{_ as r,r as s,o as h,c as d,a as e,d as a,b as t,w as i,e as o}from"./app-ADwmQ4ft.js";const k={},m=o('<h2 id="kell-frissitenem-a-rendszert" tabindex="-1"><a class="header-anchor" href="#kell-frissitenem-a-rendszert" aria-hidden="true">#</a> Kell frissítenem a rendszert?</h2><p><strong>Nem</strong> ajánlott a DSi frissítése, ha nem tudod biztosan, hogy van-e rajta vásárolt DSiWare. Habár továbbra is folytatható az útmutató, ha így teszel, az egyetlen előnye a frissítésnek, a képesség, hogy elérd a Nintendo DSi Shop-ot, hogy újra letöltsd a már megvásárolt címeket. Minden más előny, mint például a Facebook integráció a Nintendo DSi Camera alkalmazásban már nem használható vagy nem fontos annyira, hogy igazolja a hátrányokat:</p><ul><li>A rendszer frissítések telepítése alkalmanként <strong>brickeli</strong> a konzolokat, közel hasonló frekvenciával, mint az Unlaunch telepítése</li><li>A régi exploitok már nem használhatók, amik szükségesek lehetnek, ha nem tudod használni az ajánlott exploitokat</li><li>A flashcard kompatibilitás csökkentett, azonban ez megkerült, ha telepíted az Unlaunch-öt</li></ul><h2 id="melyik-a-legjobb-exploit" tabindex="-1"><a class="header-anchor" href="#melyik-a-legjobb-exploit" aria-hidden="true">#</a> Melyik a legjobb exploit?</h2><p>Az Unlaunch a legjobb exploit a DSi-hez, az egyetlen hátránya, hogy van egy kicsi kockázata a brickelésnek a telepítéskor. Általában ajánlott, hogy a Mamory Pit-et használd az Unlaunch telepítéséhez. Ha szeretnél elkerülni bármilyen kockázatot, akkor ajánlott a Flipnote Lenny használata helyette, mert kevesebb homebrew problémája van mint a Memory Pit-nek, miközben ugyanannyira biztonságos és egyszerű eltávolítani. Alább az előnyök és hátrányok listája minden exploithoz:</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>Előnyök:</p><ul><li>Gyorsan és könnyen használható</li><li>Nincs kockázata a konzol sérülésének, az eltávolítás olyan egyszerű, mint kivenni az SD kártyát vagy letörölni egy fájl</li><li>Kompatibilis minden DSi konzollal, kivéve ha rossz a kamerája és még nem lett végrehajtva a kamera oktatóprogram</li></ul><p>Hátrányok:</p><ul><li>Szükség van a DSi Camera betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni</li><li>Inkompatibilis bizonyos DSi módú címekkel és homebrew-val azért mert a WRAM csak az ARM7 CPU számára nyitott</li><li>Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén</li><li>A hozzáférés a DSP-hez blokkolt, ezért rosszabb a hang a GBARunner2-ben</li><li>A fényképek az SD kártyán nem megtekinthetők a DSi Camera alkalmazásban, amíg a Memory Pit telepített, mert ez a trigger az exploithoz <ul><li>Az egyetlen módja, hogy az SD kártyán található fotókat megtekintsd amíg a Memory Pit telepített, hogy elindítod a ROM dumpját a DSi Camera alkalmazásnak <strong>TW</strong>i<strong>L</strong>ight Menu++-szal, hgy bootoljon nds-bootstrap-re (v0.61.3 vagy későbbi)</li></ul></li></ul><h3 id="stylehax" tabindex="-1"><a class="header-anchor" href="#stylehax" aria-hidden="true">#</a> stylehax</h3><p>Előnyök:</p><ul><li>Jobb kompatibilitás a DSi módú címekkel és homebrew-okkal, mint a Memory Pit esetében</li><li>Könnyen használható</li><li>Nincs kockázata a konzol sérülésének</li><li>Használható hibás kamerával rendelkező konzolokon</li><li>Jobb hang a GBARunner2-ben</li></ul><p>Hátrányok:</p><ul><li>Internet hozzáférést igényel</li><li>Szükség van a DSi Browser betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni, ami kicsit több időt igényel, mint a Memory Pit</li><li>Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén</li></ul><h3 id="flipnote-lenny" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny" aria-hidden="true">#</a> Flipnote Lenny</h3><p>Előnyök:</p><ul><li>Jobb kompatibilitás a DSi módú címekkel és homebrew-okkal, mint a Memory Pit esetében</li><li>Nincs kockázata a konzol sérülésének, az eltávolítás olyan egyszerű, mint kivenni az SD kártyát vagy letörölni egy mappát</li><li>Használható hibás kamerával rendelkező konzolokon</li><li>Jobb hang a GBARunner2-ben</li></ul><p>Hátrányok:</p><ul><li>Szükség van a Flipnote Studio betöltésére minden alkalommal, amikor a homebrew-okat szeretnéd elérni, ami kicsit több időt igényel, mint a Memory Pit</li><li>Hozzáférés a Slot-1-hez (a DS játék kártyához) blokkolt homebrew esetén</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>Előnyök:</p><ul><li>Lehetővé teszi Allows homebrew és DSiWare azonnali betöltését rendszer bootoláskor, opcionális gyorsgombokkal</li><li>Teljes hozzáférés a rendszerhez, korlátozások nélkül, beleértve: <ul><li>Hozzáférés a Slot-1-hez, ami lehetővé teszi a játék kártyák dumpolását és inkompatibilis flashcard-ok betöltését</li><li>Jobb hang a GBARunner2-ben</li></ul></li><li>A régió zárakat eltávolítja a DSi-Enchanced/Exkluzív játék kártyák esetében</li><li>Védelem a legtöbb lehetőség ellen, ami a DSi-t brickelheti</li><li>DSi-Enhanced játékok futhatnak DSi módban Donor ROM nélkül</li><li>Régi homebrew futtatható az nds-bootstrap-hb-n keresztül</li></ul><p>Hátrányok:</p>',24),z=e("li",null,[a("Van egy nagyon kicsi kockázata a konzol "),e("strong",null,"brickelésének"),a(" a telepítésekor")],-1),u=e("li",null,"Nem kompatibilis fejlesztői konzolokkal",-1),g=o('<h2 id="vesztek-el-funkcionalitast-ha-moddolom-a-rendszerem" tabindex="-1"><a class="header-anchor" href="#vesztek-el-funkcionalitast-ha-moddolom-a-rendszerem" aria-hidden="true">#</a> Vesztek el funkcionalitást, ha moddolom a rendszerem?</h2><p>Ha telepíted az Unlaunch-öt vagy a Flipnote Lenny-t használod, nem vesztesz el funkcionalitást. Ha a Memory Pit-et használod, nem fogsz tudni fotókat megnézni az SD kártyáról a DSi Camera alkalmazással, kivéve ha egy DSi Camera ROM-ot indítasz a<strong>TW</strong>i<strong>L</strong>ight Menu++ használatával, bootoljon be rá az nds-bootstrap használatával.</p><ul><li>Ahhoz, hogy újra tudjál az SD kártyáról fotókat megtekinteni a DSi Camera indításakor, telepítsd az Unlaunch-öt vagy válts más exploitra és töröld a Memory Pit <code>pit.bin</code> fájlját <ul><li>Ha a <code>tip.bin</code> létezik ugyanabban a mappában, nevezd vissza azt <code>pit.bin</code>-re</li></ul></li></ul><h2 id="hogyan-jatszhatok-nintendo-ds-jatek-kartya-dumpokkal" tabindex="-1"><a class="header-anchor" href="#hogyan-jatszhatok-nintendo-ds-jatek-kartya-dumpokkal" aria-hidden="true">#</a> Hogyan játszhatok Nintendo DS játék kártya dumpokkal?</h2><p>A játék kártya dump játékok használatához a konzolnak szüksége van flashcard-ra vagy nds-bootstrap-re, egy programra, ami lehetővé teszi, hogy a belső SD kártyáról játszhatók legyenek a játékok a Slot-1 írás és olvasás átirányításával.</p>',5),y=e("li",null,"A TWiLight Menu++-szal navigálhatsz az SD kártyádon, hogy megtaláld a ROM fájlokat, amiket nds-bootstrap-pel játszhatsz. A TWiLight Menu++ használatának előnye a csalás menü, a játékonkénti beállítások és hogy megkerüli a korlátozásokat, amikkel a forwarder-ek rendelkeznek. Más szavakkal, csak felmásolod a ROM fájlokat és játszhatsz velük bármilyen telepítés nélkül. Nincs 39 cím limit, sem hiyaCFW, sem Unlaunch nem szükséges és nincs korlátozás az SD kártya szabad tárhelyével kapcsolatosan sem",-1),b={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},c={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"hogyan-tudom-frissiteni-a-homebrew-appjaim",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hogyan-tudom-frissiteni-a-homebrew-appjaim","aria-hidden":"true"},"#"),a(" Hogyan tudom frissíteni a homebrew appjaim?")],-1),f=e("strong",null,"Unlaunch",-1),v=e("ul",null,[e("li",null,[e("strong",null,"Nem"),a(" kell eltávolítanod az Unlaunch-öt mielőtt ezt csinálod")])],-1),_=e("strong",null,"hiyaCFW",-1),j=e("code",null,"hiya.dsi",-1),w={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"TWiLight Menu++",-1),D={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},M=o("<li><strong>nds-bootstrap</strong> - Másold az <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> fájlokat az <code>_nds</code> mappába, az SD kártyád gyökerében <ul><li>Ha használsz TWiLight Menu++-t, erős rá az esély, hogy a legfrissebb nds-bootstrap kiadás is megtalálható a TWiLight Menu++-ban</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, stb.</strong> - Kövesd azokat az útmutatókat ami alapján letöltötted őket</li>",2),x=e("p",null,"Más homebrew-ok elképzelhető, hogy más metódust használnak a frissítésre.",-1),H=e("h2",{id:"uj-vagyok-vagy-szeretnem-ujra-csinalni-a-telepitest-hol-kezdjem",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uj-vagyok-vagy-szeretnem-ujra-csinalni-a-telepitest-hol-kezdjem","aria-hidden":"true"},"#"),a(" Új vagyok vagy szeretném újra csinálni a telepítést. Hol kezdjem?")],-1),A=e("li",null,"Ha még nem módosítottad a konzolodat, vagy frissíteni szeretnéd az Unlaunch-öt a rendszereden, azt ajánljuk, hogy kezd az elejétől az útmutatót, követve az oldalakat. Legyél biztos abban, hogy mindent elolvastál a honlapon",-1),W={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"hogyan-tudom-eltavolitani-a-szuloi-felugyeletet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hogyan-tudom-eltavolitani-a-szuloi-felugyeletet","aria-hidden":"true"},"#"),a(" Hogyan tudom eltávolítani a szülői felügyeletet?")],-1),L={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"meg-tudom-valtoztatni-a-nintendo-dsi-konzolom-regiojat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#meg-tudom-valtoztatni-a-nintendo-dsi-konzolom-regiojat","aria-hidden":"true"},"#"),a(" Meg tudom változtatni a Nintendo DSi konzolom régióját?")],-1),U=e("p",null,"Igen, néhány különböző metódus áll rendelkezésre, attól függően mit szeretnél változtatni:",-1),T=e("li",null,"A legbiztonságosabb és legegyszerűbb metódus a TWiLight Menu++ telepítése, az bármelyik hivatalos nyelvet tudja használni, és még többet a NAND módosítása nélkül",-1),F={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"mi-tortent-a-hiyacfw-telepitesi-utmutatoval",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mi-tortent-a-hiyacfw-telepitesi-utmutatoval","aria-hidden":"true"},"#"),a(" Mi történt a hiyaCFW telepítési útmutatóval?")],-1),E={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},I=e("ul",null,[e("li",null,"Ha linkelve lettél az oldalra egy másik útmutatóból, akkor a lépések amit követtél valószínűleg elavultak. Kérjük használd ezt az útmutatót helyette, mert folyamatosan karbantartott a projekt fejlesztői által")],-1),V=e("h2",{id:"what-happened-with-lazy-dsi-downloader-how-do-i-install-cfw-without-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-happened-with-lazy-dsi-downloader-how-do-i-install-cfw-without-it","aria-hidden":"true"},"#"),a(" What happened with Lazy DSi Downloader? How do I install CFW without it?")],-1),G=e("p",null,"Lazy DSi Downloader was a program that essentially allowed you to skip the manual setup process by downloading and placing the necessary files and folders on your SD card. However, due to the way it was programmed and distributed, many users encountered various issues and ended up having to do the manual set up, as it was quicker and/or easier than fixing whatever was causing the issue.",-1),K=o('<ul><li>If you were linked to this guide by a third party that recommended using Lazy DSi Downloader, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects.</li></ul><h2 id="milyen-sd-kartyat-kell-hogy-hasznaljak" tabindex="-1"><a class="header-anchor" href="#milyen-sd-kartyat-kell-hogy-hasznaljak" aria-hidden="true">#</a> Milyen SD kártyát kell, hogy használjak?</h2><ul><li>Megbízható márkájú SD kártyát kell vásárolnod</li><li>Egy teljes méretű SD kártya vagy egy microSD kártya adapterrel is megfelelő</li><li>Bármilyen méret 1 GB és 2 TB között működni fog. Általános használatra 8 GB elég <ul><li>Néhány szoftver, mint például a hiyaCFW, hosszabb töltési idővel rendelkezhet nagyobb SD kártya kapacitás esetén</li></ul></li><li>8-as sebesség osztályú vagy gyorsabb ajánlott</li></ul><h2 id="hasznalhatom-a-dsi-sd-kartyamat-mas-rendszereken-is" tabindex="-1"><a class="header-anchor" href="#hasznalhatom-a-dsi-sd-kartyamat-mas-rendszereken-is" aria-hidden="true">#</a> Használhatom a DSi SD kártyámat más rendszereken is?</h2><p>Általában igen, két kivétellel:</p><ul><li>A hiyaCFW csak azon a rendszeren fog működni, amin telepítve lett</li><li>Még ha nds-bootstrap-et vagy egy flashcard-ot is használsz, a friend code-ok az online NDS játékok esetében alaphelyzetbe állnak, ha megpróbálsz online lenni egy másik konzolon</li></ul><h2 id="hogyan-valtok-egy-uj-sd-kartyara-miutan-beallitottam-a-homebrew-t" tabindex="-1"><a class="header-anchor" href="#hogyan-valtok-egy-uj-sd-kartyara-miutan-beallitottam-a-homebrew-t" aria-hidden="true">#</a> Hogyan váltok egy új SD kártyára, miután beállítottam a homebrew-t?</h2>',7),J=e("h2",{id:"tudom-hasznalni-a-rendszeremet-normalisan-az-sd-kartya-behelyezese-nelkul-miutan-telepitettem-a-homebrew-t",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tudom-hasznalni-a-rendszeremet-normalisan-az-sd-kartya-behelyezese-nelkul-miutan-telepitettem-a-homebrew-t","aria-hidden":"true"},"#"),a(" Tudom használni a rendszeremet normálisan az SD kártya behelyezése nélkül, miután telepítettem a homebrew-t?")],-1),O=e("em",null,"did",-1),q={id:"az-unlaunch-oldal-azt-mondja-hogy-a-2-0-verzio-nem-tekintheto-biztonsagosnak-javasolt-helyette-egy-korabbi-verzio-hasznalata",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#az-unlaunch-oldal-azt-mondja-hogy-a-2-0-verzio-nem-tekintheto-biztonsagosnak-javasolt-helyette-egy-korabbi-verzio-hasznalata","aria-hidden":"true"},"#",-1),Q={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,"Az Unlaunch oldal nem került frissítésre, mióta a 2.0 verzió kiadásra került, ami két évvel ezelőtt volt. A legtöbb felhasználó nem tapasztalt problémát ezzel a verzióval, így biztonságosnak tekinthető.",-1),Z=e("h2",{id:"hogyan-futtathatok-dumpolt-dsiware-t",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hogyan-futtathatok-dumpolt-dsiware-t","aria-hidden":"true"},"#"),a(" Hogyan futtathatok dumpolt DSiWare-t?")],-1),$=e("p",null,"Az ajánlott módszer, hogy egyszerűen futtasd a TWiLight Menu++-szal az egyszerű húzd-és-vidd metódussal és nincs semmilen korlátja. Ha az nds-bootstrap a beállított indítási metódus, akkor még megkapja a csalások és a képernyőképek előnyeit és minden más előnyt ami a játékbani menüből érhető el.",-1),ee={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"};function te(le,ne){const n=s("RouterLink"),l=s("ExternalLinkIcon");return h(),d("div",null,[m,e("ul",null,[z,e("li",null,[a("Egy másik kicsit magasabb kockázata van a brickelésnek, amikor "),t(n,{to:"/hu_HU/uninstalling-unlaunch.html"},{default:i(()=>[a("eltávolítod")]),_:1})]),u]),g,e("ul",null,[y,e("li",null,[a("A hiyaCFW felhasználók létrehozhatnak forwarder-eket az SDNAND DSi Menu-be a DS-Homebrew Wiki "),e("a",b,[a("DS játék forwarder-ek"),t(l)]),a(" útumutató használatával, de vannak korlátozásai. Van egy 39 címes limit és kevésbé kényelmes beállítani, mint használni a TWiLight Menu++-t "),e("ul",null,[e("li",null,[a("Ha nincs hiyaCFW-d és szeretnél forwarder-eket használni, kövesd a "),e("a",c,[a("hiyaCFW telepítési útmutatót"),t(l)]),a(" a DS-Homebrew Wiki-n")])])])]),p,e("ul",null,[e("li",null,[f,a(" - Kövesd az útmutatót az "),t(n,{to:"/hu_HU/installing-unlaunch.html"},{default:i(()=>[a("Unlaunch telepítése")]),_:1}),a(" oldalon "),v]),e("li",null,[_,a(" - Cseréld a "),j,a("-t az SD kártyád gyökerében a "),e("a",w,[a("legfrissebb kiadásból"),t(l)])]),e("li",null,[S,a(" - Kövesd a "),e("a",D,[a("DS-Homebrew Wiki"),t(l)]),a(" lépéseit")]),M]),x,H,e("ul",null,[A,e("li",null,[a("Ha rendelkezel a legutolsó Unlaunch verzióval, kövesd a "),e("a",W,[a("TWiLight Menu+ telepítési útmutatót"),t(l)]),a(" a TWiLight Menu++ rendszeredre telepítéséhez")])]),N,e("ul",null,[e("li",null,[a("Az "),e("a",L,[a("mkey generátor"),t(l)]),a(" tud generálni olyan kódot, amivel eltávolítható a szülői felügyelet")])]),C,U,e("ul",null,[T,e("li",null,[a("Ha tényleg szeretnéd cserélni a régiót és hiyaCFW-t használsz, akkor használhatod erre Yoti "),e("a",F,[a("hiyalang"),t(l)]),a("-ját ázsiai DSI rendszerekhez. Amerikai DSi rendszerekhez használd a "),e("a",R,[a("hiyalang ezen verzióját"),t(l)])]),e("li",null,[a("Végül, ha cserélni akarod a régiót az aktuális rendszer NAND-ban, használhatod Mighty Max "),e("a",P,[a("DSi Language Patcher"),t(l)]),a("-ét")])]),B,e("p",null,[a("Mivel a hiyaCFW nem ad sok funkcionalitást és problémás és zavaró része volt az útmutatónak, átmozgatásra került a "),e("a",E,[a("DS-Homebrew Wiki"),t(l)]),a("-be.")]),I,V,G,e("p",null,[a("To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead "),t(n,{to:"/hu_HU/get-started.html"},{default:i(()=>[a("doing the manual setup")]),_:1}),a(" is the recommended way to go.")]),K,e("p",null,[a("Formázd az SD kártyát a "),t(n,{to:"/hu_HU/sd-card-setup.html"},{default:i(()=>[a("SD kártya telepítés")]),_:1}),a(" lépései alapján, majd egyszerűen mozgasd az adatod a régi SD kártyáról az újra.")]),J,e("p",null,[a("Igen. Ha nem telepíted az Unlaunch-öt, a rendszered teljesen módosítatlan marad. Ha "),O,a(" telepíted az Unlaunch-öt, szükséged lehet "),t(n,{to:"/hu_HU/installing-unlaunch.html#section-iii-post-unlaunch-configuration"},{default:i(()=>[a("az Unlaunch beállítására")]),_:1}),a(", hogy automatikusan bootolj az eredeti DSi Menüre bizonyos kondíciók esetén.")]),e("h2",q,[Y,a(" Az "),e("a",Q,[a("Unlaunch oldal"),t(l)]),a(" azt mondja, hogy a 2.0 verzió nem tekinthető biztonságosnak. Javasolt helyette egy korábbi verzió használata?")]),X,Z,$,e("p",null,[a("Azonban a néhány inkompatibilis címhez használhatod az "),e("a",ee,[a("NTM"),t(l)]),a("-et, hogy telepítsd őket vagy a belső memóriára vagy a "),e("a",ae,[a("hiyaCFW SDNAND-jára"),t(l)]),a(". Továbbá a fenti előnyök hiánya mellett a 39 címes limit is megmarad, amik nem léphetik től a 128 MiB/1,024 block méretet. A SysNAND esetén van egy nagyon kicsi rizikója a rendszer brickelésének, amikor az ír a belső NAND-ba.")])])}const oe=r(k,[["render",te],["__file","faq.html.vue"]]);export{oe as default};