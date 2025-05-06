// ? Simple Event Handle

// function Handle() {
//     function handleClick() {
//         alert("Button clicked !")
//     }

//     return (
//         <>
//             <button onClick={handleClick}>Click Me</button>
//         </>
//     )
// }
// export default Handle;


// ? Passing parameters to Event Handlers

function HandleParameters() {
    function sayHello(userName) {
        alert("Hello, " + userName);
    }
    return (
        <>
            <button onClick={() => sayHello("Nagarjun")}>Click Me</button>
        </>
    )
}

export default HandleParameters;


// ? Prevent Default Behaviour

export function FormSubmit(){
    function handleSubmit(e){
        e.preventDefault();
        alert("Form Submitted !")
    }
    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}