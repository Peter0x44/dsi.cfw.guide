import{_ as r,r as a,o as d,c as h,a as e,d as n,b as o,w as t,e as s}from"./app-ADwmQ4ft.js";const p={},_=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you do not have access to a PC, or if your PC is running ChromeOS, then please do not install Unlaunch. A PC (running Windows, Linux, or macOS) is required in order to fix some issues that may occur after installing Unlaunch.")],-1),f={class:"custom-container danger"},g=e("p",{class:"custom-container-title"},"DANGER",-1),m={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},b=s('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Make sure your console is charged when following this process. A sudden power loss could result in serious damage.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Unlaunch is not compatible with Nintendo DSi development consoles.</p></div><h2 id="section-i-sd-card-setup" tabindex="-1"><a class="header-anchor" href="#section-i-sd-card-setup" aria-hidden="true">#</a> Section I - SD card setup</h2>',3),y={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},w={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[n("Extract "),e("code",null,"UNLAUNCH.DSI"),n(" from the "),e("code",null,"unlaunch.zip"),n(" archive and place it anywhere on your SD card")],-1),S={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"section-ii-installing-updating-unlaunch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-installing-updating-unlaunch","aria-hidden":"true"},"#"),n(" Section II - Installing/Updating Unlaunch")],-1),D=e("li",null,[n("If you have already installed Unlaunch and are looking to update it, hold "),e("kbd",{class:"face"},"A"),n(" + "),e("kbd",{class:"face"},"B"),n(" while booting and select the option labeled "),e("code",null,"TWiLight Menu++")],-1),I=e("code",null,"TWiLight Menu++",-1),T=e("code",null,"BOOT.NDS",-1),U={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},N=s('<li>Launch TWiLight Menu++ Settings <ul><li>If you haven&#39;t changed your theme, press <code>SELECT</code> and touch the small DS icon on the bottom of the touch screen. Otherwise, see the TWiLight Menu++ Manual</li></ul></li><li>Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the <code>Unlaunch settings</code> page</li>',2),L=e("code",null,"Background",-1),A={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,"Exit TWiLight Menu++ Settings",-1),W=e("code",null,"Unlaunch DSi Installer",-1),x={href:"https://github.com/DS-Homebrew/GodMode9i/releases",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"Unlaunch.dsi",-1),C=e("br",null,null,-1),E=e("code",null,"ERROR: MISMATCH IN FAT COPIES",-1),O=e("li",null,"When completed, reboot your system",-1),R=e("p",null,"If you see Unlaunch's Filemenu screen at this point, you have successfully modded your Nintendo DSi.",-1),P=e("h2",{id:"section-iii-post-unlaunch-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iii-post-unlaunch-configuration","aria-hidden":"true"},"#"),n(" Section III - Post-Unlaunch configuration")],-1),F=e("p",null,"Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.",-1),G=e("kbd",{class:"face"},"A",-1),H=e("kbd",{class:"face"},"B",-1),V=e("li",null,"This should launch the Unlaunch Filemenu",-1),Y=e("code",null,"TWiLight Menu++",-1),z=s('<li>Navigate to <code>OPTIONS</code>, and look at the available options <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch&#39;s menu, and as such cannot be changed</li><li>The <code>NO BUTTON</code> and <code>BUTTON A / B / X / Y</code> options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch&#39;s Filemenu <ul><li>For TWiLight Menu++, select <code>TWiLight Menu++</code></li><li>For the original DSi Menu, select <code>Launcher</code></li></ul></li><li><code>LOAD ERROR</code> is what your DSi will load if loading what you have set fails, such as the SD card not being inserted</li></ul></li><li>Select <code>SAVE &amp; EXIT</code> to save your settings, then turn off your DSi</li>',2),X=e("h2",{id:"section-iv-cleaning-up-your-sd-card",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iv-cleaning-up-your-sd-card","aria-hidden":"true"},"#"),n(" Section IV - Cleaning up your SD card")],-1),q=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"This section is optional and only serves for keeping your SD card tidy of files you won't need.")],-1),J=e("ul",null,[e("li",null,[n("Delete the "),e("code",null,"sd:/private/ds/app/484E494A/pit.bin"),n(" file from your SD card")]),e("li",null,[n("Rename "),e("code",null,"tip.bin"),n(" back to "),e("code",null,"pit.bin"),n(", and leave it intact")]),e("li",null,[n("You can now restore the "),e("code",null,"DCIM"),n(" folder that was on the root of your SD card")]),e("li",null,[n("Delete the "),e("code",null,"UNLAUNCH.DSI"),n(" file from your SD card")])],-1),j=e("ul",null,[e("li",null,[n("Delete the "),e("code",null,"800031_104784BAB6B57_000.ppm"),n(" and "),e("code",null,"T00031_1038C2A757B77_000.ppm"),n(" files from inside the following folders: "),e("ul",null,[e("li",null,[e("code",null,"sd:/private/ds/app/4B47554A/001"),n(" (Japan)")]),e("li",null,[e("code",null,"sd:/private/ds/app/4B475545/001"),n(" (USA)")]),e("li",null,[e("code",null,"sd:/private/ds/app/4B475556/001"),n(" (Europe/Australia)")]),e("li",null,"You can also delete the entire folders for the regions besides your own")])]),e("li",null,[n("Delete the "),e("code",null,"UNLAUNCH.DSI"),n(" file from your SD card")])],-1);function K(Q,Z){const i=a("RouterLink"),l=a("ExternalLinkIcon"),u=a("Tab"),c=a("Tabs");return d(),h("div",null,[_,e("div",f,[g,e("p",null,[n("If you have not yet done so, please follow "),o(i,{to:"/dumping-nand.html"},{default:t(()=>[n("Dumping NAND")]),_:1}),n(". While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + "),e("a",m,[n("hardmod"),o(l)]),n(" would allow you to restore this backup, provided you know how to solder.")])]),b,e("ol",null,[e("li",null,[n("Download the latest version of "),e("a",y,[n("Unlaunch"),o(l)]),e("ul",null,[e("li",null,[e("a",w,[n("Mirror link"),o(l)]),n(", if the above doesn't work")])])]),k,e("li",null,[n("Verify you still have TWiLight Menu++ on your SD card "),e("ul",null,[e("li",null,[n("If you are unsure, follow the instructions from the "),e("a",S,[n("TWiLight Menu++ install guide"),o(l)])])])])]),v,e("ol",null,[e("li",null,[n("Open TWiLight Menu++ "),e("ul",null,[e("li",null,[n("If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the "),o(i,{to:"/launching-the-exploit.html"},{default:t(()=>[n("exploit that you used")]),_:1})]),D,e("li",null,[n("If several options are labeled "),I,n(", select the option in where "),T,n(" is shown at the end of the path on the bottom screen "),e("ul",null,[e("li",null,[n("This happens because you are running an older version of TWiLight Menu++, unless you're doing it on purpose, is suggested that you "),e("a",U,[n("update your installation"),o(l)])])])])])]),N,e("li",null,[n("If you want to change Unlaunch's background image, select "),L,n(" and choose the one you want "),e("ul",null,[e("li",null,[n("If you want to create your own Unlaunch background, see the "),e("a",A,[n("DS-Homebrew Wiki page"),o(l)])])])]),M,e("li",null,[n("In the file navigation menu, launch "),W,e("ul",null,[e("li",null,[n("If you see two black screens after launching, download "),e("a",x,[n("GodMode9i"),o(l)]),n(", put its .dsi file on the SD root, then launch GodMode9i using TWiLight Menu++, and start "),B,C,n(" This method does not enable Unlaunch to use custom patches and background")])])]),e("li",null,[n('Select the "install now" option '),e("ul",null,[e("li",null,[n("If Unlaunch freezes at "),E,n(", please take a look at the "),o(i,{to:"/troubleshooting.html"},{default:t(()=>[n("Troubleshooting")]),_:1}),n(" page")])])]),O]),R,e("ul",null,[e("li",null,[n("If you see a black screen, please take a look at the "),o(i,{to:"/troubleshooting.html"},{default:t(()=>[n("Troubleshooting")]),_:1}),n(" page")])]),P,F,e("ol",null,[e("li",null,[n("Power on your console while holding "),G,n(" and "),H,e("ul",null,[V,e("li",null,[n("If nothing is listed, or if only "),Y,n(" isn't listed (even after scrolling down), then you'll need to "),o(i,{to:"/sd-card-setup.html"},{default:t(()=>[n("reformat the SD card")]),_:1})])])]),z]),X,q,o(c,{tabs:""},{default:t(()=>[o(u,{tab:"",name:"Memory Pit",default:""},{default:t(()=>[J]),_:1}),o(u,{tab:"",name:"Flipnote Lenny"},{default:t(()=>[j]),_:1})]),_:1})])}const ee=r(p,[["render",K],["__file","installing-unlaunch.html.vue"]]);export{ee as default};