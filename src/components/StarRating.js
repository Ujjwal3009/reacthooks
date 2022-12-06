import { useState } from "react";
import Star from "./Star";

function createArray(length){
    return  [...Array(length)];
}

function StarRating({totalStar}){
    const [selectedStar, setSelectedStar] = useState(0);
    return(
        <div>
            {
                createArray(totalStar).map((n,index) =>(
                    <Star  key={index}
                    selected = {selectedStar>index}
                    onSelect = {() => setSelectedStar(index+1)}
                    />
                ))
            }

            <p>{selectedStar} out of {totalStar}</p>
        </div>
    )
}

export default StarRating;