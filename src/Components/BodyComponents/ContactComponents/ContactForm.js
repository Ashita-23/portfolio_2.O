
import { useState } from "react"
import emailjs from '@emailjs/browser';
import "./ContactForm.css"
import "./CFMedia.css"
import Contactus from "../../../Assets/Component_images//Contactus.gif"


const Contact = ()=>{

    const initialForm ={senderName: " ", senderEmail: " ", senderText: " "}
const [form,setForm] = useState(initialForm)
const [formErrors,setFormErrors] = useState({})
const [sendAlert , setSendAlert] = useState(false)
// console.log(form,"form")

const InputHandler = (e)=>{
    // console.log(e.target.value,"inputValue")
    const {name,value} = e.target;
    // console.log(name,value)
    setForm({...form,[name]:value})

}
const OnSubmitAction = (e)=>{
    e.preventDefault()
    setFormErrors(FormValidation(form))
    if(form.senderName !== " " || form.senderEmail !== " "){
        SendEmail()
        setSendAlert(true)
       
    }
}
const FormValidation = (value)=>{
   const errors = {}
   const EmailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ ;
   if(value.senderName === " "){
    errors.senderName = " Name is required!"
   }
   if(value.senderEmail === " "){
    errors.senderEmail = " Email is required!"
   }else if (!EmailRegex.test(value.senderEmail)){
    errors.senderEmail = "please enter valid  email!"
   }
//    console.log(value,"VFV")
 return errors
 
}
 const SendEmail = ()=>{
    const service_id = 'service_gdformq' ;
    const template_id = 'template_oghlhvp' ;
    const service_key = 'tRw-z6Tp23s-j136g' ;
 
    const FormsData = {
        user_name : form.senderName,
        user_email : form.senderEmail ,
        message : form.senderText,
    }
    emailjs.send(service_id, template_id , FormsData, service_key)
    .then((result) => {
        // alert("Thank you!")
    }, (error) => {
        console.log(error.text);
    });
}

    return(<>
        <div className="contact-outer" id="contact" >
            <div className="contact-inner" >
                <form action="" className="form" onSubmit={OnSubmitAction}>
            <h1 className="form-heding">Get in touch  </h1>
                    <p className={sendAlert ? "showAlert":" showAlert hideAlert"}>Thank you ! {form.senderName} I will contact you asa posible.</p>
                    <lable className="lable">Name</lable>
                        <input type="text" className="input-text"  name="senderName" value={form.senderName} onChange={(e)=>InputHandler(e)} />
                        <p className="form-error">{formErrors.senderName}</p>
                    <lable className="lable">E-Mail</lable>
                        <input type="email" className="input-text"  name="senderEmail" value={form.senderEmail} onChange={(e)=>InputHandler(e)} />
                        <p className="form-error">{formErrors.senderEmail}</p>
                           
                    <lable className="lable">Message</lable>
                        <textarea type="text" className="input-textarea" placeholder="Type some thing ....." name="senderText" value={form.senderText} onChange={(e)=>InputHandler(e)} />
                
                    {/* <lable className="lable">Send</lable> */}
                        <input type="submit" className="input-submit"/>
                </form>
                    <figure className="contact-image-outer">
                        <img src={ Contactus } alt="contact" className="contact-image" />
                        <div className="form-btn-group">
            <button className="home-btn">
           <a href="https://github.com/Ashita-23" target="blank"><i className="fa-brands fa-github home-btns"></i></a></button> 
            <button className="home-btn">
           <a href="https://www.linkedin.com/in/ashita-kr/" target="blank"> <i className="fa-brands fa-linkedin-in home-btns"></i></a></button>
            </div>

                    </figure>
            </div>
        </div>
    </>)
}

export default Contact
