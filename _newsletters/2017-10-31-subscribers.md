---
layout: newsletter
slug: 2017-10-31-subscribers
---

Hello! (...and Happy Halloween!)

*"A better understanding of biological brains could play a vital role in building intelligent machines,"* [says Demis Hassabis](https://deepmind.com/research/publications/neuroscience-inspired-artificial-intelligence/), co-founder of Google DeepMind. 

Earlier this month, we [covered](http://blog.fastforwardlabs.com/newsletters/2017-10-11-client.html) *successor representations*, i.e., representations that support intelligent way-finding, and possibly abstract reasoning, in a computationally efficient manner. In the first part of this week's newsletter, we take a look at neural networks with *attention mechanisms*, yet another instance of neuroscience-inspired AI.

In the second part of this newsletter, we reflect on the curious coverage of AlphaGo Zero's win, its focus on how "AI doesn't need us anymore," and what it may tell us about "being human."

Enjoy!

--

## Neural networks with attention
Artificial intelligence is, once again, borrowing loosely from human mental processing to expand the range of its capabilities. This time the inspiration is *human attention*. Attention is the process by which we, human and non-human animals, focus more on certain parts of our sensory inputs; the inputs that matter, if we get it right. For example, visual attention focuses our visual cognition on certain areas in our field of vision that are deemed more important than other areas (for example, noticing the stick on the sidewalk that might cause us to trip).

![]({{ site.github.url }}/images/2017/10/yarbus_visitor-1509296702317.jpg)

##### The *Unexpected Visitor* by Ilya Repin, (left) the original image, (middle) (human) eye movements during free examination, (right) eye movements when people were asked to judge the material circumstances of the family (read [more](http://www.datadeluge.com/2012/10/the-unexpected-visitor.html)).

Attention mechanisms have made their way into artificial neural networks; they operate as a mask on neural network input data to give heavier weights to subsets of input data that the system determines are most important. 

![]({{ site.github.url }}/images/2017/10/attention_dog-1509297513241.png)

##### A neural network with attention trained to generate image captions ([paper](https://arxiv.org/abs/1502.03044)). The model learns to fix its "gaze" on salient objects; (left) original image, (right) focus of attention during generation of the word 'dog'.

### The practical benefits of attention mechanisms
Image caption generation and object tracking, for example, are challenging tasks. Not only does the model need to recognize salient objects, it also needs to understand relationships between objects. Cluttered images are particularly challenging.

Attention mechanisms give neural networks the ability to cope with clutter; attention allows for salient features to dynamically come to the forefront as needed to support [image caption generation](https://arxiv.org/abs/1502.03044), and (by supplying a mechanism to focus on what needs more "attention") [high(er) quality image generation](https://arxiv.org/abs/1502.04623)). Recently, (hierarchical) attention mechanisms improved [pedestrian tracking in video data](https://arxiv.org/abs/1706.09262) - a step towards road safety in a future world with self-driving cars.

![]({{ site.github.url }}/images/2017/10/Screen_Shot_2017_10_29_at_1_44_40_PM-1509299114686.png)

##### The model gradually and over time narrows its attention amongst the clutter to the digit it is trained to recognize ([paper](https://arxiv.org/abs/1502.04623)).

Attention mechanisms also allow a much desired glimpse into a model's inner workings; they make models more [interpretable](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html).

![]({{ site.github.url }}/images/2017/10/attention_clock-1509298653659.png)

##### There is no clock in the picture, but the model's focus of attention (right) provides intuition as to why the network got this one wrong ([paper](https://arxiv.org/abs/1502.03044)).

Applied to text, [attention mechanisms improve machine translation](https://arxiv.org/abs/1409.0473) and [prove beneficial in sentence parsing](https://arxiv.org/abs/1412.7449).

But, albeit inspired by human attention, attention mechanisms integrated into neural networks *are* different, as [Denny Britz from WILDML points out](http://www.wildml.com/2016/01/attention-and-memory-in-deep-learning-and-nlp/). 

> Human attention is something that’s supposed to save computational resources. By focusing on one thing, we can neglect many other things. But that’s not really what we’re doing in the above model. We’re essentially looking at everything in detail before deciding what to focus on.

Attention, implemented as a mask, is actually more akin to (working) memory. Despite the possible misnomer, attention mechanisms are a general and powerful technique, and are becoming increasingly widespread. (We may use them in the prototype we're currently working on.)

For a technical deep dive into attention mechanisms, including the math, we recommend Adam Kosiorek's [*Attention in Neural Networks and How to Use It*](http://akosiorek.github.io/ml/2017/10/14/visual-attention.html) and, for an overview of attention (and other augmentations of recurrent neural networks) we recommend [Chris Olah and Shan Carter's post](https://distill.pub/2016/augmented-rnns/#attentional-interfaces) on the Distill blog.

---

## On the portrayal of AlphaGo Zero in the media, and being human

What was most surprising about AlphaGo Zero's win was its portrayal in the media. Nearly every publication, from the [MIT Tech Review](https://www.technologyreview.com/s/609141/alphago-zero-shows-machines-can-become-superhuman-without-any-help/) to [Wired](https://www.wired.com/story/this-more-powerful-version-of-alphago-learns-on-its-own/) and [Quanta Magazine](https://www.quantamagazine.org/artificial-intelligence-learns-to-learn-entirely-on-its-own-20171018/), chose to emphasize the fact that AlphaGo Zero learns without human game play data (or "supervision") - but algorithms that learn without human supervision have been around for a while:

> Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses.

According to Wikipedia. Gerald Tesauro's [TD-Gammon](http://www.bkgm.com/articles/tesauro/tdl.html) learned only through self-play, in 1995. We published last week's newsletter on [AlphaGo Zero's win (and what it actually means)](http://blog.fastforwardlabs.com/2017/10/25/alphago-zero.html) on our blog, in an effort to guide the conversation in a more fruitful direction. AlphaGo Zero's win shows that:

> to build successful machine learning (or, yes, AI, if you prefer) products, a deep understanding of the problem you are looking to solve is as important as a good grasp of the tech.

Why did the media focus on the AlphaGo-Zero-does-not-need-us aspect?

Reporting on machine learning and AI in the popular media tends to be superficial, as is any reporting on a complex topic. But, the need to simplify does not explain the singular focus of the coverage. Instead, it may result from - and further fuel - a sense of doom that all too often accompanies technological innovation in today's society. Computers don't need us anymore.

> How did we arrive at this moment in history, in which humanity is more technologically powerful than ever before, and yet we feel ourselves to be increasingly fragile?

asks [Sally Davis in Aeon](https://aeon.co/essays/the-human-world-is-not-more-fragile-now-it-always-has-been). 

Starting with Plato and reinforced by Descartes' *cogito ergo sum*, Western history has tended to portray intelligence as the prime aspect of [what it means to be human](https://aeon.co/essays/on-the-dark-history-of-intelligence-as-domination). In 1616, Gustavus Selenus published [*Chess or the King's Game*](https://en.wikipedia.org/wiki/Chess_or_the_King%27s_Game); board games: prime activities of the human intellect. No wonder we find AlphaGo Zero eerie.

A life alongside machines may lead to a redefinition of what it means to be human. Less lofty, one of the consequences of automation may be a reevaluation of what makes jobs hard or difficult. Machines struggle to understand, or show, empathy, for example. Teachers, nurses, and caregivers may finally get more recognition for the hard and difficult work they do. 

And perhaps, we will rethink our role and place in the world, as suggested in Joichi Ito's excellent article [*Resisting Reduction: A Manifesto*](https://joi.pubpub.org/pub/resisting-reduction) in which he outlines a future of fruitful co-existence alongside machines; a refreshing alternative to the prevalent doom and gloom scenarios or, on the flip side, relentlessly enthusiastic futurism (with vacations on Mars).

In the end, the most fascinating aspect of AlphaGo Zero may be its coverage, and what it tells us about being human.

---

## Jobs, Jobs, Jobs

We're hiring!!!
* **Cloudera Fast Forward Labs** is hiring a Research Engineer ([job description](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USNew-YorkBrooklyn/Research-Engineer_171058))

Be sure to check out the [other job opportunities](https://www.cloudera.com/careers/careers-listing.html) at Cloudera as well! And here are a couple of other jobs we've heard about recently, too:

* **NYC Mayor's Office of Operations** - Chief Analytics Officer ([job description](http://www1.nyc.gov/assets/operations/downloads/pdf/employment-opportunities/chief-analytics-officer-job-description-vf.pdf))
* **Elucd** - Data Scientist ([job description](https://jobs.lever.co/elucd/7a251473-f3a7-40f6-b97c-c10c8838d316))

---

## FFL Updates 

This month, Friederike will be speaking at [FWD50](https://fwd50.com/) in Ottawa, Canada and at [PyData 2017](https://pydata.org/nyc2017/) here in New York City; if you're attending, please come say hello!

Thank you, as always, for reading.  We'd love to hear your thoughts on this newsletter - please feel free to reach out any time to subscribers@fastforwardlabs.com.

-- The Cloudera Fast Forward Labs Team
