const Dropdown = ({ options, setSelected, setOptions }) => {
  // de-structed all props above
  
  // on a dropdown item is clicked
  const dropDownItemClick = (item) => {
    setOptions([]);
    setSelected(item);
  };

  return (
    <>
      <div className="dropdown">
        {options.map((item, i) => (
          <div
            onClick={() => dropDownItemClick(item)}
            className="dropdown-item"
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
