// import React, { useState, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = 'AIzaSyBcdbgAmnXjKbRrhAKJLZB7wHR3KPm7suY';

// const Chat = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loadingMessages, setLoadingMessages] = useState({});
//   const [messageSent, setMessageSent] = useState(false);
//   const genAi = new GoogleGenerativeAI(API_KEY);

//   useEffect(() => {
//     setMessages([]);
//   }, []); // Initialize messages array on component mount

//   const handleSendMessage = async () => {
//     if (!inputValue) return alert("Please enter a prompt");

//     const messageId = Date.now();
//     setLoadingMessages(prevState => ({ ...prevState, [messageId]: true }));

//     const model = genAi.getGenerativeModel({ model: "gemini-pro" });
//     const chat = model.startChat({
//       history: messages.map((msg) => ({ role: msg.role, text: msg.text })),
//       generationConfig: {
//         maxOutputTokens: 2000,
//       },
//     });

//     try {
//       const result = await chat.sendMessageStream(inputValue);
//       const response = await result.response;
//       const text = await response.text();

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { role: "user", text: inputValue, timestamp: Date.now() },
//         { role: "model", text, timestamp: Date.now() },
//       ]);
//       setInputValue("");
//       setMessageSent(true);
//       setTimeout(() => setMessageSent(false), 3000);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while processing your request.");
//     } finally {
//       setLoadingMessages(prevState => ({ ...prevState, [messageId]: false }));
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="container" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontFamily: "'Google Sans', sans-serif" }}>
//       <div className="chat-container">
//         <div className="chatCard">
//           <div className="head">
//             <div className="left">
//               <div className="name">Chat</div>
//             </div>
//             <div className="fiftyper">
//               <i className="fas fa-ellipsis-h"></i>
//             </div>
//             <div className="github-container">
//               <a href="https://github.com/sriparna-koar" target="_blank" rel="noopener noreferrer">
//               </a>
//             </div>
//           </div>
//           <div className="message_area">
//             {messages && messages.length > 0 && messages.map((msg, index) => (
//               <div key={index} className={`message ${msg.role}-message`}>
//                 <div className="img">
//                 </div>
//                 <div className="message-content">
//                   <div className="text">{msg.text}</div>
//                   <div className="timestamp">{new Date(msg.timestamp).toLocaleString()}</div>
//                 </div>
//               </div>
//             ))}
//             {Object.keys(loadingMessages).map((messageId) => (
//               loadingMessages[messageId] && (
//                 <div key={messageId} className="loading">
//                   Loading...
//                 </div>
//               )
//             ))}
//             {messageSent && (
//               <div className="message-sent">Message sent!</div>
//             )}
//           </div>
//           <div className="input-area">
//             <div className="sending">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Type your message..."
//               />
//               <button onClick={handleSendMessage} className="send" disabled={Object.values(loadingMessages).some(Boolean)}>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;


import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState({});
  const [messageSent, setMessageSent] = useState(false); 
  const NEXT_PUBLIC_APIKEY='AIzaSyBcdbgAmnXjKbRrhAKJLZB7wHR3KPm7suY'; // State to track message sent status
  const genAi = new GoogleGenerativeAI(NEXT_PUBLIC_APIKEY);

  const handleSendMessage = async () => {
    if (!inputValue) return alert("Please enter a prompt");

    const messageId = Date.now(); 
    setLoadingMessages(prevState => ({ ...prevState, [messageId]: true }));

    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: messages.map((msg) => ({ role: msg.role, parts: msg.text })),
      generationConfig: {
        maxOutputTokens: 2000,
      },
    });

    try {
      const result = await chat.sendMessageStream(inputValue);
      const response = await result.response;
      const text = await response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", text: inputValue, timestamp: Date.now() },
        { role: "model", text, timestamp: Date.now() },
      ]);
      setInputValue("");
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    } finally {
      setLoadingMessages(prevState => ({ ...prevState, [messageId]: false }));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontFamily: "'Google Sans', sans-serif" }}>
      <div className="chat-container">
        <div className="chatCard">
          <div className="head">
            <div className="left">
             
              <div className="name">Chat</div>
            </div>
            <div className="fiftyper">
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="github-container">
              <a href="https://github.com/sriparna-koar" target="_blank" rel="noopener noreferrer">
                
              </a>
            </div>
          </div>
          <div className="message_area">
          {messages.map((msg, index) => (
  <div key={index} className={`message ${msg && msg.role}-message`}>
    <div className="img"></div>
    <div className="message-content">
      <div className="text">{msg && msg.text ? msg.text : ""}</div>

    </div>
  </div>
))}

            {Object.keys(loadingMessages).map((messageId) => (
              loadingMessages[messageId] && (
                <div key={messageId} className="loading">
                  Loading...
                </div>
              )
            ))}
            {messageSent && (
              <div className="message-sent">Message sent!</div>
            )}
          </div>
          <div className="input-area">
            <div className="sending">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage} className="send" disabled={Object.values(loadingMessages).some(Boolean)}>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

