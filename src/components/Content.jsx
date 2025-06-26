import Part from "./Part";

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part}></Part>)}
        </div>
    )
}

export default Content;