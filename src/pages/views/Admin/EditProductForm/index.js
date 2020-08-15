import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const EditProduct = ({ products, onupdateC }) => {
    const { register, errors, handleSubmit } = useForm()
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);
   
    const onHandleSubmit = (data) => {
        const newData = {
            id,
            ...data,
            
        }
        onupdateC(newData)
         history.push('/admin/products');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" defaultValue={currentProduct.name}  className="form-control" ref={register}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" defaultValue={currentProduct.price}  className="form-control" ref={register}/>
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
