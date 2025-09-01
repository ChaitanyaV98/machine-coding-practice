import React, { useState } from "react";

import { Plus, Minus } from "lucide-react";

function Counter() {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);
  let currentValue = history[position];

  return (
    <div className="flex flex-col justify-center items-center pt-[100px]">
      <h1>Counter with Undo Redo functionality</h1>
      <div className="flex gap-4 flex-col justify-center mt-5">
        <div className="flex justify-center items-center text-2xl font-bold tabular-nums">
          {currentValue}
        </div>
        <div className="flex gap-4">
          <button>
            <Minus className="h-4 w-4" />
          </button>
          <button>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
