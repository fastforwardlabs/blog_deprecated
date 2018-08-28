---
layout: newsletter
slug: 2018-08-29-subscribers
---

Hello!  In this week's newsletter, Seth discusses the significance of the OpenAI Five, and Ryan takes a look at the potential of machine learning for patents.

---
## Machines learn to play DotA, and a win for recurrent neural networks

_by [Seth](https://twitter.com/shendrickson16)_

Two years and five months after the computer program AlphaGo [triumphed
over Lee Sedol](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol) in the [game of Go](https://en.wikipedia.org/wiki/Go_(game)), algorithms are at it again. This time, they're taking
on an even more ambitious task: the five on five game of Defense of the Ancients (DotA) 2.

In this setting, a team of five algorithmically controlled bots, dubbed the [OpenAI Five](https://openai.com/five/),
are deployed against a team of five expert-level humans in a skirmish where the goal is 
to destroy the other team's "Ancient," a large structure located in the opposing team's base.

A team of researchers at the non-profit [OpenAI](https://openai.com/about/) have used deep reinforcement learning (RL) (the
same technology behind [AlphaGo](https://en.wikipedia.org/wiki/AlphaGo) and [AlphaGo Zero](https://en.wikipedia.org/wiki/AlphaGo_Zero)) to create a team of bots controlled by
deep neural networks that are capable of beating some of the world's best DotA teams. DotA
poses interesting challenges that are not present in other RL domains like Go, which has led
many, including OpenAI's own researchers, to be skeptical of OpenAI Five's chances. However,
earlier this month, OpenAI five [won two out of three matches](https://blog.openai.com/openai-five-benchmark-results/) against a team of 
professional DotA players in the 99.95th percentile of all DotA players. Most recently, 
OpenAI Five competed at the international DotA 2 championships, where it lost both of its
games against fully professional DotA 2 teams. Despite the outcomes, the matches were still
highly competitive in games where the rules were different, in non-trivial ways, than they
had been for previous OpenAI Five matches. These most recent matches were also played against
better teams than the algorithm had faced before.

![](images/openai_competition.svg)

##### OpenAI Five competition ratings. Image credit: [OpenAI](https://blog.openai.com/the-international-2018-results/).

While DotA may not be "conquered" by machines just yet, it is more a matter of when, not if. 

Unless
you're an expert in reinforcement learning, DotA, or both, it's probably not very obvious how
significant these results are. Let's take a further look at what we should be excited about,
and what we still struggle with in this field.

### What's different in OpenAI Five

It might be tempting to think that the success of algorithms at DotA is just an incremental
or lateral move from Go, but the game of DotA introduces several new challenges that do not
exist in Go. The [exceptional write-up](https://blog.openai.com/openai-five/) on the OpenAI blog enumerates these in great 
detail, but two are worth highlighting here.

_First, there is an element of teamwork between the bots._ This means that when the algorithms
are learning to play the game, they must learn behavior that trades off their individual
rewards with those of the team. In fact, there is no explicit communication between the bots
in OpenAI five, but each bot has access to its teammates' reward functions and can learn to
take actions that benefit itself, the team, or a combination thereof. In the observed matches,
the high level of teamwork displayed by the bots has been one of the most striking realizations.
This is summed up nicely in a series of tweets by AI researcher and amateur DotA player Stephen Merity 
[here](https://twitter.com/Smerity/status/1011340815682056192).

_Second, games of DotA deal with much longer time horizons than that of Chess or Go._ When these
bots are learning to play the game, they must learn what actions to take at each moment in time
based on how those actions will increase their future rewards. But the rewards for each individual
action may not materialize until much, much later in the game, at which point the algorithm must
find a way to figure out which action(s) led to the current reward. OpenAI uses [long short-term
memory (LSTM)](https://en.wikipedia.org/wiki/Long_short-term_memory) neural networks to solve this problem. LSTMs, a type of recurrent neural network,
are specifically designed to retain information over the long-term, making them well-suited for 
this type of problem. However, LSTMs have [caught some flak recently](http://bair.berkeley.edu/blog/2018/08/06/recurrent/) for being outperformed by 
feedforward and convolutional neural networks, which are also usually much faster to train. 
Chalk this up as a win for recurrent networks!

### What's still the same

There have been some unambiguous successes from the results of OpenAI Five, but many of the [caveats
from AlphaGo's win](https://blog.fastforwardlabs.com/2017/10/25/alphago-zero.html) still exist. First, DotA is still just a computer game and it's not clear how well
these results will generalize to more important problems. Second, reinforcement learning has generally
only been succesful in highly restrictive settings, where there is access to a perfect simulation environment and
the episodes (e.g. single games) are short and have clear outcomes. The DotA setting only differs
in that the games are longer than many previous RL applications. Access to a perfect simulator is
usually a requirement because of the vast amount of data needed for RL algorithms to learn. OpenAI
Five is still horribly inefficient - it trains on 180 _years_ of games against
itself every single day, and distributes computation across 256 GPUs and 128,000 CPU cores. All of this is to say that
reinforcement learning can still only be applied to a narrow subset of problems and still retain reasonable
expectations of success.

---
## Patent Law Products on the Horizon

_by [Ryan](https://twitter.com/jqpubliq)_

At Cloudera Fast Forward Labs, we keep an eye out for new developments in algorithms, data, and business. Of course, building excellent data products requires sufficient data, well-selected algorithms, and a well-defined business use case. Intellectual property presents a clear set of business use cases (we'll discuss prior art searching and automated patent drafting), recently available high-quality data sets, and algorithms that are sufficiently mature and maturing still.

Andy Oram recently [reviewed](https://lwn.net/Articles/761931/) a [talk](https://conferences.oreilly.com/oscon/oscon-or-2018/public/schedule/detail/67104) given by patent attorney [Van Lindberg](https://www.dykema.com/professionals-van-lindberg.html) on the contributions and potential of machine learning in the patent field. As a computer scientist and former patent litigator, this topic is near and dear to my heart.

Lindberg's talk covered a lot of territory, including some far-future speculation (which we *love*), but two areas stood out as immediately ready for improvement: prior art searching and automated patent drafting.

Prior art searching is the hunt for scientific articles and papers, and other patents and patent applications that may be used to invalidate an existing patent (or help evaluate the likely success of a potential patent application). Prior art searching is a laborious and expensive process that can take weeks or months to turn up useful results, and the best results may not even be useful. I could not agree more with Oram and Lindberg that prior art searching is ripe for an update. With new, high-quality patent data from the US Patent and Trademark Office, from other global patent offices, and from collators (including Google), new NLP algorithms and clustering algorithms are ready to accelerate speed and improve results of prior art searches. This is a boon for patent defendants (or would-be defendants) because it helps invalidate patents that have been or may be asserted against them. But it's also helpful for potential patent applicants who need to know what else is out there that may affect the validity of their potential applications. Clarifying the patent landscape can only improve efficiency of the patent system.

Perhaps a bit farther from realization than prior art searching, automated patent generation is nonetheless getting closer to assisting patent attorneys as they draft patent applications. Our [first report](https://www.fastforwardlabs.com/research/FF01) on natural lanuage generation discussed similar use cases. Much of the work of drafting a patent application is boilerplate, and machines could be taught to handle a lot of that work. Patent applications follow a well-defined structure, especially the claims. NLG could at least provide an outline or starting text for an attorney to use as a starting point, or as a suggestion to consider when drafting an application.

Law firms are notoriously slow to adopt new technology. This may delay the advancement of these data products. But I posit that law firms will be unable to resist when outside vendors can offer lower-cost solutions with higher speed and improved accuracy.

---

## CFFL Updates

* Shioulin will be speaking on [Semantic Recommendations](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/69260) at the Strata Data Conference in NYC on September 12th, and Friederike will be [speaking at Strata](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/69365) on September 12th as well.

* Hilary will be keynoting at [Strata](https://conferences.oreilly.com/strata/strata-ny) on Thursday, September 13th.

* Save the date!  Friederike will be presenting an interactive webinar on multi-task learning for individual subscribers at 1:00pm ET on Friday, September 14th.  Details to come.  :)

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on September 27th (also here in NYC).

* Shioulin will be speaking at [ODSC Europe](https://odsc.com/london) in London in mid-September.

As always - thank you for reading!  We welcome your thoughts, questions, and suggestions; please reach out to us anytime at cffl@cloudera.com.

All the best,

The Cloudera Fast Forward Labs Team
