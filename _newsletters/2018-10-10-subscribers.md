---
slug: 2018-10-10-subscribers
layout: newsletter
---

Hello! In this week's newsletter, Shioulin digs into some [recent research](https://arxiv.org/abs/1708.00088) on learning algorithms for active learning, and we recommend a few articles worth your time.

---

## Learning an Active Learner using Deep Reinforcement Learning
_by [Shioulin](https://twitter.com/shioulin_sam)_

In many real-world machine learning settings, labeled data is scarce and expensive to obtain, while unlabeled data is abundant. Active learning tackles this problem by using heuristics to select instances of data to label; the model then learns from this smaller, labeled dataset. In _pool-based active learning_, the model has access to a collection of unlabeled data, and uses heuristics to select instances to label from this pool. Examples of heuristics are to choose i) instances with labels that the model is most uncertain about, and ii) instances which are expected to be most informative. In _single pass active learning_, a decision must be made on unlabeled data (an instance) as it is pulled from a stream. Examples of heuristics are i) similarity metrics between the current instance and others seen so far, and ii) uncertainty measures in the label prediction. Rather than relying on engineered heuristics, _meta learning_ attempts to _learn_ an active learner. [Newer approaches](https://arxiv.org/abs/1708.00088) go one step further and combine meta learning with deep reinforcement learning to learn an active learner. 

A meta learning with reinforcement learning framework used to learn single-pass active learners looks like this: At each time step, an agent is presented with an instance in a sequence, and must choose whether to predict the label for this instance or request the true label. Each action has a reward associated with it, and the agent transitions into a new state in the next time step. In [Active One-shot Learning](https://arxiv.org/abs/1702.06559), the authors define three costs: the cost of requesting a label (-0.05), the cost for predicting a label correctly (+1), and the cost for predicting a label incorrectly (-1). Deep reinforcement learning is then used to learn a policy that maximizes the expected sum of discounted future rewards. Specifically, the authors use a neural network (LSTM with 200 hidden units) to represent Q, which, given a state and action, tells us the expected sum of discounted future rewards. Loosely based on the [DQN](https://arxiv.org/abs/1312.5602) model, with this approach, one can develop a policy by picking the action, when in a given state, that results in the highest Q value.

![(a) Image is presented at each time step. Model outputs a one-hot vector of length c+1, where c is the number of classes. The extra bit is used to request a label. (b) To request label, the final bit of the output vector is set to 1. Reward is -0.05 (c) To predict label, the first c bits of the output vector is set. Reward is +1 for a correct prediction and -1 for a incorrect prediction.[Image credit](https://arxiv.org/abs/1702.06559)]({{ site.github.url }}/images/2018/10/Screen_Shot_2018_10_08_at_2_18_03_PM-1539023674295.png)
##### (a) Image is presented at each time step. Model outputs a one-hot vector of length c+1, where c is the number of classes. The extra bit is used to request a label. (b) To request label, the final bit of the output vector is set to 1. Reward is -0.05 (c) To predict label, the first c bits of the output vector is set. Reward is +1 for a correct prediction and -1 for a incorrect prediction. [Image source](https://arxiv.org/abs/1702.06559)

The authors evaluate their model using the Omniglot dataset. This dataset contains 1,623 classes of characters, with 20 hand drawn examples from each class. It is extensively used for meta learning research because of the large number of classes and correspondingly little labeled data in each class. Results show that the model learns to make more label requests for early instances of a class, and fewer for later instances. The model is also more accurate on later instances of a class. In addition, by changing the reward structure (for example, modifying the cost of an incorrectly predicting a label), the model can be tuned to achieve high prediction accuracy with many label requests or low prediction accuracy with few label requests. We thought the paper was very cool to have combined reinforcement learning with meta learning, and are looking forward to reading a series of research that this has inspired, starting with [this one](https://arxiv.org/abs/1708.00088)!

---

## FFL Reads A Lot

As your nerd best friends, we do tend to read a lot.  This month, in lieu of a second full-length newsletter article, we thought we'd curate a short, and eclectic list of some articles that caught our attention:

* [Deep Reinforcement Learning for De-Novo Drug Design](https://arxiv.org/abs/1711.10907) -- ML for drugs! We can now use machine learning, a combination of deep generative and predictive models with a dose of reinforcement learning, to generate novel but chemically feasible compounds that may provide relief for infections and other diseases that lacked good treatment until now; it's data-driven drug screening and development now at scale.

* [Organizing my kitchen with Airtable](https://taravancil.com/blog/organizing-my-kitchen-with-airtable/) –- How to use Airtable (a lightweight database-spreadsheet hybrid) to plan your cooking. [Airtable](https://airtable.com/) is a neat tool and this post shows how much you can do with relatively simple but cleverly applied queries.

* [New AI Strategy Mimics How Brains Learn to Smell](https://www.quantamagazine.org/new-ai-strategy-mimics-how-brains-learn-to-smell-20180918/) -- This article highlights how we may be down too narrow a path when we design machine leaning models.  Olfaction (as opposed to vision) may serve as an excellent human model for machine learning and eventually artificial intelligence.  Plus, there are insect cyborgs!

We also enjoyed:
* [Why you need to improve your training data, and how to do it](https://petewarden.com/2018/05/28/why-you-need-to-improve-your-training-data-and-how-to-do-it/)
* [How do we capture structure in relational data?](https://thegradient.pub/structure-learning/)
* [When Recurrent Models Don't Need to be Recurrent](http://www.offconvex.org/2018/07/27/approximating-recurrent/)
* [Privacy and machine learning: two unexpected allies?](http://www.cleverhans.io/privacy/2018/04/29/privacy-and-machine-learning.html)
* and [How to shuffle a big dataset](https://blog.janestreet.com/how-to-shuffle-a-big-dataset/)

---

## CFFL Updates

* Ryan is speaking today on federated learning at the [Artifical Intelligence Conference](https://conferences.oreilly.com/artificial-intelligence/ai-eu/public/schedule/detail/70309) in London, and will also speak on [multi-task learning](https://conferences.oreilly.com/artificial-intelligence/ai-eu/public/schedule/detail/70266) tomorrow.  If you're in London, please do catch him to say hello!

* Hilary will speaking at the [Open FinTech Forum](https://events.linuxfoundation.org/events/open-fintech-forum-2018/) in NYC on October 11th.

* Mike will be speaking on Serverless for data scientists](https://pydata.org/la2018/schedule/presentation/34/) at [PyData LA](https://pydata.org/la2018/) on October 22nd.

* Justin will be speaking at the [Cloudera Sessions event](https://www.cloudera.com/more/events/sessions/toronto.html) in Toronto on October 23rd.

* Matt will speaking on "A Roadmap to Open Data Science" at [Cloudera World Tokyo](http://clouderaworldtokyo.com/2018/sE-04.html) (Tokyo, Japan) on November 6th.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime.

All the best,

The Cloudera Fast Forward Labs Team
