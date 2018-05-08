---
layout: newsletter
slug: 2018-05-09-subscribers
---

Hello!  In this week's newsletter, we consider both the value of theoretical understanding and the importance of bias awareness (and correcting for it) in building new - and hopefully better - models.

---

## On the road to AI: Alchemy or science?  An argument for both.

At a [recent conference](https://openreview.net/pdf?id=rJWF0Fywf), members of Ali Rahimi’s group at Google AI made a controversial proposal about the state of work being done in Machine Learning (ML) today on the road to artificial intelligence (AI). They propose that the work being done today is akin to alchemy, rather than a rigorous science. This may resonate for some, especially those that term this field a “dark art,” or worry that those not researching or practicing in this field believe it can produce [magic](https://points.datasociety.net/dont-call-ai-magic-142da16db408).   

![]({{ site.github.url }}/images/2018/05/An_alchemist_working_with_his_assistants_at_a_crucible__Etch_Wellcome_V0025570-1525725434531.jpg)

It can be difficult to tease apart what exactly makes state-of-the-art algorithms the best possible solution to a problem. As people working in AI research labs today race to develop the latest machine learning algorithm to beat the current benchmark performance in a given area, less attention is given to understanding, on a theoretical level, why exactly one algorithm beats another. The question that [Yann LeCunn](https://www.facebook.com/yann.lecun/posts/10154938130592143) raises in response to the alchemy critique is really: should we care about why these models work the way they do?  LeCunn argues that spending precious time on trying to understand the theoretical reasons why certain architectures or combinations of hyperparameters lead to better performance detracts time from the real goal of innovating as quickly as possible. He also argues that constraining development in this way may thwart innovation, period.

In fleshing out their argument, Rahimi’s group outlines different incentives that have led to the current win-without-necessarily-understanding state of affairs. They point out that the increased availability of public data, which is often linked to data competitions (such as [Kaggle](https://www.kaggle.com/)), incentives "winning" rather than deeply understanding the problem or how the algorithm is working. Additionally, the decreasing price of computing resources has sped up development, but mainly for those working at large companies with lots of resources - it’s still expensive for individuals to run these models and try to pick apart how they work.  Finally they argue that as the number of people working in ML/AI research has increased, the competition to move quickly has as well. 

To combat this, they suggest that we increase the breadth and frequency of empirical evaluations on new models.  Possible routes to achieve this goal are: tuning hyperparameters purely through grid search or guided optimization, breaking down which specific tasks produce high AUC and which don’t (instead of relying on a global measure of accuracy (revealing where the model does not work)), performing ablation studies (in which each component of a model is tested in isolation), and finally, testing the model in situations in which the researchers know it should _not_ perform well.  In addition to increasing the use of empirical tests, Rahimi and his group also suggest that researchers should be more open with the process they have used to achieve their results - publishing lab notes and code examples.

The question at hand, as we see it, is less about whether or not we should be using empirical tests to better understand why certain machine learning models “win.” Rather, the real question should be whether developing a theoretical understanding advances us on the road to developing AI. We argue that it very well may, and that it’s worth devoting at least some time and energy toward developing a deeper theoretical understanding, but not by necessarily constraining all research to meet empirical guidelines before publication. It’s possible that by gaining a more empirical understanding of the models we use today, we will discover that we’re heading in the wrong direction, that we’re stuck in a local minima in the race to develop AI.

---

## Rules to Learn By

Longtime readers of this newsletter know that we follow the Fairness, Accountability, and Transparency in Machine Learning conversation closely (see [here](https://fatconference.org/2018/index.html) and [here](https://www.fatml.org/)). These conversations address and attempt to mitigate the potential for technical systems to produce unfairness. Much of this unfairness arises from how algorithmic systems might perpetuate historical inequalities or otherwise produce discriminatory effects. This conversation is broader than could be encapsulated in any newsletter, but we want to point to some recommendations that have come out of this conversation to demonstrate how we think through the challenges of building models that don't learn or perpetuate bias. We embrace these challenges not just because of an overriding ethical commitment to build safely, but also because addressing these challenges helps us build things that work better than they otherwise might. 

Joanna Bryson identifies three sources of bias, and offers recommendations for how to fix the the problems they pose. With the intention of generalizing Bryson's [analysis](https://joanna-bryson.blogspot.com/2017/07/three-very-different-sources-of-bias-in.html?m=1) to all machine learning, we'd like to restate her argument slightly by identifying the sources of bias as 1) bias in the training data (with the assumption that historical biases tend to be represented in datasets), 2) bias in the assumptions and intuitions that guide our model, and 3) the bias of unintended consequences. Taking these as three sources of bias leads to three recommendations that are also best practices for machine learning. 

Bias in the real world (and therefore in the data available for training an algorithm) can be thought of as a class imbalance, regardless of where it comes from. There are acute disparities in how members of different populations are represented in datasets, due to historical social and economic inequities, but rather than perpetuating this disparate representation in machine learning, data can be balanced at the training step and thereby produce a more balanced representation in the model. This is true of all data as well; we still strive to produce balanced representations in any model we build. For an image classifier, if photographs of, say, "hamburgers with fries" are underrepresented in the training data set, the classifier might not work as well across all food items as it might if trained on balanced classes. While humans and hamburgers are very different things, ethically speaking, any machine learning model should learn robust, balanced representations.

![]({{ site.github.url }}/images/editor_uploads/2018-05-09-164638-55f9d8d8bd86ef1d008bac98_750_577.png)

Bias in the assumptions and intuitions that guide our models arises from how we ask and answer questions in machine learning. Bryson refers to this source of bias as "poorly reasoned rules," but this source of bias can also arise from a lack of robust product testing. Because our own life experience and domain expertise is necessarily partial, we cannot necessarily account for all the ways in which a system might not work as expected. Bryson gives the example of facial recognition not working well for people with dark skin: if we don't ask whether or not our system works well for all skin tones, it may not work as expected (see Joy Buolamwini's [project](http://gendershades.org/) on this). One solution to this problem is to develop robust testing pipelines prior to deployment; another solution is to bring in people with diverse sources of expertise and lived experiences to inform the assumptions that guide development and testing; a third solution is to think deeply and broadly about the world in which systems will be deployed. They may work exactly as designed when in 'the lab,' but produce unexpected results when deployed. The rules we have in mind about how the world behaves should correspond with the actual world beyond the lab.

The bias of unintended consequences is closely related to the causes of unexpected results, and arises in part from uninterpretable and opaque black box models. When models don't behave as expected it can be difficult to understand why they misbehaved. Developing (and utilizing) tools that enable interpretability (such as [LIME](http://blog.fastforwardlabs.com/2017/09/01/LIME-for-couples.html)) and auditing algorithms with them can help developers and users understand why a certain result was returned, can identify sources of bias in a model that can then be fixed, and can even result in new and useful insights that have value as [products](http://blog.fastforwardlabs.com/2017/09/28/the-product-possibilities-of-interpretability.html). Bias, in the sense that Joanna Bryson discusses it, perpetuates some of the most harmful tendencies in society. Correcting for that bias is of profound ethical value to society - in machine learning, it also focuses our attention on the things we want to be able to learn (for example, how to create more robust representations of risk factors for disease without overfitting a model to signals that distract from the end goal).

---

## CFFL Updates

* Mike will be speaking at the [Strata Data Conference](https://conferences.oreilly.com/strata/strata-eu/public/schedule/detail/65283) in London on May 24th.

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on applying AI and Machine Learning To Media and Entertainment on June 13th in New York.

* Friederike will also be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th, and at [Curious2018](https://curious2018.com/) in Darmstadt, Germany in mid-July.


As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:subscribers@fastforwardlabs.com) anytime!

Until next week,

The Cloudera Fast Forward Labs Team
