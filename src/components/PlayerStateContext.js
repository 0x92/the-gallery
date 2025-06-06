import React, { createContext, useState } from 'react';

export const PlayerStateContext = createContext({
  playerState: { position: [0,0,0], rotationY: 0 },
  setPlayerState: () => {}
});

export const PlayerStateProvider = ({ children }) => {
  const [playerState, setPlayerState] = useState({ position: [0,0,0], rotationY: 0 });
  return (
    <PlayerStateContext.Provider value={{ playerState, setPlayerState }}>
      {children}
    </PlayerStateContext.Provider>
  );
};
