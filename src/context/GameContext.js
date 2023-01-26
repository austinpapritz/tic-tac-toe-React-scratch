import { createContext, useState } from 'react';
import { useGame } from '../hooks/useGame.js';
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const { board, setBoard } = useGame();
  const [currentplayer, setCurrentPlayer] = useState('X');
  const [gamemessage, setGameMessage] = useState('');
  const [active, setActive] = useState(true);

  function handleClick(squareIndex) {
    console.log('squareIndex', squareIndex);

    //if the value of div clicked is a string, means it's already clicked
    if (typeof board[squareIndex] === 'string') {
      return;
    }

    board[squareIndex] = currentplayer;
    console.log('board', board);
    setBoard(board);

    if (currentplayer === 'X') {
      setCurrentPlayer('O');
    } else if (currentplayer === 'O') {
      setCurrentPlayer('X');
    }

    // console.log('click');
    //check if game is active, return if false
    //update game message if active is false
    //setboard by inserting current player value into index
    //setPlayer to OTHER player
  }

  return (
    <GameContext.Provider
      value={{
        active,
        setActive,
        board,
        setBoard,
        currentplayer,
        setCurrentPlayer,
        gamemessage,
        setGameMessage,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
