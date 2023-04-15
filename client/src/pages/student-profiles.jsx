import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId";
import axios from "axios";
import { useCookies } from "react-cookie";

export const StudentProfile = () => {
  const [rosters, setRosters] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  // const userID = useGetUserID();

  useEffect(() => {
    const fetchRoster = async () => {
      try {
        const response = await axios.get("http://localhost:3001/roster");
        setRosters(response.data); //return the list of rosters
        //console.log(response.data), data catching properly after this
      } catch (err) {
        console.log(err);
      }
    };

    if (cookies.access_token) fetchRoster();
  }, []);

  return (
    <div>
      <h1 className="profile-header">Student Roster</h1>
      <ul className="profile-list">
        {rosters.map((roster) => (
          <li className="student-profile" key={roster._id}>
            <div>
              <h2 className="student-name">{roster.studentName}</h2>
            </div>
            <img
              className="student-photo"
              src={roster.studentPhoto}
              alt={roster.studentName}
            />
            <div className="notesOnStudent">
              <p className="profile-detail">NOTES: {roster.notesOnStudent}</p>
            </div>
            <div>
              <p className="profile-detail">
                Courses Currently Enrolled: {roster.courses}
              </p>
            </div>
            <p className="profile-detail">Absences: {roster.absences} Days</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
