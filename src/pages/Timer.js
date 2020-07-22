import React from "react";
import DateCountdown from "react-date-countdown-timer";

class Timer extends React.Component {
  render() {
    return (
      <div class="timer_section">
        <div class="timer_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="timer_container">
                <DateCountdown dateTo="January 01, 2021 00:00:00 GMT+03:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
