import React from 'react'
import './customSelect.css';
 

const CustomSelect = ({childern , label , required}) => {
  return (
    <section id="header-container">
    <select>
      <option disabled>What's your favorite movie ?</option>
      <option value="choix-2">Inception</option>
      <option value="choix-3">Godzilla</option>
      <option value="choix-4">Back to the future</option>
      <option value="choix-5">Shutter Island</option>
    </select>
  </section>
  )
}

export default CustomSelect
