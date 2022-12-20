import { EventEmitter } from "fbemitter";
import { useState } from "react";

export const emitter = new EventEmitter();

const Notification = () => {
  const [open, setopen] = useState(false);
  const [message, setMessage] = useState();
  const notificationStyle = {
    padding: 10,
    border: "1px green solid",
    marginBottom: 15,
    backgroundColor: "#0cb30c",
    borderRadius: 2,
  };

  const reset = () => {
    setopen(false);
  };

  const autoHideAfterTimeout = () => {
    setTimeout(() => reset(), 5000);
  };

  emitter.addListener("NOTIFICATION", (msg) => {
    //console.log(msg);
    setMessage(msg);
    setopen(true);
    autoHideAfterTimeout();
  });

  if (!open) {
    return null;
  }
  return (
    <div style={notificationStyle}>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
