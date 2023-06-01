import "./Chip.scss";

const Chip = ({skill}) => {
    return (
        <div className={"chip"}>
            <p>{skill}</p>
        </div>
    );
}

export default Chip;