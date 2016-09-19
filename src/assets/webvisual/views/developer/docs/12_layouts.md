---
title: Layouts
group: Basics
type: developer_doc
order: '12'
---

# Templating

**NOTE:** All of these folders live inside **/src**

<div class="spacer m-b-2"></div>

## Layouts

Layouts are stored in the **/_layouts** folder and have 3 levels of heirarchy. They inherit from the bottom up.

1. base.html
2. base__page.html
3. base__*.html (eg. base__homepage.html)

<div class="spacer m-b-2"></div>

## Includes

Some templates will draw on partials, which are just small HTML chunks inside the **/_includes** folder. These includes will sometimes use global template variables from their parent template.

<div class="spacer m-b-2"></div>

## Data

Some templates and includes will draw data (such as the navigation and locations listing) from YAML files located inside **/_data**. This keeps things external and templates are able to use basic loops and conditionals to interact with it, similiar to the logic in the back-end.

<div class="spacer m-b-2"></div>

## Pages

Each Jekyll page is initiated with a single MARKDOWN file acting as the point of entry. These files contain meta data, permalinks and page specific variables which get passed into the layouts. They also contain body text which is stored as:

```
{% raw %}{{ content }}{% endraw %}
```

In the YAML front matter - these leaf pages will specify a template to use, eg. /internal/blog.html which will start at the page layouts and inherit up the chain.

<div class="spacer m-b-2"></div>

## Front Matter

Every layout and markdown file (except the master.html) contain front matter in the form of YAML at the head of the document. This is used to specify layouts and page variables. Some data is stubbed inside the actual layout - for hinting and quick access.

As a general rule of thumb; if variables are in the front-matter, they're page variables and user editable. If they're inside the actual layout - it's for layout logic.