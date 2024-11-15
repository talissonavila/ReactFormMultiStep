import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs";
import { PropTypes } from "prop-types";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Wait just a little bit more...</h2>
      <p>Your opinion is too much important to us. Leave a message and recieve a 10% off cupom in your next purchase.</p>
      <p>To submit your review, click on button below.</p>
      <h3>Here is your review: {data.name}</h3>
      <p className="review-data">
        <span>Your satisfation with the product: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Your coment: </span>
        {data.comment}
      </p>
    </div>
  )
}

Thanks.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

export default Thanks