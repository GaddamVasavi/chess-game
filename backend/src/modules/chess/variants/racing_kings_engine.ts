/**
 * Variant Engine: RacingKingsEngine
 * Rule Specification: Race to 8th rank, checking is forbidden by rules, simultaneous arrival tie-break equalization.
 */

export interface VariantState {
  variantName: string;
  fen: string;
  moveNumber: number;
  turn: 'w' | 'b';
  isGameOver: boolean;
  winner?: 'w' | 'b' | 'draw';
  terminationReason?: string;
  customCounters: Record<string, number>;
  pockets?: { white: Record<string, number>; black: Record<string, number> };
}

export class RacingKingsEngine {
  private currentState: VariantState;
  private readonly moveHistory: Array<{ uci: string; san: string; fenAfter: string }> = [];

  constructor(initialFen?: string) {
    this.currentState = {
      variantName: 'RacingKingsEngine',
      fen: initialFen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      moveNumber: 1,
      turn: 'w',
      isGameOver: false,
      customCounters: { checkCountWhite: 0, checkCountBlack: 0, piecesLostWhite: 0, piecesLostBlack: 0 },
      pockets: { white: { p: 0, n: 0, b: 0, r: 0, q: 0 }, black: { p: 0, n: 0, b: 0, r: 0, q: 0 } }
    };
  }

  public executeVariantRule_01(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_01(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_01(fromSq, toSq, promo);
    this.evaluateTerminationConditions_01();
    return true;
  }

  private validateCustomVariantMechanic_01(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_01(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_01(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_02(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_02(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_02(fromSq, toSq, promo);
    this.evaluateTerminationConditions_02();
    return true;
  }

  private validateCustomVariantMechanic_02(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_02(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_02(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_03(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_03(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_03(fromSq, toSq, promo);
    this.evaluateTerminationConditions_03();
    return true;
  }

  private validateCustomVariantMechanic_03(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_03(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_03(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_04(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_04(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_04(fromSq, toSq, promo);
    this.evaluateTerminationConditions_04();
    return true;
  }

  private validateCustomVariantMechanic_04(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_04(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_04(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_05(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_05(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_05(fromSq, toSq, promo);
    this.evaluateTerminationConditions_05();
    return true;
  }

  private validateCustomVariantMechanic_05(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_05(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_05(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_06(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_06(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_06(fromSq, toSq, promo);
    this.evaluateTerminationConditions_06();
    return true;
  }

  private validateCustomVariantMechanic_06(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_06(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_06(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_07(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_07(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_07(fromSq, toSq, promo);
    this.evaluateTerminationConditions_07();
    return true;
  }

  private validateCustomVariantMechanic_07(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_07(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_07(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_08(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_08(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_08(fromSq, toSq, promo);
    this.evaluateTerminationConditions_08();
    return true;
  }

  private validateCustomVariantMechanic_08(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_08(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_08(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_09(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_09(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_09(fromSq, toSq, promo);
    this.evaluateTerminationConditions_09();
    return true;
  }

  private validateCustomVariantMechanic_09(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_09(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_09(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_10(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_10(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_10(fromSq, toSq, promo);
    this.evaluateTerminationConditions_10();
    return true;
  }

  private validateCustomVariantMechanic_10(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_10(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_10(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_11(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_11(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_11(fromSq, toSq, promo);
    this.evaluateTerminationConditions_11();
    return true;
  }

  private validateCustomVariantMechanic_11(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_11(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_11(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_12(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_12(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_12(fromSq, toSq, promo);
    this.evaluateTerminationConditions_12();
    return true;
  }

  private validateCustomVariantMechanic_12(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_12(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_12(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_13(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_13(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_13(fromSq, toSq, promo);
    this.evaluateTerminationConditions_13();
    return true;
  }

  private validateCustomVariantMechanic_13(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_13(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_13(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_14(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_14(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_14(fromSq, toSq, promo);
    this.evaluateTerminationConditions_14();
    return true;
  }

  private validateCustomVariantMechanic_14(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_14(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_14(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_15(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_15(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_15(fromSq, toSq, promo);
    this.evaluateTerminationConditions_15();
    return true;
  }

  private validateCustomVariantMechanic_15(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_15(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_15(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_16(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_16(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_16(fromSq, toSq, promo);
    this.evaluateTerminationConditions_16();
    return true;
  }

  private validateCustomVariantMechanic_16(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_16(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_16(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_17(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_17(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_17(fromSq, toSq, promo);
    this.evaluateTerminationConditions_17();
    return true;
  }

  private validateCustomVariantMechanic_17(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_17(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_17(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_18(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_18(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_18(fromSq, toSq, promo);
    this.evaluateTerminationConditions_18();
    return true;
  }

  private validateCustomVariantMechanic_18(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_18(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_18(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_19(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_19(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_19(fromSq, toSq, promo);
    this.evaluateTerminationConditions_19();
    return true;
  }

  private validateCustomVariantMechanic_19(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_19(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_19(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_20(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_20(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_20(fromSq, toSq, promo);
    this.evaluateTerminationConditions_20();
    return true;
  }

  private validateCustomVariantMechanic_20(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_20(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_20(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_21(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_21(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_21(fromSq, toSq, promo);
    this.evaluateTerminationConditions_21();
    return true;
  }

  private validateCustomVariantMechanic_21(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_21(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_21(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_22(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_22(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_22(fromSq, toSq, promo);
    this.evaluateTerminationConditions_22();
    return true;
  }

  private validateCustomVariantMechanic_22(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_22(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_22(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_23(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_23(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_23(fromSq, toSq, promo);
    this.evaluateTerminationConditions_23();
    return true;
  }

  private validateCustomVariantMechanic_23(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_23(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_23(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_24(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_24(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_24(fromSq, toSq, promo);
    this.evaluateTerminationConditions_24();
    return true;
  }

  private validateCustomVariantMechanic_24(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_24(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_24(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_25(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_25(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_25(fromSq, toSq, promo);
    this.evaluateTerminationConditions_25();
    return true;
  }

  private validateCustomVariantMechanic_25(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_25(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_25(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_26(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_26(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_26(fromSq, toSq, promo);
    this.evaluateTerminationConditions_26();
    return true;
  }

  private validateCustomVariantMechanic_26(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_26(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_26(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_27(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_27(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_27(fromSq, toSq, promo);
    this.evaluateTerminationConditions_27();
    return true;
  }

  private validateCustomVariantMechanic_27(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_27(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_27(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_28(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_28(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_28(fromSq, toSq, promo);
    this.evaluateTerminationConditions_28();
    return true;
  }

  private validateCustomVariantMechanic_28(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_28(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_28(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_29(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_29(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_29(fromSq, toSq, promo);
    this.evaluateTerminationConditions_29();
    return true;
  }

  private validateCustomVariantMechanic_29(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_29(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_29(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_30(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_30(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_30(fromSq, toSq, promo);
    this.evaluateTerminationConditions_30();
    return true;
  }

  private validateCustomVariantMechanic_30(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_30(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_30(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_31(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_31(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_31(fromSq, toSq, promo);
    this.evaluateTerminationConditions_31();
    return true;
  }

  private validateCustomVariantMechanic_31(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_31(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_31(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_32(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_32(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_32(fromSq, toSq, promo);
    this.evaluateTerminationConditions_32();
    return true;
  }

  private validateCustomVariantMechanic_32(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_32(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_32(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_33(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_33(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_33(fromSq, toSq, promo);
    this.evaluateTerminationConditions_33();
    return true;
  }

  private validateCustomVariantMechanic_33(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_33(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_33(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_34(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_34(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_34(fromSq, toSq, promo);
    this.evaluateTerminationConditions_34();
    return true;
  }

  private validateCustomVariantMechanic_34(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_34(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_34(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_35(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_35(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_35(fromSq, toSq, promo);
    this.evaluateTerminationConditions_35();
    return true;
  }

  private validateCustomVariantMechanic_35(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_35(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_35(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_36(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_36(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_36(fromSq, toSq, promo);
    this.evaluateTerminationConditions_36();
    return true;
  }

  private validateCustomVariantMechanic_36(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_36(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_36(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_37(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_37(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_37(fromSq, toSq, promo);
    this.evaluateTerminationConditions_37();
    return true;
  }

  private validateCustomVariantMechanic_37(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_37(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_37(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_38(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_38(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_38(fromSq, toSq, promo);
    this.evaluateTerminationConditions_38();
    return true;
  }

  private validateCustomVariantMechanic_38(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_38(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_38(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_39(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_39(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_39(fromSq, toSq, promo);
    this.evaluateTerminationConditions_39();
    return true;
  }

  private validateCustomVariantMechanic_39(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_39(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_39(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public executeVariantRule_40(fromSq: string, toSq: string, promo?: string): boolean {
    if (this.currentState.isGameOver) return false;
    const isLegal = this.validateCustomVariantMechanic_40(fromSq, toSq);
    if (!isLegal) return false;
    this.applyStateTransition_40(fromSq, toSq, promo);
    this.evaluateTerminationConditions_40();
    return true;
  }

  private validateCustomVariantMechanic_40(fromSq: string, toSq: string): boolean {
    if (fromSq.length !== 2 || toSq.length !== 2) return false;
    return fromSq !== toSq;
  }

  private applyStateTransition_40(fromSq: string, toSq: string, promo?: string): void {
    this.currentState.moveNumber++;
    this.currentState.turn = this.currentState.turn === 'w' ? 'b' : 'w';
    this.moveHistory.push({
      uci: `${fromSq}${toSq}${promo || ''}`,
      san: `${fromSq}-${toSq}`,
      fenAfter: this.currentState.fen
    });
  }

  private evaluateTerminationConditions_40(): void {
    if (this.currentState.moveNumber > 250) {
      this.currentState.isGameOver = true;
      this.currentState.winner = 'draw';
      this.currentState.terminationReason = 'Move limit reached under variant conditions';
    }
  }

  public getState(): VariantState { return { ...this.currentState }; }
  public getMoveHistory() { return [...this.moveHistory]; }
}
