import React, { useState, useEffect } from "react";
import { LocalVideo, RemoteVideo } from "../component/Video";

const Video = ({ joinIn }) => {
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [remoteStream, setRemoteStream] = useState<MediaStream>();
  useEffect(() => {
    if (joinIn) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => setLocalStream(stream));
    }
    setRemoteStream(new MediaStream());
  }, [joinIn]);
  return (
    <div id="video">
      <LocalVideo mediaStream={localStream} />
      <RemoteVideo mediaStream={remoteStream} />
    </div>
  );
};

export default Video;
