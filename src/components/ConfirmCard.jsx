import iconComplete from '../assets/icon-complete.svg'

import { Button } from './Button';

export function ConfirmCard({ setContinue, setCardNum, setCVC, setMonth, setYear, setName }) {
    const backToForm = () => {
        setName(null)
        setCardNum(null)
        setMonth(null)
        setYear(null)
        setCVC(null)
        setContinue(false)
    }

    return (
        <div className="w-[40%] h-[45%] flex flex-col justify-around items-center extra4:ml-44 extra10:-mr-14 extra9:h-[80%]">
            <img src={iconComplete} alt="Icon complete" className="w-[20%]" />

            <div className="w-[600px] h-[50%] flex flex-col items-center justify-around">
                <h1 className="text-2xl text-backgroundButton tracking-widest">THANK YOU!</h1>
                <p className="text-colorNameInputs">We´ve added your card details</p>

                <Button 
                    name='Continue'
                    validation={backToForm}
                />
            </div>
        </div>
    );
}