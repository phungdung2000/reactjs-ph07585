import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
import apicate from './api/categoryApi'
function App() {

  const [products, setProducts] = useState([apiRequest]);
  const [categories, setCate] = useState([apicate]);
  console.log(categories)
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    const getCategories = async () => {
      try {
        const { data } = await apicate.getAll();
        setCate(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
    getCategories();
  }, []);


  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // Cập nhật product 
  const onHandleUpdate = (updateProduct) => {
    const repone = apiRequest.update(updateProduct.id, updateProduct)
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }

  //them categories
  const addcate = async (category) => {
    try {
      const { data } = await apicate.create(category);
      setCate([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  //xoa categories
  const onHandleRemoveD = async (id) => {
    try {
      const { data } = await apicate.remove(id);
      const newCate = categories.filter(cate => cate.id !== id);

      setCate(newCate);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  
  }
    //cập nhật categories
  const onHandleUpdateD = (updateCategories) => {
    const repone = apicate.update(updateCategories.id, updateCategories)
    const newCategories = categories.map(categories => (
      categories.id === updateCategories.id ? updateCategories : categories
    ));
    localStorage.setItem('categories', JSON.stringify(newCategories))
    setCate(newCategories);
  }
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onupdateC={onHandleUpdate}
        categories={categories} onAddD={addcate} onRemoveD={onHandleRemoveD} onupdateD={onHandleUpdateD}
      />
    </div>
  )

}
export default App;