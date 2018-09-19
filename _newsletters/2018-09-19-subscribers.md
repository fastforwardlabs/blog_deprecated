---
slug: 2018-09-19-subscribers
layout: newsletter
---

Hello!  In this week's newsletter, Seth digs into the intersection of Spark and ML, and Justin reflects on what makes a true competitive advantage in the machine learning world.

---

## Apache Spark gets a machine learning makeover
_by [Seth](https://twitter.com/shendrickson16)_

### Machine learning on Spark: an abridged history

[Apache Spark](https://spark.apache.org/) - the cluster computing framework 
that's been throwing shade at MapReduce since 2011 - has always been a bit 
remarkable, because it bridged the divide between data engineering and data 
science. One of the great promises of Spark was that it would be easy, 
trivial almost, to scale machine learning and data science to arbitrarily 
large data. Seven years later, Spark has made its place in data science, but 
perhaps not in the way we originally hoped.

Spark's big contribution was that it delivered a very elegant API for dealing 
with distributed collections of data, termed _Resilient Distributed Datasets_ 
(RDDs). Compared to alternatives at the time, it was simple to use that API 
to write certain machine learning algorithms, and since those algorithms were 
built on RDDs; you got fault tolerance and scale for free. It wasn't long 
until a machine learning library built on RDDs was born: [MLlib](https://spark.apache.org/docs/latest/ml-guide.html). 

Implementing performant, scalable machine learning algorithms in MLlib wasn't 
*quite* as easy as just expressing the logic using RDD transformations, but in 
some cases it worked quite well. Spark, and by extension MLlib, work well 
when algorithms can be expressed in parallel, independent tasks that each 
work on independent chunks of data. Accordingly, MLlib has seen success and 
adoption with linear models, K-means clustering, decision trees, and some 
others. But some algorithms, most notably deep learning, are difficult to 
express using Spark. 

In comparison to linear models, optimizing deep learning algorithms over 
distributed collections requires frequent communication between tasks. 
Further, deep learning is _slow_, if you don't use a framework that has been 
heavily optimized for that exact use case. Tensorflow, PyTorch, MXNet, etc. 
all leverage accelerated hardware and heavily optimized C/C++ code to achieve 
reasonable efficiency. All this is to say that Spark and deep learning aren't 
a very good match.  So why are we talking about it?

Deep learning needs data (big data!) and that data often needs to be accessed 
through or pre-processed by Spark. That data is also messy and is probably 
stored across many datasets in many different storage platforms. Spark makes 
reading, aggregating, and joining these datasets less awful. So even if Spark 
isn't heavily optimized for machine learning, the data that feeds these 
algorithms often goes through Spark first. This reality led many developers 
to ponder, "what if we could combine the heavily optimized ML/DL frameworks 
into Spark?" And with that, the family of XOnSpark libraries came to be.

![]({{ site.github.url }}/images/editor_uploads/2018-09-19-194511-XOnSpark.png)

But Spark hasn't made it very easy to combine these other libraries, most of 
which are written in a combination of Python and C++, with Spark. There are
three main shortcomings:

* Moving data between Spark processes (JVM) and Python processes is inefficient
* Spark task scheduling doesn't take GPUs into account
* Deep learning tasks need to constantly communicate gradient/weight updates between them, which is a Spark anti-pattern

### Project Hydrogen makes Spark play nice with other ML frameworks

To address each of these issues, the open source community for Spark is 
undertaking a new initiative, dubbed _Project Hydrogen_, which is 
broken up into three main chunks, each designed to solve one of these 
shortcomings:

* [Barrier scheduling](https://issues.apache.org/jira/browse/SPARK-24374)
* [Accelerator aware scheduling](https://issues.apache.org/jira/browse/SPARK-24615)
* [Data interchange using Apache Arrow](https://issues.apache.org/jira/browse/SPARK-24579)

The goal of Project Hydrogen is to make it easy and efficient to build deep learning workflows that can run end to end in Spark. This is exciting!

Spark and deep learning can't ignore each other, and that probably won't 
change any time soon. Because of the current complexities, it's best to avoid 
distributing deep learning training when possible. But we're excited to 
see investment into scaling deep learning with Spark. There are so many great 
libraries for doing heavily optimized machine learning - PyTorch, Tensorflow, 
XGBoost, LightGBM - that it's hugely beneficial to be able to scale these 
up with Spark.

---

## The True Competitive Advantage in ML 
_by [Justin](https://twitter.com/JustinJDN)_

Data science, machine learning (ML), and AI are no longer just cute buzzwords.  Nearly all organizations, companies and governments now recognize the immense potential of AI-enabled products and services, and many of them have already made the very real investment of hiring employees with skills in these emerging fields.  

However, as is true with most things in data science, one size does not fit all!  Simply hiring a self-proclaimed data scientist or machine learning expert with advanced degrees isn't likely to fit the bill.  A successful machine learning application often requires looking at a business problem critically, crafting a creative technical solution to that problem, designing and executing (many) experiments to see if that solution is possible, and then (if so) developing a scalable way to integrate that solution into an application framework.  Expecting a single person to have all of these skills (and also to want to apply them all at the same time) is a bit much.  

Of course, the answer is to create a team full of highly competent people with creative, technical and product skills, who are all passionate about AI/ML, right?  Easier said than done!

It's becoming more and more clear that the true competitive advantage in AI/ML isn't some killer algorithm, or even a cutting-edge technology platform (complete with robust experimentation capabilities and slick visualizations); it's the ability to build, engage, and retain an awesome team.  

Much has been written on the best ways to structure data science organizations (DJ Patil even wrote [a book](https://g.co/kgs/W4irpa) on the subject!  But what are the roles that make up these prolific groups, and more importantly, how should leaders best apply the rare skills that each of these roles bring to the table?

In an article on the subject earlier this summer, Forbes describes [three critical roles](https://www.forbes.com/sites/forbestechcouncil/2018/06/04/getting-data-science-right-how-to-structure-data-science-teams-for-maximum-results/#1ded5fd3140b):  data scientists, data engineers, and machine learning engineers.  These roles and team structure are great for smaller but agile organizations seeking to uncover AI/ML use cases and then rapidly address them with scrappy solutions.

Hackernoon takes a [more detailed approach](https://blog.google/technology/ai/making-ai-work-for-everyone/) to describing AI/ML roles in an article describing the Top 10 Roles in AI and data science.  Staffing out a team or team(s) with these skills and responsibilities might be more appealing (and realistic) for a more mature department, especially when enterprise software engineering, compliance and/or regulatory requirements, are a major consideration.

Ultimately, there are no cookie-cutter AI/ML team structures, and thus no perfect roles.  But as the community of practice grows and enjoys more and more success, best practices have certainly emerged.  For example, here at [Cloudera Fast Forward Labs](https://www.cloudera.com/content/dam/www/marketing/resources/datasheets/cloudera_fast_forward_labs_datasheet.pdf.landing.html), we often work with our customers to help them discover the right AI/ML vision, team structure, core skills, and enabling technology necessary to reach their respective AI/ML goals--and beyond!

---

## CFFL Updates

* Shioulin will be speaking at [ODSC Europe](https://odsc.com/london) on Multi-task Learning, September 22nd in London.

* Friederike will be speaking at the [Data Science Salon](https://www.eventbrite.com/e/data-science-salon-nyc-tickets-40072527007) on September 27th here in NYC.

* and Hilary will speaking at [GraphConnect](https://neo4j.com/blog/hilary-mason-cloudera-stephen-ogrady-redmonk-keynote-graphconnect/) in NYC on September 20th.

As always, thank you for reading. We welcome your thoughts, feedback, and suggestions; please [drop us a note](mailto:cffl@cloudera.com) anytime!

All the best,

The Cloudera Fast Forward Labs Team
