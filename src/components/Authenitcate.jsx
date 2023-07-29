import { useState } from "react";

//Authenticate
export default function Authenitcate({ token }) {
  //useStates
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  //Async handleClick
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      <h2>Authenitcate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
