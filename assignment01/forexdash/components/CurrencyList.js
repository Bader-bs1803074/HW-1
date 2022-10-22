import React from 'react'
import CurrencyPair from './CurrencyPair'


function CurrencyList({  currencyData,dropdownData ,baseValue,isCurrencySelected

}) {

    return (
        <div className='pairs--container'>


            <CurrencyPair currencyData={currencyData}

                isCurrencySelected={isCurrencySelected}
                dropdownData={dropdownData}
                baseValue={baseValue}
               
            />





        </div>
    )
}

export default CurrencyList