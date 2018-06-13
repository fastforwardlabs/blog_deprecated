---
layout: newsletter
slug: 2018-06-13-subscribers
---

Hello!  In this week's newsletter, we talk about [spaCy](https://spacy.io/), and the benefits of the GDPR for machine intelligence.  We'd also like to nominate [this post](https://twitter.com/skyetetra/status/1006257529733537792) for Tweet of the Week:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m happy to report that hyper-intelligent AI isn&#39;t that close: currently Amazon, Microsoft, and Google&#39;s cutting-edge APIs all believe &quot;My leg was eaten by a great white shark&quot; is a sentence with a highly positive sentiment. <a href="https://t.co/rWSvyek9zs">pic.twitter.com/rWSvyek9zs</a></p>&mdash; Jonathan Nolis (@skyetetra) <a href="https://twitter.com/skyetetra/status/1006257529733537792?ref_src=twsrc%5Etfw">June 11, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## spaCy shines in processing text data

Increasingly, a lot of the work being done in machine learning involves processing text data.  There are many tools for doing machine learning research on text data, such as the Python natural language toolkit [NLTK](https://www.nltk.org/), and [CoreNLP](https://stanfordnlp.github.io/CoreNLP/index.html).  These tools are well-known and broadly used, but aren’t necessarily the best options for businesses looking to put their models into production environments.  

When models have been developed and need to be deployed quickly in production environments, [spaCy](https://spacy.io/) really shines.  When using spaCy, there are fewer customizable options, but it works faster on large-scale datasets because the people who developed it did so with an eye toward speed.  SpaCy has an impressive list of capabilities that allow for text preprocessing (such as tokenization and lemmatization) and also entity recognition, similarity, and text classification.  

![Image taken from https://codepen.io/explosion/pen/39c02c893a84794353de77a605d817fd]({{ site.github.url }}/images/2018/06/displaCy_visual-1528825564426.png)

spaCy works well with other popular machine learning Python packages, such as PyTorch and TensorFlow.  In addition, there is an integrated package called [displaCy](https://explosion.ai/demos/displacy) which allows you to check your model's predictions visually in your browser.  In its second release, it now also easily integrates with Apache Spark, making it even easier to put your models into production.  The newest version is even faster and more accurate than v1 and has lots of new improvements - so if you’ve tried spaCy out in the past but it’s been a minute, we recommend giving it a second look.  

---

## The benefits of the GDPR for machine intelligence

It has now been more than two weeks since the EU's General Data Protections Rights (GDPR) law went into effect, and the most visible effects so far are overflowing [inboxes](https://www.wired.co.uk/article/pecr-gdpr-emails) and some sites shutting down temporarily out of [caution](https://www.theverge.com/2018/5/23/17387146/instapaper-gdpr-europe-access-shut-down-privacy-changes). These initial effects aside, the GDPR has real teeth, including the ability to fine companies up to 4% of global revenues, and places meaningful requirements on companies to protect individuals' data. In the lead-up to the law taking effect, no shortage of ink was spilled about the challenges the GDPR represents for machine intelligence. While most experts agree that the true impacts of the GDPR will not be completely clear until enforcement actions and [lawsuits](https://www.irishtimes.com/business/technology/max-schrems-files-first-cases-under-gdpr-against-facebook-and-google-1.3508177) brought under the law work their way through the courts, there are a number of ways in which the GDPR might result in a net benefit for machine intelligence.

A recent article in [TechCrunch](https://techcrunch.com/2018/06/07/gdpr-panic-may-spur-data-and-ai-innovation/) makes precisely this point by framing many of the practices required by the GDPR as crucial for building better, safer models. The GDPR requires firms to keep better track of whose personally identifiable information (PII) they hold, to notify those whose PII they hold, to not use completely automated decision-making systems, and to offer a means of redress for those whose data has been used improperly. Each of these requirements can improve the way machine intelligence is built and used, in several ways. For one, keeping better track of PII means creating clear inventories and pathways to help satisfy individuals' requests to be removed from datasets. These kinds of data management practices can be a countervailing force to the 'more data is better data' impulse that drives the indiscriminate aggregation of data into large pools of training data. A robust data management strategy can drive replicable data science at the same time that it helps meet GDPR requirements for PII. 

Second, the GDPR supports a recognition that technical systems which deal with personal information are embedded in social systems; they don't exist in and of themselves. Such technical systems, therefore, should be responsive to the humans whose lives they affect. This can be done by making algorithms more interpretable, by providing a means of redress for perceived wrongs, and by ensuring there is a human in the loop for automated decision-making processes. This supports good machine intelligence because, while there are some trade-offs between accuracy and interpretability, interpretable algorithms can be inspected and can generate new insights about the underlying data that drives an algorithmic system. Furthermore, ensuring humans stay in the loop helps to maintain visibility into the functioning of an algorithmic system and is a crucial component of public trust in machine intelligence. Rather than causing people to shun the use of machine intelligence, the idea that the GDPR contains a right to an explanation should be [read](http://proceedings.mlr.press/v81/selbst18a.html) as a way of ensuring that algorithms function meaningfully in people's lives.

---

## CFFL Updates

* Mike will be speaking on probabilistic programming at [QCon](https://qconnewyork.com/ny2018/presentation/modern-cs-presentation-1) in New York on June 28th.

* Friederike will be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th, and also at [Curious2018](https://curious2018.com/) in Darmstadt, Germany in mid-July.

* Please join us on Wednesday, July 11th for [a webinar](https://info.cloudera.com/LP=2027?elq_id=CCLOU000007199414) on **Multi-Task Learning: Stepping away from narrow expert models** (the topic of our next report)!

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime!

All the best,

The Cloudera Fast Forward Labs Team
