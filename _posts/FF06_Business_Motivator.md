## What is interpretability, and what is if for?
- Global: is the model, as a whole, understood well enough to trust it (or convince someone else to trust it)?
- Local: can the reason for a particular decision the model makes be explained?
- Proxy: does understanding how the model works help understand how the real phenomena being modeled work?

## Enhancing trust
Data scientists have established ways of measuring the performance of a model by validating it against their training data before releasing it into the 'wild'. But even if the model is not _overfitted_ to, or memorizing, the training data, it still can experience _leakage_ if it relies on features that have a problematic relationship with the phenomena the model is interested in. A risk model that suggests asthma sufferers are at low risk for death when hospitalized for pneumonia is an artifact of asthma patients being highly treatable for pneumonia when hospitalized, and _not_ an signal that they don't need hospitalization. Interpretability can help understand and communicate how a model relies on its inputs to produce a result.

## Satisfying Regulations
Interpretability can also help satisfy legal frameworks that regulate machine learning in particular applications. [or: For applications in which regulations on machine learning exist, interpretability is almost always required]. Because such regulations are often intended to prevent discriminatory or dangerous models, it is often necessary to prove that the model is not overfitted to attributes like gender, race, or other protected categories. In a regulated environment, it isn't enough to show that you trained your model on race-blind or gender-agnostic data. You have to be able to explain the model as it operates on 'live' data, and this is only possible if the model is interpretable.

Furthermore, even if an algorithm is used in an unregulated industry, other ethical or legal constraints might apply. Interpretability allows you to make a purposeful judgement about the way a model embeds biases from its training data before it is applied at scale, thus anticipating and avoiding legal or ethical jeopardy.

## Explaining Decisions and Improving the Model
