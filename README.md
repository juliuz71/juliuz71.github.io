trasparente.github.io
=====================

### Links

* online: http://trasparente.github.io/
* repository: https://github.com/trasparente/trasparente.github.io/
* post folder: https://github.com/trasparente/trasparente.github.io/tree/master/_posts
* http://jekyllrb.com/
* https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

SETUP
-----

Fork this repository and change its name according to `yourusername.github.io` which is the new address of your site.

Edit `_config.yml` file:

```
name: trasparente
title: trasparente homepage
description: Can be anything

# CSS THEMES in folder /assets/css/
css: [ 'base.css' ]

# SCRIPTS in folder /assets/js/
script: [ 'jquery-1.10.1.min.js', 'base.js' ]
```

`name` and `description` are used for page `title` meta tag (along with specific page title) and in site header.

Here you can add custom `css` and `js` files you need to call across site, place relative files in `assets/css/` and `assets/js/` folders.

ADD A POST
----------

Just add a **markdown** file in `_posts/` folder, named by `YYYY-MM-DD-file-name.md` and this structure:

```
---
layout: post
title: title of the post
category: jazz
tags: [ tag1, tag2 ... ]
---

This is the excerpt

This is the content
...
```

### Optional parameters in head

* `class: post-class` – Is added as a css-class on your post `<article>` html tag. Use this to custom-style particular posts.
* `description: post-description` – Used in page meta description, override `site.description`.

### Headers

You can use posts just to show an header in desired position using `header` layout. Posts with layout not `post` will be ignored by archive page and search results:

```yaml
---
layout: header
title: we love headers
---
optional: if you need a commented header you can add a *markdown* content here.
```

PAGE ELEMENTS
-------------

Pages are wrapped on a `<body class="page-layout">` tag, `<section>` contain page beyond header menù and footer, page items are wrapped on `<article>` tags:

```html
<body class="page-layout">
  
  <header>
    ... page header
  </header>
  
  <nav>
    ... menù
  </nav>
  
  <section>
    
    <article class="post-class">
      ... article head
      <div>
        ... article content
      </div>
    </article>
    
    ... other articles
    
  </section>
  
  <footer>
    <div>
      ... footer
    </div>
  </footer>
  
</body>
```

### Pagination

Pagination box is shown at bottom of single post page and host links to next and previous posts page.

ADD A PAGE
----------

Add the `pagename.html` file in `assets/pages/` with a yaml front matter block:

```yaml
---
layout: layout-name
title: Page Name
permalink: /pagename/
---
```

* `layout` – Basic layout is `default`, if you need a new one add a file `layout-name.html` in `_layouts/` folder.
* `title` – Used in status bar.
* `permalink` – URL of the page.

### Custom variables

* `script: [ 'customscript.js' ]` – If page needs custom scripts add here the filename along with the file in `assests/js/`.
* `description: page-description` – Used in page meta description, override `site.description`.

### Site menù

You can add (and edit) menù links, just edit the file `_data/menu.yml`:

```yaml
- name: textlink
  url: /pagename/
  description: Search page
```

* `name` – Clickable text on the menù.
* `url` – Page permalink.
* `description` – Title of the link.

SEARCH
------

both *keyup* and *url parameter* search.

Search is performed on every field `keyup` event, via ajax calling of `search.json` file where target fields are collected for every post:

```json
{
    "title"     : "{{ post.title }}",
    "url"       : "{{ post.url }}",
    "date"      : "{{ post.date | date: "%e %B %Y" }}",
    "tags"      : "{% for tags in post.tags %}{{ tags }}{% if forloop.last %}{% else %}, {% endif %}{% endfor %}",
    "category"  : "{{ post.category }}"
}
```

You can pass query string to search page as url parameter so you can careate filter links like `/search/?string=specific-tag` or `/search/?string=genuary 2014`.

Search results div is populated by `template` setting variabile in `assets/js/simpleJekyllSearch.js`.

### Customize search

If you need to restrict search on custom post fields just add them in post head:

```yaml
---
layout: post
title: my title
customkey: yellow
---
```

Add in `pages/search.json` a call `"customkey"   : "{{ post.customkey }}"`

You can add custom key on search results tweaking `template` var in `assets/js/simpleJekyllSearch.js` using `{customkey}`.