---
title: Installation & Setup
group: Getting Started
type: developer_doc
order: '02'
---

{% assign settings = site.data.settings %}
{% assign github_repo_owner = settings.github_repo_owner %}
{% assign github_repo_name = settings.github_repo_name %}
{% assign github_repo_path = settings.github_repo_path %}

# Installation &amp; Setup
---

<div class="spacer m-b-2"></div>

This project is built with [Jekyll v{{ settings.jekyll_version }}](http://jekyllrb.com){:target="_blank"} - a popular static site generator endorsed by the good folks at Github. For package management we use [Bower](http://bower.io){:target="_blank"} to keep our dependencies in check, and [Grunt.js](http://gruntjs.com){:target="_blank"} - a JavaScript task runner, at the heart of our build process.

<div class="spacer m-b-2"></div>

## Requirements

You'll need the following to run the build process and leverage all its features.

* [Ruby](https://www.ruby-lang.org/en/){:target="_blank"} (1.9.3 or above)
* [RubyGems](https://rubygems.org/pages/download){:target="_blank"}
* [Bundler](http://bundler.io){:target="_blank"}
* [NodeJS](https://nodejs.org/){:target="_blank"}
* [Python](https://www.python.org/downloads/){:target="_blank"} (optional)

<div class="spacer m-b-2"></div>

### 01. Installing Ruby

Ruby typically comes installed with OSX / MacOS, but we've found the most pain-free way to get it up and running is through [Homebrew](http://brew.sh){:target="_blank"}.

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Then using Homebrew to install Ruby:

    \curl -sSL https://get.rvm.io | bash -s stable --ruby

If successful you should be able to see the version.

    ruby -v

### 02. Ruby Gems

Simply [download the executable](https://rubygems.org/pages/download){:target="_blank"} at the official website. If successful, you should be able to see the version.

    gem -v

Once RubyGems is installed, you can use it to grab [Bundler](http://bundler.io). We use Bundler to install Ruby dependencies such as Jekyll.

    gem install bundler

### 03. NodeJS

Simply [download the executable](https://nodejs.org/en/){:target="_blank"} at the official website. If successful, you should be able to see the version.

    node -v

### 04. Python

Simply [download the executable](https://www.python.org/downloads/){:target="_blank"} at the official website. If you're operating OSX or MacOS - Python is likely already installed. __Python is optional__, but we use it in our build script to create an ad-hoc local server to immediately serve the contents of our processed build so one can see the final output.

If successful, you should be able to see the version.

    python -v

<div class="spacer m-b-2"></div>

## Start the Server

Once everything is installed, you can then download the codebase and create a local server running the Grunt task ```grunt serve```. Any changes to the files (eg. SCSS, JS etc) will trigger a live reload in the browser.

    git clone git@github.com:liquidvisual/{{ github_repo_name }}.git
    cd {{ github_repo_name }}
    bundle install
    npm install
    bower install
    grunt serve
    # => Now browse to http://localhost:9000

If successful, head to [http://localhost:9000](http://localhost:9000) to see your website. If you don't have git installed, you can visit the <a href="{{github_repo_path}}" target="_blank"><i class="fa fa-github"></i> Github repo</a> and download the zip directly.

<div class="spacer m-b-2"></div>

### For Production

The following task ```grunt build``` will compile everything into the final end product. Files will concatenate and minify, assets will be compressed to produce a __/dist__ folder, which can then be uploaded directly to a server.

    grunt build # => to concat and minify etc

To view the contents of the compiled build in the browser, you can run the following task. This will run ```grunt build``` followed by creating an ad-hoc local server with Python.

    grunt host # => Now browse to http://localhost:8000

<div class="spacer m-b-2"></div>

## Deploy on Github Pages

You will need the git command line tools installed to utilise the ```grunt deploy``` task, which runs a ```grunt build``` and pushes the contents to the __github-pages__ branch in your Github repo. You'll need to configure your repo's path in the __Gruntfile.js__ however.

<div class="spacer m-b-2"></div>

## Summary of Grunt Tasks

* ```grunt serve``` => for **development**, serves in browser
* ```grunt build``` => for **production**, creates output folder
* ```grunt host``` => runs build then serves in browser
* ```grunt deploy``` => pushes build to __github-pages__ branch

<div class="spacer m-b-2"></div>

<h2>On Windows <i class="fa fa-windows"></i></h2>

Installation is relatively straight forward on Mac or Linux. On Windows however, it will require a few different steps. Unfortunately we don't yet offer a Windows walkthrough, but these resources should help:

[Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)

[Step by Step Guide](http://jekyll-windows.juthilo.com)




<p class="text-xs-right"><a href="/manage/#/developer/docs/03_basic-usage/">Basic Usage <i class="fa fa-long-arrow-right"></i></a></p>