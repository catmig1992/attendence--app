// export const CreateClass =() =>{
//     return <div>Create Class Roster</div>;
// };

import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

export const CreateClass = () => {
  const userID = useGetUserID();

  const [roster, setRoster] = useState({
    Subject: "",
    FirstName: "",
    LastName: "",
    userOwner: userID,
  }); //state that keeps track of roster we are creating
  //put on initial structure of how object will look

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRoster({ ...roster, [name]: value });
  };

  const handleFirstNameChange = (event, idx) => {
    const { value } = event.target;
    const FirstName = roster.FirstName;
    FirstName[idx] = value;
    setRoster({ ...roster, FirstName });
  };

  const addFirstName = () => {
    setRoster({ ...roster, FirstName: [...roster.FirstName, ""] }); //setting roster object to be the same as it was before but whatever is after the comma is what id going to change in the object
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/create-class", roster);
      alert("Roster Created!");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-roster">
      <h2 class="title-roster">Create Class Roster</h2>
      <form onSubmit={onSubmit}>
        <p><label htmlFor="subject" class="subject-create">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          class="subject-input"
          onChange={handleChange}
        /></p>

        <p><label htmlFor="FirstName" class="create-fn">First Name</label>
        <input
          id="FirstName"
          name="FirstName"
          class="first-input"
          onChange={handleChange}
        ></input>

<label htmlFor="LastName" class="create-ln">Last Name</label>
        <input
          id="LastName"
          name="LastName"
          class="last-input"
          onChange={handleChange}
        ></input>
        </p>

<p>
        <button onClick={addFirstName} type="button" class="aan-create-class">
          Add Another Name
        </button>

        </p>

        {/* {roster.FirstName.map((FirstName, idx) => (
          <input
            key={idx}
            type="text"
            name="FirstName"
            value={FirstName}
            onChange={(event) => handleFirstNameChange(event, idx)}
          />
        ))} */}



        <div>
          <button type="submit" class="create-class-submit">Create Class Roster</button>
        </div>
      </form>
    </div>
  );
};
