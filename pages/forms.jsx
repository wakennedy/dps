import React, { useState } from "react";
import BrandForm from "../components/forms/BrandForm";
import PlasticFormPage from "../components/forms/PlasticForm";
import DiscFormPage from "../components/forms/DiscForm";
import { prisma } from "../lib/prisma";
import { Brand, Plastic } from "@prisma/client";

const FormsPage = (brands) => {
  return (
    <div>
      <BrandForm />
      <PlasticFormPage brands={brands.brands} />
      <DiscFormPage brands={brands.brands}/>
    </div>
  );
};

export default FormsPage;

export const getServerSideProps = async () => {
  // get all brands and plastics from db
  const brands = await prisma.brand.findMany();
  const plastics = await prisma.plastic.findMany();
  return {
    props: {
      brands: brands,
      plastics: plastics,
    },
  };
  // const brands = await prisma.brand.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });
  // const plastics = await prisma.plastic.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });

  // return {
  //   props: {
  //     brands,
  //     plastics,
  //   },
  // };
};
