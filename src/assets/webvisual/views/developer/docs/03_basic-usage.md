---
title: Basic Usage
group: Getting Started
type: developer_doc
order: '03'
---

{% assign settings = site.data.settings %}
{% assign github_repo = settings.github_repo_path %}
{% assign github_repo_commits = github_repo | append: '/commits/master' %}
{% assign github_pages = github_repo | append: '/tree/gh-pages' %}
{% assign github_pages_assets = github_repo | append: '/archive/gh-pages.zip' %}

# Basic Usage
---

<div class="spacer m-b-2"></div>

## Integrating into your CMS

Let's assume the client has signed off on the design and the front-end implementation. All that's left now, is to incorporate into your own CMS. In a typical scenario, the third party would be handing over a zipped directory of static files, it's then the developer's job to figure out how everything is structured before breaking it down into template files.

If you prefer that workflow, then by all means continue on as you're familiar. You can download a zip of that folder here:

[{{ github_pages_assets }}]({{ github_pages_assets }}){:target="_blank"}

### Use the Source, Luke

Admittedly it takes a lot of time doing that, and code tends to get soupy. You're going to have a much better time working with and understanding the source files. __This doesn't mean you have to learn Jekyll or Ruby.__ It also doesn't mean you need to have anything installed, you can simply work from the Github repo. All you need to understand is how it slots together on a basic level.

The benefits of working with the source is:

* HTML partials have already been broken up for you.
* Template heirarchy has been thought out and organised for you.
* Basic template logic is already written.
* Content is separated from the layout.

### Liquid as a Basic Templating Engine

The only real major difference between this and your CMS of choice is template syntax. Jekyll uses a very basic templating engine called [Liquid](http://shopify.github.io/liquid/) which should be transferrable to any environment. Ideally, once you've gotten the hang of reading our templates - you'll be able to breeze through, copy-pasting everything and substituting the basic templating syntax for your own.

<div class="spacer m-b-2"></div>

### The Output is Still There If You Need It

The compiled source files are stored in a directory named __/dist__ - which doesn't come with the cloned repo by default (you would need to run ```grunt build``` to generate this folder locally). You can find the contents of this folder on the [github-pages branch]({{ github_pages }}){:target="_blank"}.

<div class="spacer m-b-2"></div>

## Quick Start

<div class="spacer m-b-2"></div>

### 01. Copy Assets Folder

Jump into the [dist directory]({{ github_pages }}){:target="_blank"} and copy the **/assets** folder. This contains all compiled CSS, fonts, images and JavaScript. __Place it into your project's root directory__. This is important, since all paths are root relative to the **/assets** folder.

<div class="spacer m-b-2"></div>

### 02. Copy HTML Partials

All partials are found inside [src/_includes]({{ github_repo}}/tree/master/src/_includes){:target="_blank"}. Layouts will reference partials from inside this folder so copy them into your environment.

<div class="spacer m-b-2"></div>

### 03. Create Base Layout

You'll want to start by creating a base layout in your environment. Open [base.html]({{ github_repo }}/blob/master/src/_layouts/base.html){:target="_blank"} and copy the contents. Make sure to substitute any template logic for your own. When it comes to assets, they compile into **/assets** on build so you'll only need to do a bit of substitution.

You can replace this:

```html
<!-- build:css /assets/css/minified.css -->
    <link rel="stylesheet" href="/css/some-css-file.css">
    <link rel="stylesheet" href="/css/some-css-file.css">
    <link rel="stylesheet" href="/css/some-css-file.css">
    <link rel="stylesheet" href="/css/some-css-file.css">
    <link rel="stylesheet" href="/css/some-css-file.css">
<!-- endbuild -->
```

With this:

    <link rel="stylesheet" href="/assets/css/minified.css">

The same applies to JavaScript. The end result will look like this:

    <script src="/assets/scripts/minified.js"></script> <!-- Before closing body -->

### 04. Create Child Layouts

Once your **base.html** is in place and pointing to your assets correctly, you can then move through the child layouts one by one - again, substituting Liquid template syntax for your own. At this stage, you should be able to view your website as it starts taking shape.

When you're ready to start integrating editable content fields, you can start pulling data from the markdown files inside [_pages]({{ github_repo}}/tree/master/src/_pages){:target="_blank"}. These markdown files contain YAML variables which serve as your content hooks.

<p class="text-xs-right"><a href="/manage/#/developer/docs/04_directory-structure/">Directory Structure <i class="fa fa-long-arrow-right"></i></a></p>