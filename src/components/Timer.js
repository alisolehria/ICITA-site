import React from "react";
import DateCountdown from "react-date-countdown-timer";

class Timer extends React.Component {
  render() {
    return (
      <div className="timer_section">
        <div className="timer_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="timer_container">
                <DateCountdown dateTo="November 13, 2021 00:00:00 GMT+03:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
