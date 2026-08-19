/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState, ReactNode, FormEvent } from 'react';
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
  Map as MapIcon,
  Network,
  Search,
  ShieldAlert,
  Terminal,
  Users,
  UserCheck,
  UserMinus,
} from 'lucide-react';
import { EpistemicData } from './types';
import EpistemicChart from './components/EpistemicChart';
import Dashboard from './components/Dashboard';
import { contentPages, featuredBookTitles, featuredPaperTitles, featuredPaths, pageGroups, pagePath, PageGroup, ContentPage } from './siteContent';

type Tab = 'intro' | 'model' | 'explanation' | 'formalization';

type UtilityFeaturePage = {
  title: string;
  path: string;
  summary: string;
  kind?: 'topic-index' | 'tag-index' | 'standard';
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  actions: {
    label: string;
    path: string;
  }[];
};

const navItems = [
  { label: 'Home', path: '/', icon: <Home size={14} /> },
  { label: 'Start Here', path: '/start-here', icon: <Compass size={14} /> },
  { label: 'Core Ideas', path: '/core-ideas', icon: <Brain size={14} /> },
  { label: 'Bayes Theorem', path: '/bayes-theorem', icon: <BookOpen size={14} /> },
  { label: 'Interactive Lab', path: '/interactive-lab', icon: <Activity size={14} /> },
  { label: 'Case Studies', path: '/case-studies', icon: <ShieldAlert size={14} /> },
  { label: 'Skills', path: '/skills', icon: <Terminal size={14} /> },
  { label: 'Discussion Groups', path: '/discussion-groups', icon: <Users size={14} /> },
  { label: 'Applications', path: '/applications', icon: <Network size={14} /> },
  { label: 'Library', path: '/library', icon: <Library size={14} /> },
  { label: 'About', path: '/about', icon: <Info size={14} /> },
  { label: 'Q&A', path: '/q-and-a', icon: <Info size={14} /> },
  { label: 'Search', path: '/search', icon: <Search size={14} /> },
  { label: 'Site Map', path: '/site-map', icon: <MapIcon size={14} /> },
];

const navSections = [
  {
    label: 'Learn',
    items: navItems.filter((item) => ['/', '/start-here', '/core-ideas', '/bayes-theorem', '/interactive-lab'].includes(item.path)),
  },
  {
    label: 'Practice',
    items: navItems.filter((item) => ['/case-studies', '/skills', '/discussion-groups', '/applications'].includes(item.path)),
  },
  {
    label: 'Resources',
    items: navItems.filter((item) => ['/library', '/about', '/q-and-a', '/search', '/site-map'].includes(item.path)),
  },
];

const utilityFeaturePages: UtilityFeaturePage[] = [
  {
    title: 'Topic Index',
    path: '/utility/topic-index',
    kind: 'topic-index',
    summary: 'The topic index is the conceptual browsing layer inside the search page.',
    sections: [
      {
        heading: 'What It Does',
        body: [
          'The topic index helps readers find pages by conceptual role rather than by exact title. A reader who is thinking about evidence, calibration, uncertainty, Bayesian updating, motivated reasoning, or AI alignment can start with that topic and then move into the pages most closely connected to it.',
          'This is especially useful because Credencing is a web of related concepts rather than a single linear essay. Many pages belong to more than one topic: Bayes theorem belongs to probability, evidence, scientific method, and calibration; Core Irrationality belongs to belief integrity, motivated reasoning, and update resistance.',
        ],
      },
      {
        heading: 'How To Use It',
        body: [
          'Open the search page, enter a broad topic, and then use the visible result cards to move into the relevant section. For a quick start, try terms such as evidence, credence, prior, likelihood, posterior, uncertainty, overconfidence, or motivated reasoning.',
        ],
        bullets: [
          'Use broad concepts when you are exploring.',
          'Use exact terms when you are trying to relocate a page.',
          'Use the tag browser below the search box when you want a curated conceptual path.',
        ],
      },
    ],
    actions: [
      { label: 'Open Search and Topic Index', path: '/search' },
      { label: 'View Site Map', path: '/site-map' },
    ],
  },
  {
    title: 'Tag Index',
    path: '/utility/tag-index',
    kind: 'tag-index',
    summary: 'The tag index groups the site by recurring epistemic roles: evidence, credence, rationality, bias, applications, and teaching use.',
    sections: [
      {
        heading: 'What It Does',
        body: [
          'Tags are generated from the same page corpus used by search. They are not decorative labels; they are a second way of reading the site. Instead of asking, "What section is this page in?" the tag index asks, "What epistemic function is this page serving?"',
          'This lets a reader follow a theme across sections. For example, calibration appears in core concepts, skills, case studies, applications, discussion groups, and essays. The tag index keeps that cross-sectional pattern visible.',
        ],
      },
      {
        heading: 'Current Tag Families',
        body: [
          'The active tag families include evidence, credence, Bayesian updating, Bayes theorem, calibration, uncertainty, Core Rationality, Deep Rationality, diagnosis, archetypes, motivated reasoning, cases, applications, skills, teaching, library, and research.',
        ],
      },
    ],
    actions: [
      { label: 'Browse Active Tags', path: '/search' },
      { label: 'Read the Glossary', path: pagePath('/library', 'Glossary') },
    ],
  },
  {
    title: 'Related Pages',
    path: '/utility/related-pages-engine',
    summary: 'The related-pages panel appears on article pages and keeps the conceptual web connected.',
    sections: [
      {
        heading: 'What It Does',
        body: [
          'Most article pages include a Related panel in the right column. That panel points to neighboring concepts, applications, cases, or skills that clarify the current page. It prevents the site from becoming a pile of isolated definitions.',
          'The related-pages engine is intentionally selective. It does not try to show every possible connection. It shows a few high-value next steps so a reader can move from a concept to an example, from an example to a repair skill, or from a skill back to the model.',
        ],
      },
      {
        heading: 'Why It Matters',
        body: [
          'Credencing depends on seeing how concepts interlock. Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), Calculation Error (DE), and Core Irrationality (IC) are clearer when they are read as a system. Related links make that system navigable.',
        ],
      },
    ],
    actions: [
      { label: 'Open a Sample Article', path: pagePath('/start-here', 'What Is Credencing?') },
      { label: 'Open Core Ideas', path: '/core-ideas' },
    ],
  },
  {
    title: 'Navigation Trail',
    path: '/utility/breadcrumbs',
    summary: 'Breadcrumbs show where an article sits inside the larger site structure.',
    sections: [
      {
        heading: 'What They Do',
        body: [
          'Breadcrumbs appear at the top of article pages. They show the section and current page so readers can move back up the structure without losing their place.',
          'This matters because the site is intentionally expansive. A reader may arrive from search, a related link, or an external page. Breadcrumbs make the local context visible immediately.',
        ],
      },
      {
        heading: 'How To Check Them',
        body: [
          'Open any drafted article page and look above the title. You should see the section name and the current page name. The section name is clickable and returns to the section overview.',
        ],
      },
    ],
    actions: [
      { label: 'Open a Sample Article', path: pagePath('/bayes-theorem', 'The Formula') },
      { label: 'View Site Map', path: '/site-map' },
    ],
  },
];

const glossaryTerms = [
  ['E0', 'Objective Evidence (E0)', 'Objective Evidence: the evidential target in the world.'],
  ['EP', 'Perceived Evidence (EP)', 'Perceived Evidence: what an agent takes the evidence to show.'],
  ['CA', 'Assigned Credence (CA)', 'Assigned Credence: the confidence an agent finally adopts.'],
  ['SD', 'Deep Rationality (SD)', 'Deep Rationality: skill in processing evidence.'],
  ['DE', 'Calculation Error (DE)', 'Calculation Error: the gap between Objective Evidence (E0) and Perceived Evidence (EP).'],
  ['IC', 'Core Irrationality (IC)', 'Core Irrationality: the gap between Perceived Evidence (EP) and Assigned Credence (CA).'],
  ['Excess IC', 'Excess Core Irrationality', 'The part of Core Irrationality (IC) that remains beyond warranted uncertainty.'],
  ['Calibration', 'Calibration', 'The fit between confidence and actual reliability.'],
  ['Prior', 'Prior', 'A starting credence before new evidence is considered.'],
  ['Likelihood', 'Likelihood', 'How expected evidence is under a hypothesis.'],
  ['Posterior', 'Posterior', 'An updated credence after evidence is considered.'],
];

const tagCatalog = [
  { id: 'evidence', label: 'Evidence', description: 'Evidence quality, access, objective evidence, perceived evidence, and evidential support.', aliases: ['evidence', 'evidential', 'objective evidence', 'perceived evidence', 'e0', 'ep'] },
  { id: 'credence', label: 'Credence', description: 'Degrees of belief, assigned credence, confidence levels, and belief strength.', aliases: ['credence', 'credences', 'belief', 'belief strength', 'assigned credence', 'confidence', 'confidence levels', 'graded confidence', 'scalar confidence', 'ca'] },
  { id: 'bayesian', label: 'Bayesian Updating', description: 'Priors, likelihoods, posteriors, Bayes factors, base rates, induction, and probabilistic revision.', aliases: ['bayesian', 'prior', 'priors', 'likelihood', 'likelihoods', 'posterior', 'posteriors', 'bayes', 'base-rate', 'base rate', 'bayesian audit', 'miracle audit', 'induction', 'predictive power', 'deduction', 'abduction', 'bayesian bookkeeping', 'revisable ontology'] },
  { id: 'bayes-theorem', label: 'Bayes Theorem', description: 'The formula, prior, likelihood, evidence term, posterior, and scientific use of Bayesian reasoning.', aliases: ['bayes theorem', 'bayes formula', 'p(h|e)', 'p(e|h)', 'denominator', 'theorem', 'posterior confidence'] },
  { id: 'calibration', label: 'Calibration', description: 'The fit between confidence and actual reliability, including overconfidence and forecasting.', aliases: ['calibration', 'calibrated', 'overconfidence', 'forecast', 'prediction record', 'reliability'] },
  { id: 'uncertainty', label: 'Uncertainty', description: 'Warranted uncertainty, warranted slack, excess IC, action thresholds, and humility.', aliases: ['uncertainty', 'warranted uncertainty', 'warranted slack', 'excess ic', 'excess core irrationality', 'omega', 'threshold'] },
  { id: 'core-rationality', label: 'Core Rationality', description: 'Belief integrity, motivated override, epistemic akrasia, and the EP-CA gap.', aliases: ['core rationality', 'core irrationality', 'ic', 'ep-ca', 'akrasia', 'integrity', 'motivated override', 'affective veto'] },
  { id: 'deep-rationality', label: 'Deep Rationality', description: 'Inferential skill, calculation error, evidence processing, and the E0-EP gap.', aliases: ['deep rationality', 'sd', 'calculation error', 'de', 'e0-ep', 'skill', 'tools', 'statistics', 'operator knowledge', 'operator-centered'] },
  { id: 'diagnosis', label: 'Diagnosis', description: 'Diagnostic safeguards, responsibility filters, repair strategies, and model interpretation.', aliases: ['diagnosis', 'diagnostic', 'safeguard', 'responsibility filter', 'repair', 'interpretation guide', 'overdiagnosis'] },
  { id: 'archetypes', label: 'Archetypes', description: 'Ideal agents, honest novices, biased experts, delusion thresholds, and model presets.', aliases: ['archetype', 'archetypes', 'ideal agent', 'honest novice', 'biased expert', 'delusion', 'preset', 'scenario'] },
  { id: 'motivated-reasoning', label: 'Motivated Reasoning', description: 'Identity protection, rationalization, selective skepticism, tribalism, and fear-driven belief.', aliases: ['motivated', 'motivation', 'rationalization', 'identity', 'tribalism', 'tribe', 'fear', 'selective skepticism'] },
  { id: 'bias', label: 'Bias and Failure Modes', description: 'Cognitive bias, base-rate neglect, risk inflation, conspiracy thinking, and epistemic bubbles.', aliases: ['bias', 'failure mode', 'base-rate neglect', 'risk inflation', 'conspiracy', 'echo chamber', 'epistemic bubble'] },
  { id: 'skills', label: 'Practice Skills', description: 'Exercises for estimating priors, reading likelihoods, updating, and asking better questions.', aliases: ['skill', 'skills', 'practice', 'exercise', 'worksheet', 'how to', 'questions'] },
  { id: 'discussion', label: 'Discussion Groups', description: 'Group sessions, facilitation, discussion questions, scenarios, and guided feedback.', aliases: ['discussion', 'group discussion', 'discussion groups', 'session', 'facilitator', 'facilitation', 'questions', 'scenario'] },
  { id: 'teaching', label: 'Teaching', description: 'Classroom use, lesson sequences, teaching materials, downloads, and education.', aliases: ['teaching', 'classroom', 'lesson', 'education', 'download', 'worksheet', 'materials'] },
  { id: 'institutions', label: 'Institutions', description: 'Organizations, public reasoning, journalism, law, policy, governance, and accountability.', aliases: ['institution', 'institutional', 'organization', 'journalism', 'law', 'policy', 'public debate', 'governance', 'accountability'] },
  { id: 'science-medicine', label: 'Science and Medicine', description: 'Scientific reasoning, medical testing, replication, measurement, and expert judgment.', aliases: ['science', 'medicine', 'medical', 'testing', 'replication', 'measurement', 'expert', 'methodological naturalism', 'inductive density'] },
  { id: 'ai', label: 'AI Alignment', description: 'AI confidence, human overtrust, deployment thresholds, and collective reasoning with models.', aliases: ['ai', 'artificial intelligence', 'alignment', 'model confidence', 'overtrust', 'deployment', 'digital intermediaries', 'epistemic prosthetics'] },
  { id: 'library', label: 'Library', description: 'Books, papers, essays, references, glossary, FAQ, project notes, and visual archive.', aliases: ['book', 'books', 'paper', 'papers', 'essay', 'essays', 'glossary', 'faq', 'reference', 'visual archive', 'project notes'] },
  { id: 'author-project', label: 'Author and Project', description: 'Author profile, project overview, methodology, contact, and future directions.', aliases: ['author', 'phil stilwell', 'project', 'methodology', 'contact', 'future directions', 'about'] },
];

const researchPapers = [
  {
    title: 'A Formal Framework for Core and Deep Rationality',
    path: pagePath('/library', 'A Formal Framework for Core and Deep Rationality'),
    url: 'https://www.academia.edu/165572684/_A_Formal_Framework_for_Core_and_Deep_Rationality',
    role: 'Foundational model',
    relevance: 'Defines Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), Deep Rationality (SD), Calculation Error (DE), and Core Irrationality (IC).',
  },
  {
    title: 'The Two-Gap Theory of Irrationality: Evidence Perception, Belief Integrity, and Diagnostic Repair',
    path: pagePath('/library', 'The Two-Gap Theory of Irrationality: Evidence Perception, Belief Integrity, and Diagnostic Repair'),
    url: 'https://www.academia.edu/168308847/The_Two_Gap_Theory_of_Irrationality_Evidence_Perception_Belief_Integrity_and_Diagnostic_Repair',
    role: 'Two-gap model',
    relevance: 'Separates E0-EP evidence-perception failures from EP-CA belief-integrity failures, giving the framework its main diagnostic repair map.',
  },
  {
    title: 'Warranted Uncertainty: The Discipline of Not Knowing in a Credence-First Epistemology',
    path: pagePath('/library', 'Warranted Uncertainty: The Discipline of Not Knowing in a Credence-First Epistemology'),
    url: 'https://www.academia.edu/168309143/Warranted_Uncertainty_The_Discipline_of_Not_Knowing_in_a_Credence_First_Epistemology',
    role: 'Confidence discipline',
    relevance: 'Defends confidence bands, warranted slack, and honest uncertainty so credencing does not collapse into false precision.',
  },
  {
    title: 'Intelligence as Rationalization Engine: Deep Rationality, Core Rationality, and the Biased Expert',
    path: pagePath('/library', 'Intelligence as Rationalization Engine: Deep Rationality, Core Rationality, and the Biased Expert'),
    url: 'https://www.academia.edu/168310008/Intelligence_as_Rationalization_Engine_Deep_Rationality_Core_Rationality_and_the_Biased_Expert',
    role: 'Biased expert diagnosis',
    relevance: 'Explains how high Deep Rationality can reduce evidence-processing error while still defending an assigned credence the agent is motivated to keep.',
  },
  {
    title: 'Institutional Credencing: Official Confidence, Evidence Pipelines, and Organizational Belief Integrity',
    path: pagePath('/library', 'Institutional Credencing: Official Confidence, Evidence Pipelines, and Organizational Belief Integrity'),
    url: 'https://www.academia.edu/168313905/Institutional_Credencing_Official_Confidence_Evidence_Pipelines_and_Organizational_Belief_Integrity',
    role: 'Institutional extension',
    relevance: 'Extends E0, EP, CA, and SD to organizations through evidence pipelines, public confidence, dissent channels, and update trails.',
  },
  {
    title: 'AI as Deep Rationality Prosthetic: Evidence Processing, Delegated Credence, and Core Rationality in AI-Mediated Inquiry',
    path: pagePath('/library', 'AI as Deep Rationality Prosthetic: Evidence Processing, Delegated Credence, and Core Rationality in AI-Mediated Inquiry'),
    url: 'https://www.academia.edu/168328017/AI_as_Deep_Rationality_Prosthetic_Evidence_Processing_Delegated_Credence_and_Core_Rationality_in_AI_Mediated_Inquiry',
    role: 'AI-mediated credencing',
    relevance: 'Shows how AI can improve evidence processing while leaving final credence vulnerable to motivated uptake, false precision, and delegation errors.',
  },
  {
    title: 'Core Rationality',
    path: pagePath('/library', 'Core Rationality'),
    url: 'https://www.academia.edu/145488011/_Core_Rationality',
    role: 'Conceptual bridge',
    relevance: 'Introduces core rationality as evidence-proportionate credence, distinct from mastery of formal probability, logic, and decision theory.',
  },
  {
    title: 'Evidence-Proportioned Belief: A Credence-First Reframing of Faith and Rationality',
    path: pagePath('/library', 'Evidence-Proportioned Belief: A Credence-First Reframing of Faith and Rationality'),
    url: 'https://www.academia.edu/166079979/_Evidence_Proportioned_Belief_A_Credence_First_Reframing_of_Faith_and_Rationality',
    role: 'Credence-first entry point',
    relevance: 'Frames belief as confidence scaled to evidence rather than a binary status or performance of conviction.',
  },
  {
    title: "Credence First: Against Plantinga's Warrant as an Epistemic Upgrade",
    path: pagePath('/library', "Credence First: Against Plantinga's Warrant as an Epistemic Upgrade"),
    url: 'https://www.academia.edu/164569364/_Credence_First_Against_Plantingas_Warrant_as_an_Epistemic_Upgrade',
    role: 'Credence-first epistemology',
    relevance: 'Argues that graded credencing is a better epistemic target than binary knowledge or warrant, especially when certainty can become miscalibrated.',
  },
  {
    title: 'Humanity as a Middle Child in the Age of AI: Patterns of Delegation and Epistemic Atrophy',
    path: pagePath('/library', 'Humanity as a Middle Child in the Age of AI: Patterns of Delegation and Epistemic Atrophy'),
    url: 'https://suj.academia.edu/PhilStilwell',
    role: 'AI over-delegation warning',
    relevance: 'Warns that AI can weaken human judgment when people outsource inference without retaining responsibility for credence.',
  },
  {
    title: 'The Gravity of Grammar: Binary Inertia and the Distortion of Epistemic Calibration',
    path: pagePath('/library', 'The Gravity of Grammar: Binary Inertia and the Distortion of Epistemic Calibration'),
    url: 'https://www.academia.edu/157221306/_The_Gravity_of_Grammar_Binary_Inertia_and_the_Distortion_of_Epistemic_Calibration',
    role: 'Language and calibration',
    relevance: 'Explains how ordinary assertion can compress scalar confidence into binary belief-talk, distorting epistemic self-reporting.',
  },
  {
    title: 'Beyond the Binary: Linguistic Evolution and the Transition to Credence-Based Discourse',
    path: pagePath('/library', 'Beyond the Binary: Linguistic Evolution and the Transition to Credence-Based Discourse'),
    url: 'https://www.academia.edu/158724677/_Beyond_the_Binary_Linguistic_Evolution_and_the_Transition_to_Credence_Based_Discourse',
    role: 'Linguistic repair',
    relevance: 'Develops a scalar lexicon, Bayesian update protocol, and discussion norms for keeping belief revision explicit and socially usable.',
  },
  {
    title: 'The Miracle Audit: A Probabilistic Framework for Differentiating Anomalies from Supernatural Interventions',
    path: pagePath('/library', 'The Miracle Audit: A Probabilistic Framework for Differentiating Anomalies from Supernatural Interventions'),
    url: 'https://www.academia.edu/145365502/_The_Miracle_Audit_A_Probabilistic_Framework_for_Differentiating_Anomalies_from_Supernatural_Interventions',
    role: 'Applied Bayesian audit',
    relevance: 'Applies probabilistic discipline to extraordinary claims by separating anomaly, causal link, evidential rigor, and burden of proof.',
  },
  {
    title: 'The Architecture of Explanatory Satisfaction and the Affective Veto Against Stochastic Reality',
    path: pagePath('/library', 'The Architecture of Explanatory Satisfaction and the Affective Veto Against Stochastic Reality'),
    url: 'https://www.academia.edu/145350819/_The_Architecture_of_Explanatory_Satisfaction_and_the_Affective_Veto_Against_Stochastic_Reality',
    role: 'Motivated cognition',
    relevance: 'Connects explanatory hunger, agency bias, and affective resistance to stochastic explanations with the site\'s Core Rationality (IC) diagnosis.',
  },
  {
    title: 'Foundational Choices for the Autodidact',
    path: pagePath('/library', 'Foundational Choices for the Autodidact'),
    url: 'https://www.academia.edu/145733284/_Foundational_Choices_for_the_Autodidact',
    role: 'Operator knowledge',
    relevance: 'Defends transferable reasoning operators: base rates, causal inference, measurement discipline, calibration, and feedback-rich practice.',
  },
  {
    title: 'The Asymptote of the Natural: Inductive Density and the A Posteriori Justification of Methodological Naturalism',
    path: pagePath('/library', 'The Asymptote of the Natural: Inductive Density and the A Posteriori Justification of Methodological Naturalism'),
    url: 'https://www.academia.edu/145260354/_The_Asymptote_of_the_Natural_Inductive_Density_and_the_A_Posteriori_Justification_of_Methodological_Naturalism',
    role: 'Methodological naturalism',
    relevance: 'Frames naturalistic inquiry as a Bayesian and risk-management strategy grounded in projectibility, constraint, and historical evidential yield.',
  },
  {
    title: 'The Threshold of the Real: Inductive Density and the Emergence of the Human Ontic',
    path: pagePath('/library', 'The Threshold of the Real: Inductive Density and the Emergence of the Human Ontic'),
    url: 'https://www.academia.edu/145261482/_The_Threshold_of_the_Real_Inductive_Density_and_the_Emergence_of_the_Human_Ontic',
    role: 'Ontology and induction',
    relevance: 'Explains objecthood and category confidence as a function of predictive reliability and cognitive cost.',
  },
  {
    title: 'The "Ontic Snap" as a Cognitive Phase Transition',
    path: pagePath('/library', 'The "Ontic Snap" as a Cognitive Phase Transition'),
    url: 'https://www.academia.edu/145263885/_The_Ontic_Snap_as_a_Cognitive_Phase_Transition',
    role: 'Reification mechanism',
    relevance: 'Models the moment noisy input becomes a stable “thing,” helping diagnose premature closure and overconfident categories.',
  },
  {
    title: 'Mereological Indigestion: Why We Cannot Divvy Up the Blob',
    path: pagePath('/library', 'Mereological Indigestion: Why We Cannot Divvy Up the Blob'),
    url: 'https://www.academia.edu/162263051/_Mereological_Indigestion_Why_We_Cannot_Divvy_Up_the_Blob',
    role: 'Category humility',
    relevance: 'Challenges overconfident partitions of reality and supports the site’s caution about reifying useful categories.',
  },
  {
    title: 'Useful Fictions Common in Philosophical Pedagogy',
    path: pagePath('/library', 'Useful Fictions Common in Philosophical Pedagogy'),
    url: 'https://www.academia.edu/145245319/_Useful_Fictions_Common_in_Philosophical_Pedagogy',
    role: 'Pedagogical scaffolding',
    relevance: 'Clarifies when simplified teaching models help inquiry and when they become overconfident substitutes for mature understanding.',
  },
  {
    title: 'Against the Great Man: A Systems-Theoretic Critique of Individual Attribution',
    path: pagePath('/library', 'Against the Great Man: A Systems-Theoretic Critique of Individual Attribution'),
    url: 'https://www.academia.edu/162786554/_Against_the_Great_Man_A_Systems_Theoretic_Critique_of_Individual_Attribution',
    role: 'Attribution calibration',
    relevance: 'Uses a control coefficient to calibrate praise and blame in noisy systems where individual agency may be weak.',
  },
];

const researchBooks = [
  {
    title: 'The Suspended Web of Induction: A Bounded Epistemology of Predictive Power, Bayesian Bookkeeping, and Revisable Ontology',
    path: pagePath('/library', 'The Suspended Web of Induction: A Bounded Epistemology of Predictive Power, Bayesian Bookkeeping, and Revisable Ontology'),
    url: './downloads/the-suspended-web-of-induction.pdf',
    role: 'Bounded epistemology',
    relevance: 'A long-form foundation showing how induction coordinates Bayes, deduction, abduction, science, predictive power, and revisable ontology.',
  },
  {
    title: 'The Ontic Snap',
    path: pagePath('/library', 'The Ontic Snap'),
    url: 'https://www.academia.edu/145842180/_The_Ontic_Snap',
    role: 'Revisable ontology',
    relevance: 'Develops the objecthood side of the project: how patterns become stable “things” for finite minds without becoming unrevisable metaphysical givens.',
  },
  {
    title: 'The Primacy of Induction',
    path: pagePath('/library', 'The Primacy of Induction'),
    url: 'https://www.academia.edu/145815798/_The_Primacy_of_Induction',
    role: 'Inductive foundation',
    relevance: 'Places induction at the center of finite inquiry, grounding credence revision in predictive and corrective contact with experience.',
  },
];

const sourceWorks = [...researchPapers, ...researchBooks];

const basePath = import.meta.env.BASE_URL;

const nestedPageTitles: Record<string, Record<string, string[]>> = {
  '/library': {
    Books: featuredBookTitles,
    Papers: featuredPaperTitles,
    Essays: [
      'Evidence Mapping Is a Practice, Not a Slogan',
      'Labels Are Not Credences',
      'Faith, Trust, and Evidence-Weighted Confidence',
      'Doubt as the Complement of Credence',
      'Coherence Is Not Enough',
      'Evidence-Proportioned Belief',
      'Binary Thinking and Gradient Thinking',
      'Selective Blindness and Asymmetric Scrutiny',
      'Grounding Ways of Knowing',
      'Childlike Trust and Mature Inquiry',
      'Unfalsifiability and Moving Goalposts',
      'Parsimony and Belief Burdens',
      'The Floating Fortress Problem',
      'Protected Predictions and Answered Prayer',
      'Semantic Drift and the Word Faith',
    ],
  },
};

type PageCollection = {
  label: string;
  description: string;
  pages: string[];
};

const sectionCollections: Record<string, PageCollection[]> = {
  '/start-here': [
    {
      label: 'Orientation',
      description: 'Begin with the basic idea: credence, confidence, evidence, and updating.',
      pages: [
        'What Is Credencing?',
        'Why Binary Belief Is Too Crude',
        'Evidence and Confidence',
        'What Bayesian Updating Is',
      ],
    },
    {
      label: 'Diagnosis and Next Steps',
      description: 'Move from the basic model into failure modes and the recommended route through the site.',
      pages: [
        'Why People Go Wrong',
        'The Difference Between Being Mistaken and Being Epistemically Inconsistent',
        'Where to Go Next',
      ],
    },
  ],
  '/core-ideas': [
    {
      label: 'Credence Vocabulary',
      description: 'The probability and confidence terms used throughout the project.',
      pages: [
        'Credences',
        'Evidence',
        'Confidence Levels',
        'Priors',
        'Likelihoods',
        'Posteriors',
        'Bayesian Updating',
        'Calibration',
        'Uncertainty',
        'Warranted Uncertainty',
      ],
    },
    {
      label: 'Two-Gap Model',
      description: 'The formal values that separate evidence access, evidence perception, and assigned confidence.',
      pages: [
        'Objective Evidence (E0)',
        'Perceived Evidence (EP)',
        'Assigned Credence (CA)',
        'Deep Rationality (SD)',
        'Core Rationality',
        'Calculation Error (DE)',
        'Core Irrationality (IC)',
      ],
    },
    {
      label: 'Failure and Repair',
      description: 'Diagnostic concepts for identifying and repairing misalignment.',
      pages: [
        'Diagnostic Safeguards',
        'Epistemic Akrasia',
        'Core vs Deep Rationality',
        'Epistemic Archetypes',
      ],
    },
  ],
  '/bayes-theorem': [
    {
      label: 'Formula Parts',
      description: 'Read the theorem as a set of roles: hypothesis, prior, likelihood, evidence, and posterior.',
      pages: [
        'Bayes Theorem Overview',
        'The Formula',
        'The Prior',
        'The Likelihood',
        'The Evidence Term',
        'The Posterior',
      ],
    },
    {
      label: 'Use and Misuse',
      description: 'Apply Bayes to scientific reasoning, practice cases, and common mistakes.',
      pages: [
        'Scientific Walkthrough',
        'Common Mistakes',
        'Practice Examples',
      ],
    },
  ],
  '/interactive-lab': [
    {
      label: 'Read the Model',
      description: 'Start with the live model, its visual legend, and the guide to interpreting the diagram.',
      pages: [
        'Interactive Model',
        'How to Read the Model',
        'Visual Legend',
      ],
    },
    {
      label: 'Scenario Presets',
      description: 'Compare standard epistemic archetypes before building your own examples.',
      pages: [
        'Preset Scenarios',
        'Ideal Agent',
        'Honest Novice',
        'Biased Expert',
        'Epistemic Delusion',
      ],
    },
    {
      label: 'Experiment',
      description: 'Create or compare cases, then use the interpretation guide to diagnose the gaps.',
      pages: [
        'Build Your Own Scenario',
        'Compare Two Scenarios',
        'Interpretation Guide',
      ],
    },
  ],
  '/case-studies': [
    {
      label: 'Everyday and Technical Cases',
      description: 'Classic reasoning failures where evidence, base rates, and perceived risk diverge.',
      pages: [
        'Base-Rate Neglect',
        'Medical Testing',
        'Risk Inflation',
        'Pragmatic Encroachment',
        'Fear Overrides',
      ],
    },
    {
      label: 'Social and Institutional Cases',
      description: 'Cases where group pressure, identity, media systems, or public conflict shape credence.',
      pages: [
        'Motivated Reasoning',
        'Political Tribalism',
        'Conspiracy Thinking',
      ],
    },
    {
      label: 'Archetype Cases',
      description: 'Concrete examples built around the model’s agent types.',
      pages: [
        'Honest Novice Cases',
        'Biased Expert Cases',
        'Delusion Threshold Cases',
      ],
    },
  ],
  '/skills': [
    {
      label: 'Core Practices',
      description: 'The basic habits: state credences, scale confidence, update, and use base rates.',
      pages: [
        'How to Think in Credences',
        'How to Scale Confidence to Evidence',
        'How to Update with New Evidence',
        'How to Estimate Priors',
        'How to Read Likelihoods',
        'How to Avoid Base-Rate Neglect',
      ],
    },
    {
      label: 'Diagnostic Practices',
      description: 'Find overconfidence, motivated override, core/deep mismatch, and poor uncertainty language.',
      pages: [
        'How to Detect Overconfidence',
        'How to Detect Motivated Override',
        'How to Separate Core from Deep Failure',
        'How to Express Uncertainty Honestly',
        'How to Ask Better Epistemic Questions',
        'Practice Exercises',
      ],
    },
  ],
  '/discussion-groups': [
    {
      label: 'Program Sequence',
      description: 'A session-by-session route from credences to AI, institutions, and public reasoning.',
      pages: [
        'Group Discussion Guide',
        'Session 1: Credences and Confidence',
        'Session 2: Evidence and Perception',
        'Session 3: Priors, Base Rates, and Likelihoods',
        'Session 4: Updating and Changing Minds',
        'Session 5: Bias, Identity, and Core Rationality',
        'Session 6: Uncertainty, Action, and Risk',
        'Session 7: Media, Institutions, and Public Debate',
        'Session 8: AI, Expertise, and the Future',
      ],
    },
    {
      label: 'Facilitation',
      description: 'Support material for running the sequence with groups.',
      pages: [
        'Facilitator Toolkit',
      ],
    },
  ],
  '/applications': [
    {
      label: 'Knowledge Domains',
      description: 'Fields where evidence quality, expert judgment, and calibration are central.',
      pages: [
        'Science',
        'Medicine',
        'Journalism',
        'Law',
        'Education',
      ],
    },
    {
      label: 'Public and Personal Systems',
      description: 'Contexts where credences become decisions, policies, institutional claims, or AI-mediated judgment.',
      pages: [
        'Public Debate',
        'Policy',
        'Personal Decision-Making',
        'AI Alignment',
        'Institutional Diagnostics',
      ],
    },
  ],
  '/library': [
    {
      label: 'Books',
      description: 'Long-form works that carry the deeper foundation for induction, objecthood, and bounded inquiry.',
      pages: [
        'Books',
      ],
    },
    {
      label: 'Research Spine',
      description: 'Formal papers, the future research roadmap, and the main paper archive.',
      pages: [
        'Papers',
        'Future Papers',
      ],
    },
    {
      label: 'Short Essays',
      description: 'Accessible essays that turn the framework into vivid examples and conceptual repairs.',
      pages: [
        'Essays',
      ],
    },
    {
      label: 'Reference and Teaching',
      description: 'Definitions, frequently asked questions, sources, visuals, and classroom materials.',
      pages: [
        'Glossary',
        'FAQ',
        'References',
        'Visual Archive',
        'Teaching Materials',
        'Downloads',
        'Project Notes',
      ],
    },
  ],
  '/about': [
    {
      label: 'Project Orientation',
      description: 'What the project is, how it uses the term Credencing, and how to read the site.',
      pages: [
        'Project Overview',
        'Why the Term "Credencing"',
        'Methodological Commitments',
        'Descriptive Rather than Prescriptive Orientation',
        'How to Use This Site',
      ],
    },
    {
      label: 'Author and Continuation',
      description: 'Author context, contact, and directions for future development.',
      pages: [
        'Author',
        'Contact',
        'Future Directions',
      ],
    },
  ],
};

const relatedGroupPaths: Record<string, string[]> = {
  '/start-here': ['/core-ideas', '/interactive-lab', '/skills'],
  '/core-ideas': ['/start-here', '/bayes-theorem', '/interactive-lab'],
  '/bayes-theorem': ['/core-ideas', '/skills', '/case-studies'],
  '/interactive-lab': ['/core-ideas', '/case-studies', '/skills'],
  '/case-studies': ['/skills', '/applications', '/interactive-lab'],
  '/skills': ['/case-studies', '/discussion-groups', '/applications'],
  '/discussion-groups': ['/skills', '/library', '/applications'],
  '/applications': ['/case-studies', '/library', '/skills'],
  '/library': ['/core-ideas', '/applications', '/about'],
  '/about': ['/start-here', '/library', '/site-map'],
};

function getNestedChildren(groupPath: string) {
  return nestedPageTitles[groupPath] ?? {};
}

function getNestedChildTitleSet(groupPath: string) {
  return new Set(Object.values(getNestedChildren(groupPath)).flat());
}

function getTopLevelPageTitles(group: PageGroup) {
  const childTitles = getNestedChildTitleSet(group.path);
  return group.pages.filter((page) => !childTitles.has(page));
}

function getSectionCollections(group: PageGroup): PageCollection[] {
  const topLevelPages = getTopLevelPageTitles(group);
  const available = new Set(topLevelPages);
  const seen = new Set<string>();
  const configured = (sectionCollections[group.path] ?? [])
    .map((collection) => ({
      ...collection,
      pages: collection.pages.filter((page) => available.has(page)),
    }))
    .filter((collection) => collection.pages.length > 0);

  configured.forEach((collection) => collection.pages.forEach((page) => seen.add(page)));

  const uncategorized = topLevelPages.filter((page) => !seen.has(page));
  if (uncategorized.length === 0) return configured;

  return [
    ...configured,
    {
      label: 'Additional Pages',
      description: 'Pages that belong to this section but have not yet been assigned to a smaller reading cluster.',
      pages: uncategorized,
    },
  ];
}

function getParentCollection(page: ContentPage) {
  const nested = getNestedChildren(page.groupPath);
  const entry = Object.entries(nested).find(([, children]) => children.includes(page.title));
  if (!entry) return null;
  const [title] = entry;
  return {
    title,
    path: pagePath(page.groupPath, title),
  };
}

function isActiveNavPath(route: string, path: string) {
  if (path === '/') return route === '/';
  return route === path || route.startsWith(`${path}/`);
}

type ScenarioState = EpistemicData & {
  name: string;
  claim: string;
};

type ScenarioPair = {
  label: string;
  lesson: string;
  a: ScenarioState;
  b: ScenarioState;
};

type ScenarioMetrics = {
  calcError: number;
  coreGap: number;
  warrantedSlack: number;
  excessCore: number;
  diagnosis: string;
  repair: string;
};

const scenarioPairs: ScenarioPair[] = [
  {
    label: 'Honest Novice vs Biased Expert',
    lesson: 'Same rough conclusion, different epistemic structure: limited tools on one side, motivated override on the other.',
    a: {
      name: 'Honest Novice',
      claim: 'The new policy is probably harmful.',
      objectiveEvidence: 0.62,
      perceivedEvidence: 0.42,
      assignedCredence: 0.42,
      deepRationality: 0.25,
    },
    b: {
      name: 'Biased Expert',
      claim: 'The new policy is definitely harmful.',
      objectiveEvidence: 0.62,
      perceivedEvidence: 0.60,
      assignedCredence: 0.92,
      deepRationality: 0.88,
    },
  },
  {
    label: 'Bad Evidence vs Bad Faith',
    lesson: 'One agent is misled upstream; the other sees the evidence well but assigns a defensive credence.',
    a: {
      name: 'Bad Evidence Access',
      claim: 'The video proves the accusation.',
      objectiveEvidence: 0.35,
      perceivedEvidence: 0.78,
      assignedCredence: 0.76,
      deepRationality: 0.45,
    },
    b: {
      name: 'Bad Faith Override',
      claim: 'The video proves the accusation.',
      objectiveEvidence: 0.35,
      perceivedEvidence: 0.38,
      assignedCredence: 0.82,
      deepRationality: 0.82,
    },
  },
  {
    label: 'Fear Override vs Evidence-Based Caution',
    lesson: 'Both agents may act cautiously, but one assigns fear-inflated credence while the other separates risk from belief.',
    a: {
      name: 'Fear Override',
      claim: 'The threat is very likely.',
      objectiveEvidence: 0.28,
      perceivedEvidence: 0.34,
      assignedCredence: 0.80,
      deepRationality: 0.58,
    },
    b: {
      name: 'Evidence-Based Caution',
      claim: 'The threat is possible enough to prepare for.',
      objectiveEvidence: 0.28,
      perceivedEvidence: 0.33,
      assignedCredence: 0.36,
      deepRationality: 0.72,
    },
  },
  {
    label: 'Same Belief, Different Structure',
    lesson: 'The final credence can match while the path to that credence differs sharply.',
    a: {
      name: 'Lucky Guess',
      claim: 'The treatment will probably work.',
      objectiveEvidence: 0.70,
      perceivedEvidence: 0.35,
      assignedCredence: 0.70,
      deepRationality: 0.30,
    },
    b: {
      name: 'Calibrated Update',
      claim: 'The treatment will probably work.',
      objectiveEvidence: 0.70,
      perceivedEvidence: 0.68,
      assignedCredence: 0.70,
      deepRationality: 0.86,
    },
  },
  {
    label: 'Same Evidence, Different Credence',
    lesson: 'Two agents can perceive the same evidence but differ in how honestly they let it govern confidence.',
    a: {
      name: 'Aligned Skeptic',
      claim: 'The extraordinary claim remains unlikely.',
      objectiveEvidence: 0.24,
      perceivedEvidence: 0.28,
      assignedCredence: 0.28,
      deepRationality: 0.76,
    },
    b: {
      name: 'Affective Veto',
      claim: 'The extraordinary claim must be true.',
      objectiveEvidence: 0.24,
      perceivedEvidence: 0.28,
      assignedCredence: 0.84,
      deepRationality: 0.76,
    },
  },
];

export default function App() {
  const [route, setRoute] = useHashRoute();
  const activeGroup = pageGroups.find((group) => group.path === route);
  const activePage = contentPages.find((page) => page.path === route);
  const activeUtilityPage = utilityFeaturePages.find((page) => page.path === route);
  useRouteMetadata(route, activeGroup, activePage, activeUtilityPage);

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
                onNavigate={setRoute}
              />
              <InteractiveExperience initialTab="model" onNavigate={setRoute} />
              <PageCluster group={pageGroups.find((group) => group.path === '/interactive-lab')!} onNavigate={setRoute} />
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
              <SectionHero group={activeGroup} onNavigate={setRoute} />
              <PageCluster group={activeGroup} onNavigate={setRoute} />
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
              <SiteMap onNavigate={setRoute} />
            </motion.main>
          )}

          {route === '/search' && (
            <motion.main
              key="search"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <SearchAndTopicIndex onNavigate={setRoute} />
            </motion.main>
          )}

          {activeUtilityPage && (
            <motion.main
              key={activeUtilityPage.path}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {activeUtilityPage.kind === 'topic-index' ? (
                <TopicIndexArticle feature={activeUtilityPage} onNavigate={setRoute} />
              ) : activeUtilityPage.kind === 'tag-index' ? (
                <TagIndexArticle feature={activeUtilityPage} onNavigate={setRoute} />
              ) : (
                <UtilityFeatureArticle feature={activeUtilityPage} onNavigate={setRoute} />
              )}
            </motion.main>
          )}

          {activePage && (
            <motion.main
              key={activePage.path}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <ContentArticle page={activePage} onNavigate={setRoute} />
            </motion.main>
          )}

          {!activeGroup && !activePage && !activeUtilityPage && route !== '/' && route !== '/site-map' && route !== '/search' && (
            <motion.main
              key="not-found"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="glass-panel p-8 md:p-12 space-y-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Route Pending</p>
              <h1 className="text-3xl text-white font-light">This page is in the map, but not yet drafted.</h1>
              <p className="text-stone-400 max-w-2xl">
                The content architecture is now in place. This route can become a full essay, case study, skill guide, or glossary entry as the project expands.
              </p>
              <button onClick={() => setRoute('/site-map')} className="text-amber-300 text-xs uppercase tracking-widest font-bold">
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

function useRouteMetadata(route: string, group?: PageGroup, page?: ContentPage, utilityPage?: UtilityFeaturePage) {
  useEffect(() => {
    const title = page ? `${page.title} | Credencing` : utilityPage ? `${utilityPage.title} | Credencing` : group ? `${group.title} | Credencing` : route === '/search' ? 'Search | Credencing' : route === '/site-map' ? 'Site Map | Credencing' : 'Credencing: Visualizing & Minimizing Irrationality';
    const description = page?.summary ?? utilityPage?.summary ?? group?.summary ?? 'A public framework and interactive model for mapping evidence, perception, confidence, and rational integrity.';
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [route, group, page, utilityPage]);
}

function useHashRoute(): [string, (path: string) => void] {
  const readRoute = () => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash.startsWith('/')) return '/';
    return hash.length > 1 ? hash.replace(/\/+$/, '') : '/';
  };

  const [route, setRouteState] = useState(readRoute);

  useEffect(() => {
    const onHashChange = () => setRouteState(readRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setRoute = useCallback((path: string) => {
    const normalizedPath = path.length > 1 ? path.replace(/\/+$/, '') : '/';
    window.location.hash = normalizedPath;
    setRouteState(normalizedPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return [route, setRoute];
}

function SiteHeader({ route, onNavigate }: { route: string; onNavigate: (path: string) => void }) {
  return (
    <header className="pb-10 space-y-6">
      <div className="flex flex-col gap-6">
        <button onClick={() => onNavigate('/')} className="text-left">
          <p className="text-[10px] text-stone-400 font-mono uppercase tracking-widest mb-2">Credencing.com</p>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-none">
            Credencing: <span className="opacity-40">Visualizing & Minimizing Irrationality</span>
          </h1>
        </button>
        <nav aria-label="Primary navigation" className="grid grid-cols-1 xl:grid-cols-[1.05fr_1.05fr_1.1fr] gap-2">
          {navSections.map((section) => (
            <div key={section.label} className="glass-panel p-2 border border-white/5 rounded-2xl">
              <p className="px-2 pb-2 text-[9px] uppercase tracking-[0.24em] text-stone-600 font-bold">{section.label}</p>
              <div className="flex flex-wrap gap-1">
                {section.items.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className={`px-3 py-2 rounded-xl flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                      isActiveNavPath(route, item.path)
                        ? 'bg-amber-600/20 text-amber-300 border border-amber-500/50'
                        : 'text-stone-400 border border-transparent hover:text-stone-200 hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HomeExperience({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Central Exhibit</p>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-white leading-[1.02]">
            A map for the distance between evidence, perception, and belief.
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            The interactive model remains the center of the site. Around it, this public web will grow into a guided library of concepts, case studies, skills, and applications for thinking in credences.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('/interactive-lab')}
              className="px-5 py-3 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/50 rounded-xl text-xs font-bold tracking-widest transition-all text-amber-300 flex items-center gap-3 uppercase"
            >
              Open Lab <Activity size={14} />
            </button>
            <button
              onClick={() => onNavigate('/start-here')}
              className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold tracking-widest transition-all text-stone-300 flex items-center gap-3 uppercase"
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

      <ReadingPaths onNavigate={onNavigate} />
      <InteractiveExperience initialTab="intro" compact onNavigate={onNavigate} />
      <DiagramGallery />

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-3">Featured Paths</p>
            <h2 className="text-3xl font-light text-white">The surrounding web</h2>
          </div>
          <button onClick={() => onNavigate('/site-map')} className="hidden sm:flex items-center gap-2 text-[10px] text-stone-400 hover:text-amber-300 uppercase tracking-widest font-bold">
            Full Map <MapIcon size={14} />
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

function InteractiveExperience({ initialTab, compact = false, onNavigate }: { initialTab: Tab; compact?: boolean; onNavigate: (path: string) => void }) {
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
            {activeTab === 'model' && <ModelPanel data={data} dynamicDescription={dynamicDescription} onNavigate={onNavigate} />}
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
        <h2 className="text-4xl font-light tracking-tight text-white underline decoration-amber-500/20 underline-offset-8">Why Study Credencing?</h2>
        <p className="text-stone-100 text-lg leading-relaxed font-light">
          Belief is not a binary toggle; it is our <span className="text-white font-medium italic underline decoration-amber-500/40 underline-offset-4">dynamic orientation</span> toward changing realities. We call this process <span className="text-amber-400 font-bold tracking-wider">Credencing</span>.
        </p>
        <p className="text-stone-300 text-sm leading-relaxed font-light">
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

function ModelPanel({ data, dynamicDescription, onNavigate }: { data: EpistemicData; dynamicDescription: string; onNavigate: (path: string) => void }) {
  return (
    <motion.div key="model" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-8">
      <EpistemicChart data={data} />
      <div className="glass-panel p-6 border-white/5 text-[13px] text-stone-200 serif-thought leading-relaxed bg-white/[0.03] shadow-inner min-h-[80px] flex items-center">
        {dynamicDescription}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
        <MiniNote icon={<Activity size={10} />} title="Standard Agent" text="Minor deviations represent common biases while belief remains broadly tethered to perceived evidence." />
        <MiniNote icon={<Terminal size={10} />} title="Delusion Threshold" text="Past the threshold, the agent is no longer participating honestly with their own perceived evidence." danger />
      </div>
      <ComparisonRecommendation onNavigate={onNavigate} />
    </motion.div>
  );
}

function TheoryPanel() {
  return (
    <motion.div key="explanation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <section className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold block">The Analytical Distinction</span>
        <h2 className="text-2xl font-light text-white leading-tight">Competence vs. Consistency</h2>
        <p className="text-stone-400 leading-relaxed text-sm">
          Credencing unbundles algorithmic failures from affective overrides. An honest novice may lack the tools to see clearly; a biased expert may see clearly and still refuse the implication.
        </p>
      </section>
      <div className="space-y-5">
        <BorderNote title="1. Deep Rationality" text="The exercise of rational tools: probability theory, statistics, Bayesian analysis, and careful comparison of hypotheses." color="border-amber-500/30" />
        <BorderNote title="2. Core Rationality" text="The adoption of a degree of belief that aligns with perceived evidence rather than identity, fear, tribe, or desire." color="border-red-500/30" />
      </div>
    </motion.div>
  );
}

function FormalizationPanel() {
  return (
    <motion.div key="formalization" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8 pb-10">
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-amber-400">
          <Terminal size={20} strokeWidth={1.5} />
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold">The Epistemic Formalism</h2>
        </div>
        <p className="text-3xl font-extralight tracking-tight text-white leading-tight">Mapping the algorithmic gaps.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <VarDef sym="E0" label="Objective Evidence" desc="The ground truth probability density in mind-independent reality." />
        <VarDef sym="EP" label="Perceived Evidence" desc="The agent's internal representation after algorithmic processing." />
        <VarDef sym="CA" label="Assigned Credence" desc="The final doxastic commitment adopted by the agent." />
        <VarDef sym="SD" label="Deep Rationality" desc="Resolution of inferential optics and statistical literacy." />
      </div>
      <div className="space-y-6">
        <Formula code="DE = |EP - E0|" title="Calculation Error (DE)" text="A failure of competence: the distance between Objective Evidence (E0) and Perceived Evidence (EP)." />
        <Formula code="IC = |CA - EP|" title="Core Irrationality (IC)" text="A failure of integrity: the distance between Perceived Evidence (EP) and Assigned Credence (CA)." />
        <Formula code="slack = (1 - SD) * 0.25" title="Warranted Slack" text="A probability-scale allowance for uncertainty proportional to skill deficit." />
        <Formula code="omega_visual = (1 - SD) * (pi / 4)" title="Visual Uncertainty" text="The angular version of warranted uncertainty used to draw the green uncertainty region." />
        <Formula code="excess_IC = max(0, IC - slack)" title="Excess Core Irrationality" text="The portion of doxastic misalignment that remains after warranted uncertainty is allowed." />
      </div>
    </motion.div>
  );
}

function ContextPanel({ activeTab, onOpenModel }: { key?: string; activeTab: Tab; onOpenModel: () => void }) {
  if (activeTab === 'intro') {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-panel p-8 space-y-6 bg-amber-500/[0.06] border-amber-500/40 shadow-2xl">
        <h3 className="text-2xl font-light text-white">Unbundling Failure</h3>
        <p className="text-stone-100 text-sm leading-relaxed">
          Traditional labels often blur the honest novice and the biased expert. Credencing keeps those failures separate so each can be diagnosed more precisely.
        </p>
        <button onClick={onOpenModel} className="w-full px-6 py-3 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/50 rounded-xl text-xs font-bold tracking-widest transition-all text-amber-300 flex items-center justify-center gap-3 uppercase">
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
          ['Honest Novice', 'Good faith with limited tools; blurry perception but sincere alignment.', <Brain size={16} className="text-amber-400" />],
          ['Biased Expert', 'High analytical power used to protect a prior commitment.', <ShieldAlert size={16} className="text-red-400" />],
          ['Epistemic Delusion', 'Assigned credence drifts beyond the warranted uncertainty range.', <UserMinus size={16} className="text-stone-500" />],
        ].map(([name, desc, icon]) => (
          <ArchetypeCard key={String(name)} name={String(name)} desc={String(desc)} icon={icon as ReactNode} />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-panel p-8 space-y-5 bg-white/[0.02]">
      <p className="serif-thought text-xl text-amber-100 leading-snug">"The intellect as bodyguard"</p>
      <p className="text-stone-400 text-xs leading-relaxed">
        Intelligence does not automatically cure bias. Sometimes it gives identity better lawyers.
      </p>
      <a
        href="https://www.academia.edu/165572684/_A_Formal_Framework_for_Core_and_Deep_Rationality"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[10px] text-amber-400 font-mono uppercase tracking-[0.2em]"
      >
        Foundational Reference Paper
      </a>
      <a
        href="https://www.academia.edu/164569364/_Credence_First_Against_Plantingas_Warrant_as_an_Epistemic_Upgrade"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[10px] text-amber-400 font-mono uppercase tracking-[0.2em]"
      >
        Credence-First Companion Paper
      </a>
    </motion.div>
  );
}

function SectionHero({ group, kicker, onNavigate }: { group: PageGroup; kicker?: string; onNavigate: (path: string) => void }) {
  const collections = getSectionCollections(group);
  const firstPage = getTopLevelPageTitles(group)[0];
  const firstPath = firstPage ? pagePath(group.path, firstPage) : group.path;

  return (
    <section className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
      <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">{kicker ?? group.title}</p>
      <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{group.title}</h2>
      <p className="text-stone-300 max-w-3xl text-base md:text-lg leading-relaxed">{group.summary}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        {firstPage && (
          <button
            onClick={() => onNavigate(firstPath)}
            className="px-4 py-2 rounded-xl border border-amber-500/40 bg-amber-600/15 text-amber-200 text-[10px] font-bold uppercase tracking-wider hover:border-amber-400/70 transition-colors flex items-center gap-2"
          >
            Start Section <ArrowRight size={13} />
          </button>
        )}
        <button
          onClick={() => onNavigate('/search')}
          className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-stone-300 text-[10px] font-bold uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-200 transition-colors flex items-center gap-2"
        >
          Search Site <Search size={13} />
        </button>
        <button
          onClick={() => onNavigate('/site-map')}
          className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-stone-300 text-[10px] font-bold uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-200 transition-colors flex items-center gap-2"
        >
          Full Map <MapIcon size={13} />
        </button>
      </div>
      {collections.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3">
          {collections.map((collection, index) => (
            <button
              key={collection.label}
              onClick={() => onNavigate(pagePath(group.path, collection.pages[0]))}
              className="rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-left hover:border-amber-500/40 transition-colors"
            >
              <span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Part {String(index + 1).padStart(2, '0')}</span>
              <span className="block text-xs text-white">{collection.label}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function PageCluster({ group, onNavigate }: { group: PageGroup; onNavigate: (path: string) => void }) {
  const nestedChildren = getNestedChildren(group.path);
  const collections = getSectionCollections(group);

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-2">Section Contents</p>
          <h3 className="text-2xl font-light text-white">Organized reading blocks</h3>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-stone-600">{group.pages.length} mapped pages</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {collections.map((collection) => (
          <section key={collection.label} className="space-y-4">
            <div className="border-l border-amber-500/30 pl-4 space-y-2">
              <h4 className="text-xl text-white font-light">{collection.label}</h4>
              <p className="text-stone-400 text-xs leading-relaxed">{collection.description}</p>
            </div>
            <div className="space-y-3">
              {collection.pages.map((page) => (
                <div key={page} className="space-y-2">
                  <PageTeaser group={group} page={page} index={group.pages.indexOf(page)} onNavigate={onNavigate} />
                  {nestedChildren[page] && (
                    <div className="ml-4 border-l border-amber-500/20 pl-4 space-y-2">
                      <p className="text-[9px] uppercase tracking-[0.22em] text-stone-500 font-bold">{page === 'Papers' ? 'Papers in this cluster' : 'Essays in this cluster'}</p>
                      {nestedChildren[page].map((childPage) => (
                        <button
                          key={childPage}
                          onClick={() => onNavigate(pagePath(group.path, childPage))}
                          className="w-full text-left p-3 rounded-lg border border-white/5 bg-black/10 hover:border-amber-500/30 transition-colors"
                        >
                          <span className="block text-xs text-amber-100">{childPage}</span>
                          <span className="block text-[9px] uppercase tracking-widest text-stone-600 mt-1">{page === 'Papers' ? 'Paper' : 'Essay'}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function ComparisonRecommendation({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="glass-panel p-5 md:p-6 bg-amber-500/[0.045] border-amber-500/25">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="space-y-3 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Recommended Next Step</p>
          <h3 className="text-xl md:text-2xl font-light text-white">Test the distinction by comparing two scenarios</h3>
          <p className="text-stone-300 text-sm leading-relaxed">
            After reading the Standard Agent and Delusion Threshold contrast, open the comparison lab. It shows how two agents can share a surface belief while differing sharply in evidence-reading skill, assigned credence, and belief integrity.
          </p>
        </div>
        <button
          onClick={() => onNavigate(pagePath('/interactive-lab', 'Compare Two Scenarios'))}
          className="w-full sm:w-fit md:shrink-0 px-5 py-3 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/50 rounded-xl text-xs font-bold tracking-widest transition-all text-amber-200 flex items-center justify-center gap-3 uppercase"
        >
          Open Comparison Lab <Network size={14} />
        </button>
      </div>
    </section>
  );
}

function PageTeaser({ group, page, index, onNavigate }: { group: PageGroup; page: string; index: number; onNavigate: (path: string) => void }) {
  const targetPath = pagePath(group.path, page);
  const contentPage = contentPages.find((item) => item.path === targetPath);
  const hasContent = Boolean(contentPage);

  return (
    <button
      onClick={() => {
        onNavigate(targetPath);
      }}
      className="glass-panel p-5 bg-white/[0.015] border-white/5 hover:border-amber-500/30 transition-colors text-left"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] text-stone-600 font-mono uppercase tracking-widest mb-2">Page {String(index + 1).padStart(2, '0')}</p>
          <h4 className="text-white font-medium leading-snug">{page}</h4>
          {contentPage?.summary && (
            <p className="text-stone-500 text-xs leading-relaxed mt-2 line-clamp-2">{contentPage.summary}</p>
          )}
        </div>
        <span className={`text-[9px] border rounded-full px-2 py-1 uppercase tracking-wider ${hasContent ? 'text-amber-300 border-amber-500/30' : 'text-stone-500 border-white/10'}`}>
          {hasContent ? 'Read' : 'Draft'}
        </span>
      </div>
    </button>
  );
}

function ContentArticle({ page, onNavigate }: { page: ContentPage; onNavigate: (path: string) => void }) {
  const group = pageGroups.find((item) => item.path === page.groupPath);
  const sequence = group?.pages.map((title) => pagePath(group.path, title)) ?? [];
  const currentIndex = sequence.indexOf(page.path);
  const previousPath = currentIndex > 0 ? sequence[currentIndex - 1] : undefined;
  const nextPath = currentIndex >= 0 && currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : undefined;
  const previousPage = previousPath ? contentPages.find((item) => item.path === previousPath) : undefined;
  const nextPage = nextPath ? contentPages.find((item) => item.path === nextPath) : undefined;

  return (
    <article className="space-y-8">
      <header className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
        <Breadcrumbs page={page} onNavigate={onNavigate} />
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{page.title}</h2>
        <p className="text-stone-300 max-w-3xl text-base md:text-lg leading-relaxed">{page.summary}</p>
      </header>

      <ScenarioComparisonPanel page={page} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <AuthorFeature page={page} />
          <ResearchBooksPanel page={page} onNavigate={onNavigate} />
          <ResearchPapersPanel page={page} onNavigate={onNavigate} />
          <SourceWorkPanel page={page} />
          <BayesTheoremPanel page={page} />
          {page.sections.map((section) => (
            <section key={section.heading} className="glass-panel p-6 md:p-8 bg-white/[0.015] border-white/5 space-y-4">
              <h3 className="text-2xl font-light text-white">{section.heading}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-stone-300 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="grid gap-2 pt-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-stone-300 text-sm leading-relaxed flex gap-3">
                      <span className="text-amber-400">|</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <PriorityExpansion page={page} />
          <CitationPanel page={page} />
          <DownloadPanel page={page} />
          <ContactPanel page={page} />
          <DiscussionAccordionPanel page={page} />
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previousPath && (
              <button onClick={() => onNavigate(previousPath)} className="glass-panel p-5 bg-white/[0.015] border-white/5 hover:border-amber-500/30 text-left transition-colors">
                <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Previous</span>
                <span className="text-white text-sm">{previousPage?.title ?? previousPath}</span>
              </button>
            )}
            {nextPath && (
              <button onClick={() => onNavigate(nextPath)} className="glass-panel p-5 bg-white/[0.015] border-white/5 hover:border-amber-500/30 text-left transition-colors">
                <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Next</span>
                <span className="text-white text-sm">{nextPage?.title ?? nextPath}</span>
              </button>
            )}
          </nav>
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-5">
          <GlossaryChips page={page} onNavigate={onNavigate} />
          <div className="glass-panel p-6 bg-amber-500/[0.04] border-amber-500/20 space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold">Key Takeaways</h3>
            <ul className="space-y-3">
              {page.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="text-stone-200 text-xs leading-relaxed flex gap-2">
                  <span className="text-amber-400 mt-0.5">-</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Related</h3>
            <div className="space-y-2">
              {page.related.map((relatedPath) => {
                const relatedPage = contentPages.find((item) => item.path === relatedPath);
                const relatedGroup = pageGroups.find((item) => item.path === relatedPath);
                return (
                  <button
                    key={relatedPath}
                    onClick={() => onNavigate(relatedPath)}
                    className="w-full text-left p-3 rounded-lg border border-white/5 hover:border-amber-500/30 bg-white/[0.02] transition-colors"
                  >
                    <span className="block text-xs text-white">{relatedPage?.title ?? relatedGroup?.title ?? relatedPath}</span>
                    <span className="block text-[9px] uppercase tracking-widest text-stone-600 mt-1">{relatedPage ? relatedPage.groupTitle : relatedGroup ? 'Section' : 'Planned page'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {group && (
            <div className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Section Sequence</h3>
              <div className="space-y-2">
                {getSectionCollections(group).map((collection) => (
                  <div key={collection.label} className="rounded-xl border border-white/5 bg-black/10 p-3 space-y-2">
                    <p className="text-[9px] uppercase tracking-widest text-stone-600 font-bold">{collection.label}</p>
                    {collection.pages.map((pageTitle) => {
                      const path = pagePath(group.path, pageTitle);
                      return (
                        <div key={pageTitle} className="space-y-1">
                          <button
                            onClick={() => onNavigate(path)}
                            className={`w-full text-left text-xs p-2 rounded border transition-colors ${path === page.path ? 'text-amber-300 border-amber-500/30 bg-amber-500/10' : 'text-stone-400 border-transparent hover:border-white/10 hover:bg-white/5'}`}
                          >
                            {pageTitle}
                          </button>
                          {getNestedChildren(group.path)[pageTitle] && (
                            <div className="ml-3 border-l border-amber-500/20 pl-2 space-y-1">
                              {getNestedChildren(group.path)[pageTitle].map((childTitle) => {
                                const childPath = pagePath(group.path, childTitle);
                                return (
                                  <button
                                    key={childTitle}
                                    onClick={() => onNavigate(childPath)}
                                    className={`w-full text-left text-[11px] p-2 rounded border transition-colors ${childPath === page.path ? 'text-amber-200 border-amber-500/30 bg-amber-500/10' : 'text-stone-500 border-transparent hover:border-white/10 hover:bg-white/5'}`}
                                  >
                                    {childTitle}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}

function AuthorFeature({ page }: { page: ContentPage }) {
  if (page.path !== pagePath('/about', 'Author')) return null;

  return (
    <section className="glass-panel overflow-hidden bg-white/[0.02] border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <div className="bg-gradient-to-br from-amber-900/30 via-stone-950/20 to-red-950/20 p-6 md:p-8 flex items-center justify-center">
          <img
            src={`${basePath}images/phil-stilwell-profile.png`}
            alt="Phil Stilwell"
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-amber-500/30 shadow-2xl"
          />
        </div>
        <div className="p-6 md:p-8 space-y-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Author Profile</p>
          <h3 className="text-3xl font-light text-white">Phil Stilwell</h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            Phil Stilwell develops Credencing as an epistemology project about how confidence should scale with evidence, how belief becomes distorted, and how rational agents can preserve updateability under emotional, social, and institutional pressure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Education</span>
              University of Kansas: BA Philosophy, MA Education (TESOL)
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Teaching Contexts</span>
              University of Tokyo, NYU SPS, Gakushuin University, Nichibei Kaiwa Gakuin, Japanese Cabinet Office
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Course Areas</span>
              Critical thinking, western philosophy, futurology, macroeconomics, technical writing
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Research Areas</span>
              Epistemology, cognitive science, philosophy of science, theology, educational design
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://suj.academia.edu/PhilStilwell" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/10 hover:border-amber-400/50 text-amber-100 text-sm">
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Research Profile</span>
              Academia.edu
            </a>
            <a href="https://byteseismic.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/10 hover:border-amber-400/50 text-amber-100 text-sm">
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">Writing & Projects</span>
              ByteSeismic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchBooksPanel({ page, onNavigate }: { page: ContentPage; onNavigate: (path: string) => void }) {
  const showPanel = [
    pagePath('/library', 'Books'),
  ].includes(page.path);

  if (!showPanel) return null;

  return (
    <section className="glass-panel p-6 md:p-8 bg-white/[0.02] border-amber-500/20 space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Books</p>
        <h3 className="text-2xl md:text-3xl font-light text-white">The long-form foundation</h3>
        <p className="text-stone-300 text-sm md:text-base leading-relaxed">
          These book-length works carry the deeper philosophical background for Credencing: induction, predictive power, Bayesian bookkeeping, objecthood, and revisable ontology.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {researchBooks.map((book) => (
          <button
            key={book.title}
            onClick={() => onNavigate(book.path)}
            className="rounded-xl border border-white/5 bg-black/10 p-4 hover:border-amber-500/40 transition-colors text-left"
          >
            <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">{book.role}</span>
            <span className="block text-white text-sm font-medium leading-snug mb-2">{book.title}</span>
            <span className="block text-stone-400 text-xs leading-relaxed">{book.relevance}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ResearchPapersPanel({ page, onNavigate }: { page: ContentPage; onNavigate: (path: string) => void }) {
  const showPanel = [
    pagePath('/about', 'Author'),
    pagePath('/library', 'Papers'),
    pagePath('/library', 'A Formal Framework for Core and Deep Rationality'),
  ].includes(page.path);

  if (!showPanel) return null;

  return (
    <section className="glass-panel p-6 md:p-8 bg-white/[0.02] border-amber-500/20 space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Related Research Papers</p>
        <h3 className="text-2xl md:text-3xl font-light text-white">The paper cluster behind Credencing</h3>
        <p className="text-stone-300 text-sm md:text-base leading-relaxed">
          These Academia.edu papers support the public site as a connected research program: formal modeling, two-gap diagnosis, warranted uncertainty, institutional credencing, AI-mediated inquiry, scalar language, Bayesian audit methods, and motivated-cognition diagnosis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {researchPapers.map((paper) => (
          <button
            key={paper.title}
            onClick={() => onNavigate(paper.path)}
            className="rounded-xl border border-white/5 bg-black/10 p-4 hover:border-amber-500/40 transition-colors text-left"
          >
            <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">{paper.role}</span>
            <span className="block text-white text-sm font-medium leading-snug mb-2">{paper.title}</span>
            <span className="block text-stone-400 text-xs leading-relaxed">{paper.relevance}</span>
          </button>
        ))}
      </div>
      <a href="https://suj.academia.edu/PhilStilwell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] text-amber-300 font-bold uppercase tracking-[0.2em]">
        View full Academia.edu profile <ArrowRight size={12} />
      </a>
    </section>
  );
}

function SourceWorkPanel({ page }: { page: ContentPage }) {
  const work = sourceWorks.find((item) => item.path === page.path);

  if (!work) return null;

  const isAcademiaLink = work.url.includes('academia.edu');
  const isBook = researchBooks.some((item) => item.path === page.path);

  return (
    <section className="glass-panel p-5 md:p-6 bg-amber-500/[0.035] border-amber-500/20 space-y-3">
      <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Source {isBook ? 'Book' : 'Paper'}</p>
      <p className="text-stone-300 text-sm leading-relaxed">
        This page is a simplified guide to the {isBook ? 'book' : 'paper'}. The source document is linked below; the guide here keeps the main idea accessible and tied back to the site’s model.
      </p>
      <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] text-amber-300 font-bold uppercase tracking-[0.2em]">
        {isAcademiaLink ? 'Open on Academia.edu' : 'Open PDF'} <ArrowRight size={12} />
      </a>
    </section>
  );
}

function BayesTheoremPanel({ page }: { page: ContentPage }) {
  if (page.groupPath !== '/bayes-theorem') return null;

  return (
    <section className="glass-panel p-5 md:p-6 bg-white/[0.02] border-amber-500/20 space-y-4">
      <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-black/20">
        <img
          src={`${basePath}images/bayes-theorem-formula.svg`}
          alt="Bayes theorem: P(H given E) equals P(E given H) times P(H), divided by P(E)."
          className="w-full h-auto"
        />
      </div>
      <p className="text-stone-400 text-xs leading-relaxed">
        H is the hypothesis: the possible explanation you are checking. E is the evidence: the clue or observation you just noticed. Read the formula as: updated confidence in H after seeing E equals how well E fits H, times your starting confidence in H, adjusted by how common E is overall.
      </p>
    </section>
  );
}

function ScenarioComparisonPanel({ page }: { page: ContentPage }) {
  const [activePair, setActivePair] = useState(0);
  const [scenarioA, setScenarioA] = useState<ScenarioState>(scenarioPairs[0].a);
  const [scenarioB, setScenarioB] = useState<ScenarioState>(scenarioPairs[0].b);

  if (page.path !== pagePath('/interactive-lab', 'Compare Two Scenarios')) return null;

  const metricsA = getScenarioMetrics(scenarioA);
  const metricsB = getScenarioMetrics(scenarioB);

  const loadPair = (index: number) => {
    setActivePair(index);
    setScenarioA(scenarioPairs[index].a);
    setScenarioB(scenarioPairs[index].b);
  };

  return (
    <section className="glass-panel p-6 md:p-8 bg-amber-500/[0.035] border-amber-500/20 space-y-8">
      <div className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Comparison Lab</p>
        <h3 className="text-2xl md:text-3xl font-light text-white">Juxtapose two epistemic structures</h3>
        <p className="text-stone-300 text-sm md:text-base leading-relaxed">
          Use the presets or adjust the sliders to compare two agents side by side. The point is not just who is right, but where each agent's belief state is breaking: evidence perception, credence assignment, or both.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Preset Pairings</h4>
        <div className="flex flex-wrap gap-2">
          {scenarioPairs.map((pair, index) => (
            <button
              key={pair.label}
              onClick={() => loadPair(index)}
              className={`px-3 py-2 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-colors ${
                activePair === index
                  ? 'bg-amber-600/20 text-amber-200 border-amber-500/50'
                  : 'bg-white/[0.02] text-stone-400 border-white/10 hover:border-amber-500/30 hover:text-amber-200'
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>
        <p className="text-stone-400 text-xs leading-relaxed">{scenarioPairs[activePair].lesson}</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <ScenarioWorkbench label="Scenario A" scenario={scenarioA} metrics={metricsA} onChange={setScenarioA} />
        <ScenarioWorkbench label="Scenario B" scenario={scenarioB} metrics={metricsB} onChange={setScenarioB} />
      </div>

      <ScenarioComparisonTable scenarioA={scenarioA} scenarioB={scenarioB} metricsA={metricsA} metricsB={metricsB} />
      <ScenarioInterpretationPrompts metricsA={metricsA} metricsB={metricsB} />
    </section>
  );
}

function ScenarioWorkbench({
  label,
  scenario,
  metrics,
  onChange,
}: {
  label: string;
  scenario: ScenarioState;
  metrics: ScenarioMetrics;
  onChange: (scenario: ScenarioState) => void;
}) {
  const updateNumber = (key: keyof EpistemicData, value: number) => {
    onChange({ ...scenario, [key]: value });
  };

  const updateText = (key: 'name' | 'claim', value: string) => {
    onChange({ ...scenario, [key]: value });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-4 md:p-5 space-y-5">
      <div className="space-y-3">
        <p className="text-[9px] uppercase tracking-[0.25em] text-amber-400 font-bold">{label}</p>
        <input
          value={scenario.name}
          onChange={(event) => updateText('name', event.target.value)}
          aria-label={`${label} name`}
          className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white text-sm outline-none focus:border-amber-500/50"
        />
        <textarea
          value={scenario.claim}
          onChange={(event) => updateText('claim', event.target.value)}
          aria-label={`${label} claim`}
          rows={2}
          className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-stone-300 text-xs leading-relaxed outline-none focus:border-amber-500/50"
        />
      </div>

      <EpistemicChart data={scenario} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <CompactScenarioSlider label="Objective Evidence (E0)" value={scenario.objectiveEvidence} onChange={(value) => updateNumber('objectiveEvidence', value)} />
        <CompactScenarioSlider label="Perceived Evidence (EP)" value={scenario.perceivedEvidence} onChange={(value) => updateNumber('perceivedEvidence', value)} />
        <CompactScenarioSlider label="Assigned Credence (CA)" value={scenario.assignedCredence} onChange={(value) => updateNumber('assignedCredence', value)} />
        <CompactScenarioSlider label="Deep Rationality (SD)" value={scenario.deepRationality} onChange={(value) => updateNumber('deepRationality', value)} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <ComparisonMetric label="E0-EP" value={metrics.calcError} tone={metrics.calcError > 0.12 ? 'warn' : 'calm'} />
        <ComparisonMetric label="EP-CA" value={metrics.coreGap} tone={metrics.coreGap > 0.12 ? 'danger' : 'calm'} />
        <ComparisonMetric label="Slack" value={metrics.warrantedSlack} tone="muted" />
        <ComparisonMetric label="Excess IC" value={metrics.excessCore} tone={metrics.excessCore > 0.08 ? 'danger' : 'calm'} />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
        <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-bold">Diagnosis</p>
        <p className="text-white text-sm">{metrics.diagnosis}</p>
        <p className="text-stone-400 text-xs leading-relaxed">{metrics.repair}</p>
      </div>
    </div>
  );
}

function CompactScenarioSlider({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="space-y-2 block">
      <span className="flex items-center justify-between gap-3 text-[9px] uppercase tracking-widest text-stone-500 font-bold">
        <span>{label}</span>
        <span className="text-amber-200 font-mono">{Math.round(value * 100)}%</span>
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-amber-500"
      />
    </label>
  );
}

function ComparisonMetric({ label, value, tone }: { label: string; value: number; tone: 'calm' | 'warn' | 'danger' | 'muted' }) {
  const color = tone === 'danger' ? 'text-red-300' : tone === 'warn' ? 'text-orange-300' : tone === 'calm' ? 'text-green-300' : 'text-stone-300';
  return (
    <div className="rounded-lg border border-white/10 bg-black/10 p-3">
      <span className="block text-[8px] uppercase tracking-widest text-stone-500 mb-1">{label}</span>
      <span className={`text-sm font-mono ${color}`}>{Math.round(value * 100)}%</span>
    </div>
  );
}

function ScenarioComparisonTable({
  scenarioA,
  scenarioB,
  metricsA,
  metricsB,
}: {
  scenarioA: ScenarioState;
  scenarioB: ScenarioState;
  metricsA: ScenarioMetrics;
  metricsB: ScenarioMetrics;
}) {
  const rows = [
    ['Evidence-reading gap', 'E0-EP', metricsA.calcError, metricsB.calcError, largerGapLabel(metricsA.calcError, metricsB.calcError, 'A misreads evidence more', 'B misreads evidence more')],
    ['Belief-integrity gap', 'EP-CA', metricsA.coreGap, metricsB.coreGap, largerGapLabel(metricsA.coreGap, metricsB.coreGap, 'A overrides perception more', 'B overrides perception more')],
    ['Deep Rationality', 'SD', scenarioA.deepRationality, scenarioB.deepRationality, largerGapLabel(scenarioA.deepRationality, scenarioB.deepRationality, 'A has stronger tools', 'B has stronger tools')],
    ['Excess Core Irrationality', 'Excess IC', metricsA.excessCore, metricsB.excessCore, largerGapLabel(metricsA.excessCore, metricsB.excessCore, 'A has more unwarranted misalignment', 'B has more unwarranted misalignment')],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 overflow-x-auto">
      <div className="min-w-[680px]">
        <div className="grid grid-cols-[1.2fr_0.7fr_0.7fr_1.2fr] gap-3 px-4 py-3 bg-white/[0.03] text-[9px] uppercase tracking-widest text-stone-500 font-bold">
          <span>Diagnostic Question</span>
          <span>{scenarioA.name || 'Scenario A'}</span>
          <span>{scenarioB.name || 'Scenario B'}</span>
          <span>Readout</span>
        </div>
        {rows.map(([question, code, aValue, bValue, readout]) => (
          <div key={String(question)} className="grid grid-cols-[1.2fr_0.7fr_0.7fr_1.2fr] gap-3 px-4 py-3 border-t border-white/5 text-xs text-stone-300">
            <span>
              <span className="block text-white">{question}</span>
              <span className="text-[9px] uppercase tracking-widest text-stone-600">{code}</span>
            </span>
            <span className="font-mono text-amber-100">{Math.round(Number(aValue) * 100)}%</span>
            <span className="font-mono text-amber-100">{Math.round(Number(bValue) * 100)}%</span>
            <span>{readout}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScenarioInterpretationPrompts({ metricsA, metricsB }: { metricsA: ScenarioMetrics; metricsB: ScenarioMetrics }) {
  const aSkillIssue = metricsA.calcError > metricsA.coreGap;
  const bSkillIssue = metricsB.calcError > metricsB.coreGap;
  const prompts = [
    `Which agent needs better evidence or better tools? ${aSkillIssue && !bSkillIssue ? 'Scenario A looks more like a skill-side problem.' : bSkillIssue && !aSkillIssue ? 'Scenario B looks more like a skill-side problem.' : 'Both deserve a skill-side check.'}`,
    `Which agent needs motivational repair? ${metricsA.excessCore > metricsB.excessCore ? 'Scenario A has the larger excess Core Irrationality (IC).' : metricsB.excessCore > metricsA.excessCore ? 'Scenario B has the larger excess Core Irrationality (IC).' : 'Their excess Core Irrationality (IC) is roughly matched.'}`,
    'Could both agents reach the same conclusion while only one is well aligned?',
    'What new evidence, reflection, or social condition would move each agent responsibly?',
  ];

  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-5 space-y-4">
      <h4 className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold">Interpretation Prompts</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {prompts.map((prompt) => (
          <p key={prompt} className="rounded-xl border border-white/10 bg-black/10 p-4 text-stone-300 text-xs leading-relaxed">
            {prompt}
          </p>
        ))}
      </div>
    </div>
  );
}

function getScenarioMetrics(data: EpistemicData): ScenarioMetrics {
  const calcError = Math.abs(data.perceivedEvidence - data.objectiveEvidence);
  const coreGap = Math.abs(data.assignedCredence - data.perceivedEvidence);
  const warrantedSlack = (1 - data.deepRationality) * 0.25;
  const excessCore = Math.max(0, coreGap - warrantedSlack);

  if (calcError < 0.06 && coreGap < 0.06) {
    return {
      calcError,
      coreGap,
      warrantedSlack,
      excessCore,
      diagnosis: 'Aligned or near-aligned',
      repair: 'The agent is broadly tracking both evidence and perceived evidence. The best repair is ordinary calibration and continued openness.',
    };
  }

  if (calcError >= 0.12 && excessCore < 0.04) {
    return {
      calcError,
      coreGap,
      warrantedSlack,
      excessCore,
      diagnosis: 'Mainly a Deep Rationality problem',
      repair: 'Focus on evidence access, base rates, measurement quality, statistical tools, and better comparison classes.',
    };
  }

  if (excessCore >= 0.08 && calcError < 0.12) {
    return {
      calcError,
      coreGap,
      warrantedSlack,
      excessCore,
      diagnosis: 'Mainly a Core Rationality problem',
      repair: 'Focus on fear, identity, incentives, public commitment, and the conditions under which the agent could honestly update.',
    };
  }

  if (calcError >= 0.12 && excessCore >= 0.08) {
    return {
      calcError,
      coreGap,
      warrantedSlack,
      excessCore,
      diagnosis: 'Mixed skill and integrity problem',
      repair: 'Repair requires both better evidence-processing tools and a less defensive relationship to the perceived result.',
    };
  }

  return {
    calcError,
    coreGap,
    warrantedSlack,
    excessCore,
    diagnosis: 'Mild or ambiguous misalignment',
    repair: 'Treat the gaps as questions rather than accusations. Ask whether noise, stakes, emotional pressure, or limited tools explain the pattern.',
  };
}

function largerGapLabel(a: number, b: number, aLabel: string, bLabel: string) {
  if (Math.abs(a - b) < 0.03) return 'Roughly similar';
  return a > b ? aLabel : bLabel;
}

function Breadcrumbs({ page, onNavigate }: { page: ContentPage; onNavigate: (path: string) => void }) {
  const parentCollection = getParentCollection(page);

  return (
    <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.24em] font-bold">
      <button onClick={() => onNavigate('/')} className="text-stone-500 hover:text-amber-300">Home</button>
      <span className="text-stone-700">/</span>
      <button onClick={() => onNavigate(page.groupPath)} className="text-amber-400 hover:text-amber-300">{page.groupTitle}</button>
      <span className="text-stone-700">/</span>
      {parentCollection && (
        <>
          <button onClick={() => onNavigate(parentCollection.path)} className="text-amber-300 hover:text-amber-200">{parentCollection.title}</button>
          <span className="text-stone-700">/</span>
        </>
      )}
      <span className="text-stone-500">{page.title}</span>
    </div>
  );
}

function GlossaryChips({ page, onNavigate }: { page: ContentPage; onNavigate: (path: string) => void }) {
  const text = `${page.title} ${page.summary} ${page.sections.flatMap((section) => [section.heading, ...section.body]).join(' ')}`;
  const matches = glossaryTerms.filter(([term]) => new RegExp(`\\b${term.replace(/[()]/g, '\\$&')}\\b`, 'i').test(text)).slice(0, 6);
  if (matches.length === 0) return null;

  return (
    <div className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-4">
      <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Glossary</h3>
      <div className="flex flex-wrap gap-2">
        {matches.map(([term, label, definition]) => (
          <button
            key={term}
            title={definition}
            onClick={() => onNavigate(pagePath('/library', 'Glossary'))}
            className="px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-200 text-[10px] font-mono hover:border-amber-400/50"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PriorityExpansion({ page }: { page: ContentPage }) {
  const expansions: Record<string, { heading: string; body: string[] }> = {
    [pagePath('/core-ideas', 'Calibration')]: {
      heading: 'Calibration in Practice',
      body: [
        'Calibration is easiest to understand through repeated predictions. If you mark ten claims as 80 percent likely, about eight should come true over time. The point is not that any single claim must be right; the point is that your confidence language should have a reliable track record.',
        'This matters because overconfidence and underconfidence both harm inquiry. Overconfidence turns weak evidence into premature closure. Underconfidence refuses to acknowledge strong support. Good calibration lets confidence become both courageous and corrigible.',
      ],
    },
    [pagePath('/core-ideas', 'Uncertainty')]: {
      heading: 'A Better Use of Uncertainty',
      body: [
        'Uncertainty should not be used as a vague cloud. A useful uncertainty claim names what is missing: better base rates, a larger sample, direct observation, independent replication, or a clearer comparison class. Once the missing piece is named, uncertainty becomes a research agenda rather than a retreat.',
        'The practical test is simple: would the same person preserve uncertainty if the evidence favored their preferred conclusion? If not, uncertainty may be functioning as a protective maneuver rather than an honest description of the evidential state.',
      ],
    },
    [pagePath('/core-ideas', 'Objective Evidence (E0)')]: {
      heading: 'Keeping the Target Humble',
      body: [
        'Objective Evidence (E0) does not mean that someone has perfect access to the facts. It means that the world constrains better and worse interpretations. A blood test, a timestamp, a replication record, a leaked document, or a base rate can all exist independently of whether a particular agent handles them well.',
        'The humility is important. E0 is often reconstructed through methods, institutions, and cross-checks. The model needs E0 as a target, but it also needs modesty about how partial any human access to that target may be.',
      ],
    },
    [pagePath('/core-ideas', 'Perceived Evidence (EP)')]: {
      heading: 'Why Perception Needs Its Own Category',
      body: [
        'Perceived Evidence (EP) deserves its own category because people do not respond directly to the full evidence field. They respond to what they notice, remember, trust, understand, and can emotionally tolerate noticing. That middle layer is where many real errors begin.',
        'This helps explain why simply adding facts does not always repair a belief. If the agent’s perception filters are shaped by fear, authority, fatigue, group loyalty, or statistical confusion, the facts may enter the environment without becoming usable evidence for the agent.',
      ],
    },
    [pagePath('/core-ideas', 'Assigned Credence (CA)')]: {
      heading: 'Where Belief Becomes Commitment',
      body: [
        'Assigned Credence (CA) is not merely a private feeling. It is the confidence a person reasons from, speaks from, votes from, teaches from, or acts from. Because it guides behavior, it carries a kind of epistemic responsibility.',
        'The key diagnostic question is whether CA is answerable to EP. If a person takes the evidence to support 0.55 but performs 0.95 in public, the problem is no longer just evidence interpretation. The confidence has become a commitment serving something beyond evidence.',
      ],
    },
    [pagePath('/core-ideas', 'Deep Rationality (SD)')]: {
      heading: 'Deep Rationality Is Not Intelligence Worship',
      body: [
        'Deep Rationality (SD) is not a flattering label for being clever. It refers to specific evidence-processing capacities: using base rates, comparing hypotheses, checking source reliability, noticing selection effects, and updating in proportion to diagnostic evidence.',
        'This matters because intelligence can make rationalization more sophisticated. A person with high verbal ability but poor calibration may produce impressive arguments that do not actually track the evidential field. SD should be judged by tracking quality, not by rhetorical shine.',
      ],
    },
    [pagePath('/core-ideas', 'Core Rationality')]: {
      heading: 'The Integrity Test',
      body: [
        'Core Rationality asks whether a person can let their own perceived evidence govern their confidence. The test is not whether the person is calm, articulate, educated, or socially admired. The test is whether belief remains tethered when the evidence becomes inconvenient.',
        'A useful self-check is: if this evidence supported the opposite conclusion, would I treat it as strongly? If the answer is no, the problem may lie not in evidence access but in the willingness to let evidence have symmetrical force.',
      ],
    },
    [pagePath('/core-ideas', 'Calculation Error (DE)')]: {
      heading: 'Reading Calculation Error Carefully',
      body: [
        'Calculation Error (DE) should not be heard as a sneer. It is a name for the distance between the evidence field and the agent’s interpretation of it. That distance may come from poor education, unavailable data, hostile information environments, or genuinely difficult evidence.',
        'The repair question is therefore practical: what would improve the agent’s perception? Better measurement, better statistical tools, more reliable testimony, a broader reference class, and slower inference can all reduce DE without accusatory drama.',
      ],
    },
    [pagePath('/core-ideas', 'Core Irrationality (IC)')]: {
      heading: 'Why Core Irrationality (IC) Is the Diagnostic Pressure Point',
      body: [
        'Core Irrationality (IC) becomes diagnostically important because it is the place where an agent stops following their own evidential lights. The issue is not whether they possess perfect evidence; it is whether they honor what they take themselves to have seen.',
        'That is why Core Irrationality (IC) should be handled carefully. It is not a quick insult. It is a serious diagnosis of doxastic misalignment.',
      ],
    },
    [pagePath('/core-ideas', 'Epistemic Akrasia')]: {
      heading: 'What Akrasia Feels Like From the Inside',
      body: [
        'Epistemic akrasia often feels like a split: one part of the mind sees the evidence, while another part refuses the cost of accepting it. The person may say the right caveats in private and still defend the inflated claim in public.',
        'This is why the model treats akrasia as a repair problem, not merely a label. The agent may need to lower identity threat, make revision socially survivable, or practice saying, "My confidence should be lower than I want it to be."',
      ],
    },
    [pagePath('/core-ideas', 'Core vs Deep Rationality')]: {
      heading: 'Concrete Example',
      body: [
        'Imagine two people evaluating a medical screening result. One does not understand false positives and therefore overreads the test. That is mainly a Deep Rationality failure. Another understands the statistics but treats the result as certain because fear has taken over. That is mainly a Core Rationality failure.',
        'The same outward confidence can therefore come from different structures. The model earns its keep when it prevents the wrong repair: statistics for a fear problem, or courage-talk for a math problem.',
      ],
    },
    [pagePath('/core-ideas', 'Epistemic Archetypes')]: {
      heading: 'Use Archetypes as Snapshots',
      body: [
        'The archetypes are best read as snapshots of a particular belief state. Someone may reason like an ideal agent about their craft, like an honest novice about medical statistics, and like a biased expert about a cherished political identity.',
        'This prevents the archetypes from becoming insults. The question is not "What kind of person are you?" but "What is the structure of this confidence, in this domain, under these pressures?"',
      ],
    },
    [pagePath('/interactive-lab', 'Biased Expert')]: {
      heading: 'The Dangerous Competence Problem',
      body: [
        'The biased expert is dangerous because their arguments may be genuinely impressive. The problem is not low intelligence; it is directional intelligence. Attention, skepticism, and creativity are aimed asymmetrically.',
        'A useful test is whether the expert can state update conditions that would move them against their current position. If not, expertise has become fortification.',
      ],
    },
    [pagePath('/case-studies', 'Motivated Reasoning')]: {
      heading: 'A Diagnostic Signature',
      body: [
        'Motivated reasoning often shows up as moving standards. The agent asks for rigorous proof from unwelcome claims and accepts loose association from welcome claims.',
        'The repair is not simply "try harder." It is to precommit to standards before knowing which side they will favor.',
      ],
    },
    [pagePath('/case-studies', 'Risk Inflation')]: {
      heading: 'Possibility Is Not Yet Probability',
      body: [
        'Risk inflation often begins with a true sentence: something bad could happen. The error comes when possibility is treated as high probability, and high probability is then treated as practical certainty. The emotional vividness of the outcome silently replaces the evidence.',
        'A better practice is to ask three questions separately: how bad would the outcome be, how likely is it, and what action threshold follows from the stakes? Keeping those questions separate prevents fear from doing probability work.',
      ],
    },
    [pagePath('/case-studies', 'Honest Novice Cases')]: {
      heading: 'Charity Without Romanticizing Ignorance',
      body: [
        'The honest novice deserves charity because the main problem is limited tools, not motivated override. But charity does not mean treating novice judgment as equally reliable. Good faith can coexist with serious error.',
        'The repair is mentorship, clearer explanations, natural frequencies, better feedback, and a social environment where admitting uncertainty is not humiliating. The novice becomes safer when uncertainty is protected rather than mocked.',
      ],
    },
    [pagePath('/case-studies', 'Biased Expert Cases')]: {
      heading: 'Why Expertise Can Harden Error',
      body: [
        'A biased expert may have enough skill to identify the weakness in an opposing argument but not enough integrity to apply the same scrutiny inward. The error is dangerous because it comes packaged with competence.',
        'The practical safeguard is symmetry. Ask the expert to state the strongest version of the rival view, identify evidence that would change their mind, and apply the same standard to friendly and unfriendly claims.',
      ],
    },
    [pagePath('/case-studies', 'Delusion Threshold Cases')]: {
      heading: 'Crossing the Threshold',
      body: [
        'The delusion threshold is not simply being wrong. It is a structural break in which assigned credence becomes so detached from perceived evidence that ordinary correction loses traction. The belief is no longer merely overconfident; it is insulated.',
        'Because the label is serious, it should be used with restraint. The best evidence is not just an extreme belief, but a pattern of protected confidence: unfalsifiability, hostile reinterpretation, social isolation, and refusal of update conditions.',
      ],
    },
    [pagePath('/skills', 'How to Update with New Evidence')]: {
      heading: 'The Size of the Update Matters',
      body: [
        'A common mistake is to treat updating as a dramatic conversion. Most evidence should move confidence modestly. A single anecdote, one expert quote, or one surprising event rarely deserves to overwrite a well-grounded prior by itself.',
        'Good updating asks for proportional motion. If the evidence is weak but real, move a little. If it sharply discriminates among hypotheses, move more. If it is expected under several explanations, slow down.',
      ],
    },
    [pagePath('/skills', 'How to Read Likelihoods')]: {
      heading: 'The Rival-Explanation Habit',
      body: [
        'Likelihood reasoning becomes powerful only when rival explanations are actually allowed into the room. A claim can fit your theory and still fail to support it if the same evidence fits ordinary alternatives just as well.',
        'Practice with simple cases: a friend is late, a study reports an effect, a political opponent behaves badly. Ask not only whether the evidence fits your favored explanation, but whether it fits human error, incentives, coincidence, selection, or measurement noise.',
      ],
    },
    [pagePath('/skills', 'How to Avoid Base-Rate Neglect')]: {
      heading: 'Start Wide, Then Narrow',
      body: [
        'The safest order is wide first, narrow second. Begin with the broad frequency of the event, then ask whether the particular details truly move the case away from that background. Vivid details should modify the base rate, not erase it.',
        'This habit is especially important in medicine, crime, finance, and public risk. In those domains, rare events can feel common when they are frightening, memorable, or constantly repeated.',
      ],
    },
    [pagePath('/skills', 'How to Detect Overconfidence')]: {
      heading: 'Look for Missing Error Bars',
      body: [
        'Overconfidence often shows up as a claim with no error bars. The speaker reports a conclusion but not the uncertainty, alternatives, source limits, or conditions under which the conclusion would weaken.',
        'When you notice that pattern in yourself, add the missing structure: "I am confident because..., my main uncertainty is..., and the evidence that would lower my confidence is..." This turns confidence back into something inspectable.',
      ],
    },
    [pagePath('/skills', 'How to Detect Motivated Override')]: {
      heading: 'The Cost-of-Admission Test',
      body: [
        'Ask what it would cost to lower your confidence. Would it threaten a group identity, a public commitment, a relationship, a career choice, or a cherished self-description? The higher the cost, the more likely Core Rationality is under pressure.',
        'This does not prove the belief is false. It only flags a diagnostic risk: the assigned credence may be carrying emotional or social weight that evidence alone cannot explain.',
      ],
    },
    [pagePath('/skills', 'How to Express Uncertainty Honestly')]: {
      heading: 'Make Uncertainty Operational',
      body: [
        'Honest uncertainty should help the next step. Instead of saying only "I am not sure," say what would reduce the uncertainty: a larger sample, a direct source, a base rate, a second expert, a replication, or a clearer definition.',
        'This keeps uncertainty from sounding like fog. It becomes a map of what the inquiry still needs.',
      ],
    },
    [pagePath('/skills', 'Practice Exercises')]: {
      heading: 'Turn Exercises Into Records',
      body: [
        'Practice becomes more useful when it leaves a record. A notebook of predictions, confidence estimates, updates, and postmortems lets a person see whether they are chronically overconfident, underconfident, volatile, or slow to update.',
        'The goal is calibration feedback. Without records, the mind often remembers its hits, edits its misses, and mistakes fluency for improvement.',
      ],
    },
    [pagePath('/applications', 'Education')]: {
      heading: 'What This Looks Like in a Classroom',
      body: [
        'A credencing-aware classroom asks students not only for answers but for confidence levels and reasons. A student might say, "I am 70 percent confident because of this source, but I would lower that if the sample was biased." That answer is more intellectually mature than a brittle performance of certainty.',
        'Teachers can normalize revision by grading the quality of updates. When students see changing one’s mind as a mark of competence, uncertainty becomes a tool rather than a social risk.',
      ],
    },
    [pagePath('/applications', 'Law')]: {
      heading: 'Evidence, Threshold, and Harm',
      body: [
        'Law is a natural domain for Credencing because it already separates levels of confidence. The same evidence may justify investigation, fail to justify conviction, and still matter in civil liability. The threshold changes because the possible harms change.',
        'A clearer legal culture would keep forensic error rates, eyewitness limits, plea incentives, and institutional pressures visible. Confidence in legal judgment should be earned, not performed.',
      ],
    },
    [pagePath('/applications', 'Public Debate')]: {
      heading: 'Better Debate Norms',
      body: [
        'A healthier debate asks speakers to state their confidence, strongest evidence, best rival explanation, and update condition. This does not make debate bloodless. It makes disagreement more accountable.',
        'The public payoff is large: audiences learn to distinguish forceful presentation from evidential strength. A calm 65 percent claim may be more honest than a theatrical 99 percent claim.',
      ],
    },
    [pagePath('/applications', 'Policy')]: {
      heading: 'Policy as a Learning System',
      body: [
        'Policy should be designed so that wrongness is discoverable. Pilot programs, sunset clauses, outcome dashboards, and independent audits all make it easier to notice when a policy’s assumed credence was too high.',
        'This changes the posture of governance. Instead of treating revision as embarrassment, a credencing-friendly institution treats revision as evidence contact.',
      ],
    },
    [pagePath('/applications', 'AI Alignment')]: {
      heading: 'Separate Capability Confidence From Safety Confidence',
      body: [
        'A system can be impressive without being safe, and useful without being well understood. AI alignment discussions become confused when capability confidence, market confidence, interpretability confidence, and deployment confidence are treated as one emotional attitude toward AI.',
        'Credencing asks each confidence to be named separately. What do we know about performance? What do we know about failure modes? What evidence would delay deployment? What would count as enough safety evidence under the stakes?',
      ],
    },
    [pagePath('/applications', 'Institutional Diagnostics')]: {
      heading: 'From Individual Bias to Organizational Structure',
      body: [
        'Institutions can have something like motivated reasoning even when no single person is consciously dishonest. Bad news may be filtered upward, incentives may punish candor, or public commitments may make revision expensive.',
        'The practical question is structural: what would let the institution notice reality sooner and admit it faster?',
      ],
    },
  };
  const expansion = expansions[page.path] ?? expansions[page.title];
  if (!expansion) return null;

  return (
    <section className="glass-panel p-6 md:p-8 bg-amber-500/[0.035] border-amber-500/20 space-y-4">
      <h3 className="text-2xl font-light text-white">{expansion.heading}</h3>
      {expansion.body.map((paragraph) => (
        <p key={paragraph} className="text-stone-300 text-sm md:text-base leading-relaxed">{paragraph}</p>
      ))}
    </section>
  );
}

function DownloadPanel({ page }: { page: ContentPage }) {
  if (page.path !== pagePath('/library', 'Downloads') && page.path !== pagePath('/library', 'Teaching Materials')) return null;
  const downloads = [
    ['One-Page Model Guide', `${basePath}downloads/credencing-one-page-guide.pdf`, 'PDF'],
    ['Scenario Worksheet', `${basePath}downloads/credencing-scenario-worksheet.pdf`, 'PDF'],
    ['Classroom Exercise Packet', `${basePath}downloads/credencing-classroom-exercises.pdf`, 'PDF'],
    ['Markdown Guide', `${basePath}downloads/credencing-one-page-guide.md`, 'MD'],
    ['Markdown Worksheet', `${basePath}downloads/credencing-scenario-worksheet.md`, 'MD'],
    ['Markdown Exercises', `${basePath}downloads/credencing-classroom-exercises.md`, 'MD'],
  ];

  return (
    <section className="glass-panel p-6 md:p-8 bg-white/[0.015] border-white/5 space-y-4">
      <h3 className="text-2xl font-light text-white">Starter Downloads</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {downloads.map(([label, href, type]) => (
          <a key={href} href={href} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-amber-500/30 text-sm text-amber-200">
            <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-2">{type}</span>
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

function CitationPanel({ page }: { page: ContentPage }) {
  const key = `${page.groupTitle} ${page.title}`.toLowerCase();
  const citations: string[] = [];

  if (/(bayesian|prior|likelihood|posterior|evidence)/.test(key)) {
    citations.push('Thomas Bayes, "An Essay towards solving a Problem in the Doctrine of Chances" (1763).');
    citations.push('E. T. Jaynes, Probability Theory: The Logic of Science (2003).');
  }
  if (/(base-rate|medical testing|calibration|confidence|overconfidence)/.test(key)) {
    citations.push('Daniel Kahneman and Amos Tversky, "Judgment under Uncertainty: Heuristics and Biases" (1974).');
    citations.push('Sarah Lichtenstein, Baruch Fischhoff, and Lawrence D. Phillips, "Calibration of Probabilities" (1982).');
  }
  if (/(motivated|political|conspiracy|tribalism|biased expert|public debate)/.test(key)) {
    citations.push('Ziva Kunda, "The Case for Motivated Reasoning" (1990).');
    citations.push('Charles S. Taber and Milton Lodge, "Motivated Skepticism in the Evaluation of Political Beliefs" (2006).');
  }
  if (/(institutional|journalism|law|policy|science|ai alignment)/.test(key)) {
    citations.push('Philip E. Tetlock, Expert Political Judgment (2005).');
    citations.push('Helen Longino, Science as Social Knowledge (1990).');
  }

  if (citations.length === 0) return null;

  return (
    <section className="glass-panel p-6 md:p-8 bg-white/[0.015] border-white/5 space-y-4">
      <h3 className="text-2xl font-light text-white">Adjacent References</h3>
      <p className="text-stone-400 text-sm leading-relaxed">
        These are starting points rather than exhaustive citations. They connect this page to nearby work in probability, calibration, cognitive bias, and social epistemology.
      </p>
      <ul className="grid gap-2">
        {[...new Set(citations)].map((citation) => (
          <li key={citation} className="text-stone-300 text-sm leading-relaxed flex gap-3">
            <span className="text-amber-400">|</span>
            <span>{citation}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ReadingPaths({ onNavigate }: { onNavigate: (path: string) => void }) {
  const paths = [
    {
      label: '20-Minute Path',
      summary: 'A quick orientation for first-time visitors.',
      steps: [
        pagePath('/start-here', 'What Is Credencing?'),
        pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
        pagePath('/interactive-lab', 'Interactive Model'),
      ],
    },
    {
      label: 'One-Hour Path',
      summary: 'A fuller path through vocabulary, diagnosis, and repair.',
      steps: [
        pagePath('/core-ideas', 'Credences'),
        pagePath('/core-ideas', 'Core vs Deep Rationality'),
        pagePath('/case-studies', 'Motivated Reasoning'),
        pagePath('/skills', 'How to Separate Core from Deep Failure'),
      ],
    },
    {
      label: 'Teacher Path',
      summary: 'Materials and pages for classroom or workshop use.',
      steps: [
        pagePath('/library', 'Teaching Materials'),
        pagePath('/skills', 'Practice Exercises'),
        pagePath('/applications', 'Education'),
        pagePath('/library', 'Downloads'),
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-3">Suggested Reading Paths</p>
        <h2 className="text-3xl font-light text-white">Three ways into the site</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {paths.map((path) => (
          <div key={path.label} className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-4">
            <h3 className="text-white font-light text-lg">{path.label}</h3>
            <p className="text-stone-400 text-xs leading-relaxed">{path.summary}</p>
            <div className="space-y-2">
              {path.steps.map((step, index) => {
                const page = contentPages.find((item) => item.path === step);
                return (
                  <button key={step} onClick={() => onNavigate(step)} className="w-full text-left p-3 rounded-lg border border-white/5 hover:border-amber-500/30 bg-white/[0.02] transition-colors">
                    <span className="text-[9px] uppercase tracking-widest text-stone-600">Step {index + 1}</span>
                    <span className="block text-xs text-white mt-1">{page?.title ?? step}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPanel({ page }: { page: ContentPage }) {
  if (page.path !== pagePath('/about', 'Contact') && page.path !== pagePath('/about', 'Author')) return null;
  if (page.path === pagePath('/about', 'Contact')) return <ContactForm />;

  return (
    <section className="glass-panel p-6 md:p-8 bg-amber-500/[0.035] border-amber-500/20 space-y-4">
      <h3 className="text-2xl font-light text-white">Project Contact</h3>
      <p className="text-stone-300 text-sm md:text-base leading-relaxed">
        The most durable public feedback path for this GitHub Pages version is the GitHub repository. Use it for corrections, broken-link reports, suggested examples, and issue-specific discussion.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="https://github.com/philstilwell/Credencing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-amber-200 text-xs font-bold uppercase tracking-wider hover:border-amber-500/40">
          Repository
        </a>
        <a href="https://github.com/philstilwell/Credencing/issues" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-amber-200 text-xs font-bold uppercase tracking-wider hover:border-amber-500/40">
          Issues
        </a>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    replyTo: '',
    subject: '',
    message: '',
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recipient = [112, 104, 105, 108, 115, 116, 105, 108, 119, 101, 108, 108, 64, 121, 97, 104, 111, 111, 46, 99, 111, 109]
      .map((code) => String.fromCharCode(code))
      .join('');
    const subject = form.subject.trim() || 'Credencing contact';
    const body = [
      `Name: ${form.name.trim() || 'Not provided'}`,
      `Reply-to: ${form.replyTo.trim() || 'Not provided'}`,
      '',
      form.message.trim(),
    ].join('\n');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="glass-panel p-6 md:p-8 bg-amber-500/[0.035] border-amber-500/20 space-y-5">
      <div className="space-y-3">
        <h3 className="text-2xl font-light text-white">Contact Phil</h3>
        <p className="text-stone-300 text-sm md:text-base leading-relaxed">
          Use this form for corrections, collaboration, teaching use, suggested references, or examples that test the Credencing framework. Submitting opens your email client with the message prefilled.
        </p>
        <p className="text-stone-500 text-xs leading-relaxed">
          The recipient address is not printed on the page; it is assembled only when the form is submitted.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="grid gap-2 text-xs text-stone-300">
            <span className="uppercase tracking-widest text-stone-500 font-bold">Name</span>
            <input
              value={form.name}
              onChange={(event) => update('name', event.target.value)}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-stone-100 outline-none focus:border-amber-500/50"
              autoComplete="name"
            />
          </label>
          <label className="grid gap-2 text-xs text-stone-300">
            <span className="uppercase tracking-widest text-stone-500 font-bold">Reply Email</span>
            <input
              type="email"
              value={form.replyTo}
              onChange={(event) => update('replyTo', event.target.value)}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-stone-100 outline-none focus:border-amber-500/50"
              autoComplete="email"
            />
          </label>
        </div>
        <label className="grid gap-2 text-xs text-stone-300">
          <span className="uppercase tracking-widest text-stone-500 font-bold">Subject</span>
          <input
            value={form.subject}
            onChange={(event) => update('subject', event.target.value)}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-stone-100 outline-none focus:border-amber-500/50"
          />
        </label>
        <label className="grid gap-2 text-xs text-stone-300">
          <span className="uppercase tracking-widest text-stone-500 font-bold">Message</span>
          <textarea
            required
            value={form.message}
            onChange={(event) => update('message', event.target.value)}
            className="min-h-40 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-stone-100 outline-none focus:border-amber-500/50"
          />
        </label>
        <button type="submit" className="w-fit px-5 py-3 rounded-xl border border-amber-500/40 bg-amber-600/20 text-amber-100 text-xs font-bold uppercase tracking-wider hover:bg-amber-600/30">
          Prepare Email
        </button>
      </form>
    </section>
  );
}

type DiscussionPrompt = {
  question: string;
  guidance: string;
  historical?: string;
  scenario?: string;
  contemporary?: string;
  feedback: string;
};

const discussionPrompts: Record<string, DiscussionPrompt[]> = {
  'Group Discussion Guide': [
    {
      question: 'What would make this group a place where people can honestly lower or raise confidence?',
      guidance: 'Look for norms that reward careful updates instead of quick victories. Good answers should mention charity, evidence, confidence levels, and permission to say “I do not know yet.”',
      scenario: 'A participant says, “Only an idiot would believe that.” How should the group redirect the comment without pretending all views are equally supported?',
      feedback: 'Strong groups correct contempt quickly while still allowing criticism of bad reasoning. The target is the belief state, not the person’s worth.',
    },
    {
      question: 'How should the group handle a claim that is emotionally important to one member?',
      guidance: 'Distinguish personal respect from evidential agreement. The group can slow down, ask permission before pressing, and use public or hypothetical examples first.',
      contemporary: 'Many discussions about religion, politics, identity, or health decisions are not just about facts. They involve belonging, fear, loyalty, and memory.',
      feedback: 'A good answer protects dignity without making the claim immune to evidence.',
    },
    {
      question: 'What is the difference between a debate club and a credencing group?',
      guidance: 'A debate club often rewards persuasion. A credencing group rewards calibrated confidence, clear update conditions, and careful repair.',
      historical: 'Socratic dialogues often worked by exposing confusion rather than scoring points. The best moments were not victories but clearer questions.',
      feedback: 'The clearest answer: debate asks “Who won?” Credencing asks “What confidence is warranted, and what would move it?”',
    },
  ],
  'Session 1: Credences and Confidence': [
    {
      question: 'Choose a common claim and assign it a confidence level. What makes that number too high, too low, or reasonable?',
      guidance: 'Encourage ranges: 40-60 percent is often more honest than 52 percent. Ask what evidence would move the number by at least 10 points.',
      scenario: 'A friend says, “I am sure this new study proves coffee is bad for everyone.” What confidence would you assign before reading the study?',
      contemporary: 'Health headlines, sports predictions, college admissions guesses, and economic forecasts all invite confidence levels rather than simple belief.',
      feedback: 'Good responses explain the number. Weak responses give a number with no evidence or update condition.',
    },
    {
      question: 'When does saying “I believe it” hide too much information?',
      guidance: 'Have participants compare “I believe it at 51 percent” with “I believe it at 95 percent.” Both may count as belief, but they should not guide action in the same way.',
      historical: 'Weather forecasting became more useful when it moved from yes/no predictions to probabilities such as a 30 percent chance of rain.',
      feedback: 'The key insight is that belief has strength. Two people may both “believe” something while holding very different levels of confidence.',
    },
    {
      question: 'Why do people often prefer certainty language even when they are uncertain?',
      guidance: 'Look for social rewards: confidence can sound smart, loyal, brave, or decisive. Uncertainty can be mistaken for weakness.',
      scenario: 'In a group project, one student is 60 percent confident the plan will work. Another says, “It will definitely work.” Who sounds stronger, and who may be reasoning better?',
      feedback: 'Good answers separate emotional comfort from epistemic accuracy.',
    },
  ],
  'Session 2: Evidence and Perception': [
    {
      question: 'How can two honest people look at the same event and perceive different evidence?',
      guidance: 'Ask about attention, background knowledge, memory, trust, framing, and missing context. The point is to explain divergence before accusing anyone.',
      historical: 'Eyewitness testimony has often been treated as strong evidence, but later DNA exonerations showed that sincere perception can be mistaken.',
      feedback: 'A strong answer names mechanisms of error, not just “people are biased.”',
    },
    {
      question: 'What is an example of Objective Evidence (E0) being different from Perceived Evidence (EP)?',
      guidance: 'Use simple examples: a misleading graph, a viral video missing context, a medical symptom that feels serious but has a common harmless cause.',
      scenario: 'A short video shows a public figure saying something awful. Later, the full clip changes the meaning. What changed: E0, EP, or CA?',
      feedback: 'The best answer: the original evidence in the world may include the full context, but the viewer’s perceived evidence was narrowed by the clip.',
    },
    {
      question: 'When is poor perception avoidable, and when is it understandable?',
      guidance: 'Use the repair filter: access, skill, time, pressure, and willingness to correct the gap.',
      contemporary: 'Algorithmic feeds can repeatedly show one kind of story until it feels typical. The viewer may be misled, but the platform also shaped the evidence environment.',
      feedback: 'Good answers avoid both extremes: “no one is responsible” and “every mistake is bad faith.”',
    },
  ],
  'Session 3: Priors, Base Rates, and Likelihoods': [
    {
      question: 'Why should background rates matter even when a case feels vivid?',
      guidance: 'Ask participants to compare one memorable example with the larger pattern. A vivid story can be real and still not representative.',
      historical: 'Insurance, public health, and safety engineering all depend on base rates. They ask how often events happen, not only how dramatic one event feels.',
      feedback: 'A strong answer says base rates do not erase details; they anchor details.',
    },
    {
      question: 'How can a medical test be positive while the condition is still not certain?',
      guidance: 'Introduce false positives, false negatives, and base rates. Keep the math simple: if a condition is rare, even a good test can produce some false alarms.',
      scenario: 'A disease affects 1 in 1,000 people. A test is very good but not perfect. What else do you need to know before assigning confidence after a positive result?',
      feedback: 'Good answers ask for sensitivity, specificity, and the base rate.',
    },
    {
      question: 'What makes a piece of evidence diagnostic rather than merely interesting?',
      guidance: 'Diagnostic evidence should be more expected if the claim is true than if it is false.',
      contemporary: 'A celebrity endorsement is evidence that someone is promoting a product, but it may be weak evidence that the product works.',
      feedback: 'Good answers distinguish attention-grabbing evidence from likelihood-shifting evidence.',
    },
  ],
  'Session 4: Updating and Changing Minds': [
    {
      question: 'What would count as an honest update that is not a total reversal?',
      guidance: 'Use small confidence movements. A participant might move from 80 to 65 percent, or from 40 to 55 percent.',
      historical: 'Scientific change often happens gradually. Evidence for germ theory, plate tectonics, or heliocentrism accumulated before many people fully changed their views.',
      feedback: 'A good answer treats updating as proportional movement, not humiliation.',
    },
    {
      question: 'What update condition would lower your confidence in a view you currently hold?',
      guidance: 'This can be private or low-stakes. The goal is to practice answerability, not force confession.',
      scenario: 'A student believes a school policy is unfair. What evidence would make them less confident: data on outcomes, testimony from affected students, cost information, or something else?',
      feedback: 'Strong answers name evidence that could genuinely move the person, not impossible standards.',
    },
    {
      question: 'Why do people sometimes refuse to update after admitting the evidence changed?',
      guidance: 'Look for identity, fear, sunk costs, public commitment, and group pressure.',
      contemporary: 'Public figures may avoid updates because opponents call it weakness. Groups can ask how public culture could reward honest revision.',
      feedback: 'Good answers distinguish evidence processing from social cost.',
    },
  ],
  'Session 5: Bias, Identity, and Core Rationality': [
    {
      question: 'How can intelligence make motivated reasoning worse rather than better?',
      guidance: 'An intelligent person may generate better defenses for a preferred conclusion. Ask whether their standards are symmetrical.',
      historical: 'Educated defenders of bad institutions have often produced sophisticated arguments for preserving power, status, or tradition.',
      feedback: 'The key phrase is directional intelligence: skill aimed at protection rather than truth.',
    },
    {
      question: 'What does it feel like when Assigned Credence (CA) pulls away from Perceived Evidence (EP)?',
      guidance: 'Use ordinary language: “I know this probably is not true, but I need it to be.” Or, “I see the objection, but I cannot let myself accept it.”',
      scenario: 'A student knows they did not study enough but insists the test was unfair because that feels easier than admitting responsibility.',
      feedback: 'Good answers notice inner pressure without turning it into a character attack.',
    },
    {
      question: 'How can a group make changing one’s mind socially survivable?',
      guidance: 'Suggest phrases such as “That is a good update” or “Thanks for revising.” Make revision a respected move.',
      contemporary: 'Online communities often punish members for disagreeing with the group. That makes Core Rationality harder.',
      feedback: 'The strongest answer changes the social reward structure around updating.',
    },
  ],
  'Session 6: Uncertainty, Action, and Risk': [
    {
      question: 'When is it rational to act before being certain?',
      guidance: 'Separate confidence from stakes. High stakes can justify action at lower confidence if waiting is dangerous, or require higher confidence if action is risky.',
      historical: 'Public health decisions during outbreaks often require action while evidence is still developing.',
      feedback: 'Good answers mention both probability and cost of error.',
    },
    {
      question: 'How can uncertainty be honest rather than evasive?',
      guidance: 'Honest uncertainty is specific and updateable. Evasive uncertainty appears only when evidence threatens a preferred conclusion.',
      scenario: 'A person says “we can never know” only after evidence starts going against their side. What makes that suspicious?',
      feedback: 'The key is consistency: do they apply uncertainty standards evenly?',
    },
    {
      question: 'How should the group discuss risk without letting fear inflate confidence?',
      guidance: 'Ask participants to name the feared outcome, estimate likelihood, identify evidence, and separate dread from probability.',
      contemporary: 'Crime stories, health scares, economic panic, and safety debates often make rare outcomes feel common.',
      feedback: 'Strong answers respect real harm without letting vividness replace likelihood.',
    },
  ],
  'Session 7: Media, Institutions, and Public Debate': [
    {
      question: 'How do institutions shape what counts as public evidence?',
      guidance: 'Ask what gets measured, reported, repeated, hidden, rewarded, or punished.',
      historical: 'The Watergate investigation showed how documents, reporting, courts, hearings, and public pressure can change public confidence over time.',
      feedback: 'Good answers identify evidence pipelines rather than blaming only individual readers.',
    },
    {
      question: 'Why does public debate often reward overconfidence?',
      guidance: 'Discuss sound bites, team loyalty, audience applause, and the difficulty of saying “I am not sure” in public.',
      scenario: 'In a televised debate, one speaker gives a simple confident answer while another gives a careful uncertain answer. Who seems more convincing, and who may be more accurate?',
      feedback: 'A strong answer separates performance confidence from evidential confidence.',
    },
    {
      question: 'What would healthier media credencing look like?',
      guidance: 'Look for visible uncertainty, source links, correction records, base rates, expert disagreement, and clear separation between reporting and opinion.',
      contemporary: 'Breaking news often changes quickly. The first report may be incomplete even when journalists are acting responsibly.',
      feedback: 'Good answers make speed accountable to correction.',
    },
  ],
  'Session 8: AI, Expertise, and the Future': [
    {
      question: 'Why can a fluent AI answer feel more reliable than it is?',
      guidance: 'Fluency is not the same as evidence. Ask what sources, checks, uncertainty, and domain knowledge support the output.',
      historical: 'Earlier technologies such as radio, television, and search engines also made information feel more authoritative when it was easier to access.',
      feedback: 'The key distinction is presentation quality versus evidential support.',
    },
    {
      question: 'When should people defer to experts, and when should they ask for more explanation?',
      guidance: 'Expertise matters most inside a domain and when experts show methods, uncertainty, and track records. Deference should not become blind trust.',
      scenario: 'A doctor, an AI chatbot, and a social media influencer give different health advice. What questions should a patient ask before assigning confidence?',
      feedback: 'Strong answers weigh domain expertise, evidence, incentives, and verification.',
    },
    {
      question: 'What future institutions will need better confidence governance?',
      guidance: 'Discuss schools, courts, hospitals, AI labs, journalism, government agencies, and companies.',
      contemporary: 'AI-generated content, deepfakes, automated decisions, and model-based forecasts all require clearer confidence labels and accountability.',
      feedback: 'Good answers focus on systems that make confidence visible and correctable.',
    },
  ],
  'Facilitator Toolkit': [
    {
      question: 'What should a facilitator do when the group becomes polarized?',
      guidance: 'Slow the discussion, restate the claim, ask each side for its strongest evidence, and require confidence levels rather than slogans.',
      scenario: 'Two participants start arguing about politics. Each thinks the other side is dishonest. How can the facilitator return to evidence and confidence?',
      feedback: 'A good facilitator lowers heat without flattening real disagreement.',
    },
    {
      question: 'How can feedback be honest without being insulting?',
      guidance: 'Use precise, model-based language. Say “I am not seeing the evidence for that confidence level” rather than “you are irrational.”',
      feedback: 'Strong feedback names the gap and invites repair.',
    },
    {
      question: 'How should a group end a session so learning continues?',
      guidance: 'Ask each participant to write one update, one uncertainty, and one question for next time.',
      contemporary: 'Prediction logs, shared notes, and follow-up checks help groups practice calibration over time.',
      feedback: 'A strong closing turns discussion into a record of learning.',
    },
  ],
};

function DiscussionAccordionPanel({ page }: { page: ContentPage }) {
  if (page.groupPath !== '/discussion-groups') return null;
  const prompts = discussionPrompts[page.title] ?? [];
  if (prompts.length === 0) return null;

  return (
    <section className="glass-panel p-6 md:p-8 bg-amber-500/[0.035] border-amber-500/20 space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Discussion Questions</p>
        <h3 className="text-2xl font-light text-white">Questions with expandable guidance</h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          Open each question for facilitator notes, examples, scenarios, and feedback. The aim is careful discussion at a senior high school reading level.
        </p>
      </div>
      <div className="space-y-3">
        {prompts.map((prompt, index) => (
          <details key={prompt.question} className="group rounded-xl border border-white/10 bg-black/15 open:bg-black/25">
            <summary className="cursor-pointer list-none p-4 text-white flex items-start justify-between gap-4">
              <span>
                <span className="block text-[9px] uppercase tracking-widest text-amber-300 mb-2">Question {index + 1}</span>
                <span className="text-base font-light leading-snug">{prompt.question}</span>
              </span>
              <span className="text-amber-300 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-4 pb-4 grid gap-3 text-sm text-stone-300 leading-relaxed">
              <DiscussionNote label="Guidance" text={prompt.guidance} />
              {prompt.historical && <DiscussionNote label="Historical Example" text={prompt.historical} />}
              {prompt.scenario && <DiscussionNote label="Hypothetical Scenario" text={prompt.scenario} />}
              {prompt.contemporary && <DiscussionNote label="Contemporary Issue" text={prompt.contemporary} />}
              <DiscussionNote label="Feedback" text={prompt.feedback} />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function DiscussionNote({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
      <span className="block text-[9px] uppercase tracking-widest text-stone-500 mb-1">{label}</span>
      <span>{text}</span>
    </div>
  );
}

function RelatedGroups({ currentPath, onNavigate }: { currentPath: string; onNavigate: (path: string) => void }) {
  const relatedGroups = (relatedGroupPaths[currentPath] ?? pageGroups.filter((group) => group.path !== currentPath).slice(0, 3).map((group) => group.path))
    .map((path) => pageGroups.find((group) => group.path === path))
    .filter((group): group is PageGroup => Boolean(group));

  return (
    <section className="space-y-5">
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Related Paths</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedGroups.map((group) => (
          <GroupCard key={group.path} group={group} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  );
}

function GroupCard({ group, onNavigate }: { key?: string; group: PageGroup; onNavigate: (path: string) => void }) {
  return (
    <button onClick={() => onNavigate(group.path)} className="glass-panel p-6 text-left bg-white/[0.015] border-white/5 hover:border-amber-500/40 transition-all group min-h-[210px]">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h3 className="text-lg text-white font-light">{group.title}</h3>
        <ArrowRight size={16} className="text-stone-600 group-hover:text-amber-300 transition-colors" />
      </div>
      <p className="text-stone-400 text-xs leading-relaxed mb-5">{group.summary}</p>
      <p className="text-[9px] uppercase tracking-widest text-stone-600">{getSectionCollections(group).length} clusters / {group.pages.length} pages</p>
    </button>
  );
}

function SearchAndTopicIndex({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    searchIndex.forEach((entry) => entry.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
    return counts;
  }, [searchIndex]);
  const results = useMemo(() => runSearch(searchIndex, query, activeTag), [activeTag, query, searchIndex]);
  const visibleTags = tagCatalog.filter((tag) => (tagCounts.get(tag.id) ?? 0) > 0);
  const featuredTags = visibleTags.slice(0, 12);
  const activeTagLabel = tagCatalog.find((tag) => tag.id === activeTag)?.label;

  const chooseTag = (tagId: string) => {
    setActiveTag((current) => (current === tagId ? null : tagId));
  };

  return (
    <section className="space-y-8">
      <div className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">Utility Layer</p>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">Search and Topic Index</h2>
        <p className="text-stone-300 max-w-3xl leading-relaxed">Search the public Credencing web by concept, issue, domain, skill, abbreviation, or failure mode. Tags are generated from the same page corpus, so browsing and search stay in sync.</p>
        <input
          aria-label="Search Credencing pages"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search credences, EP-CA, calibration, AI alignment..."
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-stone-100 outline-none focus:border-amber-500/50"
        />
        <div className="flex flex-wrap gap-2">
          {featuredTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => chooseTag(tag.id)}
              className={`px-3 py-1.5 rounded-full border text-[10px] uppercase tracking-wider transition-colors ${
                activeTag === tag.id ? 'border-amber-400/70 bg-amber-500/15 text-amber-100' : 'border-white/10 text-stone-300 hover:border-amber-500/40'
              }`}
            >
              {tag.label}
            </button>
          ))}
          {(query || activeTag) && (
            <button onClick={() => { setQuery(''); setActiveTag(null); }} className="px-3 py-1.5 rounded-full border border-red-500/20 text-[10px] uppercase tracking-wider text-red-200 hover:border-red-400/50">
              Clear
            </button>
          )}
        </div>
        <p className="text-[11px] text-stone-500">
          Showing {results.length} of {searchIndex.length} pages{activeTagLabel ? ` tagged ${activeTagLabel}` : ''}{query.trim() ? ` matching "${query.trim()}"` : ''}.
        </p>
      </div>
      <div className="glass-panel p-6 md:p-8 bg-white/[0.015] border-white/5 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-2">Section Index</p>
            <h3 className="text-2xl text-white font-light">Browse by site area</h3>
          </div>
          <button onClick={() => onNavigate('/site-map')} className="w-full sm:w-fit px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-stone-300 text-[10px] font-bold uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-200 transition-colors flex items-center justify-center gap-2">
            Full Map <MapIcon size={13} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
          {pageGroups.map((group) => (
            <button
              key={group.path}
              onClick={() => onNavigate(group.path)}
              className="rounded-xl border border-white/5 bg-black/10 p-4 text-left hover:border-amber-500/30 transition-colors"
            >
              <span className="block text-sm text-white font-light">{group.title}</span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-600 mt-2">{getSectionCollections(group).length} clusters / {group.pages.length} pages</span>
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.length === 0 && (
          <div className="glass-panel p-8 md:col-span-2 bg-white/[0.015] border-white/5 text-stone-300">
            No pages match that search yet. Try a broader term such as evidence, credence, calibration, Bayesian, rationality, EP-CA, or uncertainty.
          </div>
        )}
        {results.map((result) => (
          <button key={result.entry.page.path} onClick={() => onNavigate(result.entry.page.path)} className="glass-panel p-5 text-left bg-white/[0.015] border-white/5 hover:border-amber-500/30 transition-colors">
            <span className="text-[9px] uppercase tracking-widest text-amber-400">{result.entry.page.groupTitle}</span>
            <h3 className="text-white text-lg font-light mt-2">{result.entry.page.title}</h3>
            <p className="text-stone-400 text-xs leading-relaxed mt-2">{result.snippet || result.entry.page.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {result.entry.tags.slice(0, 5).map((tagId) => {
                const tag = tagCatalog.find((item) => item.id === tagId);
                return tag ? (
                  <span key={tagId} className="rounded-full border border-white/10 px-2 py-1 text-[9px] uppercase tracking-wider text-stone-500">
                    {tag.label}
                  </span>
                ) : null;
              })}
            </div>
          </button>
        ))}
      </div>
      <div className="glass-panel p-6 md:p-8 bg-white/[0.015] border-white/5 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-2">Expanded Tag Index</p>
            <h3 className="text-2xl text-white font-light">Browse by conceptual role</h3>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-stone-500">{visibleTags.length} active tags</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {visibleTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => chooseTag(tag.id)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                activeTag === tag.id ? 'border-amber-400/70 bg-amber-500/10' : 'border-white/5 bg-black/10 hover:border-amber-500/30'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-white font-light">{tag.label}</span>
                <span className="text-[10px] font-mono text-amber-300">{tagCounts.get(tag.id) ?? 0}</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2">{tag.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

type SearchEntry = {
  page: ContentPage;
  text: string;
  titleText: string;
  summaryText: string;
  tags: string[];
};

type SearchResult = {
  entry: SearchEntry;
  score: number;
  snippet: string;
};

function buildSearchIndex(): SearchEntry[] {
  return contentPages.map((page) => {
    const sectionText = page.sections.map((section) => `${section.heading} ${section.body.join(' ')} ${section.bullets?.join(' ') ?? ''}`).join(' ');
    const titleText = normalizeSearchText(`${page.title} ${page.groupTitle}`);
    const summaryText = normalizeSearchText(page.summary);
    const text = normalizeSearchText(`${page.title} ${page.groupTitle} ${page.summary} ${page.keyTakeaways.join(' ')} ${sectionText}`);
    const tags = tagCatalog
      .filter((tag) => tag.aliases.some((alias) => searchTextHasAlias(text, alias)))
      .map((tag) => tag.id);

    return {
      page,
      text,
      titleText,
      summaryText,
      tags,
    };
  });
}

function runSearch(index: SearchEntry[], query: string, activeTag: string | null): SearchResult[] {
  const terms = tokenizeQuery(query);

  return index
    .map((entry) => {
      if (activeTag && !entry.tags.includes(activeTag)) return null;
      if (terms.length === 0) {
        return {
          entry,
          score: activeTag ? 8 : 1,
          snippet: entry.page.summary,
        };
      }

      let score = 0;
      const matchedAllTerms = terms.every((term) => {
        const inTitle = searchTextHasTerm(entry.titleText, term);
        const inSummary = searchTextHasTerm(entry.summaryText, term);
        const inTags = entry.tags.some((tagId) => {
          const tag = tagCatalog.find((item) => item.id === tagId);
          return tag ? searchTextHasTerm(normalizeSearchText(`${tag.label} ${tag.aliases.join(' ')}`), term) : false;
        });
        const inBody = searchTextHasTerm(entry.text, term);

        if (inTitle) score += 12;
        if (inSummary) score += 5;
        if (inTags) score += 4;
        if (inBody) score += 1;

        return inTitle || inSummary || inTags || inBody;
      });

      if (!matchedAllTerms) return null;

      return {
        entry,
        score,
        snippet: makeSnippet(entry.page, terms),
      };
    })
    .filter((result): result is SearchResult => result !== null)
    .sort((a, b) => b.score - a.score || a.entry.page.title.localeCompare(b.entry.page.title));
}

function tokenizeQuery(query: string) {
  return normalizeSearchText(query)
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 0);
}

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[₀ₐᴅ]/g, (char) => ({ '₀': '0', 'ₐ': 'a', 'ᴅ': 'd' }[char] ?? char));
}

function searchTextHasAlias(text: string, alias: string) {
  const normalizedAlias = normalizeSearchText(alias);
  if (normalizedAlias.length <= 2 || /^[a-z0-9]+$/.test(normalizedAlias)) {
    return new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalizedAlias)}([^a-z0-9]|$)`).test(text);
  }
  return text.includes(normalizedAlias);
}

function searchTextHasTerm(text: string, term: string) {
  if (term.length <= 2) {
    return new RegExp(`(^|[^a-z0-9])${escapeRegExp(term)}([^a-z0-9]|$)`).test(text);
  }
  return text.includes(term);
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function makeSnippet(page: ContentPage, terms: string[]) {
  const blocks = [
    page.summary,
    ...page.keyTakeaways,
    ...page.sections.flatMap((section) => [section.heading, ...section.body, ...(section.bullets ?? [])]),
  ];
  const block = blocks.find((item) => terms.some((term) => searchTextHasTerm(normalizeSearchText(item), term))) ?? page.summary;
  return block.length > 230 ? `${block.slice(0, 227).trim()}...` : block;
}

function DiagramGallery() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-3">Concept Diagrams</p>
        <h2 className="text-3xl font-light text-white">Three ways to see the model</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DiagramCard title="Evidence Flow">
          <div className="flex items-center justify-between gap-2 text-center">
            {['E0', 'EP', 'CA'].map((node, index) => (
              <div key={node} className="flex items-center gap-2 flex-1">
                <div className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-100 font-mono text-sm w-full">{node}</div>
                {index < 2 && <ArrowRight size={16} className="text-stone-500 shrink-0" />}
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">Objective evidence becomes perceived evidence, then assigned credence. The project studies where this flow bends.</p>
        </DiagramCard>
        <DiagramCard title="Core vs Deep">
          <div className="grid grid-cols-2 gap-2 text-xs" aria-label="Core rationality and deep rationality quadrant examples">
            {['Ideal Agent', 'Biased Expert', 'Honest Novice', 'Delusion Risk'].map((label) => (
              <div key={label} className="border border-white/10 bg-white/[0.02] rounded-lg p-3 text-stone-200 min-h-[70px] flex items-center justify-center text-center">{label}</div>
            ))}
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">Skill and integrity are separate axes. Intelligence alone does not guarantee calibrated belief.</p>
        </DiagramCard>
        <DiagramCard title="Action Threshold">
          <div className="space-y-3">
            <div className="h-2 rounded-full bg-gradient-to-r from-stone-700 via-amber-500 to-green-400"></div>
            <div className="flex justify-between text-[10px] text-stone-500 font-mono">
              <span>uncertain</span>
              <span>act?</span>
              <span>strong</span>
            </div>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">Credence and action threshold are distinct. High stakes can require more confidence without changing the evidence.</p>
        </DiagramCard>
      </div>
    </section>
  );
}

function DiagramCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-5 min-h-[250px]">
      <h3 className="text-white font-light text-lg flex items-center gap-2"><Network size={16} className="text-amber-400" /> {title}</h3>
      {children}
    </div>
  );
}

function UtilityFeatureArticle({ feature, onNavigate }: { feature: UtilityFeaturePage; onNavigate: (path: string) => void }) {
  return (
    <article className="space-y-8">
      <header className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
        <button onClick={() => onNavigate('/site-map')} className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold hover:text-amber-200">
          Utility Layer / Site Map
        </button>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{feature.title}</h2>
        <p className="text-stone-300 max-w-3xl text-base md:text-lg leading-relaxed">{feature.summary}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          {feature.sections.map((section) => (
            <section key={section.heading} className="glass-panel p-6 md:p-8 bg-white/[0.015] border-white/5 space-y-4">
              <h3 className="text-2xl font-light text-white">{section.heading}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-stone-300 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="grid gap-2 pt-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-stone-300 text-sm leading-relaxed flex gap-3">
                      <span className="text-amber-400">|</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-5">
          <div className="glass-panel p-6 bg-amber-500/[0.04] border-amber-500/20 space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold">Working Destinations</h3>
            <div className="space-y-2">
              {feature.actions.map((action) => (
                <button
                  key={action.path}
                  onClick={() => onNavigate(action.path)}
                  className="w-full rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left text-xs text-white hover:border-amber-500/30 transition-colors"
                >
                  <span className="flex items-center justify-between gap-3">
                    {action.label}
                    <ArrowRight size={14} className="text-amber-400" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Status</h3>
            <p className="text-stone-300 text-xs leading-relaxed">
              This utility page is meant to orient visitors quickly. Use the working destinations above to jump to the live feature or to a representative article where the feature is visible in context.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

function TopicIndexArticle({ feature, onNavigate }: { feature: UtilityFeaturePage; onNavigate: (path: string) => void }) {
  return (
    <article className="space-y-8">
      <header className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
        <button onClick={() => onNavigate('/site-map')} className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold hover:text-amber-200">
          Utility Layer / Site Map
        </button>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{feature.title}</h2>
        <p className="text-stone-300 max-w-3xl text-base md:text-lg leading-relaxed">
          Browse Credencing by section and page title. This is the fastest way to see the shape of the whole project before deciding where to read next.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {pageGroups.map((group) => (
          <section key={group.path} className="glass-panel p-6 bg-white/[0.015] border-white/5 space-y-4">
            <button onClick={() => onNavigate(group.path)} className="text-left group">
              <span className="block text-[9px] uppercase tracking-widest text-amber-400 mb-2">{group.pages.length} pages</span>
              <h3 className="text-xl text-white font-light group-hover:text-amber-200 transition-colors">{group.title}</h3>
            </button>
            <p className="text-stone-400 text-xs leading-relaxed">{group.summary}</p>
            <div className="space-y-4 pt-2">
              {getSectionCollections(group).map((collection) => (
                <div key={collection.label} className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-stone-600 font-bold">{collection.label}</p>
                  {collection.pages.map((pageTitle) => (
                    <div key={pageTitle} className="space-y-1">
                      <button
                        onClick={() => onNavigate(pagePath(group.path, pageTitle))}
                        className="text-left text-xs text-stone-300 hover:text-amber-300 transition-colors"
                      >
                        {pageTitle}
                      </button>
                      {getNestedChildren(group.path)[pageTitle] && (
                        <div className="ml-4 border-l border-amber-500/20 pl-3 space-y-1">
                          {getNestedChildren(group.path)[pageTitle].map((childTitle) => (
                            <button
                              key={childTitle}
                              onClick={() => onNavigate(pagePath(group.path, childTitle))}
                              className="block text-left text-[11px] text-stone-500 hover:text-amber-300 transition-colors"
                            >
                              {childTitle}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function TagIndexArticle({ feature, onNavigate }: { feature: UtilityFeaturePage; onNavigate: (path: string) => void }) {
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const activeTags = tagCatalog
    .map((tag) => ({
      tag,
      pages: searchIndex.filter((entry) => entry.tags.includes(tag.id)),
    }))
    .filter((entry) => entry.pages.length > 0);

  return (
    <article className="space-y-8">
      <header className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5 space-y-5">
        <button onClick={() => onNavigate('/site-map')} className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold hover:text-amber-200">
          Utility Layer / Site Map
        </button>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">{feature.title}</h2>
        <p className="text-stone-300 max-w-3xl text-base md:text-lg leading-relaxed">
          Browse by recurring concepts instead of site sections. Each tag shows how many pages it touches and gives a few direct entry points.
        </p>
        <button
          onClick={() => onNavigate('/search')}
          className="w-full sm:w-fit px-5 py-3 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/50 rounded-xl text-xs font-bold tracking-widest transition-all text-amber-200 flex items-center justify-center gap-3 uppercase"
        >
          Open Search <Search size={14} />
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {activeTags.map(({ tag, pages }) => (
          <section key={tag.id} className="glass-panel p-5 bg-white/[0.015] border-white/5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg text-white font-light">{tag.label}</h3>
                <p className="text-stone-500 text-[11px] leading-relaxed mt-2">{tag.description}</p>
              </div>
              <span className="rounded-full border border-amber-500/30 px-2 py-1 text-[10px] font-mono text-amber-300">{pages.length}</span>
            </div>
            <div className="space-y-2">
              {pages.slice(0, 6).map((entry) => (
                <button
                  key={entry.page.path}
                  onClick={() => onNavigate(entry.page.path)}
                  className="block w-full rounded-lg border border-white/5 bg-black/10 p-3 text-left hover:border-amber-500/30 transition-colors"
                >
                  <span className="block text-xs text-stone-200">{entry.page.title}</span>
                  <span className="block text-[9px] uppercase tracking-widest text-stone-600 mt-1">{entry.page.groupTitle}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function SiteMap({ onNavigate }: { onNavigate: (path: string) => void }) {
  const utilityItems = [
    { label: 'Search', detail: 'Find a concept or page', path: '/search' },
    { label: 'Topic Index', detail: 'Browse sections and pages', path: '/utility/topic-index' },
    { label: 'Tag Index', detail: 'Browse concept tags', path: '/utility/tag-index' },
    { label: 'Related Pages', detail: 'Follow connected ideas', path: '/utility/related-pages-engine' },
    { label: 'Contact / Updates', detail: 'Send feedback or corrections', path: pagePath('/about', 'Contact') },
  ];
  const isDraftedPage = (path: string) => contentPages.some((page) => page.path === path);

  return (
    <section className="space-y-8">
      <div className="glass-panel p-8 md:p-12 bg-white/[0.02] border-white/5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-4">Utility Layer</p>
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">Site Map</h2>
        <p className="text-stone-300 max-w-3xl leading-relaxed">
          A full map of the public Credencing site. The central model stays prominent while related ideas, guides, applications, and resources form a searchable web around it.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {pageGroups.map((group) => (
          <div key={group.path} className="glass-panel p-6 bg-white/[0.015] border-white/5">
            <div className="flex items-start justify-between gap-4 mb-5">
              <button onClick={() => onNavigate(group.path)} className="text-left group">
                <h3 className="text-white font-light text-xl group-hover:text-amber-200 transition-colors">{group.title}</h3>
                <p className="text-[9px] uppercase tracking-widest text-stone-600 mt-2">{getSectionCollections(group).length} clusters / {group.pages.length} mapped pages</p>
              </button>
              <ArrowRight size={16} className="text-stone-600" />
            </div>
            <div className="space-y-5">
              {getSectionCollections(group).map((collection) => (
                <div key={collection.label} className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-amber-400 font-bold">{collection.label}</p>
                  <ul className="space-y-2">
                    {collection.pages.map((page) => (
                      <li key={page} className="text-stone-400 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="text-amber-500/70 mt-0.5">|</span>
                          {(() => {
                            const path = pagePath(group.path, page);
                            const drafted = isDraftedPage(path);
                            return (
                              <button
                                onClick={() => drafted && onNavigate(path)}
                                disabled={!drafted}
                                className={`text-left transition-colors ${drafted ? 'hover:text-amber-300' : 'cursor-default text-stone-600'}`}
                              >
                                {page}
                              </button>
                            );
                          })()}
                        </div>
                        {getNestedChildren(group.path)[page] && (
                          <ul className="ml-5 mt-2 space-y-1 border-l border-amber-500/20 pl-3">
                            {getNestedChildren(group.path)[page].map((childPage) => {
                              const childPath = pagePath(group.path, childPage);
                              const childDrafted = isDraftedPage(childPath);
                              return (
                                <li key={childPage}>
                                  <button
                                    onClick={() => childDrafted && onNavigate(childPath)}
                                    disabled={!childDrafted}
                                    className={`text-left transition-colors ${childDrafted ? 'text-stone-500 hover:text-amber-300' : 'cursor-default text-stone-700'}`}
                                  >
                                    {childPage}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="glass-panel p-6 bg-white/[0.015] border-white/5">
        <h3 className="text-white font-light text-xl mb-4">Utility Layer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs text-stone-400">
          {utilityItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => item.path && onNavigate(item.path)}
              disabled={!item.path}
              className={`border border-white/5 rounded-lg p-3 flex items-start gap-2 text-left ${item.path ? 'hover:border-amber-500/30 hover:bg-white/[0.025] transition-colors' : 'cursor-default opacity-75'}`}
            >
              <Search size={12} className="text-amber-400" />
              <span>
                <span className="block text-stone-300">{item.label}</span>
                <span className="block text-[9px] uppercase tracking-widest text-stone-600 mt-1">{item.detail}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <footer className="pt-16 pb-4 space-y-4 text-[10px] uppercase tracking-widest opacity-60 font-mono">
      <div className="h-px bg-white/10"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <span>Credencing Public Web</span>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          <button onClick={() => onNavigate('/')}>Home</button>
          <button onClick={() => onNavigate('/search')}>Search</button>
          <button onClick={() => onNavigate('/site-map')}>Site Map</button>
          <button onClick={() => onNavigate(pagePath('/about', 'Author'))}>Author</button>
          <button onClick={() => onNavigate(pagePath('/about', 'Contact'))}>Contact</button>
        </nav>
        <span>2026 Epistemic Protocol</span>
      </div>
    </footer>
  );
}

function getDynamicDescription(data: EpistemicData) {
  const calcError = Math.abs(data.perceivedEvidence - data.objectiveEvidence);
  const coreIrrationality = Math.abs(data.assignedCredence - data.perceivedEvidence);
  const warrantedSlack = (1 - data.deepRationality) * 0.25;
  const excessCoreIrrationality = Math.max(0, coreIrrationality - warrantedSlack);
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
  if (excessCoreIrrationality > 0) {
    return "Epistemic Delusion: assigned credence has drifted so far from perceived evidence that the doxastic gap has torn loose.";
  }
  return "Standard Agent: minor deviations represent common bias or noise, but belief remains broadly tethered to perceived evidence.";
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all ${
        active ? 'bg-amber-600/20 text-amber-400 border border-amber-500/50 shadow-[0_0_15px_rgba(246,180,75,0.22)]' : 'text-stone-400 hover:text-stone-200 hover:bg-white/10'
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
        <div className={`w-1.5 h-1.5 rounded-full ${tone === 'blue' ? 'bg-amber-400' : 'bg-red-400'}`}></div>
        {title}
      </h3>
      <p className="text-stone-200 text-xs leading-relaxed">{text}</p>
    </div>
  );
}

function MiniNote({ icon, title, text, danger = false }: { icon: ReactNode; title: string; text: string; danger?: boolean }) {
  return (
    <div className={`p-4 rounded-xl ${danger ? 'bg-red-500/[0.04] border border-red-500/20' : 'bg-amber-500/[0.02] border border-amber-500/10'}`}>
      <h4 className={`text-[9px] uppercase tracking-[0.2em] font-black mb-2 flex items-center gap-2 ${danger ? 'text-red-500' : 'text-amber-400'}`}>
        {icon} {title}
      </h4>
      <p className="text-stone-400 text-[11px] leading-relaxed">{text}</p>
    </div>
  );
}

function BorderNote({ title, text, color }: { title: string; text: string; color: string }) {
  return (
    <div className={`border-l ${color} pl-6 space-y-2`}>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-stone-400 text-xs leading-relaxed">{text}</p>
    </div>
  );
}

function VarDef({ sym, label, desc }: { sym: string; label: string; desc: string }) {
  return (
    <div className="glass-panel p-4 bg-white/2 border-white/5">
      <div className="text-white text-sm mb-1 font-light"><span className="text-amber-400 font-bold font-mono mr-2">{sym}</span> {label}</div>
      <div className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-tight">{desc}</div>
    </div>
  );
}

function Formula({ code, title, text }: { code: string; title: string; text: string }) {
  return (
    <div className="space-y-3">
      <code className="text-2xl text-white font-mono tracking-tighter">{code}</code>
      <p className="text-stone-400 text-sm leading-relaxed border-l border-amber-500/20 pl-6">
        <strong>{title}.</strong> {text}
      </p>
    </div>
  );
}

function ArchetypeCard({ name, icon, desc }: { key?: string; name: string; icon: ReactNode; desc: string }) {
  return (
    <div className="glass-panel p-5 bg-white/[0.01] border-white/5 hover:border-white/10 transition-colors space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{name}</h4>
      </div>
      <p className="text-[11px] text-stone-400 leading-relaxed">{desc}</p>
    </div>
  );
}
