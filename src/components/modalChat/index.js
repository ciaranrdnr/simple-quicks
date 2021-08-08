import { useRef } from "react";
import ChatList from "../chatList";
import SearchBar from "../searchBar";

const ModalChat = ({
  setShowChat,
  setGuidence,
  setShowMainBtn,
  setShowChatDetail,
}) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowChat(false);
      setGuidence(true);
      setShowMainBtn(true);
      setShowChatDetail(false);
    }
  };
  return (
    <div className="background" ref={modalRef} onClick={closeModal}>
      <div className="ModalChat-inner">
        <div className="ModalChat-top">
          <SearchBar />
        </div>
        <div className="ModalChat-bottom">
          <ChatList
            setShowChatDetail={setShowChatDetail}
            setShowChat={setShowChat}
          />
        </div>
      </div>
    </div>
  );
};
export default ModalChat;
