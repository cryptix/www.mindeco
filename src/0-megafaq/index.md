---
baseurl: ..
template: tmpl/layouts/post.html
breadcrumbs:
  - {name: "0-megafaq", link: "./" }
id: 0-megafaq
date: 2013-05-05
title: MegaFAQ
author: Henry Bubert
collection: posts
---

# Questions and Answers about MEGA: What does the new Cloud-Service offer?

We took a look at the brand new [MEGA](https://mega.co.nz) Platform and worked together with somebody that has a really good understanding of computer security - and try to find answers to the most pressing questions.

## Is MEGA because of its encryption really so secure?

MEGA claims that only the user has the key to the file. MEGA states in their Terms of Service that nobody without that private key can access the files. And MEGA says that they have no copy of this key, because it is generated inside the browser. There is an [ongoing debate](http://rdist.root.org/2010/11/29/final-post-on-javascript-crypto/) about whether this is a good idea because the key for decryption and encryption is coming from the same source as the file. This process is just a good beginning, nothing more. The cryptographic routines can be manipulated through man-in-the-middle or cross-site-scripting (xss) attacks and last but not least by MEGA itself.

And: reportedly there is such a [XSS vulnerability](https://twitter.com/z0mbiehunt3r/status/292735540963442688). This means, an attacker can push code through MEGA to its victim, which than could extract the private key for example.

## Are users of MEGA protected from criminal prosecution?

No, there is explicit logging of the users IP-addresses done by MEGA. Based on this the users can be tacked down. Nobody is protected against official written warnings if copyright is violated and user groups of unknown size get access to these files. Or in the words of [gizmodo](http://gizmodo.com/5977265/how-megas-encryption-will-protect-you-but-mostly-kim-dotcom):

> One could argue Mega’s even being proactive about copyright protection that way. You’re the one sharing file keys; Mega couldn’t share your keys even if it wanted to. Mega is ostensibly a “cloud storage service.” You’re the pirate. Remember that TOS you agreed to, scumbag? Oh, and you’re personally identifying information like name and IP? Those aren’t encrypted.
>This won’t protect big-time “share it with the world” pirates. People who go around sharing links and keys at the same time are just as vulnerable as they are anywhere else.

[BitTorrent](http://en.wikipedia.org/wiki/BitTorrent) based file sharing in combination with [Ipredator](http://en.wikipedia.org/wiki/Ipredator) is definitely more secure.

## Does MEGA offer anonymity?

No, not at all: Users are supposed to register and their IP address is being logged.

## How does Kim Dotcom protect himself?

Because the files are stored encrypted, MEGA basically does not know what they have on their servers. The principle behind this is called [plausible deniability](http://en.wikipedia.org/wiki/Plausible_deniability). By doing this MEGA puts all the responsibility on the users. A smart move - first and foremost Dotcom is protecting himself.

## Will MEGA circumvent copyright for good?

Hard to say. But it is safe to say that this is an easy, user friendly and ready for the masses System to share files with other people. This in itself is a challenge for copyright, but this kind of challenge was present before MEGA.

## Is the functionality of MEGA comparable to Dropbox?

Yes, their structure and user interface are very similar. MEGA is lacking the desktop client, that is running in the background, which makes Dropbox so exciting. MEGAs approach to encrypt files by default, is good and should be adopted by cloud services in general, but then the encryption should lie in the hands of the users, too. This is the case with the [Dropbox add-on Boxcryptor](https://www.boxcryptor.com/?lang=en). It encrypts your files in a decent way - on your own hard drive, too.

## What others ways of securely sharing files with my friends do I have?

Again, the cloud is not the right place for private files. Sharing movies in small circles does work (better) over Dropbox. If you encrypt the files first and exchange the key over a different channel, you are doing it right. [Owncloud](http://owncloud.org/) is also great, in that case everything runs on your own server.

## What happens, if I upload movies or music to MEGA and share them (and the key) with my friends?

This should not be a problem, as long as the circle is limited and your friends don''t pass on the links and keys. The real fun with file sharing begins once everything is searchable. This won''t be possible without liable users in the middle that publish download links and the associated keys. Once the links are out in the open, it is known that the files you have uploaded are protected by copyright - and MEGA has your IP, and the ToS state that they will pass it on when requested.

## Should I host my private Files on MEGA?

No, Kim Dotcoms projects are considered less respectable. People that had their files on Megaupload, never got them back because everything was confiscated. Hosting private files on the cloud is not a good idea to begin with, especially with MEGA because it is uncertain whether there is a back-door in the encryption.

## What are the good aspects of MEGA?

The default encryption is a step in the right direction, in this case the implementation is lacking consistency and thus can`t be recognized as satisfactory. In the realm of web-based services MEGA has come quite far, but not nearly far enough to be regarded as a solution for carefree end-to-end encryption.

## Kim Dotcom the internet hero?

Kim Dotcom wants to be seen as an internet hero somewhere between Julian Assange and [Aaron Swartz](http://en.wikipedia.org/wiki/Aaron_Swartz). This can be criticized, as Wikipedia knows:

> In 1994, he was arrested by German police for trafficking in stolen phone calling card numbers. He was held in custody for a month, released and arrested again on additional hacking charges shortly afterwards. He was eventually convicted of 11 counts of computer fraud, 10 counts of data espionage, and an assortment of other charges. He received a two-year suspended sentence – because he was under age at the time the crimes were committed.[30] The judge in the case said the court viewed his actions as "youthful foolishness."[15]


Many people are interested in Kim Dotcom because of his fondness for grand orchestrations - this is entertaining in any case.

*Update 21.01.2013:*
[Arstechnica](http://arstechnica.com/business/2013/01/megabad-a-quick-look-at-the-state-of-megas-encryption/) attested that MEGAs encryption is not good. The developer of Cryptocat [tweets](https://twitter.com/kaepora/status/292699360725200896): “Analysis: Mega can selectively disable crypto for targeted users without them noticing. Crypto also uses insufficient sources of randomness”


John F. Nebel

John F Nebel began writing at a now discontinued citymagazine as a nightlife columnist. At Metronaut his topics are fundamental rights, freedom, surveillance, net politics, public relations and everything else, he is interested in.
