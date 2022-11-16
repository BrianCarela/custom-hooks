/*
  adding Delete button
  form
  onSubmit
*/
import React from "react";

// This component manages the ability to render the list on the page. Team is passed in, and we use team.map to map over the array and display a span element and a button for each item in the array.
// Because of conditional rendering, if edit is set to True, it will display an input where you can edit the team name, and there is a function to handle pressing the Enter key. If edit is set to false (default) it will simply display a span with a function that handles the double click.
// The delete button takes advantage of the index so that when you click the delete button, it always knows which item should be deleted from the team array.
function List({
  team,
  edit,
  handleDoubleClick,
  handleOnKeypress,
}) {
  return (
    <div style={{ marginTop: 50 }}>
      {team.map((team, index) => (
        <div key={index} style={{ marginTop: "25px" }}>
          {edit ? (
            <input
              type="text"
              defaultValue={team.name}
              onKeyPress={(e) => handleOnKeypress(e, index)}
            />
          ) : (
            <span onDoubleClick={handleDoubleClick}>{team.name}</span>
          )}

          
        </div>
      ))}
    </div>
  );
}

export default List;