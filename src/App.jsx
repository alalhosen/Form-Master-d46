import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HooKForm from "./components/HookForm/HooKForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFulForm from "./components/StateFulForm/StateFulForm";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sign up data", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("update profile", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
        necessitatibus, ipsa laboriosam ad iusto architecto nobis voluptatibus
        perferendis. Itaque in minus quas veritatis facilis voluptas perferendis
        magnam dolore. Maxime. Nemo, totam officia quos omnis quaerat molestias
        cumque ipsum. Magnam debitis adipisci optio ex est repudiandae ratione
        eum facilis dolore eius iusto accusantium, sunt deserunt praesentium
        reprehenderit inventore molestiae doloremque. Natus modi sit tempore
        repellendus beatae facere, eaque praesentium itaque quisquam omnis
        delectus nobis voluptates vero totam maiores assumenda? Quaerat fugit
        quas tenetur fuga quod pariatur quis deleniti cupiditate maxime!
      </h3> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HooKForm></HooKForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update">
          <div>
            <h2>Profile Update</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm> */}
    </>
  );
}

export default App;
