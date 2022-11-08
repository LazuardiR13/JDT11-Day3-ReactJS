import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api'

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data?.data?.product };
      console.log(payload);
      setProduct(payload || []);
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id)
    }
  }, [param.id])
  return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
      <div className='text-center'>DetailProduct</div>
      <p>Nama Produk: {product?.name}</p>
      <p>Harga: {product?.price}</p>
      <p>Yang Jual:{product?.ownerId?.name}</p>

    </>
  )
}
export default DetailProduct