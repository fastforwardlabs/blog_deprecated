---
slug: 2018-10-03-subscribers
layout: newsletter
---

Hello!  In this week's newsletter, Nisha takes a look at some of the recent research on meta-learning methods, and Grant investigates a few interesting approaches to giving web users more control over their data.

---

## Learning to learn in a model-agnostic way

_by [Nisha](https://twitter.com/NishaMuktewar)_

As humans, we can quickly adapt our actions in new situations, be it recognizing objects from a few examples, or learning new skills and
applying them in a matter of just a few minutes. But when it comes to deep learning techniques, an 
understandably large amount of time and data is required. So the challenge is to help our deep models do the same thing we can - to learn and quickly 
adapt from only a few examples, and to continue to adapt as more data becomes available. This approach of learning to learn is 
called **meta-learning**, and being a hot topic, has seen a flurry of research papers using techniques like 
[matching networks](https://arxiv.org/abs/1606.04080), [memory-augmented networks](https://arxiv.org/abs/1605.06065), 
[sequence generative models](https://arxiv.org/abs/1603.05106), [fast reinforcement learning](https://arxiv.org/abs/1611.05763)
and many others. 

Meta-learning methods differ from many standard machine learning techniques, which involve training on a 
single task and testing on held-out examples from that task. These systems are trained by exposing them to a large number of 
tasks and are then tested in their ability to learn new tasks; an example of a task might be classifying a new image within 5 
possible classes, given one example of each class.

![]({{ site.github.url }}/images/2018/10/meta_learning-1538505489954.png)
##### A meta-learning set-up for few-shot image classification from a paper on [Optimization as a Model for Few-Shot Learning](https://openreview.net/forum?id=rJY0-Kcll)

During this process, the model is trained to learn tasks in the meta-training set. There are two optimizations at play – the 
learner, which learns new tasks, and the meta-learner, which trains the learner. 

One of the recent benchmark papers in this area is [MAML: Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks](https://arxiv.org/abs/1703.03400). 
Like other meta-learning methods, MAML trains over a wide range of tasks. It trains for a representation that can be quickly 
adapted to a new task, via a few gradient steps. The meta-learner seeks to find an initialization that is not only useful for 
adapting to various problems, but also can be adapted quickly (in a small number of steps) and efficiently (using only a few 
examples). Suppose we are seeking to find a set of parameters θ that are highly adaptable. During the course of meta-learning (the bold line), MAML optimizes for a set of parameters such that when a gradient step is taken with respect to a particular task i (the gray lines), the parameters are close to the optimal parameters θ<sup>∗</sup><sub>i</sub> for task i.

![]({{ site.github.url }}/images/2018/10/MAML-1538505613205.png)
##### [(Image source)](https://arxiv.org/pdf/1703.03400.pdf)

This approach is quite simple and has some distinctive advantages:   
- It does not make any assumptions on the form of the model, in the sense that it can be applied to any learning problem and 
model trained with gradient descent procedure.
- It is **parameter efficient** - there are no additional parameters introduced for meta-learning and the learner’s strategy uses a known optimization process (gradient descent), rather than having to come up with one from scratch.
- And, unlike other approaches, it can be readily applied to classification, regression  and reinforcement learning tasks.

---

## The Decentralized Web

*by [Grant](https://twitter.com/GrantCuster)*

Last week, Sir Tim Berners-Lee [announced Solid](https://medium.com/@timberners_lee/one-small-step-for-the-web-87f92217d085), a project designed to give users more control over their data. Solid is one of a number of recent attempts to rethink how the web works. As part of an effort to get my head around the goals of these different approaches and, more concretely, what they actually do, I made some notes on what I see as the most interesting approaches.

![A screenshot of the Beaker browser website.]({{ site.github.url }}/images/editor_uploads/2018-10-02-191324-Screen_Shot_2018_10_01_at_3_04_36_PM.png)

##### [Beaker browser](https://beakerbrowser.com/) for the peer-to-peer web.

The approach I’ve looked at the most is [Beaker Browser](https://beakerbrowser.com/). With Beaker you can view and create peer-to-peer websites using the [Dat protocol](https://datprotocol.com/). I got interested in Beaker because I had seen some of the more experimental designer-devs I follow experimenting with it. It’s very easy to get running, and the interface feels immediately familiar (the browser is built on Chomium, the open-source project that underpins Google Chrome). I viewed some peer-to-peer sites and looked at the number of seeders for them — but I didn’t really know where to go beyond that.

I got a much better picture of the goals and capabilities of Beaker through this talk by [Tara Vancil](https://www.youtube.com/watch?v=rJ_WvfF3FN8), a core member of the Beaker team. Part of the talk is focused on [the web we lost](https://anildash.com/2012/12/13/the_web_we_lost/): the beginner-friendliness of decipherable view source, and places like Geocities (where anyone could make their own weird web pages). With Beaker, you can make your own website and immediately host it on the peer-to-peer web without having to worry about setting up your own server. This could make it a great fit for demonstrations and classroom settings. To have a peer-to-peer site that stays up even when your computer is shut down and your seeders have run out is a bit more complicated. I found Tom MacWright’s [“So you want to decentralize your website”](https://macwright.org/2017/07/20/decentralize-your-website.html) a useful and realistic look at the steps involved.

![]({{ site.github.url }}/images/editor_uploads/2018-10-02-191445-Screen_Shot_2018_10_01_at_3_04_07_PM.png)

##### Tom MacWright's post "So you want to decentralize your website" [web link](https://macwright.org/2017/07/20/decentralize-your-website.html) [dat link](dat://tmcw.hashbase.io/2017/07/20/decentralize-your-website.html)

One of the most interesting parts of Vancil’s talk comes at the end, where she talks about the possibility of a Twitter-like site where each user can fork and modify the appearance and interface at will. She also talks about each user storing their identity locally (through a JSON file) and thereby maintaining control of their data. That vision for control of your data (that services connect to) is also the promise of Berners-Lee’s [Solid](https://solid.inrupt.com/) project. Solid, however, is built on top of the web, rather than being a new protocol.

Beyond trying to understand just what everybody is up to, I find these projects really interesting for the implicit theories about why the web is like it is. For Beaker, they believe lowering barriers to entry will create a weirder, more interesting network. Solid seems more aimed at offering an alternative to the data-collection and advertising business models of social media. [Brave](https://brave.com/) is another attempt to address that business model — an experimental ad-blocking browser with a blockchain-based publisher rewards feature. There are a lot of different approaches and goals swirling around, which is both confusing and kind of fun. Let us know if there is an area related to the decentralized web you think we should be paying attention to.

A few last links:
- You can get a feel for the variety of interests involved by looking through the conference website for the [Decentralized Web Summit 2018](https://decentralizedweb.net/). 
- [IPFS](https://ipfs.io/) is an alternative peer-to-peer protocol.

---

## CFFL Updates

* Ryan will speaking on federated learning at the [Artifical Intelligence Conference](https://conferences.oreilly.com/artificial-intelligence/ai-eu/public/schedule/detail/70309) in London on October 10th, and will also speak on [multi-task learning](https://conferences.oreilly.com/artificial-intelligence/ai-eu/public/schedule/detail/70266) on October 11th.

* Hilary will speaking at the [Open FinTech Forum](https://events.linuxfoundation.org/events/open-fintech-forum-2018/) in NYC on October 11th.

* Mike will be speaking on serverless for data scientists at [PyData LA](https://pydata.org/la2018/) on October 22nd.

* Justin will be speaking at the [Cloudera Sessions event](https://www.cloudera.com/more/events/sessions/toronto.html) in Toronto on October 23rd.

* Matt will speaking on "A Roadmap to Open Data Science" at [Cloudera World Tokyo](http://clouderaworldtokyo.com/2018/sE-04.html) (Tokyo, Japan) on November 6th.

* And be sure to check out [Nisha's interview](https://www.iotworldtoday.com/2018/08/24/a-vital-data-scientist-skill-teaching-others-how-to-fish/) with IoT World Today, and [Hilary's keynote highlight](https://www.oreilly.com/ideas/practical-ml-today-and-tomorrow) from the Strata Data Conference!

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime.

All the best,

The Cloudera Fast Forward Labs Team
