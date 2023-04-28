import React from "react";

function Signup() {
  return (
    <div class="container" style={{marginTop: '100px'}}>
      <div class="row">
          <div class="col">
                <div style={{backgroundRepeat  : 'no-repeat',height:'590px'}}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"  />
                  </div>
          </div>
        <div class="col" style={{marginTop: '100px'}}>
          <h2 className="mb-3"> Sign in</h2>
            <form>
              
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input className="form-control" type="email" id="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password" >
                  Password
                </label>
                <input className="form-control" type='password' required/>
              </div>
              <button className="btn btn-info" type="submit" >
                Sign in
              </button>
              <div className='text-center text-md-start mt-4 pt-2'>
                    
                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                </div>
            </form>
        </div>
      </div>
      
    </div>
   
  );
}

export default Signup;