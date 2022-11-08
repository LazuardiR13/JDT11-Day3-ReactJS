import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [product, setProduct] = useState([]);

  const fetchCities = async () => {
    try {
      const url = '/api/v1/city';
      const response = await api.get(url);
      //buat array baru dengan nama payload agar data api tidak rusak
      const payload = [...response.data.data.cities];
      console.log(payload);
      setCities(payload);
    } catch (error) {
      alert(error)
    }
  }

  const fetchProduct = async () => {
    try {
      const url = `api/v1/products/`;
      const response = await api.get(url);
      const payload = [...response?.data?.data?.products];
      console.log(payload);
      setProduct(payload || []);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchCities();
    fetchProduct()
  }, [])

  return (
    <>
      <Banner />
      <h1 className="text-center"> Nama-Nama Kota </h1>
      <div className="grid grid-cols-5 gap-9 mt-5 m-7 bg-black rounded text-white text-center rounded-xl">

        {
          cities.map(item => { return <span key={item?.id}> {item?.name}</span> }
          )
        }
      </div>

      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        {product.map(item => (
          <ProductCard
            key={item?.id}
            productName={item?.name}
            productCategory={item?.categoryId?.name}
            productPrice={item?.price}
            onClick={item?.id}
            random={Math.random()}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
