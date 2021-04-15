import React from "react";

const JoinRoonBtn = ({
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
    setJoinIn(true);
    // connect
    // etc
  };

  return (
    <button id="joinRoonBtn" onClick={onBtnClick}>
      방 들어가기
    </button>
  );
};

export default JoinRoonBtn;
