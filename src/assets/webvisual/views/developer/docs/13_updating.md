---
title: Updating
group: Miscellaneous
type: developer_doc
order: '13'
---

{% assign settings = site.data.settings %}
{% assign github_repo = settings.github_repo_path %}
{% assign github_pages = github_repo | append: '/tree/gh-pages' %}

# Updating
---

<div class="spacer m-b-3"></div>

## The Easy Way

Cosmetic changes can be applied the quickest by simply replacing your **/assets** folder with the one in the [gh-pages]({{ github_pages }}) repo, assuming __liquidvisual__ is contracted for updates. Remember the assets folder contains everything that isn't HTML (images, fonts, JavaScript, CSS).

<div class="spacer m-b-2"></div>

## The DIY Way

In a pinch, you may want to fix something quickly yourself. To avoid the effort of installing the codebase, simply create a new stylesheet or JavaScript file and link to it in the ```<head>``` of your document. These files can store quick fixes and time sensitive updates. At a later time, they can be absorbed into the SCSS files and recompiled with a ```grunt build``` by you or your developer.

In future, when updates are made - one only needs to copy over the **dist/assets** folder from the remote repo into your CMS environment.

## Aren't Two Codebases Counter Intuitive?

Yes and no. In our experience, upgrading the simplest of websites once inside a CMS can be really difficult, and that difficulty grows exponentially with every change. You lose the ability to use local tools such as browserSync to quickly preview changes and your ability to version control updates.

Having a Jekyll codebase for development has 3 powerful advantages:

1. Quick to prototype major changes.
2. Portability - the ability to run the site outside of a CMS.
3. Easier for external developers to pick up, without needing to know the CMS language or environment.