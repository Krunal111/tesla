import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { useHttpRequest } from "../Hook/HttpRequest";

const Products = () => {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useHttpRequest(url);
  console.log(products);

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
      <div className="flex items-center justify-center w-full">
        <Loader></Loader>
      </div>
    );
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
        <div className="border mb-4 rounded overflow-hidden p-3">
          <div className="rounded overflow-hidden">
            <Link to={`/productsdetails/${product.id}`}>
              <img src={product.images[0].imageUrl} />
            </Link>
          </div>
          <div className="p-3">
            <h5 className="font-bold text-xl mb-1">
              <Link to={`/productsdetails/${product.id}`}>{product.name}</Link>
            </h5>
            <h6 className="font-bold">{product.price}</h6>
            <p className="text-sm mt-3">{product.description}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <main className="md:-mx-3 mt-36">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-10 text-center">Best Sellers</h1>
        <div className="md:flex flex-wrap">{content}</div>
      </div>
    </main>
  );
};

export default Products;
