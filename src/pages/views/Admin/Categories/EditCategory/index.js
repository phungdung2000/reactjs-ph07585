import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditCategory = ({categories, onupdateD}) => {
    const { register, errors, handleSubmit } = useForm()
    let { id } = useParams();
    let history = useHistory();
    const category = categories.find(category => category.id === id);

    const [currentCategory, setCurrentCategory] = useState(category);
    const onHandleSubmit = (data) => {
        const newData = {
            id,
            ...data,
            
        }
        onupdateD(newData)
         history.push('/admin/categories');
    }
    return (
        <div>
          <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="categoryName">Tên danh mục</label>
                    <input type="text" name="name" defaultValue={currentCategory.name}  className="form-control" ref={register}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="categoryName">Desc</label>
                    <input type="text" name="desc" defaultValue={currentCategory.desc}  className="form-control" ref={register}/>
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditCategory.propTypes = {
    categories: PropTypes.array
}

export default EditCategory
