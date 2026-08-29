# Multi-stage production Dockerfile for Full-Stack Chess Platform
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY backend/package*.json ./backend/
COPY frontend/chess-client/package*.json ./frontend/chess-client/
RUN npm install

COPY . .
RUN npm run build

# Production Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/backend/package*.json ./backend/
COPY --from=builder /app/frontend/chess-client/dist ./frontend/chess-client/dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000 5173
CMD ["npm", "start"]
