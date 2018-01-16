---
layout: newsletter
slug: 2018-01-17-subscribers
---

Hello!  In our newsletter this week, we share some thoughts on image segmentation, and a response to Gary Marcus's paper, "[Deep Learning: A Critical Appraisal](https://arxiv.org/abs/1801.00631_)."

---

## Segmentation of images: the state of the art

Dividing an input into semantically meaningful chunks for further processing is a common task in computer science and machine learning. In natural language, these chunks might be something as simple as sentences. This is harder than it seems, and requires a system that understands the rules of grammar and punctuation, which vary by language.

But segmenting images is an even harder problem. The goal is to automatically find regions of an image that are similar in color and other low-level properties. These regions are better than raw pixels for many downstream image and video tasks because pixels are simply the result of the arbitrary division of a scene into squares by a camera sensor, while these segments — or "superpixels" — are semantically more coherent. (They also have the advantage of being less numerous than pixels, which makes subsequent computation cheaper!)

The coherence of the image segments (and the fact that they are less numerous than the raw pixels) makes them useful for tasks ranging from 3D environment reconstruction in robotics to "[clothing parsing](http://dl.acm.org/citation.cfm?id=2355126)"  (which is what it sounds like!).

![]({{ site.github.url }}/images/2018/01/segmentation_clothing_parsing-1516133869324.png)

At Cloudera Fast Forward Labs, we encountered the image segmentation problem during our [report on interpretability](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html). The technical part of that report focused on [a new algorithm called LIME](http://blog.fastforwardlabs.com/2017/09/01/LIME-for-couples.html) that can "agnostically" interpret black box machine learning models. But in order to interpret the behavior of image classifiers, it needs to have an idea of the basic unit of image input. For this, it uses a superpixel algorithm.

There is a whole zoo of options for superpixel algorithms available, and - until recently - it was only clear to experts which were preferable. That's why we were excited to find [Superpixels: An Evaluation of the State-of-the-Art](https://arxiv.org/abs/1612.01601), by David Stutz and collaborators. Their [comprehensive, public, reproducible benchmark](https://github.com/davidstutz/superpixel-benchmark) uses several metrics for the performance of each algorithm, and also takes a qualitative look at speed.

![]({{ site.github.url }}/images/2018/01/segmentation_lime-1516133801914.png)

##### Image credit: [Why Should I Trust You? Explaining the Predictions of Any Classifier](https://arxiv.org/abs/1602.04938) (Riberio et al.)

Their clear conclusion is that, by any metric, an algorithm called [Extended Topology Preserving Segmentation](http://www.cs.toronto.edu/~yaojian/cvpr15.pdf) ([open source implementation](https://bitbucket.org/mboben/spixel)) is the current state of the art. The algorithm seeks to preserve boundaries, and takes advantage of stereo images when they are available. And - crucially - it's fast enough to segment a typical video feed in real time.

This is not machine learning. The algorithm is based on clever ideas and trial-and-error. But it provides a strong foundation for the downstream machine learning tasks for which we use superpixels, such as LIME. It's yet another reminder of the importance of feature engineering — and human ingenuity — in the future of artificial intelligence.

---

## On Gary Marcus's "Deep Learning: A Critical Appraisal"

In a recent [short paper](https://arxiv.org/abs/1801.00631), NYU Professor Gary Marcus discusses the limitations of deep learning as a technology, and argues that the hype over deep learning stands to do more harm than good. His central thesis is that deep learning cannot be a panacea that enables generalized AI.  This reasonable position is at odds with most of the rest of the article, though, which reads like a catalog of reasons deep learning won’t be useful beyond its current, limited applications.

Marcus leads into his first section with the heading, “Is deep learning approaching a wall?” In response, we point to [Betteridge’s Law of Headlines](https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines): “no.” Or at least, “not necessarily.” Marcus does not make the case that deep learning as a technology cannot expand beyond its current limitations.

His paper discusses ten limitations of deep learning, all legitimate. But his conclusions are unnecessarily pessimistic. For example, he correctly notes that deep learning lacks transparency, but his discussion of the work to solve these problems is dismissive. In essence, Marcus seems to be saying “we’re not there yet” and then quickly moves along to the next topic. Indeed, his paper is littered with terms like “current” and “at present,” and each section heading that discusses limitations includes the term “thus far.” His unspoken suggestion, though, is that the fact that these problems are not _currently_ solved is evidence that they cannot or will not be.

Marcus also notes correctly that hype around AI and especially deep learning is dangerous to the future capabilities of deep learning and parallel technologies. We agree that hype is dangerous, and that we do not serve the AI community by overstating the _current or imminent_ capabilities of the technology. Deep learning is certainly no magic bullet. But Marcus is generally too pessimistic on the _potential_ capabilities deep learning may have in store. (He admits his pessimism by reference to an earlier article he wrote, then redeems himself — somewhat dubiously — by ending on a note of excitement.)

We agree with Marcus’s assessment that deep learning is but one tool in a toolbox; it has applications for which it is particularly suitable and applications in which it is (at least currently) unsuitable. But we posit that the tool is changing, and that we’re far from understanding even the range of applications of the tool that is _current_ deep learning, let alone the applications that may become possible as we improve that tool.

---

## Job Postings

Here are a few job postings we've heard about recently: 

* **The Rockefeller Foundation** - Managing Director, Data Technology ([job description](https://www.rockefellerfoundation.org/about-us/careers/managing-director-data-technology/))
* **TD Ameritrade** - Senior Specialist, UI/UX Lead ([job description](https://jobs.tdameritrade.com/job/st-louis/senior-specialist-ui-ux-lead/1121/6333455))
* **Center for Court Innovation** - Project Manager, Technology ([job description](https://www.courtinnovation.org/careers/project-manager-technology))

We're always happy to share opportunities; please let us know if you have any you'd like for us to pass along.

---

## CFFL Updates

Last week we introduced our newest research engineer, [Alice Albrecht](https://www.linkedin.com/in/alice-albrecht-6379868/), but unfortunately, her biography was inadvertently left out of the newsletter - so here's a bit more about Alice: prior to joining Cloudera Fast Forward Labs, Alice worked in both finance and technology companies as a practicing data scientist, data science leader, and - most recently - a data product manager. In addition to teaching machines to do cool things, Alice is passionate about mentoring and helping others grow in their careers. Alice holds a PhD from Yale in cognitive neuroscience where she studied how humans summarize sensory information from the world around them and the neural substrates that underlie those summaries.


Thank you, as always, for reading!  We'd love to hear your thoughts - and questions! You can reach us anytime at subscribers@fastforwardlabs.com.

Until next week,

-- The Cloudera Fast Forward Labs Team
