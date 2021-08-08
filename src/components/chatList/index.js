import Chat from "../chat";

const ChatList = ({ setShowChatDetail, setShowChat }) => {
  return (
    <>
      <Chat
        setShowChatDetail={setShowChatDetail}
        setShowChat={setShowChat}
        chatNames="Elon Musk, Bill Gates (You)"
        latestName="Elon Musk"
        latestMessage="hehe makasih Tagihan"
        chatDate="09/08/2021 12:19"
      />
      <Chat
        setShowChatDetail={setShowChatDetail}
        setShowChat={setShowChat}
        chatNames="Kids Group"
        latestName="Johny Yes Papa"
        latestMessage="No Papa"
        chatDate="01/06/2021 12:19"
      />
      <Chat
        setShowChatDetail={setShowChatDetail}
        setShowChat={setShowChat}
        chatNames="Play Together Multichat"
        latestName="Ciara"
        latestMessage="okaay"
        chatDate="01/05/2021 08:07"
      />
    </>
  );
};
export default ChatList;
