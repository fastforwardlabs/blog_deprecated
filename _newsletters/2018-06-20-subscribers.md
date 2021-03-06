---
layout: newsletter
slug: 2018-06-20-subscribers
---

Hello!  In this week's newsletter, we discuss eye-tracking technology (a.k.a. why you may want to put a sticker on your webcam - unless you're using it, of course), and how to handle unwieldy hyperparameter tuning for neural networks.

---

## "Gaze Streams"

While the effort to track the human gaze dates back at least to the [1890s](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC512134/?page=1), new [eye-tracking technology](https://techcrunch.com/2017/02/19/unlocking-the-potential-of-eye-tracking-technology/) could soon yield data streams that account for the motion of eyes outside of laboratories, and at vast scales. Eye-tracking is being commercialized by several companies, including [Tobii](https://www.tobii.com/group/), [Fove](https://www.getfove.com/), [The Eye Tribe](http://theeyetribe.com/theeyetribe.com/about/index.html) (acquired by Facebook), and [Eyefluence](https://beta.techcrunch.com/2016/10/24/google-buys-eyefluence-eye-tracking-startup/?_ga=2.76572242.698882317.1528988225-1447743034.1526999999) (acquired by Google), creating both new ways of interacting with technology, and raising the promise of a new class of consumer data. 

![](https://www.tobii.com/imagevault/publishedmedia/dvrtiukio7ujt3vwfnkl/Tobii_EyeTracking_Illustration_EN_3_2.jpg)

##### [Tobii](https://www.tobii.com/group/about/this-is-eye-tracking/)'s eye tracker: it also consists of algorithms (image: Tobii AB).

One important opportunity currently lies in AR/VR, where eye-trackers can address performance issues by allowing headsets to render high-quality imagery only where the user’s eyes are most sensitive to visual detail. Using eye movement essentially as a form of mouse, gaze-based interfaces also create an alternate way to interact with digital devices, which has implications for accessibility, gaming, and defense. Among the already established applications are: use in medical diagnostics, market and advertising analytics, and applications in governance (for example, by enabling the detection of whether an operator is drowsy or inattentive). 

The power of eye-tracking data is well established through a rich history of academic and industrial research, and it is difficult to imagine the modes and extents to which the collective creativity of the machine learning community will drive this capacity, once large datasets become available. One parallel might be drawn to the clickstream data available to the large search engine companies, which has provided them with enormous datasets that are extremely useful in extracting semantic information, linking user queries to their eventual clicks. “Gaze Streams” might just be even richer, as they track the way that the human eye makes meaning. Such datasets would probably have profound consequences for efforts in learning visual semantics, as the trace of the eye parsing a scene creates a purpose-dependent annotation of that at which they are looking.  (For inspiration, see Chapter VII in [this text](http://wexler.free.fr/library/files/yarbus%20%281967%29%20eye%20movements%20and%20vision.pdf) by Yarbus). 

![](https://upload.wikimedia.org/wikipedia/commons/d/d2/Yarbus_The_Visitor.jpg) 
##### Yarbus' 1967 eye-tracking study (image: Wikimedia commons).

For a worked example of tackling eye-tracking data with machine learning, one can refer to Zemblys et al.’s [recent study](https://www.ncbi.nlm.nih.gov/pubmed/28233250) in Behavioral Research Methods, which features a thorough and accessible analysis of eye-tracking data using random forest classifiers. Their focus lies on the canonical event detection problem, dividing eye-tracking data into fixations (gaze on a single location, which could be moving i.e. in smooth pursuit), saccades (the eyes jumping between two or more fixations) and post-saccadic oscillations (an involuntary movement of the eye following saccades). As with most biodata, eye-tracking data is rather noisy, and the fast movements of the eyes require fast sampling rates that consequently impose high data volumes.

If the prospects of eye-tracking data are exciting, its collection, however, entails exceptional privacy risks: the data goes substantially beyond a fitbit in measuring someone’s body, and beyond a Facebook profile in its capacity to capture a person’s mind – the direct and contextualized measurements of what someone is looking at, as well as how, likely represent the closest approach of a consumer device to measuring someone’s inner world so far. While words, clicks and movements can, at least in principle, be moderated, allowing some degree of agency over the information that is volunteered, imagining the same for eye-tracking data is reminiscent of trying to cheat a difficult lie detector test, and would be impossibly hard in the long run. Eye movement not only represents a measurement of a large part of someone’s sensory input, but it also betrays someone’s attention: whether they are reading or skimming, focused or distracted, or whether they are tired or awake, in addition to what they consider of particular interest in a scene. It allows for a wide spectrum of sophisticated inferences of someone’s [psychology](https://www.ncbi.nlm.nih.gov/pubmed/22810423) (for example, towards the diagnosis of [anxiety disorders](http://www.apa.org/science/about/psa/2009/03/science-briefs.aspx)).

In his series [“The Century of the Self,”]( http://thoughtmaybe.com/the-century-of-the-self/ ) documentarian Adam Curtis painted one vivid picture of an effort of mass-psychoanalysis, that he identifies with the birth of the modern advertising industry, which (not coincidentally) acts as a core driver of the data science explosion. He also describes an effort toward exercising control, stressing the capacity to undermine liberal democracies. Twelve years after its release, it is worth revisiting in light of the [Cambridge Analytica scandal]( https://www.theguardian.com/news/2018/mar/18/what-is-cambridge-analytica-firm-at-centre-of-facebook-data-breach). In China, machine learning is abused to perfect an increasingly totalitarian surveillance state, [recently treated]( https://www.washingtonpost.com/news/world/wp/2018/01/07/feature/in-china-facial-recognition-is-sharp-end-of-a-drive-for-total-surveillance/?noredirect=on&utm_term=.20cd98300549) by Simon Denyer in the Washington Post ([among]( https://www.theatlantic.com/international/archive/2018/02/china-surveillance/552203/) [others]( https://www.bbc.com/news/av/world-asia-china-42248056/in-your-face-china-s-all-seeing-state)). The integration of eye- trackers into consumer devices forces us to reimagine these scenarios under circumstances that allow for an unprecedented resolution to the analysis of a person’s psychological and physiological state and condition. Noting that the General Data Protection Regulation (GDPR) came a decade overdue in an age of Moore’s laws, one must anticipate that legislative bodies will not be prepared to respond to the depth of information collection by sensors such as eye-trackers, and that this will be true even in Europe, where there is over a century’s worth of memories of oppression on the basis of intelligence gathering. Part of the burden of ensuring ethical use falls on practitioners of data science, and the prospect of this new type of data should factor into our debate.

---

## Deep Learning Vendor Update: Hyperparameter Tuning Systems

In our [research reports](https://www.fastforwardlabs.com/research), we cover "the recently possible," and what makes "the recently possible" possible. In addition to a detailed how-to guide of new machine learning capabilities, each of our reports contains a section on open source projects, commercial offerings, and vendors that help implement this new machine learning capability to realize the opportunities opened up by technological innovation. We like to keep an eye on the the technologies we research, of course. Our report on deep learning (for image classification) was published a few years ago, and we have seen noteworthy new developments.

Training neural networks requires a set of "hyperparameters" that guide the training process, and sometimes aspects of the network itself (such as the number of layers of the network or the number of nodes per layer). Hyperparameter tuning is important because hyperparameters have substantial effects on the quality of the trained model.

![Tuning hyperparameters is important to a neural net's performance]({{ site.github.url }}/images/editor_uploads/2018-06-19-231235-Compressorhead___Fingers_on_Gibson_Flying_V_Bones_on_Fender_Precision_Bass___Musikmesse_Frankfurt_2013.jpg)
##### Tuning hyperparameters is important to a neural net's performance (Image Credit: [Torsten Maue](https://commons.wikimedia.org/wiki/File:Compressorhead_-_Fingers_on_Gibson_Flying_V,_Bones_on_Fender_Precision_Bass_-_Musikmesse_Frankfurt_2013.jpg), Wikimedia Creative Commons [(Compressorhead)](https://innotechtoday.com/can-real-iron-man-sing-ironman/))


Hyperparameter tuning has generally been at least as much of an art as a science. Machine learning specialists select preliminary hyperparameters, train the model with those hyperparameters, and evaluate the performance and characteristics of the trained model. Then they adjust the hyperparameters (applying some educated guesses), retrain the model with those hyperparameters, and evaluate again. This process is repeated until the specialist is satisfied with the model.

Several new options promise to automate at least a part of the work of hyperparameter tuning, freeing up the personnel building the model, and possibly finding better hyperparameter settings than a human might. They generally work by automating the hyperparameter selection, model training and evaluation, and hyperparameter adjustment, searching for better model performance. These automated hyperparameter tuning packages include offerings from major cloud services providers (e.g., SageMaker from Amazon and Azure ML Studio from Microsoft) as well as smaller independent vendors (e.g., [Comet.ml](https://www.comet.ml/), [Weights & Biases](https://www.wandb.com/), and [SigOpt](https://sigopt.com/)). Afficionados of open source projects may enjoy [Hyperopt](https://github.com/hyperopt/hyperopt), a python library for "serial and parallel optimization over awkward search spaces." As anyone who has ever embarked on a quest for optimal hyperparameters can tell you, "awkward" is a good description of the process of searching for the optimal hyperparameters of neural networks.

For a thorough overview, Jesus Rodriguez rounds up automated hyperparameter tuners in a recent [Hackernoon article](https://hackernoon.com/hyperparameter-tuning-platforms-are-becoming-a-new-market-in-the-deep-learning-space-7106f0ac1689). Hyperparameter tuning is one of the more easily automated aspects of machine learning (in contrast to, for example, feature engineering). In most practical settings, careful feature engineering requires an understanding of the organization and business, data collection protocols, as well as data science tools and algorithms; it is hard to automate with out-of-the-box solutions. We welcome appropriate automation; automated hyperparameter tuning promises to cut down development time of neural networks and lead to better results.

---

## CFFL Updates

* Mike will be speaking on probabilistic programming at [QCon](https://qconnewyork.com/ny2018/presentation/modern-cs-presentation-1) in New York on June 28th.

* Friederike will be speaking at the [Research & Applied AI Summit](https://raais.co/) in London on June 29th, and also participating in a panel at [Curious2018](https://curious2018.com/) in Darmstadt, Germany on July 17th.

* Please join us on Wednesday, July 11th for [a webinar](https://info.cloudera.com/LP=2027?elq_id=CCLOU000007199414) on **Multi-Task Learning: Stepping away from narrow expert models** (the topic of our next report)!

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please drop a note to cffl@cloudera.com anytime!

All the best,

The Cloudera Fast Forward Labs Team
