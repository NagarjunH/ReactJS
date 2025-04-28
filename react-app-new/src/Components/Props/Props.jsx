
// ? First way :- Simple way

// export function Props(props) {
//     return (
//         <>
//             <h1>Name : {props.name}</h1>
//             <h1>Age : {props.age}</h1>
//             <h1>City : {props.city}</h1>
//         </>
//     )
// }

// ? Destructuring of props


// export function Props({ name, age, city }) {
//     return (
//         <>
//             <h1>Name : {name}</h1>
//             <h1>Age : {age}</h1>
//             <h1>City : {city}</h1>
//         </>
//     )
// }

// ? Default Props

export function Props({ name = "Nagarjun", age = 25, city = "Nanded" }) {
    return (
        <>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>City : {city}</p>
        </>
    )
}


// Props.defaultProps = {
//     name: "Nagarjun",
//     age: 25,
//     city: "Nanded"
// }