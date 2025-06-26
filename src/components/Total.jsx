const Total = ({ parts }) => {
    const total = parts.reduce((accum, current) => accum + current.exercises, 0);
    return <p>{total}</p>
}

export default Total;