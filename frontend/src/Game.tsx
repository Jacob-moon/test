import React, { useEffect, useRef, useState } from 'react';

interface Player {
  id: number;
  x: number;
  y: number;
  team: 'A' | 'B';
}

interface GameState {
  ball: { x: number; y: number };
  players: Player[];
  score: { A: number; B: number };
}

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<GameState | null>(null);

  useEffect(() => {
    fetch('/game')
      .then((res) => res.json())
      .then(setState);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !state) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillStyle = 'white';
    state.players.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }, [state]);

  return (
    <div>
      <canvas ref={canvasRef} width={100} height={100} />
      {state && (
        <div>
          Score A:{state.score.A} B:{state.score.B}
        </div>
      )}
    </div>
  );
}
