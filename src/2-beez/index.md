---
baseurl: ..
template: tmpl/layouts/post.html
breadcrumbs:
  - {name: "2-beez", link: "./" }
id: 2-beez
date: 2015-10-25
title: Beeez!
author: Henry Bubert
collection: posts
---

![](https://ipfs.io/ipfs/QmT9CBvmRBvvJCvWSz7JeeWC7eMQ7nghQtNJfYt4sooCxt) 

[bhyve](http://bhyve.org/) is the _hot stuff_ when it comes to hypervisors on BSD systems. To quote from the [FreeBSD Handbook](https://www.freebsd.org/doc/handbook/virtualization-host-bhyve.html):

> As a legacy-free hypervisor, it relies on the virtualization offload features of newer CPUs, instead of translating instructions and manually managing memory mappings.

Bang! That's how I like my code. Legacy free. There is already a port for OS X, called [xhyve](https://github.com/mist64/xhyve) and there is a work beeing done for [docker](
https://fosskb.wordpress.com/2015/07/28/docker-on-freebsd-11/) to use it. It also got quite a chunk of [FreeBSD Q3 Status Repor](https://www.freebsd.org/news/status/report-2
015-07-2015-09.html#bhyve)

There are some (small) cons:

* There is currently no USB support - Blocks some projects...
* Currently I use a bridge interface for networking. `wanproxy` or `vhost-net` might be nicer in the future.
* Barebones / no GUI - I don't care, don't need to wait for `bhyveucl`
* Video output is also lacking - oh well.. X forwarding anyone? With the same mesa stack even 3d accelaration works.


Here is a script to boot a [NixOS](https://nixos.org/) guest:

```sh
#!/bin/sh

vmRam=4G                              # how much ram for this guest?
vmName=VMnixTex                       # vm nick-name for bhyve, just needs to be unique
vmRootDev=/dev/zvol/zroot/LinuxNixTex # zfs block device - might as well be a regular file
vmIso=/home/cryptix/Downloads/nixos-minimal-15.09.606.8dc5a16-x86_64-linux.iso
vmTapDev=tap2                         # which network device for this guest?

# boot from install iso (kernel boot options extracted from iso grub1 config)
cat << EOF | grub-bhyve -m device.map.nixTex -M $vmRam $vmName
linux (cd0,msdos2)/boot/bzImage init=/nix/store/vzwgkxnjchq2i4g8l044cpfqf1y9jklw-nixos-15.09.606.8dc5a16/init root=LABEL=NIXOS_ISO boot.shell_on_fail nomodeset loglevel=7
initrd (cd0,msdos2)/boot/initrd
boot
EOF

# installed 
#grub-bhyve -m device.map.nixTex -r hd0,msdos1 -M $vmRam $vmName

bhyve -A -H -P \
        -s 0:0,hostbridge \
        -s 1:0,lpc \
        -s 2:0,virtio-net,$vmTapDev \
        -s 3:0,virtio-blk,$vmRootDev \
        -s 3:1,virtio-blk,/dev/zvol/zroot/LinuxSwap1 \
        -s 4:0,ahci-cd,$vmIso \
        -l com1,stdio \
        -c 4 \
        -m $vmRam \
        $vmName

bhyvectl --destroy --vm=$vmName
```


# [NixOS](https://nixos.org/)

In case you haven't heard about _the purely functional linux distribution_ yet, I urge you to read their [about](https://nixos.org/nixos/about.html) page and work through the [Installing NixOS](https://nixos.org/nixos/manual/index.html#sec-installation) manual chapter, if you have the time. For me it boils down to this: Your complete Linux in one config file.

I recently torched my archlinux where I did my LaTeX writing. Nowadays I try to build such systems as selfcontained NixOSes:

## /etc/nixos/configuration.nix
```
{ config, pkgs, ... }:

{
  # hardware specifics, see below:
  imports = [ ./hardware-configuration.nix ];

  # grub2 onto the image
  boot.loader.grub.enable = true;
  boot.loader.grub.version = 2;
  boot.loader.grub.device = "/dev/vda";

  networking.hostName = "VMnixTex";
  networking.hostId = "deadb33f";

  # which packages do I want installed as part of this system?
  environment.systemPackages = with pkgs; [
    texLiveFull
    vim
    gitMinimal
    tmux
    zsh
    zathura
    zathuraCollection.zathura_pdf_mupdf
  ];

  # configure some services
  services.openssh.enable = true;
}
```

# /etc/nixos/hardware-configuration.nix
```
# Do not modify this file!  It was generated by ‘nixos-generate-config’
# and may be overwritten by future invocations.  Please make changes
# to /etc/nixos/configuration.nix instead.
{ config, lib, pkgs, ... }:

{
  imports =
    [ <nixpkgs/nixos/modules/installer/scan/not-detected.nix>
    ];

  boot.initrd.availableKernelModules = [ "virtio_pci" "ahci" "virtio_blk" ];
  boot.kernelModules = [ ];
  boot.extraModulePackages = [ ];

  fileSystems."/" =
    { device = "/dev/disk/by-uuid/10f7bac9-4f7f-4433-9e75-1fdb667bd52c";
      fsType = "ext4";
    };

  swapDevices =
    [ { device = "/dev/disk/by-uuid/5054418e-aa5b-48ea-86cf-100e25f8278d"; }
    ];

  nix.maxJobs = 4;
}
```
