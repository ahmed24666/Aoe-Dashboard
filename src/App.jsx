import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProgressBar from 'react-progressbar-on-scroll'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import { useEffect, useState } from "react";
import { FiSettings } from 'react-icons/fi';
import { TbSunMoon } from 'react-icons/tb';
import { useDashboard } from "./Context/DashboardContext";
import Orders from "./Pages/Orders/Orders";
import SideBar from "./Components/SideBar/SideBar";
import Employees from "./Pages/Employees/Employees";
import AreaCharts from "./Pages/AreaChart/AreaChart";
import Loader from "./Components/Loader/Loader";
function App() {
  const LayOut = () => {
    const [showSide, setShowSide] = useState(false);
    const handleClose = () => setShowSide(false);
    const handleShow = () => setShowSide(true);
    const [isLoader, setIsLoader] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setIsLoader(false)
      }, 3000);
    }, [])
    const {showTheme,setShowTheme,setTheme,bg,color,dark,setDarkMode,darkMode}=useDashboard()
    return (
        <div className="app" style={darkMode?{backgroundColor:dark()}:{backgroundColor:'#FAFBFB'}}>
          {isLoader ? (<Loader />) : (
          <>
            <ProgressBar
              color={color()}
              height={5}
              direction="right"
              position="top"
              gradient={true}
              gradientColor="black"
            />
            
            <SideBar handleClose={handleClose} showSide={showSide} />
            <Nav handleShow={handleShow} />
            <Outlet />
            <div className="circles">
                <div className="theming">
                  <span className="icon" style={showTheme?{opacity:'1',zIndex:'99',color:color()}:{opacity:'0',zIndex:'-10',color:color()}} onClick={()=>{setDarkMode(!darkMode);setShowTheme(false)}}><TbSunMoon /></span>
                  <div className="color-1" style={showTheme?{opacity:'1',zIndex:'99'}:{opacity:'0',zIndex:'-10'}} onClick={()=>{setTheme('orange');setShowTheme(false)}}></div>
                  <div className="color-2" style={showTheme?{opacity:'1',zIndex:'99'}:{opacity:'0',zIndex:'-10'}} onClick={()=>{setTheme('pink');setShowTheme(false)}}></div>
                  <div className="color-3" style={showTheme?{opacity:'1',zIndex:'99'}:{opacity:'0',zIndex:'-10'}} onClick={()=>{setTheme('purple');setShowTheme(false)}}></div>
                  <div className="color-4" style={showTheme?{opacity:'1',zIndex:'99'}:{opacity:'0',zIndex:'-10'}} onClick={()=>{setTheme('cyan');setShowTheme(false)}}></div>
                  <div className="color-5" style={showTheme?{opacity:'1',zIndex:'99'}:{opacity:'0',zIndex:'-10'}} onClick={()=>{setTheme('blue');setShowTheme(false)}}></div>
                </div>
              <div className="setting" style={bg()} onClick={()=>setShowTheme(!showTheme)}>
                <FiSettings />
              </div>
            </div>
          </>
          )}
        </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/employees",
          element: <Employees />,
        },
        {
          path: "/area",
          element: <AreaCharts />,
        },
        
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
