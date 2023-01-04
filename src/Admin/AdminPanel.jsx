import React from 'react'
import Adminbar from './Adminbar'
import "./AdimnPanel.css"
import EbookRequests from './EbookRequests'
import { Route, Routes } from 'react-router-dom'
import DealersRequests from './DealersRequests'
import ContactedUser from './ContactedUsers'
import Products from './Products'

function AdminPanel() {
  return (
    <div className='adminpanel' >
        <Adminbar/>
        <Routes>
          <Route path="/ebook" element={<EbookRequests/>} />
          <Route path="/dealer" element={<DealersRequests/>} />
          <Route path="/contact" element={<ContactedUser/>} />
          <Route path="/product/*" element={<Products/>} />
        </Routes>
    </div>
  )
}

export default AdminPanel