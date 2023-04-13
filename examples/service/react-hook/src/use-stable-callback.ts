import { useCallback, useRef } from "react";

export default function useStableCallback<
  TArgs extends any[],
  T extends (...args: TArgs) => any
>(callback: T) {
  // Store the callback in a ref so it can be accessed in the useCallback hook
  // without causing a re-render.
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  // Wrap the callback in a useCallback hook to ensure it is stable between
  // renders and can be used as a dependency in other hooks such as useEffect.
  return useCallback((...args: TArgs) => callbackRef.current(...args), []);
}
