// Phase 4 learning content, checked against the 29-slide A415 Lecture 2 deck
// (Dr. Reham El-Kholy). Page numbers below refer to the PDF slide numbers.

export const STUDY_KEY = 'cosmicnotes.study.v1';
export const QUIZ_KEY = 'cosmicnotes.quiz.v1';

export const conceptExtra = {
  root: {
    page: '1–28',
    definition: 'Radio astronomy studies the universe through radio waves; this lecture follows how radio observations reveal interstellar hydrogen and the structure of galaxies.',
    explanation: 'Lecture 2 moves from the dust-obscured Milky Way (slide 3) and Jan Oort’s rotation work (slide 4) to van de Hulst’s question about a radio spectral line (slide 6), the atomic-hydrogen line at 1420 MHz / 21 cm (slides 7 and 18), the post-war detections (slide 8), radio-telescope hardware (slides 11–16), Doppler mapping of galactic gas (slides 17–22), galaxy classification and gas (slides 23–26), and the M33 rotation-curve discrepancy that introduces dark matter (slides 27–28).',
    related: ['history', 'hydrogen', 'telescopes', 'mapping', 'galaxies', 'mass']
  },
  history: {
    page: '2–9',
    definition: 'How the 21-cm line of interstellar hydrogen moved from a theoretical question to a detected radio signal.',
    explanation: 'Slide 3 contrasts optical and radio views of a dusty Milky Way. Slide 4 introduces Jan Oort, the Oort Cloud and Milky Way rotation, asking “But HOW?”. Slide 5 contrasts continuous and discrete spectra with a flux-density versus frequency plot. Slide 6 states van de Hulst’s PhD question: which common element would produce a spectral line at radio wavelengths? Slides 7–8 give the answer (atomic hydrogen, 1420 MHz / 21 cm) and the 1950 observations in the Netherlands, Australia and the US. Slide 9 maps galactic hydrogen across the sky.'
  },
  hydrogen: {
    page: '6–9, 18',
    definition: 'Neutral atomic hydrogen produces a radio line at 1420 MHz, a wavelength of about 21 cm.',
    explanation: 'Slides 7 and 18 show the proton–electron spin states: the excited state has parallel spins, the ground state has anti-parallel spins, and the transition emits a photon — the 21-cm line. The lecture pairs the frequency (1420 MHz) with the wavelength (21 cm) and notes that hydrogen is distributed throughout the Galaxy, so mapping it reveals large-scale structure (slide 9).'
  },
  telescopes: {
    page: '11–16',
    definition: 'A radio telescope collects radio waves with a dish, concentrates them at a focus, and converts them into a measurable signal.',
    explanation: 'Slide 12 shows the signal path: the feed leads to a mixer, amplifier and detector; the same slide labels λ and λ/4 features at the feed. Slide 13 distinguishes prime focus and a secondary reflector, horn or receiver. Slide 15 uses a parabola diagram (focus F, directrix L) to show why incoming parallel rays converge. Slide 14 shows amplification, noise and mixing hardware, and slide 16 shows a double antenna used to discuss polarization.'
  },
  mapping: {
    page: '17–22',
    definition: 'Mapping the hydrogen sky combines telescope resolution with Doppler shifts to trace gas across the Milky Way.',
    explanation: 'Slide 17 opens the section. Slide 19 asks what it takes to block a wave and names wavelength, aperture and beamwidth. Slide 20 introduces blueshift and redshift with the Doppler relation. Slide 21 links the shifts to differential rotation; its figure labels a 230-million-year orbit and a 28,000-light-year radius. Slide 22 raises the Galactic warp and three possible causes.'
  },
  doppler: {
    page: '20–22',
    definition: 'The Doppler effect is the shift in observed frequency caused by motion along the line of sight.',
    explanation: 'Slide 20 labels the approaching side “Blueshift” and the receding side “Redshift” and gives the relation between frequency shift and velocity. Slide 21 applies the shifts to differential rotation; slide 22 connects the same gas mapping to the Galactic warp.',
    equations: [
      { expr: '(ν₀ − ν) / ν₀ = V / c', note: 'Slide 20. ν₀ is the rest frequency, ν the observed frequency, V the velocity along the line of sight, and c the speed of light.' },
      { expr: 'V = c (ν₀ − ν) / ν₀', note: 'Slide 20, rearranged for the velocity.' }
    ]
  },
  galaxies: {
    page: '23–26',
    definition: 'Galaxies are classified by shape, and their gas content connects them to evolution and star formation.',
    explanation: 'Slide 24 shows a gallery of galaxy images. Slide 25 presents Edwin Hubble’s classification scheme — ellipticals E0–E7, S0, spirals Sa–Sc and barred spirals SBa–SBc. Slide 26 links gas and galaxies through galactic evolution, atmosphere versus ISM, and stellar formation. Slide 10 illustrates dark cloud nurseries with molecules labelled propanal, ketenimine, cyanoformaldehyde and C4H−.'
  },
  mass: {
    page: '27–28',
    definition: 'Galaxy masses can be estimated by counting matter or from gravitational motion; the M33 rotation curve exposes a large discrepancy.',
    explanation: 'Slide 27 contrasts counting with gravitational methods and writes M = rV²/G. The M33 rotation curve compares the observed velocity with the expectation from the luminous disk and labels a 300% discrepancy. Slide 28 lists wrong measurements, an inaccurate understanding of gravity, and dark matter (“What is it? How much is there?”), alongside a radar-beam / rain-droplet illustration and an antenna beam pattern.',
    equations: [
      { expr: 'M = r V² / G', note: 'Slide 27. M is the mass within radius r, V the rotation velocity, r the radius and G the gravitational constant.' }
    ]
  },

  'history-oot': {
    page: '4',
    definition: 'Jan Oort is introduced through the Oort Cloud and the rotation of the Milky Way.',
    explanation: 'Slide 4 asks who Jan Oort was, names the Oort Cloud, and links him to Milky Way rotation with the question “But HOW?”. The lecture uses this as motivation for measuring galactic motion.'
  },
  'history-hulst': {
    page: '6',
    definition: 'Hendrik van de Hulst asked which common element could produce a spectral line at radio wavelengths.',
    explanation: 'Slide 6 frames his PhD work as a prediction problem based on the then-known physics of atoms, before the line was observed.'
  },
  'history-observe': {
    page: '8',
    definition: 'The 21-cm line was pursued after the Second World War, with 1950 work in the Netherlands, Australia and the US.',
    explanation: 'Slide 8 lists 1950 and the three countries, notes that the US was first, and answers why: “It was right there” — the equipment was available.'
  },
  'history-dust': {
    page: '3',
    definition: 'Dust in the Milky Way hides much of the Galaxy from optical telescopes.',
    explanation: 'Slide 3 asks why the Milky Way cannot be seen clearly and contrasts optical with radio views, motivating radio observations of the galactic plane.'
  },

  'h-spin': {
    page: '7, 18',
    definition: 'The 21-cm line comes from a change in the relative spin of the proton and electron in neutral hydrogen.',
    explanation: 'Slide 7 labels the excited state (proton and electron spins parallel) and the ground state (spins anti-parallel). Slide 18 adds the emitted photon in the transition and titles it “HI 21-Centimeter Line Formation”.'
  },
  'h-spin-conf': {
    page: '7, 18',
    definition: 'The two spin configurations shown for atomic hydrogen.',
    explanation: 'The excited state has parallel proton and electron spins; the ground state has anti-parallel spins. The lecture draws the transition between the two states as the origin of the 21-cm photon.'
  },
  'h-freq': {
    page: '7, 18',
    definition: 'The lecture gives the hydrogen line as 1420 MHz, corresponding to a wavelength of 21 cm.',
    explanation: 'Both values appear on slides 7 and 18. Slide 18 titles the transition “HI 21-Centimeter Line Formation”.'
  },
  'h-map': {
    page: '9, 17–21',
    definition: 'Galactic hydrogen is distributed across the sky, and mapping it reveals large-scale features.',
    explanation: 'Slide 9 notes galactic hydrogen everywhere, asks “But how much?”, and names the bulge and bubbles. Later slides combine hydrogen maps with Doppler information (slides 20–21).'
  },

  't-dish': {
    page: '12, 13, 15',
    definition: 'The parabolic dish collects radio waves and brings them to a focus.',
    explanation: 'Slide 12 shows a dish feeding a receiver. Slide 13 labels the prime focus, secondary reflector, horn and receiver. Slide 15 explains the parabola geometry using focus F and directrix L.'
  },
  't-signal': {
    page: '12, 14',
    definition: 'Behind the feed, the signal passes through mixing, amplification and detection.',
    explanation: 'Slide 12’s block diagram orders a mixer, an amplifier and a detector. Slide 14 shows the hardware and names amplification, noise and mixing.'
  },
  't-pol': {
    page: '16',
    definition: 'A double antenna is used to discuss polarization.',
    explanation: 'Slide 16 shows a horn and antenna arrangement for polarization, introducing the double-antenna setup.'
  },

  'm-res': {
    page: '19',
    definition: 'Wavelength, aperture and beamwidth determine what a telescope can resolve and what can block a wave.',
    explanation: 'Slide 19 asks “What does it take to block a wave?” and names the three quantities over a wave-obstacle diagram and a panorama of the Milky Way.'
  },
  'm-doppler': {
    page: '20',
    definition: 'Blueshift and redshift measure motion along the line of sight.',
    explanation: 'Slide 20 labels the approaching (blue) and receding (red) sides of a galaxy and gives the frequency-shift relation.'
  },
  'm-rot': {
    page: '21',
    definition: 'Differential rotation means the Galaxy does not rotate as a rigid body.',
    explanation: 'Slide 21’s figure labels a 230-million-year orbit and a 28,000-light-year radius, and pairs the rotation diagram with a hydrogen map.'
  },
  'm-warp': {
    page: '22',
    definition: 'The Milky Way’s disk appears warped, like a vinyl record on a hot plate.',
    explanation: 'Slide 22 states the warp and lists three possible causes as questions: interaction with another galaxy, vibrations in differential rotation, and infall of gas.'
  },
  'm-map': {
    page: '9, 17, 21',
    definition: 'Hydrogen maps show the Milky Way’s gas across the sky.',
    explanation: 'Slide 9 shows the all-sky hydrogen view with bulge and bubbles; slides 17 and 21 revisit the hydrogen sky and its rotation.'
  },
  'm-warp-inter': {
    page: '22',
    definition: 'One suggested warp cause is interaction with another galaxy.',
    explanation: 'Slide 22 lists this as a question, not a settled cause.'
  },
  'm-warp-vib': {
    page: '22',
    definition: 'Another suggestion is vibrations in differential rotation.',
    explanation: 'Slide 22 lists this as a question, not a settled cause.'
  },
  'm-warp-infall': {
    page: '22',
    definition: 'A third suggestion is infall of gas onto the galaxy.',
    explanation: 'Slide 22 lists this as a question, not a settled cause.'
  },

  'd-shift': {
    page: '20',
    definition: 'Blueshift means a shorter observed wavelength; redshift means a longer one.',
    explanation: 'Slide 20 labels both on the rotating-galaxy diagram.'
  },
  'd-vel': {
    page: '20',
    definition: 'The lecture relates the fractional frequency shift to velocity.',
    explanation: 'Slide 20 writes (ν₀ − ν)/ν₀ = V/c and its rearrangement for V.',
    equations: [
      { expr: '(ν₀ − ν) / ν₀ = V / c', note: 'Slide 20. ν₀ rest frequency, ν observed frequency, V line-of-sight velocity, c speed of light.' },
      { expr: 'V = c (ν₀ − ν) / ν₀', note: 'Slide 20, rearranged for the velocity.' }
    ]
  },
  'd-rot': {
    page: '21–22',
    definition: 'Differential rotation and the Galactic warp are the dynamical context of the Doppler maps.',
    explanation: 'Slide 21 links rotation to the hydrogen map; slide 22 extends the discussion to the warp and its possible causes.'
  },

  'g-hubble': {
    page: '24–25',
    definition: 'Hubble’s tuning fork is the galaxy-classification scheme used in the lecture.',
    explanation: 'Slide 25 labels ellipticals E0–E7, S0, spirals Sa–Sc and barred spirals SBa–SBc. Slide 24 shows example galaxy images.'
  },
  'g-ism': {
    page: '26',
    definition: 'The interstellar medium (ISM) is the gas and dust between stars, contrasted with a planetary atmosphere.',
    explanation: 'Slide 26 lists atmosphere versus ISM alongside galactic evolution and stellar formation. Slide 10 adds dark cloud nurseries and the molecular species labelled there.'
  },
  'g-evol': {
    page: '26',
    definition: 'Gas content connects galaxies to their evolution and to stellar formation.',
    explanation: 'Slide 26 names galactic evolution and stellar formation as the gas-related themes.'
  },

  'm-count': {
    page: '27',
    definition: 'Counting visible matter is one way to estimate a galaxy’s mass.',
    explanation: 'Slide 27 contrasts counting with gravitational methods before introducing the rotation curve.'
  },
  'm-curve': {
    page: '27',
    definition: 'A rotation curve plots orbital velocity against radius; M33’s stays high where the luminous disk predicts a decline.',
    explanation: 'Slide 27 writes M = rV²/G, compares observed velocities with the expectation from the luminous disk, and labels a 300% discrepancy.',
    equations: [
      { expr: 'M = r V² / G', note: 'Slide 27. M is the mass within radius r, V the rotation velocity, r the radius and G the gravitational constant.' }
    ]
  },
  'm-dark': {
    page: '28',
    definition: 'Dark matter is introduced as a response to the mass discrepancy.',
    explanation: 'Slide 28 lists wrong measurements and an inaccurate understanding of gravity as alternatives, then dark matter with the questions “What is it?” and “How much is there?”.'
  },
  'm-radio': {
    page: '28',
    definition: 'The closing figure shows a radar beam, rain droplets and antenna beam patterns.',
    explanation: 'Slide 28 pairs that illustration with a beam-angle plot labelled NS, EW and Airy, next to the dark-matter questions. It illustrates beam and measurement effects rather than adding a new claim about hydrogen.'
  }
};

// Questions limited to statements that appear on the slides.
export const quiz = [
  {
    q: 'Which wavelength is associated with the neutral hydrogen line in the lecture?',
    opts: ['21 cm', '2.1 mm', '21 m'],
    correct: 0,
    ref: 'Slides 7, 18',
    explain: 'Slides 7 and 18 show the hydrogen line at 1420 MHz / 21 cm.'
  },
  {
    q: 'What does the parabolic dish of a radio telescope do?',
    opts: ['Creates hydrogen atoms', 'Focuses incoming radio waves', 'Classifies galaxy shapes'],
    correct: 1,
    ref: 'Slides 12–15',
    explain: 'The dish collects radio waves and directs them to a focus and receiver (slides 12, 13 and 15).'
  },
  {
    q: 'What can a Doppler shift help astronomers study?',
    opts: ['Only galaxy colour', 'Gas motion along the line of sight', 'The chemical formula of dust'],
    correct: 1,
    ref: 'Slide 20',
    explain: 'Slide 20 labels blueshift and redshift and relates the frequency shift to velocity.'
  },
  {
    q: 'Which classification diagram is introduced in the lecture?',
    opts: ['Hubble’s tuning fork', 'The Oort Cloud', 'The prime focus'],
    correct: 0,
    ref: 'Slides 24–25',
    explain: 'Slide 25 presents Edwin Hubble’s classification scheme for galaxies.'
  },
  {
    q: 'What discrepancy leads into the dark-matter discussion?',
    opts: ['Missing telescope dishes', 'Expected versus observed galaxy rotation', 'Different names for hydrogen'],
    correct: 1,
    ref: 'Slides 27–28',
    explain: 'The M33 rotation curve compares observed velocities with the expectation from the luminous disk and labels a 300% discrepancy; slide 28 introduces dark matter.'
  },
  {
    q: 'What was van de Hulst’s PhD question, as quoted on slide 6?',
    opts: [
      'Which common element would produce a spectral line at radio wavelengths?',
      'How large must a dish be to see a galaxy?',
      'How much dark matter is in the Milky Way?'
    ],
    correct: 0,
    ref: 'Slide 6',
    explain: 'Slide 6 frames the work as: using the then-known physics of atoms, which common element would produce a spectral line at radio wavelengths?'
  },
  {
    q: 'Which features of the hydrogen map are named on slide 9?',
    opts: ['Bulge and bubbles', 'Rings and jets', 'Corona and chromosphere'],
    correct: 0,
    ref: 'Slide 9',
    explain: 'Slide 9 shows galactic hydrogen everywhere and lists the features “Bulge” and “Bubbles”.'
  },
  {
    q: 'Which Doppler relation is written on slide 20?',
    opts: ['(ν₀ − ν) / ν₀ = V / c', 'M = rV² / G', 'E = mc²'],
    correct: 0,
    ref: 'Slide 20',
    explain: 'Slide 20 writes (ν₀ − ν)/ν₀ = V/c and V = c(ν₀ − ν)/ν₀.'
  },
  {
    q: 'Which mass equation appears on the M33 rotation-curve slide?',
    opts: ['M = rV² / G', 'F = ma', 'λ = c / ν'],
    correct: 0,
    ref: 'Slide 27',
    explain: 'Slide 27 writes M = rV²/G next to the M33 rotation curve.'
  },
  {
    q: 'Which two main families appear on Hubble’s tuning fork in slide 25?',
    opts: ['Ellipticals and spirals', 'Planets and comets', 'Quasars and pulsars'],
    correct: 0,
    ref: 'Slide 25',
    explain: 'Slide 25 labels ellipticals (E0–E7, S0) and spirals (Sa–Sc, SBa–SBc).'
  },
  {
    q: 'Which possibilities does the lecture raise for the Galactic warp?',
    opts: [
      'Interaction, vibrations in differential rotation, and infall of gas',
      'Only a collision with the Sun',
      'Only the Oort Cloud'
    ],
    correct: 0,
    ref: 'Slide 22',
    explain: 'Slide 22 poses all three possibilities as open questions.'
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
