import { ReactComponent as ArrowLeft } from "../../assets/icons/left.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import TypeBar from "../typeBar";
import BubbleChatInbox from "../bubbleChatInbox";
import BubbleChatOutbox from "../bubbleChatOutbox";
import { useRef } from "react";

const ModalBubbleChat = ({
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
      <div className="ModalBubbleChat-inner">
        <div className="ModalBubbleChat-top border-bottom">
          <div className="ModalBubbleChatTop-left">
            <div>
              <button
                className="no-box no-border"
                onClick={() => {
                  setShowChatDetail(false);
                  setShowChat(true);
                }}
              >
                <ArrowLeft />
              </button>
            </div>
            <div>
              <b className="chatNames">Elon Musk, Bill Gates (You)</b>
              <p>2 Participant</p>
            </div>
          </div>
          <div className="ModalBubbleChatTop-right">
            <button
              className="no-box no-border"
              onClick={() => {
                setShowChatDetail(false);
                setShowChat(false);
                setGuidence(true);
                setShowMainBtn(true);
              }}
            >
              <Close />
            </button>
          </div>
        </div>
        <div className="ModalBubbleChat-center">
          <BubbleChatInbox message="Selamat malam, mas Gerbang Tagihan. Apa kabss?" />
          <BubbleChatOutbox message="Iya mas Musk, baikk. wkwkwk" />
          <BubbleChatInbox message="Gimana proyek vaksin chip?" />
          <BubbleChatOutbox message="Lancarr" />
          <BubbleChatOutbox message="Saya lihat diberita mas Musk habis prank DOGE ya. Mantepp" />
          <BubbleChatInbox message="hehe makasih Tagihan" />
        </div>
        <div className="ModalBubbleChat-bottom">
          <TypeBar btn="true" ph="a New Message" />
        </div>
      </div>
    </div>
  );
};
export default ModalBubbleChat;
