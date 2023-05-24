

let Contact = () => {
   
    let sendEmail = () => {
    window.Email.send({
        Host : "smtp.gmail.com",
        Username : "joeymhills@gmail.com",
        Password : "Handsome_benny!68",
        To : 'hillsj3@southernct.edu',
        From : "you@isp.com",
        Subject : "You have an inquiry!",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
   }


   
    return (
    <div className="contact-page">
        <div className="contact-title">
            <a>Get a Fast Quote</a>
        </div>
        <div className = "contact-form-div">
            <form netlify>
                <input type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
                <input type="email" placeholder="Email" required />
                <input type="phone" placeholder="Phone number" required />
                <textarea rows="4" placeholder="How can we help you?"></textarea>
                <button onClick ={sendEmail} type="submit">Send</button>
            </form>
        </div>
        </div>
    );
}
export default Contact