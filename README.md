# CosmicNotes — Radio Astronomy Interactive Mind Map

An interactive, lecture-based mind map for Radio Astronomy Lecture 2 by Dr. Reham El-Kholy.

## Features
- Interactive node graph with drag, zoom, pan and hover focus mode.
- Hover-expandable concept groups; deeper levels are opt-in via the details panel.
- Topic detail panel with definitions, explanations, equations, key ideas, related concepts and lecture slide references.
- Study mode with one concept at a time, hidden explanations/answers and saved progress.
- Quiz mode with immediate feedback, slide references, score, review and a saved best score.
- Responsive layout for desktop and mobile.

## Run locally
1. Install Node.js (LTS): https://nodejs.org/
2. Extract this project folder.
3. Open a terminal in the project folder.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL Vite prints (usually http://localhost:5173).

## Build check
```bash
npm run build
```

## Publish with GitHub + Vercel
1. Create a GitHub repository, e.g. `radio-astronomy-mindmap`.
2. Upload the contents of this folder to the repository (the `package.json` file should be at the repository root).
3. Sign in to https://vercel.com/ using GitHub.
4. Choose **Add New → Project**, import the repository.
5. Vercel should detect Vite. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Deploy**. When it finishes, Vercel provides a public URL you can share.
7. Whenever you push changes to the connected GitHub repository, Vercel can redeploy automatically.

## Content notes
The concept groups and slide references follow the lecture structure:
- Slides 2–9: discovery of interstellar hydrogen, the dusty Milky Way, Jan Oort, van de Hulst, and atomic hydrogen.
- Slides 11–16: radio telescopes, prime focus, amplification/noise/mixing, parabolic dish and polarization.
- Slides 17–22: hydrogen-sky mapping, wavelength/aperture/beamwidth, Doppler effect, differential rotation and Galactic warp.
- Slides 23–28: galaxy classification, gas and galactic evolution, weighing galaxies and dark matter.

The app is a study aid based on the lecture, not a replacement for the original slides. Any broader interpretation should be checked against the lecture material.
