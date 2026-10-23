import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactFlow, {
  Background, Controls, Handle, Position, ReactFlowProvider,
  useNodesState, useReactFlow, useNodesInitialized, MarkerType
} from 'reactflow';
import { BookOpen, Network, Brain, ChevronRight, ChevronLeft, RotateCcw, Atom, RadioTower, Orbit, Telescope, Sparkles, X, CheckCircle2, CircleHelp } from 'lucide-react';
import 'reactflow/dist/style.css';
import './styles.css';
import './phase1-layout.css';
import { conceptExtra, quiz, studyOrderIds, STUDY_KEY, QUIZ_KEY } from './phase4-content';

const topics = [
  { id:'root', title:'Radio Astronomy', short:'Lecture 2 · concept map', category:'Core idea', x:610, y:260, color:'root', page:'1', summary:'This lecture connects the discovery of interstellar hydrogen with radio-telescope techniques and the structure, motion, and mass of galaxies.', key:['Radio observations reveal information that optical observations can miss.','The 21-cm hydrogen line is a key tracer of neutral atomic hydrogen.','Doppler shifts help infer gas motion in the Milky Way.'], question:'What is the central link between radio astronomy and studying the Milky Way?', answer:'Radio observations can trace interstellar hydrogen and use its spectral line and Doppler shift to map gas and study galactic structure and motion.'},
  { id:'history', title:'Discovery of Interstellar Hydrogen', short:'From prediction to detection', category:'History & discovery', x:70, y:40, color:'amber', page:'2–9', summary:'The lecture follows the story from the dusty Milky Way and Jan Oort’s work to Hendrik van de Hulst’s prediction of a radio spectral line from atomic hydrogen, followed by post-war observations.', key:['Dust obscures parts of the Milky Way in visible light.','Jan Oort is connected in the lecture to Milky Way rotation and the Oort Cloud.','Van de Hulst considered which common element could produce a radio-wavelength spectral line.','The lecture highlights observations around 1950 in the Netherlands, Australia, and the US.'], question:'Which element is central to the predicted 21-cm radio line?', answer:'Atomic hydrogen.'},
  { id:'hydrogen', title:'Atomic Hydrogen & 21-cm Line', short:'1420 MHz · 21 cm', category:'Physical concept', x:20, y:300, color:'cyan', page:'6–9, 18', summary:'The lecture presents the hydrogen transition associated with a radio line near 1420 MHz, with a wavelength of about 21 cm. This line is used to map hydrogen across the Milky Way.', key:['Frequency shown in the lecture: 1420 MHz.','Wavelength shown in the lecture: 21 cm.','The diagram illustrates a change between relative proton–electron spin configurations.','Hydrogen is distributed throughout the Galaxy; mapping it reveals large-scale features.'], question:'What frequency and wavelength are associated with the hydrogen line in the lecture?', answer:'Approximately 1420 MHz and 21 cm.'},
  { id:'telescopes', title:'Radio Telescopes & Signal Path', short:'Collect · focus · amplify · detect', category:'Instrumentation', x:385, y:25, color:'violet', page:'11–16', summary:'This branch covers radio telescopes and how their dishes collect incoming radio waves, focus them at a receiver, and use electronic stages such as amplification and mixing. The lecture also introduces polarization and a double antenna.', key:['Parabolic dishes direct incoming waves toward a focus.','Prime focus is the location where the incoming signal is concentrated.','The lecture names amplification, noise, and mixing as important signal topics.','A double antenna is discussed in connection with polarization.'], question:'What is the role of a parabolic dish in a radio telescope?', answer:'It collects incoming radio waves and directs them toward a focus where a receiver can detect the signal.'},
  { id:'mapping', title:'Mapping the Hydrogen Sky', short:'Wavelength · aperture · beamwidth', category:'Mapping & resolution', x:350, y:430, color:'cyan', page:'17–22', summary:'The lecture connects the 21-cm line with mapping hydrogen, discusses wavelength, aperture, and beamwidth, then introduces Doppler shifts and differential rotation as tools for understanding the Milky Way.', key:['Wavelength, aperture, and beamwidth are linked to how a telescope resolves a source.','Blueshift and redshift indicate relative motion along the line of sight.','Differential rotation means different parts of a galaxy rotate at different rates.','The lecture raises possible explanations for the Galactic warp.'], question:'What do redshift and blueshift help astronomers infer?', answer:'Motion along the line of sight: a shift toward longer wavelengths is redshift, and toward shorter wavelengths is blueshift.'},
  { id:'doppler', title:'Doppler Effect & Galactic Motion', short:'Redshift · blueshift · rotation', category:'Motion', x:100, y:650, color:'amber', page:'20–22', summary:'The lecture shows blueshift and redshift, then links spectral shifts to differential rotation and the mapping of gas in the Milky Way.', key:['The lecture labels blueshift and redshift.','The Doppler relation on slide 20 links the frequency shift to velocity.','Differential rotation is shown alongside a hydrogen-sky map.','Galactic warp is presented with possible causes as questions, not settled conclusions.'], question:'What does the lecture suggest about the cause of the Galactic warp?', answer:'It raises several possibilities: interaction with another galaxy, vibrations in differential rotation, or infall of gas. The slide presents these as open questions.'},
  { id:'galaxies', title:'Hydrogen & Galaxy Structure', short:'Types · gas · evolution', category:'Galaxies', x:960, y:45, color:'violet', page:'23–26', summary:'The lecture moves from galaxy examples and Hubble’s tuning fork classification to gas, the interstellar medium (ISM), galactic evolution, and stellar formation.', key:['Hubble’s tuning fork is presented as a galaxy-classification scheme.','Gas and galaxies are connected to galactic evolution.','The lecture contrasts atmosphere and ISM and mentions stellar formation.'], question:'Which classification diagram is introduced in the lecture?', answer:'Hubble’s tuning fork.'},
  { id:'mass', title:'Weighing Galaxies & Dark Matter', short:'Expected vs observed rotation', category:'Open problem', x:950, y:360, color:'rose', page:'27–28', summary:'The lecture compares ways to estimate galaxy mass, including counting visible matter and gravitational evidence. It highlights a mismatch between expected and observed rotation and introduces dark matter.', key:['The lecture contrasts counting matter with gravitational methods.','The rotation-curve graphic shows a discrepancy between expected and observed behavior.','Dark matter is introduced through the questions “What is it?” and “How much is there?”','The lecture also shows a radio-beam illustration and spectral profile.'], question:'What issue motivates the dark-matter discussion in this lecture?', answer:'The discrepancy between the expected and observed galaxy rotation behavior shown in the lecture.'}
];

const connections = [
 ['root','history'],['root','hydrogen'],['root','telescopes'],['root','mapping'],['root','galaxies'],['root','mass'],
 ['history','hydrogen'],['hydrogen','telescopes'],['hydrogen','mapping'],['telescopes','mapping'],['mapping','doppler'],['doppler','mass'],['mapping','galaxies'],['galaxies','mass']
];




const childrenData = {
  history: [
    {id:'history-oot', title:'Oort & Milky Way Rotation', short:'Rotation studies', desc:"Jan Oort's work connects to Milky Way rotation and the Oort Cloud.", page:'2–3', category:'History', key:["Dust obscures parts of the Milky Way.","Oort connected to rotation studies."], color:'amber'},
    {id:'history-hulst', title:'Van de Hulst Prediction', short:'Radio spectral line', desc:'Predicted a radio spectral line from atomic hydrogen before detection.', page:'4–5', category:'History', key:["Considered which common element could produce a radio line."], color:'amber'},
    {id:'history-observe', title:'Post-War Observations', short:'1950s detections', desc:'Observations around 1950 in Netherlands, Australia, and US.', page:'8–9', category:'History', key:["Highlight observations around 1950."], color:'amber'},
    {id:'history-dust', title:'Dust Obscuration', short:'Visible-light limits', desc:'Dust limits visible-light views of the Milky Way.', page:'2–3', category:'History', key:["Dust obscures parts of the Milky Way in visible light."], color:'amber'}
  ],
  hydrogen: [
    {id:'h-spin', title:'Spin Transition', short:'Proton–electron spin', desc:'Change between relative proton–electron spin configurations.', page:'7, 18', category:'Physical concept', key:["Diagram illustrates spin change."], color:'cyan'},
    {id:'h-freq', title:'1420 MHz · 21 cm', short:'Frequency & wavelength', desc:'Frequency shown ~1420 MHz; wavelength ~21 cm.', page:'6–9', category:'Physical concept', key:["Frequency and wavelength values."], color:'cyan'},
    {id:'h-map', title:'Mapping Hydrogen', short:'Large-scale features', desc:'Distributed throughout Galaxy; mapping reveals large-scale features.', page:'17–22', category:'Physical concept', key:["Mapping reveals large-scale features."], color:'cyan'}
  ],
  telescopes: [
    {id:'t-dish', title:'Parabolic Dish', short:'Focus mechanism', desc:'Collects incoming waves and directs them toward prime focus.', page:'11–14', category:'Instrumentation', key:["Directs waves to focus."], color:'violet'},
    {id:'t-signal', title:'Amplification & Mixing', short:'Signal stages', desc:'Important electronic stages: amplification, noise, mixing.', page:'14–16', category:'Instrumentation', key:["Amplification, noise, mixing topics."], color:'violet'},
    {id:'t-pol', title:'Polarization & Double Antenna', desc:'Polarization and double antenna discussed.', page:'15–16', category:'Instrumentation', key:["Double antenna with polarization."], color:'violet'}
  ],
  mapping: [
    {id:'m-res', title:'Wavelength / Aperture / Beamwidth', short:'Resolving power', desc:'Linked to how a telescope resolves a source.', page:'17–19', category:'Mapping', key:["Wavelength, aperture, beamwidth."], color:'cyan'},
    {id:'m-doppler', title:'Blueshift & Redshift', short:'Line-of-sight motion', desc:'Indicate motion along the line of sight.', page:'20–22', category:'Mapping', key:["Redshift/blueshift mean velocity."], color:'cyan'},
    {id:'m-rot', title:'Differential Rotation', short:'Variable rates', desc:'Different parts of a galaxy rotate at different rates.', page:'20–22', category:'Mapping', key:["Differential rotation shown."], color:'cyan'},
    {id:'m-warp', title:'Galactic Warp', short:'Open questions', desc:'Possible causes raised: interaction, vibrations, infall of gas.', page:'22', category:'Mapping', key:["Possibilities presented as open questions."], color:'cyan'},
    {id:'m-map', title:'Hydrogen-Sky Map', short:'Large-scale view', desc:'Map of hydrogen reveals large-scale galactic features.', page:'17–22', category:'Mapping', key:["Hydrogen sky mapping."], color:'cyan'}
  ],
  doppler: [
    {id:'d-shift', title:'Blueshift vs Redshift', short:'Spectral shift labels', desc:'Labels blueshift and redshift for line-of-sight motion.', page:'20–22', category:'Motion', key:["Labels blueshift/redshift."], color:'amber'},
    {id:'d-vel', title:'Velocity Relation', short:'Frequency to velocity', desc:'Doppler relation on slide 20 links frequency shift to velocity.', page:'20', category:'Motion', key:["Doppler relation slide 20."], color:'amber'},
    {id:'d-rot', title:'Differential Rotation & Warp', short:'Gas mapping link', desc:'Connected to gas mapping and warp causes.', page:'20–22', category:'Motion', key:["Differential rotation and warp."], color:'amber'}
  ],
  galaxies: [
    {id:'g-hubble', title:"Hubble's Tuning Fork", short:'Classification', desc:'Galaxy-classification scheme presented in lecture.', page:'23–26', category:'Galaxies', key:["Classification diagram."], color:'violet'},
    {id:'g-ism', title:'ISM & Gas', short:'Interstellar medium', desc:'Contrasts atmosphere and ISM; gas connected to evolution.', page:'25–26', category:'Galaxies', key:["ISM and gas connected to evolution."], color:'violet'},
    {id:'g-evol', title:'Evolution & Star Formation', short:'Galactic life', desc:'Galactic evolution and stellar formation discussed.', page:'25–26', category:'Galaxies', key:["Evolution and stellar formation."], color:'violet'}
  ],
  mass: [
    {id:'m-count', title:'Counting Visible Matter', short:'Mass estimate method', desc:'Estimate mass by counting visible stars and gas.', page:'27–28', category:'Open problem', key:["Contrast counting with gravitational methods."], color:'rose'},
    {id:'m-curve', title:'Rotation Curve', short:'Expected vs observed', desc:'Discrepancy between expected and observed rotation behavior.', page:'27–28', category:'Open problem', key:["Discrepancy shown in graphic."], color:'rose'},
    {id:'m-dark', title:'Dark Matter', short:'Open questions', desc:'Introduced through “What is it?” and “How much is there?”.', page:'27–28', category:'Open problem', key:["Questions shown."], color:'rose'},
    {id:'m-radio', title:'Radio Beam & Profile', short:'Evidence illustration', desc:'Radio-beam illustration and spectral profile shown.', page:'27–28', category:'Open problem', key:["Radio-beam illustration and profile."], color:'rose'}
  ]
};

const subChildren = {
  'm-warp': [
    {id:'m-warp-inter', title:'Galaxy Interaction', short:'External cause', desc:'Interaction with another galaxy as a possible warp cause.', page:'22', category:'Mapping', key:["Possible interaction cause."], color:'cyan'},
    {id:'m-warp-vib', title:'Vibrations', short:'Internal dynamics', desc:'Vibrations in differential rotation as another possibility.', page:'22', category:'Mapping', key:["Possible vibration cause."], color:'cyan'},
    {id:'m-warp-infall', title:'Gas Infall', short:'Accretion', desc:'Infall of gas as a possible explanation.', page:'22', category:'Mapping', key:["Possible infall cause."], color:'cyan'}
  ],
  'h-spin': [
    {id:'h-spin-conf', title:'Spin Configurations', short:'Relative states', desc:'Diagram shows change between relative proton–electron spin configurations.', page:'7, 18', category:'Physical concept', key:["Spin-change diagram."], color:'cyan'}
  ]
};

function TopicNode({ data }) {
  const Icon = data.id==='root' ? Orbit : data.id==='hydrogen' ? Atom : data.id==='telescopes' ? RadioTower : data.id==='mapping' ? Telescope : data.id==='mass' ? Sparkles : Network;
  const focused = data.focused || false;
  const dimmed = data.dimmed || false;
  return <div className={`topic-node ${data.isChild ? 'child' : ''} ${data.color} ${data.selected ? 'selected' : ''} ${focused ? 'focused' : ''} ${dimmed ? 'dimmed' : ''}`} style={data.isChild && typeof data.delay === 'number' ? { animationDelay: data.delay + 'ms' } : undefined}>
    <Handle type="target" position={Position.Top} id="t-top" />
    <Handle type="target" position={Position.Left} id="t-left" />
    <Handle type="target" position={Position.Right} id="t-right" />
    <div className="node-icon"><Icon size={data.isChild ? 13 : 16}/></div>
    <div className="node-title">{data.title}</div>
    <div className="node-short">{data.short}</div>
    <Handle type="source" position={Position.Bottom} id="s-bottom" />
    <Handle type="source" position={Position.Right} id="s-right" />
    <Handle type="source" position={Position.Left} id="s-left" />
    <Handle type="source" position={Position.Top} id="s-top" />
    <Handle type="target" position={Position.Bottom} id="t-bottom" />
  </div>;
}
const nodeTypes = { topic: TopicNode };
const childSeeds = {
  'history-oot':{x:320,y:-60},'history-hulst':{x:320,y:20},'history-observe':{x:320,y:100},'history-dust':{x:320,y:180},
  'h-spin':{x:320,y:-80},'h-freq':{x:320,y:0},'h-map':{x:320,y:80},
  't-dish':{x:320,y:-60},'t-signal':{x:320,y:20},'t-pol':{x:320,y:100},
  'm-res':{x:320,y:-100},'m-doppler':{x:320,y:-20},'m-rot':{x:320,y:60},'m-warp':{x:320,y:140},'m-map':{x:320,y:220},
  'd-shift':{x:320,y:-60},'d-vel':{x:320,y:20},'d-rot':{x:320,y:100},
  'g-hubble':{x:320,y:-60},'g-ism':{x:320,y:20},'g-evol':{x:320,y:100},
  'm-count':{x:320,y:-80},'m-curve':{x:320,y:0},'m-dark':{x:320,y:80},'m-radio':{x:320,y:160},
  'm-warp-inter':{x:320,y:-40},'m-warp-vib':{x:320,y:40},'m-warp-infall':{x:320,y:120},
  'h-spin-conf':{x:320,y:0}
};

/* child id -> direct parent id (parent may itself be a child concept) */
const childParent = {};
Object.entries(childrenData).forEach(([parentId, list]) => list.forEach(c => { childParent[c.id] = parentId; }));
Object.entries(subChildren).forEach(([parentId, list]) => list.forEach(c => { childParent[c.id] = parentId; }));

const isMainTopic = (id) => topics.some(t => t.id === id);
const mainGroupOf = (id) => {
  let cur = id;
  for (let i = 0; i < 6 && cur; i++) {
    if (isMainTopic(cur)) return cur;
    cur = childParent[cur];
  }
  return null;
};

/* single normalised lookup for the details panel (fixes blank screen on child click) */
const conceptById = {};
[...topics, ...Object.values(childrenData).flat(), ...Object.values(subChildren).flat()].forEach(c => {
  const extra = conceptExtra[c.id] || {};
  conceptById[c.id] = {
    ...c,
    category: c.category || 'Concept',
    summary: c.summary || c.desc || '',
    key: Array.isArray(c.key) ? c.key : [],
    question: c.question || '',
    answer: c.answer || '',
    page: extra.page || c.page || '',
    definition: extra.definition || '',
    explanation: extra.explanation || '',
    equations: Array.isArray(extra.equations) ? extra.equations : [],
    extraRelated: Array.isArray(extra.related) ? extra.related : []
  };
});

const studyConcepts = studyOrderIds.map(id => conceptById[id]).filter(Boolean);
const studyIndexById = new Map(studyConcepts.map((c, i) => [c.id, i]));

const readStore = (key) => {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch (e) {
    return null;
  }
};
const writeStore = (key, value) => {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage may be unavailable */ }
};
const validIdList = (value) => Array.isArray(value) ? value.filter(id => typeof id === 'string' && conceptById[id]) : [];

const initialStudyState = (() => {
  const saved = readStore(STUDY_KEY) || {};
  const selectedId = typeof saved.selectedId === 'string' && conceptById[saved.selectedId] ? saved.selectedId : 'root';
  return {
    selectedId,
    revealedAnswers: validIdList(saved.revealedAnswers),
    revealedExplanations: validIdList(saved.revealedExplanations),
    visited: validIdList(saved.visited)
  };
})();

const initialQuizStats = (() => {
  const saved = readStore(QUIZ_KEY) || {};
  const best = Number.isFinite(saved.best) && saved.best >= 0 ? Math.min(saved.best, quiz.length) : 0;
  const attempts = Number.isFinite(saved.attempts) && saved.attempts >= 0 ? Math.floor(saved.attempts) : 0;
  return { best, attempts };
})();

const childNodes = Object.keys(childParent).map(id => {
  const concept = conceptById[id] || {};
  const parentTopic = topics.find(t => t.id === mainGroupOf(id));
  const seed = childSeeds[id] || { x: 320, y: 0 };
  const x = (parentTopic ? parentTopic.x : 0) + seed.x;
  const y = (parentTopic ? parentTopic.y : 0) + seed.y;
  return {
    id, type:'topic',
    position:{ x, y },
    data:{ ...concept, isChild:true, initialPosition:{ x, y }, selected:false, focused:false, dimmed:false },
    draggable:true,
    hidden:true
  };
});

const initialNodes = [
  ...topics.map(t => ({
    id:t.id, type:'topic', position:{x:t.x,y:t.y},
    data:{ ...conceptById[t.id], initialPosition:{x:t.x,y:t.y}, selected:false, focused:false, dimmed:false },
    draggable:true
  })),
  ...childNodes
];

const NODE_W = 242, NODE_H = 120, VIEW_PAD = 18;
const CHILD_W = 210, CHILD_H = 112, CHILD_GAP = 20, CLUSTER_GAP = 84;
const rectsOverlap = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

/*
 * Deterministic cluster layout.
 * Tries 1-3 column grids on each side of the parent (centered, top-aligned and
 * bottom-aligned), scores them by out-of-view area, overlap with the parent,
 * collisions with visible main nodes and distance, then uses the best one.
 * Children never overlap each other or their parent, and stay inside the canvas.
 */
function placeCluster(parent, children, occupied, view) {
  if (!children.length) return [];
  const n = children.length;
  const pw = parent.w || NODE_W;
  const ph = parent.h || NODE_H;
  const parentRect = { x: parent.x, y: parent.y, w: pw, h: ph };
  const center = { x: parent.x + pw / 2, y: parent.y + ph / 2 };
  const padX = view ? view.x + VIEW_PAD : -Infinity;
  const padY = view ? view.y + VIEW_PAD : -Infinity;
  const maxX = view ? view.x + view.w - VIEW_PAD : Infinity;
  const maxY = view ? view.y + view.h - VIEW_PAD : Infinity;

  const candidates = [];
  for (let cols = 1; cols <= Math.min(3, n); cols++) {
    const rows = Math.ceil(n / cols);
    const w = cols * CHILD_W + (cols - 1) * CHILD_GAP;
    const h = rows * CHILD_H + (rows - 1) * CHILD_GAP;
    const right = parent.x + pw + CLUSTER_GAP;
    const left = parent.x - CLUSTER_GAP - w;
    const down = parent.y + ph + CLUSTER_GAP;
    const up = parent.y - CLUSTER_GAP - h;
    const spots = [
      [right, center.y - h / 2, 'right'],
      [left, center.y - h / 2, 'left'],
      [center.x - w / 2, down, 'down'],
      [center.x - w / 2, up, 'up'],
      [right, padY, 'right'],
      [left, padY, 'left'],
      [right, maxY - h, 'right'],
      [left, maxY - h, 'left'],
      [center.x - w / 2, maxY - h, 'down'],
      [center.x - w / 2, padY, 'down']
    ];
    for (let k = 1; k <= 5; k++) {
      spots.push([right, center.y - h / 2 + k * 40, 'right']);
      spots.push([right, center.y - h / 2 - k * 40, 'right']);
      spots.push([left, center.y - h / 2 + k * 40, 'left']);
      spots.push([left, center.y - h / 2 - k * 40, 'left']);
      spots.push([center.x - w / 2 + k * 50, down, 'down']);
      spots.push([center.x - w / 2 - k * 50, down, 'down']);
      spots.push([center.x - w / 2 + k * 50, up, 'up']);
      spots.push([center.x - w / 2 - k * 50, up, 'up']);
    }
    spots.forEach(([sx, sy, dir]) => {
      const x = Math.max(padX, Math.min(sx, maxX - w));
      const y = Math.max(padY, Math.min(sy, maxY - h));
      const cells = [];
      for (let i = 0; i < n; i++) {
        cells.push({
          id: children[i].id,
          x: x + (i % cols) * (CHILD_W + CHILD_GAP),
          y: y + Math.floor(i / cols) * (CHILD_H + CHILD_GAP),
          dir
        });
      }
      let collisions = 0;
      cells.forEach(c => { collisions += occupied.filter(o => rectsOverlap({ x: c.x, y: c.y, w: CHILD_W, h: CHILD_H }, o)).length; });
      const outside = cells.filter(c => c.x < padX - 1 || c.y < padY - 1 || c.x + CHILD_W > maxX + 1 || c.y + CHILD_H > maxY + 1).length;
      const parentHit = rectsOverlap({ x, y, w, h }, parentRect) ? 1 : 0;
      const dist = Math.abs(x + w / 2 - center.x) + Math.abs(y + h / 2 - center.y);
      candidates.push({ score: outside * 1e8 + parentHit * 1e7 + collisions * 1e5 + dist, cells });
    });
  }
  candidates.sort((a, b) => a.score - b.score);
  return candidates[0].cells.map(c => {
    occupied.push({ x: c.x, y: c.y, w: CHILD_W, h: CHILD_H });
    return { id: c.id, x: c.x, y: c.y, dir: c.dir };
  });
}

function App() {
  const [selected, setSelected] = useState(initialStudyState.selectedId);
  const [mode, setMode] = useState('map');
  const [quizIndex, setQuizIndex] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizStats, setQuizStats] = useState(initialQuizStats);
  const [revealedAnswers, setRevealedAnswers] = useState(() => new Set(initialStudyState.revealedAnswers));
  const [revealedExplanations, setRevealedExplanations] = useState(() => new Set(initialStudyState.revealedExplanations));
  const [visitedStudy, setVisitedStudy] = useState(() => new Set(initialStudyState.visited));
  const [showAll, setShowAll] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [hoverId, setHoverId] = useState(null);
  const [pinId, setPinId] = useState(null);
  const [deepId, setDeepId] = useState(null);
  const [childSides, setChildSides] = useState({});
  const [coveredIds, setCoveredIds] = useState([]);
  const [flowNodes, setFlowNodes, onNodesChange] = useNodesState(initialNodes);
  const wrapRef = useRef(null);
  const nodesRef = useRef(flowNodes);
  const hoverTimer = useRef(null);
  const layoutKey = useRef('');
  const { getViewport, fitView } = useReactFlow();
  const nodesInitialized = useNodesInitialized();
  const didFit = useRef(false);
  nodesRef.current = flowNodes;

  useEffect(() => {
    if (!nodesInitialized || didFit.current) return;
    didFit.current = true;
    const id = setTimeout(() => fitView({ padding: 0.06, duration: 0 }), 30);
    return () => clearTimeout(id);
  }, [nodesInitialized, fitView]);

  const visibleIds = useMemo(() => new Set(showAll ? topics.map(t=>t.id) : ['root', selected, ...connections.filter(c=>c.includes(selected)).flat().filter(id=>id!==selected)]), [showAll, selected]);
  const groupId = mainGroupOf(pinId || hoverId);

  const cancelCollapse = () => { if (hoverTimer.current) { clearTimeout(hoverTimer.current); hoverTimer.current = null; } };
  const scheduleCollapse = (delay = 240) => {
    cancelCollapse();
    hoverTimer.current = setTimeout(() => { hoverTimer.current = null; setHoverId(null); }, delay);
  };
  const clearFocus = () => { cancelCollapse(); setHoverId(null); setPinId(null); setDeepId(null); };

  useEffect(() => () => cancelCollapse(), []);
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') { setHoverId(null); setPinId(null); setDeepId(null); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* the deeper level is opt-in: only the explicit Expand control sets deepId */
  useEffect(() => {
    if (!groupId) setDeepId(null);
  }, [groupId]);

  /* visibility: children exist only while their own group is open */
  useEffect(() => {
    const directKids = groupId ? (childrenData[groupId] || []).map(c => c.id) : [];
    const hoveredChild = groupId && hoverId && hoverId !== groupId && childParent[hoverId] ? hoverId : null;
    const deepChild = deepId && groupId && deepId !== groupId && childParent[deepId] ? deepId : null;
    const subKids = deepChild ? (subChildren[deepChild] || []).map(c => c.id) : [];
    const covered = new Set(coveredIds);
    setFlowNodes(nodes => nodes.map(node => {
      const isChild = !!childParent[node.id];
      const inGroup = node.id === groupId || directKids.includes(node.id) || subKids.includes(node.id);
      const hidden = isChild ? !inGroup : (!visibleIds.has(node.id) || covered.has(node.id));
      return {
        ...node,
        hidden,
        zIndex: inGroup ? (node.id === groupId ? 8 : 5) : 0,
        data: {
          ...node.data,
          selected: node.id === selected,
          focused: node.id === groupId || (node.id === hoveredChild && !topics.some(t => t.id === node.id)) || node.id === deepChild,
          dimmed: !!groupId && !inGroup
        }
      };
    }));
  }, [groupId, hoverId, selected, visibleIds, coveredIds, deepId, setFlowNodes]);

  const getViewRect = () => {
    const el = wrapRef.current;
    if (!el) return null;
    const vp = getViewport();
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height || !vp.zoom) return null;
    return { x: -vp.x / vp.zoom, y: -vp.y / vp.zoom, w: r.width / vp.zoom, h: r.height / vp.zoom };
  };

  /* layout: runs only when the open group changes (never while dragging) */
  useEffect(() => {
    if (!groupId) { setChildSides({}); setCoveredIds([]); layoutKey.current = ''; return; }
    const focusChild = deepId && deepId !== groupId && childParent[deepId] && (subChildren[deepId] || []).length ? deepId : '';
    const key = groupId + '|' + focusChild;
    if (layoutKey.current === key) return;
    layoutKey.current = key;

    const nodes = nodesRef.current;
    const view = getViewRect();
    const parent = nodes.find(n => n.id === groupId);
    if (!parent) return;
    const dims = n => ({ w: n.width || (n.measured && n.measured.width) || NODE_W, h: n.height || (n.measured && n.measured.height) || NODE_H });
    const parentRect = { x: parent.position.x, y: parent.position.y, ...dims(parent) };
    const occupied = nodes
      .filter(n => !childParent[n.id] && n.id !== groupId && visibleIds.has(n.id))
      .map(n => ({ x: n.position.x, y: n.position.y, ...dims(n) }));
    occupied.push(parentRect);
    const uiRects = [];
    if (view) {
      uiRects.push({ x: view.x + 4, y: view.y + view.h - 140, w: 44, h: 130 }); // zoom controls
      occupied.push(...uiRects);
    }

    const kids = (childrenData[groupId] || [])
      .map(c => nodes.find(n => n.id === c.id))
      .filter(Boolean)
      .map(n => ({ id: n.id, w: CHILD_W, h: CHILD_H }));
    const placements = placeCluster(parentRect, kids, occupied, view);

    const childId = focusChild;
    if (childId) {
      const placedChild = placements.find(p => p.id === childId);
      if (placedChild) {
        const subNodes = (subChildren[childId] || [])
          .map(c => nodes.find(n => n.id === c.id))
          .filter(Boolean)
          .map(n => ({ id: n.id, w: CHILD_W, h: CHILD_H }));
        // Deeper cards may cover dimmed main nodes (they are hidden when covered),
        // but must never cover the focused parent or the direct children.
        const parentGuard = { x: parentRect.x - 24, y: parentRect.y - 24, w: parentRect.w + 48, h: parentRect.h + 48 };
        const subOccupied = [
          parentGuard,
          ...placements.map(p => ({ x: p.x, y: p.y, w: CHILD_W, h: CHILD_H })),
          ...uiRects
        ];
        const subs = placeCluster(
          { x: placedChild.x, y: placedChild.y, w: CHILD_W, h: CHILD_H },
          subNodes, subOccupied, view
        );
        placements.push(...subs);
      }
    }

    const sides = {};
    placements.forEach(p => {
      const cx = p.x + CHILD_W / 2, cy = p.y + CHILD_H / 2;
      const dx = cx - (parentRect.x + parentRect.w / 2);
      const dy = cy - (parentRect.y + parentRect.h / 2);
      sides[p.id] = Math.abs(dx) >= Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
    });
    setChildSides(sides);
    const delays = {};
    placements.forEach((p, i) => { delays[p.id] = Math.min(i, 6) * 40; });
    const covered = nodes
      .filter(n => !childParent[n.id] && n.id !== groupId && visibleIds.has(n.id))
      .filter(n => placements.some(p => rectsOverlap(
        { x: p.x, y: p.y, w: CHILD_W, h: CHILD_H },
        { x: n.position.x, y: n.position.y, ...dims(n) }
      )))
      .map(n => n.id);
    setCoveredIds(covered);
    setFlowNodes(prev => prev.map(n => {
      const p = placements.find(pl => pl.id === n.id);
      if (!p) return n;
      return { ...n, position: { x: p.x, y: p.y }, hidden: false, data: { ...n.data, delay: delays[n.id] || 0 } };
    }));
  }, [groupId, deepId, getViewport, setFlowNodes, visibleIds]);

  const edges = useMemo(() => {
    const covered = new Set(coveredIds);
    const base = connections.filter(c=>visibleIds.has(c[0])&&visibleIds.has(c[1])&&!covered.has(c[0])&&!covered.has(c[1])).map(c=>({
      id:`e-${c[0]}-${c[1]}`, source:c[0], target:c[1],
      sourceHandle:'s-bottom', targetHandle:'t-top',
      type:'smoothstep', animated:c.includes(selected),
      style:{stroke:c.includes(selected)?'#49d8ef':'#29445f',strokeWidth:c.includes(selected)?2.2:1.2},
      markerEnd:{type:MarkerType.ArrowClosed,color:c.includes(selected)?'#49d8ef':'#29445f',width:13,height:13}
    }));
    if (!groupId) return base;
    const extra = [];
    const addChildEdges = (parentId, list) => (list || []).forEach(c => {
      const side = childSides[c.id] || 'right';
      const handles = side === 'right' ? ['s-right', 't-left']
        : side === 'left' ? ['s-left', 't-right']
        : side === 'down' ? ['s-bottom', 't-top']
        : ['s-top', 't-bottom'];
      extra.push({
        id:`ec-${parentId}-${c.id}`, source:parentId, target:c.id,
        sourceHandle: handles[0], targetHandle: handles[1],
        type:'smoothstep', animated:true,
        style:{stroke:'#49d8ef', strokeWidth:2},
        markerEnd:{type:MarkerType.ArrowClosed, color:'#49d8ef', width:11, height:11}
      });
    });
    addChildEdges(groupId, childrenData[groupId]);
    const deepChild = deepId && deepId !== groupId && childParent[deepId] ? deepId : null;
    if (deepChild) addChildEdges(deepChild, subChildren[deepChild]);
    return [...base, ...extra];
  }, [visibleIds, selected, groupId, deepId, childSides, coveredIds]);

  const active = conceptById[selected] || conceptById.root || topics[0];

  const relatedOf = (id) => {
    if (isMainTopic(id)) {
      return [...new Set(connections.filter(c => c.includes(id)).map(c => (c[0] === id ? c[1] : c[0])))];
    }
    const parent = childParent[id];
    const extra = conceptById[id]?.extraRelated || [];
    return [...new Set([parent, ...extra].filter(x => x && x !== id))];
  };
  const relatedConcepts = relatedOf(active.id).map(id => conceptById[id]).filter(Boolean);
  const deeperKids = subChildren[active.id] || [];
  const deepOpen = deepId === active.id;
  const toggleDeeper = () => {
    if (!deeperKids.length) return;
    if (deepOpen) { setDeepId(null); return; }
    setPinId(mainGroupOf(active.id));
    setHoverId(active.id);
    setDeepId(active.id);
  };
  const openConcept = (id) => {
    setSelected(id);
    setDeepId(null);
    if (mode === 'map') {
      setPinId(mainGroupOf(id));
      setHoverId(id);
    }
  };

  const studyIndex = Math.max(0, studyIndexById.has(selected) ? studyIndexById.get(selected) : 0);
  const studyConcept = studyConcepts[studyIndex] || active;
  const studyTotal = studyConcepts.length;
  const studyVisitedCount = visitedStudy.size;
  const selectedStudyRef = useRef(null);
  const goStudy = (delta) => {
    const next = Math.min(studyTotal - 1, Math.max(0, studyIndex + delta));
    if (next !== studyIndex) openConcept(studyConcepts[next].id);
  };
  const revealAnswer = (id) => setRevealedAnswers(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const revealExplanation = (id) => setRevealedExplanations(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

  useEffect(() => {
    if (mode !== 'study') return;
    setVisitedStudy(prev => (prev.has(selected) ? prev : new Set(prev).add(selected)));
    if (selectedStudyRef.current) {
      selectedStudyRef.current.scrollIntoView({ block: 'nearest' });
    }
  }, [mode, selected]);

  useEffect(() => {
    writeStore(STUDY_KEY, {
      selectedId: selected,
      revealedAnswers: [...revealedAnswers],
      revealedExplanations: [...revealedExplanations],
      visited: [...visitedStudy]
    });
  }, [selected, revealedAnswers, revealedExplanations, visitedStudy]);

  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName ? e.target.tagName : '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (mode === 'study') {
        if (e.key === 'ArrowRight') { e.preventDefault(); goStudy(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goStudy(-1); }
        if (e.key === 'Enter' && e.target && e.target.tagName === 'BUTTON') return;
      }
      if (mode === 'quiz') {
        if (/^[1-9]$/.test(e.key) && !answered) {
          const idx = Number(e.key) - 1;
          if (idx < quiz[quizIndex].opts.length) answerQuiz(idx);
        }
        if (e.key === 'Enter' && answered) { e.preventDefault(); nextQuiz(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const handleNodeEnter = (_, node) => {
    cancelCollapse();
    setHoverId(node.id);
  };
  const handleNodeLeave = (_, node) => {
    if (pinId) return;
    scheduleCollapse();
  };
  const handleNodeClick = (_, node) => {
    setSelected(node.id);
    const group = mainGroupOf(node.id);
    setPinId(prev => (prev === group ? null : group));
    setHoverId(node.id);
  };

  const resetLayout = () => {
    clearFocus();
    setFlowNodes(nodes => nodes.map(node => ({
      ...node, position:{...node.data.initialPosition}
    })));
    setTimeout(() => fitView({ padding: 0.06, duration: 0 }), 40);
  };

  const resetQuiz = () => { setQuizIndex(0); setChosen(null); setScore(0); setAnswered(false); setAnswers([]); };
  const answerQuiz = (i) => {
    if (answered) return;
    setChosen(i); setAnswered(true);
    setAnswers(prev => {
      const next = [...prev];
      next[quizIndex] = i;
      return next;
    });
    if (i===quiz[quizIndex].correct) setScore(s=>s+1);
  };
  const nextQuiz = () => {
    if (quizIndex < quiz.length-1) { setQuizIndex(i=>i+1); setChosen(null); setAnswered(false); }
    else {
      const stats = { best: Math.max(quizStats.best, score), attempts: quizStats.attempts + 1 };
      setQuizStats(stats);
      writeStore(QUIZ_KEY, stats);
      setMode('results');
    }
  };
  const resetSavedQuiz = () => {
    const stats = { best: 0, attempts: 0 };
    setQuizStats(stats);
    writeStore(QUIZ_KEY, stats);
  };

  return <div className="app-shell">
    <header className="topbar">
      <div className="brand"><div className="brand-mark"><Orbit size={22}/></div><div><div className="brand-title">COSMIC<span>NOTES</span></div><div className="brand-sub">RADIO ASTRONOMY · LECTURE 02</div></div></div>
      <div className="top-actions"><span className="source-pill"><span className="pulse"></span> LECTURE-BASED MAP</span><button className="icon-button" title="Reset quiz" onClick={resetQuiz}><RotateCcw size={16}/></button></div>
    </header>
    <main>
      <section className="hero">
        <div className="eyebrow"><Sparkles size={14}/> INTERACTIVE LEARNING MAP</div>
        <h1>Listen to the <em>unseen</em> universe.</h1>
        <p>Explore how radio waves reveal interstellar hydrogen, map the Milky Way, and uncover the mass of galaxies.</p>
        <div className="hero-meta"><span><BookOpen size={14}/> 29-slide lecture</span><span><Network size={14}/> {topics.length} concept clusters</span><span><Brain size={14}/> Study mode included</span></div>
      </section>

      <div className="toolbar">
        <div className="view-switch">
          <button className={mode==='map'?'active':''} onClick={()=>setMode('map')}><Network size={15}/> Mind map</button>
          <button className={mode==='study'?'active':''} onClick={()=>setMode('study')}><BookOpen size={15}/> Study</button>
          <button className={mode==='quiz'||mode==='results'?'active':''} onClick={()=>{resetQuiz();setMode('quiz')}}><Brain size={15}/> Quiz</button>
        </div>
      </div>

      {mode==='map' && <section className={`workspace ${detailsOpen ? '' : 'details-collapsed'}`}>
        <div className={`map-area ${groupId ? 'focus-open' : ''}`}>
          <div className="map-label"><span className="live-dot"></span> CONCEPT NETWORK <span className="map-label-muted">· select a node to explore</span></div>
          <div className="map-controls-row"><button className={`tiny-toggle ${showAll?'on':''}`} onClick={()=>setShowAll(v=>!v)}>{showAll?'All topics visible':'Focus mode'}</button><div className="map-actions"><span className="drag-note">Drag nodes · zoom with controls</span>{groupId && <button className="layout-reset" onClick={clearFocus} title="Collapse the open topic and return to the overview (Esc)"><X size={14}/> Clear focus</button>}<button className="layout-reset" onClick={resetLayout} title="Restore the original node positions"><RotateCcw size={14}/> Reset layout</button><button className="panel-toggle" onClick={()=>setDetailsOpen(v=>!v)} aria-expanded={detailsOpen} title={detailsOpen?'Hide concept details':'Show concept details'}>{detailsOpen?<><ChevronRight size={15}/> Hide details</>:<><ChevronLeft size={15}/> Show details</>}</button></div></div>
          <div className="flow-wrap" ref={wrapRef} onMouseLeave={() => { if (!pinId) scheduleCollapse(180); }}>
            <ReactFlow nodes={flowNodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} nodesDraggable={true} onNodeMouseEnter={handleNodeEnter} onNodeMouseLeave={handleNodeLeave} fitView fitViewOptions={{padding:0.05}} minZoom={0.25} maxZoom={1.6} onNodeClick={(_,node)=>{ setSelected(node.id); if (pinId === node.id) setPinId(null); else setPinId(node.id); }} proOptions={{hideAttribution:true}}>
              <Background color="#183149" gap={24} size={1}/>
              <Controls position="bottom-left" showInteractive={false}/>
            </ReactFlow>
          </div>
          <div className="map-legend"><span><i className="legend-dot cyan"></i> Hydrogen & mapping</span><span><i className="legend-dot amber"></i> Discovery & motion</span><span><i className="legend-dot violet"></i> Instruments & galaxies</span><span><i className="legend-dot rose"></i> Open problem</span></div>
        </div>
        {detailsOpen && <aside className="detail-panel">
          <div className="panel-top"><span className="panel-kicker">CONCEPT DETAILS</span><span className="slide-ref">{active.page ? `SLIDES ${active.page}` : 'LECTURE 2'}</span></div>
          <div className="detail-scroll">
            <div className={`detail-symbol ${active.color}`}>{active.id==='hydrogen'?<Atom/>:active.id==='telescopes'?<RadioTower/>:active.id==='mapping'?<Telescope/>:active.id==='mass'?<Sparkles/>:<Orbit/>}</div>
            <div className="detail-category">{active.category}</div>
            <h2>{active.title || 'Concept'}</h2>
            <p className="detail-definition">{active.definition || active.summary || 'No summary is recorded for this concept yet.'}</p>
            {active.explanation && <p className="detail-explanation">{active.explanation}</p>}
            {active.key.length > 0 && <><div className="detail-divider"></div><h3>Key ideas</h3><ul className="key-list">{active.key.map((k,i)=><li key={i}><span className="key-bullet">{String(i+1).padStart(2,'0')}</span><span>{k}</span></li>)}</ul></>}
            {active.equations.length > 0 && <div className="detail-section"><h3>Equations</h3>{active.equations.map((eq,i)=><div className="equation" key={i}><code>{eq.expr}</code><p className="equation-note">{eq.note}</p></div>)}</div>}
            {relatedConcepts.length > 0 && <div className="detail-section"><h3>Related concepts</h3><div className="related-list">{relatedConcepts.map(rel=><button key={rel.id} className="related-chip" onClick={()=>openConcept(rel.id)} title={`Open ${rel.title}`}><ChevronRight size={12}/>{rel.title}</button>)}</div></div>}
            {active.question && <div className="quick-check"><div className="quick-check-head"><CircleHelp size={15}/> QUICK CHECK</div><p>{active.question}</p>{revealedAnswers.has(active.id) ? <div className="quick-answer">{active.answer}</div> : <button onClick={()=>revealAnswer(active.id)}>Reveal answer <ChevronRight size={15}/></button>}</div>}
            {childParent[active.id] && <p className="detail-supplement">Sub-concept of <b>{conceptById[childParent[active.id]]?.title || 'this lecture map'}</b>. Explanations come from the lecture slides listed above.</p>}
            {deeperKids.length > 0 && <div className="deep-control"><button className="secondary-button small" onClick={toggleDeeper} aria-expanded={deepOpen}>{deepOpen ? 'Hide deeper concepts' : `Show deeper concepts (${deeperKids.length})`}</button><span className="deep-hint">Optional — deeper concepts are never shown on hover.</span></div>}
          </div>
          <div className="panel-footer"><span>RADIO ASTRONOMY · LECTURE 02</span><span>{isMainTopic(active.id) ? `0${topics.findIndex(t=>t.id===active.id)+1} / 0${topics.length}` : 'SUB-CONCEPT'}</span></div>
        </aside>}
      </section>}

      {mode==='study' && <section className="study-layout">
        <div className="study-list"><div className="section-heading"><div><span className="panel-kicker">STUDY DECK</span><h2>Explore the concepts</h2></div><span className="count-badge">{studyTotal} CONCEPTS</span></div>
          <div className="study-progress"><div style={{width:`${(studyVisitedCount/studyTotal)*100}%`}}/></div>
          <p className="study-progress-label">{studyVisitedCount} of {studyTotal} concepts visited · saved locally</p>
          <div className="study-list-scroll">
            {studyConcepts.map(t=><button key={t.id} ref={studyConcept.id===t.id?selectedStudyRef:null} className={`study-item ${studyConcept.id===t.id?'selected':''} ${isMainTopic(t.id)?'':'child-item'}`} onClick={()=>setSelected(t.id)} aria-current={studyConcept.id===t.id ? 'true' : undefined}><span className={`study-icon ${t.color}`}>{t.id==='hydrogen'?<Atom size={17}/>:t.id==='telescopes'?<RadioTower size={17}/>:<Network size={17}/>}</span><span className="study-item-text"><b>{t.title}</b><small>Slides {t.page} · {t.category}</small></span><ChevronRight size={16}/></button>)}
          </div>
        </div>
        <article className="study-detail">
          <div className="study-detail-top"><span className="panel-kicker">CONCEPT {studyIndex+1} OF {studyTotal} · SLIDES {studyConcept.page || '—'}</span><span className="count-badge">{(studyConcept.category || 'CONCEPT').toUpperCase()}</span></div>
          <h2>{studyConcept.title}</h2>
          <p className="study-definition">{studyConcept.definition || studyConcept.summary}</p>
          {!isMainTopic(studyConcept.id) && <p className="study-parent">Part of <button className="inline-link" onClick={()=>setSelected(childParent[studyConcept.id] || 'root')}>{conceptById[childParent[studyConcept.id]]?.title || 'the parent topic'}</button></p>}
          {studyConcept.explanation && <div className="study-reveal">
            <button className="secondary-button small" onClick={()=>revealExplanation(studyConcept.id)} aria-expanded={revealedExplanations.has(studyConcept.id)}>{revealedExplanations.has(studyConcept.id) ? 'Hide explanation' : 'Show explanation'}</button>
            {revealedExplanations.has(studyConcept.id) && <p className="study-explanation">{studyConcept.explanation}</p>}
          </div>}
          {studyConcept.key.length > 0 && <><h3>Key ideas</h3><ul className="key-list">{studyConcept.key.map((k,i)=><li key={i}><span className="key-bullet">{String(i+1).padStart(2,'0')}</span><span>{k}</span></li>)}</ul></>}
          {studyConcept.equations.length > 0 && <div className="detail-section"><h3>Equations</h3>{studyConcept.equations.map((eq,i)=><div className="equation" key={i}><code>{eq.expr}</code><p className="equation-note">{eq.note}</p></div>)}</div>}
          {relatedOf(studyConcept.id).length > 0 && <div className="detail-section"><h3>Connections</h3><div className="related-list">{relatedOf(studyConcept.id).map(id=>conceptById[id]).filter(Boolean).map(rel=><button key={rel.id} className="related-chip" onClick={()=>setSelected(rel.id)}><ChevronRight size={12}/>{rel.title}</button>)}</div></div>}
          {studyConcept.question && <div className="answer-card"><div className="quick-check-head"><CircleHelp size={15}/> CHECK YOUR UNDERSTANDING</div><p>{studyConcept.question}</p>{revealedAnswers.has(studyConcept.id) ? <div className="answer-text">{studyConcept.answer}</div> : <button className="secondary-button small" onClick={()=>revealAnswer(studyConcept.id)}>Reveal answer</button>}</div>}
          <div className="study-nav">
            <button className="secondary-button" onClick={()=>goStudy(-1)} disabled={studyIndex===0}><ChevronLeft size={16}/> Previous</button>
            <span className="study-nav-count">{studyIndex+1} / {studyTotal}</span>
            <button className="primary-button" onClick={()=>goStudy(1)} disabled={studyIndex===studyTotal-1}>Next <ChevronRight size={16}/></button>
          </div>
          <div className="study-actions">
            <button className="secondary-button" onClick={()=>{ setMode('map'); setPinId(mainGroupOf(studyConcept.id)); setHoverId(studyConcept.id); }}><Network size={16}/> Return to concept map</button>
            <span className="study-hint">Use ← → to move between concepts</span>
          </div>
        </article>
      </section>}

      {mode==='quiz' && <section className="quiz-shell"><div className="quiz-head"><span className="panel-kicker">KNOWLEDGE CHECK</span><span className="count-badge">QUESTION {quizIndex+1} / {quiz.length}</span></div><div className="progress-track"><div style={{width:`${((quizIndex+(answered?1:0))/quiz.length)*100}%`}}/></div><div className="quiz-card"><div className="quiz-orb"><Brain size={26}/></div><h2>{quiz[quizIndex].q}</h2><div className="quiz-options">{quiz[quizIndex].opts.map((opt,i)=><button key={opt} className={`quiz-option ${answered&&i===quiz[quizIndex].correct?'correct':''} ${answered&&chosen===i&&i!==quiz[quizIndex].correct?'wrong':''}`} onClick={()=>answerQuiz(i)} disabled={answered}><span className="option-letter">{i+1}</span>{opt}{answered&&i===quiz[quizIndex].correct&&<CheckCircle2 size={17}/>}</button>)}</div>{answered&&<div className={`feedback ${chosen===quiz[quizIndex].correct?'good':'bad'}`}><b>{chosen===quiz[quizIndex].correct?'Correct.':'Not quite.'}</b> {quiz[quizIndex].explain}</div>}<div className="quiz-bottom"><span className="score-label">SCORE <b>{score}</b> / {quiz.length}</span><button className="primary-button" disabled={!answered} onClick={nextQuiz}>{quizIndex===quiz.length-1?'See results':'Next question'} <ChevronRight size={16}/></button></div></div><p className="quiz-source">Questions are based on Radio Astronomy Lecture 2 · press 1–{Math.min(9, quiz[quizIndex].opts.length)} to answer, Enter for the next question.</p></section>}

      {mode==='results' && <section className="results-card"><div className="quiz-orb"><Sparkles size={26}/></div><span className="panel-kicker">SESSION COMPLETE</span><h2>{score >= Math.ceil(quiz.length*0.8) ? 'Excellent work.' : score >= Math.ceil(quiz.length*0.5) ? 'Good progress — review the misses.' : 'Good start — review and try again.'}</h2><div className="result-score">{score}<span> / {quiz.length}</span></div><p>You answered {score} of {quiz.length} questions correctly. Best saved score: <b>{quizStats.best} / {quiz.length}</b> · attempts: {quizStats.attempts}.</p><div className="quiz-review">{quiz.map((qq,i)=>{const pick=answers[i]; const ok=pick===qq.correct; return <div className={`review-row ${ok?'good':'bad'}`} key={i}><div className="review-head"><span>{ok?'✓':'✕'} {i+1}. {qq.q}</span><span className="review-ref">{qq.ref}</span></div><p>Your answer: {pick==null?'—':qq.opts[pick]}{!ok && <> · Correct: <b>{qq.opts[qq.correct]}</b></>}</p></div>;})}</div><div className="result-actions"><button className="primary-button" onClick={()=>{resetQuiz();setMode('quiz')}}><RotateCcw size={16}/> Try again</button><button className="secondary-button" onClick={()=>setMode('map')}><Network size={16}/> Back to map</button><button className="secondary-button" onClick={resetSavedQuiz} title="Clear the saved best score and attempt count"><X size={16}/> Clear saved score</button></div></section>}
      <footer className="footer"><div className="footer-brand"><Orbit size={16}/> COSMICNOTES</div><span>Built for learning · Based on Radio Astronomy Lecture 2 by Dr. Reham El-Kholy</span><span className="footer-note">Use the map to connect ideas, not just memorize terms.</span></footer>
    </main>
  </div>;
}

createRoot(document.getElementById('root')).render(<ReactFlowProvider><App/></ReactFlowProvider>);
