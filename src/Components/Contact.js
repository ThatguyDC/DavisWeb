import './Contact.css';


const Contact = () => {

    return (

       <div id = "contact" className = "formContainer"> 
       <div  className = "contactHeader">
       <h1>Contact</h1>
       </div>
        
{
  //MAKE SURE TO VALIDATE THE FORM WHEN POSTED ON ETBD WEB SERVER
  //EXCHANGE RAW EMAIL FOR RANDOM STRING KEY FOUND IN VALIDATION EMAIL
}


       <form target="_blank" action="https://formsubmit.co/cowperd@gmail.com" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="subject">Subject:</label>
  <input type="text" id="subject" name="subject" required />

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="5" required></textarea>
  <button className = "contactButton" name="submit" type="submit" value = "Send"  onclick="this.form.reset();">Send</button>
</form>
<div className = "buttonContainer">

</div>

       </div>
    )
}

export default Contact;

