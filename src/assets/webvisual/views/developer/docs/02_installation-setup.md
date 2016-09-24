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

* [Git](https://git-scm.com){:target="_blank"}
* [Ruby](https://www.ruby-lang.org/en/){:target="_blank"} (1.9.3 or above)
* [NodeJS](https://nodejs.org/){:target="_blank"}
* [Python](https://www.python.org/downloads/){:target="_blank"} (optional)

<div class="spacer m-b-2"></div>

### 01. Install Homebrew

[Homebrew](http://brew.sh){:target="_blank"} is a package manager for MacOS. We'll use it to install Command Line Tools for [Git](https://git-scm.com){:target="_blank"} now, and later [NodeJS](https://nodejs.org/){:target="_blank"} and [Python](https://www.python.org){:target="_blank"} (optional). Pull up Terminal and paste the following:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Next, add the Homebrew location to your ```$PATH```. We'll create a __.bash_profile__ or edit an existing one.

    touch ~/,bash_profile; open ~/.bash_profile

Then add the following to your file and save. This will allow us to run future commands without giving Administrator access.

    export PATH="/usr/local/bin:$PATH"

### 02. Ruby

Ruby typically comes installed with MacOS, although it's always good to have the latest version. We recommend installing *or updating* Ruby through [RVM](https://rvm.io){:target="_blank"}.

    \curl -sSL https://get.rvm.io | bash -s stable --ruby

Next, **reboot the terminal window**. If successful you should be able to see the new version number.

    ruby -v

MacOS will have RubyGems installed by default, but we'll grab the latest version.

    gem update --system

To test your RubyGems install, you can now use it to grab [Bundler](http://bundler.io). We use Bundler to install Ruby dependencies such as [Jekyll](https://jekyllrb.com){:target="_blank"}.

    gem install bundler

### 03. NodeJS

Next, install Node with Homebrew. Please be patient, as this can take some time.

    brew install -v node

To test your Node install, try installing [Grunt](http://gruntjs.com/){:target="_blank"} which will be used to run the build process.

    npm install -g grunt-cli

Next install [Bower](http://bower.io){:target="_blank"}. We use Bower to retrieve front-end dependencies such as Bootstrap, JQuery and others.

    npm install -g bower

### 04. Python

MacOS will have Python installed by default, but we'll grab the latest version. In this case __Python is optional__. We use it in our Grunt File to create an ad-hoc local server to immediately serve the contents of our processed build.

If successful, you should be able to see the version.

    python

<div class="spacer m-b-2"></div>

## Start the Server

Once everything is installed, you can clone the codebase or [download]({{ github_repo_path }}){:target="_blank"} the contents from our Github repo.

    git clone git@github.com:liquidvisual/{{ github_repo_name }}.git

Now that you have the project, we can download its dependencies.

    cd {{ github_repo_name }}
    bower install     # => for front-end dependencies (Eg. Bootstrap, JQuery etc)
    bundle install    # => for Ruby dependencies (Eg. Jekyll)
    npm install       # => for Node dependencies (Eg. Grunt)

Next we'll create a local server by running the Grunt task ```grunt serve```. Any changes to the files (eg. SCSS, JS etc) will trigger a page refresh in the browser.

    grunt serve

If successful, your favorite browser should launch with [http://localhost:9000](http://localhost:9000).

<div class="spacer m-b-2"></div>

### For Production

The following task ```grunt build``` will compile everything into the final end-product. Files will concatenate and minify, assets will be compressed to produce a __/dist__ folder, which can then be uploaded directly to a server.

    grunt build    # => to concat and minify etc

To view the contents of the compiled build in the browser, you can run the following task. This will run ```grunt build``` followed by creating an ad-hoc local server with Python.

    grunt host    # => Now browse to http://localhost:8000

If successful, your favorite browser should launch with [http://localhost:8000](http://localhost:8000).
Please note the change from port 9000 to **8000**.

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