import "./ContactForm.css"
import "./ContactFormMedia.css"
import ContactMail from "../../../Assets/Component_images/ContactMail.png"

const Contact = ()=>{
    return(<>
        <div className="contact-outer" id="contact" >
            <div className="contact-inner" >
                <form action="" className="form">
            <h1 className="form-heding">Send Your Message </h1>
                    <lable className="lable">Name</lable>
                        <input type="text" className="input-text" placeholder="jhon"/>
       
                    <lable className="lable">E-Mail</lable>
                        <input type="email" className="input-text" placeholder="jhon@gmail.com"/>
              
                    <lable className="lable">Message</lable>
                        <textarea type="text" className="input-textarea" placeholder="Type some thing ....."/>
                
                    <lable className="lable">Send</lable>
                        <input type="submit" className="input-submit" />
                    
                </form>
        
                    <figure className="contact-image-outer">
                        <img src={ContactMail} alt="Contact " className="contact-image" />
                    </figure>
               
            </div>
        </div>
    </>)
}

export default Contact