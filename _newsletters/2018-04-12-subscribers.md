---
layout: newsletter
slug: 2018-04-12-subscribers
---

Hello!  In this week's newsletter, we discuss new advancements in deep probabilistic programming and a machine learning patent that has earned itself an unfortunate recognition.

---

## Deep Probabilistic Programming

The TensorFlow group has just put out a [new blog post][1] about their Probability
module. This module makes it easier to build probabilistic models that span from
normal Bayesian models to variational auto-encoders to Bayesian neural networks.
To put it into perspective, [Dustin Tran][2], developer on the probablistic
programming languages [Stan][3] and [Edward][4], is the research scientist on the
project.

This new project isn't in isolation (for example, PyTorch has the similar
project [pyro][5]); TensorFlow is getting the benefit the expertise and maturity
of projects like Edward. Even though we aren't big fans of TensorFlow (both for
its [difficult ease of development/debugging][6] and its [slow speed][7]),
this definitely is a sign that the project is staying on top of new research and
trying to increase the applicability of their library.

In general, these deep learning frameworks' new adoption of probabilistic
primitives is quite exciting. At its fundamental level, it allows probabilistic
programming languages to take advantage of the massive computational speed-ups
that deep learning researchers have been requiring of their libraries
([pymc3][8], for example, has been using Theano for quite a while to get such
great speeds). As we discussed in our 5th report, [Probabilistic
Programming][9], these methods allow you to create Bayesian models that treat
uncertainty as a first-class citizen, and lead to more robust and interpretable
models.

However, these new advances go beyond simply allowing you to build classic
Bayesian models and instead allow you to bring in all the concepts of Bayesian
statistics to deep learning. In these [Bayesian Neural Networks][10], neural
network layers can be created that are represented as distributions instead of
simply static numbers. This allows you to speed up training by using prior
knowledge, to sample from your model in order to make any model
generative, and to get uncertainties in your models results. In one
swoop, having a motivated and robust way to use distributions as layer weights
will bring these much-anticipated properties to neural networks that so far have
been added in more ad-hoc ways. This is similar to how probabilistic programming
boosted research into Baysian modeling by giving research scientists the tools to
quickly implement their models.


As it stands, research around Bayesian Neural Networks still needs a lot of work
and the computational requirements of the models needs to be better understood
and optimized. However, it is exciting to see the major players in the deep
learning framework world creating the tools to aid research. Bayesian neural
networks have always been a fascination to the team at FFL and this new work
makes it clear that we will soon be seeing great results in the field.


[1]: https://medium.com/tensorflow/introducing-tensorflow-probability-dca4c304e245
[2]: http://dustintran.com/
[3]: http://mc-stan.org/
[4]: https://github.com/blei-lab/edward
[5]: https://github.com/uber/pyro
[6]: http://nicodjimenez.github.io/2017/10/08/tensorflow.html
[7]: https://github.com/stefbraun/rnn_benchmarks#gimme-those-bar-charts
[8]: https://docs.pymc.io/
[9]: https://www.fastforwardlabs.com/research/FF05
[10]: https://arxiv.org/abs/1801.07710

---

## Patents and Corporate Citizenship

The [Electronic Frontier Foundation](https://www.eff.org) keeps an eye on uses and abuses of intellectual property in digital domains, and every month, they name a [Stupid Patent of the Month](https://www.eff.org/issues/stupid-patent-month). [This month's Stupid Patent](https://www.eff.org/deeplinks/2017/09/stupid-patent-month-will-patents-slow-artificial-intelligence) hits close to home - put generally, it's about using machine learning to identify combinations of plant proteins.

![Linear regression and support vector machine applied to plant proteins.]({{ site.github.url }}/images/editor_uploads/2018-04-07-211328-Screenshot_from_2018_04_06_17_12_30.png)

And that's kind of the problem. There isn't much more to say about the patent than "using machine learning to do X." Just about any business could try to get such a patent for "using machine learning to do Y," where Y is some function of a business. This kind of algorithmic patent is bad business for a number of reasons. Such patents are expensive to get and to assert, and they're getting easier every day to invalidate. So why have them? After nearly a decade working in intellectual property law, it's very clear to your author (Ryan) that [some companies' patent policies](http://www.patentlyapple.com/) are more responsible than others. Some patents are acquired to deter competition with the threat of a lawsuit. Acquiring patents like this month's "using machine learning for X" patent for deterrence has the ultimate effect of stalling innovation.

Asserting patents in general is expensive, especially if the case moves forward. A typical patent lawsuit costs $1-4 million dollars, and possibly far more if the dispute seeks to interfere with a valuable product. There is a saying that patent ligitation is two companies throwing money into a fire until one of them flinches. This is essentially true. (I know this because I *was* the fire.) Companies -- *especially* [companies that persistently stress how innovative they are](https://apple.com) -- should spend their money innovating instead of [litigating](https://en.wikipedia.org/wiki/Smartphone_patent_wars).

Even assuming a fight is economically worthwhile *for the patentholder*, lawsuits are decreasingly likely to work. The Supreme Court has become [hostile to software patents](https://en.wikipedia.org/wiki/Alice_Corp._v._CLS_Bank_International), giving the Patent Office even [more ammunition](https://www.uspto.gov/patent/laws-and-regulations/examination-policy/subject-matter-eligibility) to [reject applications for software patents](https://blog.juristat.com/2017/7/19/alice-three-years-on). There are new post-grant procedures in place to review and invalidate questionable patents, and they are doing their job.

But most importantly, it's bad behavior to stockpile patents as deterrents. Patent litigation is not about justice. Litigation isn't reliable justice. If it were, more cases would go to trial. Patent litigation *is* reliable harassment. It explicitly deters innovation and bringing products to market. It's about a refusal to compete, and a substitute for innovation. Culturally, software patent litigation should usually be seen as shameful, an inability to resolve disputes as corporate citizens. It should not be a replacement for competition on substantive grounds.

Obviously there are situations where someone has outright stolen a product design or copied a substantive technology that resulted from costly specialized research and development. But using a similar algorithm or [adding a similar trivial feature](https://en.wikipedia.org/wiki/Alcatel-Lucent_v._Microsoft_Corp.) shouldn't be seen as a chance to profit by throwing a wrench into the gears of innovation and competition.


-- 
## CFFL Updates

* Hilary will be speaking at the [MIT Digital Economy Conference 2018](http://mitsloan.mit.edu/alumni/events/2018-new-york-ide-conference/) on April 27th in New York.

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on applying AI and Machine Learning To Media and Entertainment on June 19th in New York.

* Friederike will also be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th.

* And be sure to check out Shioulin's latest post on the CFFL blog, [PyTorch for Recommenders 101](http://blog.fastforwardlabs.com/2018/04/10/pytorch-for-recommenders-101.html)!

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at subscibers@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team
