import { useContext, useEffect } from "react";
import defaultText from "../utils/defaultText";
import MainContext from "./MainContext";

const TextArea = () => {
  const { setSelectedText } = useContext(MainContext);

  useEffect(() => {
    document.querySelector(".textarea").addEventListener("select", (e) => {
      setSelectedText(
        e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
      );
    });
  }, []); //eslint-disable-line

  return (
    <>
      <textarea
        className="textarea"
        defaultValue={defaultText}
        spellCheck="false"
      />
    </>
  );
};

export default TextArea;
