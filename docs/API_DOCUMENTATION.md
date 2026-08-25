# REST API & Gateway Specification

## Base URL
`/api/v1`

## Authentication API (`/auth`)
- `POST /auth/register`: User registration with email/username/password
- `POST /auth/login`: User login returning Access Token & Refresh Token
- `POST /auth/refresh`: Token rotation endpoint
- `POST /auth/logout`: Invalidate session in Redis

## Player Profiles (`/players`)
- `GET /players/me`: Fetch authenticated player profile
- `GET /players/:id`: Fetch player profile by ID or username
- `PUT /players/me`: Update avatar, country, display settings

## Matchmaking & Games (`/games`)
- `POST /games/create`: Create private or custom room
- `GET /games/:id`: Fetch game detail and move history
- `GET /games/:id/pgn`: Export game PGN format

## Leaderboards (`/leaderboards`)
- `GET /leaderboards`: Fetch global rankings (Filter: bullet, blitz, rapid, classical)

## Tournaments (`/tournaments`)
- `GET /tournaments`: List active and upcoming tournaments
- `POST /tournaments/register`: Register player for tournament bracket
