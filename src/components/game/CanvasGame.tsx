import { useTheme } from 'next-themes';
import React, { useRef, useEffect } from 'react';

interface CanvasGameProps {
  matrix: number[][];
}

const CanvasGame: React.FC<CanvasGameProps> = (props) => {
  const theme = useTheme();
  const { matrix } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = (ctx: CanvasRenderingContext2D, size: number) => {
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
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

      if (context == null) {
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const size = context.canvas.width / matrix.length;

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

  return <canvas className='absolute top-0 left-0 -z-30' ref={canvasRef}/>;
};

export default CanvasGame;
