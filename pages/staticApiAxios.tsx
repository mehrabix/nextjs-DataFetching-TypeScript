import { GetStaticProps } from "next";
import axios from "axios";



export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = res.data
  return {
    props: {
      data: data,
    },
  };
};

type props = {
  data: [
    {
      id: number;
      name: string;
    }
  ];
};

const StaticApi = (props: props) => {
  console.log(props.data);
  return (
    <div>
      <h1>Static API</h1>
      {props.data.map((users) => (
        <>
          <div key={users.id}>{users.name}</div>
        </>
      ))}
    </div>
  );
};

export default StaticApi;
