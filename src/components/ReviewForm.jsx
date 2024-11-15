import { useEffect, useState } from 'react';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs";
import PropTypes from "prop-types";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {

  const [localReview, setLocalReview] = useState(data.review || "neutral");
  const [localComment, setLocalComment] = useState(data.comment || "");

  useEffect(() => {
    setLocalReview(data.review || 'neutral');
    setLocalComment(data.comment || '');
  }, [data.review, data.comment]);

  const handleReviewChange = (event) => {
    setLocalReview(event.target.value);
    updateFieldHandler("review", event.target.value);
  };

  const handleCommentChange = (event) => {
    setLocalComment(event.target.value);
    updateFieldHandler("comment", event.target.value);
  };

  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            required
            checked={localReview === "unsatisfied"}
            onChange={handleReviewChange}
          />
          <BsFillEmojiFrownFill />
          <p>Not satisfied</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="neutral"
            required
            checked={localReview === "neutral"}
            onChange={handleReviewChange}
          />
          <BsFillEmojiNeutralFill />
          <p>Neutral</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            required
            checked={localReview === "satisfied"}
            onChange={handleReviewChange}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfied</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="very_satisfied"
            required
            checked={localReview === "very_satisfied"}
            onChange={handleReviewChange}
          />
          < BsFillEmojiHeartEyesFill />
          <p>Very satisfied</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comments: </label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Leave your experience here"
          required
          value={localComment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
    </div>
  )
}

ReviewForm.propTypes = {
  data: PropTypes.shape({
    review: PropTypes.oneOf(["unsatisfied", "neutral", "satisfied", "very_satisfied"]).isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
  updateFieldHandler: PropTypes.func.isRequired,
};

export default ReviewForm