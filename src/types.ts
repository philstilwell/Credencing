/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EpistemicData {
  objectiveEvidence: number; // Objective Evidence (E0) [0, 1]
  perceivedEvidence: number; // Perceived Evidence (EP) [0, 1]
  assignedCredence: number;  // Assigned Credence (CA) [0, 1]
  deepRationality: number;   // Deep Rationality (SD) [0, 1]
}

export interface EpistemicMetrics {
  calculationError: number; // Calculation Error (DE) = |Perceived Evidence (EP) - Objective Evidence (E0)|
  coreIrrationality: number; // Core Irrationality (IC) = |Assigned Credence (CA) - Perceived Evidence (EP)|
  warrantedUncertaintyWidth: number; // ω ∝ f(1 - SD)
}

export type EpistemicArchetype = 'Ideal Agent' | 'Biased Expert' | 'Honest Novice' | 'Epistemic Delusion' | 'Standard Agent';
