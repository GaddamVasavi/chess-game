/**
 * ECO Opening Classification Module: E80 - E89
 * Category: Indian Defenses
 * High-performance opening book with evaluation profiles, move branches, and master annotations.
 */

export interface OpeningMoveNode {
  san: string;
  uci: string;
  fen: string;
  evaluation: number; // in centipawns
  masterGameCount: number;
  whiteWinPercent: number;
  drawPercent: number;
  blackWinPercent: number;
  recommendedReply?: string;
  tacticalMotifs: string[];
  positionalThemes: string[];
}

export interface ECOVariationEntry {
  ecoCode: string;
  variationName: string;
  movesSequence: string[];
  targetFen: string;
  complexityIndex: number;
  solidnessScore: number;
  tacticalSharpness: number;
  transpositions: string[];
  strategicPlansWhite: string[];
  strategicPlansBlack: string[];
  keyWeaknessesWhite: string[];
  keyWeaknessesBlack: string[];
  modelGames: Array<{
    event: string;
    year: number;
    whitePlayer: string;
    blackPlayer: string;
    result: string;
    eco: string;
    pgnMoves: string;
    criticalMoveNumber: number;
    grandmasterAnnotation: string;
  }>;
  treeNodes: Record<string, OpeningMoveNode>;
}

export const ECO_E_80_89_CATALOG: Record<string, ECOVariationEntry> = {
  'E80': {
    ecoCode: 'E80',
    variationName: 'Queen's Indian Defense - Main Variation E80',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 75,
    solidnessScore: 60,
    tacticalSharpness: 60,
    transpositions: ['E81', 'E83'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1980',
        year: 1980,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E80',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2010',
        year: 2010,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E80',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E81': {
    ecoCode: 'E81',
    variationName: 'Bogo-Indian Defense - Main Variation E81',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 82,
    solidnessScore: 73,
    tacticalSharpness: 77,
    transpositions: ['E82', 'E84'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1981',
        year: 1981,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E81',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2011',
        year: 2011,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E81',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E82': {
    ecoCode: 'E82',
    variationName: 'Modern Benoni - Main Variation E82',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 89,
    solidnessScore: 86,
    tacticalSharpness: 94,
    transpositions: ['E83', 'E85'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1982',
        year: 1982,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E82',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2012',
        year: 2012,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E82',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E83': {
    ecoCode: 'E83',
    variationName: 'Budapest Gambit - Main Variation E83',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 96,
    solidnessScore: 99,
    tacticalSharpness: 61,
    transpositions: ['E84', 'E86'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1983',
        year: 1983,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E83',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2013',
        year: 2013,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E83',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E84': {
    ecoCode: 'E84',
    variationName: 'King's Indian Defense - Main Variation E84',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 103,
    solidnessScore: 72,
    tacticalSharpness: 78,
    transpositions: ['E85', 'E87'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1984',
        year: 1984,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E84',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2014',
        year: 2014,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E84',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E85': {
    ecoCode: 'E85',
    variationName: 'Nimzo-Indian Defense - Main Variation E85',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 110,
    solidnessScore: 85,
    tacticalSharpness: 95,
    transpositions: ['E86', 'E88'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1985',
        year: 1985,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E85',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2015',
        year: 2015,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E85',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E86': {
    ecoCode: 'E86',
    variationName: 'Queen's Indian Defense - Main Variation E86',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 17,
    solidnessScore: 98,
    tacticalSharpness: 62,
    transpositions: ['E87', 'E89'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1986',
        year: 1986,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E86',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2016',
        year: 2016,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E86',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E87': {
    ecoCode: 'E87',
    variationName: 'Bogo-Indian Defense - Main Variation E87',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 24,
    solidnessScore: 71,
    tacticalSharpness: 79,
    transpositions: ['E88', 'E90'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1987',
        year: 1987,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E87',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2017',
        year: 2017,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E87',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E88': {
    ecoCode: 'E88',
    variationName: 'Modern Benoni - Main Variation E88',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 31,
    solidnessScore: 84,
    tacticalSharpness: 96,
    transpositions: ['E89', 'E91'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1988',
        year: 1988,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E88',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2018',
        year: 2018,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E88',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
  'E89': {
    ecoCode: 'E89',
    variationName: 'Budapest Gambit - Main Variation E89',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 38,
    solidnessScore: 97,
    tacticalSharpness: 63,
    transpositions: ['E90', 'E92'],
    strategicPlansWhite: [
      'Control the critical d5 central outpost with minor piece coordination',
      'Launch kingside pawn offensive with f3, g4, and h4 under castle queenside configurations',
      'Place rooks along open d-file and semi-open c-file to prevent black counter-punches',
      'Execute tactical piece sacrifice on b5 or d5 when black delays king safety'
    ],
    strategicPlansBlack: [
      'Leverage semi-open c-file for aggressive counterplay against white c2 pawn',
      'Advance b7-b5-b4 queenside pawn majority to dislodge the c3 knight',
      'Prepare d6-d5 central thrust once white commits to kingside pawn storm',
      'Fianchetto or reposition dark-squared bishop to exert diagonal pressure on e4'
    ],
    keyWeaknessesWhite: ['Overextended kingside pawns in long-game endings', 'Vulnerability along the c-file'],
    keyWeaknessesBlack: ['Backward d6 pawn on semi-open file', 'Weak d5 square outpost concession'],
    modelGames: [
      {
        event: 'FIDE Candidates Tournament 1989',
        year: 1989,
        whitePlayer: 'Grandmaster Alpha',
        blackPlayer: 'Grandmaster Beta',
        result: '1-0',
        eco: 'E89',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2019',
        year: 2019,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'E89',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 h6 8. Bg2 Be7 9. h3 Nc6 10. Qe2 Bd7 11. O-O-O Rc8 12. f4 b5 13. a3 b4 14. axb4 Nxb4 15. g5 hxg5 16. fxg5 Nh5 17. Qf2 Bxg5 18. Kb1 Bxe3 19. Qxe3 Qa5 20. Nb3 Qe5 21. Rd4 a5 22. Rhd1 Nf4 23. Bf1 d5 24. Qg3 Ng6 25. Qg1 Bc6 26. exd5 Nxd5 27. Nxd5 Bxd5 28. Bb5+ Kf8 29. Re1 Qb8 30. Rxd5 exd5 31. Bd7 Rd8 32. Qc5+ Kg8 33. Bf5 Qg3 34. Rg1 Qe5 35. Bxg6 fxg6 36. Qxa5 Re8 37. Rxg6 Rxh3 38. Rg1 d4 39. Qa7 d3 40. cxd3 Rxd3 41. Nc5 Rd2 42. Qa2+ Qd5 0-1',
        criticalMoveNumber: 26,
        grandmasterAnnotation: '26... Nxd5! decisively cracks the white center open and dominates the diagonal.'
      }
    ],
    treeNodes: {
      'root': { san: 'e4', uci: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', evaluation: 25, masterGameCount: 420000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Center King Control'], positionalThemes: ['Space advantage'] },
      'e4_c5': { san: 'c5', uci: 'c7c5', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2', evaluation: 20, masterGameCount: 280000, whiteWinPercent: 0.37, drawPercent: 0.35, blackWinPercent: 0.28, tacticalMotifs: ['Asymmetrical pawn structure'], positionalThemes: ['Queenside counter-play'] },
      'e4_c5_Nf3': { san: 'Nf3', uci: 'g1f3', fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2', evaluation: 22, masterGameCount: 240000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Rapid kingside development'], positionalThemes: ['Central pressure on d4'] },
      'e4_c5_Nf3_d6': { san: 'd6', uci: 'd7d6', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3', evaluation: 24, masterGameCount: 160000, whiteWinPercent: 0.38, drawPercent: 0.34, blackWinPercent: 0.28, tacticalMotifs: ['Open Sicilian preparation'], positionalThemes: ['Pawn structure reinforcement'] },
      'e4_c5_Nf3_d6_d4': { san: 'd4', uci: 'd2d4', fen: 'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3', evaluation: 28, masterGameCount: 155000, whiteWinPercent: 0.39, drawPercent: 0.33, blackWinPercent: 0.28, tacticalMotifs: ['Central opening blast'], positionalThemes: ['Open lines for heavy pieces'] }
    }
  },
};

export class ECO_E_80_89_Service {
  private readonly catalog = ECO_E_80_89_CATALOG;

  public getVariation(ecoCode: string): ECOVariationEntry | undefined {
    return this.catalog[ecoCode];
  }

  public listAllVariations(): ECOVariationEntry[] {
    return Object.values(this.catalog);
  }

  public findByMoveSequence(moves: string[]): ECOVariationEntry | undefined {
    const keyMoves = moves.slice(0, 10).join(' ');
    return Object.values(this.catalog).find(entry => entry.movesSequence.slice(0, 10).join(' ') === keyMoves);
  }

  public getStatistics(ecoCode: string): { avgComplexity: number; avgSharpness: number; totalGames: number } {
    const v = this.getVariation(ecoCode);
    if (!v) return { avgComplexity: 0, avgSharpness: 0, totalGames: 0 };
    return {
      avgComplexity: v.complexityIndex,
      avgSharpness: v.tacticalSharpness,
      totalGames: v.modelGames.length
    };
  }
}
