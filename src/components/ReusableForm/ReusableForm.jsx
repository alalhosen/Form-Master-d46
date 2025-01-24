const ReusableForm = () => {

const handleSubmit = e =>{
    e. preventDefault();
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="Email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReusableForm;
