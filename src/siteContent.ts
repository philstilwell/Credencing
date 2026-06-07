export type PageGroup = {
  title: string;
  path: string;
  summary: string;
  pages: string[];
};

export type ContentSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ContentPage = {
  title: string;
  path: string;
  groupTitle: string;
  groupPath: string;
  summary: string;
  sections: ContentSection[];
  keyTakeaways: string[];
  related: string[];
};

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/["()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function pagePath(groupPath: string, title: string) {
  return `${groupPath}/${slugify(title)}`;
}

export const featuredPaperTitles = [
  'A Formal Framework for Core and Deep Rationality',
  'Core Rationality',
  'The Two-Gap Theory of Irrationality: Evidence Perception, Belief Integrity, and Diagnostic Repair',
  'Warranted Uncertainty: The Discipline of Not Knowing in a Credence-First Epistemology',
  'Intelligence as Rationalization Engine: Deep Rationality, Core Rationality, and the Biased Expert',
  'Institutional Credencing: Official Confidence, Evidence Pipelines, and Organizational Belief Integrity',
  'AI as Deep Rationality Prosthetic: Evidence Processing, Delegated Credence, and Core Rationality in AI-Mediated Inquiry',
  'Evidence-Proportioned Belief: A Credence-First Reframing of Faith and Rationality',
  "Credence First: Against Plantinga's Warrant as an Epistemic Upgrade",
  'Humanity as a Middle Child in the Age of AI: Patterns of Delegation and Epistemic Atrophy',
  'The Gravity of Grammar: Binary Inertia and the Distortion of Epistemic Calibration',
  'Beyond the Binary: Linguistic Evolution and the Transition to Credence-Based Discourse',
  'The Miracle Audit: A Probabilistic Framework for Differentiating Anomalies from Supernatural Interventions',
  'The Architecture of Explanatory Satisfaction and the Affective Veto Against Stochastic Reality',
  'Foundational Choices for the Autodidact',
  'The Asymptote of the Natural: Inductive Density and the A Posteriori Justification of Methodological Naturalism',
  'The Threshold of the Real: Inductive Density and the Emergence of the Human Ontic',
  'The "Ontic Snap" as a Cognitive Phase Transition',
  'Mereological Indigestion: Why We Cannot Divvy Up the Blob',
  'Useful Fictions Common in Philosophical Pedagogy',
  'Against the Great Man: A Systems-Theoretic Critique of Individual Attribution',
];

export const pageGroups: PageGroup[] = [
  {
    title: 'Start Here',
    path: '/start-here',
    summary: 'A guided entry into credences, evidence, confidence, Bayesian updating, and the difference between being mistaken and being epistemically inconsistent.',
    pages: [
      'What Is Credencing?',
      'Why Binary Belief Is Too Crude',
      'Evidence and Confidence',
      'What Bayesian Updating Is',
      'Why People Go Wrong',
      'The Difference Between Being Mistaken and Being Epistemically Inconsistent',
      'Where to Go Next',
    ],
  },
  {
    title: 'Core Ideas',
    path: '/core-ideas',
    summary: 'The conceptual vocabulary behind the model: priors, likelihoods, posteriors, uncertainty, objective evidence, perceived evidence, assigned credence, and rationality types.',
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
      'Objective Evidence (E0)',
      'Perceived Evidence (EP)',
      'Assigned Credence (CA)',
      'Deep Rationality (SD)',
      'Core Rationality',
      'Calculation Error (DE)',
      'Core Irrationality (IC)',
      'Diagnostic Safeguards',
      'Epistemic Akrasia',
      'Core vs Deep Rationality',
      'Epistemic Archetypes',
    ],
  },
  {
    title: 'Bayes Theorem',
    path: '/bayes-theorem',
    summary: 'A dedicated walkthrough of Bayes theorem, its formula, its mental parts, and how scientists use it to revise confidence.',
    pages: [
      'Bayes Theorem Overview',
      'The Formula',
      'The Prior',
      'The Likelihood',
      'The Evidence Term',
      'The Posterior',
      'Scientific Walkthrough',
      'Common Mistakes',
      'Practice Examples',
    ],
  },
  {
    title: 'Interactive Lab',
    path: '/interactive-lab',
    summary: 'The live model, scenario presets, visual legend, comparison tools, and an interpretation guide for reading epistemic states.',
    pages: [
      'Interactive Model',
      'How to Read the Model',
      'Visual Legend',
      'Preset Scenarios',
      'Ideal Agent',
      'Honest Novice',
      'Biased Expert',
      'Epistemic Delusion',
      'Build Your Own Scenario',
      'Compare Two Scenarios',
      'Interpretation Guide',
    ],
  },
  {
    title: 'Case Studies',
    path: '/case-studies',
    summary: 'Concrete examples of epistemic failure and repair in reasoning, institutions, media, medicine, politics, and ordinary judgment.',
    pages: [
      'Base-Rate Neglect',
      'Medical Testing',
      'Motivated Reasoning',
      'Political Tribalism',
      'Conspiracy Thinking',
      'Risk Inflation',
      'Pragmatic Encroachment',
      'Fear Overrides',
      'Honest Novice Cases',
      'Biased Expert Cases',
      'Delusion Threshold Cases',
    ],
  },
  {
    title: 'Skills',
    path: '/skills',
    summary: 'Practical exercises for thinking in credences, updating with new evidence, estimating priors, avoiding base-rate neglect, and asking better questions.',
    pages: [
      'How to Think in Credences',
      'How to Scale Confidence to Evidence',
      'How to Update with New Evidence',
      'How to Estimate Priors',
      'How to Read Likelihoods',
      'How to Avoid Base-Rate Neglect',
      'How to Detect Overconfidence',
      'How to Detect Motivated Override',
      'How to Separate Core from Deep Failure',
      'How to Express Uncertainty Honestly',
      'How to Ask Better Epistemic Questions',
      'Practice Exercises',
    ],
  },
  {
    title: 'Discussion Groups',
    path: '/discussion-groups',
    summary: 'Session plans, discussion questions, scenarios, historical examples, and facilitator guidance for groups studying credencing together.',
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
      'Facilitator Toolkit',
    ],
  },
  {
    title: 'Applications',
    path: '/applications',
    summary: 'Where credencing matters: science, medicine, journalism, law, public debate, AI alignment, personal decisions, and institutional diagnostics.',
    pages: [
      'Science',
      'Medicine',
      'Journalism',
      'Law',
      'Education',
      'Public Debate',
      'Policy',
      'Personal Decision-Making',
      'AI Alignment',
      'Institutional Diagnostics',
    ],
  },
  {
    title: 'Library',
    path: '/library',
    summary: 'Papers, essays, glossary entries, references, visual archive, teaching materials, downloads, and project notes.',
    pages: [
      'Papers',
      ...featuredPaperTitles,
      'Future Papers',
      'Essays',
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
      'Glossary',
      'FAQ',
      'References',
      'Visual Archive',
      'Teaching Materials',
      'Downloads',
      'Project Notes',
    ],
  },
  {
    title: 'About',
    path: '/about',
    summary: 'Project overview, methodological commitments, intended use, author notes, contact, and future directions.',
    pages: [
      'Project Overview',
      'Why the Term "Credencing"',
      'Methodological Commitments',
      'Descriptive Rather than Prescriptive Orientation',
      'How to Use This Site',
      'Author',
      'Contact',
      'Future Directions',
    ],
  },
];

export const featuredPaths = [
  '/start-here',
  '/interactive-lab',
  '/core-ideas',
  '/bayes-theorem',
  '/discussion-groups',
  '/case-studies',
  '/skills',
  '/library',
];

export const startHerePages: ContentPage[] = [
  {
    title: 'What Is Credencing?',
    path: pagePath('/start-here', 'What Is Credencing?'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'Credencing is the ongoing act of assigning degrees of belief to claims, possibilities, interpretations, and decisions.',
    sections: [
      {
        heading: 'Belief Has a Volume Knob',
        body: [
          'Credencing begins from a simple observation: most real beliefs are not merely on or off. We do not usually face the world by saying only "true" or "false." We lean, suspect, trust, doubt, provisionally accept, worry, defer, infer, and revise. A credence is that posture made explicit: a degree of confidence rather than a binary verdict.',
          'This matters because many intellectual and personal mistakes come from treating a partial confidence as if it were certainty. A person may have some evidence that a medical test is concerning, that a news report is reliable, that a partner is trustworthy, or that a career move is wise. The question is not only whether the claim is believed, but how strongly it should be believed given the support available.',
        ],
      },
      {
        heading: 'The Three-Part Map',
        body: [
          'The Credencing model separates three things that are often collapsed together. Objective Evidence (E0) is the support that exists in the world. Perceived Evidence (EP) is what the agent takes the evidence to show after perception, interpretation, memory, social pressure, and reasoning have done their work. Assigned Credence (CA) is the final degree of belief the agent actually adopts.',
          'These three values can align, but they can also diverge. A person can misread good evidence, accurately perceive weak evidence, or perceive the evidence well and then refuse to believe accordingly. The public model exists to make those divergences visible.',
        ],
      },
      {
        heading: 'Why This Is Not Just Bayesianism',
        body: [
          'Credencing is friendly to Bayesian thinking, but it is not only a set of probability rules. It also asks where human agents fail. Some failures are deep-rational failures: the agent lacks the skill, information, calibration, or statistical imagination to perceive the evidence well. Other failures are core-rational failures: the agent perceives the evidence well enough but assigns a credence that serves fear, status, tribe, hope, or identity instead.',
          'The distinction lets us avoid a common unfairness. Not every false belief is dishonest. Not every confident expert is rational. Not every doubtful person is confused. We need a richer vocabulary than "smart," "biased," "skeptical," or "irrational."',
        ],
      },
      {
        heading: 'How the Site Uses the Term',
        body: [
          'On this site, credencing names both a process and a discipline. As a process, it is what minds are doing whenever they weight evidence and settle into confidence. As a discipline, it is the practice of making those weights visible, criticizable, and revisable.',
          'The rest of the site builds outward from this point: core ideas define the vocabulary, the lab makes the structure interactive, case studies show recurring failures, skills offer repairs, and applications translate the model into public and institutional life.',
        ],
      },
    ],
    keyTakeaways: [
      'Credences are degrees of belief, not binary labels.',
      'The model separates objective evidence, perceived evidence, and assigned credence.',
      'Some errors come from weak tools; others come from refusing what one already sees.',
      'Credencing is descriptive first: it maps how confidence is formed and distorted.',
    ],
    related: [
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/core-ideas', 'Credences'),
      pagePath('/interactive-lab', 'Interactive Model'),
    ],
  },
  {
    title: 'Why Binary Belief Is Too Crude',
    path: pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'Many important questions require scaled confidence, not a forced choice between belief and disbelief.',
    sections: [
      {
        heading: 'The Problem With Yes-or-No Thinking',
        body: [
          'Binary belief is useful when action requires a decision: publish or do not publish, operate or do not operate, convict or acquit, cross or wait. But the mind can confuse decision thresholds with epistemic reality. A claim may be more likely than not, strongly supported, barely plausible, or almost certainly false. Those are different states, even when a decision later reduces them to a yes or no.',
          'When people skip the middle space, they lose information. "I believe it" can mean 51 percent confidence or 99 percent confidence. "I do not believe it" can mean a mild doubt or near certainty of falsehood. The binary language hides the difference.',
        ],
      },
      {
        heading: 'Binary Labels Encourage Overstatement',
        body: [
          'Once a person has publicly said "I believe X," social and psychological pressure often pushes the statement toward identity. The belief becomes a team jersey, not a calibrated estimate. Doubt then feels like betrayal, and revision feels like humiliation.',
          'Credences reduce that pressure. If I say "I am at 0.65," I have already admitted partiality. I have left room for evidence. I can update to 0.55 or 0.80 without treating the change as a collapse of self.',
        ],
      },
      {
        heading: 'Binary Thinking Obscures Disagreement',
        body: [
          'Two people can both "believe" a claim while differing enormously in confidence. One may hold it lightly, the other dogmatically. Conversely, two people can both "disbelieve" while one is undecided and the other regards the claim as absurd. The binary label makes those distinctions invisible.',
          'A culture of credencing invites better disagreement. The question becomes: how much confidence do you assign, what evidence moves that confidence, and what would update it? This makes disagreement more diagnostic and less theatrical.',
        ],
      },
      {
        heading: 'The Bridge to Action',
        body: [
          'Credencing does not eliminate decisions. It improves the bridge into them. Once we know our confidence level, we can ask what action threshold is appropriate. A 60 percent chance of rain may justify carrying an umbrella. A 60 percent chance of guilt should not justify a criminal conviction. The same credence can imply different actions under different stakes.',
        ],
      },
    ],
    keyTakeaways: [
      'Binary belief hides differences between weak, moderate, and strong confidence.',
      'Public yes-or-no belief can harden into identity protection.',
      'Credences make disagreement more precise.',
      'Action still requires thresholds, but thresholds should not be confused with certainty.',
    ],
    related: [
      pagePath('/start-here', 'Evidence and Confidence'),
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/skills', 'How to Think in Credences'),
    ],
  },
  {
    title: 'Evidence and Confidence',
    path: pagePath('/start-here', 'Evidence and Confidence'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'Confidence should rise and fall with evidence, but evidence reaches us through perception, interpretation, and social context.',
    sections: [
      {
        heading: 'Evidence Is Support, Not Vibe',
        body: [
          'Evidence is whatever should rationally move confidence. It may be direct observation, measurement, testimony, memory, statistical frequency, background theory, expert consensus, or the absence of an expected signal. Evidence is not the same as emotional vividness. A story can feel powerful and still be weak evidence; a base rate can feel dull and still matter enormously.',
          'The discipline of credencing asks whether confidence is scaled to support. The central question is not "Can I tell a story in favor of this?" but "How much should this information move a careful agent?"',
        ],
      },
      {
        heading: 'Confidence Is a Response',
        body: [
          'Confidence is not a virtue by itself. Confidence is admirable only when it is well-calibrated. Underconfidence can prevent action, learning, and justified trust. Overconfidence can produce dogmatism, risk inflation, bad medicine, bad policy, and personal self-deception.',
          'A calibrated agent is not always cautious. Sometimes the evidence really is strong. The aim is not permanent hesitation; the aim is proportion.',
        ],
      },
      {
        heading: 'The Path From Evidence to Credence',
        body: [
          'The model divides the path into two stages. First, objective evidence becomes perceived evidence. This stage can fail through missing data, bad measurement, poor statistical tools, misleading testimony, fear, fatigue, propaganda, or a narrow frame. Second, perceived evidence becomes assigned credence. This stage can fail when the agent knows, at some level, what the evidence indicates but chooses a more comfortable or identity-preserving confidence instead.',
          'This division is the heart of the site. It lets us ask whether a person needs better information, better tools, better incentives, greater courage, or some combination of all four.',
        ],
      },
      {
        heading: 'Evidence Quality and Evidence Direction',
        body: [
          'Evidence has both quality and direction. Direction tells us which claim it supports. Quality tells us how much weight it deserves. A single anecdote, a controlled trial, a replicated meta-analysis, and a coerced confession all point in some direction, but they should not carry the same weight.',
          'Good credencing therefore requires both sensitivity and restraint: sensitivity to the direction of support, restraint about how much confidence the support can bear.',
        ],
      },
    ],
    keyTakeaways: [
      'Evidence is support that should move confidence.',
      'Confidence is good only when calibrated to the support available.',
      'The model separates misperceiving evidence from refusing one’s own perception of evidence.',
      'Evidence has direction and quality; both matter.',
    ],
    related: [
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/start-here', 'What Bayesian Updating Is'),
    ],
  },
  {
    title: 'What Bayesian Updating Is',
    path: pagePath('/start-here', 'What Bayesian Updating Is'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'Bayesian updating is the practice of revising confidence by combining prior expectations with new evidence.',
    sections: [
      {
        heading: 'The Intuition',
        body: [
          'Bayesian updating begins with a modest idea: new evidence should change confidence differently depending on what was already plausible. If a common cause and a rare cause both explain a symptom, the common cause usually deserves more initial weight. If a new observation is much more expected under one hypothesis than another, confidence should move toward the hypothesis that predicted it better.',
          'In everyday language: start with a reasonable prior, ask how expected the evidence is under each live possibility, then update proportionally.',
        ],
      },
      {
        heading: 'Priors Are Not Prejudices',
        body: [
          'A prior is a starting estimate before the newest evidence is considered. Priors can be abused, especially when they are just stereotypes wearing mathematical clothing. But the idea of a prior is unavoidable. Every inquiry begins somewhere: with base rates, background knowledge, past reliability, physical possibility, or the track record of similar claims.',
          'The question is not whether we have priors. The question is whether our priors are explicit, relevant, revisable, and scaled appropriately.',
        ],
      },
      {
        heading: 'Likelihoods Do the Moving',
        body: [
          'The likelihood asks how expected the evidence would be if a hypothesis were true. If a test result is common among people with a disease and rare among people without it, the result moves confidence toward the disease hypothesis. If the result is common in both groups, it should move confidence only a little.',
          'This is why vivid evidence is not automatically strong evidence. Strong evidence discriminates. It helps separate live possibilities.',
        ],
      },
      {
        heading: 'Updating and the Credencing Model',
        body: [
          'Bayesian updating mostly lives in the movement from objective evidence to perceived evidence. It is a deep-rational tool: a way to process support more accurately. But the Credencing model adds a second question. After the update is perceived, does the agent actually assign the credence the update warrants?',
          'A person can understand the math and still refuse the conclusion. That is why the model distinguishes deep rationality from core rationality.',
        ],
      },
    ],
    keyTakeaways: [
      'Bayesian updating combines prior expectations with new evidence.',
      'Priors are unavoidable, but they should be explicit and revisable.',
      'Likelihoods measure how well evidence discriminates among hypotheses.',
      'Bayesian skill does not guarantee the will to believe accordingly.',
    ],
    related: [
      pagePath('/core-ideas', 'Priors'),
      pagePath('/core-ideas', 'Likelihoods'),
      pagePath('/core-ideas', 'Bayesian Updating'),
    ],
  },
  {
    title: 'Why People Go Wrong',
    path: pagePath('/start-here', 'Why People Go Wrong'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'People go wrong through missing evidence, poor tools, distorted perception, social pressure, emotional override, and identity protection.',
    sections: [
      {
        heading: 'There Is More Than One Failure Mode',
        body: [
          'The word "irrational" is too blunt. People can be wrong because they lack information, because they process information badly, because the evidence itself is noisy, because incentives punish accuracy, because fear or hope overrides judgment, or because belonging to a group has become more important than tracking reality.',
          'Credencing treats these as different diagnoses. Different diagnoses imply different repairs.',
        ],
      },
      {
        heading: 'Deep-Rational Failure',
        body: [
          'Deep-rational failure is failure in the tools of perception and inference. The agent may ignore base rates, misunderstand a test, confuse correlation with causation, overread anecdotes, neglect alternative explanations, or fail to notice how selection effects shape the evidence they see.',
          'This kind of failure often calls for education, better measurement, better comparison classes, better statistical habits, and more careful exposure to disconfirming information.',
        ],
      },
      {
        heading: 'Core-Rational Failure',
        body: [
          'Core-rational failure happens when the agent assigns a credence that departs from their own perceived evidence. They may see the weakness of an argument but keep the belief because it protects identity. They may see the strength of an objection but discount it because accepting it would be costly. They may know that a fear is exaggerated but act as if it were certain.',
          'This kind of failure often calls for courage, emotional regulation, social safety, humility, and practices that reduce the cost of changing one mind.',
        ],
      },
      {
        heading: 'The Intellect as Bodyguard',
        body: [
          'One of the most important cases is the biased expert. This person has enough intelligence and training to process evidence well, but uses that capacity defensively. The intellect becomes a bodyguard for a prior commitment. Rather than asking what is true, it asks how the protected belief can survive.',
          'This is why education alone does not guarantee rationality. Better tools can improve tracking, but they can also improve rationalization unless paired with core-rational integrity.',
        ],
      },
    ],
    keyTakeaways: [
      'Wrongness has multiple causes and needs multiple diagnoses.',
      'Deep-rational failure is a failure of tools or perception.',
      'Core-rational failure is a failure to align belief with perceived evidence.',
      'Intelligence can protect bias when it is not joined to epistemic integrity.',
    ],
    related: [
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/case-studies', 'Motivated Reasoning'),
    ],
  },
  {
    title: 'The Difference Between Being Mistaken and Being Epistemically Inconsistent',
    path: pagePath('/start-here', 'The Difference Between Being Mistaken and Being Epistemically Inconsistent'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'A person can be wrong while reasoning in good faith, or correct while reasoning badly; the model keeps these cases separate.',
    sections: [
      {
        heading: 'Mistakes Are Not Always Irrational',
        body: [
          'A person is mistaken when their belief does not match reality. But a mistake is not automatically a rational failure. If the available evidence was misleading, if the base rates were unknown, or if the agent reasonably trusted a source that later turned out to be wrong, the agent may have been epistemically responsible even while false.',
          'This is why the model does not equate truth with rationality. Rationality concerns the relationship between evidence, perception, and assigned confidence.',
        ],
      },
      {
        heading: 'Epistemic Inconsistency',
        body: [
          'Epistemic inconsistency occurs when assigned credence does not match perceived evidence. The agent need not be omniscient. The key question is internal: given what the agent actually takes the evidence to show, do they assign a confidence that follows from it?',
          'Someone can be epistemically inconsistent while accidentally correct. They may believe a true claim for bad reasons, or assign certainty where their own evidence supports only a cautious lean. Luck does not make the credencing process healthy.',
        ],
      },
      {
        heading: 'Why This Distinction Matters Diagnostically',
        body: [
          'Without this distinction, we misjudge people. We treat sincere error as dishonesty, or we excuse motivated belief because the conclusion happens to be popular or true. The model encourages a more careful posture: ask what evidence was available, how the person perceived it, and whether their final confidence honored that perception.',
          'This is especially important in public debate. A community that cannot distinguish error from bad faith will punish learning and reward performance.',
        ],
      },
      {
        heading: 'How the Interactive Model Shows It',
        body: [
          'In the lab, a gap between Objective Evidence (E0) and Perceived Evidence (EP) represents error in perception or processing. A gap between Perceived Evidence (EP) and Assigned Credence (CA) represents core irrationality: the doxastic gap. The first may be innocent, negligent, or unavoidable depending on context. The second points more directly to integrity, pressure, fear, or identity.',
        ],
      },
    ],
    keyTakeaways: [
      'Being false is not the same as being irrational.',
      'Epistemic inconsistency is a mismatch between perceived evidence and assigned credence.',
      'A person can be responsibly mistaken or irresponsibly correct.',
      'The Objective Evidence to Perceived Evidence gap (E0-EP) and Perceived Evidence to Assigned Credence gap (EP-CA) diagnose different problems.',
    ],
    related: [
      pagePath('/core-ideas', 'Calculation Error (DE)'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/interactive-lab', 'How to Read the Model'),
    ],
  },
  {
    title: 'Where to Go Next',
    path: pagePath('/start-here', 'Where to Go Next'),
    groupTitle: 'Start Here',
    groupPath: '/start-here',
    summary: 'A suggested path through the site: learn the vocabulary, use the model, study failures, practice skills, and apply the framework.',
    sections: [
      {
        heading: 'The Recommended Sequence',
        body: [
          'The site is designed as a web, but the first pass is best taken in sequence. Start with the core ideas, then move to the interactive lab, then use case studies to see the model under pressure. After that, the skills and applications sections become more useful because the vocabulary is already in place.',
          'The point is not to memorize labels. The point is to develop a habit of asking: what is the evidence, how is it being perceived, what credence is being assigned, and where might the gap be opening?',
        ],
        bullets: [
          'Core Ideas gives the vocabulary.',
          'Interactive Lab gives the structure a visual form.',
          'Case Studies show the recurring failure patterns.',
          'Skills turn the framework into habits.',
          'Applications move from individual reasoning to institutions and public life.',
        ],
      },
      {
        heading: 'If You Are Here for Personal Reasoning',
        body: [
          'Begin with confidence levels, calibration, uncertainty, and the skill guides. The practical payoff is learning how to say "I am not sure" with precision rather than embarrassment. Many personal decisions improve when confidence is scaled instead of dramatized.',
        ],
      },
      {
        heading: 'If You Are Here for Public Argument',
        body: [
          'Begin with motivated reasoning, political tribalism, journalism, public debate, and institutional diagnostics. The model is useful for spotting when arguments are not really about evidence anymore, but about identity maintenance, coalition pressure, or fear of social loss.',
        ],
      },
      {
        heading: 'If You Are Here for the Formal Model',
        body: [
          'Go to the interactive lab, read the formalization panel, then move into Objective Evidence, Perceived Evidence, Assigned Credence, Deep Rationality, Core Rationality, Calculation Error, and Core Irrationality. Those pages form the technical spine of the project.',
        ],
      },
    ],
    keyTakeaways: [
      'The site can be read sequentially or used as a reference web.',
      'The first path is vocabulary, model, failures, skills, applications.',
      'The same framework can serve personal reasoning, public debate, and formal analysis.',
      'Every section returns to the same central gaps: E0 to EP, and EP to CA.',
    ],
    related: [
      '/core-ideas',
      '/interactive-lab',
      '/site-map',
    ],
  },
];

function corePage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/core-ideas', title),
    groupTitle: 'Core Ideas',
    groupPath: '/core-ideas',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const coreIdeasPages: ContentPage[] = [
  corePage(
    'Credences',
    'Credences are graded confidence assignments: the basic unit of the whole project.',
    [
      {
        heading: 'A Credence Is a Degree of Confidence',
        body: [
          'A credence is a quantified or at least ordered degree of belief. It says not merely whether a claim is accepted, but how strongly it is held. The difference between 0.51 and 0.95 is not cosmetic; it changes how one should argue, act, defer, investigate, and update.',
          'Credences can be expressed numerically, verbally, or comparatively. The important point is that confidence should have shape. "I lean yes," "I am nearly certain," and "I assign about 70 percent confidence" are all attempts to make the weight of belief visible.',
        ],
      },
      {
        heading: 'Credences Connect Evidence to Action',
        body: [
          'Credences sit between evidence and action. Evidence informs confidence; confidence informs thresholds for action. A physician, voter, researcher, judge, or partner may face a practical decision, but the decision should not erase the underlying uncertainty.',
          'Good credencing lets a person say: this is my confidence, this is why, this is what would move it, and this is the action threshold I am using under these stakes.',
        ],
      },
      {
        heading: 'Credences in the Model',
        body: [
          'In the interactive model, Assigned Credence is the final confidence the agent adopts. It may track perceived evidence closely, or it may drift away under pressure from fear, desire, identity, or group loyalty.',
          'That drift is the core diagnostic target of the project. A person who perceives 0.55 evidence but assigns 0.95 confidence is not merely confident; they are overstepping their own evidential position.',
        ],
      },
    ],
    [
      'Credences are graded beliefs.',
      'They preserve distinctions hidden by binary belief language.',
      'Assigned Credence is the final belief weight adopted by the agent.',
    ],
    [
      pagePath('/start-here', 'What Is Credencing?'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/skills', 'How to Think in Credences'),
    ],
  ),
  corePage(
    'Evidence',
    'Evidence is support that should move confidence when interpreted through reliable methods.',
    [
      {
        heading: 'Evidence Is What Bears on a Claim',
        body: [
          'Evidence is not the same as whatever feels persuasive. Evidence is information that should rationally affect confidence in a claim. It can include observation, measurement, testimony, memory, experiment, background theory, statistical frequency, expert convergence, and the absence of a signal that should have appeared.',
          'The same item can be strong evidence in one context and weak evidence in another. A single vivid story may matter when the claim is about one person, but it may be nearly useless when the claim is about a population.',
        ],
      },
      {
        heading: 'Evidence Has Weight and Direction',
        body: [
          'Direction asks which hypothesis the evidence favors. Weight asks how much it should move credence. People often notice direction while exaggerating weight: they find something that points their way and treat it as decisive.',
          'Credencing requires both questions. Does this support the claim? How strongly? Compared with what alternatives? Under what assumptions? With what error rate?',
        ],
      },
      {
        heading: 'Evidence in the Model',
        body: [
          'Objective Evidence (E0) represents the evidential situation as it stands apart from the agent. Perceived Evidence (EP) represents what the agent takes that evidence to show. The gap between them is a measure of evidential misperception or processing error.',
          'The model therefore does not assume that evidence reaches the mind cleanly. It passes through attention, incentives, framing, memory, statistical skill, and social context.',
        ],
      },
    ],
    [
      'Evidence is rational support, not emotional force.',
      'Evidence has both direction and weight.',
      'The Objective Evidence to Perceived Evidence gap (E0-EP) captures errors in perceiving or processing evidence.',
    ],
    [
      pagePath('/start-here', 'Evidence and Confidence'),
      pagePath('/core-ideas', 'Objective Evidence (E0)'),
      pagePath('/core-ideas', 'Perceived Evidence (EP)'),
    ],
  ),
  corePage(
    'Confidence Levels',
    'Confidence levels name the strength of a credence and help prevent certainty from arriving too cheaply.',
    [
      {
        heading: 'Confidence Is Not a Mood',
        body: [
          'Confidence often feels like an internal intensity, but epistemically it should be a relation between a claim and its support. A calm person can be overconfident; an anxious person can be correct. The feeling of certainty is not the same as warrant for certainty.',
          'A confidence level should answer a practical question: how much risk of being wrong am I implicitly accepting by holding or acting on this belief?',
        ],
      },
      {
        heading: 'Useful Ranges',
        body: [
          'Low confidence marks live uncertainty. Moderate confidence permits leaning without closure. High confidence permits strong action but should remain updateable. Near certainty should be rare and reserved for claims with overwhelming support, definitional truths, or extremely stable background knowledge.',
          'The model encourages this range-sensitive language because many failures come from using high-confidence behavior on medium-confidence evidence.',
        ],
      },
      {
        heading: 'Confidence and Stakes',
        body: [
          'The same confidence level can justify different actions under different stakes. A 70 percent credence may justify bringing an umbrella, but not convicting someone of a crime. Credence and decision threshold are related but distinct.',
          'Keeping that distinction visible prevents a common error: pretending to be more certain than one is because action is required.',
        ],
      },
    ],
    [
      'Confidence should track warrant, not emotional intensity.',
      'Different confidence ranges license different attitudes.',
      'Action thresholds vary with stakes.',
    ],
    [
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/skills', 'How to Scale Confidence to Evidence'),
    ],
  ),
  corePage(
    'Priors',
    'Priors are starting credences formed from base rates, background knowledge, and previous evidence.',
    [
      {
        heading: 'Every Inquiry Starts Somewhere',
        body: [
          'A prior is the confidence assigned before considering the newest evidence. Priors may come from base rates, causal knowledge, track records, known mechanisms, or the frequency of similar events. They are unavoidable because no mind receives evidence from nowhere.',
          'The danger is not having priors. The danger is hiding them, freezing them, or smuggling prejudice into them.',
        ],
      },
      {
        heading: 'Good and Bad Priors',
        body: [
          'A good prior is relevant, explicit, proportionate, and revisable. It says, "Before this new evidence, here is what similar cases led me to expect." A bad prior is rigid, identity-protective, or selected only because it favors the desired conclusion.',
          'Base rates are often the most neglected priors. People prefer stories about this case, but this case belongs to some class, and the history of that class matters.',
        ],
      },
      {
        heading: 'Priors and Updating',
        body: [
          'Bayesian updating does not let the prior dominate forever. Strong evidence can overwhelm a skeptical prior; weak evidence may barely move a strong one. The art is in letting prior and evidence interact without allowing either to become tyrannical.',
        ],
      },
    ],
    [
      'Priors are unavoidable starting points.',
      'Good priors are explicit, relevant, and revisable.',
      'Base rates are among the most important priors.',
    ],
    [
      pagePath('/start-here', 'What Bayesian Updating Is'),
      pagePath('/core-ideas', 'Bayesian Updating'),
      pagePath('/case-studies', 'Base-Rate Neglect'),
    ],
  ),
  corePage(
    'Likelihoods',
    'Likelihoods measure how expected the evidence is under different hypotheses.',
    [
      {
        heading: 'The Discrimination Question',
        body: [
          'A likelihood asks: if this hypothesis were true, how expected would this evidence be? Evidence is powerful when it discriminates among hypotheses. If the evidence is equally expected whether a claim is true or false, it should not move confidence much.',
          'This is a central reason vividness misleads. Vivid evidence can feel important while failing to distinguish between competing explanations.',
        ],
      },
      {
        heading: 'Comparative Thinking',
        body: [
          'Likelihoods are comparative. A symptom, document, behavior, experiment, or testimony must be compared across live possibilities. How likely is it under H1? Under H2? Under mundane alternatives? Under error, fraud, noise, coincidence, or selection effects?',
          'Good reasoning often improves simply by adding the missing comparison class.',
        ],
      },
      {
        heading: 'Likelihoods in Credencing',
        body: [
          'Likelihood reasoning improves Deep Rationality because it sharpens the path from E0 to EP. It helps the agent perceive what the evidence actually supports rather than merely noticing that something happened.',
        ],
      },
    ],
    [
      'Likelihoods ask how expected evidence is under a hypothesis.',
      'Strong evidence discriminates between live possibilities.',
      'Likelihood reasoning improves perception of evidential weight.',
    ],
    [
      pagePath('/core-ideas', 'Priors'),
      pagePath('/core-ideas', 'Posteriors'),
      pagePath('/skills', 'How to Read Likelihoods'),
    ],
  ),
  corePage(
    'Posteriors',
    'Posteriors are updated credences after priors and new evidence have been brought together.',
    [
      {
        heading: 'The Result of Updating',
        body: [
          'A posterior is the confidence one should hold after considering new evidence. It is not merely the prior, and it is not merely the new evidence. It is the result of their interaction.',
          'In informal reasoning, a posterior is the answer to: after seeing this, where should my confidence now land?',
        ],
      },
      {
        heading: 'Why Posteriors Matter',
        body: [
          'Posteriors matter because inquiry is sequential. Today posterior becomes tomorrow prior. If updates are too dramatic, belief becomes unstable. If updates are too small, belief becomes stubborn. Good credencing seeks responsiveness without volatility.',
        ],
      },
      {
        heading: 'Posterior vs Assigned Credence',
        body: [
          'The posterior is the credence warranted by the update. Assigned Credence (CA) is what the agent actually adopts. In an ideal case, they match. When they diverge, the model asks whether some core-rational force is overriding the update.',
        ],
      },
    ],
    [
      'Posteriors are updated confidence levels.',
      'Good updating is responsive without being erratic.',
      'The warranted posterior may diverge from the agent actual assigned credence.',
    ],
    [
      pagePath('/core-ideas', 'Bayesian Updating'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
    ],
  ),
  corePage(
    'Bayesian Updating',
    'Bayesian updating is the disciplined revision of credence in light of new evidence.',
    [
      {
        heading: 'The Basic Movement',
        body: [
          'Bayesian updating moves from prior confidence through new evidence to posterior confidence. The direction and size of the movement depend on how strongly the evidence favors one hypothesis over alternatives.',
          'The formal mathematics can be precise, but the practical habit is already valuable: start with base rates, compare likelihoods, update proportionally.',
        ],
      },
      {
        heading: 'Common Updating Errors',
        body: [
          'People often update too much from vivid anecdotes, too little from statistical evidence, too much from identity-confirming information, and too little from disconfirming information. They also ignore the prior when the new evidence feels dramatic.',
          'These are not merely math errors. They often reflect the entanglement of Deep Rationality and Core Rationality: weak tools mixed with protective motivation.',
        ],
      },
      {
        heading: 'Updating as a Discipline',
        body: [
          'Updating is not a one-time concession. It is a posture of continued answerability. The rational agent remains available to evidence, but not gullible before every new signal.',
        ],
      },
    ],
    [
      'Updating moves from prior to posterior through evidence.',
      'Evidence should move confidence proportionally.',
      'Good updating is open but not gullible.',
    ],
    [
      pagePath('/start-here', 'What Bayesian Updating Is'),
      pagePath('/core-ideas', 'Priors'),
      pagePath('/core-ideas', 'Posteriors'),
    ],
  ),
  corePage(
    'Calibration',
    'Calibration is the fit between confidence levels and actual reliability.',
    [
      {
        heading: 'What Calibration Means',
        body: [
          'A person is well calibrated when their confidence levels match reality over time. Claims held at 70 percent confidence should be true roughly 70 percent of the time. Calibration does not mean always being right; it means knowing how right one tends to be.',
        ],
      },
      {
        heading: 'Overconfidence and Underconfidence',
        body: [
          'Overconfidence assigns more certainty than the evidence warrants. Underconfidence assigns less. Both are failures of proportion. Overconfidence tends to produce dogmatism; underconfidence can produce paralysis, false humility, or chronic deference.',
        ],
      },
      {
        heading: 'Calibration in the Model',
        body: [
          'Calibration supports both Deep and Core Rationality. Deep Rationality improves the accuracy of perceived evidence. Core Rationality keeps assigned credence from inflating or deflating for non-evidential reasons.',
        ],
      },
    ],
    [
      'Calibration is confidence matched to reliability.',
      'Both overconfidence and underconfidence are distortions.',
      'Calibration requires skill and honesty.',
    ],
    [
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/skills', 'How to Detect Overconfidence'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
    ],
  ),
  corePage(
    'Uncertainty',
    'Uncertainty is not a defect in reasoning; it is often the honest shape of limited evidence.',
    [
      {
        heading: 'Uncertainty as Information',
        body: [
          'Uncertainty tells us something about the state of support. It may reflect missing data, noisy evidence, live alternatives, weak methods, high stakes, or genuine complexity in the world. Treating all uncertainty as failure encourages fake confidence.',
        ],
      },
      {
        heading: 'Healthy vs Evasive Uncertainty',
        body: [
          'Healthy uncertainty is specific: it can say what is unknown, what would help, and which possibilities remain live. Evasive uncertainty is fog used as shelter: it refuses proportion even when the evidence is strong enough to lean.',
        ],
      },
      {
        heading: 'Uncertainty and Action',
        body: [
          'Action under uncertainty is normal. The question is not whether uncertainty remains, but whether the action threshold has been met. Credencing makes that threshold visible rather than disguising action as certainty.',
        ],
      },
    ],
    [
      'Uncertainty can be rational and informative.',
      'Healthy uncertainty is specific and updateable.',
      'Action may be justified before certainty arrives.',
    ],
    [
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
    ],
  ),
  corePage(
    'Warranted Uncertainty',
    'Warranted uncertainty is the range of doubt an agent is entitled to given their evidence and rational skill.',
    [
      {
        heading: 'Not All Spread Is Failure',
        body: [
          'The model allows a range of reasonable credence around perceived evidence. A person with weaker tools or noisier evidence may be warranted in a wider range of uncertainty. Rationality is not a demand for artificial sharpness.',
        ],
      },
      {
        heading: 'The Omega Range',
        body: [
          'In the interactive chart, omega represents warranted uncertainty as a visual angle around Perceived Evidence (EP). As Deep Rationality increases, the warranted spread narrows: better tools reduce fog. As Deep Rationality decreases, the range widens: the agent should be less precise because their optics are less reliable.',
          'The dashboard expresses the same idea as warranted slack: a probability-scale allowance before a raw Perceived Evidence to Assigned Credence gap (EP-CA) is treated as excess misalignment.',
        ],
      },
      {
        heading: 'Slack Before Blame',
        body: [
          'Warranted uncertainty also creates diagnostic slack. If Assigned Credence (CA) differs modestly from Perceived Evidence (EP), but the case is noisy and the agent has limited skill, the model should not immediately treat the gap as excess misalignment.',
          'The improved model therefore distinguishes Core Irrationality (the raw EP-CA distance) from Excess Core Irrationality, the part of that distance that remains after warranted uncertainty is allowed.',
        ],
      },
      {
        heading: 'When Uncertainty Becomes Cover',
        body: [
          'Uncertainty becomes suspect when the agent uses it selectively. If uncertainty is invoked only to resist unwelcome evidence, but disappears when the evidence supports a favored conclusion, it is no longer humility. It is core-rational evasion.',
        ],
      },
    ],
    [
      'Some uncertainty is warranted by limited evidence or tools.',
      'Omega models the reasonable spread around perceived evidence.',
      'Warranted uncertainty creates diagnostic slack before blame.',
      'Selective uncertainty can become motivated evasion.',
    ],
    [
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/core-ideas', 'Diagnostic Safeguards'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
    ],
  ),
  corePage(
    'Objective Evidence (E0)',
    'Objective Evidence is the evidential support available in the world before an agent interprets it.',
    [
      {
        heading: 'The Target',
        body: [
          'Objective Evidence (E0) is the model target: the support that exists independent of a particular agent perception. It is not omniscience, and it is not always directly accessible. It represents the evidential reality the agent is trying to track.',
        ],
      },
      {
        heading: 'Why E0 Matters',
        body: [
          'Without E0, all we have are perspectives. The model needs a target because some interpretations are better than others. Evidence can be missed, distorted, hidden, or misunderstood. E0 gives us a way to talk about those failures.',
        ],
      },
      {
        heading: 'Humility About E0',
        body: [
          'E0 is often estimated rather than possessed. In real life, no person usually holds the whole evidential field. The model therefore uses E0 as a conceptual anchor, not a claim that any observer has perfect access.',
        ],
      },
    ],
    [
      'E0 is the evidential target in the world.',
      'It allows us to distinguish better and worse perception.',
      'E0 is often estimated, not directly possessed.',
    ],
    [
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/core-ideas', 'Perceived Evidence (EP)'),
      pagePath('/core-ideas', 'Calculation Error (DE)'),
    ],
  ),
  corePage(
    'Perceived Evidence (EP)',
    'Perceived Evidence is what the agent takes the evidence to show after interpretation.',
    [
      {
        heading: 'The Lens',
        body: [
          'Perceived Evidence (EP) is the agent’s internal read on the evidence. It is not merely raw sensation. It includes attention, memory, testimony, statistical interpretation, social framing, and background assumptions.',
        ],
      },
      {
        heading: 'Why Perception Diverges',
        body: [
          'EP can diverge from E0 because data are missing, tools are weak, incentives distort attention, or the environment manipulates what is visible. Propaganda, gaslighting, selection effects, and poor measurement all operate at this stage.',
        ],
      },
      {
        heading: 'EP and Responsibility',
        body: [
          'A distorted EP may or may not reflect avoidant processing. The agent may have had no access to better information, or they may have avoided it. This is why the model separates structural diagnosis from responsibility assessment.',
        ],
      },
    ],
    [
      'EP is the agent’s internal reading of the evidence.',
      'It can diverge from E0 through many mechanisms.',
      'A bad EP is not automatically bad faith.',
    ],
    [
      pagePath('/core-ideas', 'Objective Evidence (E0)'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
    ],
  ),
  corePage(
    'Assigned Credence (CA)',
    'Assigned Credence is the final confidence level an agent actually adopts.',
    [
      {
        heading: 'The Belief Anchor',
        body: [
          'Assigned Credence (CA) is where the agent finally anchors belief. It is the confidence they live with, argue from, and act upon. In a well-aligned state, Assigned Credence (CA) tracks Perceived Evidence (EP) closely.',
        ],
      },
      {
        heading: 'Why CA Drifts',
        body: [
          'CA can drift from EP when desire, fear, identity, loyalty, trauma, incentives, or public commitment pull confidence away from what the agent takes the evidence to show. This is the domain of Core Rationality.',
        ],
      },
      {
        heading: 'CA Is the Site of Integrity',
        body: [
          'The model treats CA as diagnostically important because it reveals whether the agent honors their own perception. A person cannot always control E0, and may only partly control EP, but the adoption of credence is where epistemic integrity becomes visible.',
        ],
      },
    ],
    [
      'CA is the final confidence an agent adopts.',
      'CA should normally track perceived evidence.',
      'A gap between Perceived Evidence (EP) and Assigned Credence (CA) reveals core-rational pressure.',
    ],
    [
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/start-here', 'The Difference Between Being Mistaken and Being Epistemically Inconsistent'),
    ],
  ),
  corePage(
    'Deep Rationality (SD)',
    'Deep Rationality is the skill dimension: the quality of the agent inferential tools.',
    [
      {
        heading: 'The Skill Axis',
        body: [
          'Deep Rationality (SD) refers to the agent’s ability to process evidence well. It includes statistical literacy, causal reasoning, Bayesian updating, comparison of hypotheses, base-rate sensitivity, and awareness of bias-producing structures.',
        ],
      },
      {
        heading: 'What SD Improves',
        body: [
          'Higher Deep Rationality (SD) narrows the gap between Objective Evidence (E0) and Perceived Evidence (EP). Better tools do not guarantee truth, but they improve the odds that the agent perceived evidence resembles the evidential situation.',
        ],
      },
      {
        heading: 'The Limit of Skill',
        body: [
          'Skill alone is not enough. A person may be statistically sophisticated and still use that sophistication defensively. Deep Rationality improves perception; Core Rationality governs whether the agent follows that perception honestly.',
        ],
      },
    ],
    [
      'SD is the rational skill dimension.',
      'It improves the Objective Evidence to Perceived Evidence relationship (E0-EP).',
      'Skill can serve truth or rationalization depending on core integrity.',
    ],
    [
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/core-ideas', 'Calculation Error (DE)'),
      pagePath('/interactive-lab', 'Biased Expert'),
    ],
  ),
  corePage(
    'Core Rationality',
    'Core Rationality is the integrity dimension: the willingness to assign credence according to perceived evidence.',
    [
      {
        heading: 'The Will Axis',
        body: [
          'Core Rationality concerns whether the agent believes according to what they take the evidence to show. It is not about having perfect tools. It is about refusing to let comfort, tribe, fear, or identity dictate the final credence.',
        ],
      },
      {
        heading: 'Good Faith',
        body: [
          'A core-rational agent can be mistaken. What makes them core-rational is that they are tethered to their perceived evidence. They do not knowingly inflate, deflate, or redirect belief to protect a preferred self-image.',
        ],
      },
      {
        heading: 'Why Core Rationality Is Hard',
        body: [
          'Core Rationality is hard because evidence often threatens belonging, status, plans, and identity. It asks not merely "Can you see?" but "Will you follow what you see?"',
        ],
      },
    ],
    [
      'Core Rationality is integrity in assigned credence.',
      'It concerns the Perceived Evidence to Assigned Credence relationship (EP-CA).',
      'A core-rational agent can still be honestly mistaken.',
    ],
    [
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/skills', 'How to Detect Motivated Override'),
    ],
  ),
  corePage(
    'Calculation Error (DE)',
    'Calculation Error is the distance between objective evidence and perceived evidence.',
    [
      {
        heading: 'The Objective Evidence to Perceived Evidence Gap (E0-EP)',
        body: [
          'Calculation Error (DE) measures the distance between Objective Evidence (E0) and Perceived Evidence (EP). It is the gap between the evidential situation and the agent’s internal representation of that situation.',
        ],
      },
      {
        heading: 'Sources of Calculation Error',
        body: [
          'Calculation Error can arise from missing information, poor measurement, weak priors, base-rate neglect, bad likelihood comparisons, misleading testimony, propaganda, or limited cognitive skill.',
          'Not all calculation error is culpable. Sometimes the world is simply hard to read.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repairing Calculation Error (DE) usually means improving Deep Rationality (SD) or improving access to evidence: better tools, better data, better comparison classes, better feedback, and less distorted information environments.',
        ],
      },
    ],
    [
      'Calculation Error (DE) is the Objective Evidence to Perceived Evidence gap (E0-EP).',
      'It diagnoses perceptual or inferential error.',
      'It is repaired through tools, data, and feedback.',
    ],
    [
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/core-ideas', 'Objective Evidence (E0)'),
      pagePath('/case-studies', 'Medical Testing'),
    ],
  ),
  corePage(
    'Core Irrationality (IC)',
    'Core Irrationality is the distance between perceived evidence and assigned credence.',
    [
      {
        heading: 'The Perceived Evidence to Assigned Credence Gap (EP-CA)',
        body: [
          'Core Irrationality (IC) measures the gap between what the agent takes the evidence to show and what they actually believe. It is the doxastic gap: a failure of alignment between perception and commitment.',
        ],
      },
      {
        heading: 'Why It Matters',
        body: [
          'Core Irrationality (IC) is especially important because it marks a different kind of failure from ignorance. A high-IC agent is not merely missing information; they are assigning confidence against their own evidential perception.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repairing Core Irrationality (IC) requires more than information. It may require lowering identity threat, improving emotional regulation, making revision socially survivable, and practicing honesty about uncertainty.',
        ],
      },
    ],
    [
      'Core Irrationality (IC) is the Perceived Evidence to Assigned Credence gap (EP-CA).',
      'It diagnoses motivated or integrity-related distortion.',
      'It often requires courage and social repair, not only more facts.',
    ],
    [
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/core-ideas', 'Diagnostic Safeguards'),
      pagePath('/core-ideas', 'Epistemic Akrasia'),
    ],
  ),
  corePage(
    'Diagnostic Safeguards',
    'Diagnostic safeguards prevent the model from turning every gap into an accusation.',
    [
      {
        heading: 'Raw Gap vs Warranted Diagnosis',
        body: [
          'The model should distinguish a raw Perceived Evidence to Assigned Credence gap (EP-CA) from a warranted diagnosis of Core Irrationality. A raw gap is evidence that something deserves attention. It is not yet proof of bad faith.',
          'The improved interactive model therefore tracks Excess Core Irrationality: the portion of the EP-CA gap that remains after allowing for warranted uncertainty. This keeps the model from treating every small deviation, noisy estimate, or high-uncertainty case as excess misalignment.',
        ],
      },
      {
        heading: 'The Responsibility Filter',
        body: [
          'Before moving from diagnosis to blame, ask four questions. Did the agent have access to better evidence? Did they have the skill and time to process it? Were there emotional, institutional, or social pressures distorting the update? Did they resist repair once the problem became visible?',
          'This filter preserves the project’s central distinction. It still holds people accountable for motivated override, but it avoids treating ignorance, trauma, manipulation, fatigue, or poor evidence access as if they were all the same thing.',
        ],
      },
      {
        heading: 'Action Thresholds Are Separate',
        body: [
          'Credence is not the same as action. A person may rationally act before certainty when stakes are high, delay action when costs are high, or keep investigating when the evidence is not yet decision-ready.',
          'The model is strongest when it separates three questions: what confidence is warranted, what confidence the agent assigns, and what action threshold the situation requires.',
        ],
      },
      {
        heading: 'Use With Diagnostic Humility',
        body: [
          'Because Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD) are often estimates, the model should report diagnostic confidence as well as diagnostic type.',
          'The safest use is comparative: which gap appears largest, which repair would reduce it, and what observation would change the diagnosis?',
        ],
      },
    ],
    [
      'A raw gap is evidence for inquiry, not automatic blame.',
      'Excess Core Irrationality is the gap that remains beyond warranted uncertainty.',
      'Responsibility depends on access, skill, pressure, and willingness to repair.',
      'Credence and action thresholds should be kept separate.',
    ],
    [
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
    ],
  ),
  corePage(
    'Epistemic Akrasia',
    'Epistemic akrasia is believing against one’s own perceived evidence.',
    [
      {
        heading: 'Weakness of Epistemic Will',
        body: [
          'Akrasia is acting against one better judgment. Epistemic akrasia is the belief-forming analogue: assigning a credence that conflicts with what one takes the evidence to warrant.',
        ],
      },
      {
        heading: 'Everyday Forms',
        body: [
          'A person may know a fear is exaggerated but treat it as likely. They may know a source is unreliable but believe it because it flatters their group. They may see that an objection is strong but keep repeating the weaker argument.',
        ],
      },
      {
        heading: 'Relation to Core Irrationality (IC)',
        body: [
          'Epistemic akrasia is one way Core Irrationality appears from the inside. Core Irrationality (IC) is the measurable gap; akrasia is the lived experience of not following one’s own evidential sense.',
        ],
      },
    ],
    [
      'Epistemic akrasia is believing against perceived evidence.',
      'It is a core-rational failure.',
      'It often feels like fear, loyalty, or identity overriding judgment.',
    ],
    [
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/skills', 'How to Detect Motivated Override'),
      pagePath('/case-studies', 'Fear Overrides'),
    ],
  ),
  corePage(
    'Core vs Deep Rationality',
    'Core vs Deep Rationality separates integrity of belief from skill in evidence processing.',
    [
      {
        heading: 'Two Axes, Not One Scale',
        body: [
          'The central distinction of the project is that rationality has at least two separable dimensions. Deep Rationality concerns the skill of seeing. Core Rationality concerns the integrity of believing according to what one sees.',
        ],
      },
      {
        heading: 'Why the Distinction Helps',
        body: [
          'The distinction prevents two errors. First, it prevents blaming honest novices as if every mistake were bad faith. Second, it prevents excusing biased experts as rational simply because they are intelligent.',
        ],
      },
      {
        heading: 'The Four Quadrants',
        body: [
          'High Deep and high Core gives the ideal agent. Low Deep and high Core gives the honest novice. High Deep and low Core gives the biased expert. Low Deep and low Core gives epistemic delusion or collapse, depending on the case.',
        ],
      },
    ],
    [
      'Deep Rationality is skill; Core Rationality is integrity.',
      'The distinction protects both charity and accountability.',
      'The archetypes emerge from combinations of the two axes.',
    ],
    [
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/core-ideas', 'Epistemic Archetypes'),
    ],
  ),
  corePage(
    'Epistemic Archetypes',
    'Epistemic archetypes are recurring patterns formed by different alignments of skill, perception, and belief.',
    [
      {
        heading: 'Why Archetypes',
        body: [
          'Archetypes make the model memorable. They are not permanent identities or diagnoses of whole persons. They are local patterns in a given belief state.',
        ],
      },
      {
        heading: 'The Main Four',
        body: [
          'The ideal agent has high skill and high integrity. The honest novice has limited tools but good faith. The biased expert has strong tools but uses them defensively. The epistemic delusion pattern shows severe detachment between credence and evidence.',
        ],
      },
      {
        heading: 'Use With Care',
        body: [
          'The archetypes are meant to diagnose belief states, not insult people. A person may be an honest novice in medicine, a biased expert in politics, and an ideal agent in a narrow professional specialty.',
        ],
      },
    ],
    [
      'Archetypes describe patterns, not permanent identities.',
      'They arise from Core and Deep Rationality combinations.',
      'They should be used diagnostically, not as insults.',
    ],
    [
      pagePath('/interactive-lab', 'Ideal Agent'),
      pagePath('/interactive-lab', 'Honest Novice'),
      pagePath('/interactive-lab', 'Biased Expert'),
    ],
  ),
];

function bayesPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/bayes-theorem', title),
    groupTitle: 'Bayes Theorem',
    groupPath: '/bayes-theorem',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const bayesPages: ContentPage[] = [
  bayesPage(
    'Bayes Theorem Overview',
    'Bayes theorem is a disciplined way to revise confidence when evidence arrives.',
    [
      {
        heading: 'The Question Bayes Answers',
        body: [
          'Bayes theorem answers a simple but deep question: after seeing some evidence, how confident should I now be in a hypothesis?',
          'It is not a machine for turning weak evidence into certainty. It is a rule for updating. It tells you how to combine your starting confidence with the diagnostic strength of new evidence.',
        ],
      },
      {
        heading: 'The Everyday Shape',
        body: [
          'You already use a rough version of Bayes when you revise expectations. If a reliable friend says the train is delayed, your confidence rises. If a stranger with no source says the same thing, your confidence may barely move.',
          'The difference is not just the claim. It is how expected that report would be if the train really were delayed, how often such reports are false, and what you already knew about the train system.',
        ],
      },
      {
        heading: 'Why It Matters for Credencing',
        body: [
          'Credencing asks whether confidence is proportional to evidence. Bayes theorem gives one powerful account of proportionality: confidence should move by the strength of the evidence, not by fear, vividness, loyalty, or wishful thinking.',
          'In the Credencing model, Bayesian reasoning mainly improves Deep Rationality (SD): it helps the agent move from Objective Evidence (E0) toward a better Perceived Evidence (EP). Core Rationality then asks whether Assigned Credence (CA) actually follows that improved perception.',
        ],
      },
    ],
    [
      'Bayes theorem updates confidence after evidence.',
      'It combines prior confidence with the diagnostic strength of evidence.',
      'It improves the evidence-processing side of credencing.',
      'It does not remove the need for honesty about the final assigned credence.',
    ],
    [
      pagePath('/bayes-theorem', 'The Formula'),
      pagePath('/core-ideas', 'Bayesian Updating'),
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
    ],
  ),
  bayesPage(
    'The Formula',
    'The formula explains how to update confidence in a possible explanation after you notice a clue or piece of evidence.',
    [
      {
        heading: 'What H and E Mean',
        body: [
          'H means hypothesis. A hypothesis is the possible explanation you are checking. In everyday language, H means “maybe this is what is going on.”',
          'E means evidence. Evidence is the clue, observation, test result, report, or fact you just noticed. In everyday language, E means “this is the new thing I have learned.”',
          'So P(H|E) means: how confident should I be that H is true after seeing E? The vertical bar means “given” or “after taking into account.” Read P(H|E) as “the probability of H, given E.”',
        ],
      },
      {
        heading: 'The Formula in Ordinary Words',
        body: [
          'Bayes theorem says: start with how likely your explanation seemed before the clue, then ask how strongly the clue points toward that explanation rather than other explanations.',
          'P(H) is your starting confidence. P(E|H) asks: if H were true, would I expect to see this evidence? P(E) asks: how common or expected is this evidence overall, including under other explanations?',
          'The answer, P(H|E), is your updated confidence. It is where your belief should land after the new evidence is considered.',
        ],
      },
      {
        heading: 'The Four Questions',
        body: [
          'You do not need to do algebra every time. For ordinary thinking, use four questions.',
          'First: What explanation am I checking? That is H. Second: What clue or observation did I notice? That is E. Third: would this clue be expected if my explanation were true? Fourth: would this clue also be expected if some other explanation were true?',
          'The last question is crucial. A clue is not strong just because it fits your favorite explanation. It is strong when it fits your explanation much better than it fits the alternatives.',
        ],
      },
      {
        heading: 'Everyday Example: A Friend Is Late',
        body: [
          'H: my friend is stuck in traffic. E: my friend texts, “Running 20 minutes late.”',
          'Before the text, traffic might have been only one possible explanation. Maybe they forgot, maybe they are still getting ready, maybe public transit failed. After the text, traffic becomes more likely if the friend is reliable and the roads are often congested at that time.',
          'But the text is not perfect proof. People sometimes say “traffic” when they left late. Bayes-style thinking keeps you from jumping straight from one clue to total certainty.',
        ],
      },
      {
        heading: 'Everyday Example: A Medical Test',
        body: [
          'H: I have the condition. E: the test came back positive.',
          'A positive test raises confidence, but it does not automatically mean the condition is likely. You also need to know how common the condition is and how often the test gives false positives.',
          'This is why doctors care about base rates, follow-up tests, and symptoms. They are asking whether the evidence really points to the condition or whether the same evidence could appear in people who do not have it.',
        ],
      },
      {
        heading: 'Everyday Example: A News Claim',
        body: [
          'H: the headline is accurate. E: a popular account shared it.',
          'If the source has a strong record of correcting errors, the share may raise your confidence. If the source often posts rumors, the same evidence should move you much less.',
          'Bayes theorem turns this into a habit: do not ask only whether the claim feels vivid. Ask how reliable this kind of evidence usually is, and whether other explanations such as exaggeration, satire, selective editing, or misunderstanding are also plausible.',
        ],
      },
    ],
    [
      'H is the possible explanation you are checking.',
      'E is the clue, observation, report, or test result you noticed.',
      'P(H|E) means updated confidence in H after considering E.',
      'A clue is strong when it fits one explanation better than it fits the alternatives.',
    ],
    [
      pagePath('/bayes-theorem', 'The Prior'),
      pagePath('/bayes-theorem', 'The Likelihood'),
      pagePath('/bayes-theorem', 'The Evidence Term'),
    ],
  ),
  bayesPage(
    'The Prior',
    'The prior is the confidence you assign before the new evidence is added.',
    [
      {
        heading: 'What the Prior Does',
        body: [
          'A prior is your starting credence in a hypothesis before the new evidence is taken into account. It may come from base rates, previous studies, background theory, experience, or a deliberately cautious default.',
          'A prior is not a prejudice in the bad sense. It is a way of admitting that evidence does not arrive in a vacuum. Some claims begin as common, some as rare, and some as extraordinary.',
        ],
      },
      {
        heading: 'How Scientists Use Priors',
        body: [
          'A scientist may begin with background theory and past research. If a new drug is similar to many failed drugs, the starting confidence may be modest. If it is based on a well-supported mechanism, the starting confidence may be higher.',
          'Good scientists do not make priors invisible. They ask whether the starting assumptions are justified, whether they are too confident, and whether the evidence is strong enough to move them.',
        ],
      },
      {
        heading: 'Mental Walk-Through',
        body: [
          'Before reacting to new evidence, pause and ask: how common is this kind of thing? What do I already know? What would a reasonable person have believed before seeing this particular report?',
          'This pause protects you from being captured by the newest, loudest, or most emotionally vivid evidence.',
        ],
      },
    ],
    [
      'A prior is starting confidence before new evidence.',
      'Good priors often come from base rates and background knowledge.',
      'Priors should be explicit enough to criticize.',
    ],
    [
      pagePath('/core-ideas', 'Priors'),
      pagePath('/skills', 'How to Estimate Priors'),
      pagePath('/bayes-theorem', 'The Likelihood'),
    ],
  ),
  bayesPage(
    'The Likelihood',
    'The likelihood asks how expected the evidence would be if a hypothesis were true.',
    [
      {
        heading: 'The Likelihood Question',
        body: [
          'The likelihood is not the probability that the hypothesis is true. It is the probability of seeing this evidence if the hypothesis were true.',
          'That distinction is crucial. People often confuse “this evidence fits my theory” with “my theory is probably true.” Bayes asks a sharper question: would this evidence be much more expected if my theory were true than if it were false?',
        ],
      },
      {
        heading: 'How Practitioners Use It',
        body: [
          'A scientist asks whether an observation is what the theory predicted, whether rival theories predicted it too, and whether the measurement could be noise. A doctor asks whether a symptom is common under one condition but rare under another.',
          'A historian asks whether a document, action, or pattern would be expected if one explanation were true, and whether it would also be expected under rival explanations.',
        ],
      },
      {
        heading: 'Mental Walk-Through',
        body: [
          'Imagine the hypothesis is true. Would this evidence surprise you? Now imagine the hypothesis is false. Would the evidence still be easy to explain?',
          'Evidence becomes powerful when it is expected under one explanation and surprising under alternatives.',
        ],
      },
    ],
    [
      'Likelihood is about evidence under a hypothesis.',
      'It is not the same as posterior confidence.',
      'Strong evidence discriminates between rival explanations.',
    ],
    [
      pagePath('/core-ideas', 'Likelihoods'),
      pagePath('/skills', 'How to Read Likelihoods'),
      pagePath('/bayes-theorem', 'The Evidence Term'),
    ],
  ),
  bayesPage(
    'The Evidence Term',
    'The evidence term normalizes the update by asking how expected the evidence is overall.',
    [
      {
        heading: 'Why the Denominator Matters',
        body: [
          'The evidence term, often written P(E), asks how likely the evidence is across the whole space of possibilities. It prevents the update from looking only at the favored hypothesis.',
          'If evidence is common under many explanations, it should not move confidence very far. If evidence is common under one explanation and rare under alternatives, it can move confidence a lot.',
        ],
      },
      {
        heading: 'Rival Explanations',
        body: [
          'Practitioners mentally compare live alternatives. A scientist asks whether an experimental result supports the theory or whether it could come from measurement error, confounding variables, or chance.',
          'This is why strong reasoning does not stop at “my explanation can explain it.” Many explanations can explain many things after the fact. The stronger question is which explanation expected the evidence beforehand.',
        ],
      },
      {
        heading: 'Mental Walk-Through',
        body: [
          'Ask: how else might this evidence have appeared? Is it a unique signal, or would it happen often even if my hypothesis were wrong?',
          'This step is a safeguard against confirmation bias. It forces your favored explanation to compete with alternatives.',
        ],
      },
    ],
    [
      'P(E) asks how expected the evidence is overall.',
      'It requires attention to rival explanations.',
      'Evidence that fits many theories is often weak evidence.',
    ],
    [
      pagePath('/bayes-theorem', 'The Likelihood'),
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/case-studies', 'Motivated Reasoning'),
    ],
  ),
  bayesPage(
    'The Posterior',
    'The posterior is the updated confidence after the prior and evidence have been combined.',
    [
      {
        heading: 'Where Confidence Lands',
        body: [
          'The posterior is the confidence level after the update. It is where you land after combining the prior, the likelihood, and the evidence term.',
          'The posterior may be high, low, or only slightly changed. Bayes theorem does not guarantee dramatic updates. Sometimes new evidence is weak, expected anyway, or already included in the prior.',
        ],
      },
      {
        heading: 'Posterior vs Assigned Credence',
        body: [
          'In Credencing terms, the posterior is the confidence warranted by the Bayesian update. Assigned Credence (CA) is the confidence the agent actually adopts.',
          'A person may calculate or perceive a moderate posterior, then assign a much stronger confidence because of fear, hope, identity, or pressure. That is where the Core Rationality part of the project enters.',
        ],
      },
      {
        heading: 'Mental Walk-Through',
        body: [
          'After seeing the evidence, ask: where should my confidence be now, and did it move by the right amount?',
          'Then ask a second question: am I actually willing to live with that confidence, or am I inflating or deflating it for non-evidential reasons?',
        ],
      },
    ],
    [
      'The posterior is updated confidence.',
      'A good posterior moves by the right amount, not always by a large amount.',
      'Credencing distinguishes warranted posterior from actual assigned credence.',
    ],
    [
      pagePath('/core-ideas', 'Posteriors'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/bayes-theorem', 'Scientific Walkthrough'),
    ],
  ),
  bayesPage(
    'Scientific Walkthrough',
    'Scientists use Bayesian thinking to compare hypotheses, update confidence, and avoid being fooled by isolated evidence.',
    [
      {
        heading: 'A Research Example',
        body: [
          'Suppose researchers are testing whether a new treatment helps a condition. The prior comes from previous studies, biological plausibility, and what similar treatments have done. The evidence comes from a new trial.',
          'The likelihood asks whether the trial result is expected if the treatment works. The evidence term asks whether the same result could also appear because of chance, bias, small sample size, selective reporting, or a placebo effect.',
        ],
      },
      {
        heading: 'The Scientist’s Mental Sequence',
        body: [
          'First, set the starting expectation: what did we believe before this study? Second, inspect the evidence: how strong, clean, and expected is the result? Third, compare alternatives: could the result be explained without the hypothesis? Fourth, update confidence by an amount proportional to the evidence.',
          'A careful scientist does not ask only whether a result is exciting. They ask whether it should change the field’s confidence, and by how much.',
        ],
      },
      {
        heading: 'Connection to Credencing',
        body: [
          'This is Deep Rationality in action. The scientist is trying to reduce the gap between Objective Evidence (E0) and Perceived Evidence (EP).',
          'But the institution also needs Core Rationality. Researchers, journals, companies, and universities must be willing to assign confidence according to the evidence, even when the result threatens funding, prestige, or a favored theory.',
        ],
      },
    ],
    [
      'Scientific reasoning compares hypotheses, not isolated facts.',
      'New evidence should move confidence in proportion to diagnostic strength.',
      'Bayesian thinking improves Deep Rationality, but institutions also need Core Rationality.',
    ],
    [
      pagePath('/applications', 'Science'),
      pagePath('/applications', 'Medicine'),
      pagePath('/bayes-theorem', 'Common Mistakes'),
    ],
  ),
  bayesPage(
    'Common Mistakes',
    'Many reasoning errors come from misusing one part of Bayes theorem or silently skipping it.',
    [
      {
        heading: 'Ignoring the Prior',
        body: [
          'People often treat a new fact as if it starts the whole inquiry from zero. This makes vivid evidence too powerful. A rare claim usually needs stronger evidence than a common claim.',
          'The repair is to ask for the base rate or background expectation before reacting to the new evidence.',
        ],
      },
      {
        heading: 'Confusing Likelihood With Posterior',
        body: [
          'A common mistake is saying, “This evidence would fit my theory, so my theory is probably true.” That skips the question of whether the evidence also fits rival theories.',
          'The repair is to ask: would this evidence be much less expected if my theory were false?',
        ],
      },
      {
        heading: 'Forgetting the Evidence Term',
        body: [
          'If evidence is easy to produce under many explanations, it may not strongly support any one explanation. Anecdotes, rumors, and vague predictions often fail here.',
          'The repair is to compare alternatives before assigning confidence.',
        ],
      },
      {
        heading: 'Updating Too Much or Too Little',
        body: [
          'Fear, hope, identity, and social pressure can cause over-updating or under-updating. A person may leap to certainty from one weak study, or refuse to move after a strong body of evidence.',
          'The repair is calibration: ask whether the size of the confidence shift matches the strength of the evidence.',
        ],
      },
    ],
    [
      'Ignoring priors makes vivid evidence too powerful.',
      'Likelihood is not posterior probability.',
      'Evidence must be compared across alternatives.',
      'Good updating moves confidence by the right amount.',
    ],
    [
      pagePath('/case-studies', 'Base-Rate Neglect'),
      pagePath('/case-studies', 'Risk Inflation'),
      pagePath('/bayes-theorem', 'Practice Examples'),
    ],
  ),
  bayesPage(
    'Practice Examples',
    'Practice examples help readers mentally rehearse Bayes theorem without needing advanced mathematics.',
    [
      {
        heading: 'Example 1: The Medical Test',
        body: [
          'A test result comes back positive. Before jumping to certainty, ask: how common is the condition, how accurate is the test, and how often does this test produce false positives?',
          'The prior is the base rate of the condition. The likelihood is the chance of a positive test if the condition is present. The evidence term includes positive tests from both true cases and false positives. The posterior is the updated chance the patient has the condition after the result.',
        ],
      },
      {
        heading: 'Example 2: The News Report',
        body: [
          'A breaking news report claims an official has resigned. Ask: how plausible was this before the report, how reliable is the source, and how often do early reports of this kind turn out wrong?',
          'A reliable source with documents should move confidence more than an anonymous viral post. A cautious reader updates, but leaves room for correction.',
        ],
      },
      {
        heading: 'Example 3: The Scientific Claim',
        body: [
          'A new study reports that a supplement improves memory. Ask: what did previous research show, how large was the sample, was the study preregistered, was there a control group, and have other labs replicated it?',
          'The posterior after one study may be only modestly higher. Strong confidence usually requires converging evidence, not one dramatic result.',
        ],
      },
      {
        heading: 'Practice Template',
        body: [
          'For any claim, write four lines: Prior: what should I believe before this evidence? Likelihood: how expected is this evidence if the claim is true? Alternatives: how expected is it if the claim is false or another explanation is true? Posterior: where should my confidence now be?',
          'Then add the Credencing question: am I actually assigning that confidence, or am I being pulled away from it by fear, loyalty, desire, or social pressure?',
        ],
      },
    ],
    [
      'Bayes can be practiced without complex notation.',
      'Medical tests, news claims, and scientific studies all require priors, likelihoods, alternatives, and posteriors.',
      'The final Credencing question asks whether assigned credence follows the warranted update.',
    ],
    [
      pagePath('/skills', 'How to Estimate Priors'),
      pagePath('/skills', 'How to Read Likelihoods'),
      pagePath('/discussion-groups', 'Session 3: Priors, Base Rates, and Likelihoods'),
    ],
  ),
];

function labPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/interactive-lab', title),
    groupTitle: 'Interactive Lab',
    groupPath: '/interactive-lab',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const interactiveLabPages: ContentPage[] = [
  labPage(
    'Interactive Model',
    'The interactive model is the central instrument for visualizing how evidence, perception, belief, and rational skill diverge.',
    [
      {
        heading: 'What the Model Is For',
        body: [
          'The interactive model is not a personality test and not a complete theory of all cognition. It is a visual instrument for one recurring epistemic problem: the distance between what the evidence is, what an agent perceives, what they finally believe, and how much rational skill they bring to the process.',
          'Its purpose is diagnostic. By moving the sliders, a visitor can create states that represent honest error, motivated belief, expert rationalization, uncertainty, and healthy alignment.',
        ],
      },
      {
        heading: 'The Four Controls',
        body: [
          'Objective Evidence (E0) sets the evidential target. Perceived Evidence (EP) sets what the agent takes that evidence to show. Assigned Credence (CA) sets the confidence the agent adopts. Deep Rationality (SD) sets the quality of the agent inferential tools.',
          'The controls are intentionally simple. Their simplicity makes the relationships visible. The goal is not to simulate every psychological mechanism, but to separate the major gaps that normally get blurred together.',
        ],
      },
      {
        heading: 'The Two Gaps',
        body: [
          'The Objective Evidence to Perceived Evidence gap (E0-EP) shows error in perception or inference. The Perceived Evidence to Assigned Credence gap (EP-CA) shows doxastic misalignment: a failure to assign confidence according to what the agent takes the evidence to show.',
          'Most of the project grows from these two gaps. If you can identify which gap is doing the work, you can ask better questions about responsibility, repair, and interpretation.',
        ],
      },
    ],
    [
      'The model visualizes evidence, perception, belief, and rational skill.',
      'Objective Evidence to Perceived Evidence (E0-EP) diagnoses perception or inference failure.',
      'Perceived Evidence to Assigned Credence (EP-CA) diagnoses core-rational misalignment.',
    ],
    [
      '/interactive-lab',
      pagePath('/interactive-lab', 'How to Read the Model'),
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
    ],
  ),
  labPage(
    'How to Read the Model',
    'Read the model by following the path from objective evidence to perceived evidence to assigned credence.',
    [
      {
        heading: 'Start With the Target',
        body: [
          'Begin by locating Objective Evidence (E0). This is the model estimate of where the evidence really points. In real life, E0 is often uncertain, but in the lab it gives the visual system a target.',
          'Then compare Objective Evidence (E0) to Perceived Evidence (EP). If they are close, the agent is reading the evidential situation well. If they are far apart, something has gone wrong in access, attention, interpretation, method, or environment.',
        ],
      },
      {
        heading: 'Then Read the Commitment',
        body: [
          'After Perceived Evidence (EP), look at Assigned Credence (CA). This is where the agent finally places belief. When Assigned Credence (CA) tracks Perceived Evidence (EP), the agent is internally consistent even if they are mistaken about the world. When Assigned Credence (CA) diverges from Perceived Evidence (EP), the agent is believing against their own evidential perception.',
          'The outer semicircle from 0% on the left to 100% on the right is the epistemic gradient. It is the confidence scale on which the epistemic agent applies a credence. A point near 0% means the agent treats the claim as very unlikely; a point near 100% means the agent treats it as very likely.',
        ],
      },
      {
        heading: 'Use Deep Rationality as Resolution',
        body: [
          'Deep Rationality (SD) functions like resolution. High SD means the agent has better tools for narrowing the distance between the world and their perception. Low SD means more fog and wider warranted uncertainty.',
          'On the chart, Deep Rationality (SD) increases as the yellow skill marker moves farther away from the center point and toward the outer semicircle. This is intentionally radial: greater depth is farther out, even though people may intuitively expect “deeper” to mean lower.',
          'Do not read low Deep Rationality (SD) as failure of integrity by itself. A novice may lack tools and still be honest. The model becomes diagnostically interesting when you compare Deep Rationality (SD) with the Perceived Evidence to Assigned Credence gap (EP-CA).',
        ],
      },
    ],
    [
      'Read Objective Evidence (E0) first, then Perceived Evidence (EP), then Assigned Credence (CA).',
      'Objective Evidence to Perceived Evidence (E0-EP) is the perception/inference gap.',
      'Perceived Evidence to Assigned Credence (EP-CA) is the belief-integrity gap.',
      'Deep Rationality (SD) changes how much uncertainty is warranted.',
    ],
    [
      pagePath('/interactive-lab', 'Visual Legend'),
      pagePath('/core-ideas', 'Objective Evidence (E0)'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
    ],
  ),
  labPage(
    'Visual Legend',
    'The visual elements represent the evidential target, perceived balance, assigned credence, skill depth, uncertainty, and irrationality.',
    [
      {
        heading: 'Markers and Lines',
        body: [
          'The objective evidence marker indicates the evidential target. The perceived evidence marker indicates what the agent takes the evidence to show. The assigned credence line shows the final confidence commitment.',
          'The left-to-right semicircle is the epistemic gradient: the 0% to 100% scale on which Objective Evidence (E0), Perceived Evidence (EP), and Assigned Credence (CA) are positioned. Assigned Credence (CA) is the epistemic agent\'s chosen location on that gradient.',
          'When these elements cluster together, the state is aligned. When they separate, the model asks which kind of separation has occurred.',
        ],
      },
      {
        heading: 'Skill and Uncertainty',
        body: [
          'The skill-depth marker reflects Deep Rationality. As skill rises, warranted uncertainty narrows. As skill falls, the agent is entitled to a wider range of uncertainty because their tools are less precise.',
          'The concentric semicircles are Deep Rationality (SD) percentage markers. The center is low skill depth; each ring farther outward represents a higher percentage, with 100% at the outer rim.',
          'The green uncertainty region is not a defect. It represents the range in which variation in credence may remain reasonable given the agent limitations.',
        ],
      },
      {
        heading: 'The Red Region',
        body: [
          'The red region appears when Assigned Credence diverges from Perceived Evidence. It visualizes core irrationality: not merely being wrong, but adopting a confidence that departs from what the agent takes the evidence to warrant.',
          'The stronger and more stable that red divergence becomes, the more the model moves from ordinary bias toward epistemic delusion.',
        ],
      },
    ],
    [
      'Markers show Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD).',
      'The 0% to 100% semicircle is the epistemic gradient on which the agent applies credence.',
      'Green uncertainty can be warranted.',
      'Red divergence shows the Perceived Evidence to Assigned Credence gap (EP-CA).',
    ],
    [
      pagePath('/interactive-lab', 'How to Read the Model'),
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
    ],
  ),
  labPage(
    'Preset Scenarios',
    'Preset scenarios show canonical patterns so visitors can learn the model quickly.',
    [
      {
        heading: 'Why Presets Matter',
        body: [
          'A blank model can be hard to read. Presets give visitors stable examples: the ideal agent, the honest novice, the biased expert, and epistemic delusion. These cases establish reference points before users build their own scenarios.',
        ],
      },
      {
        heading: 'The Practical Scenarios',
        body: [
          'The lab also includes practical scenarios such as gaslighting, academic dogma, and strict empiricism. These are not meant as final labels for real people. They are training cases for seeing whether the main error lies in evidence perception, assigned credence, or both.',
        ],
      },
      {
        heading: 'How to Use Presets Well',
        body: [
          'Select a preset, read the description, then move one slider at a time. Ask what changes when perception improves, when assigned credence becomes more honest, or when Deep Rationality increases. The point is to learn the relationships, not simply memorize the archetypes.',
        ],
      },
    ],
    [
      'Presets are reference cases for learning the model.',
      'They teach relationships among Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD).',
      'Small slider changes reveal which gap drives the diagnosis.',
    ],
    [
      pagePath('/interactive-lab', 'Ideal Agent'),
      pagePath('/interactive-lab', 'Biased Expert'),
      pagePath('/interactive-lab', 'Build Your Own Scenario'),
    ],
  ),
  labPage(
    'Ideal Agent',
    'The ideal agent has strong evidence perception and assigns credence in line with that perception.',
    [
      {
        heading: 'High Skill, High Integrity',
        body: [
          'The ideal agent is a local pattern in which Deep Rationality is high and Assigned Credence closely tracks Perceived Evidence. The agent has good tools and uses them honestly.',
          'This does not require omniscience. The ideal agent can still face uncertainty. What makes the state ideal is proportionality: the agent neither overstates nor evades what the evidence supports.',
        ],
      },
      {
        heading: 'What It Looks Like',
        body: [
          'In the model, Objective Evidence (E0), Perceived Evidence (EP), and Assigned Credence (CA) sit close together, and Deep Rationality (SD) is high. The uncertainty region is relatively narrow because the agent tools are strong. There is little or no red core-irrationality region.',
        ],
      },
      {
        heading: 'Why It Matters',
        body: [
          'The ideal agent is not meant to shame ordinary agents. It is a regulative target. It shows what the model is aiming for: belief that is both well-informed and internally honest.',
        ],
      },
    ],
    [
      'The ideal agent combines skill and integrity.',
      'Objective Evidence (E0), Perceived Evidence (EP), and Assigned Credence (CA) remain closely aligned.',
      'The archetype is a target, not a claim of perfection.',
    ],
    [
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/interactive-lab', 'Honest Novice'),
    ],
  ),
  labPage(
    'Honest Novice',
    'The honest novice lacks strong tools but assigns credence according to their perceived evidence.',
    [
      {
        heading: 'Low Skill, High Good Faith',
        body: [
          'The honest novice has limited Deep Rationality but relatively strong Core Rationality. They may not know the statistics, may miss comparison classes, or may struggle with noisy evidence. But they do not knowingly force belief away from what they perceive.',
        ],
      },
      {
        heading: 'Why This Case Deserves Charity',
        body: [
          'The honest novice reminds us that false belief is not always bad faith. A person may be wrong because the task is hard, the evidence is confusing, or their tools are underdeveloped. The right repair is often education and support, not accusation.',
        ],
      },
      {
        heading: 'What It Looks Like',
        body: [
          'In the model, Perceived Evidence (EP) may diverge from Objective Evidence (E0) because the agent perception is imperfect. But Assigned Credence (CA) remains close to Perceived Evidence (EP). The agent believes what they honestly take the evidence to show.',
        ],
      },
    ],
    [
      'The honest novice may be wrong without being dishonest.',
      'The main gap is Objective Evidence to Perceived Evidence (E0-EP), not Perceived Evidence to Assigned Credence (EP-CA).',
      'Repair usually requires better tools and better evidence access.',
    ],
    [
      pagePath('/core-ideas', 'Calculation Error (DE)'),
      pagePath('/skills', 'How to Estimate Priors'),
      pagePath('/interactive-lab', 'Biased Expert'),
    ],
  ),
  labPage(
    'Biased Expert',
    'The biased expert has strong tools but uses them to protect a preferred conclusion.',
    [
      {
        heading: 'High Skill, Low Integrity',
        body: [
          'The biased expert is one of the most important archetypes because it breaks the assumption that intelligence automatically produces rationality. The biased expert can process evidence well, but assigns credence in a way that protects identity, status, ideology, or incentive.',
        ],
      },
      {
        heading: 'The Intellect as Bodyguard',
        body: [
          'In this pattern, intelligence becomes defensive. The agent does not merely fail to see; they use what they see selectively. They produce sophisticated reasons for a conclusion that was effectively chosen before the reasoning began.',
        ],
      },
      {
        heading: 'What It Looks Like',
        body: [
          'In the model, Deep Rationality (SD) may be high and Perceived Evidence (EP) may be reasonably close to Objective Evidence (E0). The problem appears when Assigned Credence (CA) pulls away from Perceived Evidence (EP). The red region is not caused by ignorance; it is caused by motivated assignment of confidence.',
        ],
      },
    ],
    [
      'The biased expert has tools but misuses them defensively.',
      'The main gap is Perceived Evidence to Assigned Credence (EP-CA).',
      'Education alone may not repair the pattern.',
    ],
    [
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/skills', 'How to Detect Motivated Override'),
    ],
  ),
  labPage(
    'Epistemic Delusion',
    'Epistemic delusion marks severe detachment between assigned credence and perceived evidence.',
    [
      {
        heading: 'Beyond Ordinary Bias',
        body: [
          'Epistemic delusion, in this model, is not a clinical diagnosis. It names a structural state in which Assigned Credence drifts so far from Perceived Evidence that the belief is no longer answerable to the agent own evidential sense.',
        ],
      },
      {
        heading: 'The Collapse of the Doxastic Gap',
        body: [
          'Ordinary bias may tug credence. Delusion-level distortion overwhelms the tether. The agent may be operating from fear, fantasy, group pressure, or identity defense so powerful that evidence no longer has normal traction.',
        ],
      },
      {
        heading: 'Use the Label Carefully',
        body: [
          'This term should be used cautiously. The site uses it for model behavior, not as a casual insult. The important question is how far credence has detached from perceived evidence, and what conditions would restore answerability.',
        ],
      },
    ],
    [
      'Epistemic delusion is a structural model state, not a clinical label.',
      'It involves severe Perceived Evidence to Assigned Credence (EP-CA) detachment.',
      'The repair question is how evidence can regain traction.',
    ],
    [
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/case-studies', 'Delusion Threshold Cases'),
      pagePath('/interactive-lab', 'Interpretation Guide'),
    ],
  ),
  labPage(
    'Build Your Own Scenario',
    'Building your own scenario means assigning Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD) for a real or imagined belief state.',
    [
      {
        heading: 'Choose the Claim',
        body: [
          'Start with a specific claim. Avoid vague topics like "politics" or "medicine." Use a concrete proposition: this treatment is likely to work, this source is reliable, this policy will reduce harm, this person is trustworthy.',
        ],
      },
      {
        heading: 'Set the Four Values',
        body: [
          'Estimate E0 as the evidential target, EP as what the agent perceives, CA as what the agent actually believes, and SD as the agent inferential skill in this domain. Do not worry about exact precision at first. The relationships matter more than the decimal.',
        ],
        bullets: [
          'Ask what the evidence really supports.',
          'Ask what the agent takes it to support.',
          'Ask how strongly the agent actually believes.',
          'Ask how reliable the agent tools are in this domain.',
        ],
      },
      {
        heading: 'Read the Gaps',
        body: [
          'If Objective Evidence (E0) and Perceived Evidence (EP) diverge, investigate information quality and reasoning skill. If Perceived Evidence (EP) and Assigned Credence (CA) diverge, investigate motivation, fear, identity, incentives, or social pressure. If both diverge, the scenario likely combines ignorance with motivated belief.',
        ],
      },
    ],
    [
      'Use specific claims, not broad topics.',
      'Estimate all four values before diagnosing.',
      'Different gaps imply different repairs.',
    ],
    [
      pagePath('/interactive-lab', 'Compare Two Scenarios'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
      pagePath('/case-studies', 'Base-Rate Neglect'),
    ],
  ),
  labPage(
    'Compare Two Scenarios',
    'Scenario comparison lets readers juxtapose two agents and see how similar surface beliefs can arise from different epistemic structures.',
    [
      {
        heading: 'Use the Comparison Lab First',
        body: [
          'Start with a preset pairing, then adjust the sliders on either side. The important move is to compare structures rather than personalities: where is Objective Evidence (E0), what does each agent perceive, what credence do they assign, and how much Deep Rationality (SD) do they bring to the case?',
          'The comparison table turns the visual difference into diagnostic questions. A larger Objective Evidence to Perceived Evidence gap (E0-EP) suggests an evidence-reading or skill problem. A larger Perceived Evidence to Assigned Credence gap (EP-CA), especially beyond warranted slack, suggests motivated override or belief-integrity pressure.',
        ],
      },
      {
        heading: 'Why Compare',
        body: [
          'Two agents can hold the same belief for very different reasons. One may be an honest novice; another may be a biased expert. One may have bad data; another may have good data and bad faith. Comparing scenarios prevents superficial diagnosis.',
        ],
      },
      {
        heading: 'Comparison Questions',
        body: [
          'Compare where the gaps occur. Is one case mostly Objective Evidence to Perceived Evidence (E0-EP) and the other mostly Perceived Evidence to Assigned Credence (EP-CA)? Does one agent have lower Deep Rationality (SD) but better internal alignment? Does one agent become more accurate when given better evidence, while the other resists?',
          'Also compare repair paths. If the problem is mainly Deep Rationality (SD), better information, base rates, and statistical tools may help. If the problem is mainly Core Irrationality (IC), the repair may require safer update conditions, identity detachment, incentive changes, or courage to say what one already sees.',
        ],
      },
      {
        heading: 'What Comparison Teaches',
        body: [
          'Comparison teaches that the same conclusion can have different epistemic quality. Being right is not enough; being right for evidence-responsive reasons matters. Being wrong is not always culpable; the structure of the error matters.',
        ],
      },
    ],
    [
      'The comparison lab lets two scenarios be read side by side.',
      'Similar beliefs can have different epistemic structures.',
      'Compare gap locations before judging.',
      'The same conclusion can be held responsibly or irresponsibly.',
    ],
    [
      pagePath('/start-here', 'The Difference Between Being Mistaken and Being Epistemically Inconsistent'),
      pagePath('/interactive-lab', 'Build Your Own Scenario'),
      pagePath('/case-studies', 'Honest Novice Cases'),
    ],
  ),
  labPage(
    'Interpretation Guide',
    'The interpretation guide translates model patterns into diagnostic questions and repair strategies.',
    [
      {
        heading: 'Do Not Overread the Model',
        body: [
          'The model is a thinking aid, not an oracle. Its values are interpretive estimates. It helps organize questions, but it does not remove the need for judgment, humility, and context.',
        ],
      },
      {
        heading: 'From Pattern to Diagnosis',
        body: [
          'When you see an Objective Evidence to Perceived Evidence gap (E0-EP), ask about evidence access, measurement quality, statistical tools, and framing. When you see a Perceived Evidence to Assigned Credence gap (EP-CA), ask about emotional threat, identity protection, incentives, public commitment, and social cost of revision.',
        ],
      },
      {
        heading: 'From Diagnosis to Repair',
        body: [
          'Deep-rational repairs include better data, better priors, better likelihood comparisons, feedback, and education. Core-rational repairs include lowering defensive threat, rewarding revision, practicing uncertainty, and making belief change socially survivable.',
        ],
      },
    ],
    [
      'The model organizes judgment; it does not replace it.',
      'Objective Evidence to Perceived Evidence gaps (E0-EP) suggest tool and evidence repairs.',
      'Perceived Evidence to Assigned Credence gaps (EP-CA) suggest motivational and integrity repairs.',
    ],
    [
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
];

function casePage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/case-studies', title),
    groupTitle: 'Case Studies',
    groupPath: '/case-studies',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const caseStudyPages: ContentPage[] = [
  casePage(
    'Base-Rate Neglect',
    'Base-rate neglect occurs when vivid case-specific evidence overwhelms the background frequency that should anchor judgment.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Base-rate neglect is the failure to give enough weight to how common a condition, event, trait, or outcome is in the relevant reference class. A story about this particular case becomes so vivid that the general frequency quietly disappears.',
          'In Credencing terms, the agent often allows Perceived Evidence to drift away from Objective Evidence because the evidence field has been visually or emotionally compressed. The striking detail is seen; the background distribution is not.',
        ],
      },
      {
        heading: 'Where the Gap Opens',
        body: [
          'The main failure is usually Deep Rationality. The Objective Evidence to Perceived Evidence gap (E0-EP) widens because the agent lacks or ignores the statistical frame needed to interpret the evidence. But a Core Rationality failure can appear when the agent knows the base rate matters and avoids it because the anecdote supports a preferred conclusion.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair begins by asking for the reference class. How often does this happen among cases like this? What is the prior probability before the vivid new detail arrives? How diagnostic is the detail relative to the background rate?',
          'The skill is not to dismiss particulars. It is to place particulars inside the right population before allowing confidence to move.',
        ],
      },
    ],
    [
      'Base rates anchor credence before case-specific evidence is interpreted.',
      'The typical failure is an Objective Evidence to Perceived Evidence distortion (E0-EP).',
      'Anecdotes should be interpreted inside reference classes.',
    ],
    [
      pagePath('/core-ideas', 'Priors'),
      pagePath('/core-ideas', 'Bayesian Updating'),
      pagePath('/skills', 'How to Avoid Base-Rate Neglect'),
    ],
  ),
  casePage(
    'Medical Testing',
    'Medical tests show why sensitivity, specificity, prevalence, and emotional salience must all be kept separate.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Medical testing is a classic case where evidence sounds stronger than it is. A positive test result may feel like direct evidence that a condition is present, but its meaning depends on prevalence, false positives, false negatives, test quality, and the population being tested.',
          'A rare disease with a decent test can still produce many false alarms when applied broadly. The emotional force of a positive result can make the likelihood feel stronger than the posterior actually warrants.',
        ],
      },
      {
        heading: 'Where the Gap Opens',
        body: [
          'The common error is Deep Rationality: EP overstates what the test result means because the agent does not combine base rate and test accuracy correctly. Core Rationality may enter when fear turns a moderate posterior into near certainty, or when avoidance turns a serious result into denial.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Ask four questions: how common is the condition in this group, how often does the test detect real cases, how often does it falsely flag non-cases, and what follow-up evidence would discriminate better?',
          'Medical credencing requires emotional steadiness. The aim is not to feel calm by force, but to prevent fear from silently rewriting probability.',
        ],
      },
    ],
    [
      'Test results need prevalence and accuracy context.',
      'Fear can inflate assigned credence beyond perceived evidence.',
      'Follow-up testing often narrows warranted uncertainty.',
    ],
    [
      pagePath('/core-ideas', 'Likelihoods'),
      pagePath('/core-ideas', 'Posteriors'),
      pagePath('/applications', 'Medicine'),
    ],
  ),
  casePage(
    'Motivated Reasoning',
    'Motivated reasoning occurs when inquiry is recruited to defend a desired conclusion rather than discover what is true.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Motivated reasoning is not merely having motives. Every inquiry happens inside human concerns. The problem arises when the desired conclusion controls the treatment of evidence: friendly evidence is accepted cheaply, hostile evidence is scrutinized endlessly, and ambiguity is resolved in one direction.',
          'In the model, motivated reasoning often produces a Perceived Evidence to Assigned Credence gap (EP-CA), but it can also contaminate Perceived Evidence (EP) itself. The agent may both perceive selectively and assign credence defensively.',
        ],
      },
      {
        heading: 'The Biased Expert',
        body: [
          'Motivated reasoning is especially dangerous in high-skill agents. Intelligence supplies more ways to protect the conclusion. The agent can generate objections, exceptions, technical distinctions, and alternative explanations that function less as inquiry and more as legal defense.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair requires changing the incentives around belief. Ask what would be embarrassing to admit, what group membership is at stake, what evidence would actually change the conclusion, and whether the standard of proof shifts depending on whether the evidence is welcome.',
          'Good practice includes precommitting to update conditions and making belief revision honorable rather than humiliating.',
        ],
      },
    ],
    [
      'Motivated reasoning bends standards of evidence toward a desired conclusion.',
      'It can affect both Perceived Evidence (EP) and Assigned Credence (CA).',
      'High intelligence can strengthen rationalization unless Core Rationality improves.',
    ],
    [
      pagePath('/interactive-lab', 'Biased Expert'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/skills', 'How to Detect Motivated Override'),
    ],
  ),
  casePage(
    'Political Tribalism',
    'Political tribalism turns beliefs into loyalty signals, making update costs social rather than merely intellectual.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Political tribalism makes credence answerable to coalition identity. Claims are not evaluated only by support; they are evaluated by what accepting them would imply about one side, status, enemies, and belonging.',
          'This changes the cost of updating. A private probability shift becomes a public act of disloyalty. When that happens, Assigned Credence may remain fixed even as Perceived Evidence quietly changes.',
        ],
      },
      {
        heading: 'Where the Gap Opens',
        body: [
          'Tribalism can distort EP through selective media and social sorting. It can distort CA through identity pressure. The most stable tribal belief systems often involve both: members see a filtered evidence world and face punishment for admitting when even that filtered world becomes inconvenient.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair requires cross-pressures that make truth tracking socially possible. Private reflection, mixed coalitions, steelmanning opponents, issue-by-issue credences, and explicit uncertainty can lower the perceived betrayal cost of updating.',
        ],
      },
    ],
    [
      'Tribalism turns credence into a loyalty signal.',
      'It can distort both evidence perception and belief assignment.',
      'Repair requires making revision socially survivable.',
    ],
    [
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/applications', 'Public Debate'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
    ],
  ),
  casePage(
    'Conspiracy Thinking',
    'Conspiracy thinking becomes epistemically dangerous when every counter-signal is absorbed as further confirmation.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Some conspiracies are real, so the error is not simply suspecting coordination or deception. The dangerous pattern is unfalsifiability: evidence for the theory confirms it, evidence against the theory is reinterpreted as proof of cover-up, and absence of evidence becomes evidence of suppression.',
          'This creates a closed credencing loop. Assigned Credence becomes insulated from ordinary evidential correction.',
        ],
      },
      {
        heading: 'Where the Gap Opens',
        body: [
          'Conspiracy thinking often begins with an Objective Evidence to Perceived Evidence problem (E0-EP): missing context, distrust, pattern over-detection, or exposure to curated claims. It hardens into a Perceived Evidence to Assigned Credence problem (EP-CA) when the agent refuses update conditions and treats every possible observation as compatible with the theory.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'The first repair question is: what would lower confidence? If no imaginable evidence would count against the claim, the issue is no longer ordinary uncertainty. The belief has become structurally protected from evidence.',
          'Useful repair also distinguishes justified institutional distrust from global distrust. Specific distrust can improve inquiry; total distrust destroys the possibility of shared evidence.',
        ],
      },
    ],
    [
      'The key danger is unfalsifiability.',
      'Conspiracy thinking can begin as perception error and harden into core irrationality.',
      'A belief needs possible update conditions to remain evidence-responsive.',
    ],
    [
      pagePath('/core-ideas', 'Epistemic Akrasia'),
      pagePath('/interactive-lab', 'Epistemic Delusion'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
    ],
  ),
  casePage(
    'Risk Inflation',
    'Risk inflation occurs when possibility is treated as probability and probability is treated as practical certainty.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Risk inflation begins with a real possibility. Something could happen. The mistake is allowing could to become likely, and likely to become effectively certain, without corresponding evidence.',
          'This is common when outcomes are frightening, vivid, value-charged, or personally salient. The imagination supplies detail; credence follows the detail rather than the evidence.',
        ],
      },
      {
        heading: 'Where the Gap Opens',
        body: [
          'Risk inflation can involve both gaps. EP may overread the evidence because vividness is mistaken for likelihood. CA may then exceed even EP because fear demands action as if the worst case were imminent.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Separate severity from probability. A severe outcome can deserve attention even when unlikely, but its severity does not make it probable. Then ask about base rates, comparison risks, marginal risk increase, and the cost of false alarms.',
        ],
      },
    ],
    [
      'Possibility is not probability.',
      'Severity and likelihood must be separated.',
      'Fear can inflate both Perceived Evidence (EP) and Assigned Credence (CA).',
    ],
    [
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/case-studies', 'Fear Overrides'),
      pagePath('/applications', 'Policy'),
    ],
  ),
  casePage(
    'Pragmatic Encroachment',
    'Pragmatic encroachment describes how practical stakes influence what confidence is sufficient for action.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Pragmatic encroachment is the pressure practical stakes place on belief and assertion. If little depends on being wrong, moderate confidence may be enough for action. If much depends on being wrong, the same confidence may be inadequate.',
          'The danger is sliding from "this confidence is not enough for action" to "the claim is not likely." Those are different judgments.',
        ],
      },
      {
        heading: 'Credence vs Action Threshold',
        body: [
          'Credencing keeps the distinction visible. A person may assign 0.75 confidence while still refusing to act because the downside is too high. Or they may act on 0.55 because the cost of inaction is worse.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'State both numbers: the confidence level and the action threshold. Much confusion dissolves when people say, "I think this is probably true, but not enough to act under these stakes."',
        ],
      },
    ],
    [
      'Practical stakes affect action thresholds.',
      'Action threshold should not be confused with credence.',
      'High stakes may require more confidence without changing the evidence itself.',
    ],
    [
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/applications', 'Law'),
    ],
  ),
  casePage(
    'Fear Overrides',
    'Fear overrides happen when threat salience pushes assigned credence beyond what the agent perceives the evidence to support.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Fear is not irrational by default. It is a signal of possible threat. The failure occurs when fear silently becomes evidence, raising confidence beyond what the actual support warrants.',
          'A person may know that a danger is unlikely and still live as if it is probable. That is a Perceived Evidence to Assigned Credence gap (EP-CA): perceived evidence and assigned credence have come apart under emotional pressure.',
        ],
      },
      {
        heading: 'Why Fear Is Persuasive',
        body: [
          'Fear is persuasive because it is action-oriented. It treats delay as danger. It prefers false positives to false negatives. In some environments that bias is adaptive; in reflective inquiry it can miscalibrate belief.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair begins by naming the split: "My fear is high; my evidence is moderate." That sentence protects the difference between affect and credence. Then use base rates, outside views, time delays, and trusted review to restore calibration.',
        ],
      },
    ],
    [
      'Fear can be useful without being evidentially decisive.',
      'Fear overrides often create a Perceived Evidence to Assigned Credence gap (EP-CA).',
      'Naming affect separately from credence helps restore calibration.',
    ],
    [
      pagePath('/core-ideas', 'Epistemic Akrasia'),
      pagePath('/skills', 'How to Detect Motivated Override'),
      pagePath('/applications', 'Personal Decision-Making'),
    ],
  ),
  casePage(
    'Honest Novice Cases',
    'Honest novice cases involve sincere alignment with perceived evidence despite limited tools or incomplete information.',
    [
      {
        heading: 'The Pattern',
        body: [
          'The honest novice is wrong, uncertain, or imprecise because their tools are limited, not because they are protecting a preferred belief. Their Assigned Credence broadly follows their Perceived Evidence.',
          'This case matters because public argument often punishes wrongness without asking whether the wrongness came from bad faith or limited access.',
        ],
      },
      {
        heading: 'Typical Examples',
        body: [
          'A patient misreads a test result because they have never learned base rates. A student trusts a simplified explanation that later needs qualification. A citizen believes a bad report from a normally reliable source. These can be real mistakes without core irrationality.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'The repair is educational and environmental: better explanations, better feedback, better access to the relevant evidence, and social permission to revise without humiliation.',
        ],
      },
    ],
    [
      'Honest novice cases are primarily Deep Rationality cases.',
      'They call for instruction, not contempt.',
      'Good faith is shown by willingness to update when tools improve.',
    ],
    [
      pagePath('/interactive-lab', 'Honest Novice'),
      pagePath('/core-ideas', 'Calculation Error (DE)'),
      pagePath('/skills', 'How to Estimate Priors'),
    ],
  ),
  casePage(
    'Biased Expert Cases',
    'Biased expert cases involve high skill used defensively to protect an identity, incentive, or prior commitment.',
    [
      {
        heading: 'The Pattern',
        body: [
          'The biased expert is dangerous because the surface performance can look rational. The argument may be technical, fluent, credentialed, and full of distinctions. But the direction of scrutiny is asymmetric: friendly evidence is welcomed, hostile evidence is buried under demands for impossible certainty.',
        ],
      },
      {
        heading: 'Typical Examples',
        body: [
          'A scholar protects a school of thought from decisive criticism. A partisan analyst notices every flaw in the opponent evidence and none in their own. A professional whose status depends on a method keeps treating anomalies as nuisances rather than signals.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair requires accountability structures, adversarial review, prediction records, precommitted standards, and incentives that reward correction. The biased expert does not mainly need more intelligence; they need less protection for motivated confidence.',
        ],
      },
    ],
    [
      'Biased experts use skill defensively.',
      'The signature is asymmetric scrutiny.',
      'Repair requires accountability and precommitted standards.',
    ],
    [
      pagePath('/interactive-lab', 'Biased Expert'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
  casePage(
    'Delusion Threshold Cases',
    'Delusion threshold cases occur when assigned credence becomes structurally detached from perceived evidence.',
    [
      {
        heading: 'The Pattern',
        body: [
          'A delusion threshold case, in this project non-clinical sense, is a belief state in which normal evidence responsiveness has broken down. The agent confidence no longer behaves as if it is answerable to perceived evidence.',
          'The point is not insult. The point is to mark when ordinary disagreement tools stop working because the credence is protected against update.',
        ],
      },
      {
        heading: 'Signals',
        body: [
          'Signals include unfalsifiability, totalizing explanations, refusal to state update conditions, escalating certainty under counterevidence, and social environments that punish doubt as betrayal.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair often begins indirectly. Facts alone may intensify defense. Better approaches lower threat, rebuild shared standards, identify small update points, and restore the possibility that evidence can matter without destroying identity.',
        ],
      },
    ],
    [
      'The label is structural, not clinical.',
      'The core sign is loss of evidence responsiveness.',
      'Repair often requires lowering threat before presenting more evidence.',
    ],
    [
      pagePath('/interactive-lab', 'Epistemic Delusion'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
    ],
  ),
];

function skillPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/skills', title),
    groupTitle: 'Skills',
    groupPath: '/skills',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const skillPages: ContentPage[] = [
  skillPage(
    'How to Think in Credences',
    'Thinking in credences means replacing all-or-nothing belief with explicit degrees of confidence.',
    [
      {
        heading: 'Start With a Number or Range',
        body: [
          'The first skill is to stop hiding behind yes-or-no belief when the evidence is graded. You do not always need a precise number, but you do need a sense of strength: barely leaning, moderately confident, highly confident, or nearly certain.',
          'A range is often better than fake precision. Saying "I am somewhere between 0.6 and 0.7" is more honest than pretending to know you are at exactly 0.64.',
        ],
      },
      {
        heading: 'Name What Would Move You',
        body: [
          'A credence becomes more rational when it is updateable. Ask what evidence would raise it, lower it, or leave it unchanged. If no possible evidence would move the credence, you may be dealing with identity protection rather than inquiry.',
        ],
      },
      {
        heading: 'Practice',
        body: [
          'Choose three ordinary claims each day and assign rough credences. Then write one sentence explaining the evidence and one sentence naming what would change your mind. The goal is not mathematical performance. The goal is to make confidence answerable.',
        ],
      },
    ],
    [
      'Use ranges when exact numbers would be fake precision.',
      'Every serious credence should have possible update conditions.',
      'The habit is confidence made explicit and answerable.',
    ],
    [
      pagePath('/core-ideas', 'Credences'),
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
    ],
  ),
  skillPage(
    'How to Scale Confidence to Evidence',
    'Scaling confidence means letting evidential support determine the strength of belief.',
    [
      {
        heading: 'Separate Direction From Weight',
        body: [
          'First ask which direction the evidence points. Then ask how much it should move confidence. Many people stop after direction: they find something that supports their view and treat it as decisive. Scaling requires the second question.',
        ],
      },
      {
        heading: 'Use Confidence Bands',
        body: [
          'A practical scale helps: below 0.5 means leaning against, around 0.5 means unresolved, 0.6 to 0.7 means tentative support, 0.7 to 0.85 means substantial support, 0.85 and above means strong support, and near certainty should be rare.',
          'These bands are not laws. They are guardrails against treating every favorable consideration as proof.',
        ],
      },
      {
        heading: 'Check for Inflation',
        body: [
          'Ask whether your confidence would look excessive if someone you disagreed with used the same evidence. If so, you may be scaling by desire rather than support.',
        ],
      },
    ],
    [
      'Evidence direction and evidence weight are different.',
      'Confidence bands prevent cheap certainty.',
      'Symmetry tests reveal motivated inflation.',
    ],
    [
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/case-studies', 'Risk Inflation'),
    ],
  ),
  skillPage(
    'How to Update with New Evidence',
    'Updating well means revising confidence proportionally without becoming volatile or stubborn.',
    [
      {
        heading: 'State the Prior',
        body: [
          'Before considering the new information, state your prior. What did you believe before this arrived, and why? This prevents the new evidence from taking over the whole field simply because it is fresh.',
        ],
      },
      {
        heading: 'Ask How Diagnostic the Evidence Is',
        body: [
          'New evidence should move confidence only to the extent that it discriminates between hypotheses. If the evidence is expected under several possibilities, update modestly. If it is much more expected under one possibility, update more strongly.',
        ],
      },
      {
        heading: 'Record the Movement',
        body: [
          'Write the movement explicitly: "I was at 0.55; this moves me to 0.68." This makes updating visible and prevents the mind from rewriting its history after the fact.',
        ],
      },
    ],
    [
      'Begin with the prior.',
      'Update according to diagnostic strength.',
      'Record confidence movement to prevent hindsight distortion.',
    ],
    [
      pagePath('/core-ideas', 'Bayesian Updating'),
      pagePath('/core-ideas', 'Likelihoods'),
      pagePath('/core-ideas', 'Posteriors'),
    ],
  ),
  skillPage(
    'How to Estimate Priors',
    'Estimating priors means finding the right background frequency before vivid new evidence dominates judgment.',
    [
      {
        heading: 'Find the Reference Class',
        body: [
          'Ask what kind of case this is. A medical symptom belongs to a patient population. A news claim belongs to a source track record. A personal conflict belongs to a history of similar interactions. The reference class gives the first anchor.',
        ],
      },
      {
        heading: 'Use Multiple Anchors',
        body: [
          'No reference class is perfect. Try several. What is the broad base rate? What is the narrower base rate? What changes if you choose a different but still relevant comparison class?',
        ],
      },
      {
        heading: 'Beware Convenient Priors',
        body: [
          'A prior chosen because it protects a desired conclusion is not doing honest work. Good priors may be rough, but they should be chosen because they are relevant, not because they are useful ammunition.',
        ],
      },
    ],
    [
      'A prior starts with a reference class.',
      'Multiple reference classes can test robustness.',
      'Convenient priors are often disguised motivated reasoning.',
    ],
    [
      pagePath('/core-ideas', 'Priors'),
      pagePath('/case-studies', 'Base-Rate Neglect'),
      pagePath('/skills', 'How to Avoid Base-Rate Neglect'),
    ],
  ),
  skillPage(
    'How to Read Likelihoods',
    'Reading likelihoods means asking how expected the evidence is under each live hypothesis.',
    [
      {
        heading: 'Compare, Do Not Merely Confirm',
        body: [
          'The key question is not "Does this fit my view?" Many things fit many views. The better question is "Is this evidence more expected if my view is true than if an alternative is true?"',
        ],
      },
      {
        heading: 'List Live Alternatives',
        body: [
          'Before interpreting evidence, list at least two alternatives. Include mundane explanations, error, noise, coincidence, and selection effects where relevant. Evidence that survives comparison deserves more weight.',
        ],
      },
      {
        heading: 'Look for Discriminators',
        body: [
          'Strong evidence discriminates. It rules some possibilities down while raising others. Weak evidence is compatible with too many possibilities to move confidence much.',
        ],
      },
    ],
    [
      'Likelihoods are comparative.',
      'Evidence is stronger when it discriminates among hypotheses.',
      'Always include mundane alternatives.',
    ],
    [
      pagePath('/core-ideas', 'Likelihoods'),
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/case-studies', 'Medical Testing'),
    ],
  ),
  skillPage(
    'How to Avoid Base-Rate Neglect',
    'Avoiding base-rate neglect means keeping background frequency visible when case details become vivid.',
    [
      {
        heading: 'Ask "How Often?" First',
        body: [
          'Before interpreting a vivid case, ask how often this kind of thing occurs in the relevant population. This does not settle the question, but it prevents the anecdote from becoming the whole evidential world.',
        ],
      },
      {
        heading: 'Translate Stories Into Frequencies',
        body: [
          'When possible, convert the situation into natural frequencies. Instead of thinking "the test is accurate," ask how many true positives and false positives would appear among 1,000 people like this.',
        ],
      },
      {
        heading: 'Return to the Particular',
        body: [
          'Base rates are anchors, not prisons. After anchoring, return to the case details and ask how diagnostic they really are. The skill is integration, not ignoring particulars.',
        ],
      },
    ],
    [
      'Ask for the relevant frequency before interpreting vivid details.',
      'Natural frequencies make many probability errors easier to see.',
      'Base rates anchor inquiry without replacing case evidence.',
    ],
    [
      pagePath('/case-studies', 'Base-Rate Neglect'),
      pagePath('/core-ideas', 'Priors'),
      pagePath('/skills', 'How to Estimate Priors'),
    ],
  ),
  skillPage(
    'How to Detect Overconfidence',
    'Detecting overconfidence means noticing when assigned credence outruns evidential support.',
    [
      {
        heading: 'Watch for Certainty Markers',
        body: [
          'Overconfidence often announces itself through language: obviously, impossible, no serious person, everyone knows, case closed. These phrases may be justified sometimes, but they should trigger a calibration check.',
        ],
      },
      {
        heading: 'Use the Rival Test',
        body: [
          'Ask whether a reasonable rival could hold a different credence without being stupid or corrupt. If yes, your certainty should probably come down. The existence of competent disagreement does not make all views equal, but it often widens warranted uncertainty.',
        ],
      },
      {
        heading: 'Check Track Record',
        body: [
          'Overconfidence becomes visible over time. Keep a small prediction log. If your 90 percent claims are true only 60 percent of the time, the problem is not bad luck; it is miscalibration.',
        ],
      },
    ],
    [
      'Certainty language should trigger calibration checks.',
      'Competent disagreement often widens warranted uncertainty.',
      'Prediction logs reveal overconfidence over time.',
    ],
    [
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/case-studies', 'Biased Expert Cases'),
    ],
  ),
  skillPage(
    'How to Detect Motivated Override',
    'Motivated override occurs when fear, desire, identity, or incentives pull assigned credence away from perceived evidence.',
    [
      {
        heading: 'Look for Asymmetric Standards',
        body: [
          'Ask whether you demand more evidence from unwelcome claims than from welcome ones. Asymmetric standards are one of the clearest signs that motivation has entered the credencing process.',
        ],
      },
      {
        heading: 'Notice Identity Threat',
        body: [
          'Motivated override often appears when a belief is tied to who you are, who your people are, or what your past choices mean. If changing your mind feels like humiliation or betrayal, Core Rationality is under pressure.',
        ],
      },
      {
        heading: 'Name the Split',
        body: [
          'A useful sentence is: "My perceived evidence is X, but I notice pressure to believe Y." Naming the split helps keep Perceived Evidence (EP) and Assigned Credence (CA) from collapsing into one another.',
        ],
      },
    ],
    [
      'Asymmetric standards reveal motivated override.',
      'Identity threat pressures Core Rationality.',
      'Naming the Perceived Evidence to Assigned Credence split (EP-CA) makes repair possible.',
    ],
    [
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/interactive-lab', 'Biased Expert'),
    ],
  ),
  skillPage(
    'How to Separate Core from Deep Failure',
    'Separating Core from Deep failure means diagnosing whether the main problem is perception, skill, or belief integrity.',
    [
      {
        heading: 'Ask Where the First Gap Opens',
        body: [
          'If the agent does not perceive the evidence accurately, begin with Deep Rationality. If the agent perceives the evidence but assigns a different credence, begin with Core Rationality.',
        ],
      },
      {
        heading: 'Use the Repair Test',
        body: [
          'Ask what would fix the problem. If better data, base rates, feedback, or statistical tools would help, the failure is probably Deep. If the agent already has enough information but cannot bear the implication, the failure is Core.',
        ],
      },
      {
        heading: 'Expect Mixed Cases',
        body: [
          'Many real cases involve both. A person may consume distorted information and also resist correction. The point is not to force purity, but to avoid using one diagnosis for every problem.',
        ],
      },
    ],
    [
      'Deep failure concerns Objective Evidence to Perceived Evidence (E0-EP).',
      'Core failure concerns Perceived Evidence to Assigned Credence (EP-CA).',
      'The repair test helps identify the main diagnosis.',
    ],
    [
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/interactive-lab', 'Interpretation Guide'),
      pagePath('/case-studies', 'Honest Novice Cases'),
    ],
  ),
  skillPage(
    'How to Express Uncertainty Honestly',
    'Honest uncertainty is specific, proportionate, and open to update.',
    [
      {
        heading: 'Avoid Fog Words Alone',
        body: [
          'Words like maybe, possibly, likely, and certainly can help, but they are often too elastic. Pair them with rough ranges or explanations. "Likely, around 70 percent" is clearer than "probably" by itself.',
        ],
      },
      {
        heading: 'Say What You Do Not Know',
        body: [
          'Good uncertainty is not a decorative disclaimer. It identifies the missing information, live alternatives, weak assumptions, or evidence that would matter next.',
        ],
      },
      {
        heading: 'Do Not Use Uncertainty Selectively',
        body: [
          'If uncertainty appears only when evidence is inconvenient, it becomes a shield. Honest uncertainty applies across the board, including to claims you want to be true.',
        ],
      },
    ],
    [
      'Use ranges when possible.',
      'Name the source of uncertainty.',
      'Apply uncertainty symmetrically.',
    ],
    [
      pagePath('/core-ideas', 'Uncertainty'),
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/case-studies', 'Pragmatic Encroachment'),
    ],
  ),
  skillPage(
    'How to Ask Better Epistemic Questions',
    'Better epistemic questions locate evidence, confidence, alternatives, update conditions, and possible gaps.',
    [
      {
        heading: 'Questions About Evidence',
        body: [
          'Ask what evidence exists, what evidence is missing, what evidence would be expected if the claim were false, and how reliable the source or method is.',
        ],
        bullets: [
          'What would I expect to see if this were true?',
          'What would I expect to see if this were false?',
          'What alternative explanations remain live?',
          'How often does this source or method get similar claims right?',
        ],
      },
      {
        heading: 'Questions About Confidence',
        body: [
          'Ask how strong the credence is, whether the confidence matches the evidence, and what would move it. A belief without update conditions is not yet fully answerable to evidence.',
        ],
      },
      {
        heading: 'Questions About Gaps',
        body: [
          'Ask whether the likely problem is Objective Evidence to Perceived Evidence (E0-EP) or Perceived Evidence to Assigned Credence (EP-CA). Are we missing tools and evidence, or are we resisting what we already see? This question often changes the whole conversation.',
        ],
      },
    ],
    [
      'Good questions make evidence, alternatives, and confidence explicit.',
      'Update conditions are central.',
      'Gap questions distinguish skill problems from integrity problems.',
    ],
    [
      pagePath('/interactive-lab', 'Interpretation Guide'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
    ],
  ),
  skillPage(
    'Practice Exercises',
    'Practice exercises help turn credencing from a vocabulary into a habit.',
    [
      {
        heading: 'Daily Calibration',
        body: [
          'Write three predictions each day with confidence levels. Later, check outcomes. The aim is to discover whether your confidence language is too strong, too weak, or domain-dependent.',
        ],
      },
      {
        heading: 'The Two-Gap Journal',
        body: [
          'For one belief that matters, write Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD) estimates. Then identify the largest gap. Ask whether the next repair should be better evidence, better reasoning, or more honesty about what you already perceive.',
        ],
      },
      {
        heading: 'The Rival Reconstruction',
        body: [
          'Choose a belief you reject. Reconstruct the strongest version of the rival evidence and assign it a credence from the rival perspective. Then return to your own credence and ask whether it should move.',
        ],
      },
    ],
    [
      'Prediction logs build calibration.',
      'Two-gap journaling applies the model to live beliefs.',
      'Rival reconstruction reduces one-sided evidence perception.',
    ],
    [
      pagePath('/skills', 'How to Think in Credences'),
      pagePath('/skills', 'How to Update with New Evidence'),
      pagePath('/interactive-lab', 'Build Your Own Scenario'),
    ],
  ),
];

function discussionPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/discussion-groups', title),
    groupTitle: 'Discussion Groups',
    groupPath: '/discussion-groups',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const discussionPages: ContentPage[] = [
  discussionPage(
    'Group Discussion Guide',
    'A practical guide for using Credencing in classrooms, clubs, reading groups, workshops, and civic discussion circles.',
    [
      {
        heading: 'Purpose',
        body: [
          'This section is for groups that want to practice better disagreement. The goal is not to win arguments. The goal is to make confidence visible, ask what evidence would move us, and notice the difference between honest uncertainty and defensive certainty.',
          'The sessions are written at a senior high school level, but they can be used by adults, college classes, teacher groups, civic groups, or informal reading circles. Each session includes discussion questions plus expandable guidance and feedback.',
        ],
      },
      {
        heading: 'Group Norms',
        body: [
          'A good Credencing discussion begins with charity and precision. Participants should speak in degrees of confidence, name the evidence they are using, distinguish evidence from identity, and say what would change their minds.',
          'The group should avoid turning the model into a weapon. Saying “you are irrational” usually ends inquiry. A better sentence is: “I think there may be a gap between the evidence you described and the confidence you assigned.”',
        ],
      },
      {
        heading: 'Basic Session Rhythm',
        body: [
          'A useful rhythm is: define the concept, examine a historical example, test a hypothetical scenario, apply the idea to a contemporary issue, and close with a private reflection.',
          'Most sessions can fit into 45 to 75 minutes. For shorter meetings, use one historical example and one discussion question. For longer meetings, split into small groups and compare diagnoses.',
        ],
      },
      {
        heading: 'Facilitator Cautions',
        body: [
          'Do not demand personal disclosure. Participants can practice the model with public examples, fictional cases, or low-stakes personal decisions before discussing sensitive beliefs.',
          'When disagreement becomes tense, return to the model: What is the claim? What is the evidence? What confidence is being assigned? What would count as an update?',
        ],
      },
    ],
    [
      'The group goal is better inquiry, not debate victory.',
      'Participants should practice confidence levels, update conditions, and diagnostic charity.',
      'The model should be used to clarify gaps, not insult people.',
      'Each session moves from concept to examples to reflection.',
    ],
    [
      pagePath('/discussion-groups', 'Facilitator Toolkit'),
      pagePath('/library', 'Teaching Materials'),
      pagePath('/skills', 'Practice Exercises'),
    ],
  ),
  discussionPage(
    'Session 1: Credences and Confidence',
    'This session introduces credences as degrees of confidence rather than simple yes-or-no belief.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'A credence is a confidence level. Instead of saying only “I believe it” or “I do not believe it,” participants practice saying “I am 60 percent confident” or “I lean toward this, but weakly.”',
          'The session helps participants see why binary belief is too crude for real reasoning. Many claims deserve partial confidence, and many arguments fail because people treat partial confidence as certainty.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'Before weather forecasting became data-rich, people often relied on sayings, local memory, and visible signs. Modern forecasting improved by turning uncertainty into probabilities: a 30 percent chance of rain is not a failed prediction if rain does not occur.',
          'This example shows why confidence levels matter. The point is not to erase uncertainty, but to make uncertainty useful.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Online headlines often push readers toward instant certainty. A group can ask: what confidence would this headline deserve before reading the full article? What confidence after checking the source, evidence, and context?',
        ],
      },
    ],
    [
      'Credences are degrees of confidence.',
      'Binary belief often hides important uncertainty.',
      'Probabilistic language can make disagreement calmer and clearer.',
    ],
    [
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/discussion-groups', 'Session 2: Evidence and Perception'),
    ],
  ),
  discussionPage(
    'Session 2: Evidence and Perception',
    'This session separates evidence in the world from what people notice, interpret, remember, and feel.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'Credencing separates Objective Evidence (E0) from Perceived Evidence (EP). Objective Evidence is the evidential situation. Perceived Evidence is what an agent takes the evidence to show after attention, framing, memory, and interpretation.',
          'The session helps participants understand honest error. A person can be wrong because they had poor evidence, missed important context, or interpreted real evidence badly.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'In the early history of medicine, some treatments were trusted because they fit familiar theories or because respected authorities recommended them. Later evidence showed that some practices were ineffective or harmful.',
          'The lesson is not that earlier people were stupid. Often they lacked better measurement tools, controlled experiments, or reliable comparison groups.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Social media feeds shape perceived evidence by repeating some examples and hiding others. A person may feel that an event is common because their feed shows it often, even if the wider base rate is low.',
        ],
      },
    ],
    [
      'Evidence and perceived evidence are not always the same.',
      'Bad perception can come from poor access, weak tools, or distorted environments.',
      'Repair often begins by improving evidence access and context.',
    ],
    [
      pagePath('/core-ideas', 'Objective Evidence (E0)'),
      pagePath('/core-ideas', 'Perceived Evidence (EP)'),
      pagePath('/discussion-groups', 'Session 3: Priors, Base Rates, and Likelihoods'),
    ],
  ),
  discussionPage(
    'Session 3: Priors, Base Rates, and Likelihoods',
    'This session teaches participants to use background rates and diagnostic evidence before jumping to conclusions.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'A prior is a starting confidence before new evidence is considered. A base rate is the background frequency of something in a relevant group. A likelihood asks how expected the evidence would be if a claim were true.',
          'The session helps participants avoid being captured by vivid stories. A dramatic example may matter, but it should be judged against the background rate and the diagnostic strength of the detail.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'In wartime, governments sometimes overestimated threats because vivid incidents were easier to remember than quieter background data. Good intelligence work requires asking how common an event is and how strongly a new signal changes the estimate.',
          'This illustrates why base rates are not cold or irrelevant. They protect judgment from being ruled by the most dramatic case.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Medical screening tests are a useful modern example. A positive test result can be serious without being certain. The meaning depends on the condition’s base rate and the test’s false-positive and false-negative rates.',
        ],
      },
    ],
    [
      'Priors and base rates anchor confidence before new evidence arrives.',
      'Likelihoods measure how diagnostic new evidence is.',
      'Vivid stories should be integrated with background rates.',
    ],
    [
      pagePath('/core-ideas', 'Priors'),
      pagePath('/case-studies', 'Medical Testing'),
      pagePath('/discussion-groups', 'Session 4: Updating and Changing Minds'),
    ],
  ),
  discussionPage(
    'Session 4: Updating and Changing Minds',
    'This session treats changing one’s mind as a rational skill rather than a social defeat.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'Updating means changing confidence when evidence changes. A rational update does not always mean flipping sides. Sometimes it means moving from 80 percent confidence to 65 percent confidence.',
          'The session emphasizes update conditions: what observation, argument, or evidence would make your confidence go up or down?',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'Scientific revolutions often involve difficult updates. When better evidence supported heliocentrism, germ theory, or plate tectonics, many people had to revise views that had once seemed obvious or respectable.',
          'These cases show that updating can be slow when new evidence threatens authority, tradition, or professional identity.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Public figures often avoid admitting updates because opponents may call it weakness. The group can discuss how a healthier public culture would distinguish careless flip-flopping from honest revision.',
        ],
      },
    ],
    [
      'Updating is movement in confidence, not always a total reversal.',
      'Update conditions make reasoning accountable.',
      'A healthy group rewards honest revision.',
    ],
    [
      pagePath('/core-ideas', 'Bayesian Updating'),
      pagePath('/skills', 'How to Update with New Evidence'),
      pagePath('/discussion-groups', 'Session 5: Bias, Identity, and Core Rationality'),
    ],
  ),
  discussionPage(
    'Session 5: Bias, Identity, and Core Rationality',
    'This session examines how fear, loyalty, status, and identity can pull assigned confidence away from perceived evidence.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'Core Rationality is the willingness to assign confidence according to what one takes the evidence to show. Core Irrationality appears when Assigned Credence (CA) pulls away from Perceived Evidence (EP).',
          'The point is not to shame people. The point is to notice when identity, fear, loyalty, or incentives are doing the work that evidence should do.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'During political scandals, supporters often apply different standards to their own side than to opponents. The same evidence may be dismissed as irrelevant when it threatens the group, but treated as decisive when it harms the rival group.',
          'This shows selective skepticism: high standards for unwelcome evidence, low standards for welcome evidence.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Online communities can make belief feel like loyalty. A person may privately see that a claim is weak but continue defending it because changing their mind would risk belonging.',
        ],
      },
    ],
    [
      'Core Rationality concerns belief integrity.',
      'Bias often protects identity, status, or belonging.',
      'The repair may require social safety, not just more facts.',
    ],
    [
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/discussion-groups', 'Session 6: Uncertainty, Action, and Risk'),
    ],
  ),
  discussionPage(
    'Session 6: Uncertainty, Action, and Risk',
    'This session separates what confidence is warranted from what action is appropriate under risk.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'Uncertainty is not failure. Sometimes uncertainty is exactly what the evidence warrants. The important question is whether confidence is calibrated and whether the action threshold has been met.',
          'Credence and action are related but distinct. A person may act on incomplete evidence when the cost of waiting is high, or wait for more evidence when the cost of a mistake is high.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'Public health decisions often require action before perfect certainty. During outbreaks, leaders must balance evidence quality, delay costs, economic costs, and public trust.',
          'The discussion should separate factual confidence from action thresholds: how confident are we that X is true, and how much confidence is enough to act?',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Climate policy, emergency alerts, medical treatment, and school safety decisions all involve action under uncertainty. Groups can ask which mistakes are most costly and how that changes the action threshold.',
        ],
      },
    ],
    [
      'Uncertainty can be rational.',
      'Action thresholds depend on stakes.',
      'Good decisions separate confidence, values, and costs of error.',
    ],
    [
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/case-studies', 'Pragmatic Encroachment'),
      pagePath('/discussion-groups', 'Session 7: Media, Institutions, and Public Debate'),
    ],
  ),
  discussionPage(
    'Session 7: Media, Institutions, and Public Debate',
    'This session applies credencing to journalism, organizations, public debate, and institutional trust.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'Institutions shape what people perceive as evidence. Newsrooms, courts, schools, governments, and companies decide what is measured, reported, repeated, hidden, rewarded, or punished.',
          'The group should ask whether an institution has good evidence pipelines and whether it can update publicly without treating correction as humiliation.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'The Watergate investigation is a useful example of institutional evidence work: reporting, documents, hearings, courts, and public pressure gradually changed what many people were willing to believe.',
          'It also shows why public trust depends on methods. People need to know not only what is claimed, but how the claim was checked.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Misinformation spreads faster when people reward confidence over accuracy. A group can discuss how platforms, schools, and news organizations could make confidence claims more accountable.',
        ],
      },
    ],
    [
      'Institutions mediate public evidence.',
      'Public debate often rewards overconfidence.',
      'Trust improves when methods, uncertainty, and corrections are visible.',
    ],
    [
      pagePath('/applications', 'Journalism'),
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/discussion-groups', 'Session 8: AI, Expertise, and the Future'),
    ],
  ),
  discussionPage(
    'Session 8: AI, Expertise, and the Future',
    'This session uses credencing to discuss AI systems, expert judgment, overtrust, and future decision-making.',
    [
      {
        heading: 'Concept Focus',
        body: [
          'AI makes credencing more important because it can produce fluent answers that feel authoritative. A user must ask: what evidence supports this output, how confident should I be, and what checks are needed before acting?',
          'Expertise also requires credencing. Experts deserve more weight inside their domain, but expertise is not unlimited authority and does not remove uncertainty.',
        ],
      },
      {
        heading: 'Historical Example',
        body: [
          'Earlier technologies such as printing, radio, television, and search engines changed how people formed beliefs. Each made some knowledge easier to share, but each also created new ways to spread error or propaganda.',
          'AI continues that pattern. The issue is not only whether the tool is powerful, but how people assign confidence to what the tool produces.',
        ],
      },
      {
        heading: 'Contemporary Issue',
        body: [
          'Students, doctors, lawyers, journalists, and managers now face AI-assisted work. Groups can discuss where AI is useful, where verification is essential, and when human overtrust becomes the main danger.',
        ],
      },
    ],
    [
      'AI outputs require calibrated confidence, not automatic trust.',
      'Experts deserve domain-sensitive deference, not unlimited authority.',
      'Future institutions need better confidence governance.',
    ],
    [
      pagePath('/applications', 'AI Alignment'),
      pagePath('/applications', 'Science'),
      pagePath('/discussion-groups', 'Facilitator Toolkit'),
    ],
  ),
  discussionPage(
    'Facilitator Toolkit',
    'The facilitator toolkit provides practical methods for running fair, focused, and productive Credencing discussions.',
    [
      {
        heading: 'Before the Meeting',
        body: [
          'Choose one claim, one concept, and one case. A group that tries to discuss “truth,” “politics,” and “AI” all at once will usually drift into slogans.',
          'Prepare a visible board with four columns: Claim, Evidence, Confidence, Update Condition. This keeps discussion concrete.',
        ],
      },
      {
        heading: 'During the Meeting',
        body: [
          'Invite participants to state confidence levels in ranges, such as 40-60 percent, rather than demanding exact numbers. Ask follow-up questions gently: what evidence moves you, what evidence would lower confidence, and what uncertainty remains?',
          'When conflict rises, slow the conversation. Ask each side to restate the other side’s strongest evidence before replying.',
        ],
      },
      {
        heading: 'After the Meeting',
        body: [
          'Close by asking each person to write one sentence: “My confidence changed from ___ to ___ because ___.” If confidence did not change, ask what evidence would have changed it.',
          'Groups improve when they track updates over time. A simple prediction log or discussion journal can turn conversation into calibration practice.',
        ],
      },
      {
        heading: 'Feedback Language',
        body: [
          'Useful feedback is specific and non-accusatory. Try: “I hear strong confidence, but I am not yet hearing the evidence that supports that level.” Or: “It sounds like the evidence changed, but the confidence did not. Is that right?”',
          'Avoid turning the model into labels for people. Diagnose belief states, not whole persons.',
        ],
      },
    ],
    [
      'Good facilitation keeps claims specific.',
      'Confidence ranges are often better than fake precision.',
      'Participants should practice update conditions and charitable restatement.',
      'Feedback should target belief states, not personal worth.',
    ],
    [
      pagePath('/discussion-groups', 'Group Discussion Guide'),
      pagePath('/library', 'Teaching Materials'),
      pagePath('/about', 'Contact'),
    ],
  ),
];

function applicationPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/applications', title),
    groupTitle: 'Applications',
    groupPath: '/applications',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const applicationPages: ContentPage[] = [
  applicationPage(
    'Science',
    'Science is organized credencing: a public system for making confidence answerable to evidence, method, and replication.',
    [
      {
        heading: 'Why Science Needs Credencing',
        body: [
          'Science rarely moves by instant certainty. It moves through graded confidence, converging evidence, error correction, replication, and revision. A scientific claim may be plausible, supported, well-established, or still speculative. Those levels matter.',
          'Credencing helps describe the difference between a single study, a robust finding, a theoretical framework, and a settled measurement. It also helps distinguish honest uncertainty from motivated resistance to inconvenient evidence.',
        ],
      },
      {
        heading: 'Where Science Goes Wrong',
        body: [
          'Scientific failure can be Deep: poor measurement, weak statistics, biased sampling, bad priors, or underpowered studies. It can also be Core: prestige protection, paradigm loyalty, publication incentives, or unwillingness to revise a favored theory.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'The repair is institutional as much as individual: preregistration, replication, adversarial collaboration, open data, prediction markets, error correction norms, and credit for revision. Science improves when it lowers the social cost of changing credence.',
        ],
      },
    ],
    [
      'Science works through graded confidence, not instant certainty.',
      'Failures can be methodological or motivational.',
      'Healthy scientific institutions reward correction.',
    ],
    [
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/case-studies', 'Biased Expert Cases'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
  applicationPage(
    'Medicine',
    'Medicine applies credencing under uncertainty, high stakes, imperfect tests, and emotionally loaded outcomes.',
    [
      {
        heading: 'Probabilistic Care',
        body: [
          'Diagnosis, prognosis, screening, and treatment decisions are all credencing problems. Clinicians and patients must combine base rates, symptoms, test accuracy, patient history, clinical judgment, and risk tolerance.',
          'The difficulty is that medical evidence is both statistical and personal. A population risk must be translated into a decision for this patient without pretending the statistics disappear.',
        ],
      },
      {
        heading: 'Where Medicine Goes Wrong',
        body: [
          'Deep failures include base-rate neglect, misunderstanding test accuracy, overgeneralizing from small studies, and confusing relative risk with absolute risk. Core failures include denial, fear inflation, defensive medicine, and attachment to a diagnosis that has become part of identity.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Good medical credencing separates probability from preference. It states the evidence, uncertainty, patient values, and action threshold. Shared decision-making works best when patients are not forced to choose between false certainty and helpless confusion.',
        ],
      },
    ],
    [
      'Medical judgment is probabilistic and high-stakes.',
      'Test results require base rates and accuracy context.',
      'Patient values affect action thresholds, not the evidence itself.',
    ],
    [
      pagePath('/case-studies', 'Medical Testing'),
      pagePath('/skills', 'How to Avoid Base-Rate Neglect'),
      pagePath('/case-studies', 'Pragmatic Encroachment'),
    ],
  ),
  applicationPage(
    'Journalism',
    'Journalism shapes public perceived evidence by selecting, framing, verifying, and repeating claims.',
    [
      {
        heading: 'Journalism as Evidence Mediation',
        body: [
          'Most citizens do not encounter public evidence directly. Journalism mediates E0 into public EP by choosing what to report, what context to include, what experts to quote, what uncertainty to preserve, and what headline to write.',
          'This gives journalism enormous epistemic power. It can clarify the evidence field or distort it through selection, compression, sensationalism, false balance, or narrative overconfidence.',
        ],
      },
      {
        heading: 'Where Journalism Goes Wrong',
        body: [
          'Deep failures include weak verification, missing base rates, poor statistical framing, and lack of domain expertise. Core failures include audience capture, ideological filtering, traffic incentives, and reluctance to correct errors that served the outlet brand.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Credencing-friendly journalism gives confidence levels, distinguishes allegation from finding, reports base rates, links primary evidence, names uncertainty, and updates visibly. It treats correction as part of credibility rather than a threat to it.',
        ],
      },
    ],
    [
      'Journalism mediates public EP.',
      'Headlines can inflate confidence beyond the evidence.',
      'Good journalism makes uncertainty and updates visible.',
    ],
    [
      pagePath('/case-studies', 'Risk Inflation'),
      pagePath('/applications', 'Public Debate'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
    ],
  ),
  applicationPage(
    'Law',
    'Law formalizes action thresholds under uncertainty: suspicion, probable cause, preponderance, and proof beyond reasonable doubt.',
    [
      {
        heading: 'Legal Standards as Credence Thresholds',
        body: [
          'Legal systems already recognize that different actions require different levels of confidence. Search, arrest, civil liability, and criminal conviction do not require the same evidential threshold.',
          'Credencing clarifies why. The question is not only what is probably true, but what level of confidence is sufficient given the cost of error.',
        ],
      },
      {
        heading: 'Where Law Goes Wrong',
        body: [
          'Deep failures include unreliable eyewitness testimony, forensic overstatement, base-rate neglect, and poor statistical reasoning. Core failures include motivated prosecution, defensive policing, jury identity bias, and institutional resistance to exculpatory evidence.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Legal credencing requires explicit standards of proof, careful treatment of error rates, adversarial testing, disclosure obligations, and humility about testimony and forensic confidence. A just system must care not only about truth, but about warranted confidence.',
        ],
      },
    ],
    [
      'Legal standards are action thresholds under uncertainty.',
      'Different decisions require different credence levels.',
      'Error rates and motivated incentives must be kept visible.',
    ],
    [
      pagePath('/case-studies', 'Pragmatic Encroachment'),
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
  applicationPage(
    'Education',
    'Education should teach students how to form, scale, revise, and explain confidence.',
    [
      {
        heading: 'Beyond Correct Answers',
        body: [
          'Education often rewards answer production more than confidence calibration. Students learn to say what they think the teacher wants, not how sure they are, what evidence supports it, or what would revise it.',
          'A credencing-aware education asks students to distinguish knowing, suspecting, guessing, and being uncertain for specific reasons.',
        ],
      },
      {
        heading: 'Skills to Teach',
        body: [
          'Students can learn base rates, likelihood comparison, source reliability, uncertainty expression, steelmanning, prediction logs, and update conditions. These are not only philosophy skills; they are civic and scientific skills.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Classrooms should reward calibrated uncertainty, revision, and evidence-aware confidence. The student who responsibly changes their mind should be treated as succeeding, not losing.',
        ],
      },
    ],
    [
      'Education should teach calibration, not only correctness.',
      'Students need language for degrees of confidence.',
      'Revision should be rewarded as a rational success.',
    ],
    [
      pagePath('/skills', 'Practice Exercises'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
      pagePath('/core-ideas', 'Calibration'),
    ],
  ),
  applicationPage(
    'Public Debate',
    'Public debate improves when participants expose confidence, evidence, update conditions, and action thresholds.',
    [
      {
        heading: 'The Problem With Performative Certainty',
        body: [
          'Public debate rewards confidence displays. The person who speaks with the most force can appear more credible than the person who speaks with calibrated uncertainty. This pushes CA upward for social reasons.',
          'The result is a public sphere where people often argue from conclusions rather than toward them.',
        ],
      },
      {
        heading: 'Credencing Norms',
        body: [
          'Better debate asks participants to state confidence levels, identify strongest evidence, name uncertainty, specify update conditions, and distinguish belief from action threshold.',
          'These norms do not remove disagreement. They make disagreement more informative.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair requires platforms, moderators, institutions, and communities to reward epistemic behavior rather than only rhetorical victory. The best public debater is not the least uncertain person; it is the person whose confidence remains answerable.',
        ],
      },
    ],
    [
      'Public debate often rewards overconfident CA.',
      'Credence levels and update conditions improve disagreement.',
      'Rhetorical victory should not replace evidence responsiveness.',
    ],
    [
      pagePath('/case-studies', 'Political Tribalism'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
      pagePath('/applications', 'Journalism'),
    ],
  ),
  applicationPage(
    'Policy',
    'Policy decisions require explicit credences because action must occur under uncertainty and unequal stakes.',
    [
      {
        heading: 'Policy as Collective Action Under Uncertainty',
        body: [
          'Policy rarely enjoys certainty. Leaders must act with incomplete evidence, contested models, value tradeoffs, and delayed feedback. Credencing helps separate factual confidence from value judgments and action thresholds.',
        ],
      },
      {
        heading: 'Where Policy Goes Wrong',
        body: [
          'Deep failures include bad data, weak models, poor causal inference, and neglect of unintended consequences. Core failures include ideological lock-in, donor pressure, bureaucratic self-protection, and refusal to update when policies fail.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Credencing-friendly policy uses pilot programs, uncertainty intervals, public forecasts, sunset clauses, precommitted evaluation metrics, and visible updates. It treats policy as learning, not as identity performance.',
        ],
      },
    ],
    [
      'Policy must act before certainty.',
      'Separate empirical confidence from value preference.',
      'Evaluation and revision should be built into policy design.',
    ],
    [
      pagePath('/case-studies', 'Risk Inflation'),
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/skills', 'How to Update with New Evidence'),
    ],
  ),
  applicationPage(
    'Personal Decision-Making',
    'Personal decisions improve when feelings, evidence, uncertainty, and action thresholds are kept distinct.',
    [
      {
        heading: 'Life Decisions Are Credencing Problems',
        body: [
          'Career choices, relationships, relocation, health decisions, and creative risks all require belief under uncertainty. The evidence is often incomplete, emotionally charged, and personally expensive to revise.',
          'Credencing does not make life mechanical. It gives a person a way to ask what they know, what they fear, what they hope, and what confidence their evidence can actually bear.',
        ],
      },
      {
        heading: 'Common Failure Modes',
        body: [
          'People inflate confidence to escape ambiguity, deflate confidence to avoid responsibility, ignore base rates because their story feels unique, or treat anxiety as evidence. They may also keep believing a plan is good because changing direction would threaten identity.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Use two-gap journaling: estimate Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD) for the decision. Then separate evidence from affect. Ask what action threshold is appropriate under the stakes, and what small experiment would improve the evidence.',
        ],
      },
    ],
    [
      'Personal decisions mix evidence, emotion, and identity.',
      'Anxiety and desire should be named separately from credence.',
      'Small experiments can improve EP before irreversible action.',
    ],
    [
      pagePath('/skills', 'Practice Exercises'),
      pagePath('/case-studies', 'Fear Overrides'),
      pagePath('/interactive-lab', 'Build Your Own Scenario'),
    ],
  ),
  applicationPage(
    'AI Alignment',
    'AI alignment needs credencing because systems, developers, users, and institutions all act under uncertain models of risk and capability.',
    [
      {
        heading: 'Alignment as Epistemic Governance',
        body: [
          'AI alignment is not only a technical control problem. It is also an epistemic problem: how do institutions assign confidence about capability, risk, interpretability, misuse, deployment readiness, and social impact?',
          'Credencing helps make those confidence assignments explicit rather than hiding them inside product timelines, public relations, or vague optimism and pessimism.',
        ],
      },
      {
        heading: 'Where Alignment Goes Wrong',
        body: [
          'Deep failures include weak evaluation, benchmark overfitting, poor threat modeling, and uncertainty about emergent behavior. Core failures include commercial pressure, reputational incentives, ideological overconfidence, and selective attention to convenient safety evidence.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Alignment governance should make confidence levels public where possible, require update conditions, use adversarial evaluations, track forecasts, separate capability evidence from safety evidence, and protect dissenting risk assessments.',
        ],
      },
    ],
    [
      'AI alignment involves institutional credencing under uncertainty.',
      'Capability confidence and safety confidence must be separated.',
      'Governance needs protected update mechanisms.',
    ],
    [
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/skills', 'How to Detect Overconfidence'),
      pagePath('/case-studies', 'Biased Expert Cases'),
    ],
  ),
  applicationPage(
    'Institutional Diagnostics',
    'Institutional diagnostics applies the two-gap model to organizations, not only individuals.',
    [
      {
        heading: 'Organizations Have Credences',
        body: [
          'Institutions assign confidence through reports, budgets, policies, risk ratings, hiring, forecasts, and public statements. They may not call these credences, but they act as if some claims are more likely or more important than others.',
        ],
      },
      {
        heading: 'Institutional Objective Evidence to Perceived Evidence Gaps (E0-EP)',
        body: [
          'Organizations misperceive evidence when data pipelines are bad, feedback is filtered, dissent is punished, metrics are gamed, or leaders are insulated from ground truth. This is institutional Deep Rationality failure.',
        ],
      },
      {
        heading: 'Institutional Perceived Evidence to Assigned Credence Gaps (EP-CA)',
        body: [
          'Organizations can also perceive a problem and still refuse to assign public confidence accordingly. They may bury known risks, soften warnings, overstate success, or maintain official optimism because the cost of honesty is high.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repair requires feedback channels, protected dissent, red teams, audit trails, prediction records, independent review, and leadership norms that reward early correction. Institutions become wiser when they make it safe to notice and safe to update.',
        ],
      },
    ],
    [
      'Institutions have practical credences even when they do not name them.',
      'Bad feedback creates Objective Evidence to Perceived Evidence gaps (E0-EP).',
      'Suppressed knowledge creates Perceived Evidence to Assigned Credence gaps (EP-CA).',
      'Protected dissent is an epistemic technology.',
    ],
    [
      pagePath('/applications', 'Science'),
      pagePath('/applications', 'Policy'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
    ],
  ),
];

function libraryPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/library', title),
    groupTitle: 'Library',
    groupPath: '/library',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

type PaperIntro = {
  title: string;
  summary: string;
  plainAbstract: string[];
  siteConnection: string[];
  readerUse: string[];
  keyTakeaways: string[];
  related: string[];
};

function paperIntroPage(paper: PaperIntro): ContentPage {
  return libraryPage(
    paper.title,
    paper.summary,
    [
      {
        heading: 'Low-Register Abstract',
        body: paper.plainAbstract,
      },
      {
        heading: 'How It Fits Credencing',
        body: paper.siteConnection,
      },
      {
        heading: 'How to Read It',
        body: paper.readerUse,
      },
    ],
    paper.keyTakeaways,
    [pagePath('/library', 'Papers'), ...paper.related],
  );
}

const paperIntroPages: ContentPage[] = [
  paperIntroPage({
    title: 'Core Rationality',
    summary: 'A simple introduction to the difference between being good at reasoning tools and being honest with the evidence one already sees.',
    plainAbstract: [
      'This paper says that rationality has two parts that are often mixed together. One part is technical skill: knowing probability, logic, statistics, and formal argument. The other part is evidence-responsiveness: keeping your confidence close to what the evidence seems to support.',
      'The main claim is simple: a person can be highly trained and still dodge evidence, while a less trained person can still be admirably responsive to what they honestly see. That is why the site separates Deep Rationality from Core Rationality.',
    ],
    siteConnection: [
      'This is the conceptual bridge for the entire model. Deep Rationality (SD) tracks skill at reading evidence. Core Rationality tracks whether assigned credence follows perceived evidence.',
      'The interactive archetypes make this distinction visible: the honest novice may have low technical reach but little internal override, while the biased expert may have high technical reach and a serious integrity gap.',
    ],
    readerUse: [
      'Read this before the formal framework if you want the basic distinction first. Keep asking: is the problem lack of skill, lack of evidence, or resistance to evidence already perceived?',
    ],
    keyTakeaways: [
      'Rational skill and rational integrity are not the same thing.',
      'Core Rationality means keeping confidence responsive to perceived evidence.',
      'The distinction helps explain why smart people can still be badly miscalibrated.',
    ],
    related: [
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/interactive-lab', 'Epistemic Archetypes'),
    ],
  }),
  paperIntroPage({
    title: 'The Two-Gap Theory of Irrationality: Evidence Perception, Belief Integrity, and Diagnostic Repair',
    summary: 'The central two-gap paper distinguishing failures of evidence perception from failures of assigned confidence.',
    plainAbstract: [
      'This paper gives the Credencing project its most important diagnostic split. A person can go wrong because they do not see the evidence clearly, or because they see the evidence clearly enough but assign a confidence level that no longer follows what they see.',
      'The first gap runs from Objective Evidence (E0) to Perceived Evidence (EP). The second runs from Perceived Evidence (EP) to Assigned Credence (CA). Once those gaps are separated, repair becomes more precise: improve access and skill for the first gap; improve belief integrity and updateability for the second.',
    ],
    siteConnection: [
      'This paper is the new spine for the public model. It explains why the site separates Calculation Error (DE) from Core Irrationality (IC), and why the interactive archetypes should not be read as one generic scale from rational to irrational.',
      'It also gives the Library a cleaner research map. The later papers on uncertainty, rationalization, institutions, and AI all extend the same two-gap architecture rather than starting separate projects.',
    ],
    readerUse: [
      'Read this after the formal framework if you want the diagnostic version of the model. Keep asking where the breakdown occurs: evidence access, evidence processing, confidence assignment, or update resistance.',
    ],
    keyTakeaways: [
      'Irrationality has at least two structurally different gaps.',
      'E0-EP failures call for better evidence processing.',
      'EP-CA failures call for better belief integrity and update conditions.',
    ],
    related: [
      pagePath('/library', 'A Formal Framework for Core and Deep Rationality'),
      pagePath('/core-ideas', 'Calculation Error (DE)'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
    ],
  }),
  paperIntroPage({
    title: 'Warranted Uncertainty: The Discipline of Not Knowing in a Credence-First Epistemology',
    summary: 'A calibration paper defending honest uncertainty as an achievement rather than a failure of inquiry.',
    plainAbstract: [
      'This paper argues that not knowing can be rationally disciplined. When evidence is incomplete, noisy, ambiguous, or model-dependent, the right response may be a confidence band rather than a single sharp number.',
      'The paper protects Credencing from becoming overconfident about its own diagnostics. A gap between Perceived Evidence (EP) and Assigned Credence (CA) matters, but some slack can be warranted by limited evidence, unclear base rates, competing hypotheses, or bounded skill.',
    ],
    siteConnection: [
      'This paper deepens the Warranted Uncertainty page and the interactive model’s slack zone. It explains why the site should distinguish raw disagreement between EP and CA from excess Core Irrationality after warranted uncertainty is considered.',
      'It also keeps Bayesian language usable. The goal is not false precision. The goal is confidence that stays answerable to evidence while admitting how much resolution the evidence can actually support.',
    ],
    readerUse: [
      'Read this whenever a discussion forces premature certainty. The practical move is to state confidence bands, live alternatives, missing evidence, and update conditions instead of pretending the evidence is sharper than it is.',
    ],
    keyTakeaways: [
      'Uncertainty can be rationally warranted.',
      'Confidence bands often fit evidence better than sharp numbers.',
      'Diagnostic slack prevents the model from overcalling irrationality.',
    ],
    related: [
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
      pagePath('/bayes-theorem', 'Common Mistakes'),
    ],
  }),
  paperIntroPage({
    title: 'Intelligence as Rationalization Engine: Deep Rationality, Core Rationality, and the Biased Expert',
    summary: 'A biased-expert paper explaining how high reasoning skill can defend a credence the evidence no longer supports.',
    plainAbstract: [
      'This paper asks why smart, trained, articulate people can be so hard to update. The answer is not that intelligence is bad. The answer is that intelligence improves evidence-processing power, and that power can serve either correction or defense.',
      'The biased expert may have a small Objective Evidence to Perceived Evidence gap because they understand the material well. The problem appears when Assigned Credence (CA) is pulled away from Perceived Evidence (EP) by identity, status, incentives, fear, hope, loyalty, or prior commitment.',
    ],
    siteConnection: [
      'This paper gives the Biased Expert archetype its full research treatment. It explains why Deep Rationality (SD) can reduce one gap while leaving the EP-CA gap large.',
      'It also adds safeguards against overdiagnosis. The paper requires traces such as asymmetric scrutiny, moving standards, directional update resistance, or refusal to state update conditions before treating disagreement as rationalization.',
    ],
    readerUse: [
      'Read this when expertise seems to make a person more convincing but not more updateable. Ask whether the reasoning is tracking evidence, or whether the tools are being used to protect a settled confidence level.',
    ],
    keyTakeaways: [
      'Intelligence can improve either inquiry or rationalization.',
      'The biased expert is a high-SD, high-IC pattern.',
      'Rationalization diagnoses need safeguards, not vibes.',
    ],
    related: [
      pagePath('/interactive-lab', 'Epistemic Archetypes'),
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/skills', 'How to Detect Motivated Override'),
    ],
  }),
  paperIntroPage({
    title: 'Institutional Credencing: Official Confidence, Evidence Pipelines, and Organizational Belief Integrity',
    summary: 'An institutional extension of Credencing for official confidence, evidence pipelines, dissent, and update trails.',
    plainAbstract: [
      'This paper extends the Credencing model from individual people to organizations. Institutions do not believe exactly as persons do, but they gather evidence, filter reports, produce internal assessments, publish official claims, and decide when to update.',
      'That means institutions can have analogues of Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD). They can miss evidence through damaged sensing channels, or they can register evidence internally while public confidence remains shaped by incentives, authority, legal exposure, or institutional identity.',
    ],
    siteConnection: [
      'This paper anchors the Institutional Diagnostics application. It explains how the two-gap model scales to committees, agencies, companies, labs, courts, media institutions, and schools.',
      'It also gives practical substance to audit trails, source traceability, dissent protection, confidence disclosure, and update records. Institutional credencing asks not only what an organization says, but how its confidence was formed and whether it can be revised.',
    ],
    readerUse: [
      'Read this when evaluating official statements, expert panels, public agencies, corporate claims, or academic consensus. Ask where the organization senses evidence, where it filters evidence, and where official confidence gets assigned.',
    ],
    keyTakeaways: [
      'Institutions have evidence pipelines and public credence states.',
      'Official confidence can diverge from internal evidence.',
      'Credence audits require traceability, dissent channels, and update trails.',
    ],
    related: [
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/applications', 'Journalism'),
      pagePath('/library', 'Against the Great Man: A Systems-Theoretic Critique of Individual Attribution'),
    ],
  }),
  paperIntroPage({
    title: 'AI as Deep Rationality Prosthetic: Evidence Processing, Delegated Credence, and Core Rationality in AI-Mediated Inquiry',
    summary: 'An AI-mediated inquiry paper arguing that better evidence processing does not automatically produce better assigned credence.',
    plainAbstract: [
      'This paper treats AI as a possible prosthetic for Deep Rationality. AI can widen search, summarize complex material, generate rival hypotheses, identify base rates, compare likelihoods, and find contradictions. Used well, it can help a user perceive the evidence more clearly.',
      'But AI cannot by itself secure Core Rationality. The final assignment of confidence still passes through human or institutional uptake. A user can use AI to see better, or use AI to make a preferred conclusion look better than the evidence warrants.',
    ],
    siteConnection: [
      'This paper ties the AI Alignment application directly into the two-gap model. AI can reduce E0-EP gaps while leaving EP-CA gaps untouched, hidden, or amplified.',
      'It also clarifies the site’s AI warnings: the danger is not only hallucination. The danger includes fluent false confidence, false precision, motivated prompting, automation bias, source opacity, delegated credence, and institutional laundering.',
    ],
    readerUse: [
      'Read this when using AI for research, teaching, policy, diagnosis, writing, or institutional review. Ask what the AI changed in your perceived evidence, what uncertainty remains, and who is assigning the final credence.',
    ],
    keyTakeaways: [
      'AI can improve Deep Rationality without guaranteeing Core Rationality.',
      'Delegated evidence processing is not delegated credence.',
      'AI-mediated inquiry needs confidence bands, traceability, rival hypotheses, and update conditions.',
    ],
    related: [
      pagePath('/applications', 'AI Alignment'),
      pagePath('/discussion-groups', 'Session 8: AI, Expertise, and the Future'),
      pagePath('/library', 'Humanity as a Middle Child in the Age of AI: Patterns of Delegation and Epistemic Atrophy'),
    ],
  }),
  paperIntroPage({
    title: 'Evidence-Proportioned Belief: A Credence-First Reframing of Faith and Rationality',
    summary: 'A credence-first argument for treating rational belief as confidence scaled to evidence rather than as a binary yes-or-no state.',
    plainAbstract: [
      'This paper starts from a practical idea: belief should come in degrees. If the evidence is weak, confidence should be low. If the evidence is strong, confidence can rise. If the evidence changes, confidence should move with it.',
      'The paper pushes against language that treats faith, belief, or conviction as valuable simply because it is firm. On a credencing view, firmness is not the achievement. Calibration is the achievement.',
    ],
    siteConnection: [
      'This paper supplies one of the site’s central norms: do not ask only whether someone believes a claim. Ask how confident they are, what evidence that confidence is tracking, and whether the confidence would change if the evidence changed.',
      'It also supports the Bayes theorem pages, where the point is not mathematical performance for its own sake but disciplined movement from prior confidence to posterior confidence.',
    ],
    readerUse: [
      'Read this as the plain-language doorway into the whole project. Then use the Bayes section and the credence skills pages to practice scaling confidence instead of merely choosing sides.',
    ],
    keyTakeaways: [
      'Belief is better treated as graded confidence.',
      'The goal is calibration, not stubborn firmness.',
      'Evidence-proportioned belief is the heart of credencing.',
    ],
    related: [
      pagePath('/start-here', 'What Is Credencing?'),
      pagePath('/bayes-theorem', 'Bayes Theorem Overview'),
      pagePath('/skills', 'How to Scale Confidence to Evidence'),
    ],
  }),
  paperIntroPage({
    title: "Credence First: Against Plantinga's Warrant as an Epistemic Upgrade",
    summary: 'A critique of binary knowledge and warrant language in favor of graded confidence and measurable calibration.',
    plainAbstract: [
      'This paper argues that asking whether a belief has warrant can distract from the more useful question: how well calibrated is the person’s confidence? A belief can be held with great certainty even when the evidence does not deserve that certainty.',
      'The paper treats credencing as a better target than knowledge-talk because credencing stays continuous. It asks how much confidence is justified, not whether a belief has crossed some special status line.',
    ],
    siteConnection: [
      'This supports the site’s move away from all-or-nothing belief language. It also explains why overconfidence is not merely a social flaw; it is a measurable mismatch between evidence and assigned confidence.',
      'The critique is especially relevant to religious or ideological certainty, where a person may treat inner confidence as if it were itself evidence of truth.',
    ],
    readerUse: [
      'Read this after the basic credencing pages. Do not worry if the Plantinga discussion is technical; the practical point is that a high-confidence state still needs calibration against evidence.',
    ],
    keyTakeaways: [
      'Binary warrant language can hide miscalibration.',
      'Credencing asks how much confidence a claim deserves.',
      'Certainty is not automatically an epistemic achievement.',
    ],
    related: [
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/library', 'Faith, Trust, and Evidence-Weighted Confidence'),
    ],
  }),

  paperIntroPage({
    title: 'Humanity as a Middle Child in the Age of AI: Patterns of Delegation and Epistemic Atrophy',
    summary: 'A warning that over-delegating inference to AI can weaken the very judgment humans need to supervise it.',
    plainAbstract: [
      'This paper treats humanity as caught between older human reasoning habits and newer machine reasoning systems. The danger is not only that AI will be wrong. The danger is that people may stop practicing the effortful parts of judgment.',
      'Epistemic atrophy means a weakening of our ability to ask, doubt, compare, revise, and take responsibility for confidence. If a system gives fluent answers too easily, the user may outsource the struggle that normally builds rational skill.',
    ],
    siteConnection: [
      'The paper reinforces the site’s distinction between using tools and surrendering credence. AI can help with evidence search, comparison, and explanation, but the user still has to decide how much confidence is warranted.',
      'It also deepens the discussion of Deep Rationality (SD): formal and technical capacity can move into tools, but Core Rationality still requires active human responsiveness to perceived evidence.',
    ],
    readerUse: [
      'Read this alongside the AI Alignment and skills pages. A good practical test is: after using AI, can you explain what changed your confidence and why?',
    ],
    keyTakeaways: [
      'Delegation can become epistemic dependence.',
      'AI use should preserve friction, doubt, and revision.',
      'Users still own their assigned credence.',
    ],
    related: [
      pagePath('/applications', 'AI Alignment'),
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
    ],
  }),
  paperIntroPage({
    title: 'The Gravity of Grammar: Binary Inertia and the Distortion of Epistemic Calibration',
    summary: 'A language paper about how ordinary grammar pulls graded confidence into misleading yes-or-no claims.',
    plainAbstract: [
      'This paper argues that language often makes uncertainty sound more settled than it is. We say “X is true” or “I believe X,” even when our actual confidence might be 55%, 70%, or 90%.',
      'The problem is called binary inertia: the pull toward yes-or-no speech. That pull can make people sound more certain than they are and can make public disagreement harsher than the evidence deserves.',
    ],
    siteConnection: [
      'This paper explains why the site keeps returning to percentages, confidence levels, priors, likelihoods, and posteriors. Those tools help resist the flattening pressure of ordinary belief language.',
      'It also clarifies why the glossary and discussion pages encourage phrases such as “I assign moderate confidence” rather than simply “I believe.”',
    ],
    readerUse: [
      'Read this when a debate feels stuck in labels. The practical move is to translate binary sentences into confidence claims: how sure, on what evidence, and open to what update?',
    ],
    keyTakeaways: [
      'Language can distort confidence by forcing binary form.',
      'Scalar speech protects nuance.',
      'Credencing needs better public vocabulary.',
    ],
    related: [
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
      pagePath('/library', 'Binary Thinking and Gradient Thinking'),
    ],
  }),
  paperIntroPage({
    title: 'Beyond the Binary: Linguistic Evolution and the Transition to Credence-Based Discourse',
    summary: 'A follow-up on how communities could learn more graded, update-friendly ways of speaking.',
    plainAbstract: [
      'This paper asks what would have to change for people to speak in credences more naturally. It is not enough to tell people to be less certain. They need usable phrases, social rewards for updating, and habits that make revision feel intelligent rather than humiliating.',
      'The paper imagines a shift from belief-as-identity to belief-as-calibration. In that shift, changing your mind is not losing. It is successful tracking.',
    ],
    siteConnection: [
      'The discussion-group section depends on this idea. Groups need conversational norms that make uncertainty, updating, and partial confidence socially safe.',
      'The paper also supports the related-pages and tag-index structure: readers should move across terms because credencing is a network of practices, not a single slogan.',
    ],
    readerUse: [
      'Read this as the social repair piece. Ask how your classroom, club, workplace, or online community could reward honest updates instead of only rewarding confident performance.',
    ],
    keyTakeaways: [
      'Credence-based discourse requires social habits, not only concepts.',
      'Updating should become a high-status move.',
      'Better language makes better calibration easier.',
    ],
    related: [
      pagePath('/discussion-groups', 'Group Discussion Guide'),
      pagePath('/skills', 'How to Update with New Evidence'),
      pagePath('/utility', 'Tag Index'),
    ],
  }),
  paperIntroPage({
    title: 'The Miracle Audit: A Probabilistic Framework for Differentiating Anomalies from Supernatural Interventions',
    summary: 'A probabilistic audit for extraordinary claims that separates anomaly from supernatural explanation.',
    plainAbstract: [
      'This paper asks how we should evaluate reports of miracles. It does not begin by assuming that all unusual events are fake. It asks a more careful question: what would the evidence have to show before a supernatural explanation beat natural alternatives?',
      'The audit separates several issues that are often blurred: whether the event happened, whether it is unusual, whether it points to a specific cause, whether other explanations are available, and how strong the comparison really is.',
    ],
    siteConnection: [
      'This is a direct application of Bayesian thinking. Extraordinary claims need attention to priors, likelihoods, alternative explanations, and evidential rigor.',
      'It also illustrates why assigned credence should not jump from “strange” to “therefore supernatural.” The size and direction of an update depend on comparative evidence.',
    ],
    readerUse: [
      'Read this after the Bayes theorem walkthrough. Try applying the same structure to any extraordinary claim: first separate the anomaly from the proposed explanation.',
    ],
    keyTakeaways: [
      'An anomaly is not yet an explanation.',
      'Extraordinary claims require comparative likelihoods.',
      'Bayesian discipline slows premature certainty.',
    ],
    related: [
      pagePath('/bayes-theorem', 'Scientific Walkthrough'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
      pagePath('/skills', 'How to Read Likelihoods'),
    ],
  }),
  paperIntroPage({
    title: 'The Architecture of Explanatory Satisfaction and the Affective Veto Against Stochastic Reality',
    summary: 'A paper on why people often prefer emotionally satisfying explanations over probabilistic ones.',
    plainAbstract: [
      'This paper looks at a common human pattern: random or probabilistic explanations often feel unsatisfying, even when they are true. People want causes with purpose, agency, and narrative shape.',
      'The affective veto is the emotional rejection of an explanation because it feels cold, empty, or incomplete. The problem is that emotional dissatisfaction is not the same as evidential weakness.',
    ],
    siteConnection: [
      'This paper is central to Core Irrationality (IC). A person may see that a stochastic explanation is strong and still assign credence to a more comforting story.',
      'It also helps explain why conspiracy thinking, miracle claims, value-loaded narratives, and tribal explanations can feel more complete than the evidence justifies.',
    ],
    readerUse: [
      'Read this when a true explanation feels too accidental or impersonal. Ask whether the discomfort is evidence against the explanation or merely a human dislike of randomness.',
    ],
    keyTakeaways: [
      'Explanatory satisfaction can diverge from truth-tracking.',
      'Randomness often feels worse than agency.',
      'Emotional vetoes can distort assigned credence.',
    ],
    related: [
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/case-studies', 'Fear Overrides'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
    ],
  }),
  paperIntroPage({
    title: 'Foundational Choices for the Autodidact',
    summary: 'A learning paper about building transferable reasoning tools before piling up isolated facts.',
    plainAbstract: [
      'This paper argues that self-learners should prioritize operator knowledge: tools that help them reason across many topics. Examples include probability, statistics, causal reasoning, measurement, calibration, and basic computation.',
      'Leaf knowledge is still valuable, but it stays trapped in one domain if the learner lacks good operators. Operator knowledge lets a learner test, transfer, and extend what they learn.',
    ],
    siteConnection: [
      'This paper is the educational backbone for the skills section. Credencing is not only a theory; it is a practice built through repeated estimation, updating, and error correction.',
      'It also supports the distinction between deep competence and mere information accumulation. A person may know many facts and still lack the tools to update well.',
    ],
    readerUse: [
      'Read this as a study strategy. If you are learning independently, build the tools that help you ask better questions about every field you enter.',
    ],
    keyTakeaways: [
      'Operator knowledge transfers across domains.',
      'Calibration improves through feedback-rich practice.',
      'Good self-education compounds through reasoning tools.',
    ],
    related: [
      pagePath('/skills', 'Practice Exercises'),
      pagePath('/skills', 'How to Estimate Priors'),
      pagePath('/applications', 'Education'),
    ],
  }),
  paperIntroPage({
    title: 'The Asymptote of the Natural: Inductive Density and the A Posteriori Justification of Methodological Naturalism',
    summary: 'A Bayesian defense of methodological naturalism as a historically earned confidence pattern rather than a dogmatic rule.',
    plainAbstract: [
      'This paper asks why science usually sticks to natural explanations. The answer offered is not “because the supernatural is impossible by definition.” The answer is that natural explanations have built a long record of successful, testable, projectible results.',
      'Methodological naturalism becomes a practical confidence strategy. The more one kind of explanation keeps working and another keeps failing to produce reliable predictions, the more confidence shifts toward the working kind.',
    ],
    siteConnection: [
      'This paper connects methodological naturalism to Bayesian updating. It treats the history of inquiry as evidence that changes priors and expectations.',
      'It also fits the site’s emphasis on inductive density: explanations earn credibility by becoming predictively dense, constrained, and repeatably useful.',
    ],
    readerUse: [
      'Read this as a model for method-level credencing. Instead of asking whether a rule is sacred, ask what track record justifies relying on it.',
    ],
    keyTakeaways: [
      'Methodological naturalism can be defended by evidential precedent.',
      'Scientific confidence grows from repeated projective success.',
      'Bayesian updating applies to methods as well as claims.',
    ],
    related: [
      pagePath('/applications', 'Science'),
      pagePath('/about', 'Methodological Commitments'),
      pagePath('/core-ideas', 'Likelihoods'),
    ],
  }),
  paperIntroPage({
    title: 'The Threshold of the Real: Inductive Density and the Emergence of the Human Ontic',
    summary: 'A paper on how objects and categories become real enough for human use when they are predictively reliable.',
    plainAbstract: [
      'This paper asks what makes something count as a real object for human thinkers. The answer is not simply “it exists out there” or “we construct it.” The proposed answer is that some patterns become stable and useful enough to treat as objects.',
      'Inductive density means that a pattern supports good prediction at reasonable mental cost. When a pattern crosses that threshold, the mind treats it as a thing.',
    ],
    siteConnection: [
      'This matters for credencing because many disputes depend on what categories we allow into our model of the world. Some categories track dense patterns; others are low-density conveniences or confusions.',
      'The paper helps explain why the site distinguishes useful compression from overconfident reification.',
    ],
    readerUse: [
      'Read this when arguing about whether a category is real. Ask what predictions the category helps make, what it hides, and whether its usefulness is being mistaken for metaphysical certainty.',
    ],
    keyTakeaways: [
      'Objecthood can be treated as predictive usefulness crossing a threshold.',
      'Some categories are useful but still provisional.',
      'Reification should be calibrated, not automatic.',
    ],
    related: [
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/library', 'Useful Fictions Common in Philosophical Pedagogy'),
      pagePath('/about', 'Methodological Commitments'),
    ],
  }),
  paperIntroPage({
    title: 'The "Ontic Snap" as a Cognitive Phase Transition',
    summary: 'A companion paper on the moment the mind turns noisy input into a stable object.',
    plainAbstract: [
      'This paper describes the mental shift from raw, uncertain input to “that is a thing.” The snap is not a slow, conscious decision. It is a fast cognitive commitment that makes the world usable.',
      'The danger is that once the mind has snapped a pattern into object form, the result can feel more settled than the evidence deserves. Useful perception can become overconfident ontology.',
    ],
    siteConnection: [
      'The paper supports the site’s warning about premature closure. A person may move too quickly from evidence to category, and from category to confidence.',
      'It also connects to Bayesian updating: a snap may be useful, but later evidence must still be allowed to revise or dissolve it.',
    ],
    readerUse: [
      'Read this as a caution about first impressions. Ask whether a category that now feels obvious might be a fast compression rather than a final truth.',
    ],
    keyTakeaways: [
      'The mind turns noise into objects through fast commitments.',
      'Fast usefulness can feel like certainty.',
      'Good credencing keeps categories revisable.',
    ],
    related: [
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/skills', 'How to Update with New Evidence'),
      pagePath('/library', 'The Threshold of the Real: Inductive Density and the Emergence of the Human Ontic'),
    ],
  }),
  paperIntroPage({
    title: 'Mereological Indigestion: Why We Cannot Divvy Up the Blob',
    summary: 'A metaphysical critique of treating human-made partitions as if they were automatically deep divisions in reality.',
    plainAbstract: [
      'This paper argues that humans divide the world into parts for practical reasons, but those divisions can be mistaken for deep metaphysical joints. We name pieces of reality, then forget that the names often serve our purposes.',
      'The point is not that distinctions are useless. The point is that distinctions should be held with the right confidence and tested for predictive work.',
    ],
    siteConnection: [
      'This paper extends the credencing project into ontology. It asks whether our categories are tracking evidence or merely carrying inherited grammar and convenience.',
      'It pairs naturally with the Threshold and Ontic Snap papers: all three ask how patterns become things in our reasoning.',
    ],
    readerUse: [
      'Read this when a debate depends on where one object, cause, or category ends and another begins. Ask whether the boundary is discovered, useful, negotiated, or merely assumed.',
    ],
    keyTakeaways: [
      'Human partitions are not automatically metaphysical facts.',
      'Categories should earn confidence by doing predictive work.',
      'Useful distinctions can still be provisional.',
    ],
    related: [
      pagePath('/library', 'The Threshold of the Real: Inductive Density and the Emergence of the Human Ontic'),
      pagePath('/library', 'The "Ontic Snap" as a Cognitive Phase Transition'),
      pagePath('/about', 'Descriptive Rather than Prescriptive Orientation'),
    ],
  }),
  paperIntroPage({
    title: 'Useful Fictions Common in Philosophical Pedagogy',
    summary: 'A teaching paper about simplified ideas that help beginners but can mislead if treated as final.',
    plainAbstract: [
      'This paper says philosophy often teaches beginners with useful simplifications. Those simplifications can be good ladders: they help students climb into a topic.',
      'But a ladder is not the destination. If a learner treats early simplifications as final truth, the tool becomes a trap. Mature reasoning requires knowing when a fiction has stopped helping.',
    ],
    siteConnection: [
      'The site itself uses simplified models, especially for Bayes theorem and the interactive lab. This paper keeps that simplification honest by reminding readers that teaching models are maps, not the territory.',
      'It also supports the project’s low-register pages: simple language is good when it opens inquiry, bad when it closes inquiry too soon.',
    ],
    readerUse: [
      'Read this as a guardrail for learning. Ask whether a concept is a beginner handle, a useful bridge, or a serious research-level commitment.',
    ],
    keyTakeaways: [
      'Simplified ideas can be useful teaching tools.',
      'A useful fiction becomes harmful when treated as final.',
      'Good pedagogy tells readers when to outgrow the scaffold.',
    ],
    related: [
      pagePath('/applications', 'Education'),
      pagePath('/library', 'Teaching Materials'),
      pagePath('/discussion-groups', 'Facilitator Toolkit'),
    ],
  }),

  paperIntroPage({
    title: 'Against the Great Man: A Systems-Theoretic Critique of Individual Attribution',
    summary: 'A systems paper about calibrating credit and blame when individual control is weakened by noise and complexity.',
    plainAbstract: [
      'This paper argues that people often over-credit or over-blame leaders for outcomes produced by large systems. When a system is noisy, the link between a leader’s choice and the final result may be weak.',
      'The paper introduces a control coefficient: a way of asking how much of an outcome can plausibly be attributed to a person’s signal rather than to environmental drift.',
    ],
    siteConnection: [
      'This is institutional credencing. It asks how much confidence we should assign to stories about heroes, villains, CEOs, politicians, generals, or experts.',
      'The paper also connects to base-rate neglect and public debate: simple narratives often feel satisfying while underweighting system noise.',
    ],
    readerUse: [
      'Read this when judging leadership, success, failure, scandal, or historical causation. Ask how strong the control channel really was before assigning confidence to praise or blame.',
    ],
    keyTakeaways: [
      'Attribution should track control, not just status.',
      'High-noise systems weaken individual signal.',
      'Credit and blame need evidential calibration.',
    ],
    related: [
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/case-studies', 'Public Debate'),
      pagePath('/case-studies', 'Base-Rate Neglect'),
    ],
  }),



];

export const libraryPages: ContentPage[] = [
  libraryPage(
    'Papers',
    'The Papers page gathers formal and semi-formal work behind the Credencing framework.',
    [
      {
        heading: 'Purpose',
        body: [
          'The papers library is the bridge between the public-facing model and the more formal argument behind it. It gives the project a place for definitions, diagrams, objections, replies, revisions, and extensions that would overload the introductory pages.',
          'The public site explains the framework in practical language. The paper trail makes the commitments precise enough to criticize: what the variables mean, what the gaps measure, what the model claims, and where it might overreach.',
        ],
      },
      {
        heading: 'Current Paper Spine',
        body: [
          'The central paper is “A Formal Framework for Core and Deep Rationality.” It supplies the basic architecture: objective evidence (E0), perceived evidence (EP), assigned credence (CA), deep rationality (SD), calculation error, core irrationality, and the archetypes generated by different gap patterns.',
          'The new research spine develops that architecture in five directions. “The Two-Gap Theory of Irrationality” makes the diagnostic split explicit. “Warranted Uncertainty” protects the model from false precision. “Intelligence as Rationalization Engine” explains the biased expert. “Institutional Credencing” scales the model to organizations. “AI as Deep Rationality Prosthetic” applies the same distinction to AI-mediated inquiry.',
          'The older supporting cluster remains narrower than before: credence-first epistemology, scalar language, Bayesian audit methods, explanatory hunger, operator learning, methodological naturalism, ontological commitment, and calibrated attribution. Together, these papers treat Credencing as a program for replacing all-or-nothing belief language with calibrated, updateable confidence.',
        ],
      },
      {
        heading: 'How the Papers Align With the Site',
        body: [
          'The public site should be read as the teaching and navigation layer for the papers. The formal pages explain the E0-EP-CA model; the Bayes theorem pages explain how confidence should move; the skills and discussion pages train the operators needed for disciplined updating; and the case studies show what happens when identity, emotion, language, or institutional pressure distorts the update.',
          'The language of the site is intentionally scalar. Claims such as “belief,” “confidence,” “evidence,” and “rationality” should be interpreted as graded and revisable unless a page is discussing a practical action threshold. This keeps the site aligned with the binary-inertia papers, which warn that ordinary grammar can make partial confidence sound like final possession of truth.',
          'The model also keeps competence and integrity separate. Deep Rationality (SD) concerns operator skill: probability, statistics, causal reasoning, measurement, and formal modeling. Core Rationality concerns whether assigned credence remains responsive to perceived evidence. This distinction is the through-line from the Core Rationality paper to the interactive archetypes.',
        ],
      },
      {
        heading: 'Objections to Develop',
        body: [
          'The papers section is also where the strongest objections belong. Important objections include whether E0 can be estimated without pretending to have God’s-eye access, whether EP can be separated from CA in messy human cases, whether “core irrationality” overclassifies hard disagreement, and whether Bayesian language can be made practical without false precision.',
          'The newer alignment with the paper cluster adds further objections worth developing: whether scalar language can remain usable in ordinary conversation, whether AI tools can improve calibration without encouraging dependence, whether institutional audits can distinguish internal evidence from official confidence, and whether Bayesian audit rubrics smuggle in contested priors.',
          'Each objection should be treated as a stress test rather than a threat. If an objection forces a cleaner definition, a humbler claim, or a better diagnostic distinction, it improves the project.',
        ],
      },
      {
        heading: 'How to Read',
        body: [
          'Read the public Start Here and Core Ideas sections first. Then use the papers to inspect the formal structure, not as a replacement for the interactive model but as its theoretical support.',
          'A good reading order is: “Core Rationality,” the formal framework, the two-gap paper, “Warranted Uncertainty,” “Intelligence as Rationalization Engine,” “Institutional Credencing,” and “AI as Deep Rationality Prosthetic.” After that, move outward to the credence-first, binary-language, Bayesian audit, methodological naturalism, operator-learning, and affective-veto papers.',
        ],
      },
    ],
    [
      'The papers library supports formal criticism, objection handling, and extension.',
      'Public pages explain; papers specify the commitments behind the explanations.',
      'The formal work remains accountable to practical use in the interactive model.',
    ],
    [
      pagePath('/library', 'A Formal Framework for Core and Deep Rationality'),
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/interactive-lab', 'Interactive Model'),
    ],
  ),
  libraryPage(
    'A Formal Framework for Core and Deep Rationality',
    'This page anchors the project’s central distinction between rational skill and rational integrity.',
    [
      {
        heading: 'Low-Register Abstract',
        body: [
          'This paper gives the site its basic model. It says that a person can go wrong in two different places: they may fail to see the evidence well, or they may see the evidence well enough and still assign the wrong level of confidence.',
          'Deep Rationality (SD) is about evidence-reading skill. Core Rationality is about whether confidence stays honest once the evidence has been perceived. The model turns that distinction into variables, gaps, and archetypes that can be visualized in the interactive lab.',
        ],
      },
      {
        heading: 'Central Thesis',
        body: [
          'The formal framework distinguishes Deep Rationality from Core Rationality. Deep Rationality concerns the tools that allow an agent to perceive evidential support accurately. Core Rationality concerns whether the agent assigns credence according to that perceived support.',
          'The framework is designed to show why intelligence, education, and technical sophistication do not automatically produce epistemic integrity.',
        ],
      },
      {
        heading: 'Formal Variables',
        body: [
          'The central variables are Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD). Calculation Error (DE) measures the Objective Evidence to Perceived Evidence gap (E0-EP). Core Irrationality (IC) measures the Perceived Evidence to Assigned Credence gap (EP-CA).',
        ],
      },
      {
        heading: 'Public Use',
        body: [
          'The paper gives formal structure to the public model, while the site turns that structure into explanations, examples, exercises, and applications. The two should be read together: the paper supplies precision; the site supplies usability.',
        ],
      },
    ],
    [
      'The project’s central distinction is skill vs integrity.',
      'Objective Evidence to Perceived Evidence (E0-EP) and Perceived Evidence to Assigned Credence (EP-CA) are the two diagnostic gaps.',
      'The formal paper and public model are complementary.',
    ],
    [
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/library', 'Future Papers'),
    ],
  ),
  ...paperIntroPages,
  libraryPage(
    'Future Papers',
    'Future papers and projects extend the framework only where a new question is not already answered by the current Credencing spine.',
    [
      {
        heading: 'Already Absorbed by the Current Spine',
        body: [
          'Several earlier future-paper ideas have now become part of the published or drafted spine. The two-gap paper absorbs the general E0-EP and EP-CA distinction. Warranted Uncertainty absorbs the discipline of not knowing and the first treatment of diagnostic slack. The rationalization-engine paper absorbs the biased-expert case. Institutional Credencing absorbs the first organizational extension. The AI prosthetic paper absorbs the first AI-mediated inquiry treatment.',
          'Future work should therefore avoid restating those claims at the same level of generality. A new paper should either formalize a narrower mechanism, apply the model to a new domain, build a usable practice, or test a hard objection that the current papers leave unresolved.',
        ],
        bullets: [
          'Do not rewrite the two-gap model; specify a new gap, threshold, or repair method.',
          'Do not merely repeat warranted uncertainty; show how uncertainty should be represented, taught, audited, or bounded.',
          'Do not merely repeat AI as prosthetic; isolate a concrete AI-mediated failure mode or alignment practice.',
          'Do not merely repeat institutional credencing; design a procedure, audit artifact, or case taxonomy.',
        ],
      },
      {
        heading: 'Independent Paper Candidates',
        body: [
          'These papers are close enough to strengthen Credencing but narrow enough to stand on their own. Each should have a distinct question, diagnostic target, and practical output.',
        ],
        bullets: [
          'Excess Core Irrationality: distinguish raw EP-CA mismatch from excess mismatch after warranted slack, pressure, access limits, and skill limits have been accounted for.',
          'The Epistemology of Belief Integrity: give a philosophical account of what it means to follow what one takes the evidence to show.',
          'Bayesian Updating Without False Precision: translate Bayesian structure into rough priors, likelihood comparisons, and confidence bands without fake numerical sharpness.',
          'Priors as Disciplined Memory: defend priors as revisable background knowledge rather than mere bias or inherited prejudice.',
          'Likelihood Literacy: focus entirely on the neglected question of how expected the evidence is under rival hypotheses.',
          'Base Rates, Identity, and Statistical Resistance: examine why base rates are rejected when they threaten hope, fear, identity, or group narratives.',
          'The Evidential History of a Posterior: treat final credence as answerable to the update path that produced it, not as a free-floating confidence state.',
          'Epistemic Akrasia and the Fear of Updating: analyze cases where an agent senses that confidence should move but cannot bring assigned credence along.',
          'Identity-Protective Credencing: isolate the mechanisms by which belonging, self-concept, and public commitment distort CA without necessarily damaging EP.',
          'The Phenomenology of Certainty: explain why certainty can feel like evidence even when it is only closure, fluency, or social reinforcement.',
          'Credence Grammar: build a public language for confidence bands, update conditions, capped confidence, and live alternatives.',
          'Assertion, Confidence, and Social Risk: study why public speech rewards overstatement and makes calibrated uncertainty socially costly.',
          'Disagreement Without Diagnosis: develop norms for disagreement that avoid premature classification of other agents as irrational.',
          'Category Confidence: ask how much confidence we should assign to the categories used to frame claims, not only to claims inside those categories.',
        ],
      },
      {
        heading: 'Institutional and AI Project Track',
        body: [
          'The institutional and AI papers now exist as first statements, so the next work should be more procedural. These projects should produce checklists, audit trails, templates, case taxonomies, or decision protocols.',
        ],
        bullets: [
          'Suppressed Evidence and Official Confidence: classify ways internal evidence can fail to become public confidence, from ignored signals to strategic delay.',
          'Audit Trails for Belief: design a record format for predictions, confidence levels, evidence sources, updates, and reasons for revision.',
          'Epistemic Governance: specify institutional designs that notice reality earlier, protect dissent, lower update costs, and preserve uncertainty records.',
          'The Incentive Structure of Denial: map how organizations reward false confidence and make accurate updating expensive.',
          'Delegated Credence Protocols: design handoff rules for when AI may gather evidence, summarize evidence, recommend confidence bands, or trigger human review.',
          'Model Fluency and False Credence: explain why polished AI outputs create overconfidence when source quality and uncertainty remain unclear.',
          'Human-AI Epistemic Alignment: define when users should trust, doubt, defer to, contest, or override model outputs.',
        ],
      },
      {
        heading: 'Teaching and Tool Projects',
        body: [
          'Some future work should become classroom practice or site tooling rather than another long paper. These projects would make Credencing easier to teach, test, and reuse.',
        ],
        bullets: [
          'Teaching Credences Before Conclusions: make confidence, uncertainty, and update conditions part of answer formation before students are rewarded for correctness.',
          'Calibration Exercises for Classrooms: build forecast journals, confidence scoring tasks, likelihood-comparison drills, and post-update reflections.',
          'Discussion Groups as Epistemic Training: treat group discussion as practice in humility, updateability, and non-defensive disagreement.',
          'The Honest Novice as an Educational Ideal: defend low-tool, high-updateability learners as a genuine achievement, not a deficit state.',
          'Scenario Builder: let users create, save, compare, and export E0-EP-CA-SD cases from the interactive lab.',
          'Credence Audit Worksheet: turn the model into a printable and editable sequence of evidence, perception, confidence, uncertainty, and update-condition prompts.',
          'Likelihood Literacy Module: add a guided practice path focused on comparing evidence under rival hypotheses.',
        ],
      },
      {
        heading: 'Selection Rule for New Work',
        body: [
          'A future paper or project should be accepted into the roadmap only if it adds a distinct unit of work. It should answer a question the current site does not already answer, introduce a new diagnostic distinction, produce a usable tool, or apply the framework to a domain where the variables behave differently.',
          'The test is simple: if the proposed work can be summarized as “the two-gap model, but again,” it should be folded into an existing page. If it creates a new practice, measurement problem, language protocol, institutional artifact, or AI-use rule, it belongs here.',
        ],
      },
    ],
    [
      'The next roadmap avoids repeating the newly published spine.',
      'Independent future papers need a distinct mechanism, objection, application, or practice.',
      'Some of the best next work should be tools, worksheets, modules, and audit artifacts rather than papers.',
    ],
    [
      pagePath('/applications', 'AI Alignment'),
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/library', 'Project Notes'),
    ],
  ),
  libraryPage(
    'Essays',
    'The Essays page is a repository of Phil Stilwell essays and adapted essay material directly related to Credencing, calibration, evidence, doubt, trust, and rational integrity.',
    [
      {
        heading: 'About This Repository',
        body: [
          'This section gathers essays that connect directly to the Credencing project. The focus is not essay-writing as an activity; the focus is a curated body of essays about evidence-responsive confidence, belief calibration, and rational integrity.',
          'The essays are meant to be read as applied extensions of the model. Each one takes a recurring epistemic problem and translates it into the language of credence, calibration, updateability, evidence perception, and belief integrity.',
        ],
      },
      {
        heading: 'Current Essays',
        body: [
          'The current collection contains fifteen essays. They examine evidence-mapping as a practice, the limits of categorical labels, the distinction between faith and evidence-weighted trust, doubt as a rational complement of credence, the limits of coherence, evidence-proportioned belief, binary thinking, asymmetric scrutiny, ways of knowing, mature inquiry, unfalsifiability, parsimony, insulated theory, protected prediction, and semantic drift.',
          'These essays are listed as a subordinate collection under this Essays parent page in the Library navigation. They should be read as a connected mini-sequence rather than as unrelated standalone posts.',
        ],
        bullets: [
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
      {
        heading: 'How These Essays Fit Credencing',
        body: [
          'Each essay clarifies one pressure point in the Credencing model. Evidence mapping concerns whether Objective Evidence (E0), Perceived Evidence (EP), and Assigned Credence (CA) stay answerable to one another. Label compression concerns how binary or tribal categories hide actual confidence levels. The faith/trust essay clarifies when confidence remains evidence-sensitive and when it becomes protected commitment.',
          'The essay on doubt explains why uncertainty is not automatically a defect. The essay on coherence explains why internal consistency is valuable but insufficient unless beliefs remain vulnerable to external correction.',
        ],
      },
      {
        heading: 'Reading Order',
        body: [
          'Start with “Evidence Mapping Is a Practice, Not a Slogan,” because it gives the broadest criterion: confidence should move when evidence changes. Then read “Evidence-Proportioned Belief” and “Binary Thinking and Gradient Thinking” for the basic scalar method.',
          'Next read “Labels Are Not Credences,” “Semantic Drift and the Word Faith,” and “Faith, Trust, and Evidence-Weighted Confidence” as a language-and-trust cluster. Then read “Doubt as the Complement of Credence,” “Selective Blindness and Asymmetric Scrutiny,” and “Childlike Trust and Mature Inquiry” as a cluster on intellectual maturity.',
          'Close with the stress-test essays: “Grounding Ways of Knowing,” “Unfalsifiability and Moving Goalposts,” “Parsimony and Belief Burdens,” “The Floating Fortress Problem,” “Protected Predictions and Answered Prayer,” and “Coherence Is Not Enough.” These ask whether a belief system remains externally answerable or merely internally stable.',
        ],
      },
      {
        heading: 'Editorial Orientation',
        body: [
          'These essays are presented as independent Credencing essays. They favor general epistemological analysis over polemic, use broader examples where possible, and link each topic back to the site’s central model.',
        ],
      },
    ],
    [
      'This is a repository of Credencing-related essays, not a guide to writing essays.',
      'The fifteen current essays form a subordinate collection under the Essays parent page.',
      'Each essay applies the model to evidence, language, trust, doubt, coherence, or updateability.',
    ],
    [
      pagePath('/library', 'Evidence Mapping Is a Practice, Not a Slogan'),
      pagePath('/library', 'Labels Are Not Credences'),
      pagePath('/library', 'Faith, Trust, and Evidence-Weighted Confidence'),
    ],
  ),
  libraryPage(
    'Evidence Mapping Is a Practice, Not a Slogan',
    'Evidence-mapping is not a claim one makes about rationality; it is a discipline shown by how belief actually responds to new evidence.',
    [
      {
        heading: 'The Central Test',
        body: [
          'Many people and institutions claim that their beliefs map to the evidence. The claim is easy to make. The harder question is behavioral: when evidence changes, does confidence actually change with it?',
          'A belief system can use the language of evidence while rewarding something else: loyalty, early commitment, public certainty, emotional stability, or group belonging. Credencing asks whether the agent’s Assigned Credence (CA) remains responsive to Perceived Evidence (EP), and whether Perceived Evidence (EP) remains answerable to Objective Evidence (E0).',
        ],
      },
      {
        heading: 'Signs That Mapping Is Only Rhetorical',
        body: [
          'Evidence-mapping becomes doubtful when inquiry is praised in theory but discouraged in practice. If a community praises certainty more than updating, treats doubt mainly as a failure to overcome, or celebrates confidence without asking what supports it, then the public rhetoric and the epistemic practice have come apart.',
          'A second warning sign is the use of social pressure as a substitute for evidential repair. When someone lowers confidence because the evidence weakens, the rational response is to examine the evidence, not to shame the update. Pressure may stabilize a belief, but stabilization is not the same as justification.',
          'A third sign is selective evidential curiosity. Some systems eagerly examine evidence that supports preferred conclusions while treating contrary evidence as spiritually, politically, or emotionally suspect before it is even weighed. The appearance of inquiry remains, but the outcome has been constrained in advance.',
        ],
      },
      {
        heading: 'The Loop of Self-Persuasion',
        body: [
          'Public declarations can change private credence. When people repeatedly testify, pledge, or signal certainty before their evidence justifies it, they may feel pressure to bring their inner confidence into alignment with the public performance.',
          'This is not unique to religion. Political movements, professional cultures, investment communities, and academic schools can all generate loops in which people publicly overstate confidence and then psychologically adapt to the overstatement. The result is Assigned Credence (CA) pulled away from Perceived Evidence (EP).',
          'The loop becomes especially powerful when status is attached to confident speech. The person who hesitates appears weak; the person who declares appears mature, brave, or loyal. Over time, the public performance of certainty becomes a social credential, and uncertainty becomes costly even when it is rational.',
        ],
      },
      {
        heading: 'How Institutions Distort the Map',
        body: [
          'Institutions often shape what counts as available evidence before individual reasoning begins. They decide which sources are trusted, which questions are encouraged, which doubts are framed as responsible, and which doubts are framed as betrayal. This means evidence-mapping is never merely private.',
          'An institution can produce an Objective Evidence to Perceived Evidence gap (E0-EP) by filtering information badly. It can produce a Perceived Evidence to Assigned Credence gap (EP-CA) by making honest confidence socially dangerous. Good epistemic institutions reduce both gaps.',
        ],
      },
      {
        heading: 'A Practical Audit',
        body: [
          'To audit whether a belief is really evidence-mapped, ask four questions. What evidence would lower confidence? Who is allowed to mention that evidence? What happens socially when someone updates downward? Are people praised for calibrated uncertainty or only for resilient confidence?',
          'If a community cannot answer these questions without embarrassment, its evidence language may be decorative. The Credencing model turns that embarrassment into a diagnostic opportunity: find the point at which evidence stops governing confidence.',
        ],
      },
      {
        heading: 'What Genuine Evidence-Mapping Requires',
        body: [
          'A genuine evidence-mapping culture makes updates ordinary. It asks people to state confidence in degrees, identify what would move them, and distinguish social belonging from evidential support.',
          'The practical rule is simple: if the evidence weakens, confidence should be allowed to weaken without treating the person as disloyal. If the evidence strengthens, confidence may rise. A system that permits only upward movement in confidence is not mapping evidence; it is protecting identity.',
        ],
      },
      {
        heading: 'A Thermostat Example',
        body: [
          'Imagine a thermostat that proudly announces it is "temperature-mapped," but its setting never changes when the room gets colder. The label on the device is irrelevant; the test is whether the dial responds to the room.',
          'Evidence-mapping works the same way. A person can say "I follow the evidence" while treating contrary evidence as noise, betrayal, or a test of loyalty. The real question is whether new information is allowed to move Perceived Evidence (EP) and then Assigned Credence (CA).',
        ],
      },
    ],
    [
      'Evidence-mapping is shown by update behavior, not by rhetoric.',
      'Social pressure can pull Assigned Credence (CA) away from Perceived Evidence (EP).',
      'A rational culture makes lowering confidence permissible when evidence weakens.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/skills', 'How to Scale Confidence to Evidence'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
    ],
  ),
  libraryPage(
    'Labels Are Not Credences',
    'Identity labels are low-resolution summaries; careful inquiry requires asking what a person believes, how strongly, and under what update conditions.',
    [
      {
        heading: 'The Problem With Labels',
        body: [
          'Labels such as atheist, agnostic, religious, liberal, conservative, skeptic, believer, realist, or naturalist can be useful for quick orientation. They become harmful when treated as substitutes for the actual distribution of credences inside a mind.',
          'A label is often a compressed social signal. It may say something about affiliation, temperament, background, or conversational location. It rarely tells us the agent’s confidence level, the evidence they have considered, the alternatives they regard as live, or the observations that would change their view.',
        ],
      },
      {
        heading: 'Belief Is a Dial',
        body: [
          'Rational belief is normally gradient. A person may be 20 percent confident in one claim, 60 percent confident in a related claim, and 90 percent confident that a specific argument fails. A single label cannot carry that resolution.',
          'When a conversation begins with labels, people often debate membership instead of evidence. Credencing shifts the question from “What are you?” to “What do you currently think is most likely, how strongly do you hold it, and what would move you?”',
          'This shift is more than etiquette. It changes the object of evaluation. Instead of treating the person as a representative of a camp, we treat them as an agent with a structured belief state. That makes disagreement more precise and often less theatrical.',
        ],
      },
      {
        heading: 'Labels Create False Symmetry',
        body: [
          'A label can make two people appear epistemically equivalent when they are not. Two people may both call themselves skeptics, but one may use skepticism as careful calibration while the other uses it as a shield against unwelcome evidence. Two people may both call themselves believers, but one may treat belief as revisable confidence while the other treats it as identity protection.',
          'The label hides the difference between method and posture. Credencing recovers the difference by asking how the agent handles evidence, what credence they assign, and how they respond when the evidence shifts.',
        ],
      },
      {
        heading: 'Emotional Disturbance Is Not Evidence by Itself',
        body: [
          'People sometimes report being troubled, disconcerted, or unsettled by an argument. That feeling can indicate serious engagement, but it can also indicate identity stress. The difference matters.',
          'A calibrated mind can register a new consideration, adjust confidence, and continue inquiry. A mind defending an identity may experience every contrary point as a threat. In the Credencing model, the question is whether the discomfort improves evidence perception or instead pressures Assigned Credence (CA) to remain fixed.',
        ],
      },
      {
        heading: 'How Labels Distort Conversation',
        body: [
          'Once a label becomes central, participants often begin defending the label rather than revising the belief. The conversation shifts from “What is true?” to “What would this imply about me?” That shift increases the risk of Core Irrationality because Assigned Credence (CA) becomes tied to self-description.',
          'Labels also invite shortcut judgments. A listener may assume that a conservative, progressive, atheist, Christian, scientist, mystic, or skeptic must hold a predictable cluster of views. But real credence distributions are often uneven. A person can be highly confident about one claim, uncertain about another, and actively revising a third.',
        ],
      },
      {
        heading: 'Better Questions',
        body: [
          'When a label is too coarse, raise the resolution. Ask which specific proposition is being evaluated, what the current credence is, what evidence supports it, what evidence undermines it, and what would count as an update condition.',
          'This practice does not eliminate identity. It simply prevents identity from pretending to be an argument. Labels may begin a conversation; they should not be allowed to end it.',
        ],
      },
      {
        heading: 'The Suitcase Analogy',
        body: [
          'A label is like a luggage tag: useful for routing, useless for knowing what is inside the suitcase. Two bags marked "skeptic" may contain very different distributions of confidence, fears, methods, and update conditions.',
          'A better conversation opens the suitcase. Which claims are inside? How much confidence attaches to each one? Which piece of evidence would make the contents change?',
        ],
      },
    ],
    [
      'Labels compress belief-states and often hide the credences that matter.',
      'Rational discourse should ask for confidence levels and update conditions.',
      'Identity stress can mimic intellectual seriousness without improving calibration.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Credences'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
    ],
  ),
  libraryPage(
    'Faith, Trust, and Evidence-Weighted Confidence',
    'The claim that everyone has faith becomes clearer once we distinguish protected commitment from evidence-weighted trust.',
    [
      {
        heading: 'The Equivocation',
        body: [
          'A common move in disputed belief systems is to say that everyone has faith. The statement can be harmless if “faith” means ordinary trust under uncertainty. But it becomes misleading when it treats all trust as epistemically equivalent.',
          'Trust in a doctor, mechanic, bridge engineer, or scientific model is usually revisable and evidence-sensitive. It rises with reliability and falls with failure. That is different from a protected commitment that refuses ordinary evidential correction.',
        ],
      },
      {
        heading: 'Credence Instead of Binary Faith',
        body: [
          'Credencing replaces the binary question “Do you have faith?” with a graded question: what is your confidence, and does it match the evidence? This prevents high-credence, evidence-sensitive trust from being collapsed into low-evidence commitment.',
          'A scientist tentatively accepting a model, a patient trusting a physician, and a citizen relying on a weather forecast are not all doing the same thing simply because none has absolute certainty. They are assigning credences under uncertainty, with different evidence bases and different update conditions.',
          'The word faith often erases this structure. It compresses degrees, sources, track records, and update policies into one socially charged term. That compression benefits claims that would look weaker if their actual evidential support were stated numerically or comparatively.',
        ],
      },
      {
        heading: 'The Practical Test',
        body: [
          'The key test is not whether a belief involves uncertainty. Almost all human belief does. The key test is whether the belief remains answerable to evidence.',
          'If new counterevidence would lower confidence, the belief is functioning as evidence-weighted trust. If no conceivable counterevidence would matter, the belief is functioning as protected commitment. The difference is central to Core Rationality.',
          'This is why update conditions matter. A person need not know exactly what would change their mind in every detail, but they should be able to name the kinds of discoveries, failures, alternatives, or predictive misses that would reduce confidence.',
        ],
      },
      {
        heading: 'Trust Has a Track Record',
        body: [
          'Responsible trust is usually tied to a record of performance. We trust a bridge because engineering has a public history of load testing, failure analysis, materials science, and correction. We trust a physician because medical knowledge is constrained by trials, peer criticism, outcome data, and malpractice risk.',
          'None of these forms of trust requires certainty. They require accountability. When a trusted method fails, responsible trust changes. When a protected commitment fails, the failure is often reinterpreted so the commitment can remain untouched.',
        ],
      },
      {
        heading: 'Why the Distinction Matters',
        body: [
          'Collapsing all uncertainty into faith weakens public reasoning. It implies that careful inference and insulated conviction occupy the same epistemic category simply because both fall short of certainty.',
          'A better vocabulary preserves the gradient. We can say that some trust is well calibrated, some is risky but understandable, and some is overconfident or protected from correction. The question is not whether uncertainty exists; the question is how responsibly confidence is managed within it.',
          'This distinction also protects ordinary trust from cynicism. If every trust relation is called faith, then evidence-sensitive reliance looks no better than dogmatic commitment. Credencing keeps rational dependence visible: we can rely on others, tools, and institutions while still asking whether the reliance is calibrated.',
        ],
      },
      {
        heading: 'Bridge Trust and Fog Trust',
        body: [
          'Consider two bridges. One has inspection records, load ratings, maintenance logs, and a history of safe crossings. The other is hidden in fog, and its defenders say crossing requires trust. Both cases involve uncertainty, but they do not deserve the same credence.',
          'Evidence-weighted trust is like the inspected bridge: confidence rises because reliability has been constrained by tests. Protected commitment is like being told that the fog itself should count as evidence that the bridge is sound.',
        ],
      },
    ],
    [
      'Not all trust under uncertainty is epistemically equivalent.',
      'Evidence-weighted trust remains revisable; protected commitment resists correction.',
      'Credence language preserves distinctions that the word faith often blurs.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/library', 'FAQ'),
    ],
  ),
  libraryPage(
    'Doubt as the Complement of Credence',
    'Doubt is not automatically a defect; when evidence is incomplete, doubt is the rational remainder of calibrated confidence.',
    [
      {
        heading: 'Doubt Is Not the Opposite of Rationality',
        body: [
          'In many communities, doubt is treated as a temporary problem to be overcome. Sometimes that is appropriate: doubt based on confusion, misinformation, or anxiety may diminish when evidence improves. But doubt is not irrational merely because it remains.',
          'When evidence is less than conclusive, some uncertainty is rational. If an agent assigns 70 percent confidence to a proposition, the remaining 30 percent is not a flaw or intellectual weakness. It is the space reserved for live alternatives, measurement limits, and possible error.',
        ],
      },
      {
        heading: 'Belief and Doubt Share the Same Gradient',
        body: [
          'Credencing treats belief and doubt as complementary positions on the same epistemic gradient. To say “I am 65 percent confident” is also to say “I retain 35 percent uncertainty.”',
          'This makes doubt less mysterious. Doubt is not an alien force invading belief; it is what remains when responsible confidence stops short of certainty. The more incomplete or ambiguous the evidence, the more room there should be for doubt.',
          'This does not make doubt automatically virtuous. Doubt can be lazy, defensive, or selectively deployed. The virtue lies in proportionality: doubt should shrink when evidence becomes strong and grow when evidence becomes weak, mixed, or methodologically compromised.',
        ],
      },
      {
        heading: 'When Doubt Should Persist',
        body: [
          'Doubt should persist when the evidence remains mixed, when sources conflict, when base rates are unclear, when mechanisms are unknown, or when the stakes of error require caution. In such cases, forcing certainty can create a Perceived Evidence to Assigned Credence gap (EP-CA).',
          'The important question is whether doubt is proportionate. Too much doubt can ignore strong evidence. Too little doubt can inflate weak evidence into certainty. Calibration requires both confidence and doubt to move with the evidential situation.',
        ],
      },
      {
        heading: 'Doubt and Social Pressure',
        body: [
          'Groups often regulate doubt because doubt affects cohesion. A member who voices uncertainty may be perceived as unreliable, insufficiently committed, or disruptive to group confidence. This social cost can cause people to assign more confidence than their perceived evidence warrants.',
          'The result is not simply private discomfort. It is a structural EP-CA problem: the agent sees uncertainty internally but assigns or performs certainty externally. Over time, the performance may harden into belief.',
        ],
      },
      {
        heading: 'Doubt as an Inquiry Engine',
        body: [
          'Healthy doubt is active. It asks what evidence is missing, which alternatives remain live, which assumptions are doing too much work, and what test would discriminate between competing explanations.',
          'In this sense, doubt is not a brake on inquiry but an engine of inquiry. It keeps confidence from outrunning support and directs attention toward the places where the model is still underconstrained.',
        ],
      },
      {
        heading: 'Healthy Doubt and Repair',
        body: [
          'Healthy doubt asks for better evidence, clearer definitions, stronger tests, and honest update conditions. It does not merely stall. It becomes irrational only when it refuses to move after the evidence has become strong enough to warrant movement.',
          'The repair is not “eliminate doubt.” The repair is “make doubt evidence-responsive.” In practice, this means specifying what would lower uncertainty, what would raise confidence, and what uncertainty must responsibly remain.',
        ],
      },
      {
        heading: 'The Empty Chair Thought Experiment',
        body: [
          'Imagine a committee deciding a case with one chair left empty for "what we do not yet know." Bad inquiry tries to fill the chair immediately so the room feels complete. Good inquiry lets the empty chair remain visible until the missing evidence arrives.',
          'Doubt functions like that chair. It is not an enemy of belief; it marks the space that live alternatives, unknown base rates, and possible error still occupy.',
        ],
      },
    ],
    [
      'Doubt is the rational remainder when evidence falls short of certainty.',
      'Both excessive doubt and insufficient doubt can be miscalibrated.',
      'Healthy doubt is evidence-responsive rather than identity-protective.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Warranted Uncertainty'),
      pagePath('/skills', 'How to Express Uncertainty Honestly'),
    ],
  ),
  libraryPage(
    'Coherence Is Not Enough',
    'A worldview can feel internally coherent, emotionally satisfying, and socially fruitful while still failing to track reality.',
    [
      {
        heading: 'The Coherence Trap',
        body: [
          'Coherence matters. A belief that contradicts itself has a problem. But coherence is not enough. Many belief systems can achieve internal fit by controlling definitions, insulating assumptions, and explaining away anomalies.',
          'A worldview can be elegant, emotionally satisfying, identity-forming, and socially stabilizing while still failing to connect with the external world. Credencing therefore distinguishes internal fit from evidence-tracking.',
        ],
      },
      {
        heading: 'Closed-Loop Rationality',
        body: [
          'Closed-loop systems evaluate themselves mainly by their own internal standards. They ask whether the belief fits the story, supports the community, preserves identity, or produces a desired emotional effect. Those questions may have practical value, but they do not by themselves test truth.',
          'The danger is that the system can always reinterpret disconfirmation. Apparent failure becomes hidden complexity. Outsiders become unqualified. Contrary evidence becomes evidence of the critic’s defect. The system remains coherent because it has stopped being vulnerable.',
          'A closed loop can become intellectually beautiful. It may have technical vocabulary, internal debates, revered texts, credentialed interpreters, and elaborate distinctions. None of this guarantees contact with reality. Complexity can be a sign of insight, but it can also be insulation made ornate.',
        ],
      },
      {
        heading: 'The Missing Question',
        body: [
          'The missing question is whether confidence proportionately maps to evidence that can push back. A belief should be exposed to observations, arguments, comparisons, and failures that are allowed to change its credence.',
          'If every possible outcome is compatible with the belief, then the belief may be meaningful as identity, narrative, or practice, but it is weak as a truth-tracking claim. In Credencing terms, Objective Evidence (E0) has been prevented from disciplining Perceived Evidence (EP) and Assigned Credence (CA).',
        ],
      },
      {
        heading: 'Coherence vs Prediction',
        body: [
          'One way to distinguish healthy coherence from closed-loop coherence is prediction. A theory that tracks reality should help us anticipate, discriminate, or explain observations in ways that could have gone otherwise. It should risk something.',
          'If a framework can explain success, failure, silence, contradiction, and surprise with equal ease, then its explanatory flexibility may be too cheap. It has become less like a map and more like a story that can be edited after every journey.',
        ],
      },
      {
        heading: 'External Friction',
        body: [
          'Reality creates friction. Measurements fail to fit, predictions miss, independent observers disagree, and rival explanations sometimes outperform the favored one. A truth-tracking system treats this friction as information.',
          'A closed system treats friction as impurity or misunderstanding. It converts external pressure into an internal lesson about loyalty, humility, mystery, ideology, or method. Sometimes that may be appropriate, but if it always happens, evidence has lost its authority.',
        ],
      },
      {
        heading: 'Using Coherence Responsibly',
        body: [
          'Coherence should be treated as a necessary but limited virtue. It can reveal contradictions, organize inquiry, and make hypotheses intelligible. But it cannot replace calibration, prediction, independent evidence, and openness to defeat.',
          'A responsible agent asks both questions: does this view cohere internally, and does it remain answerable externally? The first protects against nonsense. The second protects against beautiful insulation.',
        ],
      },
      {
        heading: 'The Locked-Room Novel',
        body: [
          'A locked-room mystery can be beautifully coherent: every clue fits, every character has a motive, and the ending feels elegant. But if the author can rewrite the clues after every objection, coherence stops being evidence and becomes control over the story.',
          'A worldview can achieve the same effect. Internal fit matters, but Credencing asks whether anything outside the story is allowed to push back.',
        ],
      },
    ],
    [
      'Internal coherence is valuable but insufficient for truth-tracking.',
      'Closed-loop systems can preserve belief by reinterpreting all disconfirmation.',
      'A rational belief must remain vulnerable to evidence that can change credence.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
    ],
  ),
  libraryPage(
    'Evidence-Proportioned Belief',
    'Rational belief is not the possession of certainty but the discipline of scaling confidence to the quality, quantity, and specificity of evidence.',
    [
      {
        heading: 'The Core Principle',
        body: [
          'Evidence-proportioned belief begins with a modest claim: confidence should rise and fall with support. The stronger, more specific, more independently constrained, and more predictively successful the evidence is, the higher the credence may responsibly become.',
          'This sounds simple, but it is psychologically demanding. People often want confidence to serve comfort, identity, authority, urgency, or belonging. Credencing insists that confidence has one primary epistemic job: to represent the degree to which the evidence supports the claim.',
        ],
      },
      {
        heading: 'Why People Resist Proportion',
        body: [
          'Proportional belief can feel unsatisfying because it often refuses dramatic closure. It says “probably,” “not yet,” “more likely than before,” and “less clear than I hoped.” Those phrases are emotionally weaker than certainty, but they are often epistemically stronger.',
          'Resistance also comes from identity. When a belief becomes part of who someone is, reducing confidence can feel like self-betrayal rather than calibration. The person may then defend a credence because it is socially or emotionally useful, not because it is evidentially warranted.',
        ],
      },
      {
        heading: 'Evidence Quality Matters',
        body: [
          'Not all evidence has the same force. A vivid story, a personal impression, a majority vote, a respected authority, a controlled study, and a successful prediction all affect credence differently. Evidence-proportioned belief requires attention to reliability, independence, mechanisms, base rates, and alternative explanations.',
          'A claim supported by many weak, dependent, or circular reasons may still deserve low confidence. A claim supported by fewer but stronger constraints may deserve more. Counting reasons is not the same as weighing evidence.',
        ],
      },
      {
        heading: 'The Credencing Translation',
        body: [
          'In the model, evidence-proportioned belief means that Objective Evidence (E0), Perceived Evidence (EP), and Assigned Credence (CA) should remain in disciplined relation. If EP diverges from E0, the agent may need better tools. If CA diverges from EP, the agent may need more integrity, courage, or emotional safety.',
          'The model does not require perfect precision. It requires answerability. A person may estimate roughly, revise later, and admit uncertainty. What matters is that confidence remains tethered to support rather than drifting into performance.',
        ],
      },
      {
        heading: 'A Daily Practice',
        body: [
          'For one important belief, write a sentence in this form: “Given the evidence I currently see, I assign roughly X percent confidence.” Then add: “The strongest reason is...” and “The main thing that would lower my confidence is...”',
          'This small practice converts belief from identity into calibration. It makes confidence inspectable, revisable, and less likely to harden into a slogan.',
        ],
      },
      {
        heading: 'The Volume Knob',
        body: [
          'Belief is often treated like a light switch, but credence is more like a volume knob. Weak evidence should not produce maximum volume; mixed evidence should sound mixed; stronger evidence can turn the signal up.',
          'The discipline is not to keep the volume low forever. It is to let the evidence control the volume rather than comfort, urgency, or the desire to sound certain.',
        ],
      },
    ],
    [
      'Rational confidence should scale with evidence rather than comfort or identity.',
      'Evidence quality matters more than the mere number of reasons offered.',
      'Credencing turns proportional belief into a practical discipline.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Confidence Levels'),
      pagePath('/skills', 'How to Scale Confidence to Evidence'),
    ],
  ),
  libraryPage(
    'Binary Thinking and Gradient Thinking',
    'Binary thinking asks whether a claim is believed or rejected; gradient thinking asks how much confidence the evidence warrants.',
    [
      {
        heading: 'The Binary Temptation',
        body: [
          'Binary thinking is attractive because it is fast, socially legible, and emotionally decisive. It divides the world into yes and no, believer and skeptic, true and false, safe and dangerous. Sometimes action requires a binary choice, but belief itself usually has more structure.',
          'The danger arises when the binary action threshold is confused with the underlying credence. A jury must convict or acquit, a doctor must treat or wait, and a voter must choose a candidate. But those actions should not erase the graded confidence beneath them.',
        ],
      },
      {
        heading: 'Why Gradient Thinking Is Better',
        body: [
          'Gradient thinking preserves uncertainty. It lets a person say that one claim is 55 percent likely, another is 80 percent likely, and a third is too underdetermined to rank. This is closer to how evidence actually works.',
          'Science, forecasting, medicine, engineering, and everyday risk management all rely on gradients. Weather reports, clinical diagnoses, market forecasts, and risk models do not become irrational because they fall short of certainty. Their usefulness comes from calibrated degrees.',
        ],
      },
      {
        heading: 'Binary Language Can Distort Credence',
        body: [
          'Ordinary language often forces credences into crude categories. “I believe it” may mean 51 percent, 70 percent, practical acceptance, strong conviction, or social loyalty. “I doubt it” may mean mild hesitation or near rejection.',
          'This compression creates needless conflict. Two people may appear to disagree because one says “I believe” and the other says “I doubt,” even though their actual confidence levels may be close. Credence language restores resolution.',
        ],
      },
      {
        heading: 'Action Still Matters',
        body: [
          'Gradient thinking does not prevent action. It improves action by separating the evidential question from the decision threshold. You can be 60 percent confident it will rain and still bring an umbrella because the cost is low. You should not convict someone at 60 percent because the cost of error is high.',
          'This distinction matters for action. People often demand certainty before acting on urgent risks or act with certainty on weak evidence. Credencing asks both questions: what does the evidence support, and what threshold does the action require?',
        ],
      },
      {
        heading: 'From Toggle to Slider',
        body: [
          'The practical repair is to replace the toggle with a slider. Instead of asking “Do I believe this?” ask “Where on the confidence scale does this belong?” Instead of asking “Am I convinced?” ask “What would move me ten points in either direction?”',
          'A slider makes updateability normal. It reduces the shame of revision because changing from 0.65 to 0.55 is not collapse; it is calibration.',
        ],
      },
      {
        heading: 'Umbrellas and Courtrooms',
        body: [
          'A person may bring an umbrella at 55 percent confidence of rain, but no one should convict a defendant at 55 percent confidence of guilt. The action is binary in both cases, but the required threshold is different.',
          'Gradient thinking keeps the threshold visible. It lets us act when action is required without pretending the underlying credence has become all-or-nothing.',
        ],
      },
    ],
    [
      'Belief is usually gradient even when action must be binary.',
      'Binary language often hides important differences in confidence.',
      'Credence sliders make updating less dramatic and more accurate.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Credences'),
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
    ],
  ),
  libraryPage(
    'Selective Blindness and Asymmetric Scrutiny',
    'A belief system becomes unreliable when it scrutinizes rival claims intensely while protecting its own central commitments from the same standards.',
    [
      {
        heading: 'The Pattern',
        body: [
          'Selective blindness is not simple ignorance. It is patterned attention. The agent sees weaknesses in opposing views, recognizes motivated reasoning in outsiders, and demands careful evidence from rivals while leaving their own favored claims underexamined.',
          'This pattern can occur in religion, politics, academia, activism, business, family systems, and personal self-concept. Any identity-forming belief can become protected from the standards applied elsewhere.',
        ],
      },
      {
        heading: 'Asymmetric Standards',
        body: [
          'The clearest sign is asymmetry. Anecdotes count when they support us but not when they support others. Speculation is irresponsible when opponents use it but insightful when we do. Complexity excuses our failures but indicts theirs.',
          'Credencing treats this as a calibration problem and an integrity problem. The agent may still possess strong reasoning tools, but those tools are directionally deployed. Deep Rationality (SD) is present, yet Core Rationality is weakened by selective application.',
        ],
      },
      {
        heading: 'Why It Feels Like Objectivity',
        body: [
          'Selective blindness often feels objective from the inside because the agent really does notice evidence. The problem is not that evidence is absent; the problem is that attention, suspicion, charity, and burden of proof are distributed unevenly.',
          'The agent can sincerely report that they have reasons. They may even have some good reasons. But the diagnostic question is comparative: would they accept the same reasoning if it supported a rival conclusion?',
        ],
      },
      {
        heading: 'A Symmetry Test',
        body: [
          'A useful test is to reverse the direction of the evidence. If a miracle claim, institutional excuse, ideological prediction, or personal defense would seem weak in another community, it should not become strong merely because it belongs to one’s own.',
          'This does not mean all communities, claims, or sources are equally reliable. It means standards should be trackable. If the standard changes, the reason for the change should be evidential rather than tribal.',
        ],
      },
      {
        heading: 'Repairing Selective Blindness',
        body: [
          'Repair begins by making standards public before knowing which side they will favor. Define what counts as evidence, what counts as a defeater, how much uncertainty remains, and what would lower confidence.',
          'The practice is uncomfortable because it removes some freedom to protect preferred beliefs after the fact. That discomfort is a sign that the repair is working.',
        ],
      },
      {
        heading: 'Two Flashlights',
        body: [
          'Imagine searching a room with two flashlights: one bright beam for evidence you like and one weak beam for evidence you dislike. You will sincerely report that the room contains mostly what the bright beam reveals.',
          'Selective blindness often feels honest from the inside because the agent really is looking. The asymmetry lies in where the light is aimed, how long it stays there, and whether the dim side is allowed to matter.',
        ],
      },
    ],
    [
      'Selective blindness applies high scrutiny outward and low scrutiny inward.',
      'The key diagnostic question is whether standards are symmetric.',
      'Precommitted standards help prevent motivated override.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/skills', 'How to Detect Motivated Override'),
    ],
  ),
  libraryPage(
    'Grounding Ways of Knowing',
    'A claimed way of knowing earns rational trust only when it can be compared, corrected, and shown to improve contact with reality.',
    [
      {
        heading: 'The Question of Method',
        body: [
          'People often disagree not only about conclusions but about ways of knowing. One person appeals to experiment, another to intuition, another to tradition, another to revelation, another to lived experience, another to institutional expertise.',
          'Credencing does not dismiss a method merely because it is unfamiliar. It asks what the method does to credence. Does it improve prediction? Does it correct error? Does it converge across investigators? Does it expose itself to defeaters?',
        ],
      },
      {
        heading: 'Reliability Must Be Earned',
        body: [
          'A method cannot become reliable by declaration. It must show a record of helping agents distinguish true from false, signal from noise, and better explanations from worse ones.',
          'Memory, perception, testimony, instruments, and statistical models are not trusted because they are infallible. They are trusted to the extent that they are tested, corrected, cross-checked, and bounded. Their reliability is graded.',
        ],
      },
      {
        heading: 'Private Certainty Is Not Enough',
        body: [
          'Some ways of knowing feel subjectively powerful. A person may feel immediate certainty, inner confirmation, or deep resonance. These experiences are psychologically real, but their epistemic force depends on whether they track reality better than alternatives.',
          'If a method produces incompatible certainties in different people or communities, the method needs an external calibration procedure. Otherwise, it becomes a confidence amplifier rather than a truth detector.',
        ],
      },
      {
        heading: 'Comparing Methods',
        body: [
          'Methods should be compared by performance. Which method generates successful predictions? Which method notices its own failures? Which method improves when criticized? Which method distinguishes between emotionally satisfying and evidentially supported conclusions?',
          'This comparative approach avoids dogmatism. It allows multiple sources of information while refusing to give any source immunity from evaluation.',
        ],
      },
      {
        heading: 'Credencing the Method Itself',
        body: [
          'A mature epistemology assigns credence not only to claims but also to methods. We can ask: how confident should I be that this way of knowing is reliable in this domain?',
          'The answer may vary. Intuition may be useful for social nuance and poor for statistics. Testimony may be strong in ordinary contexts and weak under incentive pressure. Instruments may be powerful when calibrated and misleading when misunderstood. Methods have domains, limits, and track records.',
        ],
      },
      {
        heading: 'The Toolbelt Analogy',
        body: [
          'Different ways of knowing are like tools in a belt. A thermometer, a map, a memory, a testimony, and a statistical model can all be useful, but none should be treated as a universal instrument.',
          'Grounding asks what each tool is good for, where it fails, and how its outputs are checked. A hammer is not discredited because it cannot measure fever; it is discredited only when someone uses it as if it could.',
        ],
      },
    ],
    [
      'Ways of knowing need reliability, not just confidence.',
      'Subjective certainty must be calibrated against external performance.',
      'Credencing can assign confidence to methods as well as conclusions.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Evidence'),
      pagePath('/applications', 'Science'),
    ],
  ),
  libraryPage(
    'Childlike Trust and Mature Inquiry',
    'Trust is developmentally necessary, but mature rationality requires learning when trust should yield to evidence, comparison, and independent judgment.',
    [
      {
        heading: 'Why Children Trust',
        body: [
          'Children begin life dependent on trust. They lack the knowledge, experience, and cognitive tools needed to evaluate most claims directly. Trusting parents, teachers, and communities is not a defect; it is a developmental necessity.',
          'The epistemic problem begins when childlike trust is idealized as the mature form of belief. What is appropriate for early dependence can become dangerous when preserved as a permanent standard for adult inquiry.',
        ],
      },
      {
        heading: 'Trust Must Mature',
        body: [
          'Mature trust is not the absence of criticism. It is calibrated reliance. Adults can trust sources while also checking incentives, track records, error patterns, and update behavior.',
          'A mature agent does not treat authority as worthless, but neither does the agent treat authority as self-validating. Authority becomes one form of evidence among others, weighted by competence, honesty, domain fit, and accountability.',
        ],
      },
      {
        heading: 'The Risk of Romanticizing Simplicity',
        body: [
          'Simplicity can be beautiful, but it can also hide underdevelopment. A simple belief may be clear because it is well supported, or it may be simple because it has not yet encountered complexity.',
          'When communities praise simplicity without also praising correction, they may train people to resist the very experiences that produce mature judgment: ambiguity, disagreement, evidence conflict, and the need to revise inherited confidence.',
        ],
      },
      {
        heading: 'Education as Calibration',
        body: [
          'Good education does not merely replace old beliefs with new ones. It teaches students how to manage credence. It shows how to ask what evidence is available, how strong it is, which alternatives remain live, and what confidence is warranted.',
          'The transition from childlike trust to mature inquiry is therefore not a transition from trust to distrust. It is a transition from unexamined trust to calibrated trust.',
        ],
      },
      {
        heading: 'Protecting the Young Without Freezing Them',
        body: [
          'Children should not be forced to carry adult epistemic burdens too early. But they should gradually be given the tools to distinguish testimony from evidence, authority from reliability, and confidence from certainty.',
          'A healthy intellectual culture protects children while preparing them to outgrow passive dependence. It welcomes the moment when a learner begins to ask, “How do we know?”',
        ],
      },
      {
        heading: 'Training Wheels for Trust',
        body: [
          'Childlike trust is like training wheels: valuable because it lets the learner move before balance is fully developed. The problem is not that the wheels existed; the problem comes when the rider is told that removing them would be a failure.',
          'Mature inquiry keeps the gift of trust but adds balance: track record, comparison, accountability, and the courage to revise when trusted sources fail.',
        ],
      },
    ],
    [
      'Childlike trust is developmentally necessary but not the ideal endpoint of rationality.',
      'Mature trust is calibrated, revisable, and accountable.',
      'Education should move learners from passive confidence to responsible credencing.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/applications', 'Education'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
    ],
  ),
  libraryPage(
    'Unfalsifiability and Moving Goalposts',
    'A claim loses epistemic force when every possible observation can be reinterpreted to preserve it.',
    [
      {
        heading: 'The Value of Risk',
        body: [
          'A truth-tracking claim should risk being wrong. It should make contact with possible observations that would raise or lower confidence. Without such risk, the claim may remain meaningful, expressive, or motivational, but it becomes weak as an epistemic guide.',
          'Falsifiability is not the whole of rationality, but vulnerability to correction is essential. A belief that cannot be corrected cannot be calibrated.',
        ],
      },
      {
        heading: 'How Goalposts Move',
        body: [
          'Moving goalposts occurs when the standard for confirmation or disconfirmation changes after the result is known. A failed prediction becomes symbolic. A promised outcome becomes conditional. A clear test becomes unfair. A counterexample becomes irrelevant.',
          'Sometimes reinterpretation is legitimate. Language can be misunderstood, initial hypotheses can be refined, and auxiliary assumptions can be corrected. The problem arises when reinterpretation always protects the favored claim and never lowers credence.',
        ],
      },
      {
        heading: 'The Credencing Diagnosis',
        body: [
          'Unfalsifiability blocks the path from Objective Evidence (E0) to Perceived Evidence (EP). Evidence arrives, but the system has rules for preventing that evidence from counting against the belief.',
          'It can also create a Perceived Evidence to Assigned Credence gap (EP-CA). The agent may privately recognize that the evidence is weaker than expected while publicly maintaining the same confidence because the belief is too costly to revise.',
        ],
      },
      {
        heading: 'A Test for Protected Claims',
        body: [
          'Ask: what observation would make this claim less likely? If the answer is “nothing,” then the claim is not functioning as an ordinary empirical or historical claim. It may be identity, poetry, commitment, or practice, but it should not be advertised as evidence-responsive belief.',
          'If the answer exists but is constantly revised whenever it threatens the belief, then the issue is not mere unfalsifiability but strategic unfalsifiability. The test is present in theory but disabled in practice.',
        ],
      },
      {
        heading: 'Repairing the Goalposts',
        body: [
          'The repair is precommitment. Before the evidence is known, state what would count in favor, what would count against, and how much the result should move confidence.',
          'This practice is common in good science and good forecasting because it limits after-the-fact rationalization. Credencing extends the same discipline to ordinary belief.',
        ],
      },
      {
        heading: 'The Moving Finish Line',
        body: [
          'Picture a race where the finish line moves whenever the favored runner falls behind. The runner may still be fast, but the race no longer measures speed. It measures control over the rules.',
          'A claim with moving goalposts works the same way. If failed expectations never lower confidence, the inquiry is no longer using outcomes as evidence.',
        ],
      },
    ],
    [
      'A belief that cannot be corrected cannot be calibrated.',
      'Moving goalposts protect confidence from evidence after the fact.',
      'Precommitted update conditions make claims more epistemically honest.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/case-studies', 'Conspiracy Thinking'),
      pagePath('/skills', 'How to Update with New Evidence'),
    ],
  ),
  libraryPage(
    'Parsimony and Belief Burdens',
    'Parsimony is not a dislike of complexity; it is a demand that added assumptions earn their keep.',
    [
      {
        heading: 'What Parsimony Does',
        body: [
          'Parsimony asks us not to multiply assumptions beyond need. It does not say the simplest story is always true. Reality can be complex. The point is that complexity should be purchased with explanatory gain.',
          'When two explanations account for the same evidence, the one with fewer unsupported commitments usually deserves higher prior confidence. Added entities, powers, intentions, exceptions, or hidden mechanisms create belief burdens.',
        ],
      },
      {
        heading: 'Assumption Stacks',
        body: [
          'Many beliefs become fragile because they depend on a stack of assumptions. Each assumption may be possible, but the conjunction becomes less likely unless the evidence strongly supports the whole structure.',
          'Credencing makes this visible by asking what each assumption contributes and how strongly it is supported. A claim that requires ten weak supports should not inherit the confidence of its most attractive part.',
        ],
      },
      {
        heading: 'Parsimony and Priors',
        body: [
          'Parsimony is closely related to priors. Before considering a specific piece of evidence, some hypotheses are less expected because they require more special conditions. That does not make them impossible. It means they need stronger evidence to become competitive.',
          'This is why extraordinary claims require not only evidence, but evidence strong enough to overcome low prior probability and live alternatives.',
        ],
      },
      {
        heading: 'When Complexity Is Worth It',
        body: [
          'Complexity is justified when it explains more, predicts better, unifies independent evidence, or survives tests that simpler alternatives fail. The history of science includes many complex theories that earned their place by performance.',
          'The problem is not complexity itself. The problem is unpaid complexity: assumptions added mainly to rescue a preferred belief from evidential pressure.',
        ],
      },
      {
        heading: 'A Belief-Burden Audit',
        body: [
          'To audit a belief, list the assumptions it needs. Which are independently supported? Which are introduced only because the conclusion needs them? Which could be removed without losing predictive power?',
          'Then assign confidence to the whole structure, not merely to the most emotionally appealing assumption. Parsimony keeps credence from being inflated by hidden costs.',
        ],
      },
      {
        heading: 'The Backpack of Assumptions',
        body: [
          'Every extra assumption is like another object placed in a backpack before a long hike. One item may be harmless; twenty may change the whole journey. The question is not whether each item is possible, but whether each earns its weight.',
          'Parsimony asks a belief to carry only the assumptions it can pay for with explanatory gain, predictive power, or independent support.',
        ],
      },
    ],
    [
      'Parsimony asks added assumptions to earn their explanatory keep.',
      'Low-prior claims require stronger evidence to become competitive.',
      'Unpaid complexity often signals motivated rescue rather than explanation.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/bayes-theorem', 'The Prior'),
      pagePath('/skills', 'How to Estimate Priors'),
    ],
  ),
  libraryPage(
    'The Floating Fortress Problem',
    'A theory can preserve itself by floating above every test, but insulation is not the same as rational strength.',
    [
      {
        heading: 'The Fortress Image',
        body: [
          'A floating fortress is a belief system that remains internally defended while disconnecting from ordinary evidential terrain. It has walls, vocabulary, authorities, and internal rules, but it hovers above the tests that would normally discipline confidence.',
          'From inside, the fortress may feel secure. From outside, it may look like a structure designed to avoid contact. Credencing asks whether the structure is stable because it tracks reality or because it has escaped correction.',
        ],
      },
      {
        heading: 'Insulation Strategies',
        body: [
          'Insulated systems often use redefinition, metaphor, mystery, special pleading, selective standards, or appeals to hidden conditions. Each move may be defensible in a particular case. The pattern becomes suspicious when every failed contact with evidence is handled by another insulation layer.',
          'The system then becomes difficult to evaluate because no observation is allowed to count straightforwardly. What appears to be strength may be the absence of risk.',
        ],
      },
      {
        heading: 'Internal Sophistication',
        body: [
          'Floating fortresses can be intellectually sophisticated. They may contain careful distinctions, long traditions, technical debates, and subtle interpretive moves. Sophistication should not be dismissed, but it should not be confused with external accountability.',
          'The question is not whether the system has internal resources. The question is whether those resources improve contact with reality or merely protect the system from revision.',
        ],
      },
      {
        heading: 'How the Model Reads It',
        body: [
          'A floating fortress can distort all three main values. Objective Evidence (E0) is kept at a distance, Perceived Evidence (EP) is filtered through protective interpretation, and Assigned Credence (CA) remains high because the system treats insulation as vindication.',
          'The visible symptom is stable confidence under unstable evidence. No matter what happens, the fortress remains confident. Credencing treats that stability as a question, not a virtue by itself.',
        ],
      },
      {
        heading: 'Reconnecting to the Ground',
        body: [
          'The repair is to reconnect claims to tests. Which parts of the theory make contact with observation, prediction, comparison, or practical reliability? Which parts are symbolic, existential, or interpretive rather than evidential?',
          'A belief system need not reduce everything to laboratory measurement, but any truth claim that asks for high credence should expose itself to some form of reality contact.',
        ],
      },
      {
        heading: 'The Castle on Balloons',
        body: [
          'A castle on balloons may look impressive from a distance: towers, walls, flags, and guards. But if it never touches the ground, no one can test its foundations.',
          'The floating fortress problem is not that the structure lacks internal architecture. It is that high confidence is being maintained without ordinary contact with evidence, prediction, or correction.',
        ],
      },
    ],
    [
      'Insulated theories can feel strong because they avoid correction.',
      'Internal sophistication is not the same as external accountability.',
      'High-credence truth claims need some form of reality contact.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/library', 'Coherence Is Not Enough'),
      pagePath('/core-ideas', 'Diagnostic Safeguards'),
    ],
  ),
  libraryPage(
    'Protected Predictions and Answered Prayer',
    'Predictions teach only when success and failure are both allowed to affect confidence.',
    [
      {
        heading: 'The Role of Prediction',
        body: [
          'Prediction is one of the strongest tools for calibrating belief. If a claim leads us to expect certain observations rather than others, then outcomes can raise or lower credence.',
          'The epistemic value of prediction depends on risk. A forecast that cannot fail cannot teach. A promise that is always reinterpreted after the outcome does not function as a normal evidential claim.',
        ],
      },
      {
        heading: 'Protected Prediction',
        body: [
          'A prediction becomes protected when failure is absorbed by auxiliary explanations that do not lower confidence. The timing was wrong, the conditions were hidden, the interpretation was too literal, the failure was itself meaningful, or the outcome occurred invisibly.',
          'Some auxiliary explanations are legitimate. But if every failure is protected and every success is counted, the system has a one-way evidential valve. Confidence can rise but rarely falls.',
        ],
      },
      {
        heading: 'The Asymmetry Problem',
        body: [
          'Many belief systems count hits more vividly than misses. A remembered success becomes testimony; a failure becomes complexity. This asymmetry inflates Assigned Credence (CA) because the evidence ledger is not balanced.',
          'Credencing asks for symmetric accounting. If a successful outcome would have raised confidence, a failed outcome should lower it at least somewhat unless there is a principled reason established in advance.',
        ],
      },
      {
        heading: 'Prayer as a General Case Study',
        body: [
          'Prayer claims are one example of a broader pattern: a practice is said to affect the world, but failed outcomes are protected by interpretive conditions. Similar patterns appear in productivity systems, investment theories, political predictions, therapeutic claims, and institutional promises.',
          'The issue is not whether the practice has personal meaning. The issue is whether claims about external effects are calibrated by external outcomes.',
        ],
      },
      {
        heading: 'A Forecasting Repair',
        body: [
          'Before the outcome, state the prediction, the expected observation, the time frame, and how confidence should move if the result occurs or fails to occur. Afterward, update without changing the rules.',
          'This does not remove all ambiguity, but it reduces motivated interpretation. It turns prediction from a confidence-preserving ritual into a calibration tool.',
        ],
      },
      {
        heading: 'The Sealed Scoreboard',
        body: [
          'Imagine a scoreboard where goals for your team are displayed clearly, but goals against your team are sealed behind a curtain and later reinterpreted. The game may continue, but the score no longer calibrates confidence in who is playing better.',
          'Protected predictions create the same asymmetry. Hits are counted as evidence; misses are absorbed as complexity. A fair evidential scoreboard must let both outcomes move credence.',
        ],
      },
    ],
    [
      'Predictions teach only when misses count as well as hits.',
      'Protected predictions create one-way evidential valves.',
      'Precommitted forecasting rules improve calibration.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/core-ideas', 'Calibration'),
      pagePath('/skills', 'How to Update with New Evidence'),
    ],
  ),
  libraryPage(
    'Semantic Drift and the Word Faith',
    'When a key term shifts meanings during argument, credences become harder to inspect and easier to protect.',
    [
      {
        heading: 'The Problem of Moving Meanings',
        body: [
          'Semantic drift occurs when a word slides between meanings without notice. A term may mean trust in one sentence, loyalty in another, confidence in another, hope in another, and evidence in another. The conversation appears continuous, but the object has changed.',
          'This matters because credence attaches to propositions, not to vague emotional atmospheres. If a key term keeps shifting, the claim being evaluated becomes unstable.',
        ],
      },
      {
        heading: 'Faith as a Case Study',
        body: [
          'The word faith is especially prone to drift. It can mean evidence-sensitive trust, belief beyond evidence, courageous commitment, institutional loyalty, personal hope, or existential orientation. Some uses are harmless; others are epistemically loaded.',
          'Trouble begins when a defensible meaning is used to protect an indefensible one. Ordinary trust may be invoked to normalize a commitment that would not survive ordinary evidential standards.',
        ],
      },
      {
        heading: 'How Drift Protects Belief',
        body: [
          'Semantic drift lets a claim retreat under pressure. When criticized as belief beyond evidence, faith becomes trust. When asked for the track record of that trust, it becomes relationship. When relationship is questioned, it becomes mystery or commitment.',
          'Each move may contain a legitimate concept, but the sequence can prevent any one claim from being evaluated. The result is not clarity but evasion by vocabulary.',
        ],
      },
      {
        heading: 'Credencing Requires Stable Propositions',
        body: [
          'Before assigning confidence, identify the proposition. Is the claim that a belief is emotionally sustaining, character-forming, historically probable, metaphysically true, socially useful, or evidentially warranted? These are different claims.',
          'Once the proposition is stable, credence can be assigned. Without that stability, people may appear to disagree about evidence when they are actually sliding among meanings.',
        ],
      },
      {
        heading: 'A Repair for Semantic Drift',
        body: [
          'Ask for a working definition before evaluating the claim. Then ask whether the definition remains the same when objections arise. If the definition changes, restart the credence assessment with the new proposition clearly named.',
          'This is not pedantry. It is intellectual hygiene. Stable meanings let confidence become inspectable and prevent language from doing the work evidence should do.',
        ],
      },
      {
        heading: 'The Shape-Shifting Key',
        body: [
          'A shape-shifting key can open any lock because it becomes whatever shape is needed at the moment. That sounds powerful, but it also means you never learn which key actually fits which door.',
          'When a word like faith shifts from trust to hope to loyalty to confidence to mystery, the discussion may keep moving while the proposition disappears. Credencing asks the key to hold still long enough for the lock to be tested.',
        ],
      },
    ],
    [
      'Semantic drift hides which proposition is being evaluated.',
      'Faith often shifts among trust, hope, loyalty, commitment, and evidence.',
      'Stable definitions are required before credence can be responsibly assigned.',
    ],
    [
      pagePath('/library', 'Essays'),
      pagePath('/library', 'Faith, Trust, and Evidence-Weighted Confidence'),
      pagePath('/skills', 'How to Ask Better Epistemic Questions'),
    ],
  ),
  libraryPage(
    'Glossary',
    'The glossary provides concise definitions for Credencing, epistemology, Bayesian theory, cognitive bias, decision theory, and institutional reasoning.',
    [
      {
        heading: 'Core Credencing Terms',
        body: [
          'Credence: a graded degree of confidence in a claim, hypothesis, possibility, or interpretation. Objective Evidence (E0): the evidential support that exists in the world apart from the agent. Perceived Evidence (EP): what the agent takes the evidence to show after attention, interpretation, memory, social pressure, and reasoning have done their work.',
          'Assigned Credence (CA): the confidence the agent actually adopts. Deep Rationality (SD): the skill side of rationality, including statistical literacy, causal reasoning, Bayesian updating, hypothesis comparison, and sensitivity to base rates. Core Rationality: the integrity side of rationality, the willingness to assign confidence in line with what one takes the evidence to show.',
          'Calculation Error (DE): the gap between objective evidence and perceived evidence. Core Irrationality (IC): the gap between perceived evidence and assigned credence. Warranted Slack: the amount of EP-CA variation treated as reasonable under uncertainty. Excess Core Irrationality: the portion of Core Irrationality that remains after warranted slack is allowed. Warranted Uncertainty: the range of doubt that remains rational given limited evidence, limited skill, and the stakes of judgment.',
          'Diagnostic Safeguard: a rule that prevents the model from treating every gap as excess misalignment. Responsibility Filter: the check for evidence access, skill, pressure, and willingness to repair before moving from structural diagnosis to responsibility assessment. Epistemic Akrasia: believing against one’s own judgment about what the evidence supports.',
        ],
      },
      {
        heading: 'Bayesian and Probabilistic Terms',
        body: [
          'Prior: the starting credence before a new item of evidence is considered. Likelihood: the probability of observing the evidence if a hypothesis were true. Posterior: the updated credence after prior and evidence are combined. Bayesian Updating: disciplined movement from prior to posterior in response to evidence.',
          'Bayes Factor: a measure of how much more strongly evidence supports one hypothesis over another. Base Rate: the background frequency of an event, condition, or property in the relevant population. Reference Class: the group used to estimate a base rate. Conditional Probability: the probability of one thing given that another thing is true.',
          'Expected Value: the probability-weighted value of possible outcomes. Decision Threshold: the credence level at which action becomes justified under the stakes. Sensitivity: a test’s true-positive rate. Specificity: a test’s true-negative rate. False Positive: a positive signal when the condition is absent. False Negative: a negative signal when the condition is present.',
        ],
      },
      {
        heading: 'Epistemology and Rational Inquiry',
        body: [
          'Evidence: information that should rationally affect confidence. Justification: the support that makes a belief epistemically responsible. Warrant: a stronger status sometimes used for beliefs formed by reliable or properly functioning processes. Reliability: the tendency of a method, source, or faculty to produce true or accurate beliefs.',
          'Defeater: information that weakens or cancels a justification. Undercutting Defeater: evidence that attacks the connection between evidence and conclusion. Rebutting Defeater: evidence that directly supports the opposite conclusion. Testability: the degree to which a claim can be checked against observation, prediction, or independent constraint.',
          'Falsifiability: the possibility that a claim could be shown false under some conditions. Epistemic Humility: awareness of one’s limits and error risk. Epistemic Responsibility: managing belief in ways answerable to evidence. Intellectual Virtue: a stable trait that improves inquiry, such as curiosity, courage, fairness, or honesty about uncertainty.',
        ],
      },
      {
        heading: 'Cognitive Bias and Failure Modes',
        body: [
          'Base-Rate Neglect: ignoring background frequency when vivid case details dominate attention. Confirmation Bias: preferentially seeking or noticing evidence that supports one’s existing view. Motivated Reasoning: reasoning shaped by what one wants, fears, or socially needs to be true. Availability Heuristic: overestimating likelihood because examples are easy to recall.',
          'Anchoring: relying too heavily on an initial number, frame, or impression. Overconfidence: assigning more certainty than one’s evidence or track record warrants. Dunning-Kruger Effect: low skill paired with inflated self-assessment, especially when the skill needed to judge performance is also weak. Identity-Protective Cognition: processing evidence in ways that defend group belonging or self-concept.',
          'Cognitive Dissonance: discomfort created by tension among beliefs, values, and actions. Rationalization: constructing reasons after the fact to protect a desired conclusion. Selective Skepticism: applying high standards to unwelcome claims and low standards to welcome claims. Epistemic Bubble: a network where contrary evidence is absent. Echo Chamber: a network where contrary sources are actively discredited.',
        ],
      },
      {
        heading: 'Argument, Disagreement, and Communication',
        body: [
          'Argument: a structured attempt to support a conclusion with reasons. Premise: a supporting claim in an argument. Conclusion: the claim being supported. Validity: a logical relation in which the conclusion follows if the premises are true. Soundness: validity plus true premises. Induction: reasoning from observed cases to broader patterns.',
          'Abduction: inference to the best explanation. Steelmanning: reconstructing an opposing view in its strongest plausible form. Charitable Interpretation: reading an argument in a way that avoids needless distortion. Burden of Proof: the responsibility to provide support for a claim. Extraordinary Claim: a claim that would strongly disrupt background expectations and therefore needs unusually strong evidence.',
          'Crux: a point that would actually change one’s view if resolved. Double Crux: a shared disagreement point that would move both parties. Update Condition: a specified observation or argument that would raise or lower credence. Disagreement: evidence that another mind, with its own information and biases, assigns a different credence.',
        ],
      },
      {
        heading: 'Institutions, Science, and Public Reasoning',
        body: [
          'Social Epistemology: the study of how knowledge and belief are shaped by testimony, institutions, trust, expertise, and group processes. Expert Deference: rational reliance on people with better evidence, skill, or domain knowledge. Expert Overreach: confidence outside the expert’s competence or evidential base. Peer Review: institutional filtering by qualified critics before publication.',
          'Replication: repeating a study or analysis to test whether a result holds. Incentive Gradient: the way rewards and punishments shape what people notice, report, or suppress. Institutional Credencing: the process by which organizations assign confidence, act on information, and manage dissent. Epistemic Governance: structures that make collective belief more accurate, accountable, and updateable.',
          'Transparency: making evidence, methods, and uncertainty visible. Accountability: exposing claims and decisions to correction. Prediction Record: a track record of forecasted credences and outcomes. Calibration Curve: a comparison between confidence levels and actual frequencies. Public Reason: argument offered in terms that others can inspect without accepting private revelation or protected authority.',
        ],
      },
      {
        heading: 'How to Use It',
        body: [
          'Use this glossary as a quick reference while reading the longer pages. If a term becomes unclear, return here, then follow the related link to the full concept article or case study.',
          'The terms are grouped by function rather than alphabetically because Credencing is a model of relationships. Evidence, credence, bias, argument, and institutions are not isolated vocabulary islands; they interact in actual judgment.',
        ],
      },
    ],
    [
      'The glossary stabilizes project vocabulary.',
      'Short definitions should link to full concept pages.',
      'It helps readers move through the web without losing the thread.',
    ],
    [
      pagePath('/core-ideas', 'Credences'),
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/library', 'FAQ'),
    ],
  ),
  libraryPage(
    'FAQ',
    'The FAQ answers recurring questions and prevents common misunderstandings of the framework.',
    [
      {
        heading: 'Is This Just Bayesianism?',
        body: [
          'No. The framework is Bayesian-friendly, but it adds a diagnostic distinction between perceiving evidence and assigning credence. Bayesian tools help with Deep Rationality; they do not guarantee Core Rationality.',
          'A person may know how evidence should update a prior and still refuse the resulting posterior because the conclusion is threatening. Credencing therefore treats Bayesian updating as necessary but not sufficient for rational integrity.',
        ],
      },
      {
        heading: 'Is Core Irrationality an Accusation?',
        body: [
          'Not automatically. It is a structural diagnosis of a Perceived Evidence to Assigned Credence gap (EP-CA). Responsibility assessment depends on context, access, incentives, trauma, social pressure, and whether the agent is willing to repair the gap.',
          'The model is intentionally diagnostic before it is accusatory. It asks where the gap opens before deciding whether the gap reflects dishonesty, fear, social pressure, ignorance, confusion, or a mixed case.',
        ],
      },
      {
        heading: 'Does the Model Claim Numerical Precision?',
        body: [
          'No. The numbers are often interpretive approximations. Their purpose is to make relationships visible. The model asks where gaps open and what would repair them, not whether every human belief can be measured exactly.',
          'The sliders are conceptual instruments. They are useful when they make hidden differences discussable: evidence versus perception, perception versus final confidence, and skill deficit versus motivated override.',
        ],
      },
      {
        heading: 'How Does the Model Avoid Overdiagnosis?',
        body: [
          'It separates raw gaps from warranted conclusions. A raw Perceived Evidence to Assigned Credence gap (EP-CA) is a reason to investigate, but the stronger diagnosis depends on how much of that gap remains after warranted uncertainty, evidence noise, skill limits, and access limits are considered.',
          'The improved model calls this remainder Excess Core Irrationality. It also uses a responsibility filter: before assigning blame, ask whether the agent had access, skill, time, emotional safety, and a real opportunity to repair the gap.',
        ],
      },
      {
        heading: 'What Is the Difference Between Being Wrong and Being Irrational?',
        body: [
          'A person can be wrong because the evidence available to them was misleading, incomplete, or difficult to interpret. That is often a Deep Rationality or information-access problem, not a Core Rationality problem.',
          'Irrationality becomes more serious when a person has enough access to the evidential situation, or at least recognizes the direction of the evidence, but assigns confidence in a way that protects identity, comfort, tribe, or prior commitment.',
        ],
      },
      {
        heading: 'Why Not Just Talk About Belief Instead of Credence?',
        body: [
          'Ordinary belief language is too coarse. “I believe it” can mean a mild lean, a practical acceptance, a strong conviction, or near certainty. Credence makes the strength of belief visible.',
          'Many mistakes happen when people act as if a 0.55 confidence were a 0.95 confidence. Credencing keeps those states apart so disagreement and decision-making can become more precise.',
        ],
      },
      {
        heading: 'Does Uncertainty Mean Weakness?',
        body: [
          'No. Uncertainty can be a sign of epistemic strength when it accurately reflects limited evidence, poor measurement, live alternatives, or high stakes. The failure is not uncertainty; the failure is pretending to know more than one knows.',
          'Warranted uncertainty is especially important in public reasoning because it protects inquiry from false closure. It lets a person say, “I have enough evidence to lean, but not enough to declare victory.”',
        ],
      },
      {
        heading: 'How Does Credencing Treat Faith?',
        body: [
          'Credencing criticizes faith when faith functions as belief beyond, against, or insulated from evidence. The problem is methodological: protected belief blocks updateability.',
          'The model is not limited to religious faith. Any ideology, institution, identity, or emotional commitment can create faith-like protection if it makes some conclusions immune to ordinary evidential pressure.',
        ],
      },
      {
        heading: 'Can Experts Be Irrational?',
        body: [
          'Yes. Expertise improves the capacity to process evidence, but it does not guarantee willingness to accept what the processed evidence implies. A biased expert may have high Deep Rationality and weak Core Rationality.',
          'This is why the model separates skill from integrity. Intelligence can clarify evidence, but it can also become a better defense attorney for a preferred conclusion.',
        ],
      },
      {
        heading: 'How Should I Use the Interactive Model?',
        body: [
          'Use the model to ask where a belief state is going wrong. If Objective Evidence and Perceived Evidence diverge, look for missing information, poor statistics, framing, propaganda, or weak methods. If Perceived Evidence and Assigned Credence diverge, look for motivation, fear, identity, incentives, or social cost.',
          'The model is most useful when comparing cases that look similar from the outside. Two people may both assign 0.90 confidence, but one may be tracking strong evidence while the other is inflating weak evidence into certainty.',
        ],
      },
      {
        heading: 'What Would Count as Progress?',
        body: [
          'Progress is not perfect certainty. Progress is better calibration: confidence levels becoming more proportionate to evidence, update conditions becoming clearer, and people becoming more willing to distinguish what they know from what they want.',
          'At the institutional level, progress means systems that notice reality earlier, punish correction less, preserve dissent, and make confidence claims accountable to records, methods, and outcomes.',
        ],
      },
    ],
    [
      'The framework is Bayesian-friendly but broader.',
      'Core Irrationality is diagnostic before it is used for responsibility assessment.',
      'Excess Core Irrationality helps prevent overdiagnosis.',
      'The model uses numbers to clarify relationships, not to fake precision.',
      'The FAQ clarifies how Credencing treats uncertainty, expertise, faith, disagreement, and progress.',
    ],
    [
      pagePath('/start-here', 'What Is Credencing?'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/core-ideas', 'Diagnostic Safeguards'),
      pagePath('/library', 'Glossary'),
    ],
  ),
  libraryPage(
    'References',
    'References collect sources, influences, and adjacent traditions in epistemology, probability, psychology, and institutional reasoning.',
    [
      {
        heading: 'Probability and Updating',
        body: [
          'Thomas Bayes, "An Essay towards solving a Problem in the Doctrine of Chances" (1763), remains the historical starting point for Bayesian updating. E. T. Jaynes, Probability Theory: The Logic of Science (2003), is a major modern expression of probability as extended logic. These sources sit behind the site treatment of priors, likelihoods, posteriors, and Bayesian movement.',
        ],
      },
      {
        heading: 'Heuristics, Biases, and Calibration',
        body: [
          'Daniel Kahneman and Amos Tversky, "Judgment under Uncertainty: Heuristics and Biases" (1974), anchors much of the modern discussion of bias and base-rate neglect. Sarah Lichtenstein, Baruch Fischhoff, and Lawrence D. Phillips, "Calibration of Probabilities" (1982), is a natural reference point for the site emphasis on confidence matching reliability.',
        ],
      },
      {
        heading: 'Motivated and Social Reasoning',
        body: [
          'Ziva Kunda, "The Case for Motivated Reasoning" (1990), and Charles S. Taber and Milton Lodge, "Motivated Skepticism in the Evaluation of Political Beliefs" (2006), help frame cases where reasoning is directionally pressured. Philip E. Tetlock, Expert Political Judgment (2005), and Helen Longino, Science as Social Knowledge (1990), connect the project to expert judgment and social epistemology.',
        ],
      },
      {
        heading: 'How References Should Function',
        body: [
          'References are not decoration. They help readers test the framework, compare it with existing work, and locate places where the project needs refinement. Adjacent-reference panels now appear on many pages where a concept has obvious scholarly neighbors.',
        ],
      },
    ],
    [
      'References connect the project to adjacent literatures.',
      'They should invite criticism and refinement.',
      'The bibliography should grow with the site.',
    ],
    [
      pagePath('/library', 'Papers'),
      pagePath('/library', 'Project Notes'),
      pagePath('/core-ideas', 'Bayesian Updating'),
    ],
  ),
  libraryPage(
    'Visual Archive',
    'The visual archive stores diagrams, screenshots, model states, and explanatory graphics.',
    [
      {
        heading: 'Purpose',
        body: [
          'The visual archive collects reusable images and diagrams that explain the model: archetype snapshots, gap diagrams, comparison panels, teaching visuals, social cards, and historical iterations of the interface.',
          'Its job is not decorative. Visuals make the two-gap framework inspectable. A reader should be able to see the difference between poor evidence access, poor evidence processing, and a refusal to assign confidence according to one’s own perceived evidence.',
        ],
      },
      {
        heading: 'Core Visual Sets',
        body: [
          'The first visual set is the archetype set: ideal agent, honest novice, biased expert, epistemic delusion, gaslighting, academic dogma, strict empiricism, and any later scenario diagrams. Each item should include a caption explaining what the visual teaches and which variables differ.',
          'The second visual set is the structural set: Objective Evidence to Perceived Evidence gap diagrams (E0-EP), Perceived Evidence to Assigned Credence gap diagrams (EP-CA), calibration scales, likelihood curves, update sequences, and comparison panels that show two agents handling the same evidence differently.',
          'The third visual set is the teaching set: worksheets, slide-friendly diagrams, printable legends, and annotated screenshots from the interactive lab.',
        ],
      },
      {
        heading: 'Caption Standard',
        body: [
          'Every archived visual should answer four questions: what is being compared, what the relevant variables are, what failure mode the image illustrates, and what a more rational update would look like.',
          'Captions should avoid simply labeling a person “irrational.” The useful claim is more precise: where is the gap, what explains it, and what would reduce it?',
        ],
      },
      {
        heading: 'Why It Matters',
        body: [
          'The visual language is central to the project. Many readers will understand the distinction between Core and Deep failure faster from a diagram than from a formal definition.',
          'The archive also preserves continuity as the site evolves. When terminology, colors, examples, or interface states change, archived visuals can show how the teaching model developed rather than making every revision disappear.',
        ],
      },
    ],
    [
      'The archive preserves the project visual language.',
      'Scenario images should include interpretive captions.',
      'Visuals help teach the two-gap model quickly.',
    ],
    [
      pagePath('/interactive-lab', 'Visual Legend'),
      pagePath('/interactive-lab', 'Preset Scenarios'),
      pagePath('/library', 'Teaching Materials'),
    ],
  ),
  libraryPage(
    'Teaching Materials',
    'Teaching materials turn the framework into lessons, handouts, exercises, and discussion prompts.',
    [
      {
        heading: 'Classroom Use',
        body: [
          'The framework can be taught in philosophy, critical thinking, statistics, media literacy, science communication, and civic education. Its advantage is that it connects abstract epistemology to ordinary decisions.',
          'A short lesson can introduce Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD) with one everyday example. A longer unit can move from glossary terms to model reading, then to case studies, then to student-built scenarios.',
        ],
      },
      {
        heading: 'Lesson Sequence',
        body: [
          'A natural sequence begins with calibration: students practice stating confidence in percentages and explaining what would change their minds. It then introduces evidence quality, likelihoods, priors, and updating.',
          'The middle lessons use case studies. Students estimate Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD), then compare whether disagreement comes from different evidence, different interpretation, different confidence assignment, or different incentives.',
          'The final lessons ask students to build their own scenarios and write a short diagnostic reflection: where was the gap, why did it appear, and what repair would be epistemically responsible?',
        ],
      },
      {
        heading: 'Reusable Materials',
        body: [
          'Useful materials include a one-page model guide, scenario worksheets, calibration exercises, debate prompts, case-study packets, slide diagrams, reading questions, and assignments where students estimate Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD).',
          'The download library already provides a starter model guide, scenario worksheet, and classroom exercise packet. These should remain editable so teachers can adapt the framework to philosophy, writing, statistics, civic reasoning, or media-literacy courses.',
        ],
      },
      {
        heading: 'Pedagogical Aim',
        body: [
          'The aim is not to make students perform certainty. It is to help them become more honest, precise, and updateable about uncertainty.',
        ],
      },
    ],
    [
      'The model can teach practical epistemology across subjects.',
      'Scenario worksheets are a natural teaching format.',
      'The core teaching goal is calibrated, updateable confidence.',
    ],
    [
      pagePath('/applications', 'Education'),
      pagePath('/skills', 'Practice Exercises'),
      pagePath('/library', 'Downloads'),
    ],
  ),
  libraryPage(
    'Downloads',
    'Downloads collect reusable PDFs, worksheets, diagrams, Markdown source files, and presentation assets.',
    [
      {
        heading: 'Available Downloads',
        body: [
          'The current download set includes a one-page model guide, a scenario worksheet, and a classroom exercise packet. Each is available as a printable PDF and as Markdown source for easy adaptation.',
        ],
      },
      {
        heading: 'Versioning',
        body: [
          'Because the framework is still developing, downloads are best treated as versioned teaching artifacts. A worksheet used in a class or workshop should make clear which version of the model it assumes and which pages supply the relevant definitions.',
          'Versioning matters because a small change in terminology can affect how students diagnose a case. For example, changing the boundary between calculation error and core irrationality changes how a worksheet handles honest confusion.',
        ],
      },
      {
        heading: 'Public Reuse',
        body: [
          'Reusable materials are designed so teachers, writers, and discussion groups can use them without needing to understand the whole site first. Each download should include a short orientation, a vocabulary reminder, and links back to the relevant pages.',
          'The best downloads do one thing well: explain the model, guide a scenario analysis, structure a discussion, or help a reader practice calibrated confidence.',
        ],
      },
    ],
    [
      'Downloads should support teaching and reuse.',
      'Versioning matters while the framework develops.',
      'Each artifact should link back into the site.',
    ],
    [
      pagePath('/library', 'Teaching Materials'),
      pagePath('/library', 'Visual Archive'),
      pagePath('/skills', 'Practice Exercises'),
    ],
  ),
  libraryPage(
    'Project Notes',
    'Project notes track design decisions, open questions, revisions, and future directions.',
    [
      {
        heading: 'Why Keep Notes Public',
        body: [
          'A project about credencing should model its own updateability. Project notes can show what is settled, what is provisional, what changed, and what remains unresolved.',
          'This is especially important because the site criticizes insulated confidence. A public project that asks readers to revise should make its own revisions visible enough to be trusted.',
        ],
      },
      {
        heading: 'Current Design Decisions',
        body: [
          'The site currently treats the original interactive page as the central focus and builds the surrounding web as an interpretive layer. That keeps the model visible while giving readers multiple entry points: glossary, case studies, skills, applications, papers, and author context.',
          'The custom domain, public GitHub Pages deployment, downloadable teaching materials, search, breadcrumbs, related links, and contact form all support that structure. The design aim is a public research-and-teaching site rather than a private note archive.',
        ],
      },
      {
        heading: 'Open Questions',
        body: [
          'Open questions now begin downstream of the current paper spine. The project still needs better methods for estimating model variables in real cases, distinguishing sincere misperception from avoidant misperception, preventing diagnostic overclassification, and deciding when a new idea deserves its own paper rather than a revision to an existing page.',
          'Other open questions include how numerically precise the model should become, how to validate archetype assignments, how to handle disagreement among competent observers, how to represent confidence bands in public language, and how to teach the framework without encouraging overconfident diagnosis of others.',
          'The next project layer should favor artifacts that make credencing inspectable: audit worksheets, update logs, likelihood-comparison exercises, confidence-band templates, AI-output review protocols, and institutional evidence-trail formats.',
        ],
      },
      {
        heading: 'Revision Norms',
        body: [
          'Revision is treated as evidence of health rather than embarrassment. The site should preserve enough history to show how the framework improves.',
          'A good revision note states what changed, why it changed, which pages were affected, and whether the change alters the model or merely clarifies language. This keeps readers from mistaking polished presentation for finality.',
        ],
      },
    ],
    [
      'Project notes make the framework visibly updateable.',
      'Open questions should remain explicit.',
      'Revision is part of the project ethos.',
    ],
    [
      pagePath('/about', 'Future Directions'),
      pagePath('/library', 'Future Papers'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
];

function aboutPage(
  title: string,
  summary: string,
  sections: ContentSection[],
  keyTakeaways: string[],
  related: string[],
): ContentPage {
  return {
    title,
    path: pagePath('/about', title),
    groupTitle: 'About',
    groupPath: '/about',
    summary,
    sections,
    keyTakeaways,
    related,
  };
}

export const aboutPages: ContentPage[] = [
  aboutPage(
    'Project Overview',
    'Credencing is a public framework for understanding how confidence forms, distorts, and becomes answerable to evidence.',
    [
      {
        heading: 'The Project in One Sentence',
        body: [
          'Credencing is a framework for mapping the distance between evidence, perception, and belief. It asks what the evidence supports, what an agent takes it to support, what confidence the agent finally adopts, and what kind of rational skill is operating.',
        ],
      },
      {
        heading: 'Why It Exists',
        body: [
          'Public argument often uses blunt labels: rational, irrational, biased, skeptical, dogmatic. The project exists because those labels are too coarse. A person can be honestly mistaken, cleverly self-deceived, uncertain for good reasons, or correct for bad reasons.',
          'The two-gap model gives a more careful vocabulary: Objective Evidence to Perceived Evidence (E0-EP) for evidence perception and Perceived Evidence to Assigned Credence (EP-CA) for belief integrity.',
        ],
      },
      {
        heading: 'What the Site Provides',
        body: [
          'The site provides a central interactive model, conceptual explanations, case studies, skills, applications, and a library for future formal work. It is designed as a public web rather than a single essay because the concepts support one another laterally.',
        ],
      },
    ],
    [
      'Credencing maps evidence, perception, belief, and rational skill.',
      'The project distinguishes honest error from motivated misalignment.',
      'The site is a web of concepts around a central interactive model.',
    ],
    [
      pagePath('/start-here', 'What Is Credencing?'),
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/interactive-lab', 'Interactive Model'),
    ],
  ),
  aboutPage(
    'Why the Term "Credencing"',
    'The term credencing emphasizes belief as an active, graded, updateable process.',
    [
      {
        heading: 'Believing as a Process',
        body: [
          'The word belief can sound static: a box checked or unchecked. Credencing emphasizes the ongoing act of assigning, maintaining, revising, and sometimes defending confidence.',
          'The term keeps attention on movement. Confidence changes as evidence changes, as interpretation improves, and as pressure on the agent shifts.',
        ],
      },
      {
        heading: 'Why Not Just "Belief"?',
        body: [
          'Belief language often hides degree. Someone says they believe a claim, but that may mean a slight lean or near certainty. Credencing makes the degree central.',
        ],
      },
      {
        heading: 'Why Not Just "Probability"?',
        body: [
          'Probability is essential, but the project also tracks will, identity, social pressure, and the difference between perceived evidence and assigned confidence. Credencing names the human process in which probability, interpretation, and commitment meet.',
        ],
      },
    ],
    [
      'Credencing names belief as active and graded.',
      'It keeps confidence levels visible.',
      'It includes probability without reducing the whole project to math.',
    ],
    [
      pagePath('/core-ideas', 'Credences'),
      pagePath('/start-here', 'Why Binary Belief Is Too Crude'),
      pagePath('/library', 'Glossary'),
    ],
  ),
  aboutPage(
    'Methodological Commitments',
    'The project is committed to graded belief, evidential accountability, diagnostic charity, explicit uncertainty, and updateability.',
    [
      {
        heading: 'Graded Rather Than Binary',
        body: [
          'The project assumes that many important beliefs are best represented as degrees of confidence. Binary belief has practical uses: courts need verdicts, doctors need treatment decisions, institutions need policies, and ordinary people often need to act before uncertainty disappears. But those decisions should not erase the underlying evidential scale.',
          'Credencing therefore asks readers to keep two questions separate: what confidence does the evidence warrant, and what action threshold is appropriate under the stakes? A person may be 70 percent confident and still act, or 95 percent confident and still seek review when the cost of error is high. The method resists the habit of turning every practical decision into a claim of certainty.',
        ],
      },
      {
        heading: 'Evidence Before Identity',
        body: [
          'The framework gives methodological priority to evidence rather than group identity, personal comfort, institutional loyalty, or rhetorical advantage. It asks what the evidence would support if the claim were detached from the agent’s tribe, reputation, fear, hope, or inherited narrative.',
          'This does not mean pretending that agents have no histories or pressures. Those pressures are part of the diagnostic field. The point is that identity may explain why a credence formed, but it does not by itself justify the credence. The justificatory question remains: what does the evidence actually support?',
        ],
      },
      {
        heading: 'Separate the Evidence from the Agent',
        body: [
          'Credencing distinguishes Objective Evidence (E0), Perceived Evidence (EP), and Assigned Credence (CA) because different failures occur at different locations. A person may lack access to the relevant evidence, misread the evidence they have, or understand the evidence fairly well and then assign a confidence level that serves some other need.',
          'This separation prevents both overclassification and underclassification. It is unhelpful to treat every false belief as a failure of integrity. It is also too lenient to treat every distorted belief as mere ignorance. The model asks where the distortion entered before deciding what kind of responsibility or repair is appropriate.',
        ],
      },
      {
        heading: 'Diagnostic Before Accusatory',
        body: [
          'The model is meant to diagnose where a gap opens before assigning responsibility. An Objective Evidence to Perceived Evidence gap (E0-EP) may reflect limited tools or bad evidence access. A Perceived Evidence to Assigned Credence gap (EP-CA) may reflect identity pressure or motivated override. Responsibility assessment comes after diagnosis, not before.',
          'This is a commitment to charity, but not to softness. Diagnostic charity means giving the most accurate account of the error, not the most flattering one. Sometimes the charitable explanation is that the person lacked statistical tools. Sometimes it is that they had the tools but protected a preferred conclusion. In both cases, the first obligation is precision.',
        ],
      },
      {
        heading: 'Uncertainty Must Be Visible',
        body: [
          'The project treats uncertainty as a first-class feature of rational life. Uncertainty is not always a defect, a dodge, or a lack of courage. Often it is the honest shape of the evidence. A mature epistemic practice makes uncertainty visible instead of hiding it behind confident language.',
          'Visible uncertainty also makes updating easier. If a person says, "I am at 60 percent confidence because of these three considerations," the belief is easier to inspect and revise. If they say only, "I believe it," listeners cannot tell whether the confidence is cautious, strong, brittle, or performative.',
        ],
      },
      {
        heading: 'Bayesian Discipline Without Bayesian Theater',
        body: [
          'The project is Bayesian in spirit: prior probabilities, likelihoods, base rates, and posterior confidence matter. But it does not require every reader to produce formal equations before reasoning responsibly. The method asks for Bayesian discipline even when the numbers remain rough.',
          'That discipline includes asking what was plausible before the new evidence arrived, how expected the evidence would be if the hypothesis were true, how expected it would be under rival explanations, and how far confidence should move. The aim is not mathematical performance. The aim is proportional belief.',
        ],
      },
      {
        heading: 'Fallibilism and Revision',
        body: [
          'The project assumes fallibilism: any particular judgment may be wrong, including judgments made by the site itself. This does not collapse all claims into equal uncertainty. Some claims are much better supported than others. Fallibilism means that confidence remains answerable to evidence, not that confidence must remain permanently weak.',
          'Because of this, Credencing should be revised when its distinctions fail to illuminate cases, when examples are misleading, when terminology obscures more than it clarifies, or when criticism reveals a better model. A theory about updateability should not become immune to update.',
        ],
      },
      {
        heading: 'Public Reasoning and Checkability',
        body: [
          'The site favors claims that can be checked, criticized, compared, and improved. A useful epistemic model should not depend on private authority or opaque intuition alone. It should show its distinctions clearly enough that readers can test them against concrete cases.',
          'This is why the site uses diagrams, scenarios, case studies, glossary entries, discussion prompts, and comparison tools. Different readers test ideas in different ways. Some need definitions, some need examples, some need a model they can manipulate, and some need objections stated plainly enough to answer.',
        ],
      },
      {
        heading: 'Non-Polemical but Not Neutral About Standards',
        body: [
          'Credencing aims to be non-polemical in tone. It should not win by ridicule, tribal signaling, or selective contempt. But non-polemical does not mean standardless. The project is openly committed to evidence-proportioned confidence, calibration, intellectual honesty, and repairable reasoning.',
          'A view can be treated respectfully while still being judged poorly supported. A person can be treated with dignity while their confidence level is challenged. The method separates humane engagement from epistemic permissiveness.',
        ],
      },
      {
        heading: 'Practical Use Over Terminological Display',
        body: [
          'Terms such as Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), Calculation Error (DE), Deep Rationality (SD), and Core Irrationality (IC) are useful only if they help readers think more clearly. The terminology should serve diagnosis, not become a private dialect.',
          'For that reason, the site should continue to define abbreviations, provide plain-language equivalents, and connect formal vocabulary to ordinary cases. A visitor should not need to become an insider before the model becomes useful.',
        ],
      },
      {
        heading: 'Repair Is Part of the Method',
        body: [
          'The project is not satisfied with naming distortions. A good diagnosis should point toward repair. If the main problem is evidence access, the repair may be better sources. If the main problem is base-rate neglect, the repair may be statistical training. If the main problem is motivated override, the repair may require safer social conditions, identity detachment, or courage to accept what one already sees.',
          'This repair orientation keeps the project from becoming merely classificatory. The aim is not to label people as irrational; it is to help individuals and groups locate where confidence stopped tracking evidence and then make better tracking possible.',
        ],
      },
      {
        heading: 'Updateability',
        body: [
          'The framework should remain answerable to criticism. If the site argues for calibrated belief, the site itself should model revision, open questions, and explicit uncertainty.',
          'This commitment applies at several levels: individual pages should be corrected when they overstate, the model should be refined when cases expose weaknesses, and the public site should invite objections that improve the framework. A closed epistemology site would betray its own subject matter.',
        ],
      },
    ],
    [
      'Belief is treated as graded even when action requires a yes-or-no decision.',
      'Evidence, perception, and assigned confidence are kept distinct.',
      'Diagnosis comes before accusation, but charity does not mean avoiding hard conclusions.',
      'Uncertainty should be visible, explicit, and updateable.',
      'Bayesian discipline matters even when the numbers are approximate.',
      'The project should model the updateability it recommends.',
    ],
    [
      pagePath('/library', 'Project Notes'),
      pagePath('/core-ideas', 'Uncertainty'),
      pagePath('/core-ideas', 'Objective Evidence (E0)'),
      pagePath('/core-ideas', 'Perceived Evidence (EP)'),
      pagePath('/core-ideas', 'Assigned Credence (CA)'),
      pagePath('/about', 'Descriptive Rather than Prescriptive Orientation'),
    ],
  ),
  aboutPage(
    'Descriptive Rather than Prescriptive Orientation',
    'The framework first describes belief structure before prescribing what a person should do.',
    [
      {
        heading: 'Description First',
        body: [
          'The model begins by asking what is happening: what evidence exists, what is perceived, what confidence is assigned, and where the gaps open. This descriptive posture prevents premature overclassification.',
        ],
      },
      {
        heading: 'Prescription Still Matters',
        body: [
          'Description is not the end. Once the structure is visible, we can ask what repair is appropriate. Deep failures invite better tools and evidence. Core failures invite courage, emotional regulation, incentive changes, and social conditions that make updating possible.',
        ],
      },
      {
        heading: 'Why the Order Matters',
        body: [
          'If we prescribe too quickly, we may offer the wrong remedy. More facts will not fix every core-rational failure. More courage will not fix every information deficit. The diagnosis determines the repair.',
        ],
      },
    ],
    [
      'The model describes before it prescribes.',
      'Different gaps require different remedies.',
      'Good repair depends on accurate diagnosis.',
    ],
    [
      pagePath('/interactive-lab', 'Interpretation Guide'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
      pagePath('/case-studies', 'Honest Novice Cases'),
    ],
  ),
  aboutPage(
    'How to Use This Site',
    'The site can be read as a guided sequence, used as a reference map, or explored through the interactive lab.',
    [
      {
        heading: 'For First-Time Readers',
        body: [
          'Begin with Start Here, then Core Ideas, then Interactive Lab. The home page now includes three suggested reading paths: a 20-minute path, a one-hour path, and a teacher path. These give different levels of commitment without requiring readers to understand the entire site first.',
        ],
      },
      {
        heading: 'For Practical Use',
        body: [
          'If you are trying to analyze a live belief, go to the Interactive Lab and build a scenario. Then use the Skills section to ask whether the main problem is priors, likelihoods, calibration, motivated override, or action thresholds.',
        ],
      },
      {
        heading: 'For Teaching or Research',
        body: [
          'Use the Library for glossary entries, printable downloads, teaching materials, formal papers, and the public search index. The content is intended to become modular: each concept page should be teachable on its own while linking back into the whole framework.',
        ],
      },
    ],
    [
      'Read Start Here first if you are new.',
      'Use the Lab for live belief analysis.',
      'Use Library for formal and teaching materials.',
    ],
    [
      pagePath('/start-here', 'Where to Go Next'),
      pagePath('/interactive-lab', 'Build Your Own Scenario'),
      pagePath('/library', 'Teaching Materials'),
    ],
  ),
  aboutPage(
    'Author',
    'Phil Stilwell develops Credencing as a public epistemology project centered on graded belief, evidential accountability, and rational self-correction.',
    [
      {
        heading: 'Epistemic Orientation',
        body: [
          'Phil Stilwell’s epistemic stance is best described as Bayesian evidentialism without dogmatism: belief should be treated as a degree of confidence that scales with the degree and quality of evidence. The emphasis is not on claiming certainty, but on making confidence explicit, revisable, and proportionate.',
          'This orientation explains the central vocabulary of Credencing. The site replaces binary belief with graded credence, treats uncertainty as a discipline rather than an embarrassment, and asks whether a person’s assigned confidence actually tracks the evidence they take themselves to possess.',
        ],
      },
      {
        heading: 'Rationality as Belief Regulation',
        body: [
          'For Stilwell, rationality is fundamentally epistemic: a practice of regulating belief so that confidence remains answerable to evidence. Critical thinking is therefore not merely a style of argument or a disposition toward skepticism. It is a trained habit of calibration, updateability, methodological consistency, and resistance to rhetoric that masks evidential weakness.',
          'Stilwell’s public writing describes this outlook as favoring probabilistic reasoning, epistemic humility, and meta-epistemic awareness. Those themes reappear throughout Credencing in the distinction between Deep Rationality, the skill of processing evidence, and Core Rationality, the willingness to assign the confidence one’s own evidence warrants.',
        ],
      },
      {
        heading: 'Education and Teaching Background',
        body: [
          'Stilwell earned a Bachelor of Arts in Philosophy with Highest Distinction and a Master of Arts in Education (TESOL) from the University of Kansas. That combination of philosophy and education helps explain the site’s dual posture: conceptually careful, but designed for public teaching and practical use.',
          'His resume describes more than twenty years of instruction in the Tokyo area, with work spanning academic English, technical writing, and content courses at academic, government, and professional institutions. Courses designed and taught include Critical Thinking, Western Philosophy, Futurology, Macro-Economics, and Technical Writing.',
          'The institutional record includes the University of Tokyo, Nichibei Kaiwa Gakuin, NYU School of Professional Studies, and Gakushuin University, along with editing work for Tokyo University of Science and academic rewriting support for professors and graduate students at universities in Japan.',
          'The same background includes tailored instruction for Japanese government institutions and companies, including work connected to the Japanese Cabinet Office. This public-institution setting is relevant to Credencing because the project repeatedly asks how reasoning standards function not only in private belief, but in organizations, policy environments, and public accountability systems.',
          'The resume’s listed research areas include critical thinking, theology, philosophy of science, the future of technology, epistemology, cognitive science, and educational design. Those areas converge in Credencing’s practical aim: teaching people to regulate confidence under uncertainty without collapsing into either dogmatism or performative skepticism.',
        ],
      },
      {
        heading: 'Faith, Evidence, and Accountability',
        body: [
          'A recurring theme in Stilwell’s work is criticism of faith as an epistemic method when faith means belief beyond, against, or insulated from evidence. The objection is not merely theological. It is methodological: any belief-forming practice that seeks immunity from counter-evidence weakens public standards of inquiry.',
          'Credencing generalizes that concern beyond religion. Whether the subject is theology, politics, institutional judgment, personal decision-making, or AI, the same question recurs: what would rationally move this confidence, and is the believer willing to let it move?',
        ],
      },
      {
        heading: 'Research Profile',
        body: [
          'Stilwell’s Academia.edu profile lists work in epistemology, philosophy of religion, philosophy of science, decision-making, AI, ontology, agency, and public reasoning. The Credencing site now features a focused paper cluster with short internal guides and source links for the papers most directly connected to calibrated confidence, rationality, Bayesian updating, AI delegation, methodological naturalism, reification, and evidential attribution.',
          'Taken together, these papers frame Credencing as a shift from binary belief-possession to graded confidence management. The site’s public language should therefore foreground calibration, updateability, base rates, evidential constraints, and social conditions that make revision easier or harder.',
          'The author page makes that research context visible while keeping the focus on the public project: a usable framework for mapping evidence, perception, confidence, rational skill, and rational integrity.',
        ],
      },
    ],
    [
      'Phil Stilwell frames rational belief as graded confidence proportional to evidence.',
      'Credencing grows out of Bayesian evidentialism, calibration, and epistemic accountability.',
      'His background combines philosophy, TESOL, university teaching, curriculum design, and Japanese government-institution instruction.',
      'The author’s epistemology rejects protected belief systems that evade evidential testing.',
    ],
    [
      pagePath('/about', 'Contact'),
      pagePath('/library', 'Papers'),
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
    ],
  ),
  aboutPage(
    'Contact',
    'The contact page provides a public feedback path for corrections, collaboration, teaching use, and future project inquiries.',
    [
      {
        heading: 'Why Contact Matters',
        body: [
          'A public reasoning project benefits from correction. Readers may notice unclear definitions, missing cases, weak examples, broken links, or places where the framework overreaches.',
        ],
      },
      {
        heading: 'What to Send',
        body: [
          'Useful contact includes corrections, objections, teaching use cases, suggested references, requests for diagrams, and examples that test the framework. The best criticism identifies which page or concept it targets.',
        ],
      },
      {
        heading: 'Public Contact Layer',
        body: [
          'For this GitHub Pages version, the contact page includes a browser-side form that prepares an email without printing the recipient address on the page. The public repository and issue tracker remain useful for code-level corrections, broken-link reports, and project-specific issues.',
        ],
      },
    ],
    [
      'Feedback is part of the project update loop.',
      'Corrections and objections should target specific claims.',
      'The contact form prepares an email while avoiding a visible address on the page.',
    ],
    [
      pagePath('/library', 'Project Notes'),
      pagePath('/about', 'Future Directions'),
      pagePath('/library', 'References'),
    ],
  ),
  aboutPage(
    'Future Directions',
    'Future directions organize the next growth of Credencing into content, tools, research, teaching, and public participation.',
    [
      {
        heading: 'Near-Term Content',
        body: [
          'The near-term content path is now less about adding broad first statements and more about differentiating the next layer. The site should deepen likelihood literacy, base-rate reasoning, belief-integrity language, disagreement norms, AI-output review, and institutional audit practice without rewriting the two-gap framework each time.',
          'The most useful new pages will help readers move between levels: from one term to one scenario, from one scenario to one skill, from one skill to one paper, and from one paper to a worksheet or audit artifact.',
        ],
      },
      {
        heading: 'Tool Expansion',
        body: [
          'The interactive lab can grow into scenario saving, scenario comparison, visual exports, classroom worksheets, a likelihood-literacy module, and a guided diagnostic wizard that asks the user where the gaps appear.',
          'The strongest tool additions would let readers build a case, compare two interpretations, state confidence bands, record update conditions, export a diagram, and then follow links to the relevant glossary terms and repair skills.',
        ],
      },
      {
        heading: 'Teaching and Downloads',
        body: [
          'The teaching layer should grow into a compact curriculum: one-page introduction, model-reading worksheet, calibration exercise, case-study packet, discussion guide, and capstone scenario-builder assignment.',
          'Downloads should remain editable and clearly versioned. A teacher should be able to use a single worksheet without needing to read the entire site, while still having links back into the full framework.',
        ],
      },
      {
        heading: 'Research Expansion',
        body: [
          'The deepest future work is validation plus differentiation: how to estimate variables, how to distinguish sincere from avoidant misperception, how to measure institutional credencing, how to review AI-mediated evidence, and how to apply the framework without overclaiming.',
          'Research expansion should include objection handling and candidate triage. A future paper should survive the independence test: it must add a mechanism, domain, practice, measurement problem, or public language protocol that is not already handled by the current paper spine.',
        ],
      },
      {
        heading: 'Public Participation',
        body: [
          'The public site can invite readers to submit corrections, teaching reports, examples, and objections. Contact should function as an epistemic feedback channel, not only as a social convenience.',
          'Over time, the project could include update notes, release summaries, and public examples of revisions made in response to criticism. That would let the site demonstrate the updateability it recommends.',
        ],
      },
    ],
    [
      'The site can grow in content, tools, teaching materials, and research depth.',
      'Scenario saving, richer comparison, likelihood practice, visual exports, and printable audit formats are natural next features.',
      'Validation, measurement, objection handling, and independence triage remain major open questions.',
    ],
    [
      pagePath('/library', 'Future Papers'),
      pagePath('/library', 'Downloads'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
];

const qaPages: ContentPage[] = [
  {
    title: 'Q&A',
    path: '/q-and-a',
    groupTitle: 'Q&A',
    groupPath: '/q-and-a',
    summary: 'A visitor-facing question-and-answer guide to Credencing, evidence, Bayesian updating, the interactive model, and common misunderstandings.',
    sections: [
      {
        heading: 'What is Credencing in one sentence?',
        body: [
          'Credencing is the practice of matching confidence to evidence, then changing that confidence when the evidence changes.',
          'The site adds a visual model for a simple but important distinction: people can go wrong because they do not perceive the evidence well, or because they perceive it well enough and still assign the wrong level of confidence.',
        ],
        bullets: [
          'Objective Evidence (E0): the support actually available in the world.',
          'Perceived Evidence (EP): the support the agent manages to see or understand.',
          'Assigned Credence (CA): the confidence the agent actually gives the claim.',
          'Deep Rationality (SD): the skill used to read evidence well.',
        ],
      },
      {
        heading: 'Why use the word credence instead of belief?',
        body: [
          'Belief usually sounds yes-or-no. Credence is graded. It lets someone say, "I am 55% confident," "I am 80% confident," or "I should not go higher than a cautious lean yet."',
          'That matters because many arguments become confused when a weak lean, a working assumption, a practical decision threshold, and near-certainty are all called belief. Credencing makes the strength of the attitude visible.',
        ],
      },
      {
        heading: 'Is this just Bayesianism?',
        body: [
          'No. The project is Bayesian-friendly, but it is not only Bayesianism. Bayes theorem explains how confidence should move when new evidence arrives. Credencing also asks whether a person is willing to let their confidence move.',
          'A person can understand priors, likelihoods, and posteriors and still protect a favored conclusion. The site therefore treats Bayesian skill as part of Deep Rationality (SD), while Core Rationality asks whether assigned confidence stays responsive to perceived evidence.',
        ],
      },
      {
        heading: 'What are H and E in Bayes theorem?',
        body: [
          'H is the hypothesis: the possible explanation or claim you are testing. E is the evidence: the clue, observation, measurement, testimony, or result you just encountered.',
          'In ordinary terms, Bayes theorem asks: after seeing this evidence, how much more or less confident should I be in this hypothesis? You compare how expected the evidence would be if the hypothesis were true against how expected it would be overall or under alternatives.',
        ],
      },
      {
        heading: 'How would a non-philosopher use this?',
        body: [
          'Start with a real question: Is this medical test result alarming? Is this news story reliable? Is this product review trustworthy? Is this person likely to be right? Then ask four practical questions.',
        ],
        bullets: [
          'What did I believe before seeing this new evidence?',
          'How likely would this evidence be if the claim were true?',
          'How likely would this evidence be if the claim were false or explained another way?',
          'How much should my confidence move, and what evidence would move it again?',
        ],
      },
      {
        heading: 'What is the difference between being wrong and being irrational?',
        body: [
          'Being wrong can happen honestly. Evidence can be incomplete, misleading, difficult, or unavailable. A person can make a reasonable judgment and still land on a false conclusion.',
          'Irrationality becomes more serious when the person has enough access to the direction of the evidence but assigns confidence in a way that protects identity, comfort, group loyalty, fear, status, or a prior commitment.',
        ],
      },
      {
        heading: 'What is Deep Rationality?',
        body: [
          'Deep Rationality (SD) is the evidence-reading skill layer. It includes statistical reasoning, base-rate awareness, causal reasoning, measurement discipline, probability, logic, and the ability to notice alternative explanations.',
          'Someone with low Deep Rationality may misread the evidence without being dishonest. They may need better tools, better examples, better data, or more practice.',
        ],
      },
      {
        heading: 'What is Core Rationality?',
        body: [
          'Core Rationality is belief integrity. It asks whether assigned credence follows perceived evidence. If someone sees the evidence as weak but assigns extreme confidence anyway, the problem is not merely technical.',
          'Core Rationality is why the model can distinguish an honest novice from a biased expert. The honest novice may lack tools but stay aligned with what they see. The biased expert may have tools but use them to defend a conclusion that their own evidence does not support.',
        ],
      },
      {
        heading: 'Is Core Irrationality an accusation?',
        body: [
          'Not automatically. It is first a structural diagnosis: a gap between Perceived Evidence (EP) and Assigned Credence (CA). Responsibility assessment requires more information.',
          'Before blaming someone, ask whether they had access to the evidence, enough time, enough skill, emotional safety, freedom from coercion, and a realistic chance to repair the gap. The model should slow accusation, not make accusation easier.',
        ],
      },
      {
        heading: 'What does warranted uncertainty mean?',
        body: [
          'Warranted uncertainty is uncertainty that the evidence actually calls for. It is not weakness. It is often intellectual honesty.',
          'If the evidence is thin, noisy, early, contested, or difficult to measure, then modest confidence may be the most rational position. The failure is not being uncertain. The failure is pretending the evidence supports more certainty than it does.',
        ],
      },
      {
        heading: 'Why does the site use percentages?',
        body: [
          'Percentages make hidden differences visible. A person who says "I believe it" might mean 51%, 70%, 90%, or 99%. Those states behave very differently in argument and action.',
          'The site does not claim that every human attitude can be measured exactly. The numbers are often rough teaching tools. Their value is that they force readers to ask whether confidence is too high, too low, or properly scaled.',
        ],
      },
      {
        heading: 'What if assigning numbers feels artificial?',
        body: [
          'That is a reasonable worry. The answer is to treat numbers as disciplined approximations, not as magic precision. You can use ranges: low confidence, moderate confidence, high confidence, or "somewhere between 60% and 75%."',
          'The important move is not the exact number. The important move is refusing to let every attitude collapse into "believe" or "do not believe."',
        ],
      },
      {
        heading: 'How should I read the interactive model?',
        body: [
          'Read the bottom semicircle as the evidence or confidence gradient from 0% on the left to 100% on the right. The agent applies a credence somewhere along that gradient.',
          'Read the upward depth as Deep Rationality (SD). Higher depth means stronger evidence-reading skill. This can feel counterintuitive because depth is shown upward, so the percentage markers are there to keep the visual direction clear.',
        ],
      },
      {
        heading: 'What does it mean when Objective Evidence and Perceived Evidence differ?',
        body: [
          'That gap means the agent is not seeing the evidence accurately. The cause might be missing information, poor statistics, bad framing, propaganda, weak methods, misleading testimony, limited education, or ordinary human error.',
          'This is not automatically a character failure. It may be a skill, access, or environment problem. Repair often means better data, better tools, better instruction, or better feedback.',
        ],
      },
      {
        heading: 'What does it mean when Perceived Evidence and Assigned Credence differ?',
        body: [
          'That gap means the agent is assigning confidence that does not match what they seem to perceive. This is where motivated reasoning, fear, identity, loyalty, wishful thinking, pride, or social pressure may enter.',
          'The key question is: what makes this person unable or unwilling to let perceived evidence govern confidence?',
        ],
      },
      {
        heading: 'Can experts be irrational?',
        body: [
          'Yes. Expertise increases the ability to process evidence, but it does not guarantee willingness to accept what the processed evidence implies.',
          'A biased expert may be especially dangerous because high skill can become a better defense system for a preferred conclusion. The model is built to make that distinction visible.',
        ],
      },
      {
        heading: 'Can ordinary people be rational without technical training?',
        body: [
          'Yes. A person can have limited formal tools and still show good Core Rationality by keeping confidence modest, listening to better evidence, and updating honestly.',
          'Technical training helps, especially in hard domains, but humility and updateability matter. The honest novice is one of the important archetypes in the model.',
        ],
      },
      {
        heading: 'How does this apply to science?',
        body: [
          'Science is a disciplined public method for making confidence answerable to evidence. It uses measurement, replication, peer criticism, prediction, and error correction to prevent private certainty from drifting too far from reality.',
          'Credencing interprets science as a set of tools for improving Deep Rationality and for building institutions that make updates easier to notice and harder to suppress.',
        ],
      },
      {
        heading: 'How does this apply to medicine?',
        body: [
          'Medicine often requires reasoning under uncertainty. Test results, symptoms, base rates, false positives, false negatives, treatment risks, and patient differences all affect what confidence is warranted.',
          'Credencing helps readers avoid common mistakes such as treating a positive test as certainty, ignoring base rates, or letting fear inflate the probability of a frightening diagnosis.',
        ],
      },
      {
        heading: 'How does this apply to politics and public debate?',
        body: [
          'Politics often rewards confidence, loyalty, speed, and identity protection. Those incentives can pull assigned credence away from perceived evidence.',
          'A credencing approach asks people to slow down: What is the claim? What is the evidence? What would change my mind? Am I applying the same standard to my side and the other side?',
        ],
      },
      {
        heading: 'How does this apply to religion or faith?',
        body: [
          'Credencing criticizes faith when faith means confidence insulated from evidence. The issue is not only religious. Any ideology, identity, institution, or personal hope can become faith-like when it protects a conclusion from ordinary updating.',
          'The site asks whether confidence is evidence-proportioned. If a belief is held beyond the evidence, against the evidence, or immune to future evidence, the model treats that as a problem of calibration.',
        ],
      },
      {
        heading: 'How does this apply to AI?',
        body: [
          'AI can help people gather information, compare alternatives, and explain concepts. It can also make people overconfident by giving fluent answers that feel more reliable than they are.',
          'Credencing asks users to keep ownership of their confidence. Do not ask only, "What did the model say?" Ask, "What evidence supports this, how could it be wrong, and how much confidence should I assign?"',
        ],
      },
      {
        heading: 'What should groups discuss first?',
        body: [
          'A good first group session should avoid abstract combat and begin with ordinary examples: weather forecasts, medical tests, news headlines, product reviews, rumors, or predictions about a sports game.',
          'Once the group can talk comfortably about degrees of confidence, move to harder topics. The goal is to build the practice before applying it to identity-loaded issues.',
        ],
      },
      {
        heading: 'How can I disagree with someone using this framework?',
        body: [
          'Do not begin by calling the person irrational. Begin by locating the disagreement. Are you disagreeing about the evidence itself, how to interpret it, the prior probability, the likelihood, or the level of confidence that follows?',
          'The most useful question is often: "What evidence would move you, and how much would it move you?" If no possible evidence would matter, the conversation has revealed something important.',
        ],
      },
      {
        heading: 'What are common mistakes visitors should avoid?',
        body: [
          'The first mistake is fake precision: acting as if rough teaching numbers are exact measurements. The second is overdiagnosis: treating every disagreement as irrationality. The third is using the model as a weapon against opponents rather than as a mirror for one’s own confidence.',
          'The model works best when it increases humility. It should help people say, "My confidence is too high," "I need better evidence," or "I am protecting this conclusion more than I thought."',
        ],
        bullets: [
          'Do not confuse uncertainty with weakness.',
          'Do not confuse confidence with evidence.',
          'Do not confuse fluency with reliability.',
          'Do not confuse disagreement with bad faith.',
        ],
      },
      {
        heading: 'What would count as progress?',
        body: [
          'Progress is better calibration. Confidence becomes more proportionate to evidence. Updates become easier to state. People become clearer about what they know, what they merely suspect, and what would change their minds.',
          'At the institutional level, progress means systems that notice reality earlier, protect dissent, correct public claims, reward accurate uncertainty, and keep records of predictions and updates.',
        ],
      },
      {
        heading: 'Where should I go next?',
        body: [
          'New visitors should read Start Here, then open the Interactive Lab, then read the Bayes theorem overview. Readers who want vocabulary should use the Glossary and Tag Index. Readers who want practice should use the Skills and Discussion Groups sections.',
          'The site is meant to be navigated as a web. If one term feels unclear, follow the related links rather than forcing yourself through a single linear path.',
        ],
      },
    ],
    keyTakeaways: [
      'Credencing means matching confidence to evidence and updating when evidence changes.',
      'The framework separates evidence-reading skill from belief integrity.',
      'Bayesian tools help with updating, but they do not guarantee willingness to update.',
      'Numbers are teaching tools for clarifying confidence, not claims of perfect precision.',
      'The model should increase humility, not become a weapon for overdiagnosing others.',
    ],
    related: [
      pagePath('/start-here', 'What Is Credencing?'),
      pagePath('/interactive-lab', 'Interactive Model'),
      pagePath('/bayes-theorem', 'Bayes Theorem Overview'),
      pagePath('/library', 'Glossary'),
      pagePath('/library', 'FAQ'),
    ],
  },
];

export const contentPages = [...startHerePages, ...coreIdeasPages, ...bayesPages, ...interactiveLabPages, ...caseStudyPages, ...skillPages, ...discussionPages, ...applicationPages, ...libraryPages, ...aboutPages, ...qaPages];
