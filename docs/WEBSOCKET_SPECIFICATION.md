# Real-Time WebSocket Communication Specification

## Gateway Namespace
`/chess`

## Connection Auth
Clients pass Bearer JWT token in socket handshake query:
```js
const socket = io('/chess', {
  auth: { token: 'JWT_ACCESS_TOKEN' }
});
```

## Protocol Events
- `game:join_room` -> `{ gameId: string }`
- `game:make_move` -> `{ gameId: string, from: string, to: string, promotion?: string }`
- `game:offer_draw` -> `{ gameId: string }`
- `game:resign` -> `{ gameId: string }`
- `matchmaking:join` -> `{ category: 'BULLET'|'BLITZ'|'RAPID' }`
- `chat:send` -> `{ roomId: string, message: string }`
