import defaultText from "./defaultText";

const TextArea = () => {
  const text = defaultText;

  return (
    <>
      <textarea className="textarea" defaultValue={text} />
    </>
  );
};

export default TextArea;
