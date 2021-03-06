---
layout: newsletter
slug: 2017-11-15-subscribers
---

Hello!

According to Andrej Karpathy, Director of AI at Tesla (and former Research Scientist at OpenAI), neural networks are not just another tool in our machine learning toolbox. Rather, they are [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35). 

In other news, some of Karpathy's former colleagues have also left Elon Musk's OpenAI to [start the robotics company *Embodied Intelligence*](https://www.nytimes.com/2017/11/06/technology/artificial-intelligence-start-up.html), a name perhaps inspired by a school of thought called [embodied cognition](https://blogs.scientificamerican.com/guest-blog/a-brief-guide-to-embodied-cognition-why-you-are-not-your-brain/): you are more than your brain.

Also, the conversation about the role of technology in the last election continues. In the second part of this newsletter, we offer some resources we have found useful in framing the debate. In the first part, we introduce Facebook's *StarSpace*, a very versatile approach to ranking, recommendation, labeling, etc.

---

## StarSpace, embed anything

Facebook AI Research recently introduced [StarSpace](https://arxiv.org/abs/1709.03856) - a general purpose neural embedding model that can solve a variety of problems (e.g., text classification, ranking, recommendation). 

StarSpace can embed any item type (hence "*") into a common vector space. In the common space, items can be compared against each other and ranked (using a suitable distance metric). StarSpace is a generalization of word2vec (where each word is embedded into the vector space). Experimental results show that StarSpace is competitive in many tasks (albeit slower in some).

StarSpace is cool because it can embed anything. Many machine learning problems can ultimately be reduced to measuring similarity between different things in order to rank them, label them, and recommend them. Being able to embed anything implies we can compare, rank, label, and recommend anything. 

The research community will appreciate StarSpace because it can be used as *the* benchmarking tool across the board for classification, ranking, retrieval, and metric learning tasks. Also, the ability to embed (or featurize) users and items suggests that StarSpace could help alleviate _cold start_ problems faced by many recommendation systems in production today.

### StarSpace in detail

The StarSpace model consists of entities; the goal of the model is to learn a similarity function between two entities using neural networks. The definition of an entity is very loose, it is anything (except images) that can be represented by a set of discrete features. 

For example: suppose we define a document as an entity described by a bag of words, or a user as an entity described by the set (or bag) of movies she has liked (i.e., users are represented by items they like - you are your taste).

The StarSpace model is free to compare entities of different kinds, and in doing so, it can morph into a recommender, a text classifier, or any system that evaluates and ranks similarities between two entities. 

At the heart of the model is a loss function which compares similarity between positive entity pairs *(a,b)* and negative entity pairs *(a, b-)*. If we were to use StarSpace as a text classification system, the positive pair will be a training set of labeled data where *a* is a document and *b* is the associated label. The corresponding negative data pair will be one where *b-* is sampled from the set of possible labels. The model selects *k* negative pairs and minimizes the loss function summed across all the positive and negative pairs.

With regard to the *cold start* problem in collaborative-filtering and content-based recommendation systems, StarSpace provides a solution by embedding users and items as features. A StarSpace recommender accommodates new items, and in some cases new users, depending on how the positive and negative entity pairs are selected. Used as just a collaborative filtering-based system, a positive pair is a user *a* and a single item that he liked *b*. Negative entities are sampled from the set of possible items. 

Used as a recommender that generalizes to new users, *a* is now all the items that a particular user liked, except one, and *b* is the left out item. A user is now modeled as the sum of embeddings of items they like. 

Taking it one step further, imagine a document recommendation system, where each user is represented by the bag of documents they like, and each document by the bag-of-words it contains. By setting *a* as all of the words except one, and *b* as the left out word, the system now accommodates both new items and new users.

![]({{ site.github.url }}/images/2017/11/starspace_userdoc-1510678836886.png)
##### User and document representation in StarSpace

StarSpace, one model for many tasks (with open-sourced [code](https://github.com/facebookresearch/StarSpace)).

---

## On society, algorithms, the attention economy, and ad-driven business models

*“I’m trying to get us down from La-La Land here,”* said Senator John Kennedy, Republican of Louisiana, when he [met with executives of Facebook, Google, and Twitter](https://www.nytimes.com/2017/10/31/us/politics/facebook-twitter-google-hearings-congress.html?_r=0) to discuss the role of their technology during the last election. 

La-La Land is most definitely *not* the place where this debate should take place; however, the issues at the heart of this debate are complex. It is a challenge to understand what happened (as evidenced during the hearing), let alone suggest solutions.

There are a few sources of information we've found useful in framing the issues discussed during the hearing. To better understand online media manipulation and disinformation, we recommend Data & Society's report on - well, yes - [*Media Manipulation and Disinformation Online*](https://datasociety.net/output/media-manipulation-and-disinfo-online/). The authors outline how technology-savvy extremist groups take advantage of the digital world and hack the attention economy; it is a long, very informative (and, we admit) scary read.

Alongside Data & Society's report, we recommend an article on ["odd" children's entertainment](https://medium.com/@jamesbridle/something-is-wrong-on-the-internet-c39c471271d2) (which you may not encounter, even if you have kids, but your kids might). It helps disentangle the effects of politics from the effects of algorithms, the attention economy, and ad-based business models; it's a very broad issue.

The Information recently published an article on the [five challenges of the modern internet](go.theinformation.com/895c2b7cd80c7c08) (free access with your email address); this article includes a few prompts for concrete and constructive debate:

 - Is Anonymity a Feature to Be Protected, or a Bug to Be Quashed?
 - Should Anyone Be Able to Reach Everyone?
 - Is Money a Form of Speech?
 - Who Decides What Algorithms and Human Policies Control Our View of Reality?
 - Will We Tolerate Unregulated Escape Hatches for Free Speech?

Yasmin Green, Director of R&D at Jigsaw (a tech incubator within Alphabet), emphasizes [the importance of understanding what drives and motivates people](https://www.technologyreview.com/s/609419/the-woman-battling-hate-speech-censorship-and-extremism-online-and-off/) (above technocratic solutions) in this debate; technology is a tool used by people, we agree, and diverse cultural perspectives should influence the continued development of meaningful technology.

The little known [UNICEF Ponder Program in Kosovo](http://www.ponder-ks.org/about/what-is-ponder/) gives reasons for hope: a three-day workshop that fosters media literacy and critical approaches to information among adolescents, it helped reduce the number of adolescents recruited by ISIS, and is concrete evidence for [a possible future imagined by the Economist](https://www.economist.com/news/leaders/21730871-facebook-google-and-twitter-were-supposed-save-politics-good-information-drove-out). Over time, we *can* build resilience to online media manipulation and disinformation.

(Do you agree? Disagree? Is there material we overlooked? [Send us a note!](mailto:subscribers@fastforwardlabs.com))

---

## Jobs, Jobs, Jobs

Here are a few jobs we've heard about:

* **NYC Mayor's Office of Operations** - Chief Analytics Officer ([job description](http://www1.nyc.gov/assets/operations/downloads/pdf/employment-opportunities/chief-analytics-officer-job-description-vf.pdf))
* **Elucd** - Data Scientist ([job description](https://jobs.lever.co/elucd/7a251473-f3a7-40f6-b97c-c10c8838d316))
* **USA for UNHCR** - Data Scientist ([job description](https://www.linkedin.com/jobs/view/503624429/))

---

## FFL Updates 

Friederike will be speaking at [PyData 2017](https://pydata.org/nyc2017/) during the last week of November here in New York City; if you're attending, please do say hello!  Also, a few members of the CFFL research team will be attending [NIPS](https://nips.cc/) in December, and would be happy to connect during the conference.

And thank you, as always, for reading.  We'd love to hear your thoughts - please feel free to reach out any time to subscribers@fastforwardlabs.com.

-- The Cloudera Fast Forward Labs Team
