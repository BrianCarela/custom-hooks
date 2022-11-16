import { useState } from "react";

function CustomHooks(initialState) {
  const [team, setTeam] = useState(initialState);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

    // so the initial state of this app are the 3 teams. An array of objects, with the name being the only property.
    // Instead of handling things specifically with the component life cycle, this built in hook useState is like an API that will manage those things for us in an intuitive manner. If you have a basic understanding of Javascript, handling the state is a lot like saving simple variables in the virtual DOM. But whenever the state of the app changes, the virtual DOM is updated, the useState handles the component life cycle of React, and the page will be re-rendered for the user.

    // This function basically toggles your ability to edit an item on the list. If you double click the item on the front end, this function is run and changes your ability to edit from true to false, or from false to true. This is set to false by default.
  function handleSetEdit() {
    setEdit((prevState) => {
      return !prevState;
    });
  }

  // This function will set the state to the currently existing team, with a new team added. This way, the state of the app changes, and the page will render based on the current state of the app.
  function addNewTeam(newTeam) {
    setTeam([...team, { name: newTeam }]);
  }

  // This function will filter out whatever item has it's Delete button clicked. The target is passed in using the index, and the filtered array will only keep items who's index does not match the target.
  

  // When editing an item, if the user hits enter, the index of that item and it's new value is passed into this function. The new array with the edited item's index is targeted, and reassigned the new value. setTeam then runs, changing the state > life cycle > rendered
  function updateInput(index, newValue) {
    const newArray = [...team];
    newArray[index].name = newValue;
    setTeam(newArray);
  }


  // Instead of returning DOM elements like a lot of components normally do, we return the state of the team array along with all state-changing functionality
  return {
    team,
    updateInput,
    addNewTeam,
    edit,
    handleSetEdit,
    input,
    setInput,
  };
}

export default CustomHooks;