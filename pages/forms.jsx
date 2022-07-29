import React, { useState } from "react";
import BrandForm from "../components/forms/BrandForm";
import PlasticFormPage from "../components/forms/PlasticForm";
import { prisma } from "../lib/prisma";
import { Brand, Plastic } from "@prisma/client";

const FormsPage = (brands) => {
  return (
    <div>
      <BrandForm />
      <PlasticFormPage brands={brands.brands} />
    </div>
  );
};

export default FormsPage;

export const getServerSideProps = async () => {
  const brands = await prisma.brand.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return {
    props: {
      brands,
    },
  };
};
