---
slug: 2018-03-07-subscribers
layout: newsletter
---

Hello! In this week's newsletter, we discuss an interesting use case for GANs and a Supreme Court case that may have more to do with the tech industry than you'd think.

## GANs for eCommerce

Generative Adversarial Networks (GANs) consist of 2 networks: a generator and a discriminator. The generator produces a sample, and the discriminator determines if the sample is real (actual data) or fake (generated data). The generator and the discriminator thus play a game in which the discriminator tries to accurately classify a sample as the generator tries to fool it. At some point, the two networks reach an equilibrium - the generator is considered trained and the discriminator is discarded. GANs have so far been successfully used for image generation, but less so for text generation. The discrete nature of text makes it hard to backpropagate discriminator error output back to the generator, though we are seeing [more](https://arxiv.org/pdf/1701.06547.pdf) and [more](https://arxiv.org/pdf/1703.04887.pdf) research on applying generative adversarial training to text.                                                                         
                              
A [recent paper](https://arxiv.org/abs/1801.03244) attempted to use GANs to generate orders made on e-commerce websites. This is particularly helpful for new items that are being launched because generative models can be used to predict demand (orders) for these items. Orders are represented as a tuple of {customer, product, price, date}. Word2vec representations of all the words in a product title are weighted-averaged to create dense *product embeddings* of dimension 128. *Customers embeddings* are obtained while training a multi-task long short-term memory unit (LSTM) to predict i) the next product group ii) how much the customer will pay, and iii) the number of days till next purchase. The hidden representation in this network is used as customer embeddings (dimension of 128). *Price* is log-transformed and normalized to the range of [-1, 1] and *date* is represented as a 7-dimensional vector. Concatenating the tuples together results in a 264-dimensional vector corresponding to each order.                                      
                                                                                                      
The authors use Wasserstein GAN (WGAN), which has been shown to have better convergence, to generate orders. t-SNE, a technique for dimensionality reduction, is used to visually evaluate the fake orders. 10k real orders and 10k fake orders are mixed together and projected onto a 3-dimensional space. The resulting t-SNE shows that orders are mixed well and the generator has learned to generate data from all the modes in the real order distribution while ignoring outliers. The authors take it one step further and create a generator (ec<sup>2</sup>GAN) which is conditioned on a particular product. With this, one can generate orders that match a particular product embedding (for example, a new product). The generated orders can then be classified to determine customer preference, pricem and seasonal demands of a product. We think this is an interesting application of GANs - even though it does not produce state-of-the-art results in demand prediction!

---
## Ohio v. American Express

While not all current events are directly relevant to tech, some have the potential to produce sweeping changes in the near future. That's one reason why we're keeping an eye on the [*Ohio v. American Express*](https://www.oyez.org/cases/2017/16-1454) case, currently before the U.S. Supreme Court. The quick version of the [case](https://www.nytimes.com/2018/03/02/opinion/the-supreme-court-case-that-could-give-tech-giants-more-power.html) is that American Express was found by lower courts to be in violation of antitrust laws for using "anti-steering" practices to prevent merchants in their network from promoting the use of a lower-cost card (like Discover) in their stores, thus stifling competition between credit card networks. On appeal, this ruling was overturned because credit cards function within a "two-sided" market; they sell their services to merchants but also serve customers who use their cards to make purchases. Because the plaintiff couldn't show that the anti-steering practices of American Express aimed at _merchants_ resulted in higher costs or lower competition for _cardholders_, even if there was harm to a competing card _company_, the circuit court ruled American Express was not in violation of antitrust laws.

If this ruling is affirmed by the Supreme Court, it could have wide-ranging consequences that affect the tech industry in particular. That is because many platforms are "two-sided" markets _par excellence_. They sit squarely between consumers and producers; platform users are served access to and information about a wide variety of products, and advertisers buy access to those users. If American Express's theory of the case is upheld, then platforms will be able to argue that so long as preferential treatment or restrictive pricing for advertisers results in an overall benefit to consumers, they aren't bad actors in the market, which would insulate them from existing antitrust laws. The stakes of this decision, then, are high. In recent months, the ad selling practices of Google and Facebook and the market dominance of Apple and Amazon have come under [increased scrutiny](https://www.wsj.com/articles/the-antitrust-case-against-facebook-google-amazon-and-apple-1516121561) from those concerned about monopolistic business practices. Google and Facebook together represented 63% of all online advertising in 2017, Google accounted for 89% of all search, and Amazon sold 75% of all e-books. Despite the market dominance these massive percentages demonstrate, these big companies have avoided antitrust allegations because their dominance resulted in lower, not higher, costs to consumers, which is the traditional sort of harm that lead to the breakup of [Standard Oil](http://www.economist.com/node/347251) and [Bell](http://www.nytimes.com/1984/01/01/us/bell-system-breakup-opens-era-of-great-expectations-and-great-concern.html?pagewanted=all) in the 20th century.

Depending on how the Supreme Court rules in June, big tech platforms may be allowed to continue their dominance in search, advertising, and sales, for as long as prices and choices keep improving for consumers, while insulating them from accusations of anti-competitive behavior. Otherwise, they may have to think seriously about about how to allow for more competition and strategize around defending themselves from lawsuits in the near future. Either way, Ohio v. American Express has the potential to reshape how we think of platform power, online monopolies, and consumer rights, for years to come. We've seen [recent reporting](https://www.nytimes.com/2018/02/20/magazine/the-case-against-google.html) that demonstrates just how damaging monopolistic practices are to smaller startups in tech, and given how much AI developments rely on access to large data sets, it's a [particular problem](https://www.wired.com/story/google-artificial-intelligence-monopoly/) for machine learning.

---
## Job Postings

Come work with us!  In addition to several other [open positions](https://www.cloudera.com/careers/careers-listing.html), **Cloudera** is hiring a **Director of Product Management, Data Science** ([job description](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USA--California--Palo-Alto/Director-Product-Management--Data-Science_180286)).

Here are a few other positions we've heard about as well:
* **Silectis** - Data Engineer ([job description](https://www.silect.is/careers-data-engineer))
* **Silectis** - Platform Engineer ([job description](https://www.silect.is/careers-platform-engineer))
* **Pew Research Center** - Director, Data Labs ([job description](https://jobs-prc.icims.com/jobs/5386/director%2C-data-labs/job?mobile=false&width=641&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240))

---

## CFFL Updates

* Hilary and Mike are speaking today at the [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ca/) in San José.  Do say hello if you're in attendance today!

* Brian will be speaking at the [Cloudera Sessions](https://www.cloudera.com/more/events/sessions/sao-paulo.html) event in São Paulo on March 13th.

* Mike will be speaking on interpretability at [Qcon.ai](https://qcon.ai/) on April 11th in San Francisco.

* Friederike will be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th.

* And be sure to check out Grant's post on [using three.js for 2D data visualization](https://beta.observablehq.com/@grantcuster/using-three-js-for-2d-data-visualization)!

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at clients@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team