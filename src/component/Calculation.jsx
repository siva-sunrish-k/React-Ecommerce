import { useMemo, useState } from "react";



const Calculation = () => {

    const [count, setCount] = useState(10);
    const [text, setText] = useState("");

    const MathCalculation = (val) => {
        console.log("calculation..");
        
        let ans = 0;
        for (let i = 0; i < 10000; i++) {
            ans += val;
        }
        return ans;
    };

    const calculationValue = useMemo(()=>MathCalculation(count),[count])
    // const calculationValue  = MathCalculation(count);

    console.log("Calculation Value: ", calculationValue);
    

    return (
        <div>
            <button className="bg-red-500 text-white p-2 m-2"
                onClick={() => {
                    setCount(count + 1);
                }}>
                Increment Counter
            </button>

            <p>Count: {count}</p>
            <p>CalculationValue: {calculationValue} </p>


            <input type="text" value={text} onChange={(e)=>{
                setText(e.target.value);  //re-render
            }}/>
        </div>
    )
};

export default Calculation;