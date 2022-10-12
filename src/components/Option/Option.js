import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <div>
        <input type="radio" value="Male" name="gender" /> {option}
      </div>
    </div>
  );
};

export default Option;
