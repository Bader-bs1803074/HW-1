import React from 'react'
import CurrencyList from '../components/CurrencyList';
import { useState } from 'react';
import { useEffect } from 'react';
function dashboard() {

    const [apiData, setApiData] = useState("")
    const [isCurrencySelected, setIsCurrencySelected] = useState(false)
    const [dropdownData, setDropdownData] = useState([])
    const [baseValue, setBaseValue] = useState("")

    let currencyData = []
    let capturedInput = []

    useEffect(() => {
        if (baseValue !== null) {
            localStorage.setItem("base", JSON.stringify(baseValue))

        } else {
            localStorage.setItem("base", JSON.stringify(setBaseValue("USD")))
        }
    }, [baseValue])

    useEffect(() => {
        let data = localStorage.getItem("base")
        if (data !== null) {
            setBaseValue(JSON.parse(data))
        }

    }, [])




    useEffect(() => {
        fetch('https://api.exchangerate.host/latest?base=USD')
            .then(res => res.json())
            .then(data => setApiData(data))
    }, [])


    for (let key in apiData.rates) {
        currencyData.push({ key: key, rate: apiData.rates[key] })
    }


    async function handelChange(e) {
        setIsCurrencySelected(true)
        let selectedCurency = e.target.value;
        setBaseValue(selectedCurency)
        let ress = await fetch(`https://api.exchangerate.host/latest?base=${selectedCurency}`)
        let data = await ress.json();
        for (let key in data.rates) {
            capturedInput.push({ key: key, rate: data.rates[key] })
        }
        capturedInput.push({ base: data.base })
        setDropdownData(capturedInput)


    }






    let dropDown = currencyData.map((p, i) => {
        return <option className='options' key={i}>{p.key}</option>
    })



    return (
        <div className='app'>



            <div className='nav--contanier'>
                <div>
                    <select className='select' onChange={handelChange} value={!baseValue ? "USD" : baseValue}>{dropDown}</select>
                </div>
            </div>


 

            <CurrencyList
                currencyData={currencyData}
                isCurrencySelected={isCurrencySelected}
                dropdownData={dropdownData}
                baseValue={baseValue}
            />



        </div>
    )
}




export default dashboard