import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { prisma } from "../lib/prisma";

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
      <h1>Build your db, bitch</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <input
          type="text"
          placeholder="Brand"
          value={form.brand}
          onChange={(e) => setForm({ ...form, brand: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Plastic"
          value={form.plastic}
          onChange={(e) => setForm({ ...form, plastic: e.target.value })}
        />
        <br />
        <input
          type="number"
          step="any"
          placeholder="Speed"
          value={form.speed}
          onChange={(e) => setForm({ ...form, speed: e.target.value })}
        />
        <br />
        <input
          type="number"
          step="0.1"
          placeholder="Glide"
          value={form.glide}
          onChange={(e) => setForm({ ...form, glide: e.target.value })}
        />
        <br />
        <input
          type="number"
          step="0.1"
          placeholder="Turn"
          value={form.turn}
          onChange={(e) => setForm({ ...form, turn: e.target.value })}
        />
        <br />
        <input
          type="number"
          step="0.1"
          placeholder="Fade"
          value={form.fade}
          onChange={(e) => setForm({ ...form, fade: e.target.value })}
        />
        <br />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Add +
        </button>
      </form>
      <br />

      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <ul>
          {discs.map((disc) => (
            <li key={disc.id}>
              <div>
                <h3></h3>
                <p>
                  | |{disc.name} | {disc.speed} | {disc.glide} | {disc.turn} |
                  {disc.fade}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
