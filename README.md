# Real-Time Multiplayer Online Chess Platform with Cloud-Native DevOps

A full-stack, enterprise-grade, real-time multiplayer chess platform engineered with React, TypeScript, NestJS, Socket.IO, PostgreSQL, Redis, Kubernetes, Helm, Terraform, Jenkins, Prometheus, and Grafana.

## Features
- **Server-Authoritative Chess Engine**: Real-time validation of legal moves, check, checkmate, stalemate, castling, en passant, pawn promotion, threefold repetition, and fifty-move rule.
- **Matchmaking & Tournaments**: Redis-backed ELO matchmaking queue and single-elimination tournament bracket engine.
- **Social & Spectator**: Real-time chat, friend challenges, live spectator stream broadcasting, and PGN replay playback.
- **Cloud-Native DevOps**: Infrastructure as Code (Terraform), Helm deployment templates, Jenkins CI/CD pipeline, and Prometheus/Grafana observability.

## Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Socket.IO Client, Chess.js
- **Backend**: Node.js, TypeScript, NestJS, TypeORM, Socket.IO Server, Redis, PostgreSQL
- **DevOps**: Docker, Kubernetes, Helm, OpenTofu/Terraform, Jenkins CI/CD
- **Observability**: Prometheus Exporters, Grafana Dashboards

## Installation

```bash
# Clone the repository
git clone https://github.com/GaddamVasavi/chess-game.git
cd chess-game

# Install all monorepo dependencies
npm install
```

## Build Instructions

```bash
# Compile and build both frontend client and backend microservices
npm run build

# Build Docker containers for deployment
docker compose build
```

## Running the Application

### Development Mode
```bash
# Run backend and frontend concurrently with hot-reloading
npm run dev
```

### Production Mode
```bash
# Start backend server in production
npm start

# Or start the entire ecosystem using Docker Compose
docker compose up -d
```

## Testing & Test Coverage

```bash
# Execute complete unit, integration, and engine test suites
npm test

# Generate comprehensive test coverage report
npm run test:coverage
```

## Documentation
- [Architecture Blueprint](docs/ARCHITECTURE.md)
- [REST API Specification](docs/API_DOCUMENTATION.md)
- [WebSocket Protocol Specification](docs/WEBSOCKET_SPECIFICATION.md)
- [Deployment & Operations Guide](docs/DEPLOYMENT_GUIDE.md)
- [LOC Growth Audit Report](docs/LOC_REPORT.md)
