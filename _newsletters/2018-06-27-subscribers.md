---
layout: newsletter
slug: 2018-06-27-client
---

Hello!  In this week's newsletter, we cover a fun project involving neural reinterpretations of movie trailers, and sequence labeling with semi-supervised multi-task learning.  

Speaking of multi-task learning -  we hope you'll join us for our upcoming [webinar](https://info.cloudera.com/LP=2027?utm_medium=website&utm_source=organicweb&utm_campaign=lfym&src=blog&cid=70134000001Svft&utm_content=FFL08_Multitask%20Learning_AMER_Webinar_2018-06-20) on Wednesday, July 11th about multi-task learning.  And be sure to check out our latest blogpost on this topic as well: [Supercharging Classification - The Value of Multi-task Learning](http://blog.fastforwardlabs.com/2018/06/26/supercharging-classification-the-value-of-multitask-learning.html).

---

## Sequence labeling with semi-supervised multi-task learning

Sequence labeling tasks attempt to assign a categorical label to each member in
the sequence. In natural language processing, where a sequence generally refers
to a sentence, examples of sequence labeling include named entity
recognition (NER), part-of-speech tagging (POS) and error detection. NER, as the
name implies, tries to recognize names in a sentence and classify them into
pre-defined labels such as *Person* and *Organization*. POS tagging assigns labels
such as *noun*, *verb*, and *adjective* to each word, while error detection identifies
grammatical errors in sentences. In many of these tasks, the relevant labels in
the dataset are very sparse and most of the words contribute very little to the
training process. But why let the data go to waste? 

[A recent
paper](https://arxiv.org/abs/1704.07156) proposes using multitask learning to
make more use of the available data. In addition to assigning labels to each
token (or words, loosely), the authors propose a model that also predicts the
surrounding words in the dataset. By adding the secondary unsupervised
objective, "_the model is required to learn more general patterns of semantic and
syntactic composition, which can be reused in order to predict individual labels
more accurately_".

For the sequence modeling neural network, the authors take one
sentence as input and use a bidirectional Long Short Term Memory network (LSTM) to assign a label to every token in the
sentence. Each sentence is first tokenized and the resulting tokens are mapped into a
sequence of word embeddings before being fed into the LSTM. Two LSTM components,
moving in opposite directions (forward and backward) through the sentence, are
then used for constructing context-dependent representations for every word. The
hidden representations from both LSTMs are concatenated in order to obtain a
context-specific representation for each word. This concatenated representation
is passed through a feed-forward layer, allowing the model to learn features
based on both context directions. To predict a label for each token, the authors
use either a softmax or conditional random field (CRF) output
architecture. Softmax predicts each label independently. CRF, on the other hand,
handles dependencies between subsequent labels by looking for the best label
sequence.

To predict the surrounding words, the authors cannot use the concatenated
(forward and backward) representation because it contains information on both
the previous word and next word. Instead, they use the pre-concatenated
version. The hidden representation from the forward-moving LSTM is used to
predict the next word; the hidden representation from the backward-moving LSTM
is used to predict the previous word.

![Architecture of the sequence labeling model with secondary task of predicting surrounding words. The input tokens are shown at the bottom; the expected output labels are at the top.]({{ site.github.url }}/images/2018/06/Screen_Shot_2018_06_14_at_4_27_13_PM-1529008110241.png)

The architecture was evaluated on a range of datasets, covering the tasks of
error detection, named entity recognition, chunking, and POS-tagging. Introducing
a secondary task resulted in consistent performance improvements on every
benchmark. The largest benefit was observed on the task of error detection -
perhaps due to the very sparse and unbalanced label distribution in the dataset. 

---

## Neural reinterpretations of movie trailers

In his latest project, artist and coder Mario Klingemann uses a neural network to match archival movie footage with the content of recent movie trailers. He regularly posts the resulting “neural reinterpretations” on [his Twitter](https://twitter.com/quasimondo). The results are technically impressive. They’re also a fascinating view into how to explore the creative possibilities of a machine learning technique.

Looking through Klingemann’s tweets you can trace his explorations:

![A screenshot from Klingemann's video of similar scene classification. A 3x3 grid shows several similar looking scenes. Some have planes, others are mostly blank, some have spare drawings of squares.]({{ site.github.url}}/images/editor_uploads/2018-06-26-144731-Screen_Shot_2018_06_25_at_10_45_15_AM.png)

##### Mario Klingemann's neural scene classifier grouping scenes it finds similar.

- Early in the explorations he posted [clusters of similar frames and clips in a 3x3 grid](https://twitter.com/quasimondo/status/1006485457713197056).
- He then experiments with compilations, like [scenes of water flowing (and other scenes the model thinks look similar to water)](https://twitter.com/quasimondo/status/1006570368751099904).
- Then he adds an element of interactivity, using [his webcam as the source against which to match the archival footage](https://twitter.com/quasimondo/status/1006835734223970304).
- He tries using the matches to create [new reaction gifs](https://twitter.com/quasimondo/status/1006996750429761536).

![On the left is a shot of Brad Pitt from Fight Club; on the right is a man holding a telephone with a similar expression from the archive footage.]({{ site.github.url}}/images/editor_uploads/2018-06-26-144942-Screen_Shot_2018_06_25_at_10_46_42_AM.png)

##### A neural reinterpretation of the Fight Club trailer, with the original footage on the left and the matched on the right.

- Then he moves into the trailer reinterpretations, with both stand-alone reinterpreted versions ([Fight Club](https://twitter.com/quasimondo/status/1010189455997784065)) and side-by-side versions ([Fight Club side-by-side](https://twitter.com/quasimondo/status/1010191619042238465)).
- He does [another version of the Fight Club trailer](https://twitter.com/quasimondo/status/1010983581475360768) using a tool that allows him to select from several algorithm-supplied suggestions: 

The movie trailer reinterpretations are a great showcase for the technique for a couple of reasons:

1. Trailers are made up of short clips. This gives the algorithm lots of shots at finding interesting matches (every cut is a new example). If it was instead focused on a 2 minute long continuous scene, you wouldn’t get to see nearly as many matches. Also the fact that the cuts are often timed to the music makes the reinterpreted content appear more connected to the audio of the trailer.

2. Films have a built up vocabulary of what different shots mean, like a close-up of a face to signal intense feelings. Film-makers employ these patterns consciously. As film watchers, we may not think about scene types explicitly, but we do build up associations and expectations with different framing, movements, and styles. The side-by-side reinterpretations make this referential language more visible by showing us two examples at a time, helping us notice the similarity the machine has identified. We can then often extrapolate even further into “ah, right, that’s another one of those 'vehicles rushing by' shots” that you normally don’t consciously note. This takes the trailers from technical demos into artistic territory.

![A screenshot of the video by Memo Atken. On the left is a blanket being scrunched up by hands; on the right is an image that looks like a painting of waves, where the shape of the waves matches the position of the hands and blanket.]({{ site.github.url}}/images/editor_uploads/2018-06-26-145050-Screen_Shot_2018_06_25_at_10_47_09_AM.png)

##### A still from "Learning to see: Gloomy Sunday" by Memo Atken

["Learning to see: Gloomy Sunday"](https://vimeo.com/260612034) by Memo Akten explores similarity in a different, fascinating way. He has a model trained on specific types of art that interpret his webcam photos and generate new images: for example, a sheet becomes waves. Like in the trailer reinterpretations, what takes this beyond technical demo is how suggestive the association can be. The machine's ability to identify similarity between a sheet and a wave gives us an understanding that we can then apply outside of the context of the video. It’s a suggestive analogy that opens out so that the viewer can build upon it and make their own connections.

---

## CFFL Updates

* Mike will be speaking on probabilistic programming at [QCon](https://qconnewyork.com/ny2018/presentation/modern-cs-presentation-1) in New York on Thursday this week.

* Friederike will be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on Friday, June 29th, and also participating in a panel at [Curious2018](https://curious2018.com/) in Darmstadt, Germany on July 17th.

And, as we mentioned earlier, we do hope you'll join us on Wednesday, July 11th for [our webinar](https://info.cloudera.com/LP=2027?utm_medium=website&utm_source=organicweb&utm_campaign=lfym&src=blog&cid=70134000001Svft&utm_content=FFL08_Multitask%20Learning_AMER_Webinar_2018-06-20): on multi-task learning!


As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime!

All the best,

The Cloudera Fast Forward Labs Team
