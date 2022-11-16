/*
  keyboard event
*/
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

import CustomHooks from "./hooks/CustomHooks";

import "./App.css";

// useState isn't used on this page because we aren't using a built in hook here. It's just the CustomHooks imported from the folder

const teamData = [
  {
    name: "Liquid",
  },
  {
    name: "Panda",
  },
  {
    name: "TSM",
  },
];

function App() {
  // const [team, setTeam] = useState(teamData);
  // const items = CustomHooks(teamData);

  // the definition of these variables depends on what comes back from the CustomHooks. The team data is sent in, and the hooks on that file will update the state of the application for this file to render.
  const {
    team,
    updateInput,
    addNewTeam,
    edit,
    handleSetEdit,
    input,
    setInput,
  } = CustomHooks(teamData);


  // This handles the form at the top. Prevent default page refresh, use addNewTeam from the customHook to change state, and reset the form's input to an empty string.
  function handleOnSubmit(event) {
    event.preventDefault();

    addNewTeam(input);
    setInput("");
  }

  // This handles functionality for each delete button on the list. removeTeam from the customHook to change state.
 

  // This handles double clicking the text for the items, which uses conditional rendering to change the span element into an input element.
  function handleDoubleClick() {
    handleSetEdit();
  }

  // If the team is an input element, this allows you to press Enter to update the team name.
  function handleOnKeypress(event, index) {
    //console.dir(event);
    if (event.key === "Enter") {
      handleSetEdit();
      updateInput(index, event.target.value);
    }
  }


  // blue names are the names of the props. Yellow are the functions being passed into the Form component as a prop.
  return (
    <div className="App">
      <Form handleOnSubmit={handleOnSubmit} input={input} setInput={setInput} />

      <List
        team={team}
        edit={edit}
        handleDoubleClick={handleDoubleClick}
        handleOnKeypress={handleOnKeypress}
      />
    </div>
  );
}

export default App;