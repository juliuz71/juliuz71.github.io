---
layout: post
title: PAGE ELEMENTS
category: Docs
---

Custom style pages and posts.

Pages are wrapped on a `<body class="page-layout">` tag, `<section>` contain page beyond header menù and footer, page items are wrapped on `<article>` tags:

{% highlight html %}
<body class="page-layout">
  <header>
    <! -- page header -- !>
  </header>
  <nav>
    <! -- menù -- !>
  </nav>
  <section>
    <article class="post-class">
      <! -- article head -- !>
      <div>
        <! -- article content -- !>
      </div>
    </article>
    <! -- other articles -- !>
  </section>
  <footer>
    <div>
      <! -- footer -- !>
    </div>
  </footer>
</body>
{% endhighlight %}

### Articles

* `_layouts/post.html` – Layout for single post page:

{% highlight html %}
<div>
  <h1><! -- title -- !></h1>
	<h2><! -- excerpt -- !></h2>
  <p class="metadata"><! -- date and category -- !></p>
	<div class="content"><! -- content -- !></div>
	<p class="metadata"><! -- tag list and author -- !></p>
	<div class="pagination clearfix"><! -- pagination -- !></div>
</div>
{% endhighlight %}

* `_includes/home-item.html` – Template for post list in homepage:

{% highlight html %}
<div>
  <h1><! -- title and post link -- !></h1>
  <h2><! -- excerpt -- !></h2>
  <p class="metadata"><! -- date and category -- !></p>
</div>
{% endhighlight %}

* `_includes/archive-item.html` – Template for post list in Archive:

{% highlight html %}
<div>
  <h2><! -- title and post link -- !></h2>
  <h3><! -- excerpt -- !></h3>
  <p class="metadata"><! -- date and category -- !></p>
</div>
{% endhighlight %}

### Pagination

Pagination box is shown at bottom of single post page and host links to next and previous posts.