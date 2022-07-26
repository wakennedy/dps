import { useState } from "react";

interface FormData {
  brand: string;
  name: string;
  plastic: string;
  speed: any;
  glide: any;
  turn: any;
  fade: any;
}

const FormPage = () => {
  const [form, setForm] = useState<FormData>({
    brand: "",
    name: "",
    plastic: "",
    speed: "",
    glide: "",
    turn: "",
    fade: "",
  });

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
      <h1>Build your db, bitch!</h1>
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
    </div>
  );
};

export default FormPage;
