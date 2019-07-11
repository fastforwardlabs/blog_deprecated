---
slug: 2019-07-11-newsletter-client
layout: newsletter
---

## Taking Snorkel for a spin
by *[Shioulin](https://twitter.com/shioulin_sam)* and *[Nisha](https://twitter.com/NishaMuktewar)*

Active learning, which we explored in [our report on Learning with Limited Labeled Data](https://blog.fastforwardlabs.com/2019/04/02/a-guide-to-learning-with-limited-labeled-data.html), makes it possible to build machine learning models with a small set of labeled data. The typical simplified workflow when tackling a supervised machine learning problem is to i) locate the data, ii) create labels for all available data (the more the merrier), and iii) build a model. Instead of labeling all available data, active learning takes advantage of collaboration between humans and machines to smartly pick a small subset of data to be labeled. A machine learning model is then built using this small subset of data.

At the heart of active learning is the ability to identify difficult datapoints. Once identified, a human steps in to provide precise, high quality labels. But instead of asking a human to provide labels, can we write a function to programmatically create the labels? It turns out that the function that we are able to write does not always do a good job of labeling complex classification problems - the labeling function is typically based on heuristics and guesses. A single labeling function then, is not powerful enough. But what if we combine many such functions, and use the agreements and disagreements between them to figure out what the most likely label is; would that work?

This is the premise of [Snorkel](https://github.com/HazyResearch/snorkel) - a weak supervision framework.

We took Snorkel for a spin, and invite you to read our post about it [here](https://blog.fastforwardlabs.com/2019/07/08/snorkel_final.html)!

---

## Experiments
True to our data nerd natures, we love to build things.  As you know, for every research report we release, we also create a prototype that showcases the capability discussed in the report; we also build a lot of things for fun.  [Our new experiments portal](https://experiments.fastforwardlabs.com/) shares a collection of the machine learning prototypes, demos, and code created by our team.

---

## Upcoming Event

Please join us for our [virtual event](https://www.cloudera.com/about/events/webinars/cffl-virtual-event-7-2019.html?utm_medium=email&utm_source=newsletter&utm_campaign=ml&src=newsletter&cid=7012H000001l3VK&utm_content=FFL_Showcase_Organic_AMER_Webinar_2019-07-24) on Wednesday, July 24, 2019 at 1:00pm ET/10:00pm PT.  We'll be showcasing our soon-to-be-released newest research reports - *Advances in Deep Learning for Image Analysis* and *Transfer Learning for Natural Language Processing*, as well as our experiments portal!  You can register [here](https://www.cloudera.com/about/events/webinars/cffl-virtual-event-7-2019.html?utm_medium=email&utm_source=newsletter&utm_campaign=ml&src=newsletter&cid=7012H000001l3VK&utm_content=FFL_Showcase_Organic_AMER_Webinar_2019-07-24).