import IconMultiuser from "../iconMultiuser";

const Chat = ({
  setShowChatDetail,
  setShowChat,
  chatNames,
  latestName,
  latestMessage,
  chatDate,
}) => {
  return (
    <div
      className="Chat border-bottom"
      onClick={() => {
        setShowChatDetail(true);
        setShowChat(false);
      }}
    >
      <div className="chatLeft">
        <div className="chatLeft-left">
          <IconMultiuser />
        </div>
        <div className="chatLeft-right">
          <p>
            <b className="chatNames">{chatNames}</b>
          </p>
          <p>
            <b className="chatLatestName">{latestName}</b>
          </p>
          <p className="chatLatestMessage">{latestMessage}</p>
        </div>
      </div>

      <div className="chatRight">
        <p className="chatDate">{chatDate}</p>
        <div className="chatNotif">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#EB5757" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Chat;
