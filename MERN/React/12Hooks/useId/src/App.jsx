import React, { useId } from "react";

const App = () => {
  const emailId = useId();
  const passwordId = useId();
  console.log(emailId);
  console.log(passwordId);

  return (
    <>
      <label htmlFor={emailId}>Email</label>
      <input id={emailId} type="email" />

      <label htmlFor={passwordId}>Password</label>
      <input id={passwordId} type="password" />
    </>
  );
};

export default App;
