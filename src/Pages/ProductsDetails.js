import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useHttpRequest } from "../Hook/HttpRequest";

const ProductsDetails = () => {
  const { id } = useParams();
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;

  let products = useHttpRequest(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          <a href="https://mockapi.io/">mock API</a>.
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (products.loading) {
    content = (
      <div className="flex items-center justify-center">
        <Loader></Loader>
      </div>
    );
  }

  if (products.data) {
    content = (
      <div className="flex">
        <div className="w-2/5">
          <img
            className="block w-full rounded"
            src={products.data.images[0].imageUrl}
            alt={products.data.name}
          />
        </div>
        <div className="w-3/5 ml-5 px-2">
          <h1 className="text-3xl font-bold mb-3">{products.data.name}</h1>
          <div className="font-bold text-xl my-3">$ {products.data.price}</div>
          <div>{products.data.description}</div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="container mx-auto my-48">{content}</div>
    </main>
  );
};

export default ProductsDetails;
