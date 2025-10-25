"use client"
import About from '@/components/about'
import Contacts from '@/components/contact'
import Experience from '@/components/exprience'
import Footor from '@/components/footer'
import Home from '@/components/home'
import Navabar from '@/components/navabar'
import Project from '@/components/project'
import Skill from '@/components/skill'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navabar />
      <Home/>
      <About />
      <Skill />
      <Experience/>
      <Project />
      <Contacts />
      <Footor/>
    </div>
  )
}

export default page
