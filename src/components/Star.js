import {AiFillStar} from "react-icons/ai";

export default function Star({selected, onSelect}){
    return (
        <AiFillStar color={selected?"orange":"black"}  onClick= {onSelect}/>
    )
}