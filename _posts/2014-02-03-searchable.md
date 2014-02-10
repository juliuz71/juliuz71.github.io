---
layout: post
title: SEARCHABLE
category: Docs
---

Both *keyup* and *url parameter* search.

Search is performed on every field `keyup` event, via ajax calling of `search.json` file where target fields are collected for every post:

{% highlight json %}
{
  "title"     : "{% raw %}{{ post.title }}{% endraw %}",
  "url"       : "{% raw %}{{ post.url }}{% endraw %}",
  "date"      : "{% raw %}{{ post.date | date: "%e %B %Y" }}{% endraw %}",
  "tags"      : "{% raw %}{% for tags in post.tags %}{{ tags }}{% if forloop.last %}{% else %}, {% endif %}{% endfor %}{% endraw %}",
  "excerpt"   : "{% raw %}{{ post.excerpt | strip_html }}{% endraw %}",
  "category"  : "{% raw %}{{ post.category }}{% endraw %}"
}
{% endhighlight %}

Search results div is populated by `template` setting variabile in `assets/js/simpleJekyllSearch.js` which is now set like `_includes/archive-item.html`.

You can pass query string to search page as url parameter so you can careate filter links like `/search/?string=specific-tag` or `/search/?string=genuary 2014`.

### Customize search

* If you need to restrict search on custom post fields just add them in post front-matter:

{% highlight yaml %}
---
layout: post
title: my title
customkey: yellow
---
{% endhighlight %}

* Add in `pages/search.json` a call `"customkey"   : "{% raw %}{{ post.customkey }}{% endraw %}"`

* You can show custom keys on search results tweaking `template` var in `assets/js/simpleJekyllSearch.js` using `{customkey}`.