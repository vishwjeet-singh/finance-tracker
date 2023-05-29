import React from 'react'
import "./NewTransaction.scss"
import { Paper } from '@mui/material'
export default function NewTransaction() {
  return (
    <Paper className="new-trans-paper" elevation={1}>
      <div className='plus-sign'>+</div>
        <div className="new">Add Transaction</div>
    </Paper>
  )
}
