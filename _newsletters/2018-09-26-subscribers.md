---
slug: 2018-09-26-subscribers
layout: newsletter
---

Hello!  In this week's newsletter, Ryan discusses some very concerning recent data privacy issues in the healthcare field, and Alice reflects on new research around human/machine interaction in the adversarial image space.

---

## Data and Research Ethics
_by [Ryan](https://twitter.com/jqpubliq)_

[Memorial Sloan Kettering Cancer Center](https://www.mskcc.org/) has been under intense ethical scrutiny over the last few weeks.

The New York Times and ProPublica[^propub] identified that the Chief Medical Officer of MSK (a non-profit hospital) [failed to report his lucrative personal deals](https://www.nytimes.com/2018/09/08/health/jose-baselga-cancer-memorial-sloan-kettering.html) with for-profit health care companies as he published numerous studies in prestigious journals. A few days later he [resigned as Chief Medical Officer](https://www.nytimes.com/2018/09/13/health/jose-baselga-cancer-memorial-sloan-kettering.html).

Not two weeks later, the same reporters revealed [financial ties between a machine learning startup](https://paige.ai) and [numerous MSK researchers and board members](https://www.nytimes.com/2018/09/20/health/memorial-sloan-kettering-cancer-paige-ai.html). Even MSK itself, a non-profit research hospital, owns part of the startup. Paige.ai applies machine learning algorithms to oncology data to assist in diagnostic and treatment decisions. MSK gave Paige.ai exclusive access to 25 million slides of patients' tissue samples.

Of course, the financial ties between MSK and Paige.ai present potential conflicts of interest that undermine MSK's research, but that's not the only concern.

First, it's not clear if MSK got permission from all of the patients to use slides of the patients' tissue. There are clear privacy problems here. There is little information more personal than one's medical records. It's self-evident that MSK should only ever release a patient's data with that patient's consent.

Second, the exclusivity of access to that data is troubling. In cases where patients _have_ consented to use of their data in research, that data should not be given exclusively to one organization, and certainly not to one organization in which MSK and its scientific and business management have a financial stake in commercial products that exploit the tremendous value of that data.

As we've learned in our research for [our reports](https://www.cloudera.com/products/fast-forward-labs-research/fast-forward-labs-research-reports.html), ethically acquiring _any_ medical data is difficult and extremely expensive and is the main limiting factor in applying ML to health care, literally life-saving work. Such data is valuable (this seems fairly obvious, and our belief in the value of data is Cloudera Fast Forward Labs' raison d'être). So it is especially troubling that a respected non-profit such as MSK, having decided to release tremendously useful research data, would release it only to make a buck.

Similarly, 23andMe [recently licensed its customers' DNA data exclusively to GlaxoSmithKline](https://www.wired.com/story/23andme-glaxosmithkline-pharma-deal/). Many 23andMe customers were not aware that their data could be used in this way for commercial interests.[^gsk] 23AndMe made money from their customers directly _and_ by selling their customers' data in the background.

Privatizing and hoarding research data slows the progress of science - literally causing people to suffer and die - in the name of profit.

Obviously I don't contend that all research data, some of which is acquired at great expense and investment, should be released to the public (though what a great world _that_ would be, as data is increasingly concentraed in the hands of a few for-profit companies). Rather, I argue that companies should consider the practical[^prac] - and in some cases humanitarian - implications when deciding what to do with their data.

Public/government research grants should be funding this kind of research, and paying to make the data and analysis a public good. This would give a greater number and more diverse minds better access to the data, and would do a service to all humanity. But as a practical matter, companies should behave responsibly with an eye toward humanity.

[^propub]: A shout out to [ProPublica](https://www.propublica.org/) for doing great work in advancing accountability through data-driven journalism. Keep it up, y'all.

[^gsk]: As a 23andMe customer myself, and an IP lawyer, _I_ didn't understand that my data was being _sold_ let alone _exclusively_ to a private interest when 23andMe stated that they wanted to use my data for "research." An email I received (as a 23andMe customer) from 23andMe's CEO read "Today, I am thrilled to announce that we are launching a collaboration with GlaxoSmithKline (GSK) to accelerate our ability to make those novel treatments and cures a reality.... By working with GSK, we believe we will accelerate the development of breakthroughs." That's a noble goal, but the email ignores the reality that my data was _sold_ to GSK, and _exclusively_ GSK. This is not the best path for "development of breakthroughs." Indeed, it locks up the data to _prevent_ "development of breakthroughs" by anyone _but_ GSK.

As an aside, as a lawyer, I recognize 23andMe's use of weasel words like "accelerate _our_ (23andMe's) ability to make these novel treatments and cures a reality." Not other researchers. Not science in general. _Our_ ability, meaning 23andMe. 23andMe was and is disingenuous about their goals.

[^prac]: Other eyes may see value in data that was missed by the initial acquirer of data, or simply use the data to solve other problems. MSK's decision is particularly galling because its hospital function - accurately identifying and treating cancer, a primary cause of suffering and death today - would be _improved_ by giving broad access to its ethically acquired data.

---

## Humans in the loop with adversarial images
_by [Alice](https://www.linkedin.com/in/alice-albrecht-6379868/)_

With the ubiquity of machine learning classification models of late, we’ve also seen the creation of what are known as adversarial images - which can trick machine learning models into classifying images incorrectly.  The ability to “trick” a model may seem inconsequential, but as much of task automation (including autonomous driving) relies on correctly classifying images, the ability to alter the label of those images could have life-threatening consequences.  An oft-cited example of this danger is the ability to change the classification of speed limit signs, causing potentially hazardous speeds for autonomous vehicles. The alterations involved here can include large-scale changes that are easily spotted by humans or can involve small perturbations of just a few pixels that many researchers claim are beyond the reach of human identification. 

![]({{ site.github.url }}/images/2018/09/Panda2Gibbon-1537886746977.png)
#### Panda to Gibbon (Goodfellow, Shlens, Szegedy, 2014)

This work highlights an interesting way in which humans and machines diverge.  If machines can be tricked - just by changing a few pixels - into thinking an image is something different than what a human would classify it as, the models that have been developed thus far really are fundamentally different from human vision.  Here we explore some new research examining the ways in which machine vision models do and do not differ from human perception.  

Recent work by a group of researchers, mostly out of [Google Brain](https://arxiv.org/pdf/1802.08195.pdf), has shown that when images are perturbed with human vision in mind, both humans and machines can be fooled.  This work is great for comparing humans and machines but doesn’t mirror exactly what nefarious adversarial image creators are trying to do - the creators of those images are just trying to fool the machines.  Earlier this month some interesting research came out of [Johns Hopkins](https://arxiv.org/pdf/1809.04120.pdf), showing that humans do in fact typically label adversarial images inline with model-generated classification labels (when asked in the right way).  This opens the door to the possibility that humans can help identify potential adversarial images.  This means that we could employ humans in the loop to fight adversarial attacks.  On the flip side, this also means that humans can be brought in to help create more robust adversarial images which are harder for machines to detect.  The research being done with adversarial images is something to watch, as we begin to tease out how machine learning does - and does not - mirror human capabilities, which will help us to further refine where we need humans in the loop.

---

## CFFL Updates

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on September 27th here in NYC.

* Ryan will speaking on federated learning at the [Artifical Intelligence Conference](https://conferences.oreilly.com/artificial-intelligence/ai-eu/public/schedule/detail/70309) in London on October 10th, and will also speak on [multi-task learning](https://conferences.oreilly.com/artificial-intelligence/ai-eu/public/schedule/detail/70266) on October 11th.

* Hilary will speaking at the [Open FinTech Forum](https://events.linuxfoundation.org/events/open-fintech-forum-2018/) in NYC on October 11th.

* Mike will be speaking on serverless for data scientists at [PyData LA](https://pydata.org/la2018/) on October 22nd.

* Justin will be speaking at the [Cloudera Sessions event](https://www.cloudera.com/more/events/sessions/toronto.html) in Toronto on October 23rd.

* Matt will speaking on "A Roadmap to Open Data Science" at [Cloudera World Tokyo](http://clouderaworldtokyo.com/2018/sE-04.html) (Tokyo, Japan) on November 6th.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime!

All the best,

The Cloudera Fast Forward Labs Team
