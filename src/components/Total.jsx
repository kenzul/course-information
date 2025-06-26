const Total = ({ parts }) => {
    const total = parts.reduce((accum, current) => accum + current.exercises, 0);
    return <p><strong>total of {total} exercises</strong></p>
}

export default Total;