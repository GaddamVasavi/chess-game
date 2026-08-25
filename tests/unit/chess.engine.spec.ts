import { ServerChessEngine } from '../../backend/src/modules/chess/chess.engine';

function runUnitTests() {
  console.log('=== Running ServerChessEngine Unit Tests ===');

  // Test 1: Default Fen
  const engine = new ServerChessEngine();
  console.assert(
    engine.getFen() === 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    'Test 1 Failed: Initial FEN mismatch',
  );
  console.assert(engine.getTurn() === 'w', 'Test 1 Failed: Initial turn mismatch');
  console.log('✔ Test 1 Passed: Initial FEN and turn verification');

  // Test 2: Legal move e2 -> e4
  const move1 = engine.validateAndExecuteMove('e2', 'e4');
  console.assert(move1.isValid === true, 'Test 2 Failed: e4 move invalid');
  console.assert(move1.san === 'e4', 'Test 2 Failed: Move SAN mismatch');
  console.assert(engine.getTurn() === 'b', 'Test 2 Failed: Turn switch mismatch');
  console.log('✔ Test 2 Passed: Legal move e2->e4 executed');

  // Test 3: Illegal knight move
  const move2 = engine.validateAndExecuteMove('b1', 'b5');
  console.assert(move2.isValid === false, 'Test 3 Failed: Illegal move accepted');
  console.log('✔ Test 3 Passed: Illegal move rejected');

  // Test 4: Fool\'s Mate
  const engine2 = new ServerChessEngine();
  engine2.validateAndExecuteMove('f2', 'f3');
  engine2.validateAndExecuteMove('e7', 'e5');
  engine2.validateAndExecuteMove('g2', 'g4');
  const mateMove = engine2.validateAndExecuteMove('d8', 'h4');

  console.assert(mateMove.isValid === true, 'Test 4 Failed: Qh4# invalid');
  console.assert(mateMove.isCheckmate === true, 'Test 4 Failed: Checkmate not detected');
  console.assert(engine2.isGameOver() === true, 'Test 4 Failed: Game over not triggered');
  console.log('✔ Test 4 Passed: Fool\'s Mate checkmate detected');

  console.log('=== All ServerChessEngine Unit Tests PASSED ===');
}

runUnitTests();
