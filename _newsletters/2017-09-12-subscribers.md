---
layout: newsletter
slug: 2017-09-12-subscribers
---

Hello!

We announced last week that Fast Forward Labs has merged with [Cloudera](http://blog.fastforwardlabs.com/2017/09/07/to-the-future.html)! By merging with Cloudera, we will be able to bring the opportunities discovered in our research to life in new ways, at the scale of the Cloudera platform.

We will continue our business under the new and not-so-different brand Cloudera Fast Forward Labs. We will still publish our research, build prototypes, run workshops, and do exploratory machine learning feasibility studies. The entire Fast Forward Labs team is joining Cloudera, we will continue to be based out of our Brooklyn office, and you’ll see the same familiar faces. Additionally, you can be sure that we’ll maintain our editorial independence and focus on the best technical decisions for you.

Like the nerd best friends we will continue to be, we will keep sending you our newsletter. This week, we cover the threat and promise of adversarial samples, the artificial intelligence prizefight that erupted over the summer, and autocomplete for drawing.

Looking forward to the future!

---

##### Accidental steganography: adversarial samples

Adversarial samples are inputs designed to fool a model: they are inputs created by applying perturbations to examples inputs in the dataset such that the perturbed inputs result in the model outputting an *incorrect* answer with *high* confidence. Often, perturbations are so small that they are imperceptible to the human eye — they are inconspicuous.

Adversarial samples are a concern in a world where algorithms make decisions that affect lives: imagine an imperceptibly altered stop sign that the otherwise high-accuracy image recongnition algorithm of a self-driving car misclassifies as [a toilet](https://arxiv.org/abs/1707.03501). Curiously and concerningly, the same adversarial example is often misclassified by a variety of classifiers with different architectures trained on different subsets of data. Attackers can use their own model to generate adversarial samples to fool models they did not build.

![]({{ site.github.url }}/images/2017/09/Screen_Shot_2017_09_13_at_9-1505322932035.59)

##### Accessorize to a crime ([paper](http://dl.acm.org/citation.cfm?doid=2976749.2978392)), a pair of (physical) eyeglasses to fool facial recognition systems. Impersonators carrying out the attack are shown in the top row and corresponding impersonation targets in the bottom row. 

But adversarial samples are useful, too. They inform us about the inner workings of models by giving us an inuition for what aspects of model input matter for model output (cf. [influence functions](http://proceedings.mlr.press/v70/koh17a.html)). In case of adversarial examples, aspects of model input matter for model output that should *not* matter. Adversarial samples can help expose weaknesses of models. Combined with fast and efficient methods for generation of adversarial examples, such as the [Fast Sign](https://arxiv.org/abs/1412.6572), [Iterative](https://arxiv.org/abs/1607.02533), and [L-BFGS method](https://arxiv.org/abs/1312.6199), adversarial samples can help train neural networks to be [less vulnerable to adversarial attack](https://arxiv.org/abs/1412.6572). 

![](/images/2017/09/Screen_Shot_2017_09_13_at_10-1505322973486.02)

##### The model is fooled by the (distractor) sentence (in blue) ([paper](https://arxiv.org/abs/1707.07328)). 

Adversarial samples will inform the direction of research within the community. Adversarial samples are a consequence of [models being too linear](https://arxiv.org/abs/1412.6572). Linear models are easier to optimize but they lack the capacity to resist adversarial perturbation. Ease of optimization has come at the cost of models that are easily misled. This motivates the development of optimization procedures that are able to train models whose behavior is more locally stable.

![](/images/2017/09/Screen_Shot_2017_09_13_at_10-1505323059576.04)

##### Self-driving cars analyze images from varying distances and viewpoints. A recent [paper](https://arxiv.org/abs/1707.03501) shows that current methods for generation of adversarial samples generate samples that only fool models at certain distances and from certain viewing angels. Or maybe not ... that claim is [already being challenged](https://blog.openai.com/robust-adversarial-inputs/).

---

## Futurism and Artificial Intelligence

For some, [Mayweather-McGregor](http://www.espn.com/boxing/story/_/id/20607363/floyd-mayweather-conor-mcgregor-live-gate-generates-554-million) was the prizefight of the summer. For others, it has been Musk-Zuckerberg going toe-to-toe over the risks posed by AI, with Musk voicing his [reservations](https://www.vanityfair.com/news/2017/03/elon-musk-billion-dollar-crusade-to-stop-ai-space-x) about artificial intelligence while Zuck remains more [sanguine](https://www.cnbc.com/2017/07/24/mark-zuckerberg-elon-musks-doomsday-ai-predictions-are-irresponsible.html). Musk has called AI possibly the "biggest threat" to humanity and gone so far as to suggest the decidedly un-Cathollic opinion that Silicon Valley should be welcoming regulatory oversight of AI in this one exceptional instance. Some have responded to Musk's statements by accusing him of having watched Terminator a few times too many while others have taken his statements as license to trumpet their own dire warnings about the threat of AI or [report](http://www.information-age.com/demand-new-legislaai-experts-warning-123468393/) gleefully over the blow-by-blow. 

Unsurprisingly, many of those who have chimed in about the debate have turned to sci-fi for guidance in thinking through the dangers of AI. Rodney Brooks [cites](http://rodneybrooks.com/the-seven-deadly-sins-of-predicting-the-future-of-ai/) Arthur C. Clarke's Adages of Futurism while [Oren Etzioni](https://www.nytimes.com/2017/09/01/opinion/artificial-intelligence-regulations-rules.html) name-checks Asimov's Laws of Robotics before suggesting his own Laws of AI. These are useful, and insightful, approaches to futurism in general, and there are good reasons why we still talk about Clarke and Asimov - their insights remain evergreen. We are hesitant, however, to see warnings about AI, particularly Musk's, as solely prescient warnings about the dangers he perceives. We are also a bit hesitant to describe anyone as playing 11-dimensional chess, but there may be more than meets the eye to Musk's warnings. Consider three possible ulterior motives for sounding the alarm on AI as Musk has:  

One - it's great marketing. Marketing on fear, uncertainty, and doubt ([FUD](https://www.entrepreneurship.org/articles/2000/10/the-fud-factor-how-to-persuade-customers-to-buy)) is not new, and deploying these emotions around AI is a great way to drive consumers away from competitors, or at the very least towards your own AI research (...cough... [OpenAI](https://openai.com/)).

Two - it sets a seat at the table. By calling for regulation of AI now, Musk is positioning himself as someone who has a healthy skepticism of AI, and who can therefore be trusted when he declares regulations to be effective safeguards against the risks he perceives. What better way to be able to shape regulations that go exactly as far as he might want (and no further)?

Three - it's great recruiting. Competition for talented AI researchers and engineers is fierce. This is known. But by calling out the risks of AI as forcefully as he has, Musk  may be making a subtle appeal to top-notch researchers who may be on the fence about joining the ranks of larger engineering teams, or vacillating about leaving academia, by signaling the opportunity to work on solving (what seem like) existential challenges for humanity. Not a bad recruiting poster.

![](/images/2017/09/star_trek_chess-1505156456055.jpg)

So what can we take away from thinking about these possible ulterior motives for the recent spate of dire (if premature and exaggerated) warnings about the risks of AI? One takeaway is a recognition that there *are* real risks to humans from ML and AI. Building systems that are [interpretable](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html), that consider aspects of [fairness and accountability](http://www.fatml.org/), and that recognize the potential for harm that today's algorithms possess is not just responsible - its good design. Building trustworthy systems is also good recruiting and good marketing. Another takeaway is that we should all feel empowered to articulate our own "Laws of Robotics", "Adages of Futurism", or "Laws of AI". This may sound like another principle of sound design (and it is), but it is also a way of thinking through potential risks, as well as opportunities for countering those risks, in ways that are specific to the context of the product being built, or the problem being solved.

What "Laws of AI" or "Adages of ML" would you put on your list? No need to limit the list to three... [let us know](mailto:subscribers@fastforwardlabs.com) yours and we'll do our best to compile them for everyone to see. 

---

## Draw with a neural net: Sketch-RNN

Time for a doodle? Doodle with an [RNN](https://magenta.tensorflow.org/sketch-rnn-demo). This neural network was trained on millions of doodles collected from the [Quick, Draw! game](https://quickdraw.withgoogle.com/data/). Once you start drawing, the rnn will suggest possible ways to continue drawing based on where you left off ... 

![]({{ site.github.url }}/images/2017/09/sketch_garden-1505323857488.gif)

---

## FFL Updates

We're giving talks at some upcoming conferences:
- [Nexterday North 2017](http://www.businesswire.com/news/home/20170824005127/en/Nexterday-North-2017-Re-Invents-Core-Digital-Communications): September 20 **(Helsinki, Hilary)**
- [Bloomberg Data For Good Exchange](https://www.bloomberg.com/company/d4gx/): September 24 **(New York, Friederike)**
- [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ny): September 28 **(New York, Hilary)**
- [Grace Hopper Celebration](https://ghc.anitaborg.org/): October 4-6 **(Orlando, Hilary)**
- [AEC Technology Symposium](http://core.thorntontomasetti.com/aec-tech-symposium/): October 19-21 **(New York, Friederike)**

Thank you for reading.  We'd love to hear your thoughts! You can reach us anytime at [subscribers@fastforwardlabs.com](mailto:subscribers@fastforwardlabs.com). 

— The Fast Forward Labs Team
