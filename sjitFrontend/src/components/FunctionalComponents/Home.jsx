function Home(x){
    var styling ={
        textAlign: 'center',
        color: 'green',
        backgroundColor: 'black',
    }
    var a=10;
    return(
        <div>
        <h1 style={styling}>Home Page  </h1>
        <h2>prop tag</h2>
        <h3>

           {x.prop} {x.name}

        </h3>
        </div>
    )
}
export default Home