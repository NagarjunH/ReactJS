// ? Simple Event Handle

function Handle() {
    function handleClick() {
        alert("Button clicked !")
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}
export default Handle;


// ? Passing parameters to Event Handlers
