import React, { useState } from "react";
import BrandForm from "../components/forms/BrandForm";
import PlasticFormPage from "../components/forms/PlasticForm";
import DiscFormPage from "../components/forms/DiscForm";
import { prisma } from "../lib/prisma";
import { Brand, Plastic } from "@prisma/client";

const FormsPage = (brands, plastics) => {
  return (
    <div>
      <BrandForm />
      <PlasticFormPage brands={brands.brands} />
      <DiscFormPage brands={brands.brands} />
    </div>
  );
};

export default FormsPage;

export const getServerSideProps = async () => {
  const brands = await prisma.brand.findMany();
  return {
    props: {
      brands: brands,
    },
  };
};
