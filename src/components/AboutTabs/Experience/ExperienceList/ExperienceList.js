import "./ExperienceList.scss";
const ExperienceList = ({items}) => {
    return (
        <div className={"list"}>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={"item"}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceList;