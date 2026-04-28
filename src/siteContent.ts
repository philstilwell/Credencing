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
      'Epistemic Akrasia',
      'Core vs Deep Rationality',
      'Epistemic Archetypes',
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
      'A Formal Framework for Core and Deep Rationality',
      'Future Papers',
      'Essays',
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
          'The Credencing model separates three things that are often collapsed together. Objective Evidence, E0, is the support that exists in the world. Perceived Evidence, EP, is what the agent takes the evidence to show after perception, interpretation, memory, social pressure, and reasoning have done their work. Assigned Credence, CA, is the final degree of belief the agent actually adopts.',
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
      'The model separates misperceiving evidence from refusing one own perception of evidence.',
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
        heading: 'Why This Distinction Matters Morally',
        body: [
          'Without this distinction, we misjudge people. We treat sincere error as dishonesty, or we excuse motivated belief because the conclusion happens to be popular or true. The model encourages a more careful posture: ask what evidence was available, how the person perceived it, and whether their final confidence honored that perception.',
          'This is especially important in public debate. A community that cannot distinguish error from bad faith will punish learning and reward performance.',
        ],
      },
      {
        heading: 'How the Interactive Model Shows It',
        body: [
          'In the lab, a gap between E0 and EP represents error in perception or processing. A gap between EP and CA represents core irrationality: the doxastic gap. The first may be innocent, negligent, or unavoidable depending on context. The second points more directly to integrity, pressure, fear, or identity.',
        ],
      },
    ],
    keyTakeaways: [
      'Being false is not the same as being irrational.',
      'Epistemic inconsistency is a mismatch between perceived evidence and assigned credence.',
      'A person can be responsibly mistaken or irresponsibly correct.',
      'The E0-EP gap and EP-CA gap diagnose different problems.',
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

export const contentPages = [...startHerePages];
