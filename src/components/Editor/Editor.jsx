import EditorItems from "./EditorItems";

const styleText = [
  { label: "Heading 1", value: "h1" },
  { label: "Heading 2", value: "h2" },
  { label: "Heading 3", value: "h3" },
  { label: "Paragraph", value: "p" },
  { label: "Bold", value: "b" },
  { label: "Italic", value: "i" },
  { label: "Strike", value: "strike" },
  { label: "Underline", value: "u" },
];

const styleParagraph = [
  { label: "Left", value: "left" },
  { label: "Center", value: "center" },
  { label: "Right", value: "right" },
  { label: "Justify", value: "justify" },
];

const Editor = () => {
  return (
    <div className="editor">
      {Object.values(styleText).map((style, i) => {
        return (
          <EditorItems
            key={i}
            label={style.label}
            value={style.value}
            type={"text"}
          />
        );
      })}
      {Object.values(styleParagraph).map((style, i) => {
        return (
          <EditorItems
            key={i}
            label={style.label}
            value={style.value}
            type={"paragraph"}
          />
        );
      })}
    </div>
  );
};

export default Editor;
