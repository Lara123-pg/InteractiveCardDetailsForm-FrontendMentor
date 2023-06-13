import React, { useEffect, useState } from 'react';

import cardFront from '../assets/bg-card-front.png';
import cardBack from '../assets/bg-card-back.png';
import cardLogo from '../assets/card-logo.svg';
import { ConfirmCard } from '../components/ConfirmCard';
import { Button } from '../components/Button';

export function CardForm() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dateError, setDateError] = useState('');

    const [cvc, setCvc] = useState('');
    const [cvcError, setCvcError] = useState('');

    const [confirm, setConfirm] = useState(false);

    function validate() {
        let error = false   

        setNameError(null);
        const regexName = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;

        if (name == '') {
            setNameError('Can´t be black');
            error = true;

        } else if (!regexName.test(name)) {
            setNameError('Wrong format');
            error = true;
        }

        setCardNumberError(null);
        const regexNumber = /((?:[\d][\s]?){5}[\d])/

        if (cardNumber == '') {
            setCardNumberError('Can´t be black');
            error = true;

        } else if(!regexNumber.test(cardNumber)) {
            setCardNumberError('Wrong format');
            error = true;
        }

        setDateError(null);
        
        if ((month && year) == '') {
            setDateError('Can´t be black');
            error = true;

        } else if ((month.length || year.length) != 2) {
            setDateError('Two digits required');
            error = true;

        } else if ((month <= 0 || month > 12) || (year < 16)) {
            setDateError('Put the correct values');
            error = true;
        }

        setCvcError(null);
        const regexCVC = /^[0-9]{3,4}$/;

        if (cvc == '') {
            setCvcError('Can´t be black');
            error = true;

        } else if (!regexCVC.test(cvc)) {
            setCvcError('Wrong format');
            error = true;

        }
    
        setConfirm(!error)

        return !error
    }

    function maskNumberCard(value) {
        let count = 0;
        let numberCard = '';

        for(let i = 0; i < value.length; i++) {
            count ++;
            numberCard += value[i]

            if (count == 4) {
                numberCard += ' '
           
                count = 0
            }
        }

        return numberCard
    }

    function limNumbersMonth(month) {
        if (month > 12 || month < 0) {
            setMonth('')
        }
    }

    useEffect(() => {
        const currentYear = new Date().getFullYear().toString()
        const lastNumbersYear = Number(currentYear[2] + currentYear[3])

        if (year > lastNumbersYear) {
            setYear('')
        }
    }, [year])

    return (
        <div className="w-full flex flex-row justify-between relative extra9:flex-col">
            <div className="h-full bg-gradient-to-t from-gradient1 to-gradient2 w-[50%] extra9:w-full"/>

            <div className="absolute top-24 ml-44 w-[40%] tracking-widest extra3:left-30 extra4:-left-20 extra5:ml-40 extra7:ml-24 extra9:bottom-10 extra9:mb-52 extra9:ml-44">
                <div className="extra9:absolute extra9:-right-10 extra9:bottom-1 extra9:z-10 extra11:mb-10 extra12:mb-24 extra13:mb-32">
                    <img src={cardFront} alt="Card front" className="mb-10 mr-10 relative extra11:w-[90%]"/>

                    <div className="flex flex-col justify-around absolute top-0 left-0 w-[85%] h-[55%] px-9 extra9:h-full extra9:pb-10">
                        <img src={cardLogo} alt="Card logo" className="w-[20%]"/>

                        <div className="flex mb-8 flex-col justify-between h-[30%] w-full pr-1 text-background">
                            <p className="text-[1.7rem] extra:text-[1.775rem] extra2:text-[1.6775rem] extra3:text-[1.5775rem] extra4:text-[1.4700rem] extra5:text-[1.300rem] extra6:text-[1.200rem] extra7:text-[1.19rem] extra8:text-[1rem] extra9:text-[1.15rem] extra9:tracking-widest extra10:text-[1.25rem] extra11:text-sm extra12:text-xs extra13:text-[0.66rem]">{cardNumber ? cardNumber : '0000 0000 0000 0000'}</p>

                            <div className="flex justify-between text-sm">
                                <p className="extra9:text-[0.8rem] extra12:text-xs extra13:text-[0.5rem]">{name ? name : 'JANE APPLESEED'}</p>
                                <p className="extra9:text-[0.8rem] extra12:text-xs extra13:text-[0.6rem]">{month ? month : '00'}/{year ? year : '00'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-full ml-6 -top-8 extra9:absolute extra9:-mt-10 extra9:left-28 extra13:-ml-24">
                    <img src={cardBack} alt="Card back" className="ml-12"/>

                    <div className="absolute px-6 flex justify-end items-center h-[30%] top-20 left-20 right-20 extra:-mr-2 extra2:-mr-7 extra3:-mr-14 extra4:-mr-20 extra5:-mr-24 extra6:-mt-[2.4rem] extra7:-mt-[2.7rem] extra9:text-[0.8rem] -mt-[2.1rem] extra9:-mt-[3.3rem] extra12:-mr-[7.5rem]">
                        <p className="text-background -mb-[4.5rem] text-base tracking-widest extra11:-mt-4 extra12:-mt-8 extra12:text-sm extra13:-mt-12 extra13:text-xs">{cvc ? cvc : '000'}</p>
                    </div>
                </div>
        
            </div>

            <div className="w-full h-[90%] flex flex-col justify-center items-center ml-4 extra9:-ml-28 extra12:mb-28">
                {confirm ? 
                    <ConfirmCard 
                        setContinue={setConfirm} 
                        setCardNum={setCardNumber} 
                        setCVC={setCvc} 
                        setMonth={setMonth} 
                        setYear={setYear} 
                        setName={setName}  
                    /> 
                    : 
                    (
                        <form className="w-[90%] h-full flex flex-col justify-center items-center extra:pl-10 extra2:pl-14 extra4:ml-14 extra9:mt-10 -mb-[6rem]">
                            <div className="flex flex-col w-[35%] ml-16 extra4:ml-0">
                                <label 
                                    htmlFor="name" 
                                    className="text-backgroundButton text-sm" 
                                >
                                    CARDHOLDER NAME
                                </label>

                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="e.g. Jane Appleseed"
                                    className="px-2 py-2 w-full mt-3 rounded-lg border border-colorPlaceholder extra4:w-[300px] focus:border-gradient2 "
                                    autoFocus
                                    onChange={(event) => {
                                        setName(event.target.value.toUpperCase())
                                        setNameError(null);
                                    }}
                                    maxLength = {40}
                                />

                                <span className="text-inputErros text-xs py-1">{nameError}</span>
                            </div>

                            <div className="mt-6 flex flex-col w-[35%] ml-16 extra4:ml-0">
                                <label 
                                    htmlFor="number"
                                    className="text-backgroundButton text-sm" 
                                >
                                    CARD NUMBER
                                </label>

                                <input 
                                    type="text" 
                                    id="number"
                                    placeholder="e.g. 1234 5678 9123 0000"
                                    className="px-2 py-2 w-full mt-3 rounded-lg border border-colorPlaceholder focus:border-gradient2 extra4:w-[300px]"
                                    onChange={(event) => {
                                        setCardNumber(maskNumberCard(event.target.value));
                                        setCardNumberError(null);
                                    }}
                                    maxLength = {16}
                                />

                                <span className="text-inputErros text-xs py-1">{cardNumberError}</span>
                            </div>

                            <div className="mt-6 mb-6 mr-14 flex w-[35%] justify-center items-center extra4:w-[45%] ml-32 extra13:w-[50%]">
                                <div className="flex flex-col">
                                    <label 
                                        htmlFor="date"
                                        className="text-backgroundButton text-sm" 
                                    >
                                        EXP. DATE (MM/YY)
                                    </label>

                                    <div className="flex gap-2">
                                        <input 
                                            type="text" 
                                            id="date"  
                                            placeholder="MM"
                                            className="px-3 py-2 w-[25%] mt-3 rounded-lg border border-colorPlaceholder focus:border-gradient2 extra13:w-[40%]" 
                                            value={month}
                                            onChange={(event) => {
                                                setMonth(event.target.value);
                                                setDateError(null);  
                                            }}
                                           
                                            onInput={limNumbersMonth(month)}
                                            maxLength={2}
                                        />

                                        <input 
                                            type="text" 
                                            id="date2" 
                                            placeholder="YY"
                                            className="px-3 py-2 w-[25%] mt-3 rounded-lg border border-colorPlaceholder focus:border-gradient2 extra13:w-[40%]" 
                                            value={year}
                                            onChange={(event) => {
                                                setYear(event.target.value);
                                                setDateError(null);
                                            }}  
                                            
                                            maxLength={2}
                                        />
                                    </div>

                                    <span className="text-inputErros text-xs py-1">{dateError}</span>
                                </div>

                                <div className="flex flex-col">
                                    <label 
                                        htmlFor="cvc"
                                        className="text-backgroundButton text-sm" 
                                    >
                                        CVC
                                    </label>
                                    <input 
                                        type="text" 
                                        id="cvc" 
                                        placeholder="e.g. 123"
                                        className="px-2 py-2 w-full mt-3 rounded-lg border border-colorPlaceholder focus:border-gradient2 extra13:w-full"
                                        onChange={(event) => {
                                            setCvc(event.target.value);
                                            setCvcError(null);
                                        }}
                                        maxLength = {3}
                                    />

                                    <span className="text-inputErros text-xs py-1">{cvcError}</span>
                                </div>
                            </div>

                            <Button 
                                name='Confirm'
                                validation={validate}
                            />
                        </form>
                    )
                }
            </div>
        </div>
    );
}