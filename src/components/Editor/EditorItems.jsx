const EditorItems = ({ type, label, value }) => {
  const changeText = () => {
    //const editor = document.getElementById("textarea");
    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);

      const startContainer = range.startContainer;
      const endContainer = range.endContainer;

      const isStyled = (node) =>
        node.nodeType === Node.ELEMENT_NODE
          ? node.closest(value) !== null
          : node.parentElement.closest(value) !== null;

      const hasStartStyled = isStyled(startContainer);
      const hasEndStyled = isStyled(endContainer);

      if (hasStartStyled && hasEndStyled) {
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

          cleanEmptyTags(parent, value);
        }
      } else {
        const styledText = document.createElement(value);

        const fragment = range.extractContents();
        Array.from(fragment.childNodes).forEach((child) => {
          if (
            child.nodeType === Node.ELEMENT_NODE &&
            child.tagName.toLowerCase() === value
          ) {
            while (child.firstChild) {
              styledText.appendChild(child.firstChild);
            }
          } else {
            styledText.appendChild(child);
          }
        });

        range.insertNode(styledText);
        selection.removeAllRanges();
        // editor.focus();
      }
    }
  };

  const cleanEmptyTags = (parent, tagName) => {
    const emptyTags = parent.querySelectorAll(`${tagName}:empty`);
    emptyTags.forEach((tag) => tag.remove());
  };

  const changeParagraph = () => {
    document.getElementById("textarea").style.textAlign = value;
  };

  return (
    <>
      <button
        className="editor-buttons"
        onClick={type === "text" ? changeText : changeParagraph}
      >
        {label}
      </button>
    </>
  );
};

export default EditorItems;
