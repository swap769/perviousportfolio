import './App.css';
import Home from "./Components/Home";
import List from "./Components/List";
import Project from './Components/Project';
import Profile from "./Components/Porfile";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      <Home />
      <List />
      <Project />
      <Profile />
      <Contact />
    </div>
  );
}

export default App;