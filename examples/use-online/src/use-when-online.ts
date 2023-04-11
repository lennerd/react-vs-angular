import { useCallback, useEffect, useRef } from "react";
import useOnline from "./use-online";
import useStableCallback from "./use-stable-callback";

export default function useWhenOnline<TArgs extends any[]>(
  callback: (...args: TArgs) => void
) {
  callback = useStableCallback(callback);

  const isOnline = useOnline();
  const stashedCallsRef = useRef<TArgs[]>([]);

  useEffect(() => {
    if (isOnline && stashedCallsRef.current.length > 0) {
      stashedCallsRef.current.map((args) => callback(...args));
      stashedCallsRef.current.length = 0;
    }
  }, [isOnline, callback]);

  return useCallback(
    (...args: TArgs) => {
      if (isOnline) {
        callback(...args);
      } else {
        stashedCallsRef.current.push(args);
      }
    },
    [isOnline, callback]
  );
}
