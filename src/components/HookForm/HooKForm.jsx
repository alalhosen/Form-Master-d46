import useInputState from "../../hooks/useInputState";

const HooKForm = () => {
// const [name, handleNameChange] = useInputState('Rojoni');
const emailState=useInputState('rojoni@sojoni.go')

  const handleSubmit = e =>{
    console.log('form data', emailState.value)
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="Email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HooKForm;
