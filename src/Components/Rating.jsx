import { IoIosStar, IoIosStarHalf } from "react-icons/io";


export default function Rating({rating}){
    let decimal=rating % 1
    let whole = Math.floor(rating)
    const stars = [];

        // Push all the full stars
        for (let i = 0; i < whole; i++) {
            stars.push(<IoIosStar key={i} color="gold" size={20} />);
        }

        // Push a half star if needed
        if (decimal !== 0) {
            stars.push(<IoIosStarHalf key="half" color="gold" size={20} />);
        }

        return (
        <>
            {stars}
            
        </>
    )
}
