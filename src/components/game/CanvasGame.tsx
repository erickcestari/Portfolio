import { useTheme } from 'next-themes';
import React, { useRef, useEffect, useCallback } from 'react';

interface CanvasGameProps {
  matrix: number[][];
}

const CanvasGame: React.FC<CanvasGameProps> = (props) => {
  const theme = useTheme();
  const { matrix } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, size: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const color = theme.theme === 'dark' ? '#333333' : '#cccccc';

    let x = 0;
    for (const col of matrix) {
      let y = 0;
      for (const life of col) {
        if (life == 1) {
          ctx.fillStyle = color;
          ctx.fillRect(x * size, y * size, size, size);
        }
        y++;
      }
      x++;
    }
  }, [matrix, theme.theme]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

      if (context == null) {
        return;
      }

      const defaultSize = matrix?.length ?? 1;

      const size = context.canvas.width / defaultSize;

      let animationFrameId: number;

      const render = () => {
        draw(context, size);
        animationFrameId = window.requestAnimationFrame(render);
      };

      const resetCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };

      resetCanvas();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [draw, matrix.length]);

  return <canvas className='fixed top-0 left-0 w-screen -z-30' ref={canvasRef} />;
};

export default CanvasGame;