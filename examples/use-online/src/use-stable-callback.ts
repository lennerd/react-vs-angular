import { useCallback, useRef } from "react";

export default function useStableCallback<
  TArgs extends any[],
  T extends (...args: TArgs) => any
>(callback: T) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useCallback((...args: TArgs) => callbackRef.current(...args), []);
}
