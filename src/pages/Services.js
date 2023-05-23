import fenceImg from '../stockPhotos/fence.png'
import walkwayImg from '../stockPhotos/paving.png'
import houseImg from '../stockPhotos/house.png'
import patioImg from '../stockPhotos/patio.png'
import deckImg from '../stockPhotos/deck-icon.png'



let Services = () => {
    return (
    <div className="services-page">
        <div className="services-title">
            <a>We Clean It All!</a>
        </div>
        
        <div className="services">
            <div className="services-box">
                <div> 
                    <div className ="box houses">
                        <img src={houseImg} className="grid-img" />
                    </div>
                    <div className="box-title">
                        <h2>Houses</h2>
                    </div>
                </div>
                
                <div>
                    <div className="box decks">
                        <img src={fenceImg} className="grid-img fenceImg" />
                    </div>
                    <div className="box-title">
                        <h2>Fences</h2>
                    </div>
                </div>

                <div>
                    <div className="box patios">
                        <img src={patioImg} className="patio-img" />
                    </div>
                    <div className="box-title">
                        <h2>Patios</h2>
                    </div>
                </div>


                <div>
                    <div className="box walkways">
                        <img src={walkwayImg} className="grid-img" />
                    </div>
                    <div className="box-title">
                        <h2>Walkways</h2>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
  );
}
export default Services