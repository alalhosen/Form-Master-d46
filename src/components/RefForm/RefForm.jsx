const RefForm = () => {

    const nameRef=useRef(null);

    const handleSubmit=e=>{
        e.preventDefault();
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input type="email" name="Email" id="" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
