function FunctionEvent() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      Funcctional components
      <br />
      <button onClick={handleClick}>Click here</button>
    </>
  );
}

export default FunctionEvent;
