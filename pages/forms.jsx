import React, { useState } from "react";
import BrandForm from "../components/forms/BrandForm";
import PlasticFormPage from "../components/forms/PlasticForm";
import DiscFormPage from "../components/forms/DiscForm";
import { prisma } from "../lib/prisma";
import { Brand, Plastic } from "@prisma/client";

const FormsPage = (brands, plastics) => {
  console.log("MASTER FORM PAGE PROPS: ", plastics)
  return (
    <div>
      <BrandForm />
      <PlasticFormPage brands={brands.brands} />
      <DiscFormPage brands={brands.brands} plastics={plastics}/>
    </div>
  );
};

export default FormsPage;

export const getServerSideProps = async () => {
  const brands = await prisma.brand.findMany();
  const plastics = await prisma.plastic.findMany();
  return {
    props: {
      brands: brands,
      plastics: plastics,
    },
  };
};
