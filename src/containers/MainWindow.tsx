import React from "react";

let friendId: string;

type Props = {
  clientId: string;
  startCall: (isCaller: boolean, friendId: string, config: any) => void;
};

export const MainWindowContainer = (props: Props) => {
  const callWithVideo = (withVideo: boolean) => {
    const { startCall } = props;
    const config = { audio: true, video: withVideo };
    return () => startCall(true, friendId, config);
  };

  return (
    <div className="main-window">
      <div>
        <h3>
          Hi, your ID is
          <input
            type="text"
            className="txt-clientId"
            defaultValue={props.clientId}
            readOnly
          />
        </h3>
        <h4>Get Started by calling a friend below</h4>
      </div>
      <div>
        <input
          type="text"
          className="txt-clientId"
          spellCheck={false}
          placeholder="Your friend ID"
          onChange={(event) => (friendId = event.target.value)}
        />
        <div>
          <button
            type="button"
            className="btn-video-camera"
            onClick={callWithVideo(true)}
          />
          <button
            type="button"
            className="btn-phone"
            onClick={callWithVideo(false)}
          />
        </div>
      </div>
    </div>
  );
};
