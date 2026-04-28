/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  Compass,
  Home,
  Info,
  Library,
  Map,
  Search,
  ShieldAlert,
  Terminal,
  UserCheck,
  UserMinus,
} from 'lucide-react';
import { EpistemicData } from './types';
import EpistemicChart from './components/EpistemicChart';
import Dashboard from './components/Dashboard';
import { featuredPaths, pageGroups, PageGroup } from './siteContent';

type Tab = 'intro' | 'model' | 'explanation' | 'formalization';

const navItems = [
  { label: 'Home', path: '/', icon: <Home size={14} /> },
  { label: 'Start', path: '/start-here', icon: <Compass size={14} /> },
  { label: 'Ideas', path: '/core-ideas', icon: <Brain size={14} /> },
  { label: 'Lab', path: '/interactive-lab', icon: <Activity size={14} /> },
  { label: 'Library', path: '/library', icon: <Library size={14} /> },
  { label: 'Map', path: '/site-map', icon: <Map size={14} /> },
];

export default function App() {
  const [route, setRoute] = useHashRoute();
  const activeGroup = pageGroups.find((group) => group.path === route);

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      <div className="atmospheric-bg"></div>
      <div className="glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SiteHeader route={route} onNavigate={setRoute} />

        <AnimatePresence mode="wait">
          {route === '/' && (
            <motion.main
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-14"
            >
              <HomeExperience onNavigate={setRoute} />
            </motion.main>
          )}

          {route === '/interactive-lab' && (
            <motion.main
              key="interactive-lab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-12"
            >
              <SectionHero
                group={pageGroups.find((group) => group.path === '/interactive-lab')!}
                kicker="Interactive Lab"
              />
              <InteractiveExperience initialTab="model" />
              <PageCluster group={pageGroups.find((group) => group.path === '/interactive-lab')!} />
            </motion.main>
          )}

          {activeGroup && route !== '/interactive-lab' && (
            <motion.main
              key={activeGroup.path}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              <SectionHero group={activeGroup} />
              <PageCluster group={activeGroup} />
              <RelatedGroups currentPath={activeGroup.path} onNavigate={setRoute} />
            </motion.main>
          )}

          {route === '/site-map' && (
            <motion.main
              key="site-map"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              <SiteMap />
            </motion.main>
          )}

          {!activeGroup && route !== '/' && route !== '/site-map' && (
            <motion.main
              key="not-found"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="glass-panel p-8 md:p-12 space-y-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">Route Pending</p>
              <h1 className="text-3xl text-white font-light">This page is in the map, but not yet drafted.</h1>
              <p className="text-slate-400 max-w-2xl">
                The content architecture is now in place. This route can become a full essay, case study, skill guide, or glossary entry as the project expands.
              </p>
              <button onClick={() => setRoute('/site-map')} className="text-blue-300 text-xs uppercase tracking-widest font-bold">
                View Site Map
              </button>
            </motion.main>
          )}
        </AnimatePresence>

        <SiteFooter onNavigate={setRoute} />
      </div>
    </div>
  );
}

function useHashRoute(): [string, (path: string) => void] {
  const readRoute = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash.startsWith('/') ? hash : '/';
  };

  const [route, setRouteState] = useState(readRoute);

  useEffect(() => {
    const onHashChange = () => setRouteState(readRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setRoute = useCallback((path: string) => {
    window.location.hash = path;
    setRouteState(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return [route, setRoute];
}

function SiteHeader({ route, onNavigate }: { route: string; onNavigate: (path: string) => void }) {
  return (
    <header className="pb-10 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <button onClick={() => onNavigate('/')} className="text-left">
          <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-2">Credencing.org</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-none">
            Credencing: <span className="opacity-40">Visualizing Irrationality</span>
          </h1>
        </button>
        <div className="glass-panel p-1 border border-white/5 rounded-full flex flex-wrap gap-1 w-fit">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                route === item.path
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function HomeExperience({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">Central Exhibit</p>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-white leading-[1.02]">
            A map for the distance between evidence, perception, and belief.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            The interactive model remains the center of the site. Around it, this public web will grow into a guided library of concepts, case studies, skills, and applications for thinking in credences.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('/interactive-lab')}
              className="px-5 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-xl text-xs font-bold tracking-widest transition-all text-blue-300 flex items-center gap-3 uppercase"
            >
              Open Lab <Activity size={14} />
            </button>
            <button
              onClick={() => onNavigate('/start-here')}
              className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold tracking-widest transition-all text-slate-300 flex items-center gap-3 uppercase"
            >
              Start Here <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass-panel p-5 bg-white/[0.02] border-white/5">
            <EpistemicChart
              data={{
                objectiveEvidence: 0.41,
                perceivedEvidence: 0.62,
                assignedCredence: 0.86,
                deepRationality: 0.60,
              }}
            />
          </div>
        </div>
      </section>

      <InteractiveExperience initialTab="intro" compact />

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-3">Featured Paths</p>
            <h2 className="text-3xl font-light text-white">The surrounding web</h2>
          </div>
          <button onClick={() => onNavigate('/site-map')} className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400 hover:text-blue-300 uppercase tracking-widest font-bold">
            Full Map <Map size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageGroups
            .filter((group) => featuredPaths.includes(group.path))
            .map((group) => (
              <GroupCard key={group.path} group={group} onNavigate={onNavigate} />
            ))}
        </div>
      </section>
    </>
  );
}

function InteractiveExperience({ initialTab, compact = false }: { initialTab: Tab; compact?: boolean }) {
  const [data, setData] = useState<EpistemicData>({
    objectiveEvidence: 0.41,
    perceivedEvidence: 0.62,
    assignedCredence: 0.86,
    deepRationality: 0.60,
  });
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const handleDataChange = useCallback((newData: EpistemicData) => {
    setData(newData);
  }, []);

  const dynamicDescription = useMemo(() => getDynamicDescription(data), [data]);

  return (
    <section className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${compact ? 'pt-4' : ''}`}>
      <div className="lg:col-span-7 space-y-8">
        <div className="flex flex-wrap gap-1 glass-panel p-1 border border-white/5 rounded-full w-fit">
          <TabButton active={activeTab === 'intro'} onClick={() => setActiveTab('intro')} icon={<Info size={14} />} label="Intro" />
          <TabButton active={activeTab === 'model'} onClick={() => setActiveTab('model')} icon={<Activity size={14} />} label="Interactive" />
          <TabButton active={activeTab === 'explanation'} onClick={() => setActiveTab('explanation')} icon={<BookOpen size={14} />} label="Theory" />
          <TabButton active={activeTab === 'formalization'} onClick={() => setActiveTab('formalization')} icon={<Terminal size={14} />} label="Formalization" />
        </div>

        <main className="min-h-[380px]">
          <AnimatePresence mode="wait">
            {activeTab === 'intro' && <IntroPanel />}
            {activeTab === 'model' && <ModelPanel data={data} dynamicDescription={dynamicDescription} />}
            {activeTab === 'explanation' && <TheoryPanel />}
            {activeTab === 'formalization' && <FormalizationPanel />}
          </AnimatePresence>
        </main>
      </div>

      <div className="lg:col-span-5 lg:sticky lg:top-8 pt-2">
        <AnimatePresence mode="wait">
          {activeTab === 'model' ? (
            <motion.div key="model-controls" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <Dashboard data={data} onChange={handleDataChange} />
            </motion.div>
          ) : (
            <ContextPanel key={activeTab} activeTab={activeTab} onOpenModel={() => setActiveTab('model')} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function IntroPanel() {
  return (
    <motion.div key="intro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
      <div className="space-y-6">
        <h2 className="text-4xl font-light tracking-tight text-white underline decoration-blue-500/20 underline-offset-8">Why Study Credencing?</h2>
        <p className="text-slate-100 text-lg leading-relaxed font-light">
          Belief is not a binary toggle; it is our <span className="text-white font-medium italic underline decoration-blue-500/40 underline-offset-4">dynamic orientation</span> toward changing realities. We call this process <span className="text-blue-400 font-bold tracking-wider">Credencing</span>.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed font-light">
          The model helps separate failures of skill from failures of will: what the evidence is, what an agent perceives, what they finally believe, and how much rational resolution they bring to the task.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ConceptCard title="Deep Rationality" tone="blue" text="The skill axis: math, logic, probability, and inferential tools for seeing through epistemic fog." />
        <ConceptCard title="Core Rationality" tone="red" text="The will axis: the fortitude to align belief with what one actually takes the evidence to show." />
      </div>
    </motion.div>
  );
}

function ModelPanel({ data, dynamicDescription }: { data: EpistemicData; dynamicDescription: string }) {
  return (
    <motion.div key="model" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-8">
      <EpistemicChart data={data} />
      <div className="glass-panel p-6 border-white/5 text-[13px] text-slate-200 serif-thought leading-relaxed bg-white/[0.03] shadow-inner min-h-[80px] flex items-center">
        {dynamicDescription}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
        <MiniNote icon={<Activity size={10} />} title="Standard Agent" text="Minor deviations represent common biases while belief remains broadly tethered to perceived evidence." />
        <MiniNote icon={<Terminal size={10} />} title="Delusion Threshold" text="Past the threshold, the agent is no longer participating honestly with their own perceived evidence." danger />
      </div>
    </motion.div>
  );
}

function TheoryPanel() {
  return (
    <motion.div key="explanation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <section className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold block">The Analytical Distinction</span>
        <h2 className="text-2xl font-light text-white leading-tight">Competence vs. Consistency</h2>
        <p className="text-slate-400 leading-relaxed text-sm">
          Credencing unbundles algorithmic failures from affective overrides. An honest novice may lack the tools to see clearly; a biased expert may see clearly and still refuse the implication.
        </p>
      </section>
      <div className="space-y-5">
        <BorderNote title="1. Deep Rationality" text="The exercise of rational tools: probability theory, statistics, Bayesian analysis, and careful comparison of hypotheses." color="border-blue-500/30" />
        <BorderNote title="2. Core Rationality" text="The adoption of a degree of belief that aligns with perceived evidence rather than identity, fear, tribe, or desire." color="border-red-500/30" />
      </div>
    </motion.div>
  );
}

function FormalizationPanel() {
  return (
    <motion.div key="formalization" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8 pb-10">
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-blue-400">
          <Terminal size={20} strokeWidth={1.5} />
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold">The Epistemic Formalism</h2>
        </div>
        <p className="text-3xl font-extralight tracking-tight text-white leading-tight">Mapping the algorithmic gaps.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <VarDef sym="E0" label="Objective Evidence" desc="The ground truth probability density in mind-independent reality." />
        <VarDef sym="EP" label="Perceived Balance" desc="The agent's internal representation after algorithmic processing." />
        <VarDef sym="CA" label="Assigned Credence" desc="The final doxastic commitment adopted by the agent." />
        <VarDef sym="SD" label="Deep Rationality" desc="Resolution of inferential optics and statistical literacy." />
      </div>
      <div className="space-y-6">
        <Formula code="delta_ep = |EP - E0|" title="The Algorithmic Gap" text="A failure of competence: the distance between objective evidence and perceived evidence." />
        <Formula code="delta_ic = |CA - EP|" title="The Doxastic Gap" text="A failure of integrity: the distance between perceived evidence and assigned credence." />
        <Formula code="omega = (1 - SD) * (pi / 4)" title="Warranted Uncertainty" text="A healthy range of doubt proportional to skill deficit. Rationality is calibrated doubt, not forced certainty." />
      </div>
    </motion.div>
  );
}

function ContextPanel({ activeTab, onOpenModel }: { activeTab: Tab; onOpenModel: () => void }) {
  if (activeTab === 'intro') {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-panel p-8 space-y-6 bg-blue-500/[0.06] border-blue-500/40 shadow-2xl">
        <h3 className="text-2xl font-light text-white">Unbundling Failure</h3>
        <p className="text-slate-100 text-sm leading-relaxed">
          Traditional labels often blur the honest novice and the biased expert. Credencing keeps those failures separate so each can be diagnosed more precisely.
        </p>
        <button onClick={onOpenModel} className="w-full px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-xl text-xs font-bold tracking-widest transition-all text-blue-300 flex items-center justify-center gap-3 uppercase">
          Launch Simulator <Activity size={12} />
        </button>
      </motion.div>
    );
  }

  if (activeTab === 'explanation') {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
        {[
          ['The Sage', 'High skill and high integrity; belief tracks evidence closely.', <UserCheck size={16} className="text-green-400" />],
          ['Honest Novice', 'Good faith with limited tools; blurry perception but sincere alignment.', <Brain size={16} className="text-blue-400" />],
          ['Biased Expert', 'High analytical power used to protect a prior commitment.', <ShieldAlert size={16} className="text-red-400" />],
          ['Epistemic Delusion', 'Assigned credence drifts beyond the warranted uncertainty range.', <UserMinus size={16} className="text-slate-500" />],
        ].map(([name, desc, icon]) => (
          <ArchetypeCard key={String(name)} name={String(name)} desc={String(desc)} icon={icon as ReactNode} />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-panel p-8 space-y-5 bg-white/[0.02]">
      <p className="serif-thought text-xl text-blue-100 leading-snug">"The intellect as bodyguard"</p>
      <p className="text-slate-400 text-xs leading-relaxed">
        Intelligence does not automatically cure bias. Sometimes it gives identity better lawyers.
      </p>
      <a
        href="https://www.academia.edu/165572684/_A_Formal_Framework_for_Core_and_Deep_Rationality"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[10px] text-blue-400 font-mono uppercase tracking-[0.2em]"
      >
        Full Reference Paper
      </a>
    </motion.div>
  );
}

function SectionHero({ group, kicker }: { group: PageGroup; kicker?: string }) {
  return (
    <section className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
      <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">{kicker ?? group.title}</p>
      <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{group.title}</h2>
      <p className="text-slate-300 max-w-3xl text-base md:text-lg leading-relaxed">{group.summary}</p>
    </section>
  );
}

function PageCluster({ group }: { group: PageGroup }) {
  return (
    <section className="space-y-5">
      <h3 className="text-xl font-light text-white">Pages in this section</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {group.pages.map((page, index) => (
          <article key={page} className="glass-panel p-5 bg-white/[0.015] border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] text-slate-600 font-mono uppercase tracking-widest mb-2">Page {String(index + 1).padStart(2, '0')}</p>
                <h4 className="text-white font-medium leading-snug">{page}</h4>
              </div>
              <span className="text-[9px] text-slate-500 border border-white/10 rounded-full px-2 py-1 uppercase tracking-wider">Draft</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RelatedGroups({ currentPath, onNavigate }: { currentPath: string; onNavigate: (path: string) => void }) {
  return (
    <section className="space-y-5">
      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Related Paths</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pageGroups
          .filter((group) => group.path !== currentPath)
          .slice(0, 3)
          .map((group) => (
            <GroupCard key={group.path} group={group} onNavigate={onNavigate} />
          ))}
      </div>
    </section>
  );
}

function GroupCard({ group, onNavigate }: { group: PageGroup; onNavigate: (path: string) => void }) {
  return (
    <button onClick={() => onNavigate(group.path)} className="glass-panel p-6 text-left bg-white/[0.015] border-white/5 hover:border-blue-500/40 transition-all group min-h-[210px]">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h3 className="text-lg text-white font-light">{group.title}</h3>
        <ArrowRight size={16} className="text-slate-600 group-hover:text-blue-300 transition-colors" />
      </div>
      <p className="text-slate-400 text-xs leading-relaxed mb-5">{group.summary}</p>
      <p className="text-[9px] uppercase tracking-widest text-slate-600">{group.pages.length} planned pages</p>
    </button>
  );
}

function SiteMap() {
  return (
    <section className="space-y-8">
      <div className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-4">Utility Layer</p>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">Site Map</h2>
        <p className="text-slate-300 max-w-3xl leading-relaxed">
          A first-pass architecture for the public Credencing site. The central model stays prominent while related ideas, guides, applications, and resources form a searchable web around it.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {pageGroups.map((group) => (
          <div key={group.path} className="glass-panel p-6 bg-white/[0.015] border-white/5">
            <h3 className="text-white font-light text-xl mb-4">{group.title}</h3>
            <ul className="space-y-2">
              {group.pages.map((page) => (
                <li key={page} className="text-slate-400 text-xs flex items-start gap-2">
                  <span className="text-blue-500/70 mt-0.5">|</span>
                  <span>{page}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="glass-panel p-6 bg-white/[0.015] border-white/5">
        <h3 className="text-white font-light text-xl mb-4">Utility Layer</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-400">
          {['Search', 'Topic Index', 'Tag Index', 'Related Pages Engine', 'Breadcrumbs', 'Newsletter / Updates'].map((item) => (
            <div key={item} className="border border-white/5 rounded-lg p-3 flex items-center gap-2">
              <Search size={12} className="text-blue-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <footer className="pt-16 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] uppercase tracking-widest opacity-50 font-mono">
      <span>Credencing Public Web</span>
      <div className="flex flex-wrap gap-5">
        <button onClick={() => onNavigate('/about')}>About</button>
        <button onClick={() => onNavigate('/site-map')}>Site Map</button>
        <span>2026 Epistemic Protocol</span>
      </div>
    </footer>
  );
}

function getDynamicDescription(data: EpistemicData) {
  const calcError = Math.abs(data.perceivedEvidence - data.objectiveEvidence);
  const coreIrrationality = Math.abs(data.assignedCredence - data.perceivedEvidence);
  const isAbout = (val: number, target: number) => Math.abs(val - target) < 0.01;

  if (isAbout(data.objectiveEvidence, 0.8) && isAbout(data.perceivedEvidence, 0.2) && isAbout(data.assignedCredence, 0.2) && isAbout(data.deepRationality, 0.4)) {
    return "The Gaslight: objective reality is high, but perceived evidence has been suppressed or manipulated. The error is algorithmic rather than a failure of will.";
  }
  if (isAbout(data.objectiveEvidence, 0.5) && isAbout(data.perceivedEvidence, 0.5) && isAbout(data.assignedCredence, 0.95) && isAbout(data.deepRationality, 0.9)) {
    return "Academic Dogma: the tools identify the evidence as a coin flip, yet the agent adopts an extreme credence. This is a pure failure of Core Rationality.";
  }
  if (isAbout(data.objectiveEvidence, 0.6) && isAbout(data.perceivedEvidence, 0.55) && isAbout(data.assignedCredence, 0.55) && isAbout(data.deepRationality, 0.95)) {
    return "Strict Empiricism: high-resolution tracking of reality. Perceived evidence and final credence stay aligned with the probabilistic state.";
  }
  if (data.deepRationality > 0.85 && calcError < 0.02 && coreIrrationality < 0.02) {
    return "Ideal Agent: alignment with a sharp epistemic toolkit. The distance between reality, perception, and belief is minimized.";
  }
  if (data.deepRationality > 0.8 && coreIrrationality > 0.15) {
    return "Biased Expert: tools are available, but belief is positioned elsewhere. Intelligence becomes a rationalization engine.";
  }
  if (data.deepRationality < 0.3 && coreIrrationality < 0.05) {
    return "Honest Novice: good faith with limited tools. The agent is aligned with perception, even if that perception is blurry.";
  }
  if (coreIrrationality > (1 - data.deepRationality) * 0.25) {
    return "Epistemic Delusion: assigned credence has drifted so far from perceived evidence that the doxastic gap has collapsed.";
  }
  return "Standard Agent: minor deviations represent common bias or noise, but belief remains broadly tethered to perceived evidence.";
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all ${
        active ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'text-slate-400 hover:text-slate-200 hover:bg-white/10'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function ConceptCard({ title, text, tone }: { title: string; text: string; tone: 'blue' | 'red' }) {
  return (
    <div className="glass-panel p-6 space-y-4 border-white/20 bg-white/[0.04] shadow-xl">
      <h3 className="text-lg font-light text-white flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${tone === 'blue' ? 'bg-blue-400' : 'bg-red-400'}`}></div>
        {title}
      </h3>
      <p className="text-slate-200 text-xs leading-relaxed">{text}</p>
    </div>
  );
}

function MiniNote({ icon, title, text, danger = false }: { icon: ReactNode; title: string; text: string; danger?: boolean }) {
  return (
    <div className={`p-4 rounded-xl ${danger ? 'bg-red-500/[0.04] border border-red-500/20' : 'bg-blue-500/[0.02] border border-blue-500/10'}`}>
      <h4 className={`text-[9px] uppercase tracking-[0.2em] font-black mb-2 flex items-center gap-2 ${danger ? 'text-red-500' : 'text-blue-400'}`}>
        {icon} {title}
      </h4>
      <p className="text-slate-400 text-[11px] leading-relaxed">{text}</p>
    </div>
  );
}

function BorderNote({ title, text, color }: { title: string; text: string; color: string }) {
  return (
    <div className={`border-l ${color} pl-6 space-y-2`}>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
    </div>
  );
}

function VarDef({ sym, label, desc }: { sym: string; label: string; desc: string }) {
  return (
    <div className="glass-panel p-4 bg-white/2 border-white/5">
      <div className="text-white text-sm mb-1 font-light"><span className="text-blue-400 font-bold font-mono mr-2">{sym}</span> {label}</div>
      <div className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-tight">{desc}</div>
    </div>
  );
}

function Formula({ code, title, text }: { code: string; title: string; text: string }) {
  return (
    <div className="space-y-3">
      <code className="text-2xl text-white font-mono tracking-tighter">{code}</code>
      <p className="text-slate-400 text-sm leading-relaxed border-l border-blue-500/20 pl-6">
        <strong>{title}.</strong> {text}
      </p>
    </div>
  );
}

function ArchetypeCard({ name, icon, desc }: { name: string; icon: ReactNode; desc: string }) {
  return (
    <div className="glass-panel p-5 bg-white/[0.01] border-white/5 hover:border-white/10 transition-colors space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{name}</h4>
      </div>
      <p className="text-[11px] text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
