import { useContext, useCallback } from "react";
import { ThemeContext } from "../context/themeContext";

export default function useChangeTheme() {
  const dispatch = useContext(ThemeContext);
  return useCallback(
    ({ payload }) => dispatch({ type: "CHANGE", payload }),
    [dispatch]
  );
}
