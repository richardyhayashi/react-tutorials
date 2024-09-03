const ColorDisplay = ({
  colorValue = "Empty color value",
  hexValue,
  isDarkText,
}) => {
  return (
    <section
      id="colorDisplay"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff"
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default ColorDisplay;
