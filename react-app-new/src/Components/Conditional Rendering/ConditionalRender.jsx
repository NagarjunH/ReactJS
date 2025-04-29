function ConditionalRender({isLoggedIn}) {
    return (
        <>
            <h2>Login Status</h2>
            <p>
                {isLoggedIn ? "Welcome User !" : "Please login to continue"}
            </p>
        </>
    )
}
export default ConditionalRender;
