// CosmicNotes learning content.
// Source of truth: A415 Lecture 2 (29 slides, Dr. Reham El-Kholy).
// Supporting reference: Felix J. Lockman, Radio Astronomy: Observing the
// Invisible Universe (The Great Courses, 2017). Book page references are given
// as PDF pages, with the printed page in parentheses (printed = PDF − 8).
// Lecture dates and terminology are kept exactly; differences from the book are
// flagged explicitly in sourceNote rather than silently replaced.

export const STUDY_KEY = 'cosmicnotes.study.v1';
export const QUIZ_KEY = 'cosmicnotes.quiz.v1';

export const conceptExtra = {
  root: {
    page: '1–28',
    definition: 'Radio astronomy studies the universe through radio waves; this lecture follows how radio observations reveal interstellar hydrogen and the structure of galaxies.',
    explanation: 'Lecture 2 begins with the dust-obscured Milky Way and Jan Oort’s rotation work, then follows van de Hulst’s prediction of a radio spectral line, the 21-cm hydrogen line, the post-war detection, radio-telescope hardware, Doppler mapping of galactic gas, galaxy classification and gas content, and the M33 rotation-curve discrepancy that introduces dark matter.',
    reasoning: 'Dust blocks visible light but not long radio waves, so a radio line from a common atom can penetrate the Galactic plane. A spectral line also carries velocity information through the Doppler shift, turning gas clouds into tracers of rotation and mass.',
    significance: 'The lecture links atomic physics (the hydrogen spin transition) to Galactic structure, galaxy evolution and the dark-matter problem — one line used as a tool for mapping, motion and mass.',
    keyValues: ['Dust hides the optical Milky Way', '21-cm line at 1420 MHz / 21 cm', 'Doppler mapping of Galactic gas', 'M33 rotation curve → dark matter'],
    sources: ['Lecture 2, slides 1–28', 'Book: Lecture 1, PDF 13–15 (pp. 5–7)', 'Book: Lectures 4–6, PDF 47–80', 'Book: Lecture 9, PDF 96–111'],
    studyQuestion: 'How does Lecture 2 connect a single spectral line to the structure and mass of the Milky Way?',
    studyAnswer: 'The chain is: dust hides the Galactic plane from optical telescopes → radio waves pass through it → van de Hulst predicts a line from common hydrogen → the 21-cm line is detected → mapping it shows where the gas is → its Doppler shift gives velocities → the velocity field reveals differential rotation and the warp → rotation curves measure enclosed mass → the M33 curve requires unseen mass, introduced as dark matter.',
    takeaway: 'One spectral line becomes a tool for mapping gas, measuring motion and weighing galaxies.'
  },

  history: {
    page: '2–9',
    definition: 'The path from the dust-obscured Milky Way to the prediction and detection of interstellar hydrogen’s radio line.',
    explanation: 'Slide 3 contrasts optical and radio views of a dusty Milky Way. Slide 4 introduces Jan Oort, the Oort Cloud and Milky Way rotation, asking “But HOW?”. Slide 5 distinguishes continuous emission, which spans a wide frequency range, from discrete emission, which is confined to a narrow range — the category that includes spectral lines. Slide 6 states van de Hulst’s PhD question about a radio spectral line; slide 7 gives the answer (atomic hydrogen, 1420 MHz / 21 cm) and notes that the war and German occupation interrupted the work; slide 8 resumes after the war with observations in the Netherlands, Australia and the US. Slide 9 maps Galactic hydrogen across the sky.',
    reasoning: 'Visible light is blocked by dust grains, but a 21-cm wave is far larger than the grains and passes through. A discrete line is also narrow in frequency, so a small Doppler shift can be measured and converted into velocity.',
    significance: 'This sequence established neutral hydrogen as the first radio tracer of the Milky Way’s gas and opened the radio window on Galactic structure.',
    keyValues: ['1944: line predicted', '1950: lecture’s post-war date', '3 countries/teams', '1420 MHz / 21 cm', 'continuous vs discrete spectra'],
    sources: ['Lecture 2, slides 2–9', 'Book: Lecture 4, PDF 48–54 (pp. 40–46)', 'Book: Lecture 1, PDF 14–15 (pp. 6–7)'],
    sourceNote: 'Lecture 2 (slide 8) dates the post-war work to 1950. The book dates the Ewen–Purcell detection to 1951 and places the Dutch equipment fire in early 1950 (PDF 53). The lecture’s date is kept here; the book’s date is reported only as a source note.',
    studyQuestion: 'Why did radio observations succeed where optical observations of the Milky Way failed?',
    studyAnswer: 'The Milky Way’s plane is filled with dust that blocks visible starlight. Radio waves at 21 cm are hundreds of thousands of times longer than typical dust grains, so they travel through the dust rather than being blocked. The narrow 21-cm line also allows precise Doppler measurements, which optical observations of the dust-obscured plane could not provide across the whole Galaxy.',
    takeaway: 'Radio astronomy opened the Galactic plane by seeing through dust and measuring gas velocities.'
  },

  hydrogen: {
    page: '6–9, 18',
    definition: 'Neutral atomic hydrogen produces a radio line at 1420 MHz, a wavelength of about 21 cm.',
    explanation: 'Slides 7 and 18 show the proton–electron spin states. In the excited state the spins are parallel; in the ground state they are anti-parallel. The transition emits a photon — the 21-cm line. The lecture pairs 1420 MHz with 21 cm and notes that hydrogen is distributed throughout the Galaxy, so mapping it reveals large-scale structure.',
    reasoning: 'The proton and electron behave like tiny magnets. The parallel configuration has slightly more energy, and when it flips to anti-parallel the atom emits a photon whose frequency is fixed by the energy difference. Because the line is narrow and weak but pervasive, it traces neutral gas over huge path lengths.',
    significance: 'The line makes neutral hydrogen — the raw material of stars — observable through dust across the entire Milky Way and in other galaxies.',
    keyValues: ['1420 MHz', '21 cm', 'parallel = excited', 'anti-parallel = ground'],
    sources: ['Lecture 2, slides 7, 9, 18', 'Book: Lecture 4, PDF 52 (p. 44)', 'Book: Lecture 6, PDF 71 (p. 63)'],
    studyQuestion: 'Why does neutral hydrogen emit at 1420 MHz, and why is that line useful?',
    studyAnswer: 'The electron and proton each have spin. When their spins are parallel the atom is in a slightly higher-energy state; a flip to the anti-parallel ground state emits a photon at 1420 MHz (21 cm). The line is useful because neutral hydrogen is abundant, the line passes through dust, and its narrow frequency lets astronomers measure Doppler velocities of gas clouds.',
    takeaway: 'A tiny spin flip in hydrogen produces a Galaxy-wide radio beacon.'
  },

  telescopes: {
    page: '11–16',
    definition: 'A radio telescope collects radio waves with a dish, concentrates them at a focus, and converts them into a measurable signal.',
    explanation: 'Slide 12 shows the signal path: the feed leads to a mixer, amplifier and detector, with λ and λ/4 features labelled at the feed. Slide 13 distinguishes prime focus from a secondary reflector, horn or receiver. Slide 15 uses a parabola (focus F, directrix L) to show why parallel rays converge. Slide 14 shows amplification, noise and mixing hardware; slide 16 shows a double antenna used to discuss polarization.',
    reasoning: 'A large aperture intercepts more power; the shaped dish makes all paths to the focus equal so the wave arrives in phase. The weak current from the feed must be amplified, but amplifiers add their own blackbody noise, so receivers are cooled and the aperture is made as large as practical. Mixing shifts the signal to a convenient frequency before detection.',
    significance: 'Sensitivity and angular resolution both depend on the telescope; the hardware chain determines whether the faint 21-cm signal can be measured at all.',
    keyValues: ['λ/4 probe', 'prime focus', 'amplifier + mixer + detector', 'large aperture'],
    sources: ['Lecture 2, slides 11–16', 'Book: Lecture 5, PDF 60–69 (pp. 52–61)'],
    studyQuestion: 'Trace a radio wave from the sky to a measured signal in a radio telescope.',
    studyAnswer: 'The dish collects the wave and reflects it to the focus, where a probe converts the electric field into a small current. The signal is amplified, mixed down to a convenient frequency, and passed to a detector that measures power. Noise from the receiver is a limiting factor, which is why systems are cooled and why a larger aperture is valuable.',
    takeaway: 'A radio telescope is a chain: collect, focus, convert, amplify, mix and detect.'
  },

  mapping: {
    page: '17–22',
    definition: 'Mapping the hydrogen sky combines telescope resolution with Doppler shifts to trace gas across the Milky Way.',
    explanation: 'Slide 17 opens the section. Slide 19 asks what it takes to block a wave and names wavelength, aperture and beamwidth. Slide 20 introduces blueshift and redshift with the Doppler relation; slides 21–22 use the velocity field to study differential rotation and the Galactic warp.',
    reasoning: 'A telescope averages the sky over its beamwidth, set by wavelength divided by aperture. The 21-cm line is narrow, so velocity can be measured along each line of sight. A rotation model then converts velocity into distance, although the near/far ambiguity means one velocity can correspond to two positions.',
    significance: 'This is how a set of spectra becomes a three-dimensional map of Galactic gas and a picture of the Galaxy’s rotation and warp.',
    keyValues: ['beamwidth ∝ λ / aperture', '230 million-year orbit', '28,000 light-years', '250 km/s (book)'],
    sources: ['Lecture 2, slides 17–22', 'Book: Lecture 6, PDF 73–79 (pp. 65–71)'],
    studyQuestion: 'How do radio astronomers turn a 21-cm map into a picture of the Milky Way’s structure?',
    studyAnswer: 'Measure the line’s intensity and Doppler shift in every direction: beamwidth limits the angular detail, while the velocity is compared with a rotation model to estimate distance. Combining sight lines reveals the hydrogen layer, its rotation and its warp; the detailed map and rotation are covered in the child cards.',
    takeaway: 'Intensity gives location on the sky; Doppler shift adds the third dimension.'
  },

  doppler: {
    page: '20–22',
    definition: 'The Doppler effect is the shift in observed frequency caused by motion along the line of sight.',
    explanation: 'Slide 20 labels the approaching side “Blueshift” and the receding side “Redshift” and gives the frequency–velocity relation. Slide 21 applies it to differential rotation; slide 22 connects the same gas mapping to the Galactic warp.',
    reasoning: 'Motion toward the observer compresses the wave, raising the observed frequency and shortening the wavelength; motion away stretches it. The fractional shift is proportional to the line-of-sight velocity divided by the speed of light, so a precise rest frequency is needed to interpret the measurement.',
    significance: 'Doppler shifts turn the 21-cm line into a velocity probe, which is the basis for mapping rotation, measuring mass and identifying warp motions.',
    keyValues: ['blueshift = approaching', 'redshift = receding', 'transverse motion = no shift'],
    equations: [
      { expr: '(ν₀ − ν) / ν₀ = V / c', note: 'Slide 20. ν₀ is the rest frequency, ν the observed frequency, V the line-of-sight velocity and c the speed of light.' },
      { expr: 'V = c (ν₀ − ν) / ν₀', note: 'Slide 20, rearranged for the velocity.' }
    ],
    sources: ['Lecture 2, slides 20–22', 'Book: Lecture 4, PDF 50–51 (pp. 42–43)', 'Book: Lecture 6, PDF 75–77 (pp. 67–69)'],
    studyQuestion: 'How does a measured frequency shift become a velocity?',
    studyAnswer: 'The rest frequency ν₀ is known from the atom. The observed frequency ν is measured in the spectrum. Their fractional difference, (ν₀ − ν)/ν₀, equals V/c, so multiplying by the speed of light gives the line-of-sight velocity. The sign tells whether the gas approaches (blueshift) or recedes (redshift); motion across the line of sight produces no shift.',
    takeaway: 'A tiny frequency shift is a direct measurement of motion along the line of sight.'
  },

  galaxies: {
    page: '23–26',
    definition: 'Galaxies are classified by shape, and their gas content connects them to evolution and star formation.',
    explanation: 'Slide 24 shows a gallery of galaxy images. Slide 25 presents Edwin Hubble’s classification scheme — ellipticals E0–E7, S0, spirals Sa–Sc and barred spirals SBa–SBc. Slide 26 links gas and galaxies through galactic evolution, atmosphere versus ISM, and stellar formation. Slide 10 illustrates dark cloud nurseries and molecular species.',
    reasoning: 'Morphology correlates with gas content: ellipticals have little cool gas, spirals retain more, and some irregulars are gas-dominated. Gas is the reservoir for star formation, so the classification becomes a statement about a galaxy’s past and future star formation.',
    significance: 'Radio measurements of hydrogen connect the visual Hubble sequence to the physical state of a galaxy’s interstellar medium.',
    keyValues: ['E0–E7', 'S0', 'Sa–Sc', 'SBa–SBc', 'ISM'],
    sources: ['Lecture 2, slides 23–26', 'Book: Lecture 9, PDF 97–102 (pp. 89–94)', 'Book: Lecture 21, PDF 233–238 (pp. 225–230)'],
    sourceNote: 'The book calls the diagram the “Hubble sequence” (PDF 100); the lecture calls it “Hubble’s tuning fork”. The lecture term is kept. The specific molecules on slide 10 (propanal, ketenimine, cyanoformaldehyde, C4H−) are not named in the inspected book pages, which discuss OH, CO and formaldehyde instead.',
    studyQuestion: 'Why does hydrogen content matter for classifying and understanding galaxies?',
    studyAnswer: 'The amount of neutral hydrogen changes along Hubble’s sequence: ellipticals have very little, spirals have a fair amount, and some irregulars are dominated by gas. Because gas fuels star formation, this trend links the visual classification to a galaxy’s evolutionary state and to the differences between a planetary atmosphere and a galaxy’s interstellar medium.',
    takeaway: 'Galaxy shape is a visible clue to how much gas — and therefore how much future star formation — a galaxy holds.'
  },

  mass: {
    page: '27–28',
    definition: 'Galaxy masses can be estimated by counting matter or from gravitational motion; the M33 rotation curve exposes a large discrepancy.',
    explanation: 'Slide 27 contrasts counting visible matter with gravitational mass estimates and introduces the M33 rotation curve; slide 28 presents measurement error, gravity and dark matter as possible explanations for the discrepancy.',
    reasoning: 'A rotation curve measures the mass inside each radius through M = rV²/G. If the visible stars, gas and dust were the whole mass, the outer curve should fall; it does not, so the lecture examines measurement systematics and gravity before invoking dark matter.',
    significance: 'This is the lecture’s route to dark matter: a radio rotation curve turns an unexpected velocity into a mass problem.',
    keyValues: ['M = rV²/G', 'M33', '300% discrepancy', '~90% dark matter (book)'],
    equations: [
      { expr: 'M = r V² / G', note: 'Slide 27. M is the mass interior to radius r, V the rotation velocity, r the radius and G the gravitational constant.' }
    ],
    sources: ['Lecture 2, slides 27–28', 'Book: Lecture 9, PDF 103–110 (pp. 95–102)', 'Book: Lecture 20, PDF 228–231 (pp. 220–223)'],
    studyQuestion: 'How does a rotation curve reveal mass that we cannot see?',
    studyAnswer: 'The lecture contrasts counting visible matter with gravitational mass estimates. M33’s rotation curve requires more mass at large radii than the visible matter provides; the lecture considers measurement error and alternative gravity before introducing dark matter. The detailed evidence is in the M33 rotation-curve and dark-matter cards.',
    takeaway: 'The M33 rotation curve exposes mass that is not visible.'
  },

  'history-oot': {
    page: '4',
    definition: 'Jan Oort is introduced through the Oort Cloud and the rotation of the Milky Way.',
    explanation: 'Slide 4 asks who Jan Oort was, names the Oort Cloud, and links him to Milky Way rotation with the question “But HOW?”. The lecture uses this as motivation for measuring Galactic motion.',
    reasoning: 'Oort had used optical spectral lines to study rotation in the solar neighbourhood, but dust limited how far he could see. A radio line from hydrogen promised a way to measure the whole Galaxy.',
    significance: 'Oort’s question frames the lecture: how can we measure the rotation of a Galaxy we are inside and cannot see clearly?',
    keyValues: ['Oort Cloud', 'Milky Way rotation', '“But HOW?”'],
    sources: ['Lecture 2, slide 4', 'Book: Lecture 4, PDF 48–49 (pp. 40–41)'],
    studyQuestion: 'What problem was Oort trying to solve, and why did radio astronomy appeal to him?',
    studyAnswer: 'Oort wanted to measure the rotation and structure of the Milky Way, but dust hid most of the plane from optical telescopes. Radio waves pass through the dust, so a radio spectral line could reach gas across the Galaxy and its Doppler shift could provide the velocities needed for a rotation model.',
    takeaway: 'Oort’s rotation problem is the reason the 21-cm line mattered.'
  },

  'history-hulst': {
    page: '6',
    definition: 'Hendrik van de Hulst asked which common element could produce a spectral line at radio wavelengths.',
    explanation: 'Slide 6 frames his PhD work as a prediction problem based on the then-known physics of atoms, before the line was observed.',
    reasoning: 'A spectral line requires a transition with an energy difference matching a radio photon. Hydrogen is the most common element and has a spin-flip transition in the right frequency range.',
    significance: 'The prediction turned a general hope for radio astronomy into a specific, testable search.',
    keyValues: ['Prediction', 'common element', 'radio spectral line'],
    sources: ['Lecture 2, slide 6', 'Book: Lecture 4, PDF 51–52 (pp. 43–44)'],
    studyQuestion: 'Why was van de Hulst’s question well posed?',
    studyAnswer: 'It asked for a common element with an atomic transition whose energy difference corresponds to a radio photon. Hydrogen fits: its proton–electron spin flip produces 1420 MHz / 21 cm. The book notes that calculations suggested the line might be too weak, but Oort insisted it should exist.',
    takeaway: 'A good prediction names a specific atom, transition and frequency.'
  },

  'history-observe': {
    page: '8',
    definition: 'The 21-cm line was pursued after the Second World War, with 1950 work in the Netherlands, Australia and the US.',
    explanation: 'Slide 8 lists 1950 and the three countries, notes that the US was first, and answers why: “It was right there” — the equipment was available. The book adds that the war and German occupation had interrupted the Dutch work, and that a fire destroyed much of their equipment in early 1950.',
    reasoning: 'The war had produced radio and radar technology but also interrupted the Dutch group; the US group had the equipment available.',
    significance: 'The detection turned the prediction into an observational tool and launched systematic hydrogen mapping.',
    keyValues: ['1950 (lecture)', 'Netherlands', 'Australia', 'US'],
    sources: ['Lecture 2, slide 8', 'Book: Lecture 4, PDF 53–54 (pp. 45–46)', 'Book: Lecture 6, PDF 72 (p. 64)'],
    sourceNote: 'Lecture 2 says 1950; the book says 1951 (PDF 53). The lecture’s date is kept here; see History for the full source note.',
    studyQuestion: 'Why was the US group first, according to the lecture?',
    studyAnswer: 'The lecture’s answer is “It was right there”: the US team had the necessary radio equipment available after the war. The Netherlands, Australia and the US were all working on the problem, but resources and timing differed; the book adds that a fire destroyed much of the Dutch equipment in early 1950.',
    takeaway: 'The detection depended as much on available hardware as on the theoretical prediction.'
  },

  'history-dust': {
    page: '3',
    definition: 'Dust in the Milky Way hides much of the Galaxy from optical telescopes.',
    explanation: 'Slide 3 asks why the Milky Way cannot be seen clearly and contrasts optical with radio views. External galaxies can be seen from outside, but we view the Milky Way edge-on from inside, so dust hides much of its plane; radio observations can penetrate it.',
    reasoning: 'Dust grains are comparable to or larger than optical wavelengths, so they scatter and absorb starlight. A 21-cm wave is much larger than a grain and passes around it.',
    significance: 'Dust explains both the limitation of optical astronomy and the unique value of radio observations of the Galactic plane.',
    keyValues: ['dust', 'optical blocked', 'radio passes'],
    sources: ['Lecture 2, slide 3', 'Book: Lecture 1, PDF 14–15 (pp. 6–7)', 'Book: Lecture 4, PDF 48–49 (pp. 40–41)'],
    studyQuestion: 'Why can radio waves reveal parts of the Milky Way that visible light cannot?',
    studyAnswer: 'Interstellar dust grains block visible light because their sizes are comparable to optical wavelengths. Radio waves at 21 cm are far longer than the grains, so they are not effectively blocked and can travel through the dusty plane, letting radio telescopes detect gas across the Galaxy.',
    takeaway: 'Wavelength determines whether dust is an obstacle or a window.'
  },

  'h-spin': {
    page: '7, 18',
    definition: 'The 21-cm line comes from a change in the relative spin of the proton and electron in neutral hydrogen.',
    explanation: 'Slide 7 labels the excited state (proton and electron spins parallel) and the ground state (spins anti-parallel). Slide 18 adds the emitted photon in the transition and titles it “HI 21-Centimeter Line Formation”.',
    reasoning: 'The two spin states have slightly different energies. The atom can flip from parallel to anti-parallel and emit the energy difference as a photon at a fixed radio frequency.',
    significance: 'This atomic transition is the physical origin of the entire hydrogen map.',
    keyValues: ['parallel = higher energy', 'anti-parallel = lower energy', 'photon emitted'],
    sources: ['Lecture 2, slides 7, 18', 'Book: Lecture 4, PDF 52 (p. 44)', 'Book: Lecture 6, PDF 71 (p. 63)'],
    studyQuestion: 'Which spin state is the ground state, and what happens in the transition?',
    studyAnswer: 'The anti-parallel state is the ground state; the parallel state has slightly higher energy. When the atom flips from parallel to anti-parallel, it emits a photon at 1420 MHz / 21 cm. The excited state is therefore the one with the spins aligned.',
    takeaway: 'The line is a spin-flip: parallel spins relax to anti-parallel and emit a radio photon.'
  },

  'h-spin-conf': {
    page: '7, 18',
    definition: 'The two spin configurations shown for atomic hydrogen.',
    explanation: 'The excited state has parallel proton and electron spins; the ground state has anti-parallel spins. The lecture draws the transition between the two states as the origin of the 21-cm photon.',
    reasoning: 'The labels “parallel” and “anti-parallel” describe the relative orientation of the two magnetic moments, not the electron’s orbital motion.',
    significance: 'The diagram makes clear that the line is a change of spin state, not an electron changing orbit.',
    keyValues: ['excited: parallel', 'ground: anti-parallel'],
    sources: ['Lecture 2, slides 7, 18', 'Book: Lecture 4, PDF 52 (p. 44)', 'Book: Lecture 6, PDF 71 (p. 63)'],
    studyQuestion: 'What is the difference between the two states drawn on slides 7 and 18?',
    studyAnswer: 'Only the relative spin orientation differs. In the excited state the proton and electron spins are parallel; in the ground state they are anti-parallel. The transition between them emits the 21-cm photon.',
    takeaway: 'The key label is the relative spin, not an orbital change.'
  },

  'h-freq': {
    page: '7, 18',
    definition: 'The lecture gives the hydrogen line as 1420 MHz, corresponding to a wavelength of 21 cm.',
    explanation: 'Both values appear on slides 7 and 18. Slide 18 titles the transition “HI 21-Centimeter Line Formation”.',
    reasoning: 'Frequency and wavelength are two ways of describing the same photon; radio astronomers often use frequency for the receiver and wavelength for the line’s name.',
    significance: 'The exact frequency is what makes the line identifiable in a spectrum and usable for Doppler measurements.',
    keyValues: ['1420 MHz', '21 cm'],
    sources: ['Lecture 2, slides 7, 18', 'Book: Lecture 4, PDF 52 (p. 44)', 'Book: Lecture 6, PDF 71 (p. 63)'],
    studyQuestion: 'What frequency and wavelength identify the neutral hydrogen line?',
    studyAnswer: 'The line is at 1420 MHz, which corresponds to a wavelength of about 21 cm. Both values are stated in the lecture and identify the same transition.',
    takeaway: '1420 MHz and 21 cm are the two names of one line.'
  },

  'h-map': {
    page: '9, 17–21',
    definition: 'Galactic hydrogen is distributed across the sky, and mapping it reveals large-scale features.',
    explanation: 'Slide 9 notes galactic hydrogen everywhere, asks “But how much?”, and names the bulge and bubbles. Later slides combine hydrogen maps with Doppler information (slides 20–21).',
    reasoning: 'The 21-cm line is detected from gas across the whole sight line, so the map accumulates the hydrogen column. Large-scale brightness patterns reveal the thin Galactic layer and structures such as supernova-driven bubbles.',
    significance: 'The maps show that neutral gas is not confined to a few clouds but fills the Galactic plane and extends beyond the visible stars.',
    keyValues: ['all-sky map', 'thin layer', 'bulge', 'bubbles'],
    sources: ['Lecture 2, slides 9, 17–21', 'Book: Lecture 4, PDF 54 (p. 46)', 'Book: Lecture 6, PDF 72–75 (pp. 64–67)'],
    sourceNote: 'The book describes the all-sky hydrogen map and the supernova-driven “bubbles” (PDF 54) but does not discuss the Galactic bulge labelled on slide 9. The bulge is retained from the lecture only.',
    studyQuestion: 'What large-scale features does the hydrogen map reveal?',
    studyAnswer: 'The map shows hydrogen across the whole sky, concentrated in a thin layer along the Galactic plane. The lecture labels the bulge and bubbles; the book explains the bubbles as shells swept up by supernova explosions. The gas extends far beyond the visible stellar disk.',
    takeaway: 'Neutral hydrogen fills the Galactic plane and records both its large-scale shape and violent events.'
  },

  't-dish': {
    page: '12, 13, 15',
    definition: 'The parabolic dish collects radio waves and brings them to a focus.',
    explanation: 'Slide 12 shows a dish feeding a receiver. Slide 13 labels the prime focus, secondary reflector, horn and receiver. Slide 15 explains the parabola geometry using focus F and directrix L.',
    reasoning: 'For a parabola, paths from a distant wavefront to the focus have equal length, so the wave arrives in phase and adds coherently. A secondary reflector can move the focus to a more convenient receiver position.',
    significance: 'The dish is the collecting area and the focusing element; its size sets sensitivity and its shape sets image quality.',
    keyValues: ['prime focus', 'secondary reflector', 'horn / receiver', 'aperture'],
    sources: ['Lecture 2, slides 12, 13, 15', 'Book: Lecture 5, PDF 61–62, 66–67 (pp. 53–54, 58–59)'],
    sourceNote: 'The book explains the focus and vertex line but does not use the lecture’s directrix label “L”.',
    studyQuestion: 'Why does a parabolic shape focus a radio wave?',
    studyAnswer: 'A parabola has the property that all paths from a distant plane wavefront to the focus have the same length. The reflected wave therefore arrives in phase at the focus, where the probe or receiver sits. A secondary reflector can redirect that focus to a receiver mounted behind the dish.',
    takeaway: 'The parabola works because every path to the focus is equal.'
  },

  't-signal': {
    page: '12, 14',
    definition: 'Behind the feed, the signal passes through mixing, amplification and detection.',
    explanation: 'Slide 12’s block diagram orders a mixer, an amplifier and a detector. Slide 14 shows the hardware and names amplification, noise and mixing.',
    reasoning: 'The current from the probe is extremely weak and must be amplified; the amplifier also adds noise. The slide’s chain labels a mixer, an amplifier and a detector: mixing shifts the signal to a convenient frequency, and the detector measures its power over a band.',
    significance: 'The receiver chain sets the noise level and therefore the weakest signal the telescope can detect.',
    keyValues: ['amplifier', 'noise', 'mixer', 'detector'],
    sources: ['Lecture 2, slides 12, 14', 'Book: Lecture 5, PDF 62–65 (pp. 54–57)'],
    studyQuestion: 'Why are amplification and mixing both needed?',
    studyAnswer: 'The signal from the antenna is very weak, so it must be amplified to a measurable level. Amplifiers add their own noise, which is why receivers are cooled. Mixing then shifts the signal to a convenient frequency band where it can be filtered and detected accurately.',
    takeaway: 'Amplification makes the signal measurable; mixing makes it manageable; both add practical limits.'
  },

  't-pol': {
    page: '16',
    definition: 'A double antenna is used to discuss polarization.',
    explanation: 'Slide 16 shows a horn and antenna arrangement for polarization, introducing the double-antenna setup.',
    reasoning: 'A single linear antenna responds to one orientation of the electric field and therefore receives only part of an unpolarized signal. The book describes a second, independently polarized receiving system to pick up the other half.',
    significance: 'Measuring both polarizations recovers the full incoming power and allows polarization studies.',
    keyValues: ['second independently polarized antenna system', 'full unpolarized signal'],
    sources: ['Lecture 2, slide 16', 'Book: Lecture 5, PDF 68–69 (pp. 60–61)'],
    studyQuestion: 'Why use two antennas instead of one?',
    studyAnswer: 'One antenna is sensitive to a single polarization direction, so it picks up only half of a randomly polarized signal. A second, independently polarized antenna system detects the other half; together they recover the full signal, each with its own amplifiers and detectors.',
    takeaway: 'Two independent polarization channels see the whole wave, not just one direction of its electric field.'
  },

  'm-res': {
    page: '19',
    definition: 'Wavelength, aperture and beamwidth determine what a telescope can resolve and what can block a wave.',
    explanation: 'Slide 19 asks “What does it take to block a wave?” and names the three quantities over a wave-obstacle diagram and a panorama of the Milky Way.',
    reasoning: 'As a rule of thumb, blocking a wave requires something larger than the wave. The beamwidth — the angular patch a telescope averages — is proportional to wavelength divided by aperture, so a larger dish produces a smaller beam and sharper resolution.',
    significance: 'These quantities connect the choice of telescope to the scale of structure it can study.',
    keyValues: ['beamwidth ∝ λ / aperture', 'larger aperture = sharper beam'],
    sources: ['Lecture 2, slide 19', 'Book: Lecture 6, PDF 73–74 (pp. 65–66)', 'Book: Lecture 5, PDF 61, 66 (pp. 53, 58)'],
    studyQuestion: 'What determines a radio telescope’s angular resolution?',
    studyAnswer: 'The beamwidth is proportional to the observing wavelength divided by the aperture diameter. A longer wavelength or smaller dish gives a broader beam and blurrier image; a larger aperture at the same wavelength gives a narrower beam and finer angular resolution. An obstacle must also be larger than the wave to block it.',
    takeaway: 'Resolution improves with a larger aperture and a shorter wavelength.'
  },

  'm-doppler': {
    page: '20',
    definition: 'Blueshift and redshift measure motion along the line of sight.',
    explanation: 'Slide 20 labels the approaching (blue) and receding (red) sides of a galaxy and gives the frequency-shift relation.',
    reasoning: 'Approaching gas compresses the wave and raises the observed frequency; receding gas stretches it and lowers the frequency. The shift depends only on the line-of-sight component of velocity.',
    significance: 'This is how a spectrum becomes a velocity map of the gas.',
    keyValues: ['blue = approaching', 'red = receding'],
    sources: ['Lecture 2, slide 20', 'Book: Lecture 6, PDF 75–76 (pp. 67–68)'],
    studyQuestion: 'What do blueshift and redshift tell us about a gas cloud?',
    studyAnswer: 'Blueshift means the observed frequency is higher (wavelength shorter), so the cloud is approaching along the line of sight. Redshift means the frequency is lower (wavelength longer), so it is receding. Motion exactly across the line of sight produces no shift.',
    takeaway: 'The direction of the shift gives the direction of line-of-sight motion.'
  },

  'm-rot': {
    page: '21',
    definition: 'Differential rotation means the Galaxy does not rotate as a rigid body.',
    explanation: 'Slide 21’s figure labels a 230-million-year orbit and a 28,000-light-year radius, and pairs the rotation diagram with a hydrogen map.',
    reasoning: 'If the disk rotated rigidly, all radii would share the same angular speed. Instead, gas at different radii orbits with different angular speeds, so the pattern shears; the observed velocity along a sight line is the difference between the gas motion and the Sun’s motion.',
    significance: 'Differential rotation is what makes the Doppler map interpretable and what produces the observed velocity structure of the Milky Way.',
    keyValues: ['230 million-year orbit', '28,000 light-years', '~250 km/s (book)'],
    sources: ['Lecture 2, slide 21', 'Book: Lecture 6, PDF 77–79 (pp. 69–71)'],
    studyQuestion: 'What does differential rotation mean, and why does it matter for the map?',
    studyAnswer: 'It means that gas at different distances from the Galactic centre orbits with different angular speeds rather than moving as a solid disk. A sight line therefore intersects gas with a range of velocities. Comparing the observed velocity with a rotation model lets astronomers assign distances and reconstruct the Galaxy’s gas distribution.',
    takeaway: 'Different radii sweep different angles in the same time; the velocity map records that shear.'
  },

  'm-warp': {
    page: '22',
    definition: 'The Milky Way’s disk appears warped, like a vinyl record on a hot plate.',
    explanation: 'Slide 22 states the warp and lists three possible causes as questions: interaction with another galaxy, vibrations in differential rotation, and infall of gas.',
    reasoning: 'The hydrogen layer is thin in the inner Galaxy but bends up on one side and down on the other in the outer disk. The cause is not settled, so the lecture presents the explanations as open possibilities rather than conclusions.',
    significance: 'The warp shows that the outer Galaxy is not a simple flat disk and that gas dynamics still pose open problems.',
    keyValues: ['warped outer hydrogen layer', 'three open hypotheses'],
    sources: ['Lecture 2, slide 22', 'Book: Lecture 6, PDF 79 (p. 71)'],
    studyQuestion: 'What is the Galactic warp, and what explanations does the lecture offer?',
    studyAnswer: 'The thin hydrogen layer in the outer Milky Way bends upward on one side and downward on the other instead of staying flat. The lecture lists three possible causes as questions: interaction with another galaxy, vibrations in differentially rotating material, and infall of gas onto the Galaxy. None is presented as proven.',
    takeaway: 'The warp is an observed shape with several candidate causes, not a settled mechanism.'
  },

  'm-map': {
    page: '9, 17, 21',
    definition: 'Hydrogen maps show the Milky Way’s gas across the sky.',
    explanation: 'Slide 9 shows the all-sky hydrogen view with bulge and bubbles; slides 17 and 21 revisit the hydrogen sky and its rotation.',
    reasoning: 'The map accumulates neutral gas along each sight line. Combining intensity with velocity separates gas at different distances and reveals the thin plane, the warp and large structures.',
    significance: 'The map is the observational foundation for the rotation and warp discussion.',
    keyValues: ['all-sky 21-cm map', 'thin layer', 'outer warp'],
    sources: ['Lecture 2, slides 9, 17, 21', 'Book: Lecture 4, PDF 54 (p. 46)', 'Book: Lecture 6, PDF 72–75 (pp. 64–67)'],
    studyQuestion: 'Why is the hydrogen map more than a picture of brightness?',
    studyAnswer: 'The map records both intensity and velocity. Intensity shows where gas lies on the sky and how much is along the line of sight; the Doppler shift separates gas at different velocities. A rotation model then converts velocity into distance, making the map a three-dimensional probe of the Galaxy.',
    takeaway: 'The 21-cm map carries a velocity dimension, not just a brightness pattern.'
  },

  'd-shift': {
    page: '20',
    definition: 'Blueshift means a shorter observed wavelength; redshift means a longer one.',
    explanation: 'Slide 20 labels both on the rotating-galaxy diagram.',
    reasoning: 'The shift is caused by relative motion along the line of sight, not by the galaxy’s colour.',
    significance: 'These labels are the vocabulary for interpreting every 21-cm spectrum.',
    keyValues: ['blue = shorter wavelength', 'red = longer wavelength'],
    sources: ['Lecture 2, slide 20', 'Book: Lecture 6, PDF 76 (p. 68)'],
    studyQuestion: 'Which side of a rotating galaxy is blueshifted?',
    studyAnswer: 'The side approaching the observer is blueshifted, because its waves are compressed to shorter wavelengths. The receding side is redshifted. The effect depends only on the component of motion along the line of sight.',
    takeaway: 'Blue means coming toward you; red means moving away.'
  },

  'd-vel': {
    page: '20',
    definition: 'The lecture relates the fractional frequency shift to velocity.',
    explanation: 'Slide 20 writes (ν₀ − ν)/ν₀ = V/c and its rearrangement for V.',
    reasoning: 'The fractional shift is small for ordinary Galactic velocities, so a precise rest frequency and a precise measurement are required.',
    significance: 'The formula converts a measured line position into a physical velocity, the key step in mapping rotation.',
    keyValues: ['ν₀ = rest frequency', 'ν = observed frequency', 'c = speed of light'],
    equations: [
      { expr: '(ν₀ − ν) / ν₀ = V / c', note: 'Slide 20. ν₀ is the rest frequency, ν the observed frequency, V the line-of-sight velocity and c the speed of light.' },
      { expr: 'V = c (ν₀ − ν) / ν₀', note: 'Slide 20, rearranged for the velocity.' }
    ],
    sources: ['Lecture 2, slide 20', 'Book: Lecture 6, PDF 76 (p. 68)'],
    studyQuestion: 'Use the Doppler formula to explain how a small frequency shift gives a velocity.',
    studyAnswer: 'Measure ν, know ν₀, compute the fraction (ν₀ − ν)/ν₀, and multiply by c. A shift of one part in a million corresponds to about 300 m/s. The sign gives the direction: ν > ν₀ is a blueshift (approach), ν < ν₀ is a redshift (recession).',
    takeaway: 'Velocity is the fractional frequency shift multiplied by the speed of light.'
  },

  'd-rot': {
    page: '21–22',
    definition: 'Differential rotation and the Galactic warp are the dynamical context of the Doppler maps.',
    explanation: 'Slide 21 links rotation to the hydrogen map; slide 22 extends the discussion to the warp and its possible causes.',
    reasoning: 'A rotating disk with different angular speeds produces a characteristic velocity pattern along each sight line; deviations from a flat layer show up as the warp.',
    significance: 'Doppler measurements are not just velocities — they reveal the Galaxy’s dynamics and its departures from a simple disk.',
    keyValues: ['differential rotation', 'warp'],
    sources: ['Lecture 2, slides 21–22', 'Book: Lecture 6, PDF 77–79 (pp. 69–71)'],
    studyQuestion: 'How do rotation and warp appear in the same 21-cm data?',
    studyAnswer: 'The line-of-sight velocity at each position reflects the differential rotation of the disk. The warp appears as a change in the height of the thin hydrogen layer in the outer Galaxy, which alters the velocity pattern and the map’s shape. Both are inferred from the same spectra.',
    takeaway: 'The velocity field encodes both the Galaxy’s rotation and its warped outer disk.'
  },

  'g-hubble': {
    page: '24–25',
    definition: 'Hubble’s tuning fork is the galaxy-classification scheme used in the lecture.',
    explanation: 'Slide 25 labels the E0–E7 ellipticals, S0 at the junction, ordinary spirals Sa–Sc and barred spirals SBa–SBc. Slide 24 shows example galaxy images.',
    reasoning: 'The sequence runs from the E0–E7 ellipticals to S0 at the junction, then branches into ordinary spirals (Sa–Sc) and barred spirals (SBa–SBc). The lecture connects this visual order to gas content.',
    significance: 'The classification provides the framework for the later claim that hydrogen content changes along the sequence.',
    keyValues: ['E0–E7', 'S0', 'Sa–Sc', 'SBa–SBc'],
    sources: ['Lecture 2, slides 24–25', 'Book: Lecture 9, PDF 97–101 (pp. 89–93)'],
    sourceNote: 'The book calls the diagram the “Hubble sequence” (PDF 100); the lecture calls it “Hubble’s tuning fork”. This app keeps the lecture’s terminology.',
    studyQuestion: 'What does Hubble’s classification describe?',
    studyAnswer: 'It sorts galaxies by their visual morphology: ellipticals (E0–E7), lenticulars (S0), ordinary spirals (Sa–Sc) and barred spirals (SBa–SBc). The lecture presents it as the classification diagram for galaxies and later links the sequence to hydrogen content.',
    takeaway: 'The tuning fork is a morphology sequence, later connected to gas and star formation.'
  },

  'g-ism': {
    page: '26',
    definition: 'The interstellar medium (ISM) is the gas and dust between stars, contrasted with a planetary atmosphere.',
    explanation: 'Slide 26 lists atmosphere versus ISM alongside galactic evolution and stellar formation. Slide 10 adds dark cloud nurseries and the molecular species labelled there.',
    reasoning: 'The ISM is not a static atmosphere; it is the reservoir from which new stars form and is altered by star formation and supernova explosions.',
    significance: 'The ISM connects a galaxy’s present gas content to its future evolution.',
    keyValues: ['gas + dust between stars', 'star-formation reservoir'],
    sources: ['Lecture 2, slides 10, 26', 'Book: Lecture 9, PDF 101–102 (pp. 93–94)', 'Book: Lecture 21, PDF 233–238 (pp. 225–230)'],
    sourceNote: 'The book discusses OH, CO and formaldehyde in molecular clouds; it does not name the specific molecules listed on slide 10 (propanal, ketenimine, cyanoformaldehyde, C4H−). Those names are retained from the lecture only.',
    studyQuestion: 'Why is the ISM important for understanding a galaxy?',
    studyAnswer: 'The interstellar medium is the gas and dust between stars. It supplies the material for new stars and is altered by star formation and supernova explosions; the book also discusses whether new gas is added. Its amount and state determine how actively a galaxy can form stars.',
    takeaway: 'The ISM is a galaxy’s fuel tank and the link between gas and evolution.'
  },

  'g-evol': {
    page: '26',
    definition: 'Gas content connects galaxies to their evolution and to stellar formation.',
    explanation: 'Slide 26 names galactic evolution and stellar formation as the gas-related themes.',
    reasoning: 'Ellipticals have little cool gas and little ongoing star formation; spirals and some irregulars retain gas and form stars. Gas depletion or accretion can therefore change how much star formation a galaxy can sustain.',
    significance: 'Radio observations of hydrogen add the gas dimension to the visual classification.',
    keyValues: ['gas → stars', 'ellipticals gas-poor', 'spirals gas-rich'],
    sources: ['Lecture 2, slide 26', 'Book: Lecture 9, PDF 101–102 (pp. 93–94)', 'Book: Lecture 22, PDF 240–251 (pp. 232–243)'],
    studyQuestion: 'How does gas content drive galactic evolution?',
    studyAnswer: 'Gas is the raw material for star formation. A gas-rich spiral can keep forming stars, while a gas-poor elliptical has largely stopped. Accretion or loss of gas can change the star-formation rate and the galaxy’s subsequent evolution.',
    takeaway: 'A galaxy’s gas supply sets how long it can keep making stars.'
  },

  'm-count': {
    page: '27',
    definition: 'Counting visible matter is one way to estimate a galaxy’s mass.',
    explanation: 'Slide 27 contrasts counting with gravitational methods before introducing the rotation curve.',
    reasoning: 'Counting adds up the mass in stars, gas and dust inferred from their light or emission. It misses anything that does not emit detectably.',
    significance: 'The counting method provides the “expected” mass that the rotation curve later challenges.',
    keyValues: ['visible matter only', 'stars + gas + dust'],
    sources: ['Lecture 2, slide 27', 'Book: Lecture 9, PDF 103–106 (pp. 95–98)'],
    studyQuestion: 'What is the limitation of estimating mass by counting visible matter?',
    studyAnswer: 'Counting includes only matter that can be detected through light or emission. If a galaxy contains mass that does not radiate, or if the census of stars and gas is incomplete, the result is an underestimate. The rotation curve provides an independent gravitational measurement to compare with it.',
    takeaway: 'Counting tells you what shines; gravity tells you what is there.'
  },

  'm-curve': {
    page: '27',
    definition: 'A rotation curve plots orbital velocity against radius; M33’s stays high where the luminous disk predicts a decline.',
    explanation: 'Slide 27 writes M = rV²/G, compares observed velocities with the expectation from the luminous disk, and labels a 300% discrepancy.',
    reasoning: 'If mass were concentrated where the light is, velocity should fall beyond the visible disk. M33’s curve remains high, implying more mass at large radii than the visible matter provides.',
    significance: 'The M33 curve is the lecture’s concrete evidence for dark matter.',
    keyValues: ['M = rV²/G', 'M33', '300% discrepancy'],
    equations: [
      { expr: 'M = r V² / G', note: 'Slide 27. M is the mass interior to radius r, V the rotation velocity, r the radius and G the gravitational constant.' }
    ],
    sources: ['Lecture 2, slide 27', 'Book: Lecture 9, PDF 104–106 (pp. 96–98)'],
    studyQuestion: 'What does the M33 rotation curve show, and why is it surprising?',
    studyAnswer: 'The measured 21-cm velocities stay high far beyond the visible disk, while the curve expected from the visible stars, gas and dust alone falls. The slide labels a 300% discrepancy between observed and expected velocities. This implies substantial mass at large radii that is not visible in stars or gas.',
    takeaway: 'The curve does not fall; the visible mass alone cannot explain the outer velocities.'
  },

  'm-dark': {
    page: '28',
    definition: 'Dark matter is introduced as a response to the mass discrepancy.',
    explanation: 'Slide 28 lists wrong measurements and an inaccurate understanding of gravity as alternatives, then dark matter with the questions “What is it?” and “How much is there?”.',
    reasoning: 'The lecture does not assume dark matter immediately: it checks whether the measurement or gravity could be wrong, including beam and sidelobe effects. When those are not sufficient, unseen mass remains the simplest explanation.',
    significance: 'Dark matter is presented as an open problem, not a solved substance; the lecture asks what it is and how much exists.',
    keyValues: ['unseen mass', '~90% of Milky Way mass (book)', 'open questions'],
    sources: ['Lecture 2, slide 28', 'Book: Lecture 9, PDF 108–110 (pp. 100–102)', 'Book: Lecture 20, PDF 228–231 (pp. 220–223)'],
    studyQuestion: 'Why does the lecture introduce dark matter, and what remains unknown?',
    studyAnswer: 'The rotation curve requires more mass than the visible stars and gas provide. The lecture considers wrong measurements and modified gravity before introducing dark matter as unseen mass. It then asks what dark matter is and how much there is; the book estimates about 90% of the Milky Way’s mass, but the nature of the particles remains unknown.',
    takeaway: 'Dark matter is an inference from gravity; its identity is still an open question.'
  },

  'm-radio': {
    page: '28',
    definition: 'The closing figure shows a radar beam, rain droplets and antenna beam patterns.',
    explanation: 'Slide 28 pairs that illustration with a beam-angle plot labelled NS, EW and Airy, next to the dark-matter questions. It illustrates beam and measurement effects rather than adding a new claim about hydrogen.',
    reasoning: 'A radio telescope receives most power through its main beam but also through sidelobes; the book notes that only about 80–90% of the received power comes through the main beam. Unwanted radiation can enter through sidelobes, so the beam pattern must be understood before claiming a detection.',
    significance: 'The figure is a caution: a mass discrepancy could be a measurement artefact, which is why the lecture examines the beam before settling on dark matter.',
    keyValues: ['main beam + sidelobes', 'NS / EW / Airy patterns', 'measurement check'],
    sources: ['Lecture 2, slide 28', 'Book: Lecture 9, PDF 108–109 (pp. 100–101)'],
    studyQuestion: 'Why does the lecture show a radar beam and antenna pattern in the dark-matter discussion?',
    studyAnswer: 'To show that a telescope does not receive equally from all directions. Most signal arrives through the main beam, but sidelobes can admit unwanted radiation. Before attributing a high velocity to dark matter, the lecture checks whether the measurement could be contaminated by the beam or the environment.',
    takeaway: 'Understand the beam before trusting a faint signal.'
  },

  'm-warp-inter': {
    page: '22',
    definition: 'One suggested warp cause is interaction with another galaxy.',
    explanation: 'Slide 22 lists this as a question, not a settled cause.',
    reasoning: 'The lecture suggests that an interaction with another galaxy could disturb the outer disk.',
    significance: 'It is one of three open hypotheses the lecture uses to show that the warp’s origin is unresolved.',
    keyValues: ['tidal interaction', 'open hypothesis'],
    sources: ['Lecture 2, slide 22', 'Book: Lecture 6, PDF 79 (p. 71)'],
    studyQuestion: 'How could another galaxy warp the Milky Way’s disk?',
    studyAnswer: 'The lecture suggests that a close passage or interaction could disturb the outer gas layer; it does not specify a mechanism. This is presented as a possibility, not a confirmed explanation.',
    takeaway: 'Galaxy interaction is a plausible but unproven warp mechanism.'
  },

  'm-warp-vib': {
    page: '22',
    definition: 'Another suggestion is vibrations in differential rotation.',
    explanation: 'Slide 22 lists this as a question, not a settled cause.',
    reasoning: 'The lecture suggests that vibrations in differentially rotating material could produce a warp; the mechanism is not established.',
    significance: 'It connects the warp to the Galaxy’s own dynamics rather than an external encounter.',
    keyValues: ['internal oscillations', 'open hypothesis'],
    sources: ['Lecture 2, slide 22', 'Book: Lecture 6, PDF 79 (p. 71)'],
    studyQuestion: 'What does “vibrations in differential rotation” mean as a warp cause?',
    studyAnswer: 'Different parts of the disk rotate at different rates. The lecture suggests that vibrations in this differentially rotating system could produce a warp, but the cause remains open.',
    takeaway: 'The warp could be an internal vibration of the differentially rotating disk.'
  },

  'm-warp-infall': {
    page: '22',
    definition: 'A third suggestion is infall of gas onto the galaxy.',
    explanation: 'Slide 22 lists this as a question, not a settled cause.',
    reasoning: 'Gas falling onto the disk from outside could disturb the outer layer and bend it out of the plane.',
    significance: 'It links the warp to accretion and the Galaxy’s ongoing gas supply.',
    keyValues: ['accretion', 'open hypothesis'],
    sources: ['Lecture 2, slide 22', 'Book: Lecture 6, PDF 79 (p. 71)'],
    studyQuestion: 'How could infalling gas produce a warp?',
    studyAnswer: 'Gas arriving from outside the disk can add momentum and disturb the outer layers, pushing them above or below the plane. The lecture offers this as a hypothesis, alongside interaction and internal vibrations, without choosing among them.',
    takeaway: 'Accretion could bend the outer disk, but the evidence is not decisive.'
  }
};

export const quiz = [
  {
    q: "Which wavelength is associated with the neutral hydrogen line in the lecture?",
    opts: ["21 cm","2.1 mm","21 m"],
    correct: 0,
    ref: "Slides 7, 18",
    explain: "Slides 7 and 18 show the hydrogen line at 1420 MHz / 21 cm."
  },
  {
    q: "What does the parabolic dish of a radio telescope do?",
    opts: ["Creates hydrogen atoms","Focuses incoming radio waves","Classifies galaxy shapes"],
    correct: 1,
    ref: "Slides 12–15",
    explain: "The dish collects radio waves and directs them to a focus and receiver (slides 12, 13 and 15)."
  },
  {
    q: "What can a Doppler shift help astronomers study?",
    opts: ["Only galaxy colour","The chemical formula of dust","Gas motion along the line of sight"],
    correct: 2,
    ref: "Slide 20",
    explain: "Slide 20 labels blueshift and redshift and relates the frequency shift to velocity."
  },
  {
    q: "Which classification diagram is introduced in the lecture?",
    opts: ["Hubble’s tuning fork","The Oort Cloud","The prime focus"],
    correct: 0,
    ref: "Slides 24–25",
    explain: "Slide 25 presents Edwin Hubble’s classification scheme for galaxies."
  },
  {
    q: "What discrepancy leads into the dark-matter discussion?",
    opts: ["Missing telescope dishes","Expected versus observed galaxy rotation","Different names for hydrogen"],
    correct: 1,
    ref: "Slides 27–28",
    explain: "The M33 rotation curve compares observed velocities with the expectation from the luminous disk and labels a 300% discrepancy; slide 28 introduces dark matter."
  },
  {
    q: "What was van de Hulst’s PhD question, as quoted on slide 6?",
    opts: ["How large must a dish be to see a galaxy?","How much dark matter is in the Milky Way?","Which common element would produce a spectral line at radio wavelengths?"],
    correct: 2,
    ref: "Slide 6",
    explain: "Slide 6 frames the work as: using the then-known physics of atoms, which common element would produce a spectral line at radio wavelengths?"
  },
  {
    q: "Which features of the hydrogen map are named on slide 9?",
    opts: ["Bulge and bubbles","Rings and jets","Corona and chromosphere"],
    correct: 0,
    ref: "Slide 9",
    explain: "Slide 9 shows galactic hydrogen everywhere and lists the features “Bulge” and “Bubbles”."
  },
  {
    q: "Which Doppler relation is written on slide 20?",
    opts: ["M = rV² / G","(ν₀ − ν) / ν₀ = V / c","E = mc²"],
    correct: 1,
    ref: "Slide 20",
    explain: "Slide 20 writes (ν₀ − ν)/ν₀ = V/c and V = c(ν₀ − ν)/ν₀."
  },
  {
    q: "Which mass equation appears on the M33 rotation-curve slide?",
    opts: ["F = ma","λ = c / ν","M = rV² / G"],
    correct: 2,
    ref: "Slide 27",
    explain: "Slide 27 writes M = rV²/G next to the M33 rotation curve."
  },
  {
    q: "Which two main families appear on Hubble’s tuning fork in slide 25?",
    opts: ["Ellipticals and spirals","Planets and comets","Quasars and pulsars"],
    correct: 0,
    ref: "Slide 25",
    explain: "Slide 25 places S0 at the junction of the tuning fork, distinct from the E0–E7 elliptical branch; the two main families shown are ellipticals and spirals (Sa–Sc, SBa–SBc)."
  },
  {
    q: "Which possibilities does the lecture raise for the Galactic warp?",
    opts: ["Only a collision with the Sun","Interaction, vibrations in differential rotation, and infall of gas","Only the Oort Cloud"],
    correct: 1,
    ref: "Slide 22",
    explain: "Slide 22 poses all three possibilities as open questions."
  },
  {
    q: "Why can 21-cm radio waves pass through interstellar dust that blocks visible light?",
    opts: ["Radio waves are brighter than starlight","Dust only blocks blue light","The waves are far larger than the dust grains"],
    correct: 2,
    ref: "Slide 3; Book Lecture 6, PDF 73 (p. 65)",
    explain: "A wave is effectively blocked only by objects larger than its wavelength. At 21 cm the wave is enormous compared with dust grains, so it passes through."
  },
  {
    q: "The frequency 1420 MHz is the frequency of which feature?",
    opts: ["The 21-cm neutral hydrogen line","The 21-m hydrogen line","The cosmic microwave background"],
    correct: 0,
    ref: "Slides 7, 18",
    explain: "The lecture pairs 1420 MHz with a wavelength of 21 cm for neutral hydrogen."
  },
  {
    q: "In the ground state of the hydrogen spin transition, the proton and electron spins are…",
    opts: ["Parallel","Anti-parallel","Both zero"],
    correct: 1,
    ref: "Slides 7, 18",
    explain: "Slide 7 labels the ground state as anti-parallel and the excited state as parallel."
  },
  {
    q: "Which element did van de Hulst identify as the source of the predicted radio line?",
    opts: ["Helium","Carbon","Hydrogen"],
    correct: 2,
    ref: "Slides 6–7",
    explain: "Van de Hulst’s answer was hydrogen; the 21-cm line comes from its spin transition."
  },
  {
    q: "Which countries/teams were pursuing the 21-cm line after the war?",
    opts: ["The Netherlands, Australia and the US","France, Japan and Brazil","Only the Netherlands"],
    correct: 0,
    ref: "Slide 8",
    explain: "Slide 8 lists the Netherlands, Australia and the US, with the US first because the equipment was available."
  },
  {
    q: "What is the difference between continuous and discrete emission?",
    opts: ["Discrete covers a wide frequency range; continuous is a single line","Continuous covers a wide frequency range; discrete is confined to a narrow range","They are the same thing"],
    correct: 1,
    ref: "Slide 5; Book Lecture 4, PDF 50 (p. 42)",
    explain: "Continuous emission spans a broad range of frequencies; discrete emission, including spectral lines, occupies a narrow range."
  },
  {
    q: "Why are radio receivers often cooled to a few degrees above absolute zero?",
    opts: ["To increase the collecting area of the dish","To shift the signal to a lower frequency","To reduce the blackbody noise added by the receiver"],
    correct: 2,
    ref: "Book Lecture 5, PDF 63–64 (pp. 55–56)",
    explain: "Amplifiers behave partly like blackbodies and add noise. Cooling them lowers that noise so faint astronomical signals can be measured."
  },
  {
    q: "What is the prime focus of a radio dish?",
    opts: ["The point where the dish concentrates the incoming signal","The point where the wave is converted into an electric current","The point where the dish is attached to its mount"],
    correct: 0,
    ref: "Slide 13",
    explain: "Slide 13 labels the prime focus above the dish, where the signal is concentrated and the receiver or feed is placed."
  },
  {
    q: "What is the role of the mixer in a radio receiver?",
    opts: ["It creates hydrogen atoms","It shifts the signal to a more convenient frequency","It points the dish"],
    correct: 1,
    ref: "Slide 12; Book Lecture 5, PDF 65 (p. 57)",
    explain: "Heterodyne mixing converts the incoming frequency to a lower, convenient band before detection."
  },
  {
    q: "Why does the polarization discussion use two antennas?",
    opts: ["To increase the angular resolution of the dish","To measure the total radio power from the sky","To detect both polarizations of the incoming wave"],
    correct: 2,
    ref: "Slide 16; Book Lecture 5, PDF 68–69 (pp. 60–61)",
    explain: "A single antenna responds to one polarization; a second, independently polarized antenna system recovers the full signal."
  },
  {
    q: "How does the beamwidth of a radio telescope depend on wavelength and aperture?",
    opts: ["It is proportional to wavelength divided by aperture","It is proportional to aperture divided by wavelength","It does not depend on either"],
    correct: 0,
    ref: "Slide 19; Book Lecture 6, PDF 74 (p. 66)",
    explain: "The beam is larger for longer wavelengths and smaller for a larger aperture, so beamwidth ∝ λ / aperture."
  },
  {
    q: "Which change gives a sharper (smaller) beam?",
    opts: ["A smaller aperture at the same wavelength","A larger aperture at the same wavelength","A longer wavelength at the same aperture"],
    correct: 1,
    ref: "Slide 19; Book Lecture 6, PDF 74 (p. 66)",
    explain: "Angular resolution improves with a larger aperture and with a shorter wavelength."
  },
  {
    q: "A blueshift means the observed wavelength is…",
    opts: ["Longer, because the source is receding","Unchanged","Shorter, because the source is approaching"],
    correct: 2,
    ref: "Slide 20",
    explain: "Approaching motion compresses the wave, shortening the wavelength and raising the frequency."
  },
  {
    q: "What does differential rotation mean for the Milky Way?",
    opts: ["Different radii orbit with different angular speeds","All parts rotate at the same angular speed","Only the outer disk rotates while the centre stays fixed"],
    correct: 0,
    ref: "Slide 21",
    explain: "The disk is not solid; material at different radii takes different times to complete an orbit."
  },
  {
    q: "What observational evidence supports the Galactic warp?",
    opts: ["The Sun moves in a straight line","The outer hydrogen layer bends above and below the plane","The 21-cm line disappears"],
    correct: 1,
    ref: "Slide 22",
    explain: "The thin hydrogen layer is flat in the inner Galaxy but warped in the outer parts."
  },
  {
    q: "How does hydrogen content change along Hubble’s sequence?",
    opts: ["Ellipticals are gas-rich, spirals gas-poor","It is the same for all types","Ellipticals have little, spirals more, some irregulars are gas-dominated"],
    correct: 2,
    ref: "Slide 26; Book Lecture 9, PDF 101 (p. 93)",
    explain: "The book notes that hydrogen increases roughly along the sequence: ellipticals have very little, spirals a fair amount, and some irregulars are dominated by gas."
  },
  {
    q: "What is the interstellar medium (ISM)?",
    opts: ["The gas and dust between stars","The atmosphere of Earth","The space inside a telescope"],
    correct: 0,
    ref: "Slide 26",
    explain: "The ISM is a galaxy’s gas and dust between stars, contrasted on slide 26 with a planetary atmosphere."
  },
  {
    q: "What does the M33 rotation curve show?",
    opts: ["Observed velocities fall exactly as expected","Observed velocities stay high where the luminous-disk expectation falls","The galaxy does not rotate"],
    correct: 1,
    ref: "Slide 27",
    explain: "The observed curve remains high while the expected curve from the luminous disk declines, producing the 300% discrepancy."
  },
  {
    q: "What is the main evidence for dark matter in the lecture?",
    opts: ["The brightness of the Milky Way’s centre","The number of galaxies in the Local Group","The observed rotation curve continuing to rise beyond the visible disk"],
    correct: 2,
    ref: "Slides 27–28; Book Lecture 9, PDF 106 (p. 98)",
    explain: "The book notes that M33’s observed curve keeps rising to the last measured point while the expectation from visible matter falls; this requires more mass than the visible stars and gas provide."
  },
  {
    q: "According to Lecture 2, around which year were the post-war 21-cm observations made?",
    opts: ["1950","1944","1965"],
    correct: 0,
    ref: "Slide 8; Book Lecture 4, PDF 53 (p. 45)",
    explain: "The lecture says 1950. The reference book dates the Ewen–Purcell detection to 1951; this app keeps the lecture’s date and flags the difference in the source note."
  },
  {
    q: "What does the 21-cm line directly trace?",
    opts: ["Ionized helium","Neutral atomic hydrogen","Interstellar dust"],
    correct: 1,
    ref: "Slides 7, 9, 18",
    explain: "The line comes from the spin transition of neutral hydrogen, so it maps neutral atomic gas."
  },
  {
    q: "Why did Oort want a radio line from hydrogen?",
    opts: ["To classify galaxies by colour","To measure the temperature of the Sun","To measure the rotation of the whole Milky Way through dust"],
    correct: 2,
    ref: "Slide 4",
    explain: "Oort wanted to measure Galactic rotation, but dust blocked optical observations; a radio line promised to reach gas across the Galaxy."
  },
  {
    q: "Which molecules are labelled in the dark-cloud nursery image on slide 10?",
    opts: ["OH, CO and formaldehyde only", "Propanal, ketenimine, cyanoformaldehyde and C4H−", "H2O, CH4 and NH3"],
    correct: 1,
    ref: "Slide 10",
    explain: "Slide 10 labels propanal, ketenimine, cyanoformaldehyde and C4H−. The book’s molecular-cloud pages discuss OH, CO and formaldehyde, so those are not the slide-10 examples."
  }
];

// Reading order for Study Mode: each main topic followed by its children.
export const studyOrderIds = [
  'root',
  'history', 'history-oot', 'history-hulst', 'history-observe', 'history-dust',
  'hydrogen', 'h-spin', 'h-spin-conf', 'h-freq', 'h-map',
  'telescopes', 't-dish', 't-signal', 't-pol',
  'mapping', 'm-res', 'm-doppler', 'm-rot', 'm-warp', 'm-warp-inter', 'm-warp-vib', 'm-warp-infall', 'm-map',
  'doppler', 'd-shift', 'd-vel', 'd-rot',
  'galaxies', 'g-hubble', 'g-ism', 'g-evol',
  'mass', 'm-count', 'm-curve', 'm-dark', 'm-radio'
];
