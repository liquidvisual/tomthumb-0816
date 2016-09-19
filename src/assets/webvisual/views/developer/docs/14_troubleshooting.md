---
title: Troubleshooting
group: Miscellaneous
type: developer_doc
order: '14'
---

# Troubleshooting
---

<div class="spacer m-b-3"></div>

## I'm Receiving an EMFILE error

This relates to the hard limits set by the operating system and the ability for browserSync to watch files. If the limit exceeds, the terminal will throw the below error.

```shell
Fatal error: EMFILE: Too many opened files.
```
 A way around this is to set a higher limit with each session. Simply use the following and you're good to go:

```shell
ulimit -n 10240
```

<div class="spacer m-b-2"></div>

## Random CSS Styles Aren't Working in IE

There's a lesser known restriction in Internet Explorer where stylesheets hit a soft limit of 4095 selectors. Reaching this number will cause IE6, IE7, IE8 and IE9 to simply ignore all subsequent rules past that limit. The best course of action is to break files down into multiple files to reduce this number.

Another way around this can be found in "Blessing" files. See [http://blesscss.com](http://blesscss.com)

<div class="spacer m-b-2"></div>

## My Assets Aren't Loading Properly

All paths are **root relative**, pointing to an **/assets** directory and assuming everything resides in that root directory.

If images or font icons fail to load in your environment, it's most likely an issue with paths. Make sure the **assets/** folder is in the root directory. For more information see [Assets](/manage/#/developer/docs/08_assets/).

<div class="spacer m-b-2"></div>

## I Can't Run 'npm install'

In many cases a failure with `npm install` is to do with user permissions. On Mac one can use __sudo__ to run the command as Administrator, which takes care of it in most cases:

```
sudo npm install
```

Failing that, you may want to clear npm's cache - as some files can get corrupted if downloaded incorrectly.

Delete the __/node-modules__ directory and then run:

```
sudo npm cache clean
sudo npm install
```