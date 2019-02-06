---
slug: 2019-02-06-newsletter-example
layout: newsletter
---

## Bias Auditing for Machine Learning
_by [Ryan](https://twitter.com/jqpubliq)_

It's no secret that machine learning systems can exhibit the same bad behavior, e.g., racism and sexism, as the humans whose data was used to train them. Garbage in, garbage out, right? It's not quite that simple, though. The "garbage" is just one sutble component of the complete output of the system: powerful and valuable insights into the data. That is to say, with [some exceptions](https://en.wikipedia.org/wiki/Tay_(bot)), the bias isn't always easy to see.

Machine learning biases can have deep and lasting effects on individuals and society at large.

* Criminal judges rely in part on ML risk assessment systems when making decisions about [recidivism, bail, and sentencing](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) for persons accused or convicted of a crime. 

* Police use software to guide the areas they patrol. The software attempts to [predict areas where crime is likely to occur](http://minorityreport.wikia.com/wiki/Precogs). In practice, this type of software often predicts _arrests_ as a proxy for crime, resulting in overpolicing and a self-reinforcing loop: the police use the software to focus on certain areas, which creates more arrests in those areas, feeding back into the software, which tends to predict still more arrests in those areas. For some examples, the following companies produce predictive policing software, but it is a lucrative business and many more companies are entering the market:

	* [PredPol](https://www.smithsonianmag.com/innovation/artificial-intelligence-is-now-used-predict-crime-is-it-biased-180968337/) 
	* [Palantir](https://www.theverge.com/2018/3/15/17126174/new-orleans-palantir-predictive-policing-program-end)
	* [Azavea recently acquired by ShotSpotter (product: HunchLab)](http://www.govtech.com/public-safety/Can-Atlantic-Citys-Bold-Experiment-Take-Racial-Bias-Out-of-Predictive-Policing.html)

* Financial institutions use machine learning to decide whether or not to issue credit - and at what rates - to an applicant.

* Many companies are using machine learning to evaluate employment applications and resumes.

The biases aren't intentional. The agencies and companies producing and using this software [simply don't consider the social effects of the technology, or lack the resources to do so effectively](https://arxiv.org/abs/1812.05239). Data wrangling and machine learning are difficult. This naturally leads to a focus on the technology and the data. The social implications are often an afterthought.

![]({{ site.github.url }}/images/2019/02/stephen_dawson_670638_unsplash-1549474399629.jpg)
#####  _Image Credit [Stephen Dawson](https://unsplash.com/photos/qwtCeJ5cLYs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/)_

One way to mitigate the social and ethical harms of bias in machine learning systems would be to audit the systems to test for bias and identify the points at which the bias was introduced. The audit team should, of course, include a technologist to understand the data and machine learning components, but it should also include someone trained in the social implications of the software. So a team might be comprised of, for example, a data scientist, a data engineer, and a sociologist.

Such teams could be assembled within an organization of sufficient size with good hiring practices.  Alternatively, outside consultants could be engaged to carry out these audits.

The auditors would examine the product from data collection and transformation, to model training and testing, to output and application. This would either result in a certification that the system is ethically sound, or a list of concerns and steps to address them, including qualitative and [quantitative](https://arxiv.org/abs/1901.04562) approaches to improvement.

Incidentally such audits would (or should) include regulatory compliance factors. They would help companies establish compliance with regulators, and also reduce exposure to civil rights lawsuits based on bias.

Local and federal government agencies should create standards for fairness in these systems and require periodic auditing. Companies who produce such software should also have incentives to audit and certify their products. For example, government customers might be required to purchase only audited and certified products in these areas. And private companies might prefer certified products as well.

We've only found a few groups who appear to be working in this space so far: [Ethical Resolve](http://ethicalresolve.com/), [Rocky Coast Research](https://www.rockycoastresearch.com/), [O'Neil Risk Consulting](http://www.oneilrisk.com/), and [Probable Models](https://probablemodels.com/). In the coming months and years, we hope to see broader adoption of auditors like these.

---

## Recommended Reading

* [Writing Code For NLP Research](https://docs.google.com/presentation/d/17NoJY2SnC2UMbVegaRCWA7Oca7UCZ3vHnMqBV4SUayc/edit) - a great presentation from some folks on the [AllenNLP project](https://allennlp.org/)
* [Tokimeki Unfollow](https://tokimeki-unfollow.glitch.me/) - "KonMari" your Twitter follows
* [Revisiting Self-Supervised Visual Representation Learning](https://arxiv.org/abs/1901.09005) - an insightful new paper on self-supervised visual representation learning
* and just for fun: [Mushy - a free asset pack of neural network generated isometric tiles](https://everestpipkin.itch.io/mushy)

---

## Upcoming Events

* Join us for a webinar [Introducing Cloudera Data Science Workbench for HDP](https://www.cloudera.com/about/events/webinars/introducing_cdsw_for_hdp.html?src=FFL) next week on February 12th (10:00am PT/1:00pm ET), hosted by Vidya Raman and Saumitra Buragohain.
* Hilary Mason will be speaking at the [Dataworks Summit](https://dataworkssummit.com/barcelona-2019/) in Barcelona, Spain on March 21st.
* Mike Lee Williams will be speaking on [Federated Learning](https://conferences.oreilly.com/strata/strata-ca/public/schedule/detail/72661) at the Strata Data Conference in San Francisco on March 27th.
* Mike will also be chairing the "deep learning in practice" track at [Qcon.ai](https://qcon.ai/) in San Francisco on April 16-17th.

---

## CFFL News

We're hiring!  The Cloudera Fast Forward Labs Team is hiring a [Data Strategist](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USA--California--San-Francisco/Research-Engineer-at-Cloudera-Fast-Forward-Labs_181051).  Please help us spread the word!

And, as always, thank you for reading!  We welcome your comments and feedback; please reach out anytime to [cffl@cloudera.com](mailto:cffl@cloudera.com).

All the best,

The Cloudera Fast Forward Labs Team