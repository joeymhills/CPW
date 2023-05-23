

let Contact = () => {
    return (
    <div className="contact-page">
        <div className="contact-title">
            <a>Get a Fast Quote</a>
        </div>
        <div className = "contact-form-div">
            <form>
                <input type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
                <input type="email" placeholder="Email" required />
                <input type="phone" placeholder="Phone number" required />
                <textarea rows="4" placeholder="How can we help you?"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
}
export default Contact