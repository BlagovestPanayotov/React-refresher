import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const DeleteData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  function deleteUser(u: User) {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== u.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + u.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <h2>Delete Data</h2>
      {isLoading ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <>
          {error && <p className="text-danger">{error}</p>}
          <ul className="list-group">
            {users.map((u) => (
              <li
                key={u.id}
                className="list-group-item d-flex justify-content-between"
              >
                {u.name}
                <button
                  onClick={() => deleteUser(u)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default DeleteData;
