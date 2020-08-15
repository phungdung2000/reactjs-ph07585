import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Categories = ({ categories, onRemoveD }) => {
    const removeHandle = (id) => {
        onRemoveD(id)
    }
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý Danh Mục</h1>
                <Link to="/admin/category/add" className="btn btn-primary">Thêm Danh mục</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Desc</th>
                                    <th scope="col">Qty</th>

                                    <th scope="col" width="150">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((cate, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{cate.name}</td>
                                        <td><img src={cate.image} alt="" width="50" /></td>
                                        <td>{cate.desc}</td>
                                        <td>123</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/category/${cate.id}`}>Sửa</Link>
                                            <button className="btn btn-danger ml-3" onClick={() => {
                                                if (window.confirm("ban co chac muon xoa")) {
                                                    removeHandle(cate.id)
                                                }
                                            }
                                            } >Xóa</button>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
    onRemoveD: PropTypes.func
}

export default Categories
