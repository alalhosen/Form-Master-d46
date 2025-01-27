import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HooKForm from "./components/HookForm/HooKForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFulForm from "./components/StateFulForm/StateFulForm";

function App() {
  const handleSingUpSubmit = data => {
    console.log('sing up data',data);
  };

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  };

  return (
    <>
      <h1>Sing Up & Profile Update Form</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit necessitatibus, ipsa laboriosam ad iusto architecto nobis voluptatibus perferendis. Itaque in minus quas veritatis facilis voluptas perferendis magnam dolore. Maxime.
      Nemo, totam officia quos omnis quaerat molestias cumque ipsum. Magnam debitis adipisci optio ex est repudiandae ratione eum facilis dolore eius iusto accusantium, sunt deserunt praesentium reprehenderit inventore molestiae doloremque.
      Natus modi sit tempore repellendus beatae facere, eaque praesentium itaque quisquam omnis delectus nobis voluptates vero totam maiores assumenda? Quaerat fugit quas tenetur fuga quod pariatur quis deleniti cupiditate maxime!
    </h3>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HooKForm></HooKForm> */}
      <ReusableForm
        formTitle={"Sing Up"}
        handleSubmit={handleSingUpSubmit}
      ></ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"
      ></ReusableForm>
    </>
  );
}

export default App;
