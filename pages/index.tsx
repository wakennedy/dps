import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { prisma } from "../lib/prisma";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

interface Discs {
  discs: {
    id: string;
    brand: string;
    name: string;
    plastic: string;
    speed: any;
    glide: any;
    turn: any;
    fade: any;
  }[];
}

interface FormData {
  brand: string;
  name: string;
  plastic: string;
  speed: any;
  glide: any;
  turn: any;
  fade: any;
}

const Home = ({ discs }: Discs) => {
  const [form, setForm] = useState<FormData>({
    brand: "",
    name: "",
    plastic: "",
    speed: "",
    glide: "",
    turn: "",
    fade: "",
  });
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function createDisc(data: FormData) {
    try {
      fetch("http://localhost:3000/api/disc/createDisc", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      createDisc(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>HomePage, bitch!</h1>
      <button onClick={() => toast.success("hello toast!")}>Toast!</button>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const discs = await prisma.discs.findMany({
    select: {
      brand: true,
      id: true,
      name: true,
      plastic: true,
      speed: true,
      glide: true,
      turn: true,
      fade: true,
    },
  });

  return {
    props: {
      discs,
    },
  };
};

//todo
// push the creation of the table into its own function that takes discs as an arg and returns <table {data}>.   then render <table in the actual html.
// const tableRowBuild = (disc) => {
//   return (
//     <Fragment>
//       <tr key={disc.id}>
//         <td>{disc.brand}</td>
//         <td>{disc.name}</td>
//         <td>{disc.plastic}</td>
//         <td>{disc.speed}</td>
//         <td>{disc.glide}</td>
//         <td>{disc.turn}</td>
//         <td>{disc.fade}</td>
//       </tr>
//     </Fragment>
//   );
// };
// const table = await discs.forEach((disc) => tableRowBuild(disc));
