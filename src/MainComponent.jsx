import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Routes, Route } from 'react-router-dom'
import Sidebar from "./Component/Sidebar"
import Navbar from "./Component/Navbar"
import Dashboard from "./Pages/Dashboard"
import MarketAnalysis from "./Pages/MarketAnalysis"
import MultiLoginAccount from "./Pages/Account/MultiLoginAccount"
import AccountRoutes from "./Component/Account-Routes"
import ReportRoutes from "./Component/ReportRoutes"
import Bank from "./Pages/Bank"
import Report from "./Pages/Report"
import ActiveUser from './Pages/Account/ActiveUser'
import AccountList from './Pages/Account/AccountList'
import CreateAccount from './Pages/Account/CreateAccount'
import AccountStatement from './Pages/Reports/AccountStatement'
import PartyWinLoss from './Pages/Reports/PartyWinLoss'
import CurrentBets from './Pages/Reports/CurrentBets'
import UserHistory from './Pages/Reports/UserHistory'
import GeneralLock from './Pages/Reports/GeneralLock'
import OurCasino from './Pages/Reports/OurCasino'
import LiveCasino from './Pages/Reports/LiveCasino'
import Sportbook from './Pages/Reports/Sportbook'
import TurnOver from './Pages/Reports/TurnOver'
import UserAuth from './Pages/Reports/UserAuth'
import FraudReport from './Pages/Reports/FraudReport'
import Chat from './Pages/Chat'


const MainComponent = () => {

const navigate = useNavigate() 

  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(-1);
  const [showSidebarText, setShowSidebarText] = useState(true);
  // const [showLogo,setShowLogo] = useState("true");

  const dropdownOptions = [
    ["Account list for active user", "Account List", "Create Account","Multi Login Account"],
    ["Account Statement", "Party Win Loss", "Current Bets", "User History"],
    ["Account Statement1", "Party Win Loss1", "Current Bets1", "User History1"],
  ];

  const pages = [
    <Dashboard />,
    <MarketAnalysis />,
    <MultiLoginAccount />,
    <Bank />,
    <ActiveUser />,
    <AccountList />,
    <CreateAccount />,
    <AccountStatement />,
    <PartyWinLoss />,
    <CurrentBets />,
    <UserHistory />,
    <GeneralLock />,
    <OurCasino />,
    <LiveCasino />,
    <Sportbook />,
    <TurnOver />,
    <UserAuth />,
    <FraudReport />,
  ];

  const toggleSidebarText = () => {
    setShowSidebarText((prevShowSidebarText) => !prevShowSidebarText)
  }

  const handleItemClick = (index) => {
    setSelectedListIndex(index);
    setSelectedDropdownIndex(-1);
  };

  const handleDropdownItemClick = (index) => {
    setSelectedDropdownIndex(index);
    setSelectedListIndex(-1);
  };

  const navigateToCreateAccount = ( ) => {
    setSelectedListIndex(5);
    setSelectedDropdownIndex(-1);
    navigate('/create-account')
  }

  const navigateToActiveUser = () => {
    setSelectedListIndex(4); // Set the selected index to the Active User page
    setSelectedDropdownIndex(-1);
    navigate('/active-user')
  };


  // const toggleLogo = () => {
  //   setShowLogo((prevShowLogo) => !prevShowLogo);
  // }

  return (
    <>
      <div className="container-fluid parent-wrapper">
        <div className="row">
          {showSidebarText ? (
            <div className="sidebar">
            <div className="example1">
              <Sidebar onItemClick={handleItemClick} showText={showSidebarText} dropdownOptions={dropdownOptions} handleDropdownItemClick={handleDropdownItemClick} />
            </div>
          </div>
          ) : (
            <div className="col-md-1 col-lg-1 ">
            <div className="example1" style={{width:'12rem'}}>
              <Sidebar onItemClick={handleItemClick} showText={showSidebarText} dropdownOptions={dropdownOptions} handleDropdownItemClick={handleDropdownItemClick} />
            </div>
          </div>
          )}
          

           {showSidebarText ? (
            <div className="rightside">
            <div className="example2">
              <Navbar toggleSidebar={toggleSidebarText} showSidebarText={showSidebarText} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/market-analysis" element={<MarketAnalysis />} />
                <Route path="/multi-login" element={<MultiLoginAccount />} />
                <Route path="/account/*" element={<AccountRoutes />} />
                <Route path="/bank" element={<Bank />} />
                <Route path="/report/*" element={<ReportRoutes />} />
                <Route path="/chat/:userId?" element={<Chat />} />
              </Routes>
              {/* {selectedListIndex === 3 && selectedDropdownIndex !== -1 ? (
                // Display the "Account" dropdown pages when the dropdown is clicked
                // pages[selectedListIndex + selectedDropdownIndex]
                <CreateAccount />
              ) : (
                // Display regular sidebar pages
                pages[selectedListIndex]
              )} */}
            </div>
          </div>
           ) : (
            <div className="col-md-11 col-lg-11 ">
            <div className="example2">
              <Navbar toggleSidebar={toggleSidebarText} showSidebarText={showSidebarText} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/market-analysis" element={<MarketAnalysis />} />
                {/* <Route path="/multi-login" element={<MultiLoginAccount />} /> */}
                <Route path="/account/*" element={<AccountRoutes />} />
                <Route path="/bank" element={<Bank />} />
                <Route path="/report/*" element={<ReportRoutes />} />
                <Route path="/chat/:userId?" element={<Chat />} />
              </Routes>
              {/* {selectedListIndex === 3 && selectedDropdownIndex !== -1 ? (
                // Display the "Account" dropdown pages when the dropdown is clicked
                // pages[selectedListIndex + selectedDropdownIndex]
                <CreateAccount />
              ) : (
                // Display regular sidebar pages
                pages[selectedListIndex]
              )} */}
            </div>
          </div>
           )}
          
        </div>
      </div>
    </>
  )
}

export default MainComponent