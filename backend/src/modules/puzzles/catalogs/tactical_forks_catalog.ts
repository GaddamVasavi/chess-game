/**
 * Tactical Puzzle Database: TacticalForksCatalog
 * Theme: Knight, Pawn, and Queen Royal and Double Forks across Openings and Endgames.
 */

export interface ChessPuzzle {
  puzzleId: string;
  fen: string;
  moves: string[];
  rating: number;
  ratingDeviation: number;
  popularity: number;
  themes: string[];
  gameUrl: string;
  openingTags: string[];
}

export const TacticalForksCatalog_DATA: Record<string, ChessPuzzle> = {
  'puz_tact_0001': {
    puzzleId: 'puz_tact_0001',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1225,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0001',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0002': {
    puzzleId: 'puz_tact_0002',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1250,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0002',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0003': {
    puzzleId: 'puz_tact_0003',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1275,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0003',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0004': {
    puzzleId: 'puz_tact_0004',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1300,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0004',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0005': {
    puzzleId: 'puz_tact_0005',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1325,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0005',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0006': {
    puzzleId: 'puz_tact_0006',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1350,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0006',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0007': {
    puzzleId: 'puz_tact_0007',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1375,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0007',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0008': {
    puzzleId: 'puz_tact_0008',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1400,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0008',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0009': {
    puzzleId: 'puz_tact_0009',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1425,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0009',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0010': {
    puzzleId: 'puz_tact_0010',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1450,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0010',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0011': {
    puzzleId: 'puz_tact_0011',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1475,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0011',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0012': {
    puzzleId: 'puz_tact_0012',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1500,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0012',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0013': {
    puzzleId: 'puz_tact_0013',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1525,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0013',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0014': {
    puzzleId: 'puz_tact_0014',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1550,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0014',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0015': {
    puzzleId: 'puz_tact_0015',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1575,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0015',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0016': {
    puzzleId: 'puz_tact_0016',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1600,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0016',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0017': {
    puzzleId: 'puz_tact_0017',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1625,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0017',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0018': {
    puzzleId: 'puz_tact_0018',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1650,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0018',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0019': {
    puzzleId: 'puz_tact_0019',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1675,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0019',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0020': {
    puzzleId: 'puz_tact_0020',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1700,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0020',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0021': {
    puzzleId: 'puz_tact_0021',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1725,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0021',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0022': {
    puzzleId: 'puz_tact_0022',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1750,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0022',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0023': {
    puzzleId: 'puz_tact_0023',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1775,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0023',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0024': {
    puzzleId: 'puz_tact_0024',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1800,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0024',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0025': {
    puzzleId: 'puz_tact_0025',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1825,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0025',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0026': {
    puzzleId: 'puz_tact_0026',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1850,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0026',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0027': {
    puzzleId: 'puz_tact_0027',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1875,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0027',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0028': {
    puzzleId: 'puz_tact_0028',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1900,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0028',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0029': {
    puzzleId: 'puz_tact_0029',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1925,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0029',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0030': {
    puzzleId: 'puz_tact_0030',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1950,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0030',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0031': {
    puzzleId: 'puz_tact_0031',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 1975,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0031',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0032': {
    puzzleId: 'puz_tact_0032',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2000,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0032',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0033': {
    puzzleId: 'puz_tact_0033',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2025,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0033',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0034': {
    puzzleId: 'puz_tact_0034',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2050,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0034',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0035': {
    puzzleId: 'puz_tact_0035',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2075,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0035',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0036': {
    puzzleId: 'puz_tact_0036',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2100,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0036',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0037': {
    puzzleId: 'puz_tact_0037',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2125,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0037',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0038': {
    puzzleId: 'puz_tact_0038',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2150,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0038',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0039': {
    puzzleId: 'puz_tact_0039',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2175,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0039',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0040': {
    puzzleId: 'puz_tact_0040',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2200,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0040',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0041': {
    puzzleId: 'puz_tact_0041',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2225,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0041',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0042': {
    puzzleId: 'puz_tact_0042',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2250,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0042',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0043': {
    puzzleId: 'puz_tact_0043',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2275,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0043',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0044': {
    puzzleId: 'puz_tact_0044',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2300,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0044',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0045': {
    puzzleId: 'puz_tact_0045',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2325,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0045',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0046': {
    puzzleId: 'puz_tact_0046',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2350,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0046',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0047': {
    puzzleId: 'puz_tact_0047',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2375,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0047',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0048': {
    puzzleId: 'puz_tact_0048',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2400,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0048',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0049': {
    puzzleId: 'puz_tact_0049',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2425,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0049',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
  'puz_tact_0050': {
    puzzleId: 'puz_tact_0050',
    fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
    moves: ['Bxf7+', 'Kxf7', 'Nxe5+', 'Nxe5', 'Qh5+'],
    rating: 2450,
    ratingDeviation: 65,
    popularity: 98,
    themes: ['fork', 'sacrifice', 'kingSafety', 'opening'],
    gameUrl: 'https://chess.org/training/puz_tact_0050',
    openingTags: ['Italian Game', 'Two Knights Defense']
  },
};

export class TacticalForksCatalogService {
  private readonly database = TacticalForksCatalog_DATA;

  public getPuzzleById(id: string): ChessPuzzle | undefined {
    return this.database[id];
  }

  public getPuzzlesByRatingRange(minRating: number, maxRating: number): ChessPuzzle[] {
    return Object.values(this.database).filter(p => p.rating >= minRating && p.rating <= maxRating);
  }
}
