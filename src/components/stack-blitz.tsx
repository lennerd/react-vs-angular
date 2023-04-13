import { memo, useContext, useEffect, useRef, useState } from "react";
import { SlideContext } from "spectacle";
import styled from "styled-components";

const StackBlitzIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export interface StackBlitzProps {
  id: string;
  file?: string;
  clickToLoad?: boolean;
}

const StackBlitz = memo(({ id, file, clickToLoad }: StackBlitzProps) => {
  const { isSlideActive } = useContext(SlideContext);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [renderIframe, setRenderIframe] = useState(isSlideActive);

  useEffect(() => {
    if (!isSlideActive) {
      return;
    }

    const timeout = setTimeout(() => {
      setRenderIframe(true);
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [isSlideActive]);

  const params = new URLSearchParams([["embed", "1"]]);

  if (file != null) {
    params.set("file", file);
  }

  if (clickToLoad) {
    params.set("ctl", "1");
  }

  let src = `https://stackblitz.com/${id}?${params}`;

  return (
    <>
      {renderIframe && (
        <StackBlitzIframe
          ref={iframeRef}
          src={src}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      )}
    </>
  );
});

export default StackBlitz;
