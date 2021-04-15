import React, { useState } from "react";

export const CameraBtn = ({ setCamOn, setMicOn }) => {
  const [text, setText] = useState("카메라,마이크 허용");
  const onBtnClick: React.MouseEventHandler = async (): Promise<void> => {
    if (text == "카메라,마이크 허용") {
      setCamOn(true);
      setMicOn(true);
      setText("카메라,마이크 끄기");
    } else {
      setCamOn(true);
      setMicOn(true);
      setText("카메라,마이크 허용");
    }
  };

  return (
    <button className="RtcButton" id="cameraBtn" onClick={onBtnClick}>
      {text}
    </button>
  );
};

export const CreateRoomBtn = ({
  roomId,
  setJoinIn,
}: {
  roomId: string;
  setJoinIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    console.log(roomId);
    setJoinIn(true);
    // setRoomId
    // save RoomId in firestore
    // etc
  };

  return (
    <button className="RtcButton" id="createRoomBtn" onClick={onBtnClick}>
      방 생성
    </button>
  );
};

export const JoinRoomBtn = ({
  roomId,
  setJoinIn,
}: {
  roomId: string;
  setJoinIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    console.log(roomId);
    setJoinIn(true);
    // connect
    // etc
  };

  return (
    <button className="RtcButton" id="joinRoonBtn" onClick={onBtnClick}>
      방 들어가기
    </button>
  );
};

export const OutRoomBtn = ({
  setJoinIn,
}: {
  setJoinIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    setJoinIn(false);
    // etc
  };

  return (
    <button className="RtcButton" id="outRoomBtn" onClick={onBtnClick}>
      방 나가기
    </button>
  );
};

export const PlayBtn = () => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    // etc
  };

  return (
    <button className="RtcButton" id="playBtn" onClick={onBtnClick}>
      재생
    </button>
  );
};
export const RecordBtn = () => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    // etc
  };

  return (
    <button className="RtcButton" id="recordBtn" onClick={onBtnClick}>
      녹화
    </button>
  );
};

export const ShareBtn = () => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    // etc
  };

  return (
    <button className="RtcButton" id="shareBtn" onClick={onBtnClick}>
      공유
    </button>
  );
};
