import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("thanks for contacting us");
    setUserData({
      name: "",
      email: "",
      phone: "",
      desc: "",
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label for="name" className={styles.formlabel}>
            Name
          </label>
          <input
            type="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="enter your name"
            id="name"
            name="name"
          />
        </div>
        <div className={styles.mb3}>
          <label for="email" className={styles.formlabel}>
            Email
          </label>
          <input
            type="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="enter your email"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label for="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="number"
            value={userData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="enter your phone number"
            id="phone"
            name="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label for="description" className={styles.formlabel}>
            Concern
          </label>
          <textarea
            type="text"
            value={userData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="write your concern here"
            id="description"
            name="description"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
