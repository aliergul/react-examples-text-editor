import { useContext } from "react";
import EditorItems from "./EditorItems";
import MainContext from "../MainContext";

const items = [
  "h1",
  "h2",
  "h3",
  "paragraph",
  "bold",
  "italic",
  "strike",
  "underline",
  "left",
  "center",
  "right",
  "justify",
];

const Editor = () => {
  const { selectedText, setSelectedText } = useContext(MainContext);

  return (
    <div className="editor">
      {items.map((name, i) => {
        return <EditorItems key={i} name={name} />;
      })}
    </div>
  );
};

export default Editor;
