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
          'Warranted uncertainty also creates diagnostic slack. If Assigned Credence (CA) differs modestly from Perceived Evidence (EP), but the case is noisy and the agent has limited skill, the model should not immediately treat the gap as blameworthy.',
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
          'Perceived Evidence (EP) is the agent internal read on the evidence. It is not merely raw sensation. It includes attention, memory, testimony, statistical interpretation, social framing, and background assumptions.',
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
          'A distorted EP may or may not be blameworthy. The agent may have had no access to better information, or they may have avoided it. This is why the model separates diagnosis from moral accusation.',
        ],
      },
    ],
    [
      'EP is the agent internal reading of the evidence.',
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
          'The model treats CA as ethically important because it reveals whether the agent honors their own perception. A person cannot always control E0, and may only partly control EP, but the adoption of credence is where epistemic integrity becomes visible.',
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
          'Deep Rationality (SD) refers to the agent ability to process evidence well. It includes statistical literacy, causal reasoning, Bayesian updating, comparison of hypotheses, base-rate sensitivity, and awareness of bias-producing structures.',
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
          'Calculation Error (DE) measures the distance between Objective Evidence (E0) and Perceived Evidence (EP). It is the gap between the evidential situation and the agent internal representation of that situation.',
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
          'The improved interactive model therefore tracks Excess Core Irrationality: the portion of the EP-CA gap that remains after allowing for warranted uncertainty. This keeps the model from treating every small deviation, noisy estimate, or high-uncertainty case as a moral failure.',
        ],
      },
      {
        heading: 'The Responsibility Filter',
        body: [
          'Before moving from diagnosis to blame, ask four questions. Did the agent have access to better evidence? Did they have the skill and time to process it? Were there emotional, institutional, or social pressures distorting the update? Did they resist repair once the problem became visible?',
          'This filter preserves the project central distinction. It still holds people accountable for motivated override, but it avoids treating ignorance, trauma, manipulation, fatigue, or poor evidence access as if they were all the same thing.',
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
    'Epistemic akrasia is believing against one own perceived evidence.',
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
          'Epistemic akrasia is one way Core Irrationality appears from the inside. Core Irrationality (IC) is the measurable gap; akrasia is the lived experience of not following one own evidential sense.',
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
        ],
      },
      {
        heading: 'Use Deep Rationality as Resolution',
        body: [
          'Deep Rationality (SD) functions like resolution. High SD means the agent has better tools for narrowing the distance between the world and their perception. Low SD means more fog and wider warranted uncertainty.',
          'Do not read low Deep Rationality (SD) as moral failure by itself. A novice may lack tools and still be honest. The model becomes morally interesting when you compare Deep Rationality (SD) with the Perceived Evidence to Assigned Credence gap (EP-CA).',
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
          'When these elements cluster together, the state is aligned. When they separate, the model asks which kind of separation has occurred.',
        ],
      },
      {
        heading: 'Skill and Uncertainty',
        body: [
          'The skill-depth marker reflects Deep Rationality. As skill rises, warranted uncertainty narrows. As skill falls, the agent is entitled to a wider range of uncertainty because their tools are less precise.',
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
    'Scenario comparison shows how similar surface beliefs can arise from different epistemic structures.',
    [
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
          'This is common when outcomes are frightening, vivid, morally charged, or personally salient. The imagination supplies detail; credence follows the detail rather than the evidence.',
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
          'Policy rarely enjoys certainty. Leaders must act with incomplete evidence, contested models, moral tradeoffs, and delayed feedback. Credencing helps separate factual confidence from value judgments and action thresholds.',
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
      'Separate empirical confidence from moral preference.',
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
          'A second nearby strand is the “credence first” argument: the claim that rational evaluation should begin with graded confidence rather than binary belief. That strand links the project to Bayesian epistemology, philosophy of religion, calibration, and the practical ethics of changing one’s mind.',
          'The broader research cluster now featured here includes “Core Rationality,” “Credence First,” “The Gravity of Grammar,” “Beyond the Binary,” “The Miracle Audit,” “The Architecture of Explanatory Satisfaction and the Affective Veto,” “Foundational Choices for the Autodidact,” and “The Asymptote of the Natural.” Together, these papers treat Credencing not as one isolated model but as a program for replacing all-or-nothing belief language with calibrated, updateable confidence.',
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
          'The papers section is also where the strongest objections belong. Important objections include whether E0 can be estimated without pretending to have God’s-eye access, whether EP can be separated from CA in messy human cases, whether “core irrationality” moralizes too quickly, and whether Bayesian language can be made practical without false precision.',
          'The newer alignment with the paper cluster adds further objections worth developing: whether scalar language can remain usable in ordinary conversation, whether AI tools can improve calibration without encouraging dependence, whether Bayesian audit rubrics smuggle in contested priors, and whether methodological naturalism is best defended as a risk-management strategy rather than as an a priori rule.',
          'Each objection should be treated as a stress test rather than a threat. If an objection forces a cleaner definition, a humbler claim, or a better diagnostic distinction, it improves the project.',
        ],
      },
      {
        heading: 'How to Read',
        body: [
          'Read the public Start Here and Core Ideas sections first. Then use the papers to inspect the formal structure, not as a replacement for the interactive model but as its theoretical support.',
          'A good reading order is: “Core Rationality,” the central framework paper, “Credence First,” the binary-language papers, the Bayes theorem section, the interactive archetypes, and then the applied papers on miracle auditing, methodological naturalism, operator learning, and affective vetoes. That order moves from definition to calibration to diagnosis to application.',
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
  libraryPage(
    'Future Papers',
    'Future papers extend the framework into measurement, institutions, AI, disagreement, and pedagogy.',
    [
      {
        heading: 'Measurement and Validation',
        body: [
          'The first research need is measurement: how can Objective Evidence (E0), Perceived Evidence (EP), Assigned Credence (CA), and Deep Rationality (SD) be estimated in real contexts without smuggling in the evaluator’s own bias? A measurement paper would distinguish rough pedagogical scoring from serious empirical validation.',
          'The key question is diagnostic: what would count as evidence of a Core Rationality failure rather than merely a difficult evidential environment, incomplete information, bad luck, or honest disagreement?',
        ],
      },
      {
        heading: 'Institutional Extensions',
        body: [
          'Another direction is institutional epistemology. Organizations have evidence pipelines, public credences, incentives, and update failures. The two-gap model can be extended from individual agents to committees, agencies, labs, courts, and media institutions.',
          'A paper in this line would ask how institutions notice evidence, convert it into internal perception, assign public confidence, and revise policy when the public confidence no longer matches the internal evidence.',
        ],
      },
      {
        heading: 'AI and Collective Reasoning',
        body: [
          'AI systems make credencing both more urgent and more complex. Future work should examine model confidence, human overtrust, benchmark interpretation, institutional deployment thresholds, and the social systems that decide when AI outputs become believed.',
          'The central risk is not only that AI systems make mistakes. It is that people, companies, classrooms, and agencies may assign confidence to AI outputs through authority, convenience, speed, or social pressure rather than calibrated evidence.',
        ],
      },
      {
        heading: 'Disagreement and Pedagogy',
        body: [
          'A disagreement paper would compare two agents with different Objective Evidence (E0) access, Perceived Evidence (EP) interpretation, Assigned Credence (CA) assignment, and update histories. This would make the model useful for public debate without reducing every conflict to bad faith.',
          'A pedagogy paper would translate the framework into classroom practice: calibration exercises, evidence-mapping assignments, peer disagreement protocols, and reflective prompts that help students separate “I disagree” from “I have located a specific gap.”',
        ],
      },
    ],
    [
      'Future work improves measurement, validation, and objection handling.',
      'Institutions can be analyzed with the same two-gap model.',
      'AI, disagreement, and pedagogy create new credencing problems at scale.',
    ],
    [
      pagePath('/applications', 'AI Alignment'),
      pagePath('/applications', 'Institutional Diagnostics'),
      pagePath('/library', 'Project Notes'),
    ],
  ),
  libraryPage(
    'Essays',
    'Essays translate the framework into accessible reflections, arguments, examples, and public-facing explanations.',
    [
      {
        heading: 'Role of Essays',
        body: [
          'Essays are where the project can breathe. They do not need the compression of glossary entries or the apparatus of formal papers. They can explore examples, objections, analogies, and lived cases of credencing failure and repair.',
          'An essay can begin with an ordinary scene: a person defending a political claim, a committee refusing to update, a teacher grading confidence, a friend mistaking loyalty for evidence, or a public expert sliding from uncertainty into performance. The essay then traces which variable moved, which variable refused to move, and why that matters.',
        ],
      },
      {
        heading: 'Essay Series',
        body: [
          'Several essay series fit the site. “The Intellect as Bodyguard” would examine intelligence used to protect identity rather than track evidence. “The Ethics of Changing One’s Mind” would treat updating as a public virtue, not a private embarrassment.',
          '“Why Certainty Feels Good” would connect confidence to anxiety, status, group belonging, and decision pressure. “Institutions That Punish Updates” would examine workplaces, parties, churches, agencies, and schools that make revision costly even when evidence changes.',
          '“Honest Uncertainty in Public” would ask why calibrated doubt is so hard to perform in environments that reward slogans, certainty, and team loyalty.',
        ],
      },
      {
        heading: 'Essay Method',
        body: [
          'Each essay should make one diagnostic move clear. It should name the relevant evidence, describe how the evidence is perceived, identify the assigned confidence, and ask whether any gap is best explained by ignorance, confusion, pressure, motivated reasoning, or deliberate evasion.',
          'The strongest essays will avoid easy superiority. Credencing is most useful when it lets readers see their own failure modes, not merely diagnose opponents.',
        ],
      },
      {
        heading: 'Connection to the Site',
        body: [
          'Each essay links back to the conceptual pages it uses. The site works best when essays are not isolated posts but entrances into the broader web: glossary terms, archetypes, case studies, skills, and applications.',
        ],
      },
    ],
    [
      'Essays make the framework vivid and public-facing.',
      'They should explore examples and objections.',
      'Every essay should link back into the conceptual web.',
    ],
    [
      pagePath('/library', 'Glossary'),
      pagePath('/case-studies', 'Motivated Reasoning'),
      pagePath('/about', 'Project Overview'),
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
          'Diagnostic Safeguard: a rule that prevents the model from treating every gap as blameworthy. Responsibility Filter: the check for evidence access, skill, pressure, and willingness to repair before moving from diagnosis to moral judgment. Epistemic Akrasia: believing against one’s own judgment about what the evidence supports.',
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
        heading: 'Is Core Irrationality a Moral Accusation?',
        body: [
          'Not automatically. It is a structural diagnosis of a Perceived Evidence to Assigned Credence gap (EP-CA). Moral assessment depends on context, access, incentives, trauma, social pressure, and whether the agent is willing to repair the gap.',
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
      'Core Irrationality is diagnostic before it is moralized.',
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
          'Open questions include how to estimate model variables in real cases, how to distinguish sincere misperception from avoidant misperception, how to avoid moralizing too quickly, and how to adapt the model for groups and institutions.',
          'Other open questions include how numerically precise the model should become, how to validate archetype assignments, how to handle disagreement among competent observers, and how to teach the framework without encouraging overconfident diagnosis of others.',
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
    'The project is committed to graded belief, diagnostic charity, explicit uncertainty, and updateability.',
    [
      {
        heading: 'Graded Rather Than Binary',
        body: [
          'The project assumes that many important beliefs are best represented as degrees of confidence. Binary belief has practical uses, but it should not erase the underlying evidential scale.',
        ],
      },
      {
        heading: 'Diagnostic Before Accusatory',
        body: [
          'The model is meant to diagnose where a gap opens before assigning blame. An Objective Evidence to Perceived Evidence gap (E0-EP) may reflect limited tools or bad evidence access. A Perceived Evidence to Assigned Credence gap (EP-CA) may reflect identity pressure or motivated override. Moral evaluation comes after diagnosis, not before.',
        ],
      },
      {
        heading: 'Updateability',
        body: [
          'The framework should remain answerable to criticism. If the site argues for calibrated belief, the site itself should model revision, open questions, and explicit uncertainty.',
        ],
      },
    ],
    [
      'Belief is treated as graded.',
      'Diagnosis comes before accusation.',
      'The project should model the updateability it recommends.',
    ],
    [
      pagePath('/library', 'Project Notes'),
      pagePath('/core-ideas', 'Uncertainty'),
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
          'The model begins by asking what is happening: what evidence exists, what is perceived, what confidence is assigned, and where the gaps open. This descriptive posture prevents premature moralizing.',
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
          'Stilwell’s Academia.edu profile lists work in epistemology, philosophy of religion, philosophy of science, decision-making, and related areas. Papers especially relevant to this site include “Core Rationality,” “A Formal Framework for Core and Deep Rationality,” “Credence First: Against Plantinga’s Warrant as an Epistemic Upgrade,” “The Gravity of Grammar,” “Beyond the Binary,” “The Miracle Audit,” “The Architecture of Explanatory Satisfaction and the Affective Veto,” “Foundational Choices for the Autodidact,” and “The Asymptote of the Natural.”',
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
          'The near-term content path is now clear: deepen the paper library, add essay sequences, expand the visual archive, refine glossary definitions, and make the case studies more concrete without turning them into partisan scorecards.',
          'The most useful new pages will be those that help readers move between levels: from one term to one scenario, from one scenario to one skill, from one skill to one institutional application.',
        ],
      },
      {
        heading: 'Tool Expansion',
        body: [
          'The interactive lab can grow into scenario saving, scenario comparison, visual exports, classroom worksheets, and a guided diagnostic wizard that asks the user where the gaps appear.',
          'The strongest tool additions would let readers build a case, compare two interpretations, export a diagram, and then follow links to the relevant glossary terms and repair skills.',
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
          'The deepest future work is validation: how to estimate variables, how to distinguish sincere from avoidant misperception, how to measure institutional credencing, and how to apply the framework without overclaiming.',
          'Research expansion should include objection handling. The model becomes stronger when it states where its variables are rough, where diagnostic confidence should remain low, and where ordinary disagreement should not be treated as irrationality.',
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
      'Scenario saving, richer comparison, visual exports, and printable formats are natural next features.',
      'Validation, measurement, and objection handling remain major open questions.',
    ],
    [
      pagePath('/library', 'Future Papers'),
      pagePath('/library', 'Downloads'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
];

export const contentPages = [...startHerePages, ...coreIdeasPages, ...bayesPages, ...interactiveLabPages, ...caseStudyPages, ...skillPages, ...discussionPages, ...applicationPages, ...libraryPages, ...aboutPages];
