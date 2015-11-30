---
baseurl: ..
template: tmpl/layouts/post.html
breadcrumbs:
  - {name: "4-$stuff", link: "./" }
id: 4-$stuff
date: 2015-11-6
title: $stuff
author: cryptix
collection: posts
---

In an effort to not loose track of everything&trade; on a weekly basis, I will try collect links of what excited and/or disturbed me in the last week.

## IPFS

If you havn't noticed already, i'm quite fond of [ipfs](https://ipfs.io). Here are some issues I hope will make progress soon for the greater good of the project.


* [rfc compliant writable gateway](https://github.com/ipfs/go-ipfs/pull/1917)
* [git@ipfs: pull from IPNS](https://github.com/cryptix/git-remote-ipfs/pull/7)
* [Pluggable multiaddr (tor/i2p/gnunet etc)](https://github.com/jbenet/go-multiaddr-net/issues/7)
* [Messaging / Chat](https://github.com/ipfs/apps/issues/10)
* [webrecorder.io on ipfs](https://github.com/ipfs/archives/issues/28)
* [search engines?](https://github.com/ipfs/archives/issues/8)
* [IPLD spec](https://github.com/ipfs/specs/pull/37)
 
## [SaveTheLink](https://juliareda.eu/2015/11/leistungsschutzrecht-angriff-auf-den-hyperlink/)

[eu PDF backup](https://ipfs.io/ipfs/Qmf4tE8kWCAvAt76NxmqEJZhMmgcWWKemfmy8MNpPomEUm) 

(auch besprochen in [LNP159](https://logbuch-netzpolitik.de/lnp159-das-gesetz-verstoesst-gegen-die-geheimdienste))

## Apple doesn't want CCC content in their walled garden

https://events.ccc.de/2015/11/04/32c3-gated-communities/

https://erdgeist.org/posts/2015/markt-und-furst.html

(ebenfalls besprochen in [LNP159](https://logbuch-netzpolitik.de/lnp159-das-gesetz-verstoesst-gegen-die-geheimdienste))

### also: https://justgetflux.com/sideload/

At first I thought Apple preassured the f.lux people to take the sideload project down because of private API use.  I later learned that they published a dummy project with a precompiled binary which just gets signed with your key.

If they open sourced it we could have a (nearly) bug free f.lux on iOS by now. If you want to get a copy, search for `f.lux-xcode-master.zip` and verify the SHA-1 hash `f1ee4e38eddc467e7fbfe5708841bbc84f520d7e`. ([src1: /r/jailbreak](https://www.reddit.com/r/jailbreak/comments/3sl3ts/news_flux_can_no_longer_be_sideloaded/)) ([src2: f.lux forum](https://justgetflux.com/forum/topic/1267/sha-1-for-ios-sideload/3)) ([dl from ipfs](https://ipfs.io/ipfs/QmWdZkrt6vdrBgwyw97MPXPYbFWEMhiSXBRfstGydB8mNC)) ([torrent](magnet:?xt=urn:btih:67a17f48cc5691ffe493fb06e8b5ebe803d13948&dn=f.lux+xcode+master&tr=udp%3A//tracker.openbittorrent.com%3A80&tr=udp%3A//open.demonii.com%3A1337&tr=udp%3A//tracker.coppersurfer.tk%3A6969&tr=udp%3A//exodus.desync.com%3A6969))

![Isaac Asimov - A cult of Ignorance](https://ipfs.io/ipfs/QmeFknTyU7qHPaYA6Xo7zLNcjSqhXnaaR23DZVK6v2crLM)

[text version](https://gist.github.com/sixtyfive/5e69a3092039315763fe) ([ipfs backup](https://ipfs.io/ipfs/QmSrCRJmzE4zE1nAfWPbzVfanKQNBhp7ZWmMnEdbiLvYNh/mdown#/ipfs/Qmb7BPrccJQpUZc9Y2fuLodB3XJjgChbX3x2M6RnfUcVfZ))

# Decentralized Identity

If we want to build stronger peer to peer systems, we need to find a way to deal with identities in a distributed manner.

* http://continuations.com/post/131886701965/decentralized-identity-and-content-attribution-we
* https://medium.com/@medialab/certificates-reputation-and-the-blockchain-aee03622426f#.fzrrmfkyt

## LinkRoll

* [peermaps](https://peermaps.github.io/)
* js: [query string params](http://code.stephenmorley.org/javascript/parsing-query-strings-for-get-data/)
* go: [dailymotion: our way to go](http://engineering.dailymotion.com/our-way-to-go/)
* go: Aaron Schlesinger's go talk _Concurrency Patterns_ [repo link](https://github.com/arschles/go-talks/tree/master/concurrency-patterns) [video recording](https://www.youtube.com/watch?v=0xpv7SFQ0T4)
* go: [noti tool](https://github.com/variadico/noti)
* [go-starter-kit](http://blog.dimroc.com/2015/11/22/go-starter-kit-with-webpack-hmr/)
* [new editor to keep an eye on](http://kakoune.org/)
* java: [uninitiialzied memory vulns](http://foxglovesecurity.com/2015/11/06/what-do-weblogic-websphere-jboss-jenkins-opennms-and-your-application-have-in-common-this-vulnerability/)
* [quantifying productivity](https://karpathy.github.io/2014/08/03/quantifying-productivity/) [ulogme](https://github.com/karpathy/ulogme) [ixkeylog](https://github.com/dorneanu/ixkeylog/)
* [broken performance tools](http://www.brendangregg.com/Slides/QCon2015_Broken_Performance_Tools.pdf)
* [the curse of xanadu](http://www.wired.com/1995/06/xanadu/)
* [haka - network security](http://thisissecurity.net/2015/11/23/hackers-do-the-haka-part-1/)
* [dnschain](https://github.com/okTurtles/dnschain)
* [abstract algebra](http://www.math.uiuc.edu/~r-ash/Algebra.html)
* [@worrydream/ClimateChange](http://worrydream.com/ClimateChange/)

