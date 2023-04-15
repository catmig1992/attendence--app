export const About = () => {
  return (
    <div className="about-area">
      <h1 className="about">About The Timely App</h1>
      <img
        src="/image/school.jpg"
        alt="school"
        height="300px"
        width="900px"
        className="school_image"
      />

      <h2 className="tagline">
        Helping educators keep track of student information and progress!
      </h2>
      <div className="howto">
        <p>
          Timely is an application that allow educators to create student
          profiles to easily keep track of student progress in class, whether
          they are doing well in class, need extra attention or students are not
          attending regularly that may need to drop and retake the class later
          in their educational careers.
        </p>
        <p>
          This is an "at-a-glance," educator tool that allow instructors to
          understand their students' progress and step in to help when needed or
          reflect on teaching methods to improve their approach in class.
        </p>
        <p>How to use it:</p>
        <p>1. Create an account.</p>
        <p>
          2. Create a student's profile via the "Create Profiles" tab in the
          navigation bar.
        </p>
        <p>
          3. Update student profiles as needed throughout the course duration.
        </p>
      </div>
    </div>
  );
};
