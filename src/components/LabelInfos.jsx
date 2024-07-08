import { useState } from "react";
import { CircleHelp, TriangleAlert } from "lucide-react";

export default function LabelInfos({icon, infos}) {
    const [infosVisible, setInfosVisible] = useState(false);

    function handleMouseEnter(){
        setInfosVisible(true);
    }

    function handleMouseLeave(){
        setInfosVisible(false);
    }

    return (
        <div className="relative">
            {icon === "info" && <CircleHelp size={14} className="text-color3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>}
            {icon === "important" && <TriangleAlert size={14} className="text-color4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>}
            {infosVisible && icon === "info" && (
  <div className="fixed inset-x-0 top-40 mx-auto max-w-sm w-full p-4 z-20">
    <p className="bg-color1 text-color3 p-4 rounded-md border border-color3">
      {infos}
    </p>
  </div>
)}
{infosVisible && icon === "important" && (
  <div className="fixed inset-x-0 top-40 mx-auto max-w-md w-full p-4 z-20">
    <p className="bg-color1 text-color4 p-4 rounded-md border border-color4">
      {infos}
    </p>
  </div>
)}
        </div>
    );
}
