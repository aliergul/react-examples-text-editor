import { useState } from "react";
import Editor from "./components/Editor/Editor";
import TextArea from "./components/TextArea";
import MainContext from "./components/MainContext";

function App() {
  const [selectedText, setSelectedText] = useState("");

  const data = {
    selectedText,
    setSelectedText,
  };

  return (
    <MainContext.Provider value={data}>
      <main className="main">
        <h1>Basic Text Editor</h1>
        <Editor />
        <TextArea />
      </main>
    </MainContext.Provider>
  );
}

export default App;
