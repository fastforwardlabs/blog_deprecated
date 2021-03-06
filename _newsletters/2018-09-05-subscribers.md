---
slug: 2018-09-05-subscribers
layout: newsletter
---

Hello!  In this week's newsletter, Nisha discusses [Snorkel](https://arxiv.org/abs/1711.10160), a system that helps solve some classification problems, and Grant considers the effects of a recommendation system on the weirdness of video content on YouTube Kids.

---

## Snorkel: Rapid Training Data Creation with Weak Supervision
_by [Nisha](https://twitter.com/NishaMuktewar)_

Machine learning (and more specifically, deep learning) techniques are recognized for their ability to obtain high accuracy for 
a variety of classification problems. Deep learning models are more complex than most traditional models and often have 
thousands of parameters and commensurately require more labeled training data. Obtaining this data can be an expensive and time-consuming process, and often requires domain experts to help with the labeling process. Many areas of machine learning that are motivated by this bottleneck could be broadly categorized into four areas: [active learning](https://dl.acm.org/citation.cfm?id=3019233), [semi-supervised learning](https://dl.acm.org/citation.cfm?id=1841234), [weak supervision](https://dawn.cs.stanford.edu/2017/07/16/weak-supervision/) and [transfer learning](https://ieeexplore.ieee.org/document/5288526/). [Snorkel](https://arxiv.org/abs/1711.10160) belongs to the *weak supervision* class and is effective for tasks like natural language processing. The basic idea is to allow users to provide supervision at a higher level than case-by-case labeling, and then to use various statistical techniques to deal with the noisier labels that are obtained. Working with domain experts, the Snorkel team has found that this type of supervision is easier and faster to provide. And surprisingly, by getting large volumes of lower-quality supervision in this way, one can train higher-quality models at a fraction of the time and cost. 

Snorkel is a system built around the [data programming](https://papers.nips.cc/paper/6523-data-programming-creating-large-training-sets-quickly) paradigm for rapidly creating, modeling, and managing training data. It lets one use weak supervision sources like heuristics, external knowledge bases, crowdsourced labels, and more. These are called weak supervision sources because they may be limited in accuracy and coverage. All of these get combined in a principled manner to produce a set of 
probability-weighted labels. The end model is then trained on the generated labels.
##### Snorkel workflow
![]({{ site.github.url }}/images/editor_uploads/2018-09-05-182818-snorkel_workflow.png)

Snorkel's workflow has three main stages:
1. **Writing Labeling Functions**: Instead of hand-labeling large quantities of training data, users write labeling functions 
which capture patterns-based heuristics, connect with external knowledge bases (distant supervision), and so on. A labeling 
function is a Python method which, given an input, can either output a label or abstain. For instance, we can write a labeling function that checks if the word “causes” appears between the chemical and disease mentions. If it does, it outputs *True* if the chemical mention is first and *False* if the disease mention is first. If “causes” does not appear, it outputs *None*, indicating abstention. In addition, Snorkel includes a number of declarative labeling functions that can be used out of the box.
##### Example labeling function
![]({{ site.github.url }}/images/editor_uploads/2018-09-05-182951-labeling_function.png)
2. **Modeling Accuracies and Correlations**: Next, Snorkel automatically learns a generative model over the labeling functions, which allows it to estimate their accuracies and correlations. This step uses no ground-truth data, learning instead from the agreements and disagreements of the labeling functions.    

3. **Training a Discriminative Model**: The output of Snorkel is a set of probabilistic labels that can be used to train a 
wide variety of state-of-the-art machine learning models, such as popular deep learning models. While the generative model is 
essentially a re-weighted combination of the user-provided labeling functions — which tend to be precise but low-coverage - discriminative models can retain this precision while learning to generalize beyond the labeling functions, increasing 
coverage and robustness on unseen data.   

One thing to note is that it is quite possible for a user to write labeling functions that are statistically dependent (i.e., correlated). Modeling such dependencies is crucial because it affects the estimates of true labels. To help with this, Snorkel automatically selects which dependencies to model using an estimator that relies on a hyper-parameter - epsilon. With large values of epsilon, no correlations are included, and as we reduce the value progressively more correlations are added, starting with the strongest.

Snorkel is currently being used on text extraction applications for medical records at the Deparment of Veterans Affairs, to mine scientific literature for adverse drug reactions in collaboration with the Federal Drug Administration, and to comb through everything from surgical reports to after-action combat reports for valuable structured data. More details about the project can be found [here](https://hazyresearch.github.io/snorkel/).

---

## Uncanny content: YouTube Kids continues to be weird

_by [Grant](https://twitter.com/GrantCuster)_

Due to the combined incentives of algorithmic discovery and ad revenue, YouTube Kids has gotten weird. Last year, James Bridle [highlighted the vast amounts of content (some of it just weird, some of it seriously disturbing)](https://medium.com/@jamesbridle/something-is-wrong-on-the-internet-c39c471271d2) that has been produced for the platform. We looked at the implications for people working on recommendation systems in our [FF07 report on Semantic Recommendations](https://www.cloudera.com/products/fast-forward-labs-research/fast-forward-labs-research-reports.html) and [Friederike discussed it on the DataFramed podcast](https://www.datacamp.com/community/podcast/data-science-fake-news).

![Screenshot of Johny and his father dancing.]({{ site.github.url }}/images/2018/09/johny-1536074143974.jpg)

This past week, a relatively harmless exemplar of that content broke out of YouTube Kids and achieved meme status (at least within the "extremely online" corners of Twitter). NY Mag’s select/all has [the best rundown on the history and forces behind the rise of the “Johny Johny Yes Papa” video](http://nymag.com/selectall/2018/08/what-is-the-baby-meme-about-eating-sugar-and-telling-lies.html). The video has since been taken down due to a copyright claim. Your best hope of finding it at this point is googling for it, but if you do, you’ll find out that there are hundreds of CGI videos of the nursery rhyme with slight variations. 

Watching any of them will probably give you an idea of a fair amount of the weirdness of the genre. But the one featured in the viral tweet was transcendent in its combination of weird aspects, which include:
- a nursery rhyme that has drifted from its original nursery rhyme nonsense into dream-like uncanny nonsense.
- the combination of CGI assets from different styles of animation (the baby looks like its from Boss Baby, the dad from a low-budget Pixar knock-off).
- the strangely realistic dance moves, which, as select/all points out, are a result of readily available motion capture files of things like the [Gangam Style dance moves](https://www.xsens.com/news/motion-capture-files-for-psy-gangnam-style/).

It’s easy to worry about new developments like [GANs that generate convincing fake celebrity photos](https://www.theverge.com/2017/10/30/16569402/ai-generate-fake-faces-celebs-nvidia-gan), but examples like this YouTube Kids content show that adversarial content production is already widespread — it’s just that humans are doing the generation. As Bridle puts it, “This is content production in the age of algorithmic discovery — even if you’re a human, you have to end up impersonating the machine.” This type of algorithm vs. humans-trying-to-game-the-algorithm conflict has a long history on the internet, going back (at least) to the advent of Search Engine Optimization.

I’m fascinated with how these ‘human impersonating machine’ productions are becoming their own aesthetic (connected to [the idea of the New Aesthetic, a term coined by Bridle](https://en.wikipedia.org/wiki/New_Aesthetic)). Everyone who describes the videos resorts to calling them “off.” It’s difficult to describe exactly is wrong with them, and the inability to pinpoint it makes us even more uneasy. This feeling can be linked to the [uncanny valley](https://en.wikipedia.org/wiki/Uncanny_valley) concept, where it is hypothesized that CGI representations of humans that are very close, but not fully identical, really creep us out. Videos like “Johny Johny Yes Papa” still have ties to what we would recognize as enjoyable video for children, but it has been reflected and distorted. Through its recommendation system, the algorithm creates an abstracted criteria of what an enjoyable children's video is. Humans then produce content that does the bare minimum to satisfy that criteria, while throwing in random variations to qualify it as new content. I think what made the viral "Johny" video take off was that it was just weird and uncanny enough. You could still see the (heavily distorted) humanity in it.

It will be interesting to see how this aesthetic develops. The sketch show “Tim and Eric Awesome Show, Great Job”  was fascinated with the aesthetics and weirdness of public access TV, even [adopting some of its actors from it](https://www.buzzfeed.com/agh/two-tim-and-eric-cast-members-were-former-public). Probably in ten years we’ll have a show deliberately recreating the weirdness of YouTube Kids, just for the enjoyment of those who grew up watching it.

---

## CFFL Updates

* If you're attending the Strata Data Conference in NYC this year, please be sure to say hello!  Shioulin will be speaking on [Semantic Recommendations](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/69260) today, and Friederike will be [speaking](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/69365) today as well.  Hilary will also be giving a keynote talk at Strata on Thursday, September 13th.

* Save the date!  Friederike will be presenting an interactive webinar on multi-task learning for individual subscribers at 1:00pm ET on Friday, September 14th.  Details to come.  :)

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on September 27th (also here in NYC).

* Shioulin will be speaking at [ODSC Europe](https://odsc.com/london) (September 19-22) in London.

* Friederike will be participating at [EPIC 2018](https://2018.epicpeople.org/salons/) in Honolulu, October 9-12.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime!

All the best,

The Cloudera Fast Forward Labs Team
