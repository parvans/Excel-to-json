import React from "react";

export const IndividualData = ({ individualExcelData }) => {
  console.log(individualExcelData?.Date?.toString());
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  return (
    <>
      <th>{individualExcelData.Id}</th>
      <th>{individualExcelData.FirstName}</th>
      <th>{individualExcelData.LastName}</th>
      <th>{individualExcelData.Gender}</th>
      <th>{individualExcelData.Country}</th>
      <th>{individualExcelData.Age}</th>
      <th>{convert(individualExcelData?.Date?.toString())}</th>
    </>
  );
};
