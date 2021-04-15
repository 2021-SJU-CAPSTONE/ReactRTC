import React from "react";

const CameraBtn = () => {
  const onBtnClick: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
  };

  return (
    <button id="cameraBtn" onClick={onBtnClick}>
      카메라,마이크 허용
    </button>
  );
};

export default CameraBtn;
