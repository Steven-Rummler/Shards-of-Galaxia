import type { ServerWebSocket } from "bun";
import type { Game } from "./model/game";

const games: Game[] = [];

Bun.serve({
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) return; // do not return a Response
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: { open, message, close, drain }
});

function message(ws: ServerWebSocket, message: string | Buffer) {
  console.log('Received message:', message);
}

function open(ws: ServerWebSocket) {
  console.log('Opened socket');
}

function close(ws: ServerWebSocket, code: number, message: string) {
  console.log('Closed socket:', code, message);
}

function drain(ws: ServerWebSocket) {
  console.log('Drained socket');
}