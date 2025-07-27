
import { useState } from "react";



const Contact2 = () => {

    // Storing the values ---> usestate()
    // validation ---> skip
    // At submit ---> handle the forms  ---> API call or Anything


    const [email, setEmail] = useState();
    const [number, setNumber] = useState();


    console.log(email, number);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        console.log("Form submitted with Email:", email, "and Number:", number);
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <label htmlFor="">Email:</label>
                        <input className="border border-black" type="text" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />

                        <label htmlFor="">Number:</label>
                        <input type="text" className="border border-black" onChange={(e) => {
                            setNumber(e.target.value);
                        }} />

                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3"
                            type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact2;