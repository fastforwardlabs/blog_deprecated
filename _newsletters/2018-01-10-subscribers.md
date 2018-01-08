---
layout: newsletter
slug: 2018-01-10-subscribers
---

## Welcome to 2018!

*I think this is the year we'll see enterprises more broadly accept that data science (and machine learning) is no longer purely an experimental field but yields practical value in production systems. It's also a year to realize that how we leverage data science isn't solely a question of technological capabilities, but also of how we structure our organizations, people, and practice to take advantage of it.*

*I hope it's the year that we'll see data be widely recognized as a unique resource for innovation, and not just as a cost-savings tool. Your data can open up potential product and business opportunities - and we're excited to explore them with you!*

*Whether you're a new client or one that has been with us for some time, you have a lot to look forward to this year. Our research program is getting better with every iteration, and we have some really exciting reports and prototypes coming your way over the next few months. And for those of you who haven't checked in with us lately, I want to make sure you're aware of the full set of services that we currently provide. First, our research and advisory subscription, with a preview of our next report (coming shortly!) below. Second, our strategic engagements, where we work with you to craft a strategic plan that intersects product opportunities and technology investments with people, process, and organizational questions. Finally, we also take on machine learning feasibility studies, helping you take an opportunity from a science project to an engineering project.*

*Looking forward to a fantastic year,*

*-- Hilary*

---

## Serverless data science

Cloud computing has transformed enterprise IT. It makes it possible to rapidly
scale up and down a complex and global infrastructure, without the overhead of
a datacenter. But living in the cloud can be expensive, and you still need to
maintain computers and their operating systems, even if they are virtual.
That's why we've been watching with interest the rise of "serverless"
computing.

Serverless has the potential to open up "big data" work to mere mortal data
scientists who don't have the budget or engineering support for a
long-lived analytics cluster, and to make life simpler and reduce costs for
those that do.

Traditional cloud "elastic compute" systems (like Amazon's EC2, Google's Computer
Engine, or Azure's Virtual Machines) allow you to run applications without
maintaining hardware. The goal of "serverless" is to go even further, and make
it possible to run applications without worrying about hardware _or_ the
operating system.

Serverless environments (like Amazon's Lambda, Google's Cloud Functions, or Azure's
Functions) can be thought of as computing environments that pop into existence
for the duration of a single function call, and are then destroyed. Configuring
and maintaining the underlying operating system is somebody else's problem.

Because the serverless instance exists only for the duration of the function,
there's no idle time and your bill scales almost perfectly with the amount of
compute you use. Combined with the fact that you no longer need to configure and
maintain the operating system, this can result in big savings. For example,
our friends at Postlight converted their Readability application to run on AWS
Lambda and [reduced the monthly cost from over $10,000 to
$370](https://trackchanges.postlight.com/serving-39-million-requests-for-370-month-or-how-we-reduced-our-hosting-costs-by-two-orders-of-edc30a9a88cd).

But it's not all good news. Because the environment ends after the function
finishes, input and output must occur via a web API or a database connection.
There is no internal state or disk. And the various cloud providers place CPU,
RAM, time, and programming language constraints on what you can do. (For example,
AWS Lambda functions must run Python, C#, node.js or Java; R is not an option.
And the function must return in less than 300 seconds and use no more than
1.5Gb of RAM.)

These limitations might seem to make serverless less appealing to power-hungry
data scientists and data engineers - and indeed, so far most of the prominent
uses of serverless have been in web applications, where the computational
requirements are less intense. But in many ways the constraints of serverless
are similar to those faced in distributed analytics clusters running Hadoop or
Spark. To do data analytics in these environments, we have the map-reduce
computing paradigm, which parallelizes work by splitting it into small parcels.

![]({{ site.github.url }}/images/2018/01/serverless_pywren-1515449109658.png)

[PyWren](http://pywren.io/) is a distributed analytics tool that connects the
dots. It splits up large analytics jobs into smaller parcels of work, and ships
them off to hundreds or even thousands of serverless AWS Lambda instances. This
makes PyWren (with AWS Lambda as a computational "backend"), a light-weight
alternative to complex, expensive (and admittedly more robust) map-reduce
frameworks such as Hadoop and Spark. 

And - perhaps most intriguing for us at Cloudera Fast Forward Labs, given our
interest in machine learning - it's exciting to see serverless used to [speed up
hyperparamter
optimization](http://tothestars.io/blog/2016/10/19/serverless-ai), a relatively
simple (but computationally intensive) part of model building.

For more on PyWren, see [Occupy the Cloud: Distributed Computing for
the 99%](https://arxiv.org/abs/1702.04024). For more on the implications of
serverless more generally, see [Serverless Computing: Economic and
Architectural
Impact](http://www.doc.ic.ac.uk/~rbc/papers/fse-serverless-17.pdf).

---

## Food for thought

One of our favorite annual traditions is a putting together a round-up of some of the research, talks, sci-fi, visualizations/art, and other things we found interesting over the course of the past year.  Be sure to check out our "[Highlights of 2017](http://blog.fastforwardlabs.com/2017/11/22/2017-highlights.html)" post on the FFL blog!

2018 promises some great content ahead, as well.  For example, Rodney Brooks is always an entertaining read, and in [this post](https://rodneybrooks.com/my-dated-predictions/) published on the first of the year, he reflects on predictions he has made in the past re: CS, ML, AI, etc.

---

## Job Postings

Here's are a couple of job postings that we've heard about recently: 

**The Rockefeller Foundation** - Managing Director, Data Technology ([job description](https://www.rockefellerfoundation.org/about-us/careers/managing-director-data-technology/))
**TD Ameritrade** - Senior Specialist, UI/UX Lead ([job description](https://jobs.tdameritrade.com/job/st-louis/senior-specialist-ui-ux-lead/1121/6333455))

We're always happy to share opportunities we hear about; please let us know if you have any you'd like for us to pass along.

---

## FFL Updates

Please welcome our newest Research Engineer, [Alice Albrecht](https://www.linkedin.com/in/alice-albrecht-6379868/)!
(TODO: add brief bio and/or a note from Alice?)

Last year we had the opportunity to be a part of some great events; you can catch a video of Friederike's talk on The Realistic Promise of Smart Machines at Thornton Tomasetti, Inc.'s fifth annual AEC Technology Symposium and Hackathon [here](https://youtu.be/EexnY6G46Qs), and her PyData talk (picked up by [Data Science Weekly](https://www.datascienceweekly.org/newsletters/data-science-weekly-newsletter-issue-214)!) on Why your relationship is likely to last, or not (Local Interpretable Model-Agnostic Explanations) [here](https://youtu.be/Z3v2c_OysI4).

### Our new report: Semantic Recommendations

Many of us have wondered why a news website decides to highlight a particular article we have no interest in, or why we can't stop a movie streaming service from recommending a series of spy movies. Turns out most systems have no understanding of the things they are recommending. Classical algorithms work by recommending things to you because others similar to you have liked it. Aside from having no understanding of the content, these algorithms are unable to recommend new items because they do not know who has liked it before.                                
                                                                                                     
Our Semantic Recommendations report (coming soon!) explores the current state of recommendation systems, with a focus on how machines can better understand content. Armed with this newfound understanding, we look at how systems can bypass the cold-start problem and expand their utility well beyond traditional e-commerce use cases. The accompanying prototype is a book recommendation system based entirely on the descriptions of the books. Because it understands the content of books that are being recommended, the system can issue a recommendation with a description of any book, even one you make up yourself. Does it work? Find out when you read the report!                     

### Upcoming Webinar

Micha will be presenting a webinar for Cloudera on January 16th, entitled "Building a Better Recommendation System," based on our semantic recommendations report. If you'd like a sneak peek at the prototype and content of our new report, you can register [here](http://go.cloudera.com/semantic-recommendation-systems).

Thank you, as always, for reading!  We'd love to hear your thoughts - and questions! You can reach us anytime at subscribers@fastforwardlabs.com.

Looking forward to an amazing 2018,

-- The Cloudera Fast Forward Labs Team
