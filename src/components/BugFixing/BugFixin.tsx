import { useState } from "react";

const BugFixin = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  function fixBugHandler(id: number) {
    setBugs(bugs.map((b) => (b.id === id ? { ...b, fixed: true } : b)));
  }

  return (
    <>
      <h2>Bugs</h2>
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

export default BugFixin;
