import React from "react";

const ScrollPage = ({ id, children }) => {
  return (
    <div id={id} className="scroll-page">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <a href="#page-1">1</a>
          <a href="#page-2">2</a>
          <a href="#page-3">3</a>
        </nav>
        <div className="scroll-container">
          <ScrollPage id="page-1">1</ScrollPage>
          <ScrollPage id="page-2">2</ScrollPage>
          <ScrollPage id="page-3">3</ScrollPage>
        </div>
      </div>
    </div>
  );
};

export default App;
