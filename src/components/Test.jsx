import { useState } from "react";

function Test({children}) {
    const [visibility, setVisibility] = useState("");

    function toggleVisibility(){
        if(visibility === "") setVisibility("hidden");
        if(visibility === "hidden") setVisibility("");
    }

    return (
        <>
            <div className={visibility}>
                {children}
            </div>
            <div>
                <button onClick={() => toggleVisibility()}>🧩</button>
            </div>
        </>
    );
}

export default Test;
