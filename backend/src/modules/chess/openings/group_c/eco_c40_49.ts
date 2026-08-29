/**
 * ECO Opening Classification Module: C40 - C49
 * Category: Open Games & French Defense
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

export const ECO_C_40_49_CATALOG: Record<string, ECOVariationEntry> = {
  'C40': {
    ecoCode: 'C40',
    variationName: 'Vienna Game - Main Variation C40',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 95,
    solidnessScore: 60,
    tacticalSharpness: 80,
    transpositions: ['C41', 'C43'],
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
        eco: 'C40',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2000',
        year: 2000,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C40',
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
  'C41': {
    ecoCode: 'C41',
    variationName: 'French Defense - Main Variation C41',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 102,
    solidnessScore: 73,
    tacticalSharpness: 97,
    transpositions: ['C42', 'C44'],
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
        eco: 'C41',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2001',
        year: 2001,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C41',
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
  'C42': {
    ecoCode: 'C42',
    variationName: 'Ruy Lopez - Main Variation C42',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 109,
    solidnessScore: 86,
    tacticalSharpness: 64,
    transpositions: ['C43', 'C45'],
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
        eco: 'C42',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2002',
        year: 2002,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C42',
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
  'C43': {
    ecoCode: 'C43',
    variationName: 'Italian Game - Main Variation C43',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 16,
    solidnessScore: 99,
    tacticalSharpness: 81,
    transpositions: ['C44', 'C46'],
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
        eco: 'C43',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2003',
        year: 2003,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C43',
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
  'C44': {
    ecoCode: 'C44',
    variationName: 'Scotch Game - Main Variation C44',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 23,
    solidnessScore: 72,
    tacticalSharpness: 98,
    transpositions: ['C45', 'C47'],
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
        eco: 'C44',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2004',
        year: 2004,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C44',
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
  'C45': {
    ecoCode: 'C45',
    variationName: 'Petroff Defense - Main Variation C45',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 30,
    solidnessScore: 85,
    tacticalSharpness: 65,
    transpositions: ['C46', 'C48'],
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
        eco: 'C45',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2005',
        year: 2005,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C45',
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
  'C46': {
    ecoCode: 'C46',
    variationName: 'Vienna Game - Main Variation C46',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 37,
    solidnessScore: 98,
    tacticalSharpness: 82,
    transpositions: ['C47', 'C49'],
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
        eco: 'C46',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2006',
        year: 2006,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C46',
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
  'C47': {
    ecoCode: 'C47',
    variationName: 'French Defense - Main Variation C47',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 44,
    solidnessScore: 71,
    tacticalSharpness: 99,
    transpositions: ['C48', 'C50'],
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
        eco: 'C47',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2007',
        year: 2007,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C47',
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
  'C48': {
    ecoCode: 'C48',
    variationName: 'Ruy Lopez - Main Variation C48',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 51,
    solidnessScore: 84,
    tacticalSharpness: 66,
    transpositions: ['C49', 'C51'],
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
        eco: 'C48',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2008',
        year: 2008,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C48',
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
  'C49': {
    ecoCode: 'C49',
    variationName: 'Italian Game - Main Variation C49',
    movesSequence: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6'],
    targetFen: 'r2qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq - 2 8',
    complexityIndex: 58,
    solidnessScore: 97,
    tacticalSharpness: 83,
    transpositions: ['C50', 'C52'],
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
        eco: 'C49',
        pgnMoves: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Ra4 25. Qxb3 Nc7 26. Rd4 Ra6 27. Rb4 Rc8 28. Rc1 d5 29. Rb7 Nc4 30. Nxc4 dxc4 31. Rxc4 Ra1+ 32. Kc2 Qa5 33. Qc3 Qa6 34. Rbxc7 Rxc7 35. Rxc7 Qe2+ 36. Qd2 1-0',
        criticalMoveNumber: 21,
        grandmasterAnnotation: '21. Na3! is a premier defensive and attacking resource sealing the a-file while supporting c4.'
      },
      {
        event: 'World Chess Championship Match 2009',
        year: 2009,
        whitePlayer: 'Grandmaster Gamma',
        blackPlayer: 'Grandmaster Delta',
        result: '0-1',
        eco: 'C49',
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

export class ECO_C_40_49_Service {
  private readonly catalog = ECO_C_40_49_CATALOG;

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
