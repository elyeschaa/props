import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const handlname = (Fullname) => alert(Fullname);
  return (
    <div className="App">
      <Profile
        Fullname="elyes"
        Bio="Student"
        Profession="student"
        handlname={handlname}
      />
    </div>
  );
}

export default App;
