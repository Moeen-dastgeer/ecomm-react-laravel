import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import http from '../http';
export const ProductsList = () => {
    const [products, setProducts]  = useState([]);
    const [listdata, setListdata]  = useState([]);
    const [inputs, setInputs]  = useState({search: '',status: '',from:'',to:''});
    const [page, setPage]  = useState(1);
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values,[name]:value}))
    } 
    useEffect(()=>{
      fetchAlldata();
    },[page]);
  
    const fetchAlldata = ()=>{
      http.get('/products/list?page='+page).then((res)=>{
        setProducts(res.data.data);
        setListdata(res.data);
      });
    }

    const handleDeleteData = (id)=>{
      if(confirm("Are You Sure Do You Want To Delete This?") == true)
      {
        http.get('products/delete/'+id).then((res)=>{
          if(res.data.status=="success")
          {
            alert(res.data.message);
            fetchAlldata();
          }
        });
      }
      else
      {
        alert("fail")
      }
    }
    
    const pagination = (link)=>{
      const url = new URL(link);
      setPage(url.searchParams.get('page'));
    }

    let outform = products.filter((c)=>{
        // return c.name.toLowerCase().includes(inputs);
        return (
                (inputs.status === ''|| c.status === inputs.status) &&  (inputs.search === '' || c.name.toLowerCase().includes(inputs.search)) && ((inputs.from===''|| (new Date(c.created_at.substring(0, 10)) >= new Date(inputs.from))) && (inputs.to===''||(new Date(c.created_at.substring(0, 10)) <= new Date(inputs.to)))) 
              );
    });
  return <>
           <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Products</h4>
                        </div>
                        <div className="col-md-6 text-right">
                            <Link to="/admin/products/create" className="btn btn-sm btn-primary">
                                <i className="fa fa-plus-square"></i> Add new
                            </Link>
                        </div>
                    </div>
                <div className="row d-flex">
                <div class="col-md-6 d-flex">
                    From:<input type="date" name="from" id="from" class="form-control form-control-sm" value={inputs.from} onChange={handleChange} />
                    &nbsp;&nbsp;To:<input type="date" name="to" id="to" class="form-control form-control-sm" value={inputs.to} onChange={handleChange} />
                </div>
                <div class="col-md-3">
                        <select name="status"  class="form-control form-control-sm" value={inputs.status} onChange={handleChange}>
                           <option value="">All</option>
                           <option value="1">Enable</option>
                           <option value="0">Disable</option>
                        </select>
                    </div>
                    <div className="col-md-3 ml-auto">
                        <input type="search" className="form-control form-control-sm" name="search" value={inputs.search || ''} onChange={handleChange}/>
                    </div>
                </div>
                </div>
                <div className="card-body">
                    <div id="products">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr align="center">
                                    <th width="30">#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>created_at</th>
                                    <th className="text-center" width="210">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                            {
            outform.map((product,index) => (
              <tr key={index} className='text-center'>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <img src={"http://127.0.0.1:8000/storage/images/products/"+product.image} alt="" width="50px" />
                </td>
                <td>{product.status==1?"Enable":"Disable"}</td>
                <td>{product.created_at.substring(0, 10)}</td>
                <td>
                  <Link className="btn btn-info me-2" to={ { pathname:"/admin/products/edit/"+product.id } }>Edit</Link>
                  <button className="btn btn-danger" onClick={ ()=>{handleDeleteData(product.id);}}>Delete</button>
                </td>
              </tr>
            ))}
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-center'>
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              {
                                listdata.links?.map(link=>(
                                  <li onClick={()=>pagination(link.url)} className={`page-item ${link.active?"active":""}`} style={{ cursor:'pointer' }}>
                                    <a className="page-link">
                                      <span className="sr-only">Previous</span>
                                      {link.label.replace('&laquo;','').replace('&raquo;','')}
                                    </a>
                                  </li>
                                ))
                              }
                            </ul>
                          </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
}
