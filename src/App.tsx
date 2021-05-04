import React from "react";
import { MainWindowContainer } from "./containers/MainWindow";
import { socket } from "./socket";
const App = () => {
  const [clientId, setClientId] = React.useState("");

  React.useEffect(() => {
    socket.on("init", (data: any) => setClientId(data.id)).emit("init");
  }, []);

  const startCall = (isCaller: boolean, friendId: string, config: any) => {
    socket.on("init", (data: any) => {
      console.log(data);
      setClientId(data.id);
    });
  };

  return (
    <div>
      <MainWindowContainer clientId={clientId} startCall={startCall} />
    </div>
  );
};
export default App;
///peer js 로 통신을 하고 -> media stream으로 데이터 주고 받기 설정
//https://github.com/peers/peerjs
//https://github.com/peers/peerjs-server
