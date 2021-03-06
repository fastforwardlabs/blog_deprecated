---
layout: newsletter
slug: 2017-09-28-subscribers
---

Hello!

[Andrew Wiles](https://en.wikipedia.org/wiki/Wiles%27s_proof_of_Fermat%27s_Last_Theorem) gained his fame by solving a nearly 400-year-old math problem; [Fermat’s Last Theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem). He was asked, "what themes do you emphasize when you talk to the public about math?" His answer: “Accepting the [state of being stuck](https://mathwithbaddrawings.com/2017/09/20/the-state-of-being-stuck/).” Fitting, since this week we cover a method almost two decades in search of an application - the Information Bottleneck principle: research and innovation for which a comfort with "being stuck" is an essential ingredient. We also reflect on the nature of models (or anti-models?) and the first AI-inspired album: *I AM AI*.

---

## Black-box networks and the Information Bottleneck principle 

We are, by now, accustomed to hearing that neural networks are "black boxes," but we may *not* know that neural networks are black boxes in more than one way. Let's take a trained neural network for image classification: it takes an image of a dog, for example, and returns the label 'dog'. 

1 - The neural network is a black box because it is difficult to understand what about the input image caused the network to return the correct label. [LIME](https://arxiv.org/abs/1602.04938), covered in our [latest report](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html) and a [recent blog post](http://blog.fastforwardlabs.com/2017/09/01/LIME-for-couples.html), offers one solution.

2 - The neural network is also a black box because it is difficult to understand what training data are most responsible for the correct label. [Influence functions](http://proceedings.mlr.press/v70/koh17a/koh17a.pdf), a statistical tool from the 1980s, were adapted recently to work with today's non-convex, high-dimensional, sometimes non-differentiable models (e.g., neural networks), as covered in a [past newsletter](http://mailchi.mp/fastforwardlabs/interpretability-through-influence-functions-google-glass-enterprise-and-robotic-soccer).

3 - Additionally, the neural network is a black box because we lack deep theoretical understanding on how (deep) neural networks work. Basic questions about the design principles of deep neural nets, optimal architecture, the number of required layers, sample complexity (i.e., the required number of training samples to learn a function), and the best optimization algorithms are left unanswered. We use neural networks because they work so well, but we do not (fully) know why.

### Forgetting, not learning, may be key

As it turns out, neural networks may work so well *not* because they are good at learning, but because they are good at forgetting. Naftali Tishby, a computer scientist and neuroscientist, and colleagues apply the [Information Bottleneck principle](https://arxiv.org/abs/1503.02406) to deep learning. The Information Bottleneck principle formulates the goal of deep learning as an information theoretic tradeoff between compression and prediction. The goal of deep learning, or any [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) problem, is to find a maximally compressed mapping of the input variable (e.g., images of dogs) that preserves as much as possible the information on the output variable (e.g., the label 'dog').

Each layer of a neural network, given this formulation, can be quantified by the amount of information it retains about the input variable, the desired (true) output variable, and the predicted output variables. We can examine the efficiency of internal representations of the network's hidden layers and derive information theoretic limits for the compression/prediction problem. Tishby and colleagues argue their insights can inform optimal neural network architecture, number of layers, and connections at each layer. For now, in a [paper recently published](https://arxiv.org/abs/1703.00810), they give insight into the dynamics of [stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent), one of the most popular neural network optimization methods.

Tishby and colleagues demonstrate that during neural network training, the majority of time is *not* spent on fitting the training labels (i.e., learning) but compression of the input to efficient representations (i.e., forgetting). They furthermore show that the layers of converged (i.e., fully trained) neural networks lie on or very close to the Information Bottleneck (IB) theoretical bound. Finally, we may have an explanation for the success of neural networks. 

We may also have a framework for developing a new family of optimization methods for neural network training. Jeff Hinton, a deep neural network pioneer, recently [turned on backpropagation](https://www.axios.com/ai-pioneer-advocates-starting-over-2485537027.html), an efficient method for computing gradients that are used by optimization methods such as stochastic gradient descent. We may need to look for alternatives; the Information Bottleneck principle suggests a path forward.

Should practitioners care? 

Yes.

Regulators worry about the black-box nature of neural networks. The Information Bottleneck principle applied to neural networks helps explain the internal dynamics of neural networks and can alleviate regulatory concerns. Furthermore, a theory guided approach to neural network model development may remove the need for lengthy, time-consuming experimentation during development. 

---

## Model vs. Anti-model

We build models for many reasons: to predict what might happen; to develop, explore, or demonstrate an understanding of (natural) phenomena; to imagine objects and worlds that may or may not (yet) exist; and to create simulacra of worlds and objects over which we can exert a form of mastery. Physical models, typically built to understand the consequences of interventions in complex physical systems, can inform [our approach to machine learning](http://blog.fastforwardlabs.com/2017/06/30/Places-Journal-Mississippi-Basin.html); there are synergies. The human endeavor of model building is the topic of an exhibition [_A Working Model of the World_](https://events.newschool.edu/event/a_working_model_of_the_world_-_exhibition#.WcU8MoyPKUk), recently opened at [The Parsons School of Design](https://www.newschool.edu/parsons/sheila-c-johnson-design-center/) and curated by Dr. Lizzie Muller and Holly Williams.

![](/images/2017/09/orrery-1506608187652.jpg)

The models in the exhibit engage with the concept of _scale_. Miniatures concentrate attention to details and orreries make the rhythmic pattern of planetary oscillations around the solar system "graspable," both literally and figuratively. Machine learning models are built on scale, too. They use "big data" to train a 'model' of a phenomena. Once trained,the model is used to predict subsequent events. The model is evaluated based on how well it makes predictions against the testing data held back from the training data set. Using a model to make predictions is one of the main ways we know that we understand something, or that our model is valid. Muller and Williams point to the 'standard model' of particle physics predicting the eventual [discovery](http://press.cern/press-releases/2014/07/results-cern-presented-ichep) of the [Higgs boson](https://www.scientificamerican.com/article/what-exactly-is-the-higgs/) to illustrate this. 

But is it possible that our machine learning models are somehow 'anti-models,' capable of making predictions, but operating with such complexity that those who use them cannot understand how they work? This is a real and present risk that should concern us all, and at its crux lies the question of what models are _for_. Are they for predicting, or for understanding? We've shown that deep neural nets can make valid predictions of movements in the stock market or the presence of cancerous cells in an image, but these predictions don't provide any deeper understanding of the market, or of cancer. Is this a break from the causal models that we've long relied on, in which understanding and predicting were tightly coupled? If so, how problematic is this, and what can be done about it?

Relying on predictions without having a causal understanding is not necessarily new; auguries and oracles once made predictions for us without requiring a causal theory. On the other hand, given the potential for harm some algorithms represent, we should not be too eager to forgo understanding for the sake of predictive accuracy. We can, of course, incorporate [interpretability](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html) into our models; we can make them less like Muller and Williams' anti-models by offering insight into their inner workings.

---

## "Hello to Horse": RNNs Breaking Free In Creative Ways

We've written before about [some of the cool things happening](http://mailchi.mp/fastforwardlabs/ffl-client-newsletter-spaces-win-facebook-follow-up-and-the-future-of-work-as-ai-buzzes-do-not-neglect-the-foundations-ai-makes-music?e=014a1e57ef) with Recurring Neural Networks (RNNs) in music, but [Taryn Southern](http://tarynsouthern.com/), a talented YouTube artist known for her cover songs and parodies, is creating [the world's first AI-inspired album](https://www.forbes.com/sites/danschawbel/2017/09/26/taryn-southern-how-this-youtube-star-used-ai-for-her-new-album/#e56f5aaf31d0), *I AM AI*, almost entirely [written and produced by AI applications](http://bigthink.com/robby-berman/the-first-track-of-the-first-album-composed-and-produced-by-ai). Southern recently released [a music video](https://www.youtube.com/watch?v=XUs6CznN8pw&feature=youtu.be) of the first track from the album, a song called [Break Free](https://open.spotify.com/album/67n5cmyHInvqSapPtKV4jh), which (appropriately) incorporates special effects generated by Google's [Deep Dream](https://deepdreamgenerator.com/).

But music isn't the only art form where RNNs have been at play this summer: the predictive text keyboard at [Botnik](http://apps.botnik.org/) recently generated [an epic (imaginary) Seinfeld script](https://twitter.com/jamieabrew/status/910699116266643456).  One line from the stage directions reads: *"George is wearing a $20 hat that says, "Hello to Horse."*  We're not sure why the neural network thought it was important to include the price, but the concept gained such a fan base on Twitter that you can now actually [buy a hat](https://shop.botnik.org/) that says "Hello to Horse" for (you guessed it) $20.00.  (We would wear it!)

![](/images/2017/09/Hello_To_Horse_Hat-1506610604444.jpg)

---

## Jobs, Jobs, Jobs

Here are a few jobs we've heard about recently:

* **Crisis Text Line** - Machine Learning Data Scientist ([job description](https://crisistextline.workable.com/j/6B5C231A62))
* **MLB Advanced Media** - Sr. Data Scientist, Baseball Data ([job description](http://www.mlb.com/careers/mlbam/?gh_jid=847255))
* **MLB Advanced Media** - Data Scientist, Data & Analytics ([job description](http://www.mlb.com/careers/mlbam/?gh_jid=857453))
* **Tucows** - Data Scientist: Analytics & Insights ([job description](http://www.tucows.com/careers/?p=job%2FoF105fwv))

We're always happy to share opportunities we hear about; please let us know if you have any you'd like for us to pass along.

---

## FFL Updates

We will be out and about at some upcoming conferences:
* 10/4 - 10/6 - Hilary - [Grace Hopper](https://ghc.anitaborg.org/) (attending)
* 10/19 - Friederike - [AEC Technology Symposium](https://www.eventbrite.com/e/2017-aec-technology-symposium-and-hackathon-tickets-34830026547) (speaking)
* 10/25 - Hilary - [Machine Learning and the Market for Intelligence](http://www.marketforintelligence.com/) (speaking)

Be sure to say hello if you're attending!

And as always, thank you for reading.  We'd love to hear your thoughts! You can reach us anytime at subscribers@fastforwardlabs.com. 

-- The Cloudera Fast Forward Labs Team
