function Header() {
    return <h1>This is the Header</h1>;
}

function Footer() {
    return <h3>This is the Footer</h3>;
}

function MainContent() {
    return (
        <>
            <Header />
            <p>Main Content is Here.....</p>
            <Footer />
        </>
    )
}
export default MainContent;