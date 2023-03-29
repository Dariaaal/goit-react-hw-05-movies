import getReviews from "../api/ReviewsApi";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css'

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
}, [movieId])

return <ul className={css.list}>
  {reviews && reviews.map(review => {
    return (
      <li key={review.id}>
        <p className={css.author}>Author: {review.author}</p>
        <p>{review.content}</p>
      </li>
    );
  })}
  {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
</ul>
}

export default Reviews;