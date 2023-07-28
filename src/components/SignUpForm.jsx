import { useState } from "react";

//SignUpForm
export default function SignUpForm() {
  //State Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, serError] = useState(null);

  return (
    <>
      <h2>Sign Up!</h2>
      <form>
        <label>
          Username: <input defaultValue="NoobNuker69" />
        </label>
        <label>
          Password: <input defaultValue="Unique password" />
        </label>
        <label>
          <button>Submit</button>
        </label>
      </form>
    </>
  );
}
