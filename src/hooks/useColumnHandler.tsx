import React, { useState } from "react";

const useColumnHandler = () => {
  const [tableHeaders, setTableHeaders] = useState([
    "Id",
    "First Name",
    "Last Name"
  ]);


  return { tableHeaders };
}

export default useColumnHandler;