import React from 'react'
import './RightBg.scss'
import Profile from '../profile/Profile'
import LineGraph from '../lineGraph/LineGraph'
import NewTransaction from '../newTransaction/NewTransaction'

export default function RightBg() {
  return (
    <div className='right-bg'>
        <Profile />
        <LineGraph />
        {/* <LineGraph /> */}
        <NewTransaction />
    </div>
  )
}
