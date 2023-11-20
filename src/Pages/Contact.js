import React, { useState } from "react";

const Contact = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const firstNameChangeHandler = (event) => {
    setFName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      firstName: fName,
      Lastname: lName,
    };
    console.log(formData);

    setFName("");
    setLName("");
  };

  return (
    <main className="md:-mx-3 mt-36">
      <div className="container mx-auto">
        <h1 className="text-center text-6xl font-bold mb-36">Contact</h1>

        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <label className="block mb-1">First Name</label>
            <input
              onChange={firstNameChangeHandler}
              value={fName}
              type="text"
              className="form-control block bg-white w-1/3 border p-4"
              placeholder="First Name"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1">Last Name</label>
            <input
              onChange={lastNameChangeHandler}
              value={lName}
              type="text"
              className="form-control block bg-white w-1/3 border p-4"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="bg-blue-600 text-white text-base p-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
