import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import styles from './dashboard.module.scss'

const Events = () => {
  const events = useSelector((state) => state.app)
  return <div></div>
}

export default Events
