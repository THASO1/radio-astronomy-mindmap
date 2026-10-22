import React, { useCallback, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactFlow, {
  Background, Controls, MiniMap, Handle, Position, ReactFlowProvider,
  useNodesState, useEdgesState, MarkerType
} from 'reactflow';
import { Search, BookOpen, Network, Brain, ChevronRight, RotateCcw, Atom, RadioTower, Orbit, Telescope, Sparkles, X, CheckCircle2, CircleHelp } from 'lucide-react';
import 'reactflow/dist/style.css';
import './styles.css';

const topics = [
  { id:'root', title:'Radio Astronomy', short:'Lecture 2 · concept map', category:'Core idea', x:680, y:320, color:'root', page:'1', summary:'This lecture connects the discovery of interstellar hydrogen with radio-telescope techniques and the structure, motion, and mass of galaxies.', key:['Radio observations reveal information that optical observations can miss.','The 21-cm hydrogen line is a key tracer of neutral atomic hydrogen.','Doppler shifts help infer gas motion in the Milky Way.'], question:'What is the central link between radio astronomy and studying the Milky Way?', answer:'Radio observations can trace interstellar hydrogen and use its spectral line and Doppler shift to map gas and study galactic structure and motion.'},
  { id:'history', title:'Discovery of Interstellar Hydrogen', short:'From prediction to detection', category:'History & discovery', x:210, y:65, color:'amber', page:'2–9', summary:'The lecture follows the story from the dusty Milky Way and Jan Oort’s work to Hendrik van de Hulst’s prediction of a radio spectral line from atomic hydrogen, followed by post-war observations.', key:['Dust obscures parts of the Milky Way in visible light.','Jan Oort is connected in the lecture to Milky Way rotation and the Oort Cloud.','Van de Hulst considered which common element could produce a radio-wavelength spectral line.','The lecture highlights observations around 1950 in the Netherlands, Australia, and the US.'], question:'Which element is central to the predicted 21-cm radio line?', answer:'Atomic hydrogen.'},
  { id:'hydrogen', title:'Atomic Hydrogen & 21-cm Line', short:'1420 MHz · 21 cm', category:'Physical concept', x:80, y:300, color:'cyan', page:'6–9, 18', summary:'The lecture presents the hydrogen transition associated with a radio line near 1420 MHz, with a wavelength of about 21 cm. This line is used to map hydrogen across the Milky Way.', key:['Frequency shown in the lecture: 1420 MHz.','Wavelength shown in the lecture: 21 cm.','The diagram illustrates a change between relative proton–electron spin configurations.','Hydrogen is distributed throughout the Galaxy; mapping it reveals large-scale features.'], question:'What frequency and wavelength are associated with the hydrogen line in the lecture?', answer:'Approximately 1420 MHz and 21 cm.'},
  { id:'telescopes', title:'Radio Telescopes & Signal Path', short:'Collect · focus · amplify · detect', category:'Instrumentation', x:450, y:65, color:'violet', page:'11–16', summary:'This branch covers radio telescopes and how their dishes collect incoming radio waves, focus them at a receiver, and use electronic stages such as amplification and mixing. The lecture also introduces polarization and a double antenna.', key:['Parabolic dishes direct incoming waves toward a focus.','Prime focus is the location where the incoming signal is concentrated.','The lecture names amplification, noise, and mixing as important signal topics.','A double antenna is discussed in connection with polarization.'], question:'What is the role of a parabolic dish in a radio telescope?', answer:'It collects incoming radio waves and directs them toward a focus where a receiver can detect the signal.'},
  { id:'mapping', title:'Mapping the Hydrogen Sky', short:'Wavelength · aperture · beamwidth', category:'Mapping & resolution', x:390, y:300, color:'cyan', page:'17–22', summary:'The lecture connects the 21-cm line with mapping hydrogen, discusses wavelength, aperture, and beamwidth, then introduces Doppler shifts and differential rotation as tools for understanding the Milky Way.', key:['Wavelength, aperture, and beamwidth are linked to how a telescope resolves a source.','Blueshift and redshift indicate relative motion along the line of sight.','Differential rotation means different parts of a galaxy rotate at different rates.','The lecture raises possible explanations for the Galactic warp.'], question:'What do redshift and blueshift help astronomers infer?', answer:'Motion along the line of sight: a shift toward longer wavelengths is redshift, and toward shorter wavelengths is blueshift.'},
  { id:'doppler', title:'Doppler Effect & Galactic Motion', short:'Redshift · blueshift · rotation', category:'Motion', x:190, y:520, color:'amber', page:'20–22', summary:'The lecture shows blueshift and redshift, then links spectral shifts to differential rotation and the mapping of gas in the Milky Way.', key:['The lecture labels blueshift and redshift.','The Doppler relation on slide 20 links the frequency shift to velocity.','Differential rotation is shown alongside a hydrogen-sky map.','Galactic warp is presented with possible causes as questions, not settled conclusions.'], question:'What does the lecture suggest about the cause of the Galactic warp?', answer:'It raises several possibilities: interaction with another galaxy, vibrations in differential rotation, or infall of gas. The slide presents these as open questions.'},
  { id:'galaxies', title:'Hydrogen & Galaxy Structure', short:'Types · gas · evolution', category:'Galaxies', x:900, y:65, color:'violet', page:'23–26', summary:'The lecture moves from galaxy examples and Hubble’s tuning fork classification to gas, the interstellar medium (ISM), galactic evolution, and stellar formation.', key:['Hubble’s tuning fork is presented as a galaxy-classification scheme.','Gas and galaxies are connected to galactic evolution.','The lecture contrasts atmosphere and ISM and mentions stellar formation.'], question:'Which classification diagram is introduced in the lecture?', answer:'Hubble’s tuning fork.'},
  { id:'mass', title:'Weighing Galaxies & Dark Matter', short:'Expected vs observed rotation', category:'Open problem', x:900, y:330, color:'rose', page:'27–28', summary:'The lecture compares ways to estimate galaxy mass, including counting visible matter and gravitational evidence. It highlights a mismatch between expected and observed rotation and introduces dark matter.', key:['The lecture contrasts counting matter with gravitational methods.','The rotation-curve graphic shows a discrepancy between expected and observed behavior.','Dark matter is introduced through the questions “What is it?” and “How much is there?”','The lecture also shows a radio-beam illustration and spectral profile.'], question:'What issue motivates the dark-matter discussion in this lecture?', answer:'The discrepancy between the expected and observed galaxy rotation behavior shown in the lecture.'}
];

const connections = [
 ['root','history'],['root','hydrogen'],['root','telescopes'],['root','mapping'],['root','galaxies'],['root','mass'],
 ['history','hydrogen'],['hydrogen','telescopes'],['hydrogen','mapping'],['telescopes','mapping'],['mapping','doppler'],['doppler','mass'],['mapping','galaxies'],['galaxies','mass']
];

const quiz = [
 {q:'Which wavelength is associated with the neutral hydrogen line in the lecture?', opts:['21 cm','2.1 mm','21 m'], correct:0, explain:'Slide 7 and slide 18 show the hydrogen line at about 21 cm (1420 MHz).'},
 {q:'What does a parabolic dish do in a radio telescope?', opts:['Creates hydrogen atoms','Focuses incoming radio waves','Classifies galaxy shapes'], correct:1, explain:'The dish collects radio waves and directs them toward a focus/receiver.'},
 {q:'What can a Doppler shift help astronomers study?', opts:['Only galaxy color','Gas motion along the line of sight','The chemical formula of dust'], correct:1, explain:'The lecture connects blueshift/redshift with velocity and galactic motion.'},
 {q:'Which topic is introduced with Hubble’s tuning fork?', opts:['Galaxy classification','Antenna noise','Atomic spin only'], correct:0, explain:'Slide 25 presents Hubble’s classification scheme.'},
 {q:'What discrepancy leads into the dark-matter discussion?', opts:['Missing telescope dishes','Expected vs observed galaxy rotation','Different names for hydrogen'], correct:1, explain:'Slides 27–28 show the rotation-curve discrepancy and introduce dark matter.'}
];

function TopicNode({ data }) {
  const Icon = data.id==='root' ? Orbit : data.id==='hydrogen' ? Atom : data.id==='telescopes' ? RadioTower : data.id==='mapping' ? Telescope : data.id==='mass' ? Sparkles : Network;
  return <div className={`topic-node ${data.color} ${data.selected ? 'selected' : ''}`}>
    <Handle type="target" position={Position.Top} />
    <div className="node-icon"><Icon size={16}/></div>
    <div className="node-title">{data.title}</div>
    <div className="node-short">{data.short}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>;
}
const nodeTypes = { topic: TopicNode };

function App() {
  const [selected, setSelected] = useState('root');
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('map');
  const [quizIndex, setQuizIndex] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const filtered = useMemo(() => topics.filter(t => (t.title+' '+t.short+' '+t.category+' '+t.summary+' '+t.key.join(' ')).toLowerCase().includes(query.toLowerCase())), [query]);
  const visibleIds = useMemo(() => new Set(showAll ? topics.map(t=>t.id) : ['root', selected, ...connections.filter(c=>c.includes(selected)).flat().filter(id=>id!==selected)]), [showAll, selected]);
  const nodes = useMemo(() => topics.filter(t=>visibleIds.has(t.id)).map(t=>({
    id:t.id, type:'topic', position:{x:t.x,y:t.y},
    data:{...t, selected:t.id===selected, onClick:()=>setSelected(t.id)},
    draggable:true
  })), [visibleIds, selected]);
  const edges = useMemo(() => connections.filter(c=>visibleIds.has(c[0])&&visibleIds.has(c[1])).map((c,i)=>({
    id:`e-${c[0]}-${c[1]}`, source:c[0], target:c[1],
    type:'smoothstep', animated:c.includes(selected),
    style:{stroke:c.includes(selected)?'#49d8ef':'#29445f',strokeWidth:c.includes(selected)?2.2:1.2},
    markerEnd:{type:MarkerType.ArrowClosed,color:c.includes(selected)?'#49d8ef':'#29445f',width:13,height:13}
  })), [visibleIds, selected]);
  const active = topics.find(t=>t.id===selected) || topics[0];

  const resetQuiz = () => { setQuizIndex(0); setChosen(null); setScore(0); setAnswered(false); };
  const answerQuiz = (i) => {
    if (answered) return;
    setChosen(i); setAnswered(true);
    if (i===quiz[quizIndex].correct) setScore(s=>s+1);
  };
  const nextQuiz = () => {
    if (quizIndex < quiz.length-1) { setQuizIndex(i=>i+1); setChosen(null); setAnswered(false); }
    else { setMode('results'); }
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
        <div className="search-wrap"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search concepts, terms, or questions…" aria-label="Search concepts"/></div>
        <div className="view-switch">
          <button className={mode==='map'?'active':''} onClick={()=>setMode('map')}><Network size={15}/> Mind map</button>
          <button className={mode==='study'?'active':''} onClick={()=>setMode('study')}><BookOpen size={15}/> Study</button>
          <button className={mode==='quiz'||mode==='results'?'active':''} onClick={()=>{resetQuiz();setMode('quiz')}}><Brain size={15}/> Quiz</button>
        </div>
      </div>

      {mode==='map' && <section className="workspace">
        <div className="map-area">
          <div className="map-label"><span className="live-dot"></span> CONCEPT NETWORK <span className="map-label-muted">· select a node to explore</span></div>
          <div className="map-controls-row"><button className={`tiny-toggle ${showAll?'on':''}`} onClick={()=>setShowAll(v=>!v)}>{showAll?'All topics visible':'Focus mode'}</button><span className="drag-note">Drag nodes · zoom with controls</span></div>
          <div className="flow-wrap">
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView fitViewOptions={{padding:0.18}} minZoom={0.25} maxZoom={1.6} onNodeClick={(_,node)=>setSelected(node.id)} proOptions={{hideAttribution:true}}>
              <Background color="#183149" gap={24} size={1}/>
              <Controls position="bottom-left" showInteractive={false}/>
              <MiniMap position="bottom-right" nodeColor={n=>({root:'#4bd8ef',amber:'#f6b64d',cyan:'#49d8ef',violet:'#a78bfa',rose:'#fb7185'}[n.data.color]||'#49d8ef')} maskColor="rgba(3,9,18,.75)" style={{background:'#091524',border:'1px solid #1d344a'}}/>
            </ReactFlow>
          </div>
          <div className="map-legend"><span><i className="legend-dot cyan"></i> Hydrogen & mapping</span><span><i className="legend-dot amber"></i> Discovery & motion</span><span><i className="legend-dot violet"></i> Instruments & galaxies</span><span><i className="legend-dot rose"></i> Open problem</span></div>
        </div>
        <aside className="detail-panel">
          <div className="panel-top"><span className="panel-kicker">CONCEPT DETAILS</span><span className="slide-ref">SLIDES {active.page}</span></div>
          <div className={`detail-symbol ${active.color}`}>{active.id==='hydrogen'?<Atom/>:active.id==='telescopes'?<RadioTower/>:active.id==='mapping'?<Telescope/>:active.id==='mass'?<Sparkles/>:<Orbit/>}</div>
          <div className="detail-category">{active.category}</div>
          <h2>{active.title}</h2>
          <p className="detail-summary">{active.summary}</p>
          <div className="detail-divider"></div>
          <h3>Key ideas</h3>
          <ul className="key-list">{active.key.map((k,i)=><li key={i}><span className="key-bullet">{String(i+1).padStart(2,'0')}</span><span>{k}</span></li>)}</ul>
          <div className="quick-check"><div className="quick-check-head"><CircleHelp size={15}/> QUICK CHECK</div><p>{active.question}</p><button onClick={()=>setMode('study')}>Reveal study answer <ChevronRight size={15}/></button></div>
          <div className="panel-footer"><span>RADIO ASTRONOMY · LECTURE 02</span><span>0{topics.findIndex(t=>t.id===active.id)+1} / 0{topics.length}</span></div>
        </aside>
      </section>}

      {mode==='study' && <section className="study-layout">
        <div className="study-list"><div className="section-heading"><div><span className="panel-kicker">STUDY DECK</span><h2>Explore the concepts</h2></div><span className="count-badge">{filtered.length} TOPICS</span></div>
          {filtered.map(t=><button key={t.id} className={`study-item ${selected===t.id?'selected':''}`} onClick={()=>setSelected(t.id)}><span className={`study-icon ${t.color}`}>{t.id==='hydrogen'?<Atom size={17}/>:t.id==='telescopes'?<RadioTower size={17}/>:<Network size={17}/>}</span><span className="study-item-text"><b>{t.title}</b><small>Slides {t.page} · {t.category}</small></span><ChevronRight size={16}/></button>)}
        </div>
        <article className="study-detail"><span className="panel-kicker">SLIDES {active.page} · {active.category.toUpperCase()}</span><h2>{active.title}</h2><p>{active.summary}</p><h3>Key ideas</h3><ul className="key-list">{active.key.map((k,i)=><li key={i}><span className="key-bullet">{String(i+1).padStart(2,'0')}</span><span>{k}</span></li>)}</ul><div className="answer-card"><div className="quick-check-head"><CircleHelp size={15}/> CHECK YOUR UNDERSTANDING</div><p>{active.question}</p><div className="answer-text">{active.answer}</div></div><button className="primary-button" onClick={()=>setMode('map')}>Return to concept map <Network size={16}/></button></article>
      </section>}

      {mode==='quiz' && <section className="quiz-shell"><div className="quiz-head"><span className="panel-kicker">KNOWLEDGE CHECK</span><span className="count-badge">QUESTION {quizIndex+1} / {quiz.length}</span></div><div className="progress-track"><div style={{width:`${((quizIndex+(answered?1:0))/quiz.length)*100}%`}}/></div><div className="quiz-card"><div className="quiz-orb"><Brain size={26}/></div><h2>{quiz[quizIndex].q}</h2><div className="quiz-options">{quiz[quizIndex].opts.map((opt,i)=><button key={opt} className={`quiz-option ${answered&&i===quiz[quizIndex].correct?'correct':''} ${answered&&chosen===i&&i!==quiz[quizIndex].correct?'wrong':''}`} onClick={()=>answerQuiz(i)} disabled={answered}><span className="option-letter">{String.fromCharCode(65+i)}</span>{opt}{answered&&i===quiz[quizIndex].correct&&<CheckCircle2 size={17}/>}</button>)}</div>{answered&&<div className={`feedback ${chosen===quiz[quizIndex].correct?'good':'bad'}`}><b>{chosen===quiz[quizIndex].correct?'Correct.':'Not quite.'}</b> {quiz[quizIndex].explain}</div>}<div className="quiz-bottom"><span className="score-label">SCORE <b>{score}</b> / {quiz.length}</span><button className="primary-button" disabled={!answered} onClick={nextQuiz}>{quizIndex===quiz.length-1?'See results':'Next question'} <ChevronRight size={16}/></button></div></div><p className="quiz-source">Questions are based on the topics shown in Radio Astronomy Lecture 2.</p></section>}

      {mode==='results' && <section className="results-card"><div className="quiz-orb"><Sparkles size={26}/></div><span className="panel-kicker">SESSION COMPLETE</span><h2>{score>=4?'Excellent work.':'Good start — review and try again.'}</h2><div className="result-score">{score}<span> / {quiz.length}</span></div><p>You answered {score} of {quiz.length} questions correctly.</p><div className="result-actions"><button className="primary-button" onClick={()=>{resetQuiz();setMode('quiz')}}><RotateCcw size={16}/> Try again</button><button className="secondary-button" onClick={()=>setMode('map')}><Network size={16}/> Back to map</button></div></section>}
      <footer className="footer"><div className="footer-brand"><Orbit size={16}/> COSMICNOTES</div><span>Built for learning · Based on Radio Astronomy Lecture 2 by Dr. Reham El-Kholy</span><span className="footer-note">Use the map to connect ideas, not just memorize terms.</span></footer>
    </main>
  </div>;
}

createRoot(document.getElementById('root')).render(<ReactFlowProvider><App/></ReactFlowProvider>);
