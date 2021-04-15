import React from "react";

const OutRoomBtn = ({
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
    <button id="outRoomBtn" onClick={onBtnClick}>
      방 나가기
    </button>
  );
};

export default OutRoomBtn;
