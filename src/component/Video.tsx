import { useRef, useEffect } from "react";

interface RTCVideoProps {
  mediaStream: MediaStream | undefined;
}

const LocalVideo = ({ mediaStream }: RTCVideoProps) => {
  const viewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.srcObject = mediaStream ? mediaStream : null;
  }, [mediaStream]);

  return (
    <video ref={viewRef} id="localVideo" muted autoPlay playsInline></video>
  );
};

const RemoteVideo = ({ mediaStream }: RTCVideoProps) => {
  const viewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.srcObject = mediaStream ? mediaStream : null;
  }, [mediaStream]);

  return (
    <video ref={viewRef} id="remoteVideo" muted autoPlay playsInline></video>
  );
};

export { LocalVideo, RemoteVideo };
