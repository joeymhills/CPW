import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
const Contact = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }

    } = useForm();

    const onSubmit = async (data) => {
        const { firstName, lastName, email, phoneNumber, comments } = data;

        try {
            const templateParams = {
                firstName,
                lastName,
                email,
                phoneNumber,
                comments    
            };

            await emailjs.send(
                'service_q3kgjcn',
                'template_ikbszez',
                templateParams,
                'zBHrR_3ku4rNGtYrz'
            );
            reset();}
        
        catch (e) {
        console.log(e)}
        }
    

    return (
    <div className="contact-page">
        <div className="contact-title">
            <a>Get a Fast Quote</a>
        </div>
        <div className = "contact-form-div">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input type="text"
                name = "firstName" 
                placeholder="First name" 
                {...register('firstName', {required: true})} />

                <input type="text" name = "lastName"
                placeholder="Last name"
                {...register('lastName', {required: true})} />

                <input type="email" name= "email" 
                placeholder="Email"
                {...register('email', {required: true})} />

                <input type="phone" name = "phoneNumber"
                placeholder="Phone number"
                {...register('phoneNumber', {required: true})} />

                <textarea rows="4" name = "comments" placeholder="How can we help you?"
                {...register('comments', {required: true})}
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
    };

export default Contact