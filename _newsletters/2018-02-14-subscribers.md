---
layout: newsletter
slug: 2018-02-14-subscribers
---

Hello, and Happy Valentine's Day!

In this week's newsletter we cover DeepMind's IMPALA, as well as a few interesting use cases concerning how machine learning can (maybe) impact your love life. 

## DeepMind's IMPALA

In an ongoing effort to create an artificial intelligence that can meet or surpass human performance, much effort has gone into advancing deep reinforcement learning algorithms and this field is advancing at lightning speed.  By training agents/actors to navigate various environments, researchers are able to quickly and cheaply test how their models might function in real-world environments.  The state of the art in these algorithms to date has been [A3C](https://arxiv.org/abs/1602.01783) which uses multiple actor-learner pairs in parallel to stabilize the learning process.  A3C networks pause periodically to share gradients with a centralized parameter server.

Last week Google’s DeepMind published the details of [IMPALA (Importance Weighted Actor-Learner Architectures)](https://arxiv.org/pdf/1802.01561.pdf) which represents a step forward in Deep Reinforcement Learning. They tested IMPALA on DMLab-30, which currently consists of a set of 30 tasks from the Deep Lab environment, which are used to test actors' effectiveness in the environments. The biggest advancement from the current state of the art is that the A3C models pause periodically to share gradients with a centralized parameter server, whereas the actors in IMPALA continually collect experiences (which may be asynchronous with respect to the learner) and then transfer those to a centralized learner, which then computes the gradients. In both cases (A3C and IMPALA), multiple actors are transferring a signal to a centralized place, but IMPALA does not have to wait for the updates to proceed.  

![]({{ site.github.url }}/images/2018/02/IMPALA:_Scalable_Distributed_DeepRL_in_DMLab_30_or_DeepMind_2018_02_12_09_48_15-1518447579695.png)
##### Image Credit: [Figure from the DeepMind blog](https://deepmind.com/blog/impala-scalable-distributed-deeprl-dmlab-30/)

Additionally, IMPALA has achieved a throughput of 250K frames per second (which is 25x faster than the current state of the art A3C), and can be scaled to thousands of machines at once.  This opens to the door for much faster development.  Another advancement is that while A3C and IMPALA both learn asynchronously, A3C suffers from instabilities during learning. IMPALA avoids these errors, which are caused by delayed updates from mini-batches of learners, by implementing a novel procedure called V-trace. Finally, IMPALA shows transfer across tasks through multi-task learning (by training a single agent on many tasks). Most deep reinforcement learning researchers have been making progress solely in the realm of single tasks with one agent at a time, so we’re excited to see what new opportunities IMPALA presents with it’s increased speed, accuracy and extension to multi-task learning.

---

## Valentine’s Bots

We've had our eyes on [Natural Language Processing]( https://fastforwardlabs.com/research/FF01) and [machine learning applied to text]( https://fastforwardlabs.com/research/FF04) for awhile, and we enjoy reading about unusual and entertaining use cases. 

[Janelle Shane](http://aiweirdness.com/) has [trained a neural network](http://aiweirdness.com/post/170685749687/candy-heart-messages-written-by-a-neural-network) to write messages of the type normally seen on those little candy hearts that tend to appear on store shelves in February (does _anyone_ actually eat them?).

![]({{ site.github.url }}/images/2018/02/colorful_2591094_1920-1518492683015.jpg)

Shane used an [existing neural net framework]( https://github.com/karpathy/char-rnn) and trained it with real-life candy heart messages. Then she asked the network to generate its own messages. You can be the judge of whether the neural net’s messages are credible; here are a few that we liked:

* LOVE BOT
* YOU ARE BABE
* HEART ME
* CUTE KISS
* SWEET PEAR
* SWEAT PEAR (so neural nets aren’t perfect – who is?)
* STANK LOVE (well, there’s someone for everyone, right?)

Shane has also [used neural nets to create pickup lines]( http://aiweirdness.com/post/159302925452/the-neural-network-generated-pickup-lines-that-are). (They’re perhaps not quite as succinct as the heart messages, but they just might do the trick.)

And of course, if any of these machine-learning generated candy hearts and pick-up lines do actually work, algorithms can also predict how long you’ll stay in a relationship, as discussed [in this talk](https://youtu.be/Z3v2c_OysI4) by Cloudera Fast Forward Labs’s own Friederike Schuur.

--- 

## Job Postings

Here are a couple of other new job postings we've heard about recently.  We're always happy to share opportunities, so please let us know if you have anything you'd like us to share.

* **Silectis** - Data Engineer ([job description](https://www.silect.is/careers-data-engineer))
* **Silectis** - Platform Engineer ([job description](https://www.silect.is/careers-platform-engineer))
* **Cloudera** - Director Product Management, Data Science ([job description](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USA--California--Palo-Alto/Director-Product-Management--Data-Science_180286))

---

## CFFL Updates

* Hilary will be speaking on March 7th at the [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ca/) in San José, and Mike will be presenting on [Interpretable Machine Learning Products](https://conferences.oreilly.com/strata/strata-ca/public/schedule/detail/63572) at Strata on March 7th, as well.

* Brian will be speaking at the [Cloudera Sessions](https://www.cloudera.com/more/events/sessions/sao-paulo.html) event in São Paulo on March 13th.

* and Mike will be speaking on interpretability at [Qcon.ai](https://qcon.ai/) on April 11th in San Francisco.

* Also, be sure to catch Hilary in conversation with Hugo Bowne-Anderson in [the first episode](https://www.datacamp.com/community/podcast/data-science-past-present-and-future) of DataCamp's new podcast, [DataFramed](https://www.datacamp.com/community/podcast), and keep an eye out for future episodes featuring other members of the CFFL team, too! (We'll let you know when they're released!)

As always, thank you for reading!  We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at subscribers@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team
