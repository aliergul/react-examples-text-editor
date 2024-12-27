import defaultText from "../utils/defaultText";

const TextArea = () => {
  const text = defaultText;
  return (
    <>
      <div
        id="textarea"
        className="textarea"
        //defaultValue={defaultText}
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
