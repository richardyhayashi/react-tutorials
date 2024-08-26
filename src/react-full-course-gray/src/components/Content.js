const Content = () => {
  const handleNameChange = () => {
    const names = ["Peter", "Paul", "Mary"];
    const i = Math.floor(Math.random() * 3);
    return names[i];
  }

  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
    </main>
  );
};

export default Content;