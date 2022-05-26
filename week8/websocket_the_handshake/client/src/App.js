import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from "react";
import io from "socket.io-client";

function App() {

  const [socket] = useState(() => io(":8080"));

  useEffect(
    () => {
      console.log("Starting up a socket connection.");
      
      socket.on(
        "welcome",
        (data) => {
          console.log(data);
          socket.emit(
            "welcome_respond",
            {myMessage: "Thank you for having me!", myPort: socket.id}
          );
        }
      );

      socket.on(
        "welcome_respond",
        (data) => {
          console.log(data);
        }
      );

      return () => socket.disconnect(true);
    },
    []
  );

  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
