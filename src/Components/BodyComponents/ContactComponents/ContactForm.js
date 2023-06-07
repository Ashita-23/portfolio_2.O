import "./ContactForm.css"
import "./ContactFormMedia.css"
import ContactMail from "../../../Assets/Component_images/ContactMail.png"
import { useState } from "react"

const Contact = ()=>{

    const initialForm ={senderName: " ", senderEmail: " ", senderText: " "}
const [form,setForm] = useState(initialForm)
const [formErrors,setFormErrors] = useState(initialForm)
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
   console.log(value,"VFV")
 return errors
}

    return(<>
        <div className="contact-outer" id="contact" >
            <div className="contact-inner" >
                <form action="" className="form" onSubmit={OnSubmitAction}>
            <h1 className="form-heding">Send Your Message </h1>
                    <lable className="lable">Name</lable>
                        <input type="text" className="input-text" placeholder="jhon" name="senderName" value={form.senderName} onChange={(e)=>InputHandler(e)} />
                        <p className="form-error">{formErrors.senderName}</p>
                    <lable className="lable">E-Mail</lable>
                        <input type="email" className="input-text" placeholder="jhon@gmail.com" name="senderEmail" value={form.senderEmail} onChange={(e)=>InputHandler(e)} />
                        <p className="form-error">{formErrors.senderEmail}</p>
                           
                    <lable className="lable">Message</lable>
                        <textarea type="text" className="input-textarea" placeholder="Type some thing ....." name="senderText" value={form.senderText} onChange={(e)=>InputHandler(e)} />
                
                    <lable className="lable">Send</lable>
                        <input type="submit" className="input-submit" />
                    
                </form>
        
                    <figure className="contact-image-outer">
                        <img src={ContactMail} alt="contact" className="contact-image" />
                    </figure>
               
            </div>
        </div>
    </>)
}

export default Contact