---
title: Compatibility
group: Getting Started
type: developer_doc
order: '05'
---

# Compatibility
---

<div class="panel">
  <strong>NOTE:</strong>
  <p>Cross browser testing has been performed in IE9 and IE10 in addition to all modern browsers.</p>
</div>

### IE Conditionals

IE Conditionals are found throughout the Base layout but the most important are at the very top.

```
<!DOCTYPE html>
<!--[if lt IE 9]>       <html class="lt-ie9"> <![endif]-->
<!--[if IE 9]>          <html class="lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!-->  <html> <!--<![endif]-->
```
This allows us to target "versions" of IE in CSS and JS by using a **.lt-ie[x]** class selector.

### Polyfills

All polyfills are found in the **master.html** in the **/layouts** folder. The order of these items in that Master layout is extremely important. Let's run through them.

```html
<!-- Priority Scripts -->
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>
```

[Modernizr](http://modernizr.com) is loaded in the head via CDN (right below JQuery). Modernizr is a JavaScript library that detects HTML5 and CSS3 features. IE8 will NOT recognise HTML5 elements such as `<article>` or `<header>` by default. Fortunately Modernizr patches this for us.

## CDNs

Leveraging content delivery networks is much easier for these polyfills. We don't have to worry about minifying or maintaining local files. Business networks **may** have an issue if they have some crazy firewall in place - but in that case they wouldn't be able to load fonts from Google either. Best to keep in mind.


<p class="text-center medium-text-right">
  <a href="/docs/basics/templates/"><b>Next Up:</b> Templates →</a>
</p>