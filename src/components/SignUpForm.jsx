import { useState } from "react";

//SignUpForm
export default function SignUpForm() {
  //State Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, serError] = useState(null);

//Handling the Submit
async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello!");
}

//Return Statement
  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <label>
          <button >Submit</button>
        </label>
      </form>
    </>
  );
}
