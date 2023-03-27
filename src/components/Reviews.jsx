import getReviews from "./api/ReviewsApi";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(()=>{
    async function GetReviewsInfo(){
        try{
            const data = await getReviews(movieId);
            setReviews(data.results);
            // console.log(data.results)
        }
        catch(error){
            console.log(error)
        }
    }

    GetReviewsInfo();
})

return <ul>
  {reviews && reviews.map(review => {
    return (
      <li key={review.id}>
        <p>Author: {review.author}</p>
        <p>{review.content}</p>
      </li>
    );
  })}
</ul>
}

export default Reviews;