import React, { useState } from "react";
import { DiscFormData } from "../../lib/interfaces";

const DiscFormPage = (brands: any, plastics: any) => {
  const [form, setForm] = useState<DiscFormData>({
    plasticId: "",
    brandId: "",
    discName: "",
    speed: 0,
    glide: 0,
    turn: 0,
    fade: 0,
  });
  const BrandSelect = (brands: any) => {
    const manu = brands.brands;
    console.log("BRANDS: ", manu);
    return (
      <>
        {manu.map((item: any) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </>
    );
  };
  const PlasticSelect = (plastics: any) => {
    const materials = plastics;
    console.log("PLASTICS: ", materials);
    return (
      <>
        {/* {materials.map((item: any) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })} */}
      </>
    );
  };
  async function createDisc(data: DiscFormData) {
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
  const handleSubmit = async (data: DiscFormData) => {
    try {
      createDisc(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create a Disc</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <br />
        <select
          name="plasticId"
          id="plasticId"
          onChange={(e) => {
            setForm({ ...form, plasticId: e.target.value });
          }}
        >
          <option value="">Select a Plastic</option>
          {PlasticSelect(plastics)}
        </select>
        <br />
        <select
          name="brandId"
          onChange={(e) => {
            setForm({ ...form, brandId: e.target.value });
          }}
        >
          <option value="">Select a Brand</option>
          {BrandSelect(brands)}
        </select>
        <br />
        <input
          type="text"
          name="discName"
          onChange={(e) => {
            setForm({ ...form, discName: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          name="speed"
          onChange={(e) => {
            setForm({ ...form, speed: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          name="glide"
          onChange={(e) => {
            setForm({ ...form, glide: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          name="turn"
          onChange={(e) => {
            setForm({ ...form, turn: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          name="fade"
          onChange={(e) => {
            setForm({ ...form, fade: e.target.value });
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default DiscFormPage;
