import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { IDrumPad } from "../types/data";

type Props = {
  active: boolean;
};

const DrumPad = styled.button<Props>`
  height: 4rem;
  width: 4rem;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.active ? "red" : "#b8e994")};
  transition: 0.4s 0s ease;
  box-shadow: ${(props) => (props.active ? "1px 3px grey" : "none")};

  &:hover {
    background-color: ${(props) => (props.active ? "red" : "#9cc281")};
  }
  &:focus {
    outline: none;
  }
`;

export const Pad: React.FC<IDrumPad> = (props) => {
  const { id, keyTrigger, url, setSound, power } = props;

  const [active, setActive] = useState(false);

  const playSound = useCallback(() => {
    const sound = document.getElementById(
      keyTrigger
    ) as HTMLAudioElement | null;
    if (sound) {
      setSound(id);
      sound.play();
      setActive(true);
      setTimeout(() => setActive(false), 500);
    }
  }, [id, keyTrigger, setSound]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === keyTrigger.toLowerCase() || e.key === keyTrigger) {
        playSound();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === keyTrigger.toLowerCase() || e.key === keyTrigger) {
          playSound();
        }
      });
    };
  }, [id, keyTrigger, playSound, power]);

  return (
    <DrumPad
      id={id}
      onClick={playSound}
      className="drum-pad"
      active={active}
    >
      {keyTrigger}
      {power && (
        <audio
          className="clip"
          id={keyTrigger}
          src={url}
        />
      )}
    </DrumPad>
  );
};
