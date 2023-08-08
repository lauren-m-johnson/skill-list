import './App.css'
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  );
}


