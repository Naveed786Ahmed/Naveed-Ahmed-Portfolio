'use client';
import {useEffect,useState} from 'react';
import {BrainCircuit,CheckCheck,Database,FileText,Mail,RefreshCw,ShieldCheck,Sparkles,Workflow,Zap} from 'lucide-react';
const sources=[{icon:FileText,label:'Documents',sub:'Unstructured data'},{icon:Mail,label:'Messages',sub:'Customer requests'},{icon:Database,label:'Business data',sub:'Systems & APIs'}];
const outcomes=[{icon:Workflow,label:'Automated actions',sub:'Workflows & routing'},{icon:ShieldCheck,label:'Human oversight',sub:'Review when needed'},{icon:CheckCheck,label:'Reliable outcomes',sub:'Traceable decisions'}];
export function AutomationVisual(){
 const [step,setStep]=useState(0);const [replay,setReplay]=useState(0);
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=window.setInterval(()=>setStep(v=>(v+1)%3),2600);return()=>clearInterval(timer)},[replay]);
 return <div className="intelligence-scene" aria-label="Animated AI systems illustration showing documents, messages and business data transformed into automated actions, human oversight and reliable outcomes">
  <div className="scene-top"><span><span className="scene-status"/> INTELLIGENT SYSTEMS / LIVE VIEW</span><button onClick={()=>{setStep(0);setReplay(v=>v+1)}} type="button" aria-label="Replay AI systems animation"><RefreshCw size={14}/> Replay</button></div>
  <div className="scene-caption"><span className="scene-caption-index">01 — ENGINEERED INTELLIGENCE</span><h3>From complexity<br/>to <em>clarity.</em></h3><p>Disconnected inputs. One intelligent operating layer. Meaningful business outcomes.</p></div>
  <div className="scene-network"><svg className="scene-connections" viewBox="0 0 600 330" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#8b5cf6"/><stop offset=".55" stopColor="#c4b5fd"/><stop offset="1" stopColor="#60a5fa"/></linearGradient></defs>{[74,165,256].map(y=><g key={y}><path d={`M 145 ${y} C 220 ${y} 195 165 300 165 S 380 ${y} 455 ${y}`} fill="none" stroke="url(#flowGradient)" strokeWidth="1.5" opacity=".45"/><path d={`M 145 ${y} C 220 ${y} 195 165 300 165 S 380 ${y} 455 ${y}`} fill="none" stroke="url(#flowGradient)" strokeWidth="2.6" strokeDasharray="7 17" className="scene-flow-line"/></g>)}</svg>
   <div className="scene-column scene-inputs">{sources.map((item,i)=>{const Icon=item.icon;return <div className={`scene-node ${step===i?'scene-node-current':''}`} key={item.label}><span className="scene-node-icon"><Icon size={17}/></span><span><strong>{item.label}</strong><small>{item.sub}</small></span></div>})}</div>
   <div className="scene-core-wrap"><div className="scene-orbit scene-orbit-one"/><div className="scene-orbit scene-orbit-two"/><div className="scene-core"><span className="scene-core-icon"><BrainCircuit size={40} strokeWidth={1.5}/></span><strong>AI ENGINE</strong><small>Interpret · Decide · Act</small></div><span className="scene-core-spark scene-core-spark-a"><Sparkles size={13}/></span><span className="scene-core-spark scene-core-spark-b"><Zap size={12}/></span></div>
   <div className="scene-column scene-outputs">{outcomes.map((item,i)=>{const Icon=item.icon;return <div className={`scene-node scene-outcome ${step===i?'scene-node-current':''}`} key={item.label}><span className="scene-node-icon"><Icon size={17}/></span><span><strong>{item.label}</strong><small>{item.sub}</small></span></div>})}</div>
  </div>
  <div className="scene-bottom"><span><span className="scene-live"/> SYSTEMS IN MOTION</span><span>DESIGNED TO SOLVE REAL PROBLEMS <span aria-hidden="true">↗</span></span></div>
 </div>
}
