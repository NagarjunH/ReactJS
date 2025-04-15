function Loop() {
    const names = ["Nagarjun", "Suama"];
    return (
        <ul>
            {names.map((name, index) => {
                return <li key={index}>{name}</li>
            })}
        </ul>
    );
}

export default Loop;