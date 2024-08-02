import React from 'react'
import { Link } from 'react-router-dom';
export const ProductsList = () => {
    const [products, setProducts]  = useState([]);
  
    useEffect(()=>{
      fetchAlldata();
    },[]);
  
    const fetchAlldata = ()=>{
      http.get('/products/list').then((res)=>{
        setProducts(res.data);
      });
    }
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
                </div>
                <div className="card-body">
                    <div id="products">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr align="center">
                                    <th width="30">#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th class="text-center" width="210">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                            {
            products.map((product,index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.address}</td>
                <td>
                  <Link className="btn btn-info me-2" to={ { pathname:"/edit/"+student.id } }>Edit</Link>
                  <button className="btn btn-danger" onClick={ ()=>{handleDeleteData(student.id);}}>Delete</button>
                </td>
              </tr>
            ))}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </>
}
