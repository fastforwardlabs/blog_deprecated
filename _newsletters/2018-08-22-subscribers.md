---
layout: newsletter
slug: 2018-08-22-subscribers
---

Hello!  In this week's newsletter, Shioulin considers some of the hype around AutoML, and Friederike discusses knowledge distillation for neural networks.

---

## Automated Machine Learning: Hype now, reality later?
_by [Shioulin](https://twitter.com/shioulin_sam)_

[Previously in our newsletter](https://blog.fastforwardlabs.com/newsletters/2017-11-08-subscribers.html), we had framed automated machine learning around four notions:
* Citizen Data Science / ML: Automated machine learning will allow everyone to do data science and ML. It requires no special training or skills.
* Efficient Data Science / ML: Automated machine learning will supercharge your data scientists and ML engineers by making them more efficient.
* Learning to Learn: Automated machine learning will automate architecture and optimization algorithm design(architecture search).
* Transfer Learning: Automated machine learning will allow algorithms to learn new tasks faster by utilizing what they learned from mastering other tasks in the past.

Since then, the term *automated machine learning* has been strongly linked to Google's definition of **AutoML as a way for neural nets to design neural nets**, or - expressed technically - as a way to perform neural architecture search. Google's messaging asserts that AutoML will [make AI work for everyone](https://blog.google/technology/ai/making-ai-work-for-everyone/).  [Google Cloud's AutoML](https://cloud.google.com/automl/) beta products now allow one to custom vision, language and translation models with minimum machine learning skills. The product page states that under the hood, this capability is powered by Google's AutoML and transfer learning. But, [as pointed out by fast.ai](http://www.fast.ai/2018/07/23/auto-ml-3/), transfer learning and neural architecture search are two opposite approaches. Transfer learning assumes that neural net architectures generalize to similar problems (for example, features like corners and lines show up in many different images); neural architecture search assumes that each dataset needs a unique and specialized architecture. In transfer learning, you start with a trained model with an existing architecture and further tune the weights with your data; neural architecture search requires training multiple new architectures along with new weights. In practice, one does not need to use both techniques (yet?)! Transfer learning is currently the predominant approach since neural architecture search is **currently** computationally expensive. We very much agree with [fast.ai's assessment](http://www.fast.ai/2018/07/23/auto-ml-3/) that not everyone needs to perform neural architecture search, and the ability to perform such a search does not replace machine learning expertise. In fact, blindly using computation power to search for the best architecture seems to lead us further into the abyss of un-interpretable models.

On the flip side, if we go back in time to the pre-GPU era, one could argue that we are at the same place with neural architecture search as we were back then with deep learning. Sprinkle in the notion of [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35), and suddenly the idea of everyone designing neural nets for their particular needs looks like a reasonable trajectory!

---

## Distilling the Knowledge of a Neural Network
_by [Friederike](https://www.linkedin.com/in/friederikeschueuer/)_

"Many insects have a larval form that is optimized for extracting energy and
nutrients from the environment and a completely different adult form that is
optimized for the very different requirements of traveling and reproduction,"
[says machine learning expert Geoffrey
Hinton](https://arxiv.org/abs/1503.02531). Yet in machine learning, we tend to use very similar models during
training and in production, despite the very different requirements of each stage.

During training, we want algorithms to learn an accurate and reliable mapping
from input to output data - for example, from images of larvae, butterflies,
cats, dogs, and hermit crabs, to image labels: ``larva``, ``butterfly``,
``cat``, ``dog``, ``hermit crab``. As part of this training, algorithms have to
learn to extract useful features from data, a complex task that that may
require a large, complex model with many parameters. However, these models are
tricky to deploy in production. Inference (the act of labeling a new data point)
is slow, and the model is large; it takes up space. 

[*Knowledge distillation*](https://arxiv.org/abs/1503.02531) helps transfer the
knowledge of a large, complex network into a smaller, less complex one; it
turns the larva into the butterfly model. Fast and small, the butterfly model
is ready for (re-)production.

One way to distill the knowledge of a neural network into a smaller one is to
use the large, complex model as a ``teacher model`` and the smaller model as a
`` student model`` (there are [other ways](https://arxiv.org/pdf/1710.09505.pdf)).
The teacher model takes input data and provides a probability distribution over
all possible outcomes (labels). Meanwhile, the student model learns to predict
this probability distribution, the output of the teacher model. This
probability distribution (across the full label space) encodes a rich
similarity structure in the output space; confusable outputs have similar
probability values. For our most recent prototype, *Newsie*, for example, we
built a (multi-task) model for new classification. The model struggled to learn
to distinguish between entertainment and lifestyle articles: for a given
article, the model returned comparable probability values for these two
categories (high, if the article was indeed an entertainment or lifestyle
article, and otherwise low). This tells us something about the data:
entertainment and lifestyle articles tend to cover overlapping content in
similar language.

A student model trained on the probability distribution of the teacher model
performs better than a student model trained on the prediction of the teacher
model (the most likely category) or a student model trained on the original
training data of the teacher model. The student model trained on the
probability distribution across the full label space benefits from this
rich encoding of similarity.

![]({{ site.github.url }}/images/2018/08/Screen_Shot_2018_08_16_at_1_00_37_PM-1534438951405.png)
##### A [recent paper](https://arxiv.org/abs/1805.05532) uses knowledge distillation and adversarial samples to more closely align the decision boundary of the student and teacher model.

Hinton recommends to increase the temperature of the
[softmax](https://en.wikipedia.org/wiki/Softmax_function), a function used for
multi-class classification to turn arbitrary real numbers into a probability
distribution during knowledge distillation. A higher temperature leads to a
smoother probability distribution. This is helpful in case of a very high
performing teacher model. A high-performing model will assign most of its
probability to one and only one label, thus not encoding much similarity in the
output space. A high softmax temperature reverses this effect. (Note that
during training, the temperature parameter of the softmax of both the teacher and
student models need to match; the student model needs to be able to mimick the
behavior of the teacher model.)

Knowledge distillation is a great way to prepare a high-performing prototype
model for production; it's also been used to [fend off adversarial
attacks](https://arxiv.org/pdf/1511.04508.pdf) and for [cross-modal
transfer](https://arxiv.org/pdf/1507.00448.pdf).

---

## CFFL Updates

* Save the date!  Friederike will be presenting an interactive webinar on multi-task learning for individual subscribers at 1:00pm ET on Friday, September 14th.

* Shioulin will be speaking on [Semantic Recommendations](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/69260) at the Strata Data Conference in NYC on September 12th, and Friederike will be [speaking at Strata](https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/69365) on September 12th as well.

* Hilary will be keynoting at [Strata](https://conferences.oreilly.com/strata/strata-ny) on Thursday, September 13th.

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on September 27th (also here in NYC).

* Shioulin will be speaking at [ODSC Europe](https://odsc.com/london) in London in mid-September.

As always - thank you for reading!  We welcome your thoughts, questions, and suggestions; please reach out to us anytime at cffl@cloudera.com.

All the best,

The Cloudera Fast Forward Labs Team
