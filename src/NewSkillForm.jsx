import { useState } from "react";
import "./NewSkillForm.css"



export default function NewSkillForm({ addSkill }) {
    const initialSkill = {
        name: "",
        level: 3
    };

    const [newSkill, setNewSkill] = useState(initialSkill);

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(newSkill);
        setNewSkill(initialSkill);
    }

    function handleChange(evt) {
        const newSkillData = { ...newSkill, [evt.target.name]: evt.target.value };
        setNewSkill(newSkillData);
    }

    return (
        <>
            <form onSubmit={handleAddSkill} className="NewSkillForm">
                <label htmlFor="input">Skill</label>
                <input 
                type="text" 
                name="name"
                value={newSkill.name}
                onChange={handleChange}
                placeholder="New Skill"
                >
                </input>
                <label htmlFor="select">Level</label>
                <select 
                id="select" 
                name="level"
                value={newSkill.level}
                onChange={handleChange}
                placeholder="3"
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </form>
        </>
    );
}