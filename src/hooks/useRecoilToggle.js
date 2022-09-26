import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useRecoilToggle = (atom) => {
  const [active, setActive] = useRecoilState(atom);
  const toggle = useCallback(() => setActive((boolean) => !boolean), [setActive]);

  return { active, setActive, toggle };
};
