import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      const fullNameValue = `${firstName} ${lastName}`;
      setFullName(fullNameValue);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isSubmitted}>
          Submit
        </button>
      </form>
      {isSubmitted && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
