import HeaderVolta from "../components/HeaderVolta"
import { Switch, Route } from "react-router-dom"
import SideBar from "../components/SideBar"
import Footer from "../components/Foooter"
import Header from "../components/Header"
import Carrinho from "../pages/Carrinho"
import Products from "../pages/Products"
import Product from "../pages/Product"
import Locais from "../pages/Locais"
import Perfil from "../pages/Perfil"
import About from "../pages/About"
import { useState } from "react"
import Home from "../pages/Home"





export default function Routes() {

  const [sideBar, setSideBar] = useState(false)

  return(
    <Switch>

      <Route exact path={"/"} >
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <Home sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

      <Route exact path={"/sobre"} >
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <About sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

      <Route exact path={"/produtos"} >
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <Products sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

      <Route exact path={"/perfil"} >
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <Perfil sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

      <Route exact path={"/produto/:id"} >
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <Product sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

      <Route exact path={"/carrinho"} >
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <Carrinho sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

      <Route exact path={"/locais"} >
        <HeaderVolta sideBar={sideBar} setSideBar={setSideBar} />
        <Locais sideBar={sideBar} setSideBar={setSideBar} />
        <Footer />
      </Route>

    </Switch>
  )

}