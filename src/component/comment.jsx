import { useState } from "react";


const Comment = () => {

    const [name, setName] = useState();
    const [message, setMessage] = useState();


    // to reduce the no of state ( object )
    const [data, setData] = useState({ name: "", message: "" });  //die value

    const [comment, setComment] = useState([]); // to store comments

    console.log("Name:", name);
    console.log("Message:", message);


    return (

        <>
            <p>hello this comment component</p>



            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="border-green-300"
                onChange={(e) => {
                    // setName(e.target.value);
                    // setData({name: e.target.value});  //dir value
                    setData((prev) => {
                        return { ...prev, name: e.target.value };
                    });
                }}
            />

            <label htmlFor="name">Message</label>
            <input type="text" id="name" className="border-green-300"
                onChange={(e) => {
                    // setMessage(e.target.value);
                    // setData({message: e.target.value});    //dir value
                    setData((prev) => {
                        return { ...prev, message: e.target.value };
                    });
                }}
            />


            {/* [{},{},{},{new}] */}
            <button onClick={() => setComment([...prev, data])}>
                Submit
            </button>

            <p>----------------------------------------------</p>

            <p>Name:{name}</p>
            <p>Message:{message}</p>

            <p>----------------------------------------------</p>

            <p>Object:{JSON.stringify(data)}</p>
            <p>Array:{JSON.stringify(comment)}</p>
        </>
    )
}

export default Comment;