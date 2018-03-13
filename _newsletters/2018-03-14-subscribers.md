---
slug: 2018-03-14-subscribers
layout: newsletter
---

Hello!  In this week's newsletter, we discuss combining methods for clearer model interpretability, and some fun creative possibilities with machine learning.

---

## Combining methods for clearer model interpretability

As models increase in complexity and require less hands-on human intervention or training (making them more of a black-box), it can be difficult or impossible to understand how output is related to the original data that goes into these models. We care deeply about this issue and have dedicated a [report](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html) and several blog posts ([1](http://blog.fastforwardlabs.com/2017/11/02/interpretability-scifi-the-definition-of-success.html), [2](http://blog.fastforwardlabs.com/2017/09/28/the-product-possibilities-of-interpretability.html), [3](http://blog.fastforwardlabs.com/2017/09/11/interpretability-webinar.html), [4](http://blog.fastforwardlabs.com/2017/09/01/LIME-for-couples.html), [5](http://blog.fastforwardlabs.com/2017/08/02/business-interpretability.html)) to the topic. In addition to the technical advances in this area, there is a larger cross-disciplinary discussion around the legal and ethical considerations when building machine learning models that affect people’s lives that we encourage you to tune into. ([Data and Society](https://datasociety.net/) is a great place to get started). From a technical standpoint, the number of methods used for inspecting what’s happening in black-box models is growing (we implemented the [Local Interpretable Model-Agnostic Explanations](https://arxiv.org/abs/1602.04938) (LIME) technique to build the prototype for our report on interpretability).  

Recently, [Olah et al. (2018)](https://distill.pub/2018/building-blocks/) discussed a way of combining different techniques into a more cohesive and comprehensive program for interpreting machine learning models. This work builds on previous work detailing feature visualization techniques, using [GoogleLenNet](https://distill.pub/2017/feature-visualization/appendix/), which allows model creators to inspect what each layer of a neural network is using as [input](https://distill.pub/2017/feature-visualization/). Feature visualization as a technique is not restricted to visual image classification, but rather can be used with auditory and text signals as well. The advantage (which varies in its applicability from one classification algorithm to the next) is that when inspecting different layers, humans or additional models can ascribe semantic meaning to the machine-generated images, sounds, or text. This increases the ease of interpetability for these types of models.

The different techniques in the recent Olah et al. article for interpreting a machine learning algorithm are not new on their own, but what is novel is the idea of combining multiple techniques - which each optimize for different things. For instance, if we’re curious about what attributes of the input contributed to a particular classification (say labrador retreiver present), we’d want to focus more heavily on understanding particular _activations_ at different layers of a neural network. However, if we’re more interested in understanding why a network has operated the way it has (not necessarily focusing on the end classification), we’d want to better understand the _attributions_- which explain the relationship between neurons. Similarly, there are ways we can slice a representation we’re interpreting that will alter our interpretation of a model. For instance, we can focus on input to _individual neurons_, on _spatial locations_ or across _channels_ (in which case we lose spatial information). 

![An illustration from Olah et al. 2018 Distil article]({{ site.github.url }}/images/2018/03/Distill_interpretability_slices-1520959970667.png)

Matrix factorization (another useful tool in interpreting models) is a technique that strives to find the optimal balance between these different ways of slicing the input.  

Thinking critically about the question you're trying to answer when interpeting a machine learning model will guide you to which technique (and hopefully increasingly which combination of techniques) is best for your needs. As the practice of understanding and interacting with machine learning models progresses, this question should come soon after understanding that the ability to interpret machine learning models allows us to protect against unintentional harm and allows us to more quickly and easily debug our models.  

---
## New creative possibilities with machine learning

Machine learning techniques are able to organize large amounts of unstructured data. Combined with dimensionality reduction techniques like t-SNE, this capability opens up new ways for us to interact with creative material including sounds, words, and ideas. In this section we highlight three of our favorite recent experiments.

![A screenshot of The Infinite Drum Machine. Showing the sample map with certain sounds like "Bag Plastic" highlighted and a drum sequencer at the bottom.]({{ site.github.url }}/images/editor_uploads/2018-03-09-203445-Screen_Shot_2018_03_08_at_3_21_16_PM.png)

[The Infinite Drum Machine](https://experiments.withgoogle.com/ai/drum-machine) is a Google Creative Lab experiment by Manny Tan and Kyle McDonald. It uses machine learning to cluster a large number of samples by similarity of sound. The user then selects clips, which can range from "gravel scoop tin cup" to "casino poker chip," from a sound map visualization created using t-SNE. The samples feed into a sequencer to create an uncanny drum machine.

Conceptually, the project works because it plays off the long history of hip-hop and electronic musicians using samples from surprising sources (one of Grant's favorite, kind of gross, examples is [Matmos' "A Chance to Cut is a Chance to Cure"](https://pitchfork.com/reviews/albums/5151-a-chance-to-cut-is-a-chance-to-cure/)). Sometimes machine learning systems give disappointing results because the system lacks context. In this case, the lack of context is a virtue. It frees the system up to make connections between sounds that humans, with their knowledge of each sound's source, might never make. It reminds us of first learning to draw, where you have to let go of your idea of what an apple looks like and draw the apple exactly as it appears in front of you.

Samples map well because each sound has a quantifiable (wave) form. Anything involving words gets more complicated. Do you compare on similarity of phoneme, grapheme, or meaning?

![A screenshot of an example from "Voyages in Sentence Space." It shows this example: 
"I went looking for adventure. I went out on a mission. I shouted awkwardly. I stared incredulously. I feel desperate. I never returned. I never returned."]({{ site.github.url }}/images/editor_uploads/2018-03-09-211736-Screen_Shot_2018_03_08_at_3_52_58_PM.png)

In [Voyages in Sentence Space](https://www.robinsloan.com/voyages-in-sentence-space/), Robin Sloan uses machine learning to explore the possibility space between sentences, which he calls "sentence gradients" (we love that metaphor). Instead of showing the whole map, it focuses on a specific journey from one sentence to another. As for how it does comparisons, Robin [tweeted about one illustrative example](https://twitter.com/robinsloan/status/969386860190433281) where, according to the model, '"thousand" is more like "three" than it is like "hundred" because of the "th."'

![A screenshot of Encartopedia. On the left is the Wikipedia article on Euclid. On the right is a visualization of the articles on Wikipedia and a line showing the user's journey through other articles to get to the Euclid article.]({{ site.github.url }}/images/editor_uploads/2018-03-09-213600-Screen_Shot_2018_03_08_at_4_32_10_PM.png)

[Sepand Ansari's](https://sepans.com/) [Encartopedia](http://encartopedia.fastforwardlabs.com/#/), which he made while working with us here at CFFL, looks at visualizing Wikipedia articles as an idea map, and plotting the user's journey through that space. It suggests how new capabilities can help us reflect on our thought process, by showing us how we move through an idea space.

---

## Upcoming Webinar

If questions like "Why is 1 not always equal to 1?" keep you up at night, we recommend this workshop: [Cloudera Data Science Workbench: sparklyr, implyr, and More: dplyr Interfaces to Large-scale Data](https://info.cloudera.com/LP=1922).

[![]({{ site.github.url }}/images/2018/03/cloudera_DataScience_1200_x_628_facebook_20-1520961205566.jpg)](https://info.cloudera.com/LP=1922)

---

## Job Postings

Come work with us!  In addition to several other [open positions](https://www.cloudera.com/careers/careers-listing.html), **Cloudera** is hiring a **Director of Product Management, Data Science** ([job description](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USA--California--Palo-Alto/Director-Product-Management--Data-Science_180286)).

Here is another position we've heard about as well:

* **Pew Research Center** - Director, Data Labs ([job description](https://jobs-prc.icims.com/jobs/5386/director%2C-data-labs/job?mobile=false&width=641&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240))

---

## CFFL Updates

* Mike will be speaking on interpretability at [Qcon.ai](https://qcon.ai/) on April 11th in San Francisco.

* Friederike will be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at subscribers@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team
