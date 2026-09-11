+++
title = "Overview"
description = "I use radio observations, statistical inference, and end-to-end analysis pipelines to study the evolution of cosmic structure using 21 cm Line Intensity Mapping."
template = "simple-section.html"

[extra]
eyebrow = "Science"
page_class = "research-page"
+++

<p class="research-intro">My research connects instruments to cosmology: calibrating radio telescopes, flagging human-made interference, removing foreground emission, and extracting and interpreting the weak 21 cm cosmological signal that remains. The projects below cover my current and recent work.</p>

<nav class="section-jump" aria-label="On this page">
  <a href="#lim">Line intensity mapping</a>
  <a href="#chime-auto-power">CHIME</a>
  <a href="#chord">CHORD</a>
  <a href="#forest">21 cm forest</a>
  <a href="#ugmrt">uGMRT</a>
  <a href="#lensing">Lensing</a>
</nav>

<section id="lim" class="research-prose">

## Line intensity mapping

I want to understand how a nearly smooth early Universe grew into the complex web of structure we see today. [Line intensity mapping](https://arxiv.org/abs/1903.04496) is an efficient way to attack that question. Rather than resolving individual galaxies, we make low-resolution maps of the sky at frequencies corresponding to atomic or molecular lines emitted in galaxies and in the intergalactic medium, and then measure the statistical fluctuations of the combined radiation field. A single survey covers an enormous cosmic volume, which is exactly the statistical power that precision cosmology needs.

My focus is the [21 cm line of neutral hydrogen](https://arxiv.org/abs/astro-ph/9608010), the hyperfine transition that traces atomic gas from the present day back to *z* ∼ 30. Measuring its auto-correlation power spectrum maps the distribution of matter and gives access to the [baryon acoustic oscillation](https://arxiv.org/abs/1201.2434) scale, the standard ruler that fixes the expansion history and therefore constrains the nature of [dark energy](https://en.wikipedia.org/wiki/Dark_energy).

The obstacle is dynamic range. Galactic synchrotron emission and extragalactic point sources are four to five orders of magnitude brighter than the 21 cm signal, and that foreground is coupled to a chromatic instrument response through the primary beam, mutual coupling between elements, and time- and frequency-dependent gains. Separating the two is an instrumental problem as much as an astrophysical one, and it is where most of my effort goes. I am currently doing this with two instruments at the Dominion Radio Astrophysical Observatory.

</section>

{% research(id="chime-auto-power", meta="CHIME · Post-reionization intensity mapping", title="The first cosmological 21 cm auto-power detection", image="chime-auto-power.png", alt="Measured CHIME 21 cm auto-power spectrum with red data points, a black best-fit curve, blue imaginary-component points, and residuals", caption="CHIME auto-power spectrum measurement. The black line is the best-fit model to the data and bottom panel shows the residual.") %}
The Canadian Hydrogen Intensity Mapping Experiment, [CHIME](https://chime-experiment.ca/), is a transit radio interferometer at the [Dominion Radio Astrophysical Observatory](https://nrc.canada.ca/en/research-development/nrc-facilities/dominion-radio-astrophysical-observatory-research-facility) near Penticton, British Columbia. Four 20 m × 100 m cylindrical reflectors, with no moving parts, map the entire northern sky every day between 400 and 800 MHz. That band corresponds to neutral hydrogen at redshifts 0.8 to 2.5, which places CHIME squarely at the epoch where dark energy begins to dominate the expansion. It has been collecting data since 2018.

As science lead within the collaboration, I designed and built the analysis pipeline that delivered the first detection of the cosmological 21 cm auto-power spectrum from CHIME maps alone, using 94 nights of 2019 data. The pipeline combines adaptive RFI mitigation for narrow-band and broadband interference, achromatic beamforming that holds the beam properties fixed across the band, foreground filtering applied before time-averaging to limit spectral leakage, and a comprehensive suite of validation tests.

The measurement reaches **12.4σ at z ≈ 1.16** over 0.4 ≲ *k* ≲ 1.5 *h* Mpc⁻¹, independently confirmed in two redshift sub-bands at 8.6σ and 9.1σ. Every validation test returned an acceptable p-value, which is what separates a detection from a systematic artefact. A companion interpretation paper connects the measurement to the abundance and clustering of neutral hydrogen and finds significant tension with IllustrisTNG, driven by weaker non-linear redshift-space clustering in the simulations than in the data.

[Detection paper (arXiv:2511.19620)](https://arxiv.org/abs/2511.19620) · [Interpretation paper (arXiv:2603.25680)](https://arxiv.org/abs/2603.25680)
{% end %}

{% research(id="chord", meta="CHORD · Instrument commissioning", title="Calibrating the next generation of wideband radio surveys", image="chord-2026.jpg", alt="Aerial view of the CHORD dishes and CHIME cylinders at the Dominion Radio Astrophysical Observatory", caption="CHORD at DRAO with 128 of its planned 512 antennas, 27 August 2026. Image: Bryan Schellenberg.", reverse=true) %}
The Canadian Hydrogen Observatory and Radio-transient Detector, [CHORD](https://www.chord-observatory.ca/), is CHIME's successor, under construction alongside it at DRAO. It will consist of 512 six-metre dishes in a compact, highly redundant array, with deep reflectors (f/D = 0.21) and ultra-wideband receivers covering 300 to 1500 MHz. Measured by bandwidth × field of view × sensitivity, CHORD will be roughly an order of magnitude more powerful than CHIME and the world-leading facility of its type. The first 128 antennas are on the ground and the pathfinder is being commissioned.

I am a member of CHORD's calibration and intensity-mapping group and its HI galaxy survey group. My work covers commissioning data, characterising the radio-frequency environment at the site, sky-based and redundant calibration, and the analysis infrastructure that turns raw measurements into cosmological maps. Getting the calibration right at this stage is what will determine whether CHORD can reach the linear BAO scales that CHIME cannot.

[CHORD project](https://www.chord-observatory.ca/) · [CHORD overview (arXiv:2607.09374)](https://arxiv.org/abs/2607.09374)
{% end %}

{% research(id="forest", meta="Cosmic dawn · 21 cm absorption", title="A forest without trees: neutral gas at z ≈ 5.6", image="forest-spectrum.png", alt="Example residual 21 cm Forest spectrum versus observed frequency and comoving distance, showing absorption signal and simulated noise", caption="An example noisy 21 cm Forest spectrum, illustrating the absorption structure targeted by the one-dimensional power-spectrum analysis.") %}
The **21 cm Forest** is a set of narrow absorption features imprinted by neutral intergalactic hydrogen on the spectra of distant radio sources. Unlike large-scale 21 cm emission experiments, it probes small-scale structure and the thermal state of the gas along an individual line of sight.

We use archival uGMRT observations along the line of sight to a radio-loud QSO at a redshift of about 5.8 and estimate the one-dimensional 21 cm Forest power spectrum to constrain the thermal state of the neutral intergalactic medium at this redshift.  This approach shows that useful physical constraints can be extracted statistically from the noise-dominated spectrum and even when individual absorption features are difficult to identify. We now have another 50 hours of uGMRT data for this source, and work is underway to analyze it.  I am co-leading the work and was mainly involved in data analysis and proposal writing.

[Forest without trees is still fruitful (arXiv:2607.15341)](https://arxiv.org/abs/2607.15341)
{% end %}

{% research(id="ugmrt", meta="uGMRT · Foregrounds and post-reionization cosmology", title="From calibrated visibilities to multi-redshift 21 cm limits", image="Upper_lim.jpg", alt="Two-panel scientific figure showing uGMRT power-spectrum sensitivity and an upper limit on the 21 cm brightness-temperature power spectrum", caption="The uGMRT analysis placed the first multi-redshift interferometric limits on the post-reionization 21 cm signal at z = 1.96-3.58.", reverse=true) %}
During my PhD, I developed a complete wideband calibration, RFI-flagging, imaging, and power-spectrum pipeline for the upgraded Giant Metrewave Radio Telescope. I used deep observations of the ELAIS-N1 field to characterize diffuse Galactic synchrotron emission and extragalactic foreground populations.

That work produced the first multi-redshift interferometric upper limits on the post-reionization 21 cm power spectrum at **z = 1.96-3.58**, constraining the product of neutral-hydrogen abundance and bias. I also quantified how missing frequency channels caused by RFI flagging affect cosmological power-spectrum estimation.

[21 cm limits (ApJL)](https://doi.org/10.3847/2041-8213/abd17a) · [Missing spectral information (ApJ)](https://doi.org/10.3847/1538-4357/ac5cc5) · [Calibration pipeline](https://github.com/Arnab-half-blood-prince/GMRT_DI_Calibration_pipeline)
{% end %}

{% research(id="lensing", meta="Galaxy evolution · Strong gravitational lensing", title="Detecting neutral hydrogen in a distant galaxy", image="spectrum_im.jpg", alt="Scientific plot of the detected redshifted HI 21 cm emission spectrum from a strongly lensed galaxy", caption="The detected HI 21 cm emission line from a strongly lensed star-forming galaxy at z ≈ 1.3.") %}
The 21 cm emission line is a direct tracer of a galaxy's neutral atomic gas, the reservoir from which new stars form. At high redshift the line is extremely faint, making detections from individual galaxies exceptionally difficult with present-day radio telescopes.

Strong gravitational lensing solves this. A foreground mass concentration magnifies the weak emission from a background source, boosting the signal by factors of ten to a hundred and bringing galaxies at *z* > 1 within reach of existing telescopes. Using the uGMRT, we reported the first 5σ detection of HI 21 cm emission from a star-forming galaxy at **z ≈ 1.3**, magnified by an early-type elliptical lens at *z* ≈ 0.13.

The measured atomic-to-stellar mass ratio, *M*<sub>HI</sub>/*M*<sub>∗</sub> ∼ 2.4, is far above the value seen in local star-forming galaxies (∼0.35), direct evidence that gas reservoirs have been depleted since cosmic noon. The detection needed only a modest amount of telescope time, which means the approach scales: galaxy clusters, with their much larger Einstein radii, are the natural next targets, and SKA-Mid should eventually reach more than 10⁴ lensed HI galaxies.

[Read the paper (MNRAS)](https://doi.org/10.1093/mnras/stac3696) · [arXiv:2301.05987](https://arxiv.org/abs/2301.05987)
{% end %}

The complete and most current publication list is available through [NASA ADS](https://ui.adsabs.harvard.edu/search/q=docs(library%2F0M0G3dsjSNeXotLDUmsR6Q)&sort=date%20desc%2C%20bibcode%20desc&p_=0).
