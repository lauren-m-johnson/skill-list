import "./SkillListItem.css"

export default function SkillListItem({ skill, index }) {
    return (
        <li className="SkillListItem">
            {skill.name} Level: {skill.level}
        </li>
    );
}