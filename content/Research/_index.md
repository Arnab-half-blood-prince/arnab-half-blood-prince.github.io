+++
title = "Research"
description = "I use radio observations, statistical inference, and end-to-end analysis pipelines to study neutral hydrogen and the evolution of cosmic structure."
template = "simple-section.html"

[extra]
eyebrow = "Science"
page_class = "research-page"
+++

<p class="research-intro">My research connects instruments to cosmology: calibrating radio telescopes, suppressing interference and foreground emission, validating weak-signal measurements, and interpreting the recovered 21 cm signal. The projects below highlight my current and recent work.</p>

{% research(id="chime-auto-power", meta="CHIME · Post-reionization intensity mapping", title="The first cosmological 21 cm auto-power detection", image="chime-auto-power.png", alt="Measured CHIME 21 cm auto-power spectrum with red data points, a black best-fit curve, blue imaginary-component points, and residuals", caption="CHIME auto-power measurement. The imaginary component and lower residual panel provide stringent null tests.") %}
As science lead within the CHIME collaboration, I designed and built the analysis that delivered the first detection of the cosmological 21 cm auto-power spectrum from CHIME maps alone. The pipeline combines adaptive RFI mitigation, achromatic beamforming, foreground filtering, and a comprehensive validation suite.

The measurement reaches **12.4σ at z ≈ 1.16**. I also co-led the companion interpretation work, which connects the measurement to the abundance and clustering of neutral hydrogen and compares it with IllustrisTNG.

[Detection paper (arXiv:2511.19620)](https://arxiv.org/abs/2511.19620) · [Interpretation paper (arXiv:2603.25680)](https://arxiv.org/abs/2603.25680)
{% end %}

{% research(id="chord", meta="CHORD · Instrument commissioning", title="Calibrating the next generation of wideband radio surveys", image="chord-2026.jpg", alt="Aerial view of the CHORD dishes and CHIME cylinders at the Dominion Radio Astrophysical Observatory", caption="CHORD at DRAO with 128 of its planned 512 antennas, 27 August 2026. Image: Bryan Schellenberg.", reverse=true) %}
CHORD will combine 512 six-metre dishes, ultra-wideband receivers, and a highly redundant configuration to survey neutral hydrogen across a large fraction of cosmic history. It is being built alongside CHIME at the Dominion Radio Astrophysical Observatory near Penticton, British Columbia.

I am a member of CHORD's calibration and intensity-mapping group and its HI galaxy survey group. My current work focuses on commissioning data, the radio-frequency environment, sky-based calibration, and the analysis infrastructure needed to turn the instrument's measurements into robust cosmological maps.

[CHORD project](https://www.chord-observatory.ca/) · [CHORD overview (arXiv:2607.09374)](https://arxiv.org/abs/2607.09374)
{% end %}

{% research(id="forest", meta="Cosmic dawn · 21 cm absorption", title="A forest without trees: neutral gas at z ≈ 5.6", image="forest-spectrum.png", alt="Example residual 21 cm Forest spectrum versus observed frequency and comoving distance, showing absorption signal and simulated noise", caption="An example noisy 21 cm Forest spectrum, illustrating the absorption structure targeted by the one-dimensional power-spectrum analysis.") %}
The **21 cm Forest** is a set of narrow absorption features imprinted by neutral intergalactic hydrogen on the spectra of distant radio sources. Unlike large-scale 21 cm emission experiments, it probes small-scale structure and the thermal state of the gas along an individual line of sight.

I co-led work using the one-dimensional 21 cm Forest power spectrum to constrain the thermal state of the neutral intergalactic medium at **z ≈ 5.6**. This approach shows that useful physical constraints can be extracted statistically even when individual absorption features are difficult to identify.

[Forest without trees is still fruitful (arXiv:2607.15341)](https://arxiv.org/abs/2607.15341)
{% end %}

{% research(id="ugmrt", meta="uGMRT · Foregrounds and post-reionization cosmology", title="From calibrated visibilities to multi-redshift 21 cm limits", image="Upper_lim.jpg", alt="Two-panel scientific figure showing uGMRT power-spectrum sensitivity and an upper limit on the 21 cm brightness-temperature power spectrum", caption="The uGMRT analysis placed the first multi-redshift interferometric limits on the post-reionization 21 cm signal at z = 1.96-3.58.", reverse=true) %}
During my PhD, I developed a complete wideband calibration, RFI-flagging, imaging, and power-spectrum pipeline for the upgraded Giant Metrewave Radio Telescope. I used deep observations of the ELAIS-N1 field to characterize diffuse Galactic synchrotron emission and extragalactic foreground populations.

That work produced the first multi-redshift interferometric upper limits on the post-reionization 21 cm power spectrum at **z = 1.96-3.58**, constraining the product of neutral-hydrogen abundance and bias. I also quantified how missing frequency channels caused by RFI flagging affect cosmological power-spectrum estimation.

[21 cm limits (ApJL)](https://doi.org/10.3847/2041-8213/abd17a) · [Missing spectral information (ApJ)](https://doi.org/10.3847/1538-4357/ac5cc5) · [Calibration pipeline](https://github.com/Arnab-half-blood-prince/GMRT_DI_Calibration_pipeline)
{% end %}

{% research(id="lensing", meta="Galaxy evolution · Strong gravitational lensing", title="Detecting neutral hydrogen in a distant galaxy", image="spectrum_im.jpg", alt="Scientific plot of the detected redshifted HI 21 cm emission spectrum from a strongly lensed galaxy", caption="The detected HI 21 cm emission line from a strongly lensed star-forming galaxy at z ≈ 1.3.") %}
The 21 cm emission line is a direct tracer of a galaxy's neutral atomic gas, the reservoir from which new stars form. At high redshift the line is extremely faint, making detections from individual galaxies exceptionally difficult with present-day radio telescopes.

Using the natural magnification supplied by strong gravitational lensing, we reported the first detection of HI 21 cm emission from a star-forming galaxy at **z ≈ 1.3**. The measurement demonstrated how lensing can extend direct atomic-gas studies to much earlier cosmic times.

[Read the paper (MNRAS)](https://doi.org/10.1093/mnras/stac3696) · [arXiv:2301.05987](https://arxiv.org/abs/2301.05987)
{% end %}

The complete and most current publication list is available through [NASA ADS](https://ui.adsabs.harvard.edu/search/q=docs(library%2F0M0G3dsjSNeXotLDUmsR6Q)&sort=date%20desc%2C%20bibcode%20desc&p_=0).
