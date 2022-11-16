/*
  adding Delete button
  form
  onSubmit
*/
import React from "react";

// This component manages the input form at the top of the page. If you submit, the text in the input field goes from here, to the default App, into the customHooks.js file to change the state of the app. Once that happens and the virtual DOM is updated, React goes through it's component life cycle and re-renders the page based on the state of the App.

function Form({ handleOnSubmit, setInput, input }) {
  return (
    <div style={{ marginTop: 50 }}>
      <form onSubmit={handleOnSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;