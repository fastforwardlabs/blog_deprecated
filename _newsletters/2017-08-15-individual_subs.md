---
layout: newsletter
slug: 2017-08-15-individual_subs
---
Hello!

As we announced last week, we're very excited to release the latest Fast Forward Labs research: [_Interpretability_](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html)!

On September 6, we will host a [public webinar on interpretability](https://mlinterpretability.splashthat.com/) with special guests Patrick Hall (Senior Data Scientist and Product Engineer at H2o.ai) and Sameer Singh (Assistant Professor of Computer Science at the University of California).

![]({{ site.github.url }}/images/2017/08/screenshot_prototype-1502752362658.jpg)

##### The interpretability prototype [Refractor](http://ff06.fastforwardlabs.com/refractor/) uses LIME to show what factors cause telecom customers to unsubscribe.

Last week at Fast Forward Labs, we had fun reading about AI's foray into [Starcraft](https://www.theverge.com/2017/8/9/16117850/deepmind-blizzard-starcraft-ai-toolset-api), played Monday-morning quarterback to Disney's reported decision to pull their catalog from [Netflix](http://money.cnn.com/2017/08/08/media/disney-netflix/), and got deep into the history of the humble [cookie](https://labs.rs/en/invisible-infrastructures-online-trackers/).

In our newsletter this week, we discuss a few of our perennial favorite topics: algorithms that push machine learning into new realms and research that challenges how we think about intelligence. We're also changing up our production process a bit to improve overall readability. If you notice anything amiss, or have any questions, please don't hesitate to [drop us a line](mailto:subscribers@fastforwardlabs.com). Feedback is always appreciated!

---

## Neural Nets for low power, low memory devices

Better hardware, from more powerful CPUs to GPUs, TPUs, and VPUs comes with better capabilities: it is inconcievable that even the simplest modern neural network could be trained on the G3 SDRAM 512MB processor of a 1999 iMac. But even the most powerful hardware limits the engineer's dream; algorithmic innovation can help us make *optimal* use of the hardware we have today.

### The necessary trade-offs for running on low-memory, low-power devices

Cellphones running the latest apps and IoT sensors need to be able to perform complex calculations localy as intermittent [wifi](https://thenextweb.com/insider/2016/11/30/wifi-coming-iot-invasion/#.tnw_NuiMni6y) and power drain (the result of frequent data transmission) are real concerns. One straightforward approach, taken by, e.g., Apple, is to train algorithms on powerful computers, since training is computationally expensive, and then [deploy pre-trained models on low-power, low-memory devices](https://www.tractica.com/automation-robotics/neural-networks-are-coming-soon-to-your-mobile-phone-camera/) only for inference (prediction). These pre-trained networks, however, may still be memory and power hungry.

For [consumer applications](https://research.googleblog.com/2015/07/how-google-translate-squeezes-deep.html), the process of curating (or crafting) training data, to reflect the most important "dimensions of variation" the model is likely to encounter once deployed, limits the dimensions the neural network has to learn. This approach reduces model complexity and, in combination with the fine-tuning of "expensive" operations, such as matrix multiplication, has proven effective. Other solutions involve using fixed-point instead of floating-point calculations, or implementing different, lightweight algorithms, such as [Bonsai](http://proceedings.mlr.press/v70/kumar17a/kumar17a.pdf) (Random Jungle) and [ProtoNN](http://proceedings.mlr.press/v70/gupta17a/gupta17a.pdf) (kNN clustering).

### Training on low-power, low-memory devices
Small feed-forward networks can be used to [train an NLP model on an Android device](https://arxiv.org/pdf/1708.00214.pdf). The networks are designed to limit the runtime of the model, whose memory needs are dominated by the size of the vocabulary used and vector dimensions. Their approach relies on (1) taking advantage of efficient n-gram representations instead of word embeddings, that allows much smaller vocabulary sizes in the 100 - 5000 range, (2), applying [quantization](https://www.tensorflow.org/performance/quantization) and (3) using a mini-batch size that is fixed to 32. They evaluate their algorithm on various common NLP tasks against other light-weight algorithms and they report significant improvements on accuracy, memory usage and speed. We kept the best for last: their algorithm is processing up to 46 tokens/second compared with the reported LSTM speed of 8.8 words/second!

Google and MIT [joined forces](http://news.mit.edu/2017/automatic-image-retouching-phone-0802) to create a "smart" photo retouching app that runs locally on your smartphone. The way they make their neural networks more efficient is by having them calculating the **instructions** for creating the retouched image, rather than the image itself. Yes, we think this is very clever, too.

### Fast, efficient neural networks through changes in network architecture
A process called [knowledge distillation](https://arxiv.org/abs/1503.02531) can help transform trained, high-accuracy, deep and wide neural networks (or ensembles) with many parameters into small, thin, fast-to-execute models (e.g., [FitNets](https://arxiv.org/pdf/1412.6550.pdf)), a two-step process to get to neural networks suitable for mobile devices.

The laboratory of Vivienne Sze at MIT took a heads-on [approach](http://news.mit.edu/2017/bringing-neural-networks-cellphones-0718) to energy efficient neural nets for cell phones using a principled energy-aware pruning strategy for convolunional neural networks that eliminates costly nodes that do not significantly improve algorithm performance. Sze was able to reduce the energy consumption of running the model up to 70%: impressive efficiency gains through changes in neural network architecture.

### To the future

It is easy to get carried away by the black-box beauty of deep, convoluted, twisted and interconnected networks that - like magic - produce the right results (given enough computational power, of course).  But there is another paradigm of beauty, that of elegance and efficiency. Algorithmic innovation to push the limits of the engineer's dream given existing hardware follows that paradigm.

---

## Smarter AI by giving it a "body"

The ancient Egyptians believed that the intellect was housed in the heart. For the Japanese, knowledge is located in the belly - and even English speakers are prone to know things 'in their gut.' We have a sense that our intelligence is not restricted to [the grey mass of neurons between our ears](https://blogs.scientificamerican.com/guest-blog/a-brief-guide-to-embodied-cognition-why-you-are-not-your-brain/). Yet, when we design computational cognition, we tend to focus only on the grey matter. However, giving AI a sense of body and place, even if only in a virtual environment, is a move towards an embodied form of cognition that can help train AI models that can navigate the real world more effectively.

![]({{ site.github.url }}/images/2017/08/maxresdefault-1502752797393.jpg)

Now, famously, Facebook created AI agents that [learned to talk to one another through interaction](https://research.fb.com/publications/multi-agent-cooperation-and-the-emergence-of-natural-language/) (and no, they were [not plotting against us](https://www.wired.com/story/facebooks-chatbots-will-not-take-over-the-world/)). At Carnegie Mellon, researchers are using the [virtual environment of first-person shooter games](https://www.technologyreview.com/s/608380/machines-are-developing-language-skills-inside-virtual-worlds/) to help machines learn linguistic principles for themselves. At Cal-Berkeley, robot arms trained in virtual environments are learning that in the non-virtual world, it helps to give a novel object [a bit of a nudge](https://www.wired.com/story/grasping-robot/) to see how it reacts before trying to grab it. Our bodies help our brains.

---

## Jobs, Jobs, Jobs

Here's a job opportunity for a data scientist:

**Enigma** - Data Scientist ([job description](https://www.enigma.com/careers/data-scientist))

We're always happy to share opportunities we hear about; please let us know if you have any you'd like for us to pass along.

---

## FFL Reads

- [DeepMind and Blizzard Release Starcraft Tools for AI](https://www.theverge.com/2017/8/9/16117850/deepmind-blizzard-starcraft-ai-toolset-api)
- [Disney May Leave Netflix](http://money.cnn.com/2017/08/08/media/disney-netflix/)
- [Invisible Infrastructures - Online Trackers](https://labs.rs/en/invisible-infrastructures-online-trackers/)

For more on what we're reading, be sure to check out [our blog](http://blog.fastforwardlabs.com/links.html)!

---

## FFL Updates

We're giving talks at some upcoming conferences:
- [FATML](http://www.fatml.org/): August 14 **(Halifax, Micha)**
- [Synaptech](http://synaptech.ai/): September 21-22 **(Berlin, Friederike)** (Use the code 'FriederikeVIP' for a 30% discount!)
- [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ny): September 28 **(New York, Hilary)**

As always, thank you for reading - and of course, we'd love to hear your thoughts on these topics. You can reach us anytime at [subscribers@fastforwardlabs.com](mailto:subscribers@fastforwardlabs.com).

– The Fast Forward Labs Team
