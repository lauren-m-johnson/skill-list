import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
    return (
        <>
            <ul>
                {skills.map((s, index) => <SkillListItem skill={s} index={index} key={index} />)}
            </ul>
        </>
    );
}