import { createMatrix, playCornwayGame } from "@/utils/game";
import CanvasGame from "./CanvasGame";
import { useState, useEffect } from "react";

interface LifeGameProps {
  stopGame: boolean;
}

const LifeGame = (props: LifeGameProps) => {
  const { stopGame } = props;
  const [matrix, setMatrix] = useState<number[][]>([]);
  
  const playGame = () => {
    setMatrix((prevMatrix) => playCornwayGame(prevMatrix));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMatrix(createMatrix(window.innerWidth / 5, window.innerHeight / 5));
    }
  }, []);

  useEffect(() => {
    if (!stopGame) {
      const intervalId = setInterval(() => {
        if (!stopGame) {
          playGame();
        }
      }, 100);
      
      return () => clearInterval(intervalId);
    }
  }, [stopGame]);

  return (
    <>
      {matrix && (
        <div>
          <CanvasGame matrix={matrix} />
        </div>
      )}
    </>
  );
};

export default LifeGame;