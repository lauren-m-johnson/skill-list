import "./NewSkillForm.css"

export default function NewSkillForm() {
    return (
        <>
            <form action="" className="NewSkillForm">
                <label htmlFor="input">Skill</label>
                <input type="text" id="input"></input>
                <label htmlFor="select">Level</label>
                <select id="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button>ADD SKILL</button>
            </form>
        </>
    );
}