const Content = () => {
  const handleNameChange = () => {
    const names = ["Peter", "Paul", "Mary"];
    const i = Math.floor(Math.random() * 3);
    return names[i];
  }

  const handleClick = () => {
    console.log('You clicked?');
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Richard')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;