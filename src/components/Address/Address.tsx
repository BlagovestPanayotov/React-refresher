import { useState } from "react";

const Address = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    address: {
      state: "California",
      zip: 88111,
    },
  });

  function onClickHandler() {
    const newPerson = {
      ...person,
      address: {
        ...person.address,
        zip: person.address.zip + 1,
      },
    };

    setPerson(newPerson);
  }

  return (
    <div>
      <p>
        Name: {person.name} - Address: {person.address.state}{" "}
        {person.address.zip}
      </p>
      <button onClick={onClickHandler}>Update zipcode</button>
    </div>
  );
};

export default Address;
