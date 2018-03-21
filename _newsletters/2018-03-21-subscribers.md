---
layout: newsletter
slug: 2018-03-21-subscribers
---

Hello!  In this week's newsletter, we explore a very real and relatable problem in adversarial machine learning (sneaking wolves onto planes) and discuss some (unrelated) concerns we have with alarmism.

---

## The Fallibility of Models

Anyone who has trained a machine learning model knows how critical it is to have
clean data that is also representative of the data the model will see once
deployed. This can get incredibly tricky as field data changes without our
knowledge - a problem known as model drift, which can slowly reduce the efficacy
of the once-accurate models we've created.

Sometimes we can see this problem of 'representative data' in some quirky ways.
In Janelle Shane's blog post ["Do neural nets dream of electric sheep?"][1], we see some
of these problems demonstrated in very clear ways: image models learn to make assumptions
that may have held up in their training data, but fail in the evaluation of data from
"the wild." The models Shane describes simply can't comprehend a picture of the Scottish
countryside that doesn't have sheep in it - so even if there are none, the system
will predict that there are sheep in the image.

![]({{ site.github.url }}/images/2018/03/tumblr_inline_p4y2clBHpF1rl9zu7_500-1521573495339.jpg)
##### Except there really aren't any sheep in this picture. At all. [(image source)](http://aiweirdness.com/post/171451900302/do-neural-nets-dream-of-electric-sheep)

In the original paper on LIME, ["Why Should I Trust You?": Explaining the
Predictions of Any Classifier][2], which we cover in our report [FF06: Interpretability][3], there is a great
example of a classifier which is supposedly good at [differentiating
between Huskies and Wolves][4]. However, using LIME to introspect into the model, we
see that it actually looks at whether there is snow in the background of the
image in order to make the prediction. Is this model wrong? In the context of
the training data, this model is perfectly accurate and is indeed doing its
intended task. However, in the context of real world data, the model simply
hasn't learned to use features that are general enough to solve the problem.

There are many implications of these sorts of problems: most obviously, that
you may create a model in the lab that solves your task in a very controlled way
but which simply cannot deal with real world data. What makes this particularly
vexing is that the accuracy you see in the lab will give you confidence in the
model that simply isn't justified in the context of real data. However, there is
a new aspect to this problem that is just now gaining a lot of research
momentum: the possibility of using this lack of generality to the advantage of
an attacker.

Let's say you are booking a flight and you want to bring your wolf onto the
plane. For obvious reasons, the airline doesn't allow wolves on the plane and
requires an image of your animal while booking, to make sure you aren't going
against the rules. But if you know that the model they are using has a tendency to
classify images as huskies or wolves depending on whether there is or isn't snow in the background, you could exploit this to
trick the classifier into thinking your wolf is a husky, allowing you to bring your wolf on the plane. 

![]({{ site.github.url }}/images/2018/03/pexels_photo_397857-1521574076498.jpeg)
##### Look, Mom - no snow! [(image source)](https://www.pexels.com/photo/animal-animal-photography-blur-canidae-397857/)

This field of [Adversarial Machine Learning][5] is currently mainly thinking
about subtle permutations to input data, often undetectable by humans, in order
to control what a model outputs. However, the premise is the same: models are
trained to predict on their training data, and 99% of the time this means they
aren't learning general features that humans learn when they learn to perform
similar tasks. When a model predicts that there are sheep in an image, it
doesn't know that sheep are fuzzy animals that graze in fields; it identifies sheep
as white-ish blobs that are generally in the vicinity of green-ish regions.
While this sounds a lot less impressive than saying "we can now _understand_
sheep in images," it is only through recognizing this limitation that we can
build more robust, trustworthy, and safe machine learning models.

[1]: http://aiweirdness.com/post/171451900302/do-neural-nets-dream-of-electric-sheep
[2]: https://arxiv.org/abs/1602.04938
[3]: https://www.fastforwardlabs.com/research/FF06
[4]: http://machine-master.blogspot.com/2017/01/explaining-predictions-of-any-classifier.html
[5]: https://blog.openai.com/adversarial-example-research/

---

## This is Why We Can’t Have Nice Things: How Alarmism Hinders Innovation

Child psychologist Richard Freed, in a recent article tellingly titled [The Tech Industry’s War on Kids: How psychology is being used as a weapon against children](https://medium.com/s/story/the-tech-industrys-psychological-war-on-kids-c452870464ce), argues that social media and video games, armed with weaponized psychology, threaten to ruin today's youth. Freed makes some reasonable points, and his call to action is not without some support, but his scare tactics are exactly a type of wolf-crying that hinders innovation.

The title of the article speaks for itself, using the rhetorical device of "a war" against children. The article begins with the uncontroversial premise that children today are consuming technology (in particular video games and social media) at a substantial and increasing rate, but continues on to assert that psychology is now being employed by tech companies to make games and social media irresistible, leading to massive social harms.

![]({{ site.github.url }}/images/2018/03/Men_reading_the_want_advertisments_for_jobs_Melinda_Street-1521418803550.jpg)
##### Focus on media isn't a new phenomenon. [(image source)](https://commons.wikimedia.org/wiki/File:Men_reading_the_want_advertisments_for_jobs,_Melinda_Street.jpg)

Video games have been around for generations now; the entire purpose of arcade games was to make them addictive, attracting more quarters from players. Psychology has always been a part of marketing for any manufacturer, for everything from food and cigarettes to toys and games. But when it comes to electronic social media (a technology that has became pervasive only in the last few years), Freed seems entirely certain (based on a few outlier cases) that disaster will ensue. This complaint is just [the contemporary iteration](https://xkcd.com/1601/) of similar complaints through time, as [humorously parodied here](http://half-boiled-extreme.tumblr.com/post/172067511070/ptenterprises-coldswarkids).

To convey his point, Freed uses the heartstring-pulling tale of one of his young patients with an extreme social media addiction who panics and lashes out when her phone is taken away. It’s possible (though we do not take a position) that Freed is confusing the direction of causation. It may be the case that the children Freed points to as becoming addicted *because* of the availability of social media and video games are actually just addiction-prone children who, but for social media and video games, would have latched on to another addiction, e.g., television or music.

Of course, we need *examples* such as Freed’s patient to inform how we control technologies, but a few particular cases shouldn't be the basis for policy, no matter how emotionally appealing they may be. If the problem is significant, there should be _many_ cases, and they should be mined -- as a group -- to determine the scale of any threat.

Self-driving cars may be hindered in their infancy by a similar early and narrow focus on a few extreme and unavoidable cases. We have reasons to believe that [self-driving cars might save thousands of lives from traffic crashes](https://www.wired.com/story/self-driving-cars-rand-report/). When the first few serious accidents involving self-driving cars occur (and indeed [small scale accidents have already occured](https://www.nytimes.com/2018/03/19/technology/uber-driverless-fatality.html), and more will, due to imperfect design other drivers’ actions that make crashes unavoidable) there will be a group of people who argue that the technology is too dangerous, when, in fact, the benefits of self-driving cars multiply quickly when they are deployed with other self-driving cars. Their behaviors can be calibrated to drive more safely together, and they will be more predictable than human drivers. And yet cries of wolf like Freed’s article across multiple sectors could limit or stop technology in its literal and figurative tracks. [This is why we can’t have nice things](https://english.stackexchange.com/questions/417320/what-is-the-origin-of-the-phrase-this-is-why-we-cant-have-nice-things).

Watching technology closely and understanding its limitations (and harms, and advantages) is necessary and laudable work. But we only do ourselves harm by breathlessly reporting the damage of a technology without sufficient observation.

---

## Recommended Reading

We love to read; here are a few of our more interesting finds this month:

* [Deep Learning, Structure, and Innate Priors](http://www.abigailsee.com/2018/02/21/deep-learning-structure-and-innate-priors.html?imm_mid=0fbae9&cmp=em-data-na-na-newsltr_ai_20180226)
* [On bias, black-boxes and the quest for transparency in Artificial Intelligence](https://medium.com/@virginiadignum/on-bias-black-boxes-and-the-quest-for-transparency-in-artificial-intelligence-bcde64f59f5b)
* [Why even a moth's brain is smarter than an AI](https://www.technologyreview.com/s/610278/why-even-a-moths-brain-is-smarter-than-an-ai/amp/)
* [Listing Embeddings for Similar Listing Recommendations and Real-time Personalization in Search](https://medium.com/airbnb-engineering/listing-embeddings-for-similar-listing-recommendations-and-real-time-personalization-in-search-601172f7603e)
* [Algorithmic Impact Assessments: Toward Accountable Automation in Public Agencies](https://medium.com/@AINowInstitute/algorithmic-impact-assessments-toward-accountable-automation-in-public-agencies-bd9856e6fdde)
* [The spread of true and false news online](http://science.sciencemag.org/content/359/6380/1146)
* [Deep Learning for NLP Best Practices](http://ruder.io/deep-learning-nlp-best-practices/)
* [Validating Leaked Passwords with k-Anonymity](https://blog.cloudflare.com/validating-leaked-passwords-with-k-anonymity/)

---

## CFFL Updates

* * We're hiring for several positions on the Machine Learning Team at Cloudera; you can learn more [here](http://blog.fastforwardlabs.com/2018/03/21/join-the-machine-learning-team-at-cloudera.html).  If you know someone who would be a great fit for one of these positions, please do encourage them to apply!

* Mike will be speaking on interpretability at [Qcon.ai](https://qcon.ai/) on April 11th in San Francisco.

* Friederike will be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at subscribers@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team
