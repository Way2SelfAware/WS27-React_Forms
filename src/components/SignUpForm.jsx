import { useState } from "react";

//SignUpForm
export default function SignUpForm({setToken}) {
  //State Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  //Handling the Submit
  async function handleSubmit(event) {
    event.preventDefault();
    //fetchAPI
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  //Return Statement
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <button>Submit</button>
        </label>
      </form>
    </>
  );
}
