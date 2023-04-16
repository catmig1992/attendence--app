import { RosterModel } from "../models/Roster.js";

RosterModel.create([
  {
    studentName: "David Andrews",
    courses: "trigonometry",
    notesOnStudent: "Needs tutoring",
    studentPhoto:
      "https://th.bing.com/th/id/OIP.lbRHYqYkkroXXcXsdZ5JOgHaE8?pid=ImgDet&w=1254&h=836&rs=1",
    absences: "3",
    userOwner: "ObjectId('')",
  },
  {
    studentName: "Rachel Barnes",
    courses: "trigonometry",
    notesOnStudent: "Too many absences",
    studentPhoto:
      "https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books..jpeg",
    absences: "8",
    userOwner: "ObjectId('')",
  },
  {
    studentName: "Chris Betts",
    courses: "geometry",
    notesOnStudent: "studious ",
    studentPhoto:
      "https://media.istockphoto.com/photos/portrait-of-male-student-standing-in-college-building-picture-id878919064?k=6&m=878919064&s=612x612&w=0&h=Kt7X_b1tYduMY1qY-r6YYTaxrunEAOGW2J83SBGnsx0=",
    absences: "0",
    userOwner: "ObjectId('')",
  },
  {
    studentName: "Andrew Blunt",
    courses: "geometry",
    notesOnStudent: "Too many absences",
    studentPhoto:
      "https://www.pngkey.com/png/detail/176-1760938_african-american-male-college-student-black-student-images.png",
    absences: "10",
    userOwner: "ObjectId('')",
  },
  {
    studentName: "Simon Carter",
    courses: "geometry",
    notesOnStudent: "Needs tutoring",
    studentPhoto:
      "https://th.bing.com/th/id/R.143c2fb883031a913c4eaaa2422266d0?rik=%2fiLQY%2fK3gABS3Q&riu=http%3a%2f%2fstatic.wixstatic.com%2fmedia%2f4dd3a24f28247b71b2d2bc4fc45851e9.jpg_srz_1000_665_85_22_0.50_1.20_0.00_jpg_srz&ehk=rhXwgcVSHfNNSpSHmWrUsAKLD%2bL0JhxRZaJIMe8dazY%3d&risl=&pid=ImgRaw&r=0",
    absences: "4",
    userOwner: "ObjectId('')",
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });

// still needs to be tested, having issues with userOwner
// in the terminal, run command: node src/seeders/seed-rosters.js
// once finalized, command should be included in the ReadMe file for the Demo portion
