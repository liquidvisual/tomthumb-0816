---
title: Directory Structure
group: Getting Started
type: developer_doc
order: '04'
---

# Directory Structure
---

<div class="spacer m-b-2"></div>

## Root

```
root/
  |--node_modules/
  |
  |--src/
  |  |--[Everything]
  |
  |--dist/
  |  |--[Compiled Directory]
  |
  |--Gruntfile.js
  |--bower.json
  |--package.json
  |--README.md
  |--_config.build.yml
  |--_config.yml
  |--Gemfile
```

__NOTE:__
The __dist/__ folder is not included by default upon cloning and running locally. You would need to run ```grunt build``` to generate it.

<div class="spacer m-b-2"></div>

### ./config.yml

This file instructs Jekyll what to do on compile.

## ./src

As you'll see below, most directories have subfolders which point towards Checkpoint or Westlaw specific data. In cases where files are shared eg. top layouts, these will reside in a **common/** folder.

```
src/
  |--_bower_components/
  |
  |--_data/
  |
  |--_docs/
  |  |--[Documention files]
  |
  |--_includes/
  |  |--snippets/
  |
  |--_layouts/
  |  |--child_layouts/
  |  |--base.html
  |  |--base__page.html
  |  |--base__homepage.html
  |
  |--assets/
  |
  |--_pages/
  |
  |--README.md
  |--robots.txt
  |--CNAME
```

## It All Starts with the Pages Directory

The way Jekyll processes everything begins with Markdown files (.md) stored inside the **pages/** directory. These files contain front-matter YAML which tell the page what layout to use and the page title. They also pass other data, such as strings - which tell the layout to include certain HTML partials.

## In a Nutshell

The two prototypes are controlled by data variables stored inside of **src/data/[name]**. These variables govern colours, navigation and other information that differ between sites.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/getting-started/compatibility/"><b>Next Up:</b> Compatibility →</a>
</p>