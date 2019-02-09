---
title: Replacing the System Menu with TWiLight Menu++
redirect_from:
  - more/replacing-system-menu
  - replacing-system-menu-with-srloader
  - replacing-system-menu-with-dsimenu++
  - replacing-system-menu-with-twlmenu++
---

{% include toc title="Table of Contents" %}

You must have [Unlaunch](/guide/installing-unlaunch/) and [HiyaCFW](/guide/installing-hiyacfw/) installed before proceeding.
{: .notice--info}

This will replace your DSi's System Menu with TWiLight Menu++, and run it whenever you power on your DSi console.

Replacing the System Menu with TWiLight Menu++ will allow for a few advantages over the built-in System Menu:
* TWiLight Menu++ can allow for more DSiWare than the System Menu
* TWiLight Menu++, in many cases, can allow for SD cards greater than 2 GB to work
    - You can copy your entire SDNAND to a larger SD card once this process is done, and it will likely work out of the box
* TWiLight Menu++ provides a unified interface for launching NES, GB(C), DS, and DSiWare titles

In this configuration, TWiLight Menu++ is effectively acting as an open source alternative to the System Menu.

## Downloads
- The latest release of [TWiLight Menu++](https://github.com/RocketRobz/TWiLightMenu/releases){:target="_blank"}

## Preparation
{: .notice--info}
1. Open the TWiLight Menu++ `.7z` file
2. Copy *the contents of* the `SDNAND root` folder in the `DSi - CFW users` folder to the root of your SD card
3. Copy the `_nds` and `roms` folders to the root of your SD card
4. Copy the `_nds` folder and `boot.nds` file from `DSi&3DS - SD card users` folder to the root of your SD card
    - On Windows, merge files when asked to
5. Eject your SD card, and insert it in your DSi

## Instructions
1. Power on your DSi while holding **SELECT**
2. If `Autoboot title` is not checked, navigate to it and press **A**
3. Press **START** to save and continue booting
    - TWiLight Menu++ will appear

TWiLight Menu++ is now your System Menu. If you want to run DSiWare, wait for steps on how to run them to appear.