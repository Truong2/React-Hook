import React, { Fragment } from "react";
import "../styles/covid.scss";
import dayjs from "dayjs";
import useFetch from "../Custom/Fetch";
import Loading from "./Loading";
import Count from "./Countdown";
const Covid = () => {
  const date = new Date(new Date().setHours(0, 0, 0, 0));
  const dateCurrent = dayjs(date).format("YYYY-MM-DD");
  const dateOld = dayjs(Date.now()).subtract(31, "days");
  const dateOldest = dayjs(dateOld).format("YYYY-MM-DD");
  const {
    data: dataCovid,
    loading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${dateOldest}T00%3A00%3A00Z&to=${dateCurrent}T00%3A00%3A00Z`,
    true
  );

  return (
    <div className="list-covid">
      <Count />
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
          {isError === false &&
            loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
              return (
                <Fragment>
                  <tr className="item" key={index}>
                    <td>{item.Date}</td>
                    <td>{item.Confirmed}</td>
                    <td>{item.Active}</td>
                    <td>{item.Deaths}</td>
                    <td>{item.Recovered}</td>
                  </tr>
                </Fragment>
              );
            })}
          {loading === true && (
            <>
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  <Loading />
                </td>
              </tr>
            </>
          )}
          {isError === true && (
            <>
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Error.........
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
