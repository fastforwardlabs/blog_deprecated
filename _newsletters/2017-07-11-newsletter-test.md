---
layout: newsletter
slug: 2017-07-11-newsletter-test
---

## Introduction

As a society, we like hopping on bandwagons. In the 1950s and 60s, we hopped on the  [information theory](https://en.wikipedia.org/wiki/Information_theory) bandwagon, a technical tool for the communications engineer. *"It will be all too easy for our somewhat artificial prosperity to collapse overnight when it is realized that the use of a few exciting words like _information theory_, _entropy_, _redundancy_, do not solve all our problems,"* [wrote](https://monoskop.org/images/2/2f/Shannon_Claude_E_1956_The_Bandwagon.pdf) Claude Shannon (developer of information theory) in 1956. Today, the AI train seems to be the bandwagon of choice.

Welcome to the Fast Forward Labs' public newsletter. Once a month, we will share with you updates on data, data science, machine learning, and AI - _without_ jumping on the bandwagon.

## *"Seldom do more than a few of nature's secrets..."*
*"... give way at one time,"* said Shannon. It is an exciting time to be working in the field of machine learning and AI. These tools can help diagnose disease, achieving [higher accuracy of tumor classification on slides of lung cancer tissue](https://med.stanford.edu/news/all-news/2016/08/computers-trounce-pathologists-in-predicting-lung-cancer-severity.html) compared to human medical doctors, for example. However, for all its success, today's AI solves problems in narrow domains. [Google's AlphaGo](https://research.googleblog.com/2016/01/alphago-mastering-ancient-game-of-go.html) beat [the best human Go players](https://techcrunch.com/2017/05/23/googles-alphago-ai-beats-the-worlds-best-human-go-player/), a tremendous success - but AlphaGo was successful because its developers [carefully studied and exploited characteristics of the game Go](https://medium.com/@karpathy/alphago-in-context-c47718cb95a5), a deterministic, fully observed, two-player, zero-sum game.

AI is not the threat it is sometimes made out to be either. A [recent headline](http://www.pcgamer.com/facebook-kills-ai-that-invented-its-own-language-because-english-was-slow/): *"Facebook kills AI that invented its own language because English was slow."* Facebook toyed with a reinforcement learning system in which two virtual agents could achieve a task [only if they learned to exchange information *in some way*](https://research.fb.com/publications/multi-agent-cooperation-and-the-emergence-of-natural-language/). Given the world's multitude of ways for information exchange, from English to Irish Gaelic or even Morse code, it would have been surprising had the agents developed the _English_ language for the task.

At the heart of every successful AI application today is a careful selection of the appropriate (machine learning) tools for the required solution based on a fundamental and deep understanding of the problem at hand. A conceptual understanding of why and how these tools work needs to accompany the current commodification of tools (e.g., open-sourced libraries for deep learning, e.g., [Tensorflow](https://www.tensorflow.org/), [Caffe2](https://research.fb.com/downloads/caffe2/), [Keras](https://keras.io/)) to be able to assess the _fit_ between problem and tool that is at the heart of every successful AI application today.

In Fast Forward Lab's public newsletter, we will review exciting breakthroughs in data, data science, machine learning, computer science, neuroscience, and other related fields. We will cover new algorithms, modules, and libraries. We will write about putting data to work within organizations - from building teams to establishing an analytics or innovation practice - and we will reflect on technology's impact on society. And sometimes we will share exciting news about our work at FFL.

Enjoy!

## How good is your topic model?

Topic models (e.g., [Latent Dirichlet Allocation](http://ai.stanford.edu/~ang/papers/nips01-lda.pdf)) are statistical models to uncover abstract topics, represented by sets of words (e.g., gene, DNA, genetic, sequencing, CRISPR, rapid), in a collection of documents. As we showed in our [report on Text Summarization](http://blog.fastforwardlabs.com/2016/04/11/new-tools-to-summarize-text.html), they allow text to be summarized in an unsupervised manner. But model validation (the assessment of the quality of a model, and a common challenge with unsupervised methods) is difficult with topic models.

An automated approach for deciding if a topic model is good is to have a computer calculate its perplexity. Perplexity is a measure that results from the comparison of the predicted and actual distribution of topics across documents on a held-out test, i.e., a set of documents not seen during model training. But in the same way that improving the accuracy of a recommendation engine doesn't necessarily result in more sales, improving the perplexity of topic models does not necessarily result in a better summarization product. In fact, as shown in [Reading Tea Leaves: How Humans Interpret Topic Models](https://papers.nips.cc/paper/3700-reading-tea-leaves-how-humans-interpret-topic-models.pdf), it often doesn't!

![]({{ site.github.url }}/images/2017/08/lda-diagram.png)

##### An illustration of Latent Dirichlet Allocation (LDA), a topic modeling technique.

In practice, data scientists look at the automatically extracted topics of the model and judge whether or not these "make sense". This approach  leads to "good enough" topic models in practice, but it is neither objective nor scalable. We are in need of a way to automatically validate models that aligns with human judgment.

That's why we are excited to see [An Automatic Approach for Document-level Topic Model Evaluation](https://arxiv.org/abs/1706.05140) by Shraey Bhatia and collaborators. They show that it's not enough to look at the top few words in each topic; it's easy to build a topic model that generates coherent topics whilst failing to associate topics with documents in a sensible manner. To ensure that topic models hit both objectives, data scientists must _also_ look at the top few topics in each document. Building upon this insight, Bhatia and collaborators offer an automated measure of the quality of the allocation of topics to documents that relies on the coherence of topics _and_ the association between topics and documents. Crucially, as verified by crowdsourcing, their measure does correlate closely with human validators.

![]({{ site.github.url }}/images/2017/08/human-judgement.jpg)

##### The human judgments of the fit between topic models and the analyzed documents correlates closely with the model's assessment.

The number of documents we create and store is growing; we are in need of techniques to digest documents in summarized form. Topic models are popular - they are applied to increasingly larger collections of documents (see [here](https://arxiv.org/abs/1602.06049) for a fast and parallelizable implementation of topic models), and have been extended to be able to track the development of topics over time ([here](http://dl.acm.org/citation.cfm?id=1143859) and [here](https://arxiv.org/abs/1206.3298)). Automatic evaluation of the quality of topic models will support these efforts: agreed upon measures of success that can be computed in an automated fashion drive progress in machine learning.

## What is Data Ethnography?

In machine learning, even the most sophisticated algorithms are nothing without the right data on which to run them. Problems with training data can result in conspicuous failures that highlight the need for a better understanding not just of algorithms, but also of the datasets on which the algorithms are training. In a recent article from [co.design](https://www.fastcodesign.com/90134155/the-most-crucial-design-job-of-the-future), Caroline Sinders calls the "Data Ethnographer" the "most crucial design job of the future." We agree; let's write that job description.

![]({{ site.github.url }}/images/2017/08/crabs.jpg)

##### Data Ethnography can help us understand why these french fries were classified as crabs.

Sinders defines data ethnography as "the study of the data that feeds technology" and then she suggests that data ethnographers should ask the kinds of questions that could populate a "nutrition label" for the dataset:
- "What is the culture of the dataset?"
- "How old is it?"
- "Who made it?"
- "Who put it together?"
- "When was it updated - has it ever been updated?"

Great, but this isn't ethnography. It's a process for generating metadata, for generating a demographic breakdown - a census - of the dataset. When [Bronislaw Malinowski](http://www.oxfordbibliographies.com/view/document/obo-9780199766567/obo-9780199766567-0096.xml) pioneered the practice of ethnography, he was trying to go _beyond_ that kind of metadata generation. About his early work on Trobriand Islanders, he wrote:
>... I took a village census, wrote down genealogies, drew up plans and collected the terms of kinship. But all this remained dead material, which lead no further into the understanding of ... mentality or behaviour.

Instead, he recommended an immersive, [participatory engagement](http://www.qualitative-research.net/index.php/fqs/article/view/466/996) with the people whom he studied. Understandings of culture emerge from interactions with people, and can never be encapsulated by summary statistics about the population. What 'data ethnographers' _should_ be asking are questions about how the data relate to the phenomena they ostensibly describe: what is the relationship between the real world, in all its messy richness, and the individual data points in a given dataset?

Data ethnographers should be asking:
- Why was this data collected in the first place?
- Who decided what counts as an 'instance' of a particular event, and how?
- What threshold must any instance have met to be counted as an instance, and what similar instances didn't meet that threshold?
- How did we decide when to start and stop collecting data?
- How would different start- and end-points alter the conclusions that could be drawn from the dataset?

There is no such thing as 'raw' or 'pure' data... Raw data is, as Lisa Gitelman and colleagues point out, an [oxymoron](https://mitpress.mit.edu/books/raw-data-oxymoron). What we call data are (usually) actually '[capta](http://www.digitalhumanities.org/dhq/vol/5/1/000091/000091.html#),' data points that are produced by the social practice of data collection. The questions we give above are not answerable from the dataset itself - they aren't metadata - and yet a good data ethnographer _could_ answer these questions. To do so, he or she would have to be familiar with the range of data collection practices (from survey design to API scraping) as well as the real-world phenomena the dataset describes. But data ethnography should go beyond _post hoc_, forensic analyses. Data ethnography, properly motivated, can and should inform the construction of data sets, attending to what is and isn't included, the conditions under which data is recorded, and attentive to gaps in the data.

Have you seen actual job postings for data ethnographers? We'd be curious to see what those job descriptions look like, and would be eager to talk to any real-life data ethnographers working in the field today. Please pass along any thoughts or relevant experience to [contact@fastforwardlabs.com](mailto:contact@fastforwardlabs.com)!

## Jobs, Jobs, Jobs

Here are a few job opportunities for data scientists and machine learning engineers:

 - **XING** - Vice President, Data Science ([job description](https://corporate.xing.com/de/karriere/jobs/suche/details/jobs/1885/))
 - **Complex** - Director of Business Intelligence ([job description](http://jobs.complex.com/apply/lf9rgJetpk/Director-Of-Business-Intelligence))

Also, [Wonder](https://askwonder.com/) is looking for a data engineer/analyst to build and refine their ETL pipeline and tooling while collaborating with the business to define operational metrics, and building predictive models to forecast demand. Contact [justin@askwonder.com](mailto:justin@askwonder.com) if you're interested!

If you would like us to share job opportunities, send a short note to  [contact@fastforwardlabs.com](mailto:contact@fastforwardlabs.com) with a link to the job description and *one single sentence* to allow us to highlight the opportunity.

## FFL Reads

What we're reading:
- [Utopian Hacks](https://limn.it/utopian-hacks/)
- [The Business of Artificial Intelligence](https://hbr.org/2017/07/the-business-of-artificial-intelligence)
- [Learning to Learn](http://bair.berkeley.edu/blog/2017/07/18/learning-to-learn/)
- [Pocket brains: Neuromorphic hardware arrives for our brain-inspired algorithms](https://arstechnica.com/science/2017/07/pocket-brains-neuromorphic-hardware-arrives-for-our-brain-inspired-algorithms/)
- [Proving that safety-critical neural networks do what they're supposed to](http://composition.al/blog/2017/05/30/proving-that-safety-critical-neural-networks-do-what-theyre-supposed-to-where-we-are-where-were-going-part-1-of-2)

For more on what we're reading, be sure to check out [our blog](http://blog.fastforwardlabs.com/links.html)!

## FFL Talks

We're giving talks at a few upcoming conferences:
- [Big Data Day LA](https://www.bigdatadayla.com/): August 5  **(Los Angeles, Mike)**
- [FATML](http://www.fatml.org/): August 14 **(Halifax, Micha)**
- [Synaptech](http://synaptech.ai/): September 21-22 **(Berlin, Friederike)**

And here are a few other conferences we think look interesting:
- [Data Visualization Summit](https://theinnovationenterprise.com/summits/data-visualization-summit-boston-2017): September 7-8 (Boston, MA)
- [O'Reilly's Artificial Intelligence Conference](https://conferences.oreilly.com/artificial-intelligence/ai-ca): September 18-20 (San Francisco, CA) - *Tip: Early-bird pricing ends August 4th*
- [The Strange Loop](https://www.thestrangeloop.com/2017/sessions.html): September 28-30 (St. Louis, MO)
- [PyGotham 2017](https://2017.pygotham.org/) - October 6-7 (New York, NY)

Also, a friend of FFL is doing a study on this perception of risk in emerging technologies, and you can help! Fill out the survey [here](https://cuboulder.qualtrics.com/jfe/form/SV_9sop0ybfnc1DH5b). We'll be sure to share the results in a future newsletter. Thank you!

As always, thank you for reading.  We'd love to hear from you!  You can reach us anytime at [contact@fastforwardlabs.com](contact@fastforwardlabs.com).