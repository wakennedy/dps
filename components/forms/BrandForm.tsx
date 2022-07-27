import React, { useState } from "react";
import { BrandFormData } from "../../lib/interfaces";

const BrandFormPage = () => {
  const [form, setForm] = useState<BrandFormData>({
    name: "",
  });

  async function createBrand(data: BrandFormData) {
    try {
      fetch("http://localhost:3000/api/brand/createBrand", {
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

  const handleSubmit = async (data: BrandFormData) => {
    try {
      createBrand(data);
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
        <br />
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />

        <br />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Create Manufacturer
        </button>
      </form>
      <br />
    </div>
  );
};

export default BrandFormPage;
