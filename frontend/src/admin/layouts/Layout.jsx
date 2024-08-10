import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return <>
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                              
                            </div>
                        </div>
                     <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
         </>
}




