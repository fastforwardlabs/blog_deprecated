---
layout: newsletter
slug: 2018-02-07-subscribers
---

Hello!  In this week's newsletter, we discuss multi-task learning, and also share some thoughts on DeepMind's release of PsychLab.

---

## Multi-task Learning

The common approach in machine learning is to train and optimize one task at a time. In contrast, multitask learning (MTL) trains related tasks in parallel, using a shared representation. One advantage of MTL is improved generalization - using information regarding related tasks prevents a model from being overly focused on a single task, while it is also learning to produce better results.
                                                                                                     
MTL is an approach, and is not restricted to any particular algorithm. A straightforward application of MTL in a feed-forward network means that the model is trained using multiple tasks. Instead of having one output node to predict a single task, there are multiple output nodes (one for each task). Once trained, the network is used to predict outcome of the task we are most interested in. The prediction for other tasks are ignored but the shared representation (weights and the network architecture) is derived from all tasks used in training. In a decision tree, an MTL approach implies that multiple tasks are taken into consideration when deciding on a split that results in a maximum information gain.                                 

![]({{ site.github.url }}/images/2018/02/MTLNet-1517931635465.png)
##### Multitask Network with four tasks. Image credit: [Algorithms and Applications for Multitask Learning](https://pdfs.semanticscholar.org/3980/c955f95092e527c580f9cfe066a17f752c08.pdf) 
                                                                                                 
Where do we get the [training signals for the multiple related tasks (extra tasks)](https://pdfs.semanticscholar.org/3980/c955f95092e527c580f9cfe066a17f752c08.pdf)? One possibility is to use future signals to predict the present. In offline systems, we can use future measurements (features that become available after the predictions must be made) as extra tasks during training. For example, results for lab tests administered after hospital admissions can be used as extra tasks when building a model to predict high risk patients _at time of admissions_. At deployment, predictions for the test results are ignored; test results are only used for training purposes. 

Another possibility is to intentionally collect additional labels for each training pattern, and use those as extra tasks. In image recognition, this can be easily  accomplished. Instead of annotating an object of interest in an image, a human would also annotate several other objects surrounding it. When we choose to annotate objects that make up a small part of the image (lane markings on roads, for example) and use those as extra tasks, we force the model to focus attention on patterns that it might otherwise ignore.

Are you (thinking about) using MTL in your organization? We would love to hear about use cases and applications!

---

## Comparing human and agent performance: DeepMind releases PsychLab

Google’s DeepMind released [PsychLab](https://deepmind.com/blog/open-sourcing-psychlab/) this week, which has been developed internally and released to the public as part of [DeepMind’s efforts](http://www.cell.com/neuron/abstract/S0896-6273(17)30509-3) to apply decades of research in cognitive science/neuroscience to advance the state of the art in machine learning and artificial intelligence. Many modern machine learning models have taken inspiration from principles derived from decades of research in cognitive science/neuroscience. This announcement, along with the accompanying [paper](https://arxiv.org/abs/1801.08116), provide an open-source playground for testing how agents (built using LSTM deep learning alrogirthms) perform when compared to humans on a slew of cognitive tasks that are fairly well-understood and widely used to study human perception.   

The research findings point out some potentially non-obvious ways in which the models used to build artificial agents are missing some fundamental aspects of how primate (human and non-human) vision and cognition operate. For instance, one experiment that tested psychophysical thresholds of an agent found that visual acuity was affected by the size of the images presented.  This led researchers to build a secondary model that loosely approximated the fovea (the center of the retina at the back of the eye, where sight is most acute) to improve performance. The need for this secondary model was only made clear by comparing performance of the agent to human performance and relating the difference back to human physical anatomy.

Interestingly, the agent failed to produce many well-known effects in humans. The pattern of differences between humans and the agent isn’t complete enough yet to make any big theoretical claims, but it appears that the agent has some deficits in integrating information over time, yet is spared the deficit typically seen in humans when asked to search for an object composed of the conjunction of two features (e.g., orientation and color). As these patterns continue to emerge, they will inform how new models are developed and will more clearly delineate the fundamental differences between how agents and humans perform cognitive tasks.

![]({{ site.github.url }}/images/2018/02/PsychLabs_DeepMind_figure-1517949199677.png)
##### Figure from [the PsychLab paper](https://arxiv.org/abs/1801.08116)

Most of the machine learning models in _production_ today, as opposed those used for more pure research, are aimed at automating tasks typically performed by humans or augmenting already-existent human capabilities. Currently, many practitioners make tuning decisions to increase the efficiency of machine learning models, but may be inadvertently making trade-offs that affect how well their models actually reliably replicate or augment human abilities. This collaboration between machine learning and cognitive science/neuroscience research, as it evolves, will bring to light new potential approaches to decrease that error. 

This type of open-source release allows practitioners to test their models on a myriad of cognitive tasks. This will greatly increase the speed at which machine learning models will change based on cognitive science/neuroscience. This burgeoning era gives us a moment to pause, however, and think critically about what a particular business might want to gain by using machine learning. It’s clear that we’re not yet near a generalized Artificial Intelligence (and these experiments reinforce that idea). As machine learning algorithms borrow more and more from cognitive science/neuroscience, we can think of these models in different ways. We can think of them as evolving along the same trajectory as humans (akin to studying infant brains and how they change and evolve throughout a human’s life); we can look at these models as something related to human cognition, but fundamentally separate (akin to the research on non-human primates); or we can think of these models as performing something entirely their own - with no tie to human evolution or development.
 
As this field continues to develop, and we begin to employ machine learning in every facet of business, it’s important to establish and maintain a goal for these tools, perhaps with these distinctions in mind.

---

## Job Postings

Here are a couple of new job postings we've heard about recently.  We're always happy to share opportunities, so please let us know if you have anything you'd like us to share.

* **Silectis** - Data Engineer ([job description](https://www.silect.is/careers-data-engineer))
* **Silectis** - Platform Engineer ([job description](https://www.silect.is/careers-platform-engineer))

---

## CFFL Updates 

* Be sure to catch Hilary in conversation with Hugo Bowne-Anderson in [the first episode](https://www.datacamp.com/community/podcast/data-science-past-present-and-future) of DataCamp's new podcast, [DataFramed](https://www.datacamp.com/community/podcast). Keep an eye out for future episodes featuring other members of the CFFL team, too! (Mike has recorded a couple, and we'll let you know when they're released.)

* Hilary will be speaking on March 7th at the [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ca/) in San José, and Mike will be presenting on [Interpretable Machine Learning Products](https://conferences.oreilly.com/strata/strata-ca/public/schedule/detail/63572) on March 7th, as well.

* Mike will also be speaking on interpretability at [Qcon.ai](https://qcon.ai/) on April 11th in San Francisco.

---

Finally, a correction. In last week's newsletter, we credited David King with the DLib project. It should have been *Davis* King. Thanks to one of our regular readers for pointing out the mistake. We welcome your thoughts, feedback, and suggestions anytime; please feel free to drop us a note at clients@fastforwardlabs.com.

As always, thank you for reading!  

Until next week,

The Cloudera Fast Forward Labs Team
