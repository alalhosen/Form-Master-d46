import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState("Rojoni Klanto");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmailChange} type="email" name="Email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {
          error && <p>{error}</p>
        }
      </div>
    </div>
  );
};

export default StateFulForm;

 