---
layout: post
title: "Encartopedia"
date: 2017-08-08 09:00
preview_image: /images/2017/08/enc-tabula.jpg
author: Sepand
author_link: "https://sepans.com/sp"
feature: false
published: true
---

![Tabula Rogeriana](/images/2017/08/enc-tabula.jpg)

Wikipedia corpus is being used a lot in ML community for experimenting, benchmarking and providing examples, however the Wikipedia user interface is intentionally kept simple without adding layers of information on top of the content. So I saw great potential to use some ML techniques and augment new possibilities of navigation for Wikipedia without changing the original hypertextual feel of Wikipedia. The result is **[Encartopedia](http://encartopedia.dev.fastforwardlabs.com/)**:

![Encartopedia](/images/2017/08/enc-ui.png)

The starting point for the research was [hatnote.com](http://seealso.hatnote.com/) which has a glossary of Wikipedia visualizations and alternative user interfaces. Among those examples [Wikigalaxy](http://wiki.polyfra.me/) by [Owen Cornec](http://byowen.com/) was the most inspiring for the attempt in mapping the semantic space of Wikipedia into a navigable space. From there I borrowed the coordinates of the dimensionality reduction algorithm, mapping the articles to 2D coordinates for 100k top Wikipedia articles. In order to have coordinates for all 5M+ Wikipedia articles I used a method similar to this [benchmark](https://rare-technologies.com/performance-shootout-of-nearest-neighbours-contestants/) to create a fast index of 500 dimension LSA vectors for all 5M+ articles using [‘annoy‘](https://github.com/spotify/annoy) to query the nearest neighbors of the article and use triangulation to estimate the position of the new article. The ‘annoy’ index also returns the k-nearest neighbors for any articles, which has been employed in the Encartopedia UI.

In order to have the color coding of the points to be consistent with the result of t-SNE, I found applying [DBSCAN](http://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html) clustering algorithm over the result of t-SNE coordinates very simple and sufficiently good. Unlike many other clustering algorithms DBSCAN doesn’t create evenly sized clusters so the result of clustering ends up being very similar to t-SNE clusters after some parameter tuning. DBSCAN doesn’t assign categories to all the points but it is easy to assign those points to a cluster in the second pass using [Nearest Neighbors](http://scikit-learn.org/stable/modules/neighbors.html). To name those clusters I scraped the Wikipedia Categories assigned to those articles and found the top category shared between those articles.

<p>
	<img src="/images/2017/08/enc-color.png" alt="coloring tsne" style="width: 310px; display: inline-block; margin: 0"/>
	<img src="/images/2017/08/enc-voro.png" alt="voroni tsne" style="width: 340px; display: inline-block; margin: 0"/>
	<div style="width: 90%; margin: 10px auto; font-size: 0.75em; text-align: center">
		<div><b>Left:</b> Color coding points by clustering the result of t-SNE using DBSCAN</div>
		<div><b>Right:</b> Overlaying the clusters with voronoi diagram for mouseover interactions</div>
	</div>
</p>


The UI is build using React and Redux. The map is mostly in THREE.js and rendered on a canvas except for the annotations which are SVG. Using D3.js is almost inevitable in any data-driven UI, especially with the modular design of d3.js version 4. 

In the end I wanted to mention how grateful I am for Fast Forward Labs, especially [Grant](https://twitter.com/GrantCuster), [Hilary](https://twitter.com/hmason) and [Micha](https://github.com/mynameisfiber) for giving me the opportunity and supporting me to work on this project which I was fascinated about for a long time. My interest in Wikipedia is not just because I spend too much time reading random articles, but also the idea of the ultimate encyclopedia containing the totality of human knowledge. Once such an encyclopedia was an idealistic dream that was mostly [fantasized in literature](https://www.pastemagazine.com/blogs/lists/2014/03/10-of-the-weirdest-mostly-fictional-encyclopedias.html), but now its accessibility has completely trivialized it. So maybe being able to map and log the navigation within this metaspace brings back a little bit of the old fantasy.

