import React from "react";

const Message = ({ message, alertType }) => {
  console.log(message);
  return (
    <div className={`container ${alertType}`}>
      <h1 className="message">Oops, something went wrong!</h1>
    </div>
  );
};

export default Message;
