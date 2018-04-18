---
layout: newsletter
slug: 2018-04-18-subscribers
---

Hello!  In this week's newsletter, we discuss a (possibly obvious) approach to developing a good team workflow, and the impact of data on image forgery detection.

---

## Complexity vs. Simplicity

Complexity is no prerequisite for building things that work, a point the Harvard Business Review makes in [a recent article](https://hbr.org/2018/03/getting-value-from-machine-learning-isnt-about-fancier-algorithms-its-about-making-it-easier-to-use). The authors focus on how streamlining the development pipeline for machine learning can avoid common pitfalls like getting stuck at the beginning of the process, sifting through massive amounts of data trying to discover meaningful patterns amidst the dross.

The HBR article prescribes a seven-step process for deploying machine learning, and while their entire workflow may not suit all needs perfectly, there are some valuable lessons in it that can benefit anyone. First: focus on the question you are trying to answer; for example, "What factors, that we have data for, predict a delay in delivery?" or "Can a patient's prescription history predict a positive outcome in a hospitalization?". 

By working from a well-posed question, domain experts can help identify the key features likely to contribute to the answer, and data scientists can leverage that domain knowledge in the feature engineering step. The authors of the article advocate for [automated feature engineering](https://github.com/featuretools/featuretools/), an approach that is becoming more robust, but that isn't necessarily yet a one-size-fits-all approach. Folding collaboration between domain and data experts into a streamlined process that moves from question to feature engineering to testing and deployment is a solid workflow that may not live up to what the authors call "ML 2.0," but *is* an excellent template to iterate from in developing a team's workflow.

---

## More data means better detection of forged faces

As humans we tend to trust our senses, for the most part.  When we see a loved one walk into the room (and they look exactly as we’d expect) we have no reason to suspect that the person we’re seeing may indeed be an imposter. Theatre and film have long come up with creative ways to alter our perception in the hopes of entertaining an audience that is complicit in (and indeed typically willing to pay for) perceptual illusions. These industries invest considerable funds and time into producing altered scenes and images designed to "trick" the viewer. Recently however, thanks to advances in neural network algorithms (specifically autoencoders), and the release of apps like [FakeApp](https://www.fakeapp.org/) (which can alter or swap faces) and [Lyrebird](https://lyrebird.ai/) (which can alter or swap voices) - as long as there is enough data to train the models with (and in the case of faces, those images come from a variety of settings and angles) - people without machine learning expertise can use an app to acheive what would have taken hours and thousands of dollars in the past. The sudden ubiquity of this ability makes many uncomfortable, and challenges some of our assumptions that what we’re seeing is what has truly occurred.

![Figure from original Face2Face article (Thies et al., 2016)]({{ site.github.url }}/images/2018/04/Face2FaceDemo-1523810402240.png)

The widespread use of these techniques (which aren’t all that novel in and of themselves) creates the need to be able to systematically detect whether a video or image is real or fake. Many methods for forgery detection to date rely on hand-crafted features based on regular deviations in images that can be found when they have been altered. These methods do not hold up well with compressed images (which comprise most of available online data).  However, convolutional neural network (CNN) approaches (in particular [XceptionNet](https://arxiv.org/abs/1610.02357) tend to perform better than other methods in forgery detection tasks, even with highly compressed images. 

![Figure from face forgery detection article (Roessler et al., 2018)]({{ site.github.url }}/images/2018/04/FaceForgeryDetection_image-1523810446551.png)

Deep learning methods (which include CNNs) in general, though, require large amounts of training data to attain meaningful levels of accuracy. Interestingly, separately from face forgery detection work, it’s recently been shown empirically that deep learning model accuracy grows as a power-law as the training set size grows, and that manipulating model architecture or the optimizer can only shift learning curves but not alter their power-law exponent ([see here for more](https://arxiv.org/pdf/1712.00409.pdf)). To tackle this training data problem, one group has automatically created a large publicly available [dataset](http://www.niessnerlab.org/projects/roessler2018faceforensics.html) from 500K frames of 1004 YouTube videos using the [Face2Face approach](https://web.stanford.edu/~zollhoef/papers/CVPR2016_Face2Face/paper.pdf). In creating this dataset, the group also constructed masks for each image, which can be used to train additional models that determine whether an image has been forged (or even if individual pixels have been forged). This new dataset (complete with masks) opens the door for quick advancements in detecting fake images and videos. Future work can use this dataset (and it’s benchmarked performance) along with generative adversarial networks (GANs) to refine both the forgeries that are created and models to detect them.

---

## CFFL Updates

* Hilary will be speaking at the [MIT Digital Economy Conference 2018](http://mitsloan.mit.edu/alumni/events/2018-new-york-ide-conference/) on April 27th in New York.

* Friederike will be speaking & joining a panel at the [AI Summit](https://twimlai.com/aisummit-interop-2018/) in Las Vegas on May 1st.

* Hilary will be presenting a webinar on [Demystifying ML & AI](https://info.cloudera.com/LP=1968?src=FFL) on May 9th.

* Mike will be speaking at the [Strata Data Conference](https://conferences.oreilly.com/strata/strata-eu/public/schedule/detail/65283) in London on May 24th.

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on applying AI and Machine Learning To Media and Entertainment on June 19th in New York.

* and Friederike will also be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th.


As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop us a note anytime at clients@fastforwardlabs.com.

Until next week,

The Cloudera Fast Forward Labs Team
