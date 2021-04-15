import React, { useEffect, useState } from "react";
import Video from "./Video";
import * as RtcButton from "../component/RtcButton";
const WebRTC = () => {
  const [joinIn, setJoinIn] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [camOn, setCamOn] = useState(false);
  const [micOn, setMicOn] = useState(false);
  // ToDo : Cam off, Mic off
  const onChange = (event) => {
    const value = event.target.value;
    setRoomId(value);
  };
  return (
    <>
      <div id="btns">
        {/* <RtcButton.CameraBtn setCamOn={setCamOn} setMicOn={setMicOn} /> */}
        {!joinIn ? (
          <>
            <input id="inputRoomId" onChange={onChange} />{" "}
            <RtcButton.CreateRoomBtn roomId={roomId} setJoinIn={setJoinIn} />
            <RtcButton.JoinRoomBtn roomId={roomId} setJoinIn={setJoinIn} />
          </>
        ) : (
          <>
            <RtcButton.OutRoomBtn setJoinIn={setJoinIn} />
            <RtcButton.RecordBtn />
            <RtcButton.ShareBtn />
            <RtcButton.PlayBtn />
          </>
        )}
      </div>
      <>{joinIn ? <Video joinIn={joinIn} /> : <h1>Have To Join Room</h1>}</>
    </>
  );
};

export default WebRTC;
