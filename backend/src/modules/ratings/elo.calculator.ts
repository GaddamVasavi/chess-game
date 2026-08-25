export interface EloCalculationResult {
  newRatingWhite: number;
  newRatingBlack: number;
  deltaWhite: number;
  deltaBlack: number;
}

export class EloCalculator {
  private static DEFAULT_K_FACTOR = 32;

  public static calculate(
    ratingWhite: number,
    ratingBlack: number,
    scoreWhite: number, // 1 for White win, 0.5 for Draw, 0 for Black win
    kFactor: number = EloCalculator.DEFAULT_K_FACTOR,
  ): EloCalculationResult {
    const expectedWhite = 1 / (1 + Math.pow(10, (ratingBlack - ratingWhite) / 400));
    const expectedBlack = 1 / (1 + Math.pow(10, (ratingWhite - ratingBlack) / 400));

    const deltaWhite = Math.round(kFactor * (scoreWhite - expectedWhite));
    const deltaBlack = Math.round(kFactor * ((1 - scoreWhite) - expectedBlack));

    return {
      newRatingWhite: ratingWhite + deltaWhite,
      newRatingBlack: ratingBlack + deltaBlack,
      deltaWhite,
      deltaBlack,
    };
  }
}
