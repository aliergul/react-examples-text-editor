import EditorItems from "./EditorItems";

const styleText = [
  "h1", //h1
  "h2", //h2
  "h3", //h3
  "paragraph", //p
  "bold", //b
  "italic", //i
  "strike", //strike
  "underline", //u
];

const styleParagraph = ["left", "center", "right", "justify"];

const Editor = () => {
  return (
    <div className="editor">
      {styleText.map((name, i) => {
        return <EditorItems key={i} name={name} type={"text"} />;
      })}
      {styleParagraph.map((name, i) => {
        return <EditorItems key={i} name={name} type={"paragraph"} />;
      })}
    </div>
  );
};

export default Editor;
