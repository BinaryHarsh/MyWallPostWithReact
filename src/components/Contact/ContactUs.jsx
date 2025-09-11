import React from 'react'
import './ContactUs.css'

function ContactUs (){
  return (
     <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow">
                <img
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxjYWxsfGVufDB8MHx8fDE3MjEwMzg4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  className="img-fluid"
                  alt="Contact"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2">
                        <span>SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                          alt="Address"
                        />
                      </div>
                      <div>
                        <h6 className="font-weight-medium">Address</h6>
                        <p>
                          Rotha Road Meerut.
                          <br /> San Bernandino
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                          alt="Phone"
                        />
                      </div>
                      <div>
                        <h6 className="font-weight-medium">Phone</h6>
                        <p>
                          9675988914
                          <br />9310891024
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                          alt="Email"
                        />
                      </div>
                      <div>
                        <h6 className="font-weight-medium">Email</h6>
                        <p>
                          mywallposts01@gmail.com
                          <br /> gautamsmarty2003@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
   
  )
}

export default ContactUs