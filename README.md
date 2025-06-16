# Mini Soccer Game

This repository contains a simple example of a mini 5 vs 5 soccer game built with **NestJS** for the backend and **React** for the frontend using TypeScript.

## Structure

- `backend/` – NestJS project exposing a REST API for the game state.
- `frontend/` – React app rendering the field and players.

## Running locally (requires Node.js and Yarn or npm)

```
# Backend
cd backend
npm install
npm run start

# Frontend (in another terminal)
cd ../frontend
npm install
npm run start
```

The frontend expects the backend to run on port `3001` and will fetch the game state from `/game`.
