import miniLogo from "../cpw-mini.jpeg"

let Footer = () => {
    return(
        <div className="footer">
            <div className="footer-text">
                <div>
                    <img src={miniLogo} />
                </div>
                <div>
                    <a>Copyright 2023 Coastal Pressure Washing LLC.</a>
                </div>
            </div>
        </div>
    );
}

export default Footer