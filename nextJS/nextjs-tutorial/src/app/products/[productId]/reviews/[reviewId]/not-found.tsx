"use client";
import React from "react";
import { usePathname } from "next/navigation";

/** Doesn't accept any props, so use usePathname */
const NotFound = () => {
  const pathname = usePathname();
  console.log("Pathname: ", pathname);

  const productId = pathname?.split("/")[2];
  const reviewId = pathname?.split("/")[4];
  return (
    <>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </>
  );
};

export default NotFound;
