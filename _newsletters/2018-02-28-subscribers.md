---
layout: newsletter
slug: 2018-02-28-client
---

Hello! In this week's newsletter, we discuss benchmarking algorithmic fairness tools and why listening to those who have a real stake in the technology is critical in the ongoing debates around the impact of ML/AI on employment.

---

## Benchmarking Fairness

The machine learning community has been working on problems of fairness for the past ten years or so, and in that time we've seen a fairly large number of algorithmic solutions to problems of bias and disparate impact. These solutions, however, are based on different definitions of fairness, offer tradeoffs between accuracy and fairness, and are better suited to some data types than others. This presents a challenge for anyone planning to implement an existing fairness-aware algorithm as part of their workflow. Namely, how do you pick the right algorithm? The [Algorithmic Fairness](https://algorithmicfairness.wordpress.com/) folks have pointed the way forward with an [article](https://arxiv.org/abs/1802.04422), [blog post](https://algorithmicfairness.wordpress.com/2018/02/19/benchmarks-and-reproducibility-in-fair-ml/), and [github repo](https://github.com/algofairness/fairness-comparison), in which they run a host of fairness algorithms through their paces on several datasets that are touchstones in the fairness debates and representative of the sorts of fairness problems we are likely to encounter in the real world. 

![]({{ site.github.url }}/images/2018/02/preprocessing_tradeoff_accuracy-1519759148213.png)
##### Visualization of different tradeoffs between fairness and accuracy. [Image Credit: Algorithmic Fairness](https://algorithmicfairness.wordpress.com/)

Their findings benchmark for the most common fairness algorithms and present a method for evaluating these algorithms on any dataset, but they also slice through a bit of the tangle that has grown up around the fairness conversation. For all the many measures of fairness that have been proposed, the authors show there are really only two distinct 'flavors' of fairness metrics: disparate impact measures and class-sensitive error measures. Helpfully, they normalize across these metrics in order to compare them directly, and discover that many of these metrics are actually correlative with each other! 

Through benchmarking, a few key points become clear for anyone implementing fairness algorithms: 
1) *Preprocessing matters.* If your data can be preprocessed in more than one way, run metrics on the options in front of you. And if you are comparing between algorithms, make sure the preprocessing for each algorithm is the same.
2) *No new measures.* Existing metrics capture the range of most algorithms' behavior. 
3) *Train across multiple splits.* Fairness algorithms' success and stability have somewhat large variance, so evaluate across "a moderate number of training-test splits." 

The authors of this paper have been long-standing contributors to the [FATML](https://www.fatml.org/) community, which has recently rebranded its annual conference as [FAT*](https://fatconference.org/), and many of the approaches they evaluate come out of this community as well. The 2018 FAT* took place in New York City this past week.  Here are a few papers we recommend reading from [the conference proceedings](https://fatconference.org/2018/index.html):

* [Discrimination in Online Advertising: A Multidisciplinary Inquiry](http://proceedings.mlr.press/v81/datta18a/datta18a.pdf) A great case study on how a computational outcome can be parsed from a legal perspective.
* [“Meaningful Information” and the Right to Explanation](http://proceedings.mlr.press/v81/selbst18a/selbst18a.pdf) The GDPR won't make deep learning illegal, as long as there are still humans in the loop, although that doesn't necessarily mean that "anything goes".
* [What is discrimination, when is it wrong and why?](http://proceedings.mlr.press/v81/hellman18a/hellman18a.pdf) One of two keynotes. Fairness and justice are not the same things. 
* [Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification](http://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf) Intersectionality is incredibly useful, not just for understanding the world, but also for improving the accuracy and fairness of classifiers.
* [The cost of fairness in binary classification](http://proceedings.mlr.press/v81/menon18a/menon18a.pdf) Best Paper: Technical Contribution. Using the loss function to approximate optimal fairness.
* [Runaway Feedback Loops in Predictive Policing](http://proceedings.mlr.press/v81/ensign18a/ensign18a.pdf) How to understand, anticipate, and correct for interactions between models and the real world.

---

## Unemployment vs. Augmentation

In the ongoing debates around whether or not robots are going to take our jobs, listening to those who have a real stake in the technology is critical, and often offers important insights for how we build new technologies, as well as how we talk about what we build. Take, for example, this [blog post](https://becominghuman.ai/radiologists-as-knowledge-experts-in-a-world-of-artificial-intelligence-summary-of-radiology-ec63a7002329) by Judy Gichoya about the Radiology Society of North America's annual meeting last December, which provides a useful window into the concerns radiologists have about the ways automation will affect their profession, and how those concerns could be taken into account when building capabilities that impact their domain of expertise. Radiologists are justified in seeing their jobs as directly within the sights of automation, even if the tech is not there yet. (Kaggle's [Data Science Bowl 2017](https://www.kaggle.com/c/data-science-bowl-2017) offered a $1 million prize for submissions that could best detect lung cancer from CT scans, a problem that is squarely within the existing job function of radiologists around the world.)  But although the risk is real, the idea that any algorithm will replace all radiologists overnight can be easily dismissed. There is more to radiology than just reading film, questions of liability and responsibility are far from being solved, and image classification tools are not nearly accurate or generalizable enough yet for wide scale deployment.

That said, let's look at how radiologists are talking about the impact of AI on their occupations for some important insights. The first of these is that zero-sum framing doesn't help anyone. The blog author points to a Stanford [press release](https://news.stanford.edu/press-releases/2017/11/15/algorithm-outpernosing-pneumonia/) that celebrates their researchers' algorithm that "can diagnose pneumonia better than radiologists." The adversarial framing of the release is problematic, and not just because the Stanford algorithm had to be tested against radiologist-assigned labels (for a more thorough discussion of the testing and performance comparison methodology, see the original [paper](https://arxiv.org/abs/1711.05225)). By posing the issue as a man vs. machine problem, it forecloses a more worthwhile discussion on how image classification can be used to **aid** radiologists in their work, making them more efficient, accurate, and valuable in the roles they currently hold. This is a point developers could be making from the outset, rather than defaulting to a triumphalist tone of voice, stating that the latest algorithm has defeated humans once and for all.  

![]({{ site.github.url }}/images/2018/02/1_ruUDqwD4sGZOhIkeK2zUYQ-1519759204276.png) 
###### How medical professionals model the AI development workflow. Image Credit: [Becominghuman.ai](https://becominghuman.ai/radiologists-as-knowledge-experts-in-a-world-of-artificial-intelligence-summary-of-radiology-ec63a7002329) 

Collaborations between domain experts and developers can be built into the very earliest stages of a project. Radiologists know their workflows, what hard problems pertain to their field, where advances are needed, and where automation can help (rather than displace) their expertise. The same principle applies to other roles and industries as well, and this conversation among radiologists illustrates how people in general can respond to advances in AI that affect their domains. Radiologists are already planning how to be useful to the development of AI technology; developers can certainly welcome them to the conversation, and we hope the same will happen across the board.

---

## Job Postings

Come work with us!  In addition to several other [open positions](https://www.cloudera.com/careers/careers-listing.html), **Cloudera** is hiring a **Director of Product Management, Data Science** ([job description](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USA--California--Palo-Alto/Director-Product-Management--Data-Science_180286)).

Here are a few other positions we've heard about as well:
* **Silectis** - Data Engineer ([job description](https://www.silect.is/careers-data-engineer))
* **Silectis** - Platform Engineer ([job description](https://www.silect.is/careers-platform-engineer))
* **Pew Research Center** - Director, Data Labs ([job description](https://jobs-prc.icims.com/jobs/5386/director%2C-data-labs/job?mobile=false&width=641&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240))

---

## CFFL Updates

* This week Cloudera is hosting its annual Tech Summit and Sales Kickoff in Las Vegas, NV. Several of us are attending, and it's been great to have the opportunity to chat with so many other folks from Cloudera in person.

* Hilary will be speaking on March 7th at the [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ca/) in San José, and Mike will be presenting on [Interpretable Machine Learning Products](https://conferences.oreilly.com/strata/strata-ca/public/schedule/detail/63572) at Strata on March 7th, as well.

* Brian will be speaking at the [Cloudera Sessions](https://www.cloudera.com/more/events/sessions/sao-paulo.html) event in São Paulo on March 13th.

* Mike will be speaking on interpretability at [Qcon.ai](https://qcon.ai/) on April 11th in San Francisco.

* Also, be sure to catch Mike in conversation with Hugo Bowne-Anderson about interpretability on DataCamp's podcast, [DataFramed](https://soundcloud.com/dataframed/9-data-science-and-online-experiments-at-etsy#t=17:10), with another conversation about probabilistic programming coming soon, too. Friederike will also be joining Hugo for a chat in an upcoming episode, so stay tuned for that as well.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at subscribers@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team
