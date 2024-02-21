import React from "react";
import Button from "./Components/Buttons/Button";
import Header from "./Components/Header/Header";
import UfoList from "./Components/UfoList/UfoList";

const App = () => {
  return (
    <>
      <article className='collection'>
        <Header />
        <Button />
        <UfoList />
      </article>
    </>
  );
};

export default App;
