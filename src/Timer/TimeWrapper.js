import { useState } from "react";
import Timer from "./index";

const TimerWrapper = ({ duration, onExpire, beforeRestart }) => {
  const [hasExpired, setExpired] = useState(false);

  const onExpireHelper = () => {
    onExpire && onExpire();
    setExpired(true);
  };

  const handleRestart = () => {
    setExpired(false);
  };

  /* if the timer is not expired, then it will run the counter else it will show us the button to reset the timer */
  return !hasExpired ? (
    <Timer duration={duration} onExpire={onExpireHelper} />
  ) : (
    <button onClick={handleRestart}>Restart</button>
  );
};

export default TimerWrapper;
