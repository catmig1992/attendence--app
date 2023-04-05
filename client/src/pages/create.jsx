import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import "../App.css";

export default function Create() {
  return (
    <div className="create-class">
     	<main>
			<h1>Create a Class</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Class Name</label>
					<input
						required
						value={place.name}
						onChange={e => setPlace({ ...place, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="founded">First Name</label>
					<input
						required
						value={place.founded}
						onChange={e => setPlace({ ...place, founded: e.target.value })}
						className="form-control"
						id="founded"
						name="founded"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="last-name">Last Name</label>
					<input
						value={place.pic}
						onChange={e => setPlace({ ...place, pic: e.target.value })}
						className="form-control"
						id="last-name"
						name="last-name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="student-id">Student ID</label>
					<input
						value={place.city}
						onChange={e => setPlace({ ...place, city: e.target.value })}
						className="form-control"
						id="student-id"
						name="student-id"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={place.state}
						onChange={e => setPlace({ ...place, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cuisines">Cuisines</label>
					<input
						value={place.cuisines}
						onChange={e => setPlace({ ...place, cuisines: e.target.value })}
						className="form-control"
						id="cuisines" name="cuisines" required />
				</div>
				<input className="btn btn-primary" type="submit" value="Add Place" />
			</form>
		</main>
    </div>
  );
}
