import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Chat = ({ auth, socket }) => {
  const [message, setMessage] = useState("");
  const [chatlog, setChatlog] = useState([]);
  const [log, setLog] = useState({ message: "ładuje..." });
  const [feedback, setFeedback] = useState("");
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    fetchChatMsg();
  }, []);

  const fetchChatMsg = async () => {
    const data = await fetch(
      `https://pbsapi.skorotkiewicz.vercel.app/api/chat/log/messages`
    );
    const msg = await data.json();
    setChatlog(msg.data);
  };

  useEffect(() => {
    setChatlog([...chatlog, log]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [log]);

  useEffect(() => {
    socket.on("msg", function (data) {
      setLog(data);
    });

    socket.on("feedback", function (data) {
      setFeedback(data);
    });

    socket.on("disconnect", function () {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const msgTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    return hours + ":" + minutes + " | ";
  };

  const send = (e) => {
    e.preventDefault();
    if (message.length < 2 || message.length > 256) {
      return setFeedback(
        "Wiadomość musi miec przynajmniej 2 znaki i nie moze być dłuzsza od 255 znaków."
      );
    }
    socket.emit("msg", { message });
    setChatlog([
      ...chatlog,
      { message, username: auth.login, time: msgTime() },
    ]);
    setMessage("");
    setFeedback("");
  };

  return (
    <div>
      <div className="chat-container">
        <div className="chatlog">
          {chatlog.map((msg, key) => (
            <div key={key}>
              <span className="chatinfo">{msgTime()}</span>
              <span>
                <Link className="chatinfo" to={`/smieszek/${msg.username}`}>
                  {msg.username}:
                </Link>
              </span>{" "}
              <span>{msg.message}</span>
            </div>
          ))}
          <div ref={divRef}></div>
        </div>
        <div className="chatinput">
          <form onSubmit={send}>
            <input
              type="text"
              name="msg"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Twoja wiadomość"
            />
          </form>
        </div>
        {feedback && <div className="feedback">{feedback}</div>}
      </div>
    </div>
  );
};

export default Chat;
