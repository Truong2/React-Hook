import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./covid.scss";
import dayjs from "dayjs";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  const date = new Date();
  let d = date.getDay();
  let m = date.getMonth();
  let y = date.getFullYear();
  const dateCurrent = dayjs(date).format("YYYY-MM-DD");
  if (d <= 30) {
    d = d - 30;
  }
  const dateOld = new Date(y, m, d);
  const dateOldest = dayjs(dateOld).format("YYYY-MM-DD");
  useEffect(async () => {
    setTimeout(async () => {
      let res = await axios.get(
        `https://api.covid19api.com/country/vietnam?from=${dateOldest}T00%3A00%3A00Z&to=${dateCurrent}T00%3A00%3A00Z`
      );
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = dayjs(item.Date).format("DD/MM/YYYY");
          return item;
        });
      }
      setDataCovid(data);
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="list-covid">
      <h2>Covid 19</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{item.Date}</td>
                    <td>{item.Confirmed}</td>
                    <td>{item.Active}</td>
                    <td>{item.Deaths}</td>
                    <td>{item.Recovered}</td>
                  </tr>
                </>
              );
            })}
          {loading === true && (
            <>
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  loading...
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
