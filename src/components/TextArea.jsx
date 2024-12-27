import defaultText from "../utils/defaultText";

const TextArea = () => {
  const text = defaultText;
  return (
    <>
      <div
        id="textarea"
        className="textarea"
        spellCheck="false"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {text}
      </div>
    </>
  );
};

export default TextArea;
