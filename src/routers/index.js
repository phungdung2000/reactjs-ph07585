import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import Categories from '../pages/views/Admin/Categories';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import EditProduct from '../pages/views/Admin/EditProductForm';
import AddProduct from '../pages/views/Admin/AddProductForm';
import AddCategory from '../pages/views/Admin/Categories/AddCategory';
import EditCategory from '../pages/views/Admin/Categories/EditCategory';

const Routers = ({
    products, onRemove, onAdd, onupdateC,
    categories,onRemoveD,onAddD, onupdateD
}) => {

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onRemove} />
                            }>
                            </Route>
                            <Route path='/admin/product/add'
                                render={(props) =>
                                    <AddProduct {...props} onAdd={onAdd} />}></Route>
                            <Route path='/admin/product/:id'
                                render={(props) =>
                                    <EditProduct {...props} products={products} onupdateC={onupdateC} />
                                }
                            >
                            </Route>
                            <Route path='/admin/categories' render={(props) =>
                                <Categories {...props} categories={categories} onRemoveD={onRemoveD} />
                            }>
                            </Route>
                            <Route path='/admin/category/add'
                                render={(props) =>
                                    <AddCategory {...props} onAddD={onAddD} />}></Route>
                           <Route path='/admin/category/:id'
                                render={(props) =>
                                    <EditCategory {...props} categories={categories} onupdateD={onupdateD} />
                                }
                            >
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/home" exact>
                                <Home item={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
