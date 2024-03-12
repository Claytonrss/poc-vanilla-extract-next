"use client"
import { useStore } from "@/store/useStore";
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { backgroundColorVar, boxStyle } from "./style.css";

export const RandomColorBox = () => {
  const backgroundColor = useStore((state) => state.backgroundColor);
  const setRandomBackgroundColor = useStore(
    (state) => state.setRandomBackgroundColor
  );

  return (
    <div
      className={`${boxStyle}`}
      onClick={setRandomBackgroundColor}
      style={assignInlineVars({
        [backgroundColorVar]: backgroundColor
      })}
    >
      Mudar de Cor
    </div>
  );
};
