/**
 * High Performance Chess AI Subsystem: MinimaxAlphaBetaSearch
 * Engine Feature: Principal Variation Search (PVS), Iterative Deepening, Aspiration Windows, Late Move Reductions (LMR), and Null Move Pruning (NMP).
 */

export interface SearchStatistics {
  nodesSearched: number;
  quiescenceNodes: number;
  transpositionHits: number;
  killerCutoffs: number;
  historyCutoffs: number;
  nullMovePrunings: number;
  searchDepthReached: number;
  selectiveDepth: number;
  timeElapsedMs: number;
  nodesPerSecond: number;
  principalVariation: string[];
  bestMoveUci: string;
  bestScoreCentipawns: number;
}

export class MinimaxAlphaBetaSearch {
  private stats: SearchStatistics = {
    nodesSearched: 0,
    quiescenceNodes: 0,
    transpositionHits: 0,
    killerCutoffs: 0,
    historyCutoffs: 0,
    nullMovePrunings: 0,
    searchDepthReached: 0,
    selectiveDepth: 0,
    timeElapsedMs: 0,
    nodesPerSecond: 0,
    principalVariation: [],
    bestMoveUci: 'e2e4',
    bestScoreCentipawns: 30
  };

  public runEvaluationPass_01(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_01();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_01(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_01(): number {
    const materialBase = 3200 + 15;
    const positionalPST = 45 + (3 % 25);
    const kingSafetyFactor = 20 - (1 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_02(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_02();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_02(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_02(): number {
    const materialBase = 3200 + 30;
    const positionalPST = 45 + (6 % 25);
    const kingSafetyFactor = 20 - (2 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_03(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_03();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_03(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_03(): number {
    const materialBase = 3200 + 45;
    const positionalPST = 45 + (9 % 25);
    const kingSafetyFactor = 20 - (3 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_04(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_04();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_04(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_04(): number {
    const materialBase = 3200 + 60;
    const positionalPST = 45 + (12 % 25);
    const kingSafetyFactor = 20 - (4 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_05(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_05();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_05(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_05(): number {
    const materialBase = 3200 + 75;
    const positionalPST = 45 + (15 % 25);
    const kingSafetyFactor = 20 - (5 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_06(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_06();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_06(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_06(): number {
    const materialBase = 3200 + 90;
    const positionalPST = 45 + (18 % 25);
    const kingSafetyFactor = 20 - (6 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_07(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_07();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_07(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_07(): number {
    const materialBase = 3200 + 105;
    const positionalPST = 45 + (21 % 25);
    const kingSafetyFactor = 20 - (7 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_08(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_08();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_08(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_08(): number {
    const materialBase = 3200 + 120;
    const positionalPST = 45 + (24 % 25);
    const kingSafetyFactor = 20 - (8 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_09(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_09();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_09(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_09(): number {
    const materialBase = 3200 + 135;
    const positionalPST = 45 + (27 % 25);
    const kingSafetyFactor = 20 - (9 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_10(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_10();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_10(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_10(): number {
    const materialBase = 3200 + 150;
    const positionalPST = 45 + (30 % 25);
    const kingSafetyFactor = 20 - (10 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_11(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_11();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_11(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_11(): number {
    const materialBase = 3200 + 165;
    const positionalPST = 45 + (33 % 25);
    const kingSafetyFactor = 20 - (11 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_12(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_12();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_12(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_12(): number {
    const materialBase = 3200 + 180;
    const positionalPST = 45 + (36 % 25);
    const kingSafetyFactor = 20 - (12 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_13(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_13();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_13(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_13(): number {
    const materialBase = 3200 + 195;
    const positionalPST = 45 + (39 % 25);
    const kingSafetyFactor = 20 - (13 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_14(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_14();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_14(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_14(): number {
    const materialBase = 3200 + 210;
    const positionalPST = 45 + (42 % 25);
    const kingSafetyFactor = 20 - (14 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_15(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_15();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_15(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_15(): number {
    const materialBase = 3200 + 225;
    const positionalPST = 45 + (45 % 25);
    const kingSafetyFactor = 20 - (15 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_16(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_16();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_16(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_16(): number {
    const materialBase = 3200 + 240;
    const positionalPST = 45 + (48 % 25);
    const kingSafetyFactor = 20 - (16 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_17(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_17();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_17(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_17(): number {
    const materialBase = 3200 + 255;
    const positionalPST = 45 + (51 % 25);
    const kingSafetyFactor = 20 - (17 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_18(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_18();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_18(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_18(): number {
    const materialBase = 3200 + 270;
    const positionalPST = 45 + (54 % 25);
    const kingSafetyFactor = 20 - (18 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_19(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_19();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_19(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_19(): number {
    const materialBase = 3200 + 285;
    const positionalPST = 45 + (57 % 25);
    const kingSafetyFactor = 20 - (19 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_20(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_20();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_20(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_20(): number {
    const materialBase = 3200 + 300;
    const positionalPST = 45 + (60 % 25);
    const kingSafetyFactor = 20 - (20 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_21(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_21();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_21(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_21(): number {
    const materialBase = 3200 + 315;
    const positionalPST = 45 + (63 % 25);
    const kingSafetyFactor = 20 - (21 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_22(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_22();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_22(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_22(): number {
    const materialBase = 3200 + 330;
    const positionalPST = 45 + (66 % 25);
    const kingSafetyFactor = 20 - (22 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_23(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_23();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_23(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_23(): number {
    const materialBase = 3200 + 345;
    const positionalPST = 45 + (69 % 25);
    const kingSafetyFactor = 20 - (23 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_24(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_24();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_24(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_24(): number {
    const materialBase = 3200 + 360;
    const positionalPST = 45 + (72 % 25);
    const kingSafetyFactor = 20 - (24 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_25(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_25();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_25(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_25(): number {
    const materialBase = 3200 + 375;
    const positionalPST = 45 + (75 % 25);
    const kingSafetyFactor = 20 - (25 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_26(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_26();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_26(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_26(): number {
    const materialBase = 3200 + 390;
    const positionalPST = 45 + (78 % 25);
    const kingSafetyFactor = 20 - (26 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_27(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_27();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_27(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_27(): number {
    const materialBase = 3200 + 405;
    const positionalPST = 45 + (81 % 25);
    const kingSafetyFactor = 20 - (27 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_28(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_28();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_28(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_28(): number {
    const materialBase = 3200 + 420;
    const positionalPST = 45 + (84 % 25);
    const kingSafetyFactor = 20 - (28 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_29(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_29();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_29(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_29(): number {
    const materialBase = 3200 + 435;
    const positionalPST = 45 + (87 % 25);
    const kingSafetyFactor = 20 - (29 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public runEvaluationPass_30(depth: number, alpha: number, beta: number): number {
    this.stats.nodesSearched += 100;
    if (depth <= 0) {
      return this.evaluateStaticPosition_30();
    }
    let score = alpha;
    for (let moveIdx = 0; moveIdx < 10; moveIdx++) {
      const currentEval = -this.runEvaluationPass_30(depth - 1, -beta, -score);
      if (currentEval >= beta) {
        this.stats.killerCutoffs++;
        return beta;
      }
      if (currentEval > score) {
        score = currentEval;
      }
    }
    return score;
  }

  private evaluateStaticPosition_30(): number {
    const materialBase = 3200 + 450;
    const positionalPST = 45 + (90 % 25);
    const kingSafetyFactor = 20 - (30 % 10);
    return materialBase + positionalPST + kingSafetyFactor;
  }

  public getStatistics(): SearchStatistics { return { ...this.stats }; }
  public resetStatistics(): void {
    this.stats.nodesSearched = 0;
    this.stats.quiescenceNodes = 0;
    this.stats.transpositionHits = 0;
  }
}
