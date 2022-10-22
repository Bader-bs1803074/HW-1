import React from 'react'

function CurrencyPair({ currencyData,
    isCurrencySelected, dropdownData,baseValue
}){


let output = currencyData.map((p,i) => {

    return <div className='pair--container' key={i}>

        <div className='currency--pairs'>
            USD / {p.key}
        </div>

        <div className='rate'>
            {p.rate}

        </div>


    </div>

})

let convertOutput = dropdownData.map((p,i) => {
    return <div className='pair--container' key={i}>

        <div className='currency--pairs'>
            {baseValue} / {p.key}
        </div>

        <div className='rate'>
            {p.rate}

        </div>


    </div>

})

return (
    <div>


        {isCurrencySelected ? convertOutput : output}


    </div>
)
}

export default CurrencyPair