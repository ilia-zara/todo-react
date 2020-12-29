import React from "react";
import Button from "../button/Button.js";

const RenderStat = ({ title, count }) => (
  <React.Fragment>
    <h2>
      {title}: {count}
    </h2>
    <h2>
      {title}: {count}
    </h2>
    <h2>
      {title}: {count}
    </h2>
    <h2>
      {title}: {count}
    </h2>
    <Button name="Back to todo list" />
  </React.Fragment>
);
