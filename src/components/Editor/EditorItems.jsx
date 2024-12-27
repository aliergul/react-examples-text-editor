const EditorItems = ({ type, name }) => {
  const changeText = () => {
    const editor = document.getElementById("textarea");
    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const boldText = document.createElement("");
      range.surroundContents(boldText);

      range.setStartAfter(boldText);
      range.setEndAfter(boldText);
      selection.removeAllRanges();
      selection.addRange(range);
      editor.focus();
    }
  };

  const changeParagrapgh = () => {
    document.getElementById("textarea").style.textAlign = name;
  };

  return (
    <>
      <button
        className="editor-buttons"
        onClick={type === "text" ? changeText : changeParagrapgh}
      >
        {name}
      </button>
    </>
  );
};

export default EditorItems;
