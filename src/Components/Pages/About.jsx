import React from "react";
import Navbar from "../Layout/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container text-white">
        <div className="py-4">
          <h1>About Page</h1>
          <p className="lead">
            Create, Read, Update, Delete When we are building APIs, we want our
            models to provide four basic types of functionality. The model must
            be able to Create, Read, Update, and Delete resources. Computer
            scientists often refer to these functions by the acronym CRUD. A
            model should have the ability to perform at most these four
            functions in order to be complete. If an action cannot be described
            by one of these four operations, then it should potentially be a
            model of its own. The CRUD paradigm is common in constructing web
            applications, because it provides a memorable framework for
            reminding developers of how to construct full, usable models. For
            example, let’s imagine a system to keep track of library books. In
            this hypothetical library database, we can imagine that there would
            be a books resource, which would store book objects.
          </p>
          <p className="lead">
            It enhances user experience and is very easy to use and beginner
            friendly.
          </p>
          <p className="lead">This Project is Developed by Anirudh Panda.</p>
        </div>
      </div>
    </>
  );
};

export default About;
