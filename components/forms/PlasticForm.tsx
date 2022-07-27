import { existsSync } from "fs";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { PlasticFormData } from "../../lib/interfaces";
import { prisma } from "../../lib/prisma";

const BrandSelect = (brands: any) => {
  const manu = brands.brands;
  return (
    <select name="brand" id="brand">
      {manu.map((item: any) => {
        return (
          <option key={item.id} value={item}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

const PlasticFormPage = (brands: any) => {
  const [form, setForm] = useState<PlasticFormData>({
    name: "",
    brand: null,
  });

  async function createPlastic(data: PlasticFormData) {
    try {
      fetch("http://localhost:3000/api/plastic/createPlastic", {
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

  const handleSubmit = async (data: PlasticFormData) => {
    try {
      createPlastic(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create a Plastic, bitch!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <br />
        {BrandSelect(brands)}
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

export default PlasticFormPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const brands = await prisma.brand.findMany({
//     select: {
//       id: true,
//       name: true,
//     },
//   });

//   return {
//     props: {
//       brands,
//     },
//   };
// };
