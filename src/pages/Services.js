import fenceImg from '../stockPhotos/fence.jpg'
import patioImg from '../stockPhotos/patio.jpg'
import houseImg from '../stockPhotos/house.jpg'



let Services = () => {
    return (
    <div className="services-page">
        <div className="services-title">
            <a>Powerwashing for All Surfaces</a>
        </div>
        
        <div className="services">
            <div className="services-box">
                <div className ="box houses">
                    <h2>Houses</h2>
                    <img src={houseImg} className="grid-img" />

                    <p>Vinyl siding on your home is one of the main victims of weathering. With our powerwashing system
                        will make it look good as new!
                    </p>

                </div>
                
                <div className="box decks">
                    <h2>Decks & Fences</h2>
                    <img src={fenceImg} className="grid-img fenceImg" />
                    <p>Renew the wood on your deck and make it look brand new</p>
                
                </div>

                <div className="box patios">
                    <h2>Patios & Walkways</h2>
                    <img src={patioImg} className="grid-img" />
                    <p>Concrete can darken with dirt and debris over the years. With powerwashing this
                        is no longer an issue! Renew and brighten your walkway and patio to make your home, or business
                        look so much better.
                    </p>
                </div>
            </div>
        </div>

    </div>
    );
}
export default Services