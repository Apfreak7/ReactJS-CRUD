import React from "react";
import Navbar from "../Layout/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container text-white">
        <div className="py-4" style={{ width: "100%" }}>
          <h1>Contact Page</h1>
          <form>
            <div class="form-group" style={{ lineHeight: "4" }}>
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group" style={{ lineHeight: "4" }}>
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
          <button type="submit" class="btn btn-primary mt-4" >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
