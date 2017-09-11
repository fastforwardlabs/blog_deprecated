---
layout: newsletter
slug: 2017-09-12-subscribers
---
Hello!

Last week we announced that Fast Forward Labs has merged with [Cloudera](http://blog.fastforwardlabs.com/2017/09/07/to-the-future.html)! By merging with Cloudera, we will be able to bring the opportunities discovered in our research to life in new ways, at the scale of the Cloudera platform.

We will continue our business under the new and not-so-different brand Cloudera Fast Forward Labs. We will still publish our research, building prototypes, run workshops, and do exploratory machine learning feasibility studies. The entire Fast Forward Labs team is joining Cloudera, we will continue to be based out of our Brooklyn office, and you’ll see the same familiar faces. Additionally, you can be sure that we’ll maintain our editorial independence and focus on the best technical decisions for you.

Like the nerd best friends we will continue to be, we will keep sending you our weekly newsletter, too! This week, we offer our take on recent research on adversarial learning and autonomous vehicles, the artificial intelligence prizefight that erupted over the summer, and (in the spirit of [#NYFW](https://twitter.com/search?q=%23NYFW&src=typd)) a dataset for algorithmic fashion designers: Fashion-MNIST.

Looking forward to the future!

---

## Adversarial samples vs. Self-driving cars, score 1:1

[<img src="http://dailyquenchers.com/wp-content/uploads/2016/03/1-road-runner-tunnel-car.jpg">]()

##### Adversarial images for self-driving cars pose a threat to road safety

Adversarial samples (i.e. training samples that can switch the label predicted by a neural network) have recently been the source of much excitement as well as concern. On the positive side, a neural net's influence functions behind adversarial samples can be used to add valuable [interpretability](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html) to the net's results, a topic covered in Fast Forward Lab's latest research. On the negative side, adversarial samples can be used to trick algorithms into mislabelling samples, which is a particularly big concern in security applications including autonomous vehicles.

A preprint published on July 12th by the University of Illinois with the spoiler title "[*No need to worry about adversarial samples for self-driving cars*](https://arxiv.org/pdf/1707.03501.pdf)" presents experiments in which they tested whether the different angles of an object's image used in real-life driving cars could act as *de facto* defence against adversarial images in an autonomous car's [YOLO detector](http://machinethink.net/blog/object-detection-with-yolo/) and traffic sign classifier. This concern is especialy relevant as [recent research](https://arxiv.org/abs/1607.02533) by Alexey Kurakin, Ian Goodfellow and Samy Bengio demonstrated that even when a printout of an adversarial example is used as input via a physical camera,the image is still able to "fool" the algorithm and misclassify the sample (the algorithm of course is not "fooled" but is rather estimating the label according to the input pixels).

The Illinois team used three different adversarial perturbations of signs and other road images taken at various angles, distances and light conditions. For the cases tested, adversarial samples at increased distances were misclassified less frequently than expected for that distance (increasing distance generally reduced classification ability). They repeated the experiment, this time with video footage from a moving car at different conditions, recording authentic or adversarial image printouts of road signs. This time they reported that "(r)arely were the printed perturbed stop signs misclassified,  since  as  the  car  approaches  the  stop  sign,  the distance and angle change and eventually the stop sign disappears from the frames. In other words, the camera was not close enough to the stop sign to recognize the adversarial perturbation to make the sign misdetected". According to these results it seems like the adversarial problem for self-driving cars was never a problem to start with.

The difficulty with car safety tests however is that the acceptable rates of error are impossibly low. In response to the July 12th paper, the team at OpenAI in a [blogpost](https://blog.openai.com/robust-adversarial-inputs/) published five days later, described an experiment where different adversarial pictures of a "tabby cat" were consistently misclassified as "desktop computer" in a scale- and transformation-invariant way, respectively. This one example the OpenAI team put together is sure to keep the discussion around adversarial samples and autonomous vehicles going for a little longer. What we would like to see in this discussion is more and better exeprimental testing involving real road and traffic video footage and quantitative estimates. 

---

## Futurism and Artificial Intelligence

For some, [Mayweather-McGregor](http://www.espn.com/boxing/story/_/id/20607363/floyd-mayweather-conor-mcgregor-live-gate-generates-554-million) was the prizefight of the summer. For others, it has been Musk-Zuckerberg going toe-to-toe over the risks posed by AI, with Musk voicing his [reservations](https://www.vanityfair.com/news/2017/03/elon-musk-billion-dollar-crusade-to-stop-ai-space-x) about artificial intelligence while Zuck remains more [sanguine](https://www.cnbc.com/2017/07/24/mark-zuckerberg-elon-musks-doomsday-ai-predictions-are-irresponsible.html). Musk has called AI possibly the "biggest threat" to humanity and gone so far as to suggest the decidedly un-Cathollic opinion that Silicon Valley should be welcoming regulatory oversight of AI in this one exceptional instance. Some have responded to Musk's statements by accusing him of having watched Terminator a few times too many while others have taken his statements as license to trumpet their own dire warnings about the threat of AI or [report](http://www.information-age.com/demand-new-legislaai-experts-warning-123468393/) gleefully over the blow-by-blow. 

Unsurprisingly, many of those who have chimed in about the debate have turned to sci-fi for guidance in thinking through the dangers of AI. Rodney Brooks [cites](http://rodneybrooks.com/the-seven-deadly-sins-of-predicting-the-future-of-ai/) Arthur C. Clarke's Adages of Futurism while [Oren Etzioni](https://www.nytimes.com/2017/09/01/opinion/artificial-intelligence-regulations-rules.html) name-checks Asimov's Laws of Robotics before suggesting his own Laws of AI. These are useful, and insightful, approaches to futurism in general, and there are good reasons why we still talk about Clarke and Asimov - their insights remain evergreen. We are hesitant, however, to see warnings about AI, particularly Musk's, as solely prescient warnings about the dangers he perceives. We are also a bit hesitant to describe anyone as playing 11-dimensional chess, but there may be more than meets the eye to Musk's warnings. Consider three possible ulterior motives for sounding the alarm on AI as Musk has:  

One - it's great marketing. Marketing on fear, uncertainty, and doubt ([FUD](https://www.entrepreneurship.org/articles/2000/10/the-fud-factor-how-to-persuade-customers-to-buy)) is not new, and deploying these emotions around AI is a great way to drive consumers away from competitors, or at the very least towards your own AI research (...cough... [OpenAI](https://openai.com/)).

Two - it sets a seat at the table. By calling for regulation of AI now, Musk is positioning himself as someone who has a healthy skepticism of AI, and who can therefore be trusted when he declares regulations to be effective safeguards against the risks he perceives. What better way to be able to shape regulations that go exactly as far as he might want (and no further)?

Three - it's great recruiting. Competition for talented AI researchers and engineers is fierce. This is known. But by calling out the risks of AI as forcefully as he has, Musk  may be making a subtle appeal to top-notch researchers who may be on the fence about joining the ranks of larger engineering teams, or vacillating about leaving academia, by signaling the opportunity to work on solving (what seem like) existential challenges for humanity. Not a bad recruiting poster.

![]({{ site.github.url }}/images/2017/09/star_trek_chess-1505156456055.jpg)

So what can we take away from thinking about these possible ulterior motives for the recent spate of dire (if premature and exaggerated) warnings about the risks of AI? One takeaway is a recognition that there *are* real risks to humans from ML and AI. Building systems that are [interpretable](http://blog.fastforwardlabs.com/2017/08/02/interpretability.html), that consider aspects of [fairness and accountability](http://www.fatml.org/), and that recognize the potential for harm that today's algorithms possess is not just responsible - its good design. Building trustworthy systems is also good recruiting and good marketing. Another takeaway is that we should all feel empowered to articulate our own "Laws of Robotics", "Adages of Futurism", or "Laws of AI". This may sound like another principle of sound design (and it is), but it is also a way of thinking through potential risks, as well as opportunities for countering those risks, in ways that are specific to the context of the product being built, or the problem being solved.

What "Laws of AI" or "Adages of ML" would you put on your list? No need to limit the list to three... [let us know](mailto:subscribers@fastforwardlabs.com) yours and we'll do our best to compile them for everyone to see. 

---

## Fashion-forward algorithms

![]({{ site.github.url }}/images/2017/09/Clueless-1504732987912.gif)

##### The idea to have a computer make your fashion decisions for you is not new. In the film "Clueless", Alicia Silverstone had images of her entire wardrobe imported in her personal computer to help her pick the perfect outfit for the day.

Unless you have the fashion sense and ingenuity of Alicia Silverstone in the 1995 film "Clueless", finding what to wear every morning can be a hassle. Regardless of whether you get a sense of achievement from simply managing to have matching socks on in the morning, or you are a more fashion-aware individual, what to wear is a decision we all make every day. It has therefore always been interest in products that help people - busy professionals or the simply fashion-challenged - dress well without effort. Beyond Clueless-style '[closet inventory apps](https://verilymag.com/2017/03/closet-organization-apps-for-your-wardrobe)' that help you mix-and-match clothes that are currently in your wardrobe, providing fashion and styling advice is somewhat more challenging. Trends change, personal styles and body types vary and different outfits are suited to different occasions. [Social shopping websites](https://www.lifewire.com/top-social-shopping-websites-3486565) are one solution, but still require considerable amount of time to navigate through all the options and styling suggestions. This is where algorithms that make your wardrobe decisions for you come in.

Among the [many alternatives](https://www.whatsupfagans.com/stitch-fix-alternative-competitor/) that are currently populating the industry of personalized styling apps, Stitch Fix has recently gained the attention of both consumers and the business world. With a strong emphasis on machine learning and intelligent algorithms, its entire bussiness structure is based on [predictive analytics](http://algorithms-tour.stitchfix.com/#recommendation-systems). For the consumer, Stitch Fix uses a combination of Netflix-style collaborative filtering and more classic mixed-effects models to decide on recommendations. We especially like that they take the extra steps to cater to niche consumer categories through their 'human stylist' service, also algorithmically decided. Algorithms are also used to organize and restock inventory, taking the example of Amazon to the personalized styling services. Moreover, in an industry-first Stitch Fix is testing [Hybrid Design](http://multithreaded.stitchfix.com/blog/2017/03/13/hybrid/), a garment-designing algorithm that, if succesful, would definitely make an impact on the online fashion industry.

Interest in fashion forecasting and design personalization through data science is not restricted to a handful of companies. Fashion-designing algorithms have attracted attention in the research community, both because of the rich bussiness opportunities for applications and the unique nature of the problem of building predictiction algorithms for fashion. This August, the [second international workshop on fashion and KDD](https://kddfashion2017.mybluemix.net/) took place in Nova Scotia, Canada. The title of the invited opening talk by Kavita Bala 'Fashion and Style Discovery: object and material recognition from online photo collections' is evidence that data science is currently very intrested in fashion. For those who want to start playing around with their own ideas for fashion-forward algorithms, [Fashion-MNIST](https://github.com/zalandoresearch/fashion-mnist), a labelled dataset of 28x28 grayscale images of 70,000 fashion products from 10 categories, would be a good place to start.

Amazon anounced this June that it is entering the wardrobe subscription market and creating [Prime Wardrobe](https://techcrunch.com/2017/06/20/amazon-prime-wardrobe/), a service that allows subscribers to order and try garments at home with the option to purchase. Right now, it looks like the company is taking advantage primarily of its inventory and distribution capabilities for its value proposition for the product. But judging from Amazon's past track record of successful innovations, we aren't surprised to see their data team announcing [aditional predictive analytics features](http://www.businessinsider.com/amazon-researchers-testing-ai-machine-learning-for-fashion-2017-8) being developed for the product. In the meantime we can imagine what the industry might look like in the near future: perhaps algorithms that decide the optimum outfit for each day depending on the weather, the user's schedule and personal sense of style, or apps that combine automated fashion design with at-home [3D printing](https://www.wired.com/2017/05/the-shattering-truth-of-3d-printed-clothing/) for truly personalized fashion options. One thing is for sure, the fashion industry is not 'clueless' when it comes to algorithms.

---

## Jobs, Jobs, Jobs

Here are a couple of job opportunities for data scientists:

**Enigma** - Data Scientist ([job description](https://www.enigma.com/careers/data-scientist))
**Crisis Text Line** - Machine Learning Data Scientist ([job description](https://crisistextline.workable.com/j/6B5C231A62))

We're always happy to share opportunities we hear about; please let us know if you have any you'd like for us to pass along.

---

## FFL Updates

We're giving talks at some upcoming conferences:
- [Nexterday North 2017](http://www.businesswire.com/news/home/20170824005127/en/Nexterday-North-2017-Re-Invents-Core-Digital-Communications): September 20 **(Helsinki, Hilary)**
- [Synaptech.AI](http://synaptech.ai/): September 21-22 **(Berlin, Friederike)** - Use the 'FriederikeVIP' code to get 30% discount! 
- [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ny): September 28 **(New York, Hilary)**
- [Grace Hopper Celebration](https://ghc.anitaborg.org/): October 4-6 **(Orlando, Hilary)**

Thank you for reading.  We'd love to hear your thoughts! You can reach us anytime at clients@fastforwardlabs.com. 

— The Fast Forward Labs Team