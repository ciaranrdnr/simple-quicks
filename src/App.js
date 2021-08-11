import "./assets/css/style.css";
import Guidence from "./components/guidence";
import BtnTaskGroup from "./components/btnTaskGroup";
import BtnGroup from "./components/btnGroup";
import ModalTask from "./components/modalTask";
import { useEffect, useRef, useState } from "react";
import ModalChat from "./components/modalChat";
import ModalBubbleChat from "./components/modalBubbleChat";
function App() {
  const [showTask, setShowTask] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showChatDetail, setShowChatDetail] = useState(false);
  const [showGuidence, setGuidence] = useState(true);
  const [showBtn, setShowBtn] = useState(false);
  const [showMainBtn, setShowMainBtn] = useState(true);
  const [showTaskBtn, setShowTaskBtn] = useState(false);
  const appRef = useRef();
  const closeBtnGroup = (e) => {
    if (appRef.current === e.target) {
      setShowBtn(false);
      setGuidence(true);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="App" ref={appRef} onClick={closeBtnGroup}>
      {showChat ? (
        <ModalChat
          setShowChat={setShowChat}
          setGuidence={setGuidence}
          setShowMainBtn={setShowMainBtn}
          setShowChatDetail={setShowChatDetail}
        />
      ) : null}
      {showChatDetail ? (
        <ModalBubbleChat
          setShowChat={setShowChat}
          setGuidence={setGuidence}
          setShowMainBtn={setShowMainBtn}
          setShowChatDetail={setShowChatDetail}
        />
      ) : null}

      {showTask ? (
        <ModalTask
          showTask={showTask}
          setShowTask={setShowTask}
          setShowMainBtn={setShowMainBtn}
          setShowTaskBtn={setShowTaskBtn}
          setGuidence={setGuidence}
        />
      ) : null}
      {showGuidence ? <Guidence /> : null}
      {showMainBtn ? (
        <BtnGroup
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          onClickLightning={() => {
            setShowBtn(!showBtn);
            if (
              showChat === true ||
              showChatDetail === true ||
              showTask === true ||
              showBtn === true
            ) {
              setGuidence(false);
            } else {
              setGuidence(!showGuidence);
            }
          }}
          onClickTask={(e) => {
            e.preventDefault();

            setShowBtn(!showBtn);
            setShowTask(!showTask);
            setShowChatDetail(false);
            setShowChat(false);
            setGuidence(false);
            setShowTaskBtn(true);
          }}
          onClickInbox={(e) => {
            e.preventDefault();

            setShowTask(!showTask);
            setShowBtn(!showBtn);
            setShowChatDetail(false);
            setShowChat(!showChat);
            setGuidence(false);
          }}
          showGuidence={showGuidence}
          setGuidence={setGuidence}
        />
      ) : null}
      {showTaskBtn ? (
        <BtnTaskGroup
          onClickInbox={(e) => {
            e.preventDefault();

            setShowBtn(false);
            setShowChat(false);
            setGuidence(false);
            setShowTaskBtn(false);
            setShowTask(!showTask);
            setShowChat(true);
          }}
          onClickTask={(e) => {
            e.preventDefault();

            setShowBtn(true);
            setShowTaskBtn(false);
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
