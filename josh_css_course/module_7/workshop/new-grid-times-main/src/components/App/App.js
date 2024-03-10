import React from "react";

import Header from "../Header";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Footer from "../Footer";
import Spacer from "../Spacer";
import MainStoryGrid from "../MainStoryGrid";
import SpecialtyStoryGrid from "../SpecialtyStoryGrid";

const App = () => {
  return (
    <>
      <Header />
      <MaxWidthWrapper style={{ border: "3px dashed purple" }} as="main">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </MaxWidthWrapper>
      <Spacer size={64} />
      <Footer />
    </>
  );
};

export default App;
