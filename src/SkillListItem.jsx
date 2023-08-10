import "./SkillListItem.css"

export default function SkillListItem({ skill }) {
    return (
        <li className="SkillListItem">
            {skill.name} Level: {skill.level}
        </li>
    );
}