const SimpleForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.Email.value);
    console.log(e.target.phone.value);
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"name="name" />
        <br/>
        <input type="email" name="Email" id="" />
        <br/>
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
