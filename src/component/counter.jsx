import { use, useState } from "react";


const Counter = () => {
    let value = 0;

    // local state variable
    let [val, setVal] = useState(0); //number

    let [user, setUser] = useState("ram");  //String

    let [online, setOnline] = useState(true);  //boolean

    // useEffect(() => {
    //     setVal(val+1);   // Re-Render the comonent
    //     console.log(val);
    // });

    return (
        <>
            <div>
                <p>Counter</p>

                {val}

                <br />

                <button className="bg-green-500 py-2 px-5 m-2"
                    onClick={() => {
                        value = value + 1;
                        setVal(val + 1);
                        console.log(val);
                    }} >
                    +
                </button >


                <button className="bg-pink-500 py-2 px-5 m-2"
                    onClick={() => {
                        value = value - 1;
                        setVal(val - 1);
                        console.log(val);
                    }} >
                    -
                </button >

            </div>


            <div>
                <p>{user}</p>
                <button className="bg-green-500 py-2 px-5 m-2"
                    onClick={() => {
                        setUser("sam");
                    }} >
                    update the text
                </button >
            </div>

            <div>
                {online ? "green " : "red "}

                <button
                    onClick={() => {
                        setOnline(false);
                    }}>
                    update the value
                </button>
            </div>


        </>
    );

};




export default Counter;