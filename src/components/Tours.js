import Tour from "./Tour";

const Tours= ({tours, deleteTours})=>{

    const handleRefresh=()=>{
        window.location.reload(false);
    }

    if(tours.length<1){
        return(
            <section className="no-tours">
                <h1>No Tours Left</h1>
                <button onClick={handleRefresh}>Refresh</button>
            </section>
        )
    }
    return(
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div className="tours">
                {
                    tours.map((item)=>{
                        return(
                            <Tour key={item.id}
                                id={item.id}
                                name={item.name}
                                info={item.info}
                                image={item.image}
                                price={item.price}
                                deleteTours={deleteTours}/>
                        )
                    })
                }
            </div>
        </section>
    );
};
export default Tours;