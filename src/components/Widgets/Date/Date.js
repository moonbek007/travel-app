import React from "react";
import s from "./date.module.css";

class DateWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let date = this.state.date;
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timeZone: 'US/Eastern',       // timeZones Europe/Moscow, Europe/Busingen - швейц, Europe/Rome, Europe/Madrid, 	Europe/Warsaw, Europe/Prague, 	Turkey
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    return (
      <div className={s.wrapper}>
        {date.toLocaleString("tr", options)}       {/* language  ru en tr*/}

      </div>
    );
  }
};

export default DateWidget;
