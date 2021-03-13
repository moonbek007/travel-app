import React from "react";
import s from "./date.module.css";

import { timeAPI } from "../../../services/api.service";
import TravelAppContext from "../../context/context";

const Date = () => {
  const { area, cityTime } = React.useContext(TravelAppContext);
  console.log(area, cityTime);
  const [min, setMin] = React.useState(null);
  const [hour, setHour] = React.useState(null);
  const [date, setDate] = React.useState(null);

  React.useEffect(() => {
    const temporaryAsyncFunction = async () => {
      const time = await timeAPI.fetchTime(area, cityTime);
      setMin(await time.datetime.substring(14, 16));
      setHour(await time.datetime.substring(11, 14));
      setDate(
        (await time.datetime.substring(8, 10)) +
          " " +
          time.datetime.substring(5, 7) +
          " " +
          time.datetime.substring(0, 4)
      );
    };
    temporaryAsyncFunction();
  }, []);

  return (
    <div className={s.wrapper}>
      <span>{hour}</span>
      {/* <span>:</span> */}
      <span>{min}</span>
      <span className={s.date}>{date}</span>
    </div>
  );
};

export default Date;
