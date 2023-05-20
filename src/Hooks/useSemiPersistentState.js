import { useState, useEffect } from "react";
const useSemiPersistentState = (key, initialValue) => {
  const [state, setState] = useState(localStorage.getItem(key) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
};
export default useSemiPersistentState;
