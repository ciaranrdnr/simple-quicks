import "./assets/css/style.css";
import Guidence from "./components/guidence";
import BtnTaskGroup from "./components/btnTaskGroup";
import BtnGroup from "./components/btnGroup";
import ModalTask from "./components/modalTask";
import { useEffect, useRef, useState } from "react";
function App() {
  const [showTask, setShowTask] = useState(false);
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
          onClickTask={() => {
            setShowBtn(!showBtn);
            setShowTask(!showTask);
            setGuidence(false);
            setShowTaskBtn(true);
          }}
          onClickInbox={(e) => {
            e.preventDefault();
            setShowBtn(!showBtn);
            setGuidence(false);
          }}
          showGuidence={showGuidence}
          setGuidence={setGuidence}
        />
      ) : null}
      {showTaskBtn ? <BtnTaskGroup /> : null}
    </div>
  );
}

export default App;
