import React, { useState } from "react";

import { Plus, Minus, Undo2, Redo2 } from "lucide-react";

function Counter() {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);
  let currentValue = history[position];

  const AddValueToHistory = (newValue) => {
    const currentHistory = history.slice(0, position + 1);
    console.log("new hI", currentHistory);
    setHistory([...currentHistory, newValue]);
    setPosition(position + 1); // increment the position on increment or decrement operation
  };

  const increment = () => AddValueToHistory(currentValue + 1);
  const decrement = () => AddValueToHistory(currentValue - 1);

  console.log("history and position values----->>>", history, position);

  return (
    <div className="flex flex-col justify-center items-center pt-[100px]">
      <h1>Counter with Undo Redo functionality</h1>
      <div className="flex gap-4 flex-col justify-center mt-5">
        <div className="flex justify-center items-center text-2xl font-bold tabular-nums">
          {currentValue}
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button onClick={decrement}>
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={increment}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <button>
            Undo <Undo2 className="h-4 w-4" />
          </button>

          <div className="text-sm text-muted-foreground">
            {position + 1}/{history.length}
          </div>
          <button>
            Redo <Redo2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
