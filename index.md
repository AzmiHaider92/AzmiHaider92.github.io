
# Azmi Haider

<img style="float: left; margin: 0px 20px 20px 0px; max-width: 270px;" src="/assets/profile.jpg" alt="Azmi A. Haider" width="50%" />

PhD researcher</strong> in computer vision and generative modeling (diffusion/flows, token-based implicit representations) at the University of Haifa, advised by [Dan Rosenbaum](https://danrsm.github.io/), studying generative models.
Before my PhD, I completed an M.Sc. (research) in computer science at the University of Haifa and a B.Sc. in electrical engineering at the Technion.  



<p style="clear: left;"></p>

I am interested in computational models of perception, 3D scene understanding, simulation-based inference and machine learning for scientific discovery. I mainly take generative approaches that model perception as a probabilistic inverse problem. 
- learning models of 3D scenes that can be used for probabilistic inference.
- learning continuous and discrete representations of continuous signals.
- amortizing simulation-based inference. 
- scientific dicovery using flexible probabilisit modeling of the data acquisition process.

I co-organised a workshop at NeurIPS 2019 titled "**Perception as Generative Reasoning: Structure, Causality, Probability**".  
See the [website](https://pgr-workshop.github.io) for all papers, invited talks and videos.

[Publications](https://scholar.google.com/citations?user=a6CNXV8AAAAJ&hl=en)

## Research
<img style="float: left; margin: 0px 20px 20px 0px; max-width: 200px;" src="/flownp.png" alt="FlowNP" width="35%" />
**Flow Matching Neural Processes** - In this work [OpenReview](https://openreview.net/forum?id=R8n2h7hzqS) (NeurIPS 2025) we introduce a Neural Process (NP) model based on Flow Matching.  The model is simple to implement, trains efficiently and allows parallel generation of target points with amortizing conditoining on context points.
This approach achieves state-of-the-art performance on benchmarks ranging from 1D functions to real-world weather data (ERA5).
<p style="clear: left;"></p><hr style="height:1px;">

<img style="float: left; margin: 0px 20px 20px 0px; max-width: 200px;" src="/seathru-nerf.png" alt="seathru-nerf" width="35%" />
**Underwater perception** - In collaboration with the School of Marine Sciences, I have worked on several projects on underwater perception problems. In [SeaThru-Nerf](https://sea-thru-nerf.github.io/) (CVPR 2023) we model underwater 3D scenes by adapting NeRF to scattering media rendering;
in [Osmosis](https://osmosis-diffusion.github.io/) (ECCV 2024) we tackle underwater image restoration using posterior sampling with an RGBD diffusion prior;
and in [Looking into the water](https://openreview.net/forum?id=4MKIaHbmGO) (NeurIPS 2025) we fix water refraction using a physics-informed neural field approach.
<p style="clear: left;"></p><hr style="height:1px;">

<img style="float: left; margin: 0px 20px 20px 0px; max-width: 200px;" src="/functa.png" alt="treating datapoints as functions" width="35%" />
**Functa: data as neural fields** - In these two papers, [arXiv](https://arxiv.org/abs/2201.12204) (ICML 2022) and [arXiv](https://arxiv.org/abs/2302.03130) (ICLR Neural Fields workshop 2023), we explore the representation of data points such as images, manyfolds, 3D shapes and scense using neural fields (aka implicit neural representations). Many standard data representations are a discretization of an underlying continuous signal, and can be more efficiently modeled as functions. We develop a method to map samples of datasets to a functional represention, and demonstrate the benefits of training generative models or classifiers on this representation.
<p style="clear: left;"></p><hr style="height:1px;">

<img style="float: left; margin: 0px 20px 20px 0px; max-width: 200px;" src="/protein.png" alt="protein structure" width="35%" />
**Dynamic Protein Structure** - Understanding the 3D structure of proteins is a fundamental problem in biology, with the potential of unlocking a better understanding of the various functions of proteins in biological mechanisms, and accelerating drug discovery.  I am studying models of protein structure that explicitly reason in 3D space, predicting structure using probabilistic inference methods.
In this work [arXiv](https://arxiv.org/abs/2106.14108) (NeurIPS Structured Biology workshop 2021) we propose an inverse graphics approach based on VAEs to model the distribution of protein 3D structure in atom space, using cryo-EM image data.
<p style="clear: left;"></p><hr style="height:1px;">

<img style="float: left; margin: 0px 20px 20px 0px; max-width: 200px;" src="/gqn_attention.gif" alt="3D scene understanding with Generative Query Networks (GQN)" width="35%" />
**3D scene understanding with Generative Query Network (GQN)** - In this paper ([Science](http://science.sciencemag.org/content/360/6394/1204)) we show how implicit scene understanding can emerge from training a model to predict novel views of random 3D scenes ([video](https://youtu.be/G-kWNQJ4idw)). In a follow-up paper [arXiv](https://arxiv.org/abs/1807.03149) (NeurIPS Bayesian ML workshop 2018) we extend the model to use attention over image patches, improving its capacity to model rich environments like Minecaft. We study the camera pose estimation problem comparing an inference method with a generative model to a direct discriminative approach ([video](https://youtu.be/iHEXX5wXbCI), [datasets](https://github.com/deepmind/gqn-datasets)).   
<p style="clear: left;"></p><hr style="height:1px;">

<img style="float: left; margin: 0px 20px 20px 0px; max-width: 200px;" src="/np.gif" alt="Neural processes" width="35%" />
**Neural processes** - We introduce conditional neural processes [arXiv](https://arxiv.org/abs/1807.01613) (ICML 2018) and neural processes [arXiv](https://arxiv.org/abs/1807.01622) (ICML Bayesian ML workshop), that are trained to predict values of functions given a context of observed function evaluations. These models provide a general framework for dealing with uncertainty, demonstrating fast adaptivity, and allowing a smooth transition between a prior model that is not conditioned on any data, and  flexible posterior models which can be conditioned on more and more data. In follow-up work we extend the model with an attention mechanism over context points ([arXiv](https://arxiv.org/abs/1901.05761)) and study different training objectives ([pdf](http://bayesiandeeplearning.org/2018/papers/92.pdf)).
<p style="clear: left;"></p><hr style="height:1px;">

## Contact

<img id="contact" style="float: left; margin: 0px 20px 20px 0px; max-width: 150px;" src="/dan_rosenbaum.png" alt="Dan Rosenbaum" width="15%" />
danro@cs.haifa.ac.il 

[twitter.com/danrsm](https://twitter.com/danrsm)
