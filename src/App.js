import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Kaylee Shaw"
        avatar="https://randomuser.me/api/portraits/women/65.jpg"
        online={true}
      />
      <Contact
        name="Alex Wheeler"
        avatar="https://randomuser.me/api/portraits/men/94.jpg"
        online={false}
      />
      <Contact
        name="Salvador Porter"
        avatar="https://randomuser.me/api/portraits/men/21.jpg"
        online={true}
      />
    </div>
  );
}

export default App;