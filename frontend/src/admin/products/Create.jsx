import React from 'react'
import { Link } from 'react-router-dom';
import http from '../http';
import { useState,useEffect  } from "react"
export const ProductCreate = () => {
    const [categories, setCategories]  = useState([]);
  useEffect(()=>{
    fetchCategories();
  },[]);

  const fetchCategories = ()=>{
    http.get('/categories/list').then((res)=>{
        setCategories(res.data);
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    http.post('products/store',formdata).then((res)=>{
     if (res.data.status == "error") {
       jQuery.each(res.data.errors, function(key, val) {
           $("#" + key).after("<p className='text-danger'>" + val[0] +"</p>");
       });
   }
     if(res.data.status=="success")
     {
       alert(res.data.message);
     }  
 });
}

   
  return <>
    <div className="card card-white">
            <div className="card-header">
                <div className="row"> 
                    <div className="col-md-6">
                        <h4>Add new</h4>
                    </div>
                    <div className="col-md-6 text-right">
                        <Link to="/admin/products/list" className="btn btn-sm btn-warning">
                            <i className="fa fa-arrow-left"></i> Back
                        </Link>
                    </div>
                </div>
            </div>
        <form onSubmit={handleFormSubmit} enctype="multipart/form-data">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="form-group col-md-12 col-sm-12">
                                <label>Title<span className="text-danger">*</span></label>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Category<span className="text-danger">*</span></label><br />
                                <select name="category" id="category" className="form-control">
                                    <option value="">......Select......</option>
                                    {
                                        categories.map((category,index) => (
                                        <option key={index} value={category.id}> {category.name} </option>
                                     ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Price<span className="text-danger">*</span></label>
                                <input type="number" name="price" id="price" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Keywords</label>
                                <input type="text" name="keywords" id="keywords" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Stock</label><br />
                                <input type="number" name="stock" id="stock" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-6 col-sm-12">
                    <label>Status</label><br />
                    <input type="radio" id="disable" name="status" value="0" />
                    <label className="form-check-label" for="disable">Disable</label>
                    <input type="radio" id="enable" name="status" value="1" checked />
                    <label className="form-check-label" for="enable">Enable</label>
                </div>
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</>
}
