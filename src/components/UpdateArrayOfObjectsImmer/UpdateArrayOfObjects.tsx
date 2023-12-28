import { produce } from "immer";
import { useState } from "react";

const UpdateArrayOfObjects = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  function fixBugHandler(id: number) {
    setBugs(
      produce((draft) => {
        const bug = draft.find((b) => b.id === id);
        if (bug) bug.fixed = true;
      })
    );
  }

  return (
    <>
      <h2>Bugs Immer</h2>
      <ul>
        {bugs.map((b) => (
          <li key={b.id}>
            {b.title} - {b.fixed ? "Fixed " : "Not Fixed "}
            {b.fixed ? null : (
              <button onClick={() => fixBugHandler(b.id)}>Fix Bug</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UpdateArrayOfObjects;
