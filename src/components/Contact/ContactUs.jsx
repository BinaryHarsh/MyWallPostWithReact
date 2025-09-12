import React, { useRef, useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzAdRt_59T3-E6pjrcKawYDq-9Wly8V_ZZK1rhHQSKiZ3wGe4Zx5kfCflmMbnMf8yad/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then(() => {
        setMessage(
          '<div class="alert alert-success" role="alert">Thank you! Your form has been submitted successfully.</div>'
        );
        formRef.current.reset();
      })
      .catch((error) => {
        setMessage(
          '<div class="alert alert-danger" role="alert">Error submitting form. Please try again.</div>'
        );
        console.error("Error!", error.message);
      });
  };

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
                <form
                  ref={formRef}
                  name="submit-to-google-sheet"
                  className="mt-4"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                      >
                        <span>SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
                {/* Show response here */}
                <div
                  id="form-response"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              </div>
            </div>

            {/* Contact Info Section (same as before) */}
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
            {/* End Contact Info */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;