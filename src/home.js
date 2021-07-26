const Home = () => {

    const handleClick = () =>{
        console.log("Hello user");
    }
    const againClick = (name) =>{
        console.log("hey"+ "" + name);
    }
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Login</button>
            <button onClick={() => {
                againClick("sahan")
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;