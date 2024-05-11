import React from 'react'
import { useState } from 'react'
import EmailInput from './EmailInput'
import NameInput from './NameInput'
import AddressInput from './AddressInput'
import CountrySelect from './CountrySelect'
import PaymentSelect from './PaymentSelect'
import OrderForm from './OrderForm'

function Form() {

    return (
        <div className='form-container'>
            <h2>Payment Information</h2>
            <div className='small-container'>
                <p>Contact</p>
                <EmailInput />
            </div>
            <div className='small-container'>
                <p>Personal Information</p>
                <NameInput/>
                <AddressInput/>
                <CountrySelect/>
            </div>
            <div className='small-container'>
                <PaymentSelect />
            </div>
            <OrderForm/>
        </div>
    )
}

export default Form