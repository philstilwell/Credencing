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
          'Objective Evidence, E0, represents the evidential situation as it stands apart from the agent. Perceived Evidence, EP, represents what the agent takes that evidence to show. The gap between them is a measure of evidential misperception or processing error.',
          'The model therefore does not assume that evidence reaches the mind cleanly. It passes through attention, incentives, framing, memory, statistical skill, and social context.',
        ],
      },
    ],
    [
      'Evidence is rational support, not emotional force.',
      'Evidence has both direction and weight.',
      'The E0-EP gap captures errors in perceiving or processing evidence.',
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
          'The posterior is the credence warranted by the update. Assigned Credence, CA, is what the agent actually adopts. In an ideal case, they match. When they diverge, the model asks whether some core-rational force is overriding the update.',
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
          'In the interactive model, omega represents warranted uncertainty. As Deep Rationality increases, the warranted spread narrows: better tools reduce fog. As Deep Rationality decreases, the range widens: the agent should be less precise because their optics are less reliable.',
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
      'Selective uncertainty can become motivated evasion.',
    ],
    [
      pagePath('/core-ideas', 'Deep Rationality (SD)'),
      pagePath('/core-ideas', 'Core Irrationality (IC)'),
      pagePath('/interactive-lab', 'Visual Legend'),
    ],
  ),
  corePage(
    'Objective Evidence (E0)',
    'Objective Evidence is the evidential support available in the world before an agent interprets it.',
    [
      {
        heading: 'The Target',
        body: [
          'Objective Evidence, E0, is the model target: the support that exists independent of a particular agent perception. It is not omniscience, and it is not always directly accessible. It represents the evidential reality the agent is trying to track.',
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
          'Perceived Evidence, EP, is the agent internal read on the evidence. It is not merely raw sensation. It includes attention, memory, testimony, statistical interpretation, social framing, and background assumptions.',
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
          'Assigned Credence, CA, is where the agent finally anchors belief. It is the confidence they live with, argue from, and act upon. In a well-aligned state, CA tracks EP closely.',
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
      'A gap between EP and CA reveals core-rational pressure.',
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
          'Deep Rationality, SD, refers to the agent ability to process evidence well. It includes statistical literacy, causal reasoning, Bayesian updating, comparison of hypotheses, base-rate sensitivity, and awareness of bias-producing structures.',
        ],
      },
      {
        heading: 'What SD Improves',
        body: [
          'Higher SD narrows the gap between E0 and EP. Better tools do not guarantee truth, but they improve the odds that the agent perceived evidence resembles the evidential situation.',
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
      'It improves the E0-EP relationship.',
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
      'It concerns the EP-CA relationship.',
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
        heading: 'The E0-EP Gap',
        body: [
          'Calculation Error, DE, measures the distance between E0 and EP. It is the gap between the evidential situation and the agent internal representation of that situation.',
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
          'Repairing DE usually means improving Deep Rationality or improving access to evidence: better tools, better data, better comparison classes, better feedback, and less distorted information environments.',
        ],
      },
    ],
    [
      'DE is the E0-EP gap.',
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
        heading: 'The EP-CA Gap',
        body: [
          'Core Irrationality, IC, measures the gap between what the agent takes the evidence to show and what they actually believe. It is the doxastic gap: a failure of alignment between perception and commitment.',
        ],
      },
      {
        heading: 'Why It Matters',
        body: [
          'IC is especially important because it marks a different kind of failure from ignorance. A high IC agent is not merely missing information; they are assigning confidence against their own evidential perception.',
        ],
      },
      {
        heading: 'Repair',
        body: [
          'Repairing IC requires more than information. It may require lowering identity threat, improving emotional regulation, making revision socially survivable, and practicing honesty about uncertainty.',
        ],
      },
    ],
    [
      'IC is the EP-CA gap.',
      'It diagnoses motivated or integrity-related distortion.',
      'It often requires courage and social repair, not only more facts.',
    ],
    [
      pagePath('/core-ideas', 'Core Rationality'),
      pagePath('/core-ideas', 'Epistemic Akrasia'),
      pagePath('/case-studies', 'Motivated Reasoning'),
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
        heading: 'Relation to IC',
        body: [
          'Epistemic akrasia is one way Core Irrationality appears from the inside. IC is the measurable gap; akrasia is the lived experience of not following one own evidential sense.',
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
          'Objective Evidence, E0, sets the evidential target. Perceived Evidence, EP, sets what the agent takes that evidence to show. Assigned Credence, CA, sets the confidence the agent adopts. Deep Rationality, SD, sets the quality of the agent inferential tools.',
          'The controls are intentionally simple. Their simplicity makes the relationships visible. The goal is not to simulate every psychological mechanism, but to separate the major gaps that normally get blurred together.',
        ],
      },
      {
        heading: 'The Two Gaps',
        body: [
          'The E0-EP gap shows error in perception or inference. The EP-CA gap shows doxastic misalignment: a failure to assign confidence according to what the agent takes the evidence to show.',
          'Most of the project grows from these two gaps. If you can identify which gap is doing the work, you can ask better questions about responsibility, repair, and interpretation.',
        ],
      },
    ],
    [
      'The model visualizes evidence, perception, belief, and rational skill.',
      'E0-EP diagnoses perception or inference failure.',
      'EP-CA diagnoses core-rational misalignment.',
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
          'Begin by locating Objective Evidence, E0. This is the model estimate of where the evidence really points. In real life, E0 is often uncertain, but in the lab it gives the visual system a target.',
          'Then compare E0 to Perceived Evidence, EP. If they are close, the agent is reading the evidential situation well. If they are far apart, something has gone wrong in access, attention, interpretation, method, or environment.',
        ],
      },
      {
        heading: 'Then Read the Commitment',
        body: [
          'After EP, look at Assigned Credence, CA. This is where the agent finally places belief. When CA tracks EP, the agent is internally consistent even if they are mistaken about the world. When CA diverges from EP, the agent is believing against their own evidential perception.',
        ],
      },
      {
        heading: 'Use Deep Rationality as Resolution',
        body: [
          'Deep Rationality, SD, functions like resolution. High SD means the agent has better tools for narrowing the distance between the world and their perception. Low SD means more fog and wider warranted uncertainty.',
          'Do not read low SD as moral failure by itself. A novice may lack tools and still be honest. The model becomes morally interesting when you compare SD with the EP-CA gap.',
        ],
      },
    ],
    [
      'Read E0 first, then EP, then CA.',
      'E0-EP is the perception/inference gap.',
      'EP-CA is the belief-integrity gap.',
      'SD changes how much uncertainty is warranted.',
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
      'Markers show E0, EP, CA, and SD.',
      'Green uncertainty can be warranted.',
      'Red divergence shows the EP-CA gap.',
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
      'They teach relationships among E0, EP, CA, and SD.',
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
          'In the model, E0, EP, and CA sit close together, and SD is high. The uncertainty region is relatively narrow because the agent tools are strong. There is little or no red core-irrationality region.',
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
      'E0, EP, and CA remain closely aligned.',
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
          'In the model, EP may diverge from E0 because the agent perception is imperfect. But CA remains close to EP. The agent believes what they honestly take the evidence to show.',
        ],
      },
    ],
    [
      'The honest novice may be wrong without being dishonest.',
      'The main gap is E0-EP, not EP-CA.',
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
          'In the model, SD may be high and EP may be reasonably close to E0. The problem appears when CA pulls away from EP. The red region is not caused by ignorance; it is caused by motivated assignment of confidence.',
        ],
      },
    ],
    [
      'The biased expert has tools but misuses them defensively.',
      'The main gap is EP-CA.',
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
      'It involves severe EP-CA detachment.',
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
    'Building your own scenario means assigning E0, EP, CA, and SD for a real or imagined belief state.',
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
          'If E0 and EP diverge, investigate information quality and reasoning skill. If EP and CA diverge, investigate motivation, fear, identity, incentives, or social pressure. If both diverge, the scenario likely combines ignorance with motivated belief.',
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
          'Compare where the gaps occur. Is one case mostly E0-EP and the other mostly EP-CA? Does one agent have lower SD but better internal alignment? Does one agent become more accurate when given better evidence, while the other resists?',
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
          'When you see an E0-EP gap, ask about evidence access, measurement quality, statistical tools, and framing. When you see an EP-CA gap, ask about emotional threat, identity protection, incentives, public commitment, and social cost of revision.',
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
      'E0-EP gaps suggest tool and evidence repairs.',
      'EP-CA gaps suggest motivational and integrity repairs.',
    ],
    [
      pagePath('/core-ideas', 'Core vs Deep Rationality'),
      pagePath('/skills', 'How to Separate Core from Deep Failure'),
      pagePath('/applications', 'Institutional Diagnostics'),
    ],
  ),
];

export const contentPages = [...startHerePages, ...coreIdeasPages, ...interactiveLabPages];
