import React, { useEffect } from "react";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {}, [isDarkMode]);

  return (
    <div className="toggle-container">
      <span>Light</span>
      <label htmlFor="toggle" className="toggle-wrapper">
        <div className={`toggle ${isDarkMode ? "enabled" : "disabled"}`}>
          <span className="hidden">{isDarkMode ? "Disable" : "Enable"}</span>
          <input
            type="checkbox"
            id="toggle"
            name="toggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </label>
      <span>Dark</span>
    </div>
  );
};

export default ThemeToggle;
