---
baseurl: ..
template: tmpl/layouts/post.html
breadcrumbs:
  - {name: "1-sundayz", link: "./" }
id: 1-sundayz
date: 2015-10-24
title: Sunday hackz
author: Henry Bubert
collection: posts
---

# [15-43] Sunday hacks

## Waveformz!

Today I finally managed to try [bbcrd: waveform](http://waveform.prototyping.bbc.co.uk/) project.

[netlabel example](fs:/ipfs/QmZ3cQrFXonSTpuzupdAba7aCbiGxqkRSLkTWy23YXnfGd/)
[more](fs:/ipfs/QmfQmV4dNBNsUxyHV9WDLt1q5dN4RUuW1KjbbV4J7p46tF)

### TODO:

* Resolve OSX build [issue](https://github.com/bbcrd/audiowaveform/issues/32).
* peaks.js deployment is a bit weird - get into browserify.
* Multiple waveform's in one peaks.js view? (hi/mid/low)
* compare 8bit and 16bit output
* codify/playlist player
* select segments

## [dlANDadd.sh](fs:/ipfs/QmWXDiTbcUzVEUPPFW6uhTDUHFYgA8S3PxzajXPVrHbuc3)

A little shell script I hacked together to streamline [youtube-dl](http://rg3.github.io/youtube-dl/) archival into IPFS. Next step: Crawler and RSS-Feed generator!

## x-compile

I need to get better at building and serving the software that I use.

* [ipfs & ipget](fs:/ipfs/QmQWV5vWNc4jz15gShCvfsYJB4aDsavPdeM5AYTbMp8a52)
* __TODO:__ figure out how to pack [ssbc:patchwork](https://github.com/ssbc/patchwork) for linux, osx and windows.

Patch for the go-ipfs `Makefile`:

```diff
diff --git a/Makefile b/Makefile
index 11a0ff3..33c65e8 100644
--- a/Makefile
+++ b/Makefile
@@ -1,4 +1,6 @@
 
+ipfsBin = github.com/ipfs/go-ipfs/cmd/ipfs
+
 ifeq ($(TEST_NO_FUSE),1)
 go_test=go test -tags nofuse
 else
@@ -28,6 +30,21 @@ install:
 build:
        cd cmd/ipfs && go build -i -ldflags=$(ldflags)
 
+buildDir = /home/cryptix/play/ipfs-build
+ipfs=/home/cryptix/go/bin/ipfs
+
+crossbuild:
+       mkdir -p $(buildDir)/$(commit)
+       GOOS=freebsd go build -o $(buildDir)/$(commit)/ipfs.freebsd -i -ldflags=$(ldflags) $(ipfsBin)
+       GOOS=linux go build -o $(buildDir)/$(commit)/ipfs.linux.amd64 -i -ldflags=$(ldflags) $(ipfsBin)
+       GOOS=linux GOARCH=386 go build -o $(buildDir)/$(commit)/ipfs.linux.386 -i -ldflags=$(ldflags) $(ipfsBin)
+       GOOS=windows go build -o $(buildDir)/$(commit)/ipfs.windows -tags nofuse -i -ldflags=$(ldflags) $(ipfsBin)
+       for f in $(buildDir)/$(commit)/*; do \
+                                       xz $$f ; \
+       done
+       $(ipfs) add -s rabin -r $(buildDir) | tee ipfs.build.log
+
+
```

## go-ipfs 

While mulling over [go-ipfs PR:1886](https://github.com/ipfs/go-ipfs/pull/1886#issuecomment-150664078), I found [ipfs/archives: IETF RFCs](https://github.com/ipfs/archives/issues/18).

Github user [eminence](https://github.com/eminence) hosts a version of the archive with an [IPNS entry](http://ipfs.io/ipns/QmbuG3dYjX5KjfAMaFQEPrRmTRkJupNUGRn1DXCgKK5ogD/archives/RFCs). Who knows if that will be around next week:

`$ ipfs object get /ipns/QmbuG3dYjX5KjfAMaFQEPrRmTRkJupNUGRn1DXCgKK5ogD/archives/RFCs | ipfs object put`: added [QmSefHCec4ez9sUnbZvVvUfv34YwyuDExSJyqbtKSCpEZn](https://ipfs.io/ipfs/QmSefHCec4ez9sUnbZvVvUfv34YwyuDExSJyqbtKSCpEZn)

I also ran the update.py script - still syncing..


Back to HTTP Writable: [Here](https://github.com/ipfs/go-ipfs/issues/611) is the initial feature issue. @ion's main point is, that it might as well be on HTTP POST.

* [RFC2616](https://tools.ietf.org/html/rfc2616#section-9.6)


## OmniFocus WebDAV backend?

## Linkroll:

* [nullsoft scriptable install system](http://nsis.sourceforge.net/Main_Page) - windows installers made easy?..
* [Wie Verlage und Werbe-Industrie unsere Sicherheit beinflussen](http://dev.io/archives/2015/10/25/wie_verlage_und_werbe-industrie_unsere_sicherheit_beinflussen/index.html)
* [The viability of JS frameworks on mobile](https://joreteg.com/blog/viability-of-js-frameworks-on-mobile)
* [On the road to the Galactic Council](http://hyper.mixmix.io/?source=https://github.com/mixmix/blogposts/blob/master/uncapturable_distribution.md)
* [IPFS – Content Addressed, Versioned, P2P File System](http://blog.acolyer.org/2015/10/05/ipfs-content-addressed-versioned-p2p-file-system/)
* [Sustainable community education through WTFM](http://roaming-initiative.com/blog/posts/wtfm)
* [cyberguerrilla](https://cyberguerrilla.info/)
* [matermost](http://www.mattermost.org/)
* [androidvulnerabilities](http://androidvulnerabilities.org/)
* [cloud.hamburg.freifunk.net](https://cloud.hamburg.freifunk.net/)
* ["Der Nazi von heute muss nicht Springerstiefel tragen"](http://www.wiwo.de/my/politik/deutschland/vorabdruck-der-adolf-in-mir-der-nazi-von-heute-muss-nicht-springerstiefel-tragen/12453258.html?ticket=ST-3498943-Qc5ttihvD72nZTbnRWz2-s02lcgiacc01.vhb.de)
* [scholarpedia: consciousness](http://www.scholarpedia.org/article/Consciousness)
* [Decentralizing Authorities into Scalable Strongest-Link Cothorities](http://dedis.cs.yale.edu/dissent/pres/150610-nist-cothorities.pdf)
* [pywb-ipfs](https://github.com/ikreymer/pywb-ipfs/) - [ipfs/archives#28](https://github.com/ipfs/archives/issues/28) web archival
* [Creating a File System That Works: The Ultimate Guide](http://lifeyourway.net/creating-a-file-system-that-works-the-ultimate-guide/)
* [nfs-ganesha](https://github.com/nfs-ganesha/nfs-ganesha) NFS-Ganesha is an NFSv3,v4,v4.1 fileserver that runs in user mode on most UNIX/Linux systems 
