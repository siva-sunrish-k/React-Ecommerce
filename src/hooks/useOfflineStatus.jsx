import { useEffect, useState } from "react"




const useOfflineStatus = () => {

    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        addEventListener("online", () => {
            setStatus(true);
        });

        addEventListener("offline", () => {
            setStatus(false);
        });

    }, [status]);


    return status;
};

export default useOfflineStatus;