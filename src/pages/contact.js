import React from "react";

function Contact() {
  return (
    <div class="container" style={{marginTop: '100px'}}>
      <div class="row">
          <div class="col">
                <div style={{backgroundRepeat  : 'no-repeat'}}>
                    <img  
                    className="contact-form"  
                    src=" https://kkeydos.com/uploads/contactus//service_image/122351625409597.jpg"
                    alt="Contact Us"  
                  /> 
                  </div>
          </div>
        <div class="col" style={{marginTop: '100px'}}>
          <h2 className="mb-3"> Contact Us</h2>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input className="form-control" type="text" id="name" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input className="form-control" type="email" id="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea className="form-control" id="message" required />
              </div>
              <button className="btn btn-info" type="submit" >
                Submit
              </button>
            </form>
        </div>
      </div>
      
    </div>
   
  );
}

export default Contact;