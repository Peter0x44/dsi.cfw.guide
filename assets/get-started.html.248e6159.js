import{_ as l,o as r,c as h,a as e,d as t,b as o,w as a,e as c,r as s}from"./app.5fbb2fce.js";const d={},u=e("p",null,[t("The main homebrew application this guide has you install is "),e("strong",null,"TW"),t("i"),e("strong",null,"L"),t("ight Menu++, which is an upgrade/replacement to the Nintendo DSi Menu that allows running other homebrew applications, retail DS games, emulators for various older systems, and more.")],-1),p=e("p",null,"We'll begin with downloading it as well as some other homebrew tool(s), in preparation for the exploit steps.",-1),_=e("h2",{id:"anforderungen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#anforderungen","aria-hidden":"true"},"#"),t(" Anforderungen")],-1),m=e("li",null,"A way to copy downloaded files to your SD card",-1),f={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},y=e("ul",null,[e("li",null,"We advise you to not use WinRAR, as it is known to break things")],-1),x=e("h2",{id:"section-i-prep-work",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-i-prep-work","aria-hidden":"true"},"#"),t(" Section I - Prep Work")],-1),w={class:"custom-container warning"},b=e("p",{class:"custom-container-title"},"WARNING",-1),v=e("li",null,"Insert your SD card into your PC",-1),S={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},k=c("<li>Copy the <code>_nds</code> folder from <code>TWiLightMenu-DSi.7z</code> to the root of your SD card</li><li>Copy the <code>BOOT.NDS</code> file from <code>TWiLightMenu-DSi.7z</code> to the root of your SD card</li><li>Copy the <code>dumpTool.nds</code> file to the root of your SD card</li>",3),T={class:"custom-container tip"},L=e("p",{class:"custom-container-title"},"TIP",-1),I={href:"https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"section-ii-selecting-an-exploit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-selecting-an-exploit","aria-hidden":"true"},"#"),t(" Section II - Selecting an exploit")],-1),W=e("p",null,"From here you have three options, with a minor difference in what each entails.",-1),E=e("h3",{id:"installing-unlaunch-via-memory-pit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-unlaunch-via-memory-pit","aria-hidden":"true"},"#"),t(" Installing Unlaunch via Memory Pit")],-1),P=e("p",null,"Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions. Optionally, this exploit can be used to install Unlaunch, a bootcode exploit that allows full control of the console on boot.",-1),U=e("p",null,[t("As Memory Pit is somewhat limited in homebrew compatibility, it is recommended to install Unlaunch, instead of using Memory Pit standalone. As this is the easiest method to install Unlaunch, this is the recommended path. However, there is a very minor risk of "),e("strong",null,"bricking"),t(" your console when installing Unlaunch, so if this is a concern, see the alternate method below.")],-1),C={class:"custom-container tip"},F=e("p",{class:"custom-container-title"},"TIP",-1),z=e("h3",{id:"stylehax",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylehax","aria-hidden":"true"},"#"),t(" stylehax")],-1),A=e("p",null,"stylehax is an exploit utilizing the DSi Browser application, and can be used as an alternative to Memory Pit for installing Unlaunch (explained above) if your DSi has a broken camera.",-1),N=e("p",null,"For an Unlaunch-free experience, this exploit is recommended as using Memory Pit causes issues in some games and homebrew.",-1),B={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"TIP",-1),V=e("h3",{id:"flipnote-lenny",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flipnote-lenny","aria-hidden":"true"},"#"),t(" Flipnote Lenny")],-1),O=e("p",null,"Flipnote Lenny is an exploit utilizing the Flipnote Studio application.",-1),H=e("p",null,"If you have Flipnote Studio and do not plan on installing Unlaunch (explained above), this exploit is recommended for the same reason as stylehax.",-1),q=e("p",null,"You can always install Unlaunch later if you decide later on that you want it.",-1),G={class:"custom-container tip"},Q=e("p",{class:"custom-container-title"},"TIP",-1);function Y(Z,j){const n=s("ExternalLinkIcon"),i=s("RouterLink");return r(),h("div",null,[u,p,_,e("ul",null,[m,e("li",null,[t("An application that can extract archives, such as "),e("a",f,[t("7-Zip"),o(n)]),t(" (Windows) or "),e("a",g,[t("The Unarchiver"),o(n)]),t(" (macOS) "),y])]),x,e("div",w,[b,e("p",null,[t("Ensure your SD card is "),o(i,{to:"/de_DE/sd-card-setup.html"},{default:a(()=>[t("formatted correctly")]),_:1}),t(".")])]),e("ol",null,[v,e("li",null,[t("Download the latest release of "),e("a",S,[t("TWiLight Menu++"),o(n)])]),e("li",null,[t("Lade dir die neueste Version von "),e("a",D,[t("dumpTool"),o(n)]),t(" herunter")]),k]),e("div",T,[L,e("p",null,[t('Unsure what the SD "root" is? '),e("a",I,[t("See this image"),o(n)])])]),M,W,E,P,U,e("div",C,[F,e("p",null,[t("Continue to "),o(i,{to:"/de_DE/launching-the-exploit.html"},{default:a(()=>[t("Launching the Exploit")]),_:1})])]),z,A,N,e("div",B,[R,e("p",null,[t("Continue to "),o(i,{to:"/de_DE/launching-the-browser-exploit.html"},{default:a(()=>[t("Launching the Exploit (stylehax)")]),_:1})])]),V,O,H,q,e("div",G,[Q,e("p",null,[t("Continue to "),o(i,{to:"/de_DE/launching-the-flipnote-exploit.html"},{default:a(()=>[t("Launching the Exploit (Flipnote Lenny)")]),_:1})])]),e("p",null,[t("For a more detailed pros and cons comparision of the available exploits, please see the "),o(i,{to:"/de_DE/faq.html#which-is-the-best-exploit"},{default:a(()=>[t("Which is the best exploit?")]),_:1}),t(" FAQ.")])])}var K=l(d,[["render",Y],["__file","get-started.html.vue"]]);export{K as default};
