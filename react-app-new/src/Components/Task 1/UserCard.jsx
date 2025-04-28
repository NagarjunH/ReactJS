// ! 🧪 Challenge:
// ✅ Ek UserCard naam ka Component banao.
// ✅ Ye props lega: name, age, aur city.
// ✅ JSX mein ye props display kare.

// export function UserCard(props) {
//     return (
//         <>
//             <h2>Name : {props.name}</h2>
//             <h3>Age : {props.age}</h3>
//             <h4>City : {props.city}</h4>
//         </>
//     )
// }

// * Method 2 Destructure kareke likhana

export function UserCard({ name, age, city }) {
    return (
        <>
            <h2>Name : {name}</h2>
            <h3>Age : {age}</h3>
            <h4>City : {city}</h4>
        </>
    )
}