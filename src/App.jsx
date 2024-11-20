import { useState } from "React";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Didem");
  const [lastname, setLastName] = useState("Kayacı");
  return (
    <div>
      <div> {"firstname"} </div>
      <div> button onClick={setFirstName("Ayşe")}</div>
    </div>
  );
}

export default App;
