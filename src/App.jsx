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
      <h1>Vite + React</h1>
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
