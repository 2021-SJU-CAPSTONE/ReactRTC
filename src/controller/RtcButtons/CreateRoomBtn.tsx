import React from "react";

const CreateRoomBtn = ({
  setRoomId,
  setJoinIn,
}: {
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
  setJoinIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
    setJoinIn(true);
    // setRoomId
    // save RoomId in firestore
    // etc
  };

  return (
    <button id="createRoomBtn" onClick={onBtnClick}>
      방 생성
    </button>
  );
};

export default CreateRoomBtn;
