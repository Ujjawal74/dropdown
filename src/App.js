import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  // total dropdown items
  const ls = ["Yes", "No", "Maybe", "Later"];
  // used for which option is selected
  const [selected, setSelected] = useState(null);
  // all options set in state
  const [options, setOptions] = useState(ls);

  // On mouse enter or hover we setting the options with the list
  // so that it will map dropdown items
  const onMouseEnterHandler = () => {
    setOptions(ls);
    return;
  };

  return (
    <>
      <div className="container">
        <div className="area" onMouseEnter={onMouseEnterHandler}>
          <p>
            {selected
              ? "You Selected: " + selected
              : "Should you use a dropdown?"}
          </p>
          <br />
          <button>Hover Me</button>
          <Dropdown
            options={options}
            setSelected={setSelected}
            setOptions={setOptions}
          />
        </div>
      </div>
    </>
  );
}

export default App;
