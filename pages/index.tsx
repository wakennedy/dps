import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "../lib/prisma";

interface Discs {
  discs: {
    brand: string;
    name: string;
    plastic: string;
    speed: string;
    glide: string;
    turn: string;
    fade: string;
  }[];
}

interface FormData {
  brand: string;
  name: string;
  plastic: string;
  speed: string;
  glide: string;
  turn: string;
  fade: string;
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

  async function create(data: FormData) {
    try {
      fetch("http://localhost:3000/api/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        if (data.id) {
          deleteNote(data.id);
          setForm({
            brand: "",
            name: "",
            plastic: "",
            speed: "",
            glide: "",
            turn: "",
            fade: "",
          });
          refreshData();
        } else {
          setForm({
            brand: "",
            name: "",
            plastic: "",
            speed: "",
            glide: "",
            turn: "",
            fade: "",
          });
          refreshData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote(id: string) {
    try {
      fetch(`http://localhost:3000/api/note/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
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
          type="text"
          placeholder="Speed"
          value={form.speed}
          onChange={(e) => setForm({ ...form, speed: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Glide"
          value={form.glide}
          onChange={(e) => setForm({ ...form, glide: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Turn"
          value={form.turn}
          onChange={(e) => setForm({ ...form, turn: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Fade"
          value={form.fade}
          onChange={(e) => setForm({ ...form, fade: e.target.value })}
        />
        <br />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Add +
        </button>
      </form>
    </div>
  );
};

export default Home;
