import React ,{useState,useEffect} from 'react'
import Navbar from '../NavBar'
import SideBar from '../SideBar'
import Login from '../forms/Login'
import Register from '../forms/Register'
import AddFirm from '../forms/AddFirm'
import AddProduct from '../forms/AddProduct'
import Welcome from '../forms/welcome'
import AllProducts from '../AllProducts'


const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false)
  const [showFirmTitle, setShowFirmTitle] = useState(true)

  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
        setShowLogOut(true)
        setShowWelcome(true)
    }
  }, [])

  useEffect(()=>{
      const firmName = localStorage.getItem('firmName');
      const firmId = localStorage.getItem('firmId')
      if(firmName || firmId ){
          setShowFirmTitle(false)
          setShowWelcome(true)
      }
  },[])



  const logOutHandler =()=>{
    confirm("Are you sure to logout?")
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem('firmName');
      setShowLogOut(false)
      setShowFirmTitle(true)
      setShowWelcome(false)
  }

const showLoginHandler =()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)

}

const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)

}

const showFirmHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
  }else{
    alert("please login");
    setShowLogin(true)
  }
}
const showProductHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
    setShowWelcome(false)
    setShowAllProducts(false)
    }else{
        alert("please login")
        setShowLogin(true)
    }

}
const showWelcomeHandler = ()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(true)
    setShowAllProducts(false)

}
const showAllProductsHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(true)

}else{
    alert("please login")
    setShowLogin(true)
 }
}
  return (
    <>
        <section className='landingSection'>
            <Navbar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}
            showLogOut = {showLogOut}
            logOutHandler = {logOutHandler}
            />
            <div className="collectionSection">
            <SideBar showFirmHandler={showFirmHandler} showProductHandler ={showProductHandler}
            showAllProductsHandler = {showAllProductsHandler}
            showFirmTitle={showFirmTitle}
            />
          {showFirm && showLogOut && <AddFirm />}
          {showProduct && showLogOut && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogOut && <AllProducts />}
          {showLogin && <Login showWelcomeHandler ={showWelcomeHandler}/>}
          {showRegister && <Register showLoginHandler = {showLoginHandler}/>}
        
            </div>
        </section>
    </>
  )
}

export default LandingPage