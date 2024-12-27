const EditorItems = ({ name }) => {
  console.log("name", name);
  return (
    <>
      <button className="editor-buttons">{name}</button>
    </>
  );
};

export default EditorItems;
