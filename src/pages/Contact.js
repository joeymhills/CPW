

let Contact = () => {
      
    return (
    <div className="contact-page">
        <div className="contact-title">
            <a>Get a Fast Quote</a>
        </div>
        <div name= "contact v1" onSubmit="submit" className = "contact-form-div" method="post" data-netlify="true" >
            <form netlify>
                <input type="hidden" name = "first-name" placeholder="First name" required />
                <input type="text" name = "last-name" placeholder="Last name" required />
                <input type="email" name= "email" placeholder="Email" />
                <input type="phone" name = "phone" placeholder="Phone number" />
                <textarea rows="4" name = "comments" placeholder="How can we help you?"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
}
export default Contact