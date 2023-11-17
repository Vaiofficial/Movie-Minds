import React from "react";

//next js 13 automatically detect the wait and therefore it is showing this file automatically.

export default function loading() {
  return (
    <div className="flex justify-center">
      <img className="h-1" src="spinner.svg" alt="loading..."></img>
    </div>
  );
}
