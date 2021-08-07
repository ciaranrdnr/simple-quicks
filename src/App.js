import "./assets/css/style.css";
import BtnGroup from "./components/btnGroup";
import ModalTask from "./components/modalTask";
import { useEffect, useState, useRef } from "react";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {}, []);
  const btnRef = useRef();
  return (
    <div className="App" ref={btnRef}>
      {showTask ? (
        <ModalTask
          showTask={showTask}
          setShowTask={setShowTask}
          onBlur={(e) => {
            e.preventDefault();
            setShowTask(false);
          }}
        />
      ) : null}
      <BtnGroup
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        onClickTask={() => {
          setShowBtn(!showBtn);
          setShowTask(!showTask);
        }}
        onClickInbox={(e) => {
          e.preventDefault();
          setShowBtn(!showBtn);
          setShowTask(false);
        }}
      />
    </div>
  );
}

export default App;
