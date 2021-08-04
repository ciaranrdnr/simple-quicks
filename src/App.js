import "./assets/css/style.css";

// components
import BtnGroup from "./components/btnGroup";
import ModalTask from "./components/modalTask";
import { useState } from "react";

function App() {
  const [showTask, setShowTask] = useState(false);
  return (
    <div className="App">
      {showTask ? <ModalTask /> : null}
      {/* <InboxItems
      listName="I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN] "
      name="Cameron Phillips"
      message="All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in."
      date="9/7/2021"
      time="09:07"
      /> */}
      {/* <SearchBar
        ph="Search"
        /> */}
      {/* <TypeBar
        ph="Type a New Message"
        />

        <Btn 
        title="Send"
        ripple="blue"
        /> */}
      <BtnGroup
        onClickTask={() => {
          setShowTask(!showTask);
        }}
      />
    </div>
  );
}

export default App;
