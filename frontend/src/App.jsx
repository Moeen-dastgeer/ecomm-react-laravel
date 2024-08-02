import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./admin/layouts/Layout"
import { Dashboard } from "./admin/Dashboard"
import { Products } from "./admin/Products"
import { Layout1 } from "./web/layouts/Layout"
import { Dashboard1 } from "./web/Dashboard"
import { Products1} from "./web/Products"

export const App = () => {
  

return  <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<Layout />}>
              < Route path="/admin" element={<Dashboard />} />
              < Route path="/admin/products" element={<Products />} />
            </Route>
            <Route path="/" element={<Layout1 />}>
              < Route path="/" element={<Dashboard1 />} />
              < Route path="/products" element={<Products1 />} />
            </Route>
          </Routes>
        </BrowserRouter>
}