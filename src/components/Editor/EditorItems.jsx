const EditorItems = ({ type, label, value }) => {
  const changeText = () => {
    const editor = document.getElementById("textarea");
    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const boldText = document.createElement(value);
      range.surroundContents(boldText);

      range.setStartAfter(boldText);
      range.setEndAfter(boldText);
      selection.removeAllRanges();
      selection.addRange(range);
      editor.focus();
    }
  };

  const changeParagrapgh = () => {
    document.getElementById("textarea").style.textAlign = value;
  };

  return (
    <>
      <button
        className="editor-buttons"
        onClick={type === "text" ? changeText : changeParagrapgh}
      >
        {label}
      </button>
    </>
  );
};

export default EditorItems;
