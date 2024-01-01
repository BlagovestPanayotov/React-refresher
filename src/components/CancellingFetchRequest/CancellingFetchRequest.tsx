import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const CancellingFetchRequest = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <h2>Cancelling a Fetch Request</h2>
      {error && <p className="text-danger">{error}</p>}
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </>
  );
};

export default CancellingFetchRequest;
