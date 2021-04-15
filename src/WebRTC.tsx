import React from "react";
import { useState } from "react";
import Video from "./Video";
import RtcButton from "./controller/RtcButtons/RtcButton";

const WebRTC = () => {
  const [joinIn, setJoinIn] = useState(false);
  const [roomId, setRoomId] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setRoomId(value);
  };

  return (
    <>
      <div id="btns">
        <RtcButton.CameraBtn />
        <input id="inputRoomId" onChange={onChange} />
        <RtcButton.CreateRoomBtn setRoomId={setRoomId} setJoinIn={setJoinIn} />
        <RtcButton.JoinRoomBtn roomId={roomId} setJoinIn={setJoinIn} />
        <RtcButton.OutRoomBtn setJoinIn={setJoinIn} />
      </div>
      <>{joinIn ? <Video /> : <h1>Have To Join Room</h1>}</>
    </>
  );
};

export default WebRTC;
