const ReusableForm = ({ formTitle, submitBtnText = "Submit" }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="Email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
