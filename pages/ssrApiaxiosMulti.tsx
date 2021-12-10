
import axios from "axios";
import { GetServerSideProps } from "next";
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.all([
    axios.get("https://api.github.com/users/github"),
    axios.get("https://api.github.com/users/google"),
    axios.get("https://api.github.com/users/facebook"),
    axios.get("https://api.github.com/users/microsoft"),
    axios.get("https://api.github.com/users/apple"),
  ]);
  const data = await res.map((res) => res.data);
  return {
    props: {
      github: data[0],
          google: data[1],
          facebook: data[2],
          microsoft: data[3],
          apple: data[4],
            
    },
  };
};
type props = {
  github: {
    avatar_url: string;
  };
  google: {
    avatar_url: string;
  };
    facebook: {
        avatar_url: string;
    };
    microsoft: {
        avatar_url: string;
    };
    apple: {
        avatar_url: string;
    }
};
const ssrApiaxiosMulti = (props: props) => {
  return (
      <div>
          <h1>SSR with multiple API calls</h1>
          <div className="flex">
              <img src={props.github.avatar_url} alt="github" />
              <img src={props.google.avatar_url} alt="google" />
              <img src={props.facebook.avatar_url} alt="facebook" />
              <img src={props.microsoft.avatar_url} alt="microsoft" />
              <img src={props.apple.avatar_url} alt="apple" />
          </div>
        </div>
        
  );
};
export default ssrApiaxiosMulti;
