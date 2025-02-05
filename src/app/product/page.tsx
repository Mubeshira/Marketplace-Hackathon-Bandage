"use client"
import Header from '@/components/Header'
import { clerkGetUser, sanityUserPost } from '@/services/userApi'
import React, { useEffect } from 'react'

function Product() {
  useEffect(() => {
    sanityUserPost()
    
  }
    , [])
  return (
    <div>
      <Header/>
      <h1>Product</h1>
      
    </div>
  )
}

export default Product