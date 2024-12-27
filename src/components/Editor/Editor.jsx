import EditorItems from "./EditorItems";

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
  return (
    <div className="editor">
      {items.map((name, i) => {
        return <EditorItems key={i} name={name} />;
      })}
    </div>
  );
};

export default Editor;
