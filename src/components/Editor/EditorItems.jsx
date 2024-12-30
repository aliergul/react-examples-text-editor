const EditorItems = ({ type, label, value }) => {
  const changeText = () => {
    const editor = document.getElementById("textarea");
    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);

      const startContainer = range.startContainer;
      const endContainer = range.endContainer;

      const hasStart =
        startContainer.nodeType === Node.ELEMENT_NODE
          ? startContainer.closest(value) !== null
          : startContainer.parentElement.closest(value) !== null;

      const hasEnd =
        endContainer.nodeType === Node.ELEMENT_NODE
          ? endContainer.closest(value) !== null
          : endContainer.parentElement.closest(value) !== null;

      const alreadyStyled = hasStart && hasEnd;

      if (alreadyStyled) {
        const ancestor = range.commonAncestorContainer;
        const targetElement =
          ancestor.nodeType === Node.ELEMENT_NODE
            ? ancestor.closest(value)
            : ancestor.parentElement.closest(value);

        if (targetElement) {
          const parent = targetElement.parentNode;

          while (targetElement.firstChild) {
            parent.insertBefore(targetElement.firstChild, targetElement);
          }

          parent.removeChild(targetElement);
        }
      } else {
        const styledText = document.createElement(value);
        range.surroundContents(styledText);

        range.setStartAfter(styledText);
        range.setEndAfter(styledText);
        selection.removeAllRanges();
        selection.addRange(range);
        editor.focus();
      }
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
