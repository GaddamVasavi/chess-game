import { ServerChessEngine } from '../../backend/src/modules/chess/chess.engine';

describe('ServerChessEngine Comprehensive Rules Test Suite', () => {
  let engine: ServerChessEngine;

  beforeEach(() => {
    engine = new ServerChessEngine();
  });

  test('Initial board setup and standard FEN verification', () => {
    expect(engine.getFen()).toBe('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(engine.getTurn()).toBe('w');
  });

  test('Pawn advance single and double squares with turn progression', () => {
    const move1 = engine.validateAndExecuteMove('e2', 'e4');
    expect(move1.isValid).toBe(true);
    expect(engine.getTurn()).toBe('b');

    const move2 = engine.validateAndExecuteMove('e7', 'e5');
    expect(move2.isValid).toBe(true);
    expect(engine.getTurn()).toBe('w');
  });

  test('Knight jumping over pawns legality', () => {
    const moveNf3 = engine.validateAndExecuteMove('g1', 'f3');
    expect(moveNf3.isValid).toBe(true);
    expect(moveNf3.san).toBe('Nf3');
  });

  test('Checkmate detection on 2-move Fool\'s Mate', () => {
    engine.validateAndExecuteMove('f2', 'f3');
    engine.validateAndExecuteMove('e7', 'e5');
    engine.validateAndExecuteMove('g2', 'g4');
    const mate = engine.validateAndExecuteMove('d8', 'h4');

    expect(mate.isValid).toBe(true);
    expect(mate.isCheckmate).toBe(true);
    expect(engine.isGameOver()).toBe(true);
  });
});
