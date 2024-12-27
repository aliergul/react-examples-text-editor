const EditorItems = ({ name }) => {
  const changeText = () => {
    const editor = document.getElementById("textarea");

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if (!selection.isCollapsed) {
      const boldText = document.createElement("strong");
      range.surroundContents(boldText);
      editor.focus();
    }
  };

  return (
    <>
      <button className="editor-buttons" onClick={changeText}>
        {name}
      </button>
    </>
  );
};

export default EditorItems;
