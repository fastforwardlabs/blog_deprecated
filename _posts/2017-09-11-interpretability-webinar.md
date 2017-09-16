---
layout: post
title: "Interpretability in conversation with Patrick Hall and Sameer Singh"
date: 2017-09-11
preview_image: /images/2017/08/ff06-logo.png
author: Mike
author_link: http://twitter.com/mikepqr
feature: true
published: true
---

<div class="video-holder">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NxYCY8-Qfx0" frameborder="0" allowfullscreen></iframe>
</div>

We're pleased to share the recording of our recent webinar on machine learning
interpretability and accompanying resources.

We were joined by guests Patrick Hall (Senior Director for Data Science
Products at H2o.ai, co-author of [Ideas on Interpreting Machine
Learning](https://www.oreilly.com/ideas/ideas-on-interpreting-machine-learning))
and Sameer Singh (Assistant Professor of Computer Science at UC Irvine,
co-creator of [LIME](https://github.com/marcotcr/lime)).

We spoke for an hour and got lots of fantastic questions during that time. We
didn't have time to answer them all, so Patrick and Sameer have been kind
enough to [answer many of them below](#questions).

We're also glad to share contact information for all the participants and links
to code and further reading. Please get in touch with any of us if you're
interested in working together.

### Contact

 * Fast Forward Labs, <contact@fastforwardlabs.com>,
   [@fastforwardlabs](https://twitter.com/FastForwardLabs)
 * Mike Lee Williams, [@mikepqr](https://twitter.com/mikepqr)
 * Patrick Hall, [@jpatrickhall](https://twitter.com/jpatrickhall),
   <phall@h2o.ai>
 * Sameer Singh, [sameersingh.org](http://sameersingh.org/) or
   [@sameer_](https://twitter.com/sameer_), <sameer@uci.edu>

### Code, demos and applications

 * [Open source LIME implementation](https://github.com/marcotcr/lime)
 * [Machine Learning Interpretability with H2O.ai’s Driverless
   AI](https://youtu.be/3_gm00kBwEw)
 * [Practical Model
   Interpretability](https://github.com/jphall663/GWU_data_mining/blob/master/10_model_interpretability/10_model_interpretability.md)
   (Patrick’s teaching resources)
 * [Why your relationship is likely to last (or not): using
   LIME](http://blog.fastforwardlabs.com/2017/09/01/LIME-for-couples.html) by
   Fast Forward Labs

### Reading

 * [Ideas on Machine
   Learning](https://www.oreilly.com/ideas/ideas-on-interpreting-machine-learning)
   by Patrick Hall
 * ["Why Should I Trust You?": Explaining the Predictions of Any
   Classifier](https://arxiv.org/abs/1602.04938) (or [O’Reilly version of
   paper](https://www.oreilly.com/learning/introduction-to-local-interpretable-model-agnostic-explanations-lime))
   by Marco Tulio Ribero, Sameer Singh and Carlos Guestrin
 * [Intelligible Models for HealthCare: Predicting Pneumonia Risk and Hospital
   30-day Readmission](http://people.dbmi.columbia.edu/noemie/papers/15kdd.pdf)
   by Rich Caruana et al. (the source for the pneumonia/asthma story Mike told)
 * [The business case for
   interpretability](http://blog.fastforwardlabs.com/2017/08/02/business-interpretability.html)
   by Fast Forward Labs
 * [A Case for Model-Agnostic
   Interpretability](https://arxiv.org/abs/1606.05386) by Marco Tulio Ribero,
   Sameer Singh and Carlos Guestrin
 * [Fairness, Accountability and Transparency in Machine
   Learning](http://www.fatml.org/) and [FAT
   conference](https://fatconference.org/) (NYC, February 2018)
 * [Logic Magazine Issue 1](https://logicmag.io/01-intelligence/), which
   features the interview with an anonymous data scientist

### Talks

 * [Explaining Black-box Machine Learning
   Predictions](https://www.youtube.com/watch?v=LAm4QmVaf0E), talk by Sameer on
   LIME and related ideas at the Orange County ACM chapter.
 * [Interpretable AI: not just for
   regulators](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/59747)
   a forthcoming talk by SriSatish Ambati and Patrick Hall at Strata NYC, Sep
   27 2017

## Audience questions we didn't address during the webinar

**Is there a standard way to measure model complexity?**

Patrick: Not that I am aware of, but we use and have [put forward this simple
heuristic](https://www.oreilly.com/ideas/ideas-on-interpreting-machine-learning):

 * Linear, monotonic models - easily interpretable 
 * Nonlinear, monotonic models - interpretable
 * Nonlinear, non-monotonic models - difficult to interpret

Mike: one option, when comparing like with like, is simply the number of
parameters. This is a common metric in the deep learning community. It glosses
over some of what we really mean when we say "complex", but it gets at
something.

Sameer: Complexity is very subjective, and in different contexts, different
definitions are useful. I also agree that number of parameters are often quite
a useful proxy to complexity. One other metric I like is running time or energy
consumed for each prediction. Of course, there is some theoretical work on this
as well, such as [VC
dimensionality](https://en.wikipedia.org/wiki/VC_dimension) or even [Kolmogorov
complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity). The open
question is which of these measures of complexity correlates with a user’s
capacity to interpret it.

**Is there really a trade-off in call cases between interpretability and accuracy? There are certainly cases where there isn't, e.g Rich Caruana's pneumonia model. Can you characterize where this trade-off exists and doesn't?**

Patrick: I think we are making an assumption that greater accuracy requires
greater complexity -- which it often does for predictive modeling. So, maybe
it’s more accurate to say there is a trade-off between interpretability and
complexity. Humans cannot, in general, understand models with thousands, let
alone millions, of rules or parameters -- this level of complexity is common in
machine learning -- and this level of complexity is often required to model
real-life, nonlinear phenomena. For a linear model, I probably agree with the
questioner that the trade-off may not be as impactful, as long as the number of
parameters in the linear model is relatively small.

Mike: This may be stating the obvious, but I’d also add that, in situations
where you can get high enough accuracy for your use case with a model so simple
it’s interpretable by inspection (which does happen!), there is of course no
trade-off. You can have it all!

**Is the black box aspect of machine learning programming only an early AI development issue? Will it eventually be possible to program in "check points" where programmed models will reveal key points or factors that appear within levels of neural network calculations?**

Patrick: I don’t think this is an early AI issue. In my opinion, it’s about the
fundamental complexity of the generated models. Again, the sheer volume of
information is not interpretable to humans -- not even touching on more subtle
complications. I don’t mean big data either -- even though that often doesn’t
help make things any clearer -- I mean that I don’t think anyone can understand
a mathematical formula that requires 500 MB just to store it’s rules and
parameters. (Which is not uncommon in practice.) I do like the idea of training
checkpoints, but what if at the checkpoint, the model says: "these are the
10,000 most important extracted features which represent 100+ degree
combinations of the original model inputs"? So perhaps the combination of
training checkpoints plus constraints on complexity could be very useful. 

**Conversations in data science center around the latest/greatest models, not interpretability. Do you have any recommendations for building a company culture that values interpretability.**

Mike: send your colleagues our blog post [The Business Case for Machine
Learning
Interpretability](http://blog.fastforwardlabs.com/2017/08/02/business-interpretability.html)!
Interpretability models are profitable, safer and more intellectually
rewarding. Hopefully every one of your colleagues is interested in at least one
of those things.

Patrick: In my opinion, I’d also say this is part of customer-focus in an
analytics tool provider’s culture. It’s usually us data-nerds who want to use
our new toys. I almost never hear a customer say, "give me a model using the
latest and greatest algorithm, oh, and it’s fine if it’s super complex and not
interpretable."

Sameer: Partly, it comes from the fact that accuracy provides a single number,
which appeals to the human strive for competition and for sports, and for
engineering things that beat other things. Interpretability is, almost by
definition, much more fuzzier to define and evaluate, making us a little
nervous as empiricists, I think. 

**How does interpretability varies across industry, e.g. aviation v media v financial services?**

Patrick: I can only say that the regulations for predictive models are probably
most mature in credit lending *in the U.S.*, and that I see machine learning
being used more prominently in verticals outside credit lending, i.e.
e-commerce, marketing, anti-fraud, anti-money-laundering. 

Mike: I’d say that, of the particular three mentioned, the need for
interpretability is most acute in aviation. In fact, it goes beyond
interpretability into [formal verifiability of the properties of an
algorithm](http://composition.al/blog/2017/05/30/proving-that-safety-critical-neural-networks-do-what-theyre-supposed-to-where-we-are-where-were-going-part-1-of-2/),
which is a whole different ball of wax. The acknowledged need is least in
media, because there’s relatively little regulation. Which is not to say it
wouldn’t be profitable to apply these techniques in this or any other industry
where it’s important to understand your customers. Financial services is
interesting. The need for interpretability is well-understood (and hopefully
well-enforced) there. There’s no question, however, that more accurate models
would make more money. People are [starting to build neural network-based
trading and lending
models](https://insight.equifax.com/approve-business-customers/) that satisfy
applicable regulations, e.g. [SR
11-7](https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm), and
the [Fair Credit Reporting
Act](https://en.wikipedia.org/wiki/Fair_Credit_Reporting_Act). There's a huge
first-to-market advantage in deploying these more accurate models.

**Model governance and model reviews are standard for financial models as are stress tests. Do you see something similar in the future of industry ML models?**

Patrick: I don’t know why so few machine learning practitioners stress-test
their models. It’s easy to do with simple sensitivity analysis, and the
financial risks of out-of-range predictions on new data are staggering! I do
also hope that machine learning models that make serious impacts on people’s
lives will be better regulated in the future, and the EU is taking steps toward
this with the GDPR. In the meantime, you can keep up with research in this area
at [FATML](http://www.fatml.org/). 

Mike: I also recommend [What’s your ML test score? A rubric for ML production
systems](https://research.google.com/pubs/pub45742.html), which mentions a
bunch of really basic stuff that far too few of us do.

**What effect will interpretability have on feature selection?**

Mike: Anecdotally, we spotted a bunch of problems with our model of customer
churn using LIME. In particular, as non-experts in the domain, we’d left in
features that were leaking the target variable. These lit up like Christmas
trees in our web interface thanks to LIME.

Patrick: I think it will prevent people from using overly-complicated,
difficult to explain features in their models as well. It’s no good to say
`CV_SVD23_Cluster99_INCOME_RANGE` is the most important variable in the
prediction if you can’t also say directly what that variable is exactly and how
it was derived. 

**I'm a graduate DS student who just sent some ML research to a group of people in industry who I thought would be interested. In response I got the question "will your research replace my job". What are some ways to overcome the fear of ML and convince people that AI won't replace the creativity in decision making of humans.**

Patrick: Well it might one day -- and we all need to be realistic about that.
But for today, and likely for many years, most of us can rest easy. Today,
machine learning is only good at specific tasks: tasks where there is a large
amount of labeled, easy-to-use "clean" data that has also been labeled.

Sameer: For now, you can use the explanations almost as a way to show that
machine learning is not a magical black-box. Without an explanation, a natural
reaction is to say "how could it predict this? It must be super-intelligent!",
but with an explanation and demystifies this, even if it is doing the right
thing for right reasons, the perception of machine learning will not be of an
adversary.

**Why is it that some models are seen as interpretable and others aren't? There are large tomes on the theory of linear models, yet they're seen as interpretable. Could part of this be due to how long they've been taught?**

Mike: this is a great point. I don’t think it’s simply due to our relative
familiarity with linear models. It’s that a trained linear model really is
simple to describe (and interpret). Trained neural networks are, in a relative
sense, not even simple to describe. The big linear modeling textbooks are about the long textbooks' deep domain-specific implications, difficulties like
causality, and the [real numerical/engineering
subtleties](https://arxiv.org/abs/1008.4686). 

Patrick: I 100% agree with the questioner's sentiment. Essentially linear model
interpretations are exact and stable, which is great, _but_ the models are
approximate. Machine learning explanations take a different mindset: machine
learning explanations are less stable and exact, but the model itself is
usually much less approximate. So, do you prefer an exact explanation for an
approximate model? Or an approximate explanation for an exact model? In my
opinion, both are useful.

Sameer: Interpretability is relative. I don’t think we should hold linear
models as the ideal in interpretability, because it is not, especially with
large number of variables. One of the known problems with linear models is
correlated features, i.e. the importance of a feature can get distributed to
correlated features, making features that are less important, but uncorrelated,
have a higher weight. We tried to get around this somewhat in LIME by
restricting the number of features chosen as an explanation (L1 regularization
or Lasso), and normalizing the regression variables over our samples (to reduce
the effect of the bias).

**Once we identify biases, how do we address them?**

Patrick: Problematic features -- such as those correlated to race, gender,
marital status, disability status, etc. -- can be removed from the input data
and the model can be retrained. Or features can be intentionally corrupted to
remove problematic information with techniques like differential privacy during
model training. Another method I’m personally interested is determining the
local contribution of problematic features using something like LOCO or LIME
and subtracting out the different contributions of problematic features
row-by-row when predictions are made. 

**Aren't we reducing interpretability to visual analytics of sensitivity?**

Patrick: In some cases yes, but I would argue this is a good thing. In my
opinion, explanations themselves have to be simple. However, I’m more
interested in fostering the understanding of someone who was just denied parole
or a credit card (both of which are happening today) based on the decision of a
predictive model. For the mass-consumer audience, it’s not an effective
strategy to provide explanations that are just as mathematically complex as the
original model.

**How is LIME different than variable importance, which we get from different algorithms (e.g. RFs?)**

Patrick: The key is locality. LIME essentially provides local variable
importance, meaning that you often get a different variable importance value
for each input variable for each row of the data set. This opens up the
possibility of describing why a machine learning model made the prediction it
made for each customer, patient, transaction, etc. in the data set.

Sameer: To add to that, I would say the difference between global and local
dependence can sometimes be quite important. Aggregations used to compute
global dependence, like variable importance, can sometimes drown signals. For
example, if race is being used to make a decision for a really small number of
individuals, it might not show up in the global aggregations. Similarly, local
explanations are also useful in showing the sign of the dependence in context,
i.e. age might be important overall, but for some individuals age might act as
a negative factor, and for a positive, and global explanations will not be able
to capture that. That said, it’s much easier to look at only the big picture,
instead of many small pictures.

**Which bootstrapping algorithm is used by LIME generate the perturbed samples**

Sameer: This is often domain dependent, and you can plug in your own. We tried
to stick with pretty simple techniques for each domain, such as removing tokens
in text, patches in images, etc. More details are in the paper/code.

**In the case of adversarial attacks, can LIME detect what causes the deviation from correct detection.**

Sameer: (excerpt from an email thread with Adam) This is quite an interesting
idea, but unfortunately, I believe LIME will get quite stumped in this case,
especially for images, either proposing the whole image as the explanation
(assuming the adversarial noise is spread out, as it often is), or find a "low
confidence" explanation, i.e. it'll find the subset of the image that is most
adversarial, but with sufficient uncertainty to say "don't take this
explanation too seriously".

**Can you explain the significance of the clusters in the H2O interpretability interface?**

Patrick: We chose to use clusters in the training data, instead of bootstrapped
or simulated samples around a row of data, to construct local regions on which
to build explanatory linear models. This has two primary advantages:

* We don’t need a new/different sample for every point we want to explain
* It allows us to present the (hopefully helpful) diagnostic plot of the
  training data, complex model, and explanatory model that you saw in the
  webinar. 

The main drawback is that sometimes clusters are large and the fit of the
explanatory model can degrade in this case. If you’re curious,  we choose the
number clusters by maximizing the R-squared between all the linear model
predictions and the complex model’s predictions.

**LIME makes accurate models more interpretable. Also mentioned was the related idea of making interpretable models more accurate. Which is more promising?**

Patrick: Most research I see is towards making accurate models more
interpretable. One nice practical approach for going the other direction --
making interpretable models more accurate -- are the monotonicity constraints
in XGBoost.

Sameer: Personally, I like the former, since I do believe an inaccurate model
is not a useful model. I also don’t want to restrict the architecture or the
algorithms that people want to use, nor do I want to constrain them to certain
types of interpretations that an interpretable model provides. 

### Mailing list

Our public mailing list is a great way of getting a taste of what Fast Forward 
Labs is interested in and working on right now. [We hope you'll sign up](https://fastforwardlabs.us8.list-manage.com/subscribe/post?u=bdb368b9a389b010c19dbcd54&id=1d8c97a0bd)!
