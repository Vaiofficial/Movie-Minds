"use client";

import React, { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10 ">
      <h1>Something went wrong!</h1>
      <button className="hover:text-amber-600 bg-amber-200 rounded-md px-3 py-2 mt-3 text-gray-700"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
