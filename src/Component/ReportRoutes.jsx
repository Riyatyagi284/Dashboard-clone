import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountStatement from '../Pages/Reports/AccountStatement'
import PartyWinLoss from '../Pages/Reports/PartyWinLoss'
import CurrentBets from '../Pages/Reports/CurrentBets'
import UserHistory from '../Pages/Reports/UserHistory'
import GeneralLock from '../Pages/Reports/GeneralLock'
import OurCasino from '../Pages/Reports/OurCasino'
import LiveCasino from '../Pages/Reports/LiveCasino'
import Sportbook from '../Pages/Reports/Sportbook'
import TurnOver from '../Pages/Reports/TurnOver'
import UserAuth from '../Pages/Reports/UserAuth'
import FraudReport from '../Pages/Reports/FraudReport'



const ReportRoutes = () => {
  return (
    <Routes>
        <Route path= "account-statement" element = {<AccountStatement/>} />
        <Route path = "party-win-loss" element = {< PartyWinLoss />} />
        <Route path = "current-bets" element = {< CurrentBets />} />
        <Route path= "user-history" element = {<UserHistory/>} />
        <Route path = "general-lock" element = {< GeneralLock />} />
        <Route path = "our-casino-result" element = {< OurCasino />} />
        <Route path= "live-casino-result" element = {<LiveCasino/>} />
        <Route path = "sportbook-report" element = {< Sportbook />} />
        <Route path = "turn-over" element = {< TurnOver />} />
        <Route path = "user-authentication" element = {< UserAuth />} />
        <Route path = "fraud-report" element = {< FraudReport />} />
    </Routes>
  )
}

export default ReportRoutes
