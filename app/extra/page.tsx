"use client";
import { useState } from "react";

const ToggleForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOpen ? "Close Form" : "Open Form"}
      </button>
      {isOpen && (
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ToggleForm;
