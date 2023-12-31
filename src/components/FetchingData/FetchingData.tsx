import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <>
      <h2>Fetching Data</h2>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </>
  );
};

export default FetchingData;
