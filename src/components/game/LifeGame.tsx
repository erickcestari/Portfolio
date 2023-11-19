import { createMatrix, playCornwayGame } from "@/utils/game";
import CanvasGame from "./CanvasGame";
import { useState, useEffect } from "react";

interface LifeGameProps {
  stopGame: boolean;
}

const LifeGame = (props: LifeGameProps) => {
  const { stopGame } = props;
  const [matrix, setMatrix] = useState(createMatrix(250, 250));

  const playGame = () => {
    setMatrix((prevMatrix) => playCornwayGame(prevMatrix));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!stopGame) {
        playGame();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [stopGame]);

  return (
    <div>
      <CanvasGame matrix={matrix} />
    </div>
  );
};

export default LifeGame;