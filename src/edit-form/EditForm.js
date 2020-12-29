import React from "react";
import Button from "../button/Button.js";

const EditForm = () => (
  <React.Fragment>
    <h1>Create Todo</h1>;
    <div className="Editor-form">
      <form>
        <input type="text" name="text" className="Form-input" />
        <div className="Form-buttons">
          <Button name="Add" />
          <Button name="Clear" />
        </div>
      </form>
    </div>
  </React.Fragment>
);

export default EditForm;
