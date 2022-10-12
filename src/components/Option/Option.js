import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <li className="list-group-item p-2 border">
        <input
          className="form-check-input me-1"
          type="radio"
          name="listGroupRadio"
          value=""
          id="firstRadio"
          checked=""
        />
        <label className="form-check-label" for="firstRadio">
          {option}
        </label>
      </li>
    </div>
  );
};

export default Option;
