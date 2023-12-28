import { FormEvent, useState } from "react";

const ControlledForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(person);
  }

  return (
    <>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="forl-label">
            Age
          </label>
          <input
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledForm;
