import { useState } from "react";

function NameComponent() {
    const [name, setName] = useState("Nagarjun");

    return (
        <>
            <h1>Name : {name}</h1>
            <button onClick={() => setName("Sumati")}>Change Name</button>
        </>
    );
}

export default NameComponent;



// 2nd Example (Form Handling ke sath)

// import { useState } from "react";

export function EditableName() {
    const [name, setName] = useState("Nagarjun");
    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            {editing ? (
                <>
                    <input type="text" value={name} onChange={handleChange} />
                    <button onClick={() => setEditing(false)}>Save</button>
                </>
            ) : (
                <>
                    <h2>Hello, {name}</h2>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </>
            )}
        </div>
    );
}


