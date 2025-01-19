import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState('Rojoni Klanto');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="Email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password" required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateFulForm;
