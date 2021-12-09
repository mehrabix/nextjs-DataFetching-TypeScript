import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data).catch((err) => console.log(err));

type data = [
  {
    id: number;
    name: string;
  }
]
const staticApiSwrAxios = () => {
  const { data, error } = useSWR<data>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div>
      <h1>staticApiSwrAxios</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default staticApiSwrAxios;
