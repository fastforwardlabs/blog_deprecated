---
layout: newsletter
slug: 2017-10-11-subscribers
---

Hello!

Google is shifting from a mobile-first to an [AI-first strategy](https://www.youtube.com/watch?v=5WRJYEA-mwY), an (unsurprising) announcement from last week's [Google Hardware event](https://www.youtube.com/watch?time_continue=2&v=0YGoxbeSzLc). Computer vision empowers Google Maps to help you find [parking](https://www.theverge.com/2017/8/29/16219704/google-maps-parking-find-lots-garages-update-android), the neural network for generating raw audio [*WaveNet*](https://deepmind.com/blog/wavenet-launches-google-assistant/) gives Google Assistant a voice, and Google has opened a new research facility [in Canada](https://deepmind.com/blog/strengthening-our-commitment-canadian-research/). Meanwhile, Google DeepMind is quietly hiring renowned neuroscientists. In this newsletter, we explain why.

As Google unveils its old-new strategy, US Americans express more worry than enthusiasm about new technologies. 76% of US Americans expect that economic inequality will become much worse if robots and computers are able to perform many of the jobs that are currently done by humans, according to a recent [study](http://www.pewinternet.org/2017/10/04/automation-in-everyday-life/) by the Pew Research Center. 

![]({{ site.github.url }}/images/2017/10/PI_2017-1507552898520.10)

##### Who will use the shiny new tool?

As Google CEO Sundar Pichai was being interviewed by The Verge on "[The Biggest Ethical Concerns for AI today](https://www.theverge.com/2017/10/4/16405174/ceo-sundar-pichai-interview-google-ai-artificial-intelligence-interface)," [Google's algorithms were promoting misinformation about the Las Vegas shooting](https://twitter.com/broderick/status/914807674025512961). Algorithms are not only embedded in, but shape social reality. In the 2nd part of this newsletter, we look at how legal practice effects AI.

Before you dive in, a word to the wise: we got a little carried away. This newsletter is longer than usual, but well worth it (if we may say so ourselves).

---

## Neuroscience-inspired AI
Pioneers in artificial intelligence (AI) have worked across multiple related fields, including computer science, AI, neuroscience, and psychology - but as each of these areas of research have grown in complexity and disciplinary boundaries have solidified, collaboration has become less commonplace. In [*Neuroscience-Inspired Artificial Intelligence*](https://www.ncbi.nlm.nih.gov/pubmed/28728020), the co-founder of Google DeepMind [Demis Hassabis](https://en.wikipedia.org/wiki/Demis_Hassabis), alongside other renowned neuroscientists, argues to revive collaborative efforts.

The (human) brain is a living case-in-point that human-level general AI is possible, but building it is a daunting task. The search space is vast and sparsely populated; biological intelligence provides a guide. Neuroscience can validate AI techniques that exist already: if known algorithms are found to be implemented in the brain, they are likely an integral component of general intelligence systems. 

Neuroscience also provides a rich source of inspiration for new types of algorithms and architectures; a set of recent papers ([Stachenfeld et al.](https://deepmind.com/blog/hippocampus-predictive-map/), [Constantinescou at al.](https://www.ncbi.nlm.nih.gov/pubmed/27313047)) suggests there are types of data representations sufficiently flexible and abstract as to support the remarkable human capacity of generalizing experiences to novel situations — a tough nut many AI researchers are looking to crack (i.e., [transfer](https://en.wikipedia.org/wiki/Transfer_learning) / [one-](https://en.wikipedia.org/wiki/One-shot_learning) or [zero-shot](https://www.quora.com/What-is-zero-shot-learning) learning) — and that a mechanism for constructing these (abstract) representations from sensory experience exists.

### A Nobel-prized story of the hippocampus
It's Nobel season, and in 2014, Edvard and May-Britt Moser, alongside John O'Keefe, were [awarded](https://www.nobelprize.org/nobel_prizes/medicine/laureates/2014/press.html) the Nobel Prize in Physiology or Medicine for their discovery of a set of cells in the hippocampus (a brain structure deep inside the mammalian brain) thought to help us orient and navigate in space. Drivers of black-cabs in London, required to memorize some 25,000 streets and thousands of landmarks, for example, have a [larger than usual hippocampus](https://www.wired.com/2011/12/london-taxi-driver-memory/); their brains have adapted to the unique demands of their jobs.

Stachenfeld and colleagues show that the hippocampus does more than encode locations in space. Instead, it encodes "[successor representations](https://www.nature.com/articles/s41562-017-0180-8)," information about likely *future* locations given your current location.

### Successor representations in decision making
Think about how you choose your route to work (or the next move in a game of chess or Go). You need to estimate the likely future reward of your decision in order to make a smart decision now. This is tricky, because the number of possible scenarios increases exponentially, the further you peek into the future. [AlphaGo](https://deepmind.com/research/alphago/), the Go playing champ built by Google DeepMind, uses advanced tree search ([Monte Carlo tree search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search)) to simulate the future in order to make smart decisions in the now.

Rats - capable of strategic, reward-maximizing decisions - are unlikely to use such computationally expensive methods. Successor representations offer a computationally less expensive yet flexible mechanism. They are a kind of look-up table that contains information about likely future states (e.g., locations) given the current state (i.e., where you *will* be, given where you are now). Combined with information about (future) reward, successor representations enable reward-maximizing decisions without expensive simulation. They also enable quick adaptation to changes in reward (a novel food source, for example) - while adaptations to changes in space (e.g., a new obstacle) will be slower.

Stachenfeld and colleagues offer empirical evidence for the existence of successor representations in the rat's hippocampus *and* for the existence of a low-dimensional decomposition of successor representations in the [entorhinal cortex](https://en.wikipedia.org/wiki/Entorhinal_cortex) (the main interface between the hippocampus and neocortex). The authors show that these low-dimensional decompositions of the successor representations lend themselves to the discovery of subgoals, a hallmark of efficient planning and *the* foundation for hierarchical, increasingly abstract representations of tasks required for the generalization of knowledge to novel scenarios. 

![]({{ site.github.url }}/images/2017/10/Screen_Shot_2017_10_09_at_9-1507556105313.33)

##### Comparing model predictions (B) to reality (A) (i.e., the firing rates of cells recorded in the hippocampus of a rat). As the rat is trained to run in a preferred direction along a narrow track, initially symmetric place cells (red) begin to skew (blue) predicted in theory (B) and demonstrated in practice (A).

### From rats to humans, from spatial navigation to abstract reasoning
This isn't isolated to rats; humans also use these decompositions of successor representations during strategic planning and decision making, as [Constantinescou and colleagues](https://www.ncbi.nlm.nih.gov/pubmed/27313047) show. What's more, successor representations and their decompositions are used not only during spatial navigation, but also during *abstract* reasoning; abstract reasoning capabilities piggyback on representations evolved for spatial reasoning tasks. 

Taken together, successor representations and their decompositions provide us with a clue as to how the brain computes abstract representations from sensory inputs that allow us (human and non-human animals) to generalize our experiences to novel situations, thus showing that the collaboration between neuroscience, psychology, and AI could be a very fruitful one indeed.

---

## Bias Mitigation Using the Copyright Doctrine of Fair Use

Pirating a copyrighted song, video, or e-book to listen to the song, watch the movie, or read the book is an infringement of copyright (which can be severely fined). So how about pirating a song, video, or e-book to *train* machine learning models?

NYU Teaching and Research Fellow Amanda Levendowski proposes [a legal approach to reducing bias in machine learning models](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3024938). Biased data leads to [biased models](https://arxiv.org/abs/1607.06520), she argues, and use of existing public domain data, most of which is over 70 years old, introduces biases from a time before, e.g., the civil rights movement or the feminist movement of the mid-20th century. The copyright doctrine of *fair use* can reduce bias by allowing wider access to copyrighted training data - an interesting and novel proposal.

![]({{ site.github.url }}/images/2017/10/Screen_Shot_2017_10_10_at_10-1507644713217.11)

##### Word embeddings (numerical representations of language) are biased. While words like "he" vs. "she" or "wife" vs. "husband" are gendered words and should fall on opposite ends on the "gender axis" (x). Words like "brilliant" should not (image taken from [Bolukbasi et al.](https://arxiv.org/pdf/1607.06520.pdf)). 

Fair use is a legal doctrine that operates as a defense to copyright infringement. This century-old exception essentially gives a get-out-of-jail free card to copiers who would otherwise be liable for copyright infringement. Fair use doctrine permits the copying of copyrighted material on the grounds that the type of copying is beneficial to the public and not unreasonably harmful to the copyright holder.

Courts have not yet ruled on fair use in the machine learning context, though it seems likely that they will need to soon. And once courts have ruled on a few such cases, those rulings will set a precedent for subsequent similar situations. If the precedent allows fair use, machine learning researchers will have the freedom to use copyrighted material with little fear of infringement liability.

Levendowski argues: (1) use of copyrighted materials to train machine learning models should be considered fair use and (2) the resulting availability of these copyrighted materials as training data will help mitigate bias in the models trained with that data.

Levendowski steps through each factor in the legal test for fair use and makes good arguments for why machine learning model training should be fair use.  The strongest of these points is that the use is transformative, i.e., it is not used for its primary purpose. For example, a copyrighted music recording was made to be sold and listened to by humans, perhaps over the radio or on a smartphone. Using that same recording to train a model would be a very different use, and one that advances our understanding of music. Courts have held that this weighs in favor of fair use. Also notable is the argument that the copyright owners are not harmed by the use. Using the recording in the example above does not prevent the copyright holder from selling or licensing the recording.

![]({{ site.github.url }}/images/2017/10/1_rUzuHpOqB8q1cRjsl65rmw-1507556618126.jpeg)

##### A neural net model trained on romance novels generates [captions for images](https://medium.com/@samim/generating-stories-about-images-d163ba41e4ed); *fair use* might remove bias, but it surely entertains (we recommend you check out the authors' alternate model trained on Taylor Swift lyrics).

We find Levendowski's fair use analysis persuasive from a legal standpoint, but the benefits, though real, are overstated. Applying fair use may _reduce_ bias, but it would be very unlikely to _fix_ it (as suggested by the title _How Copyright Law Can Fix AI's Implicit Bias Problem_). There's no reason to believe, for example, that a set of recent textbooks would contain any less bias than Wikipedia (data used already during model training). 

Bias has many origins, some rooted in legal and social practices. To reduce bias in machine learning models, we need to change these practices. We hope that the federal courts, which will inevitably be faced with these copyright infringement lawsuits, will consult and heed Levendowski's analysis.

---

## Jobs, Jobs, Jobs

We're hiring!!!
* **Cloudera Fast Forward Labs** is hiring a Research Engineer ([job description](https://cloudera.wd5.myworkdayjobs.com/External_Career/job/USNew-YorkBrooklyn/Research-Engineer_171058)) - and be sure to check out the [other job opportunities](https://www.cloudera.com/careers/careers-listing.html) at Cloudera as well!

Here are a few other jobs we've heard about recently, too:

* **MLB Advanced Media** - Sr. Data Scientist, Baseball Data ([job description](http://www.mlb.com/careers/mlbam/?gh_jid=847255))
* **MLB Advanced Media** - Data Scientist, Data & Analytics ([job description](http://www.mlb.com/careers/mlbam/?gh_jid=857453))
* **Tucows** - Data Scientist: Analytics & Insights ([job description](http://www.tucows.com/careers/?p=job%2FoF105fwv))

We're always happy to share opportunities we hear about; please let us know if you have any you'd like for us to pass along.

---

## Cloudera FFL Updates

We are speaking at a few upcoming conferences this fall:
* 10/19 - Friederike - [AEC Technology Symposium](https://www.eventbrite.com/e/2017-aec-technology-symposium-and-hackathon-tickets-34830026547) (speaking)
* 10/25 - Hilary - [Machine Learning and the Market for Intelligence](http://www.marketforintelligence.com/) (speaking)
* 11/27 -11/30 - Friederike - [PyData 2017](https://pydata.org/nyc2017/) (speaking)

Please look us up, if you're attending!

And as always, thank you for reading.  We'd love to hear your thoughts! You can reach us anytime at subscribers@fastforwardlabs.com. 

-- The Cloudera Fast Forward Labs Team
