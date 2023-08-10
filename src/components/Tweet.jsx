import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage props={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User props={tweet.user} />

          <Timestamp props={tweet.timestamp} />
        </div>

        <Message props={tweet.message} />


        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
