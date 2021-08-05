import "./assets/css/style.css";
// components
import BtnGroup from "./components/btnGroup";
import ModalTask from "./components/modalTask";
import { useEffect, useState } from "react";

function App() {
  const [showTask, setShowTask] = useState(false);
  useEffect(() => {
    // document.addEventListener("mousedown", () => {
    //   setShowTask(false);
    // });
  }, []);

  return (
    <div className="App">
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
        onClickTask={() => {
          setShowTask(!showTask);
        }}
        onClickInbox={(e) => {
          e.preventDefault();
          setShowTask(false);
        }}
      />
    </div>
  );
}

export default App;
