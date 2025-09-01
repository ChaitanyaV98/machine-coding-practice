import React from "react";
import Counter from "./components/projects/1.counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="border-b py-4 bg-white dark:bg-gray-800 ">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            React Machine Coding Projects
          </h1>
        </div>
      </header>
      <main className="flex-1">
        <Counter />
      </main>
    </div>
  );
}

export default App;
