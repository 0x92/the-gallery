import React, { useEffect, useRef } from 'react';

const AmbientSound = ({ enabled }) => {
  const footstepsRef = useRef();
  const crowdRef = useRef();

  useEffect(() => {
    const play = (audio) => {
      if (audio) {
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
      }
    };
    if (enabled) {
      play(footstepsRef.current);
      play(crowdRef.current);
    } else {
      if (footstepsRef.current) footstepsRef.current.pause();
      if (crowdRef.current) crowdRef.current.pause();
    }
  }, [enabled]);

  return (
    <>
      <audio ref={footstepsRef} src={process.env.PUBLIC_URL + '/assets/Audio/footsteps.mp3'} loop />
      <audio ref={crowdRef} src={process.env.PUBLIC_URL + '/assets/Audio/crowd.mp3'} loop />
    </>
  );
};

export default AmbientSound;
