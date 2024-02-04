import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { debounce } from "lodash";

const UserTable = ({ headings, data, handleSearch, setDataList }) => {
  

  const handleSortChange = (changedColumn, direction) => {
    setDataList((prevData) => {
      return [...prevData].sort((a, b) => {
        // Assuming the data type of each property is string or number
        const valueA = a[changedColumn];
        const valueB = b[changedColumn];

        if (direction === "asc") {
          return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        } else {
          return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        }
      });
    });
  };

  const options = {
    filter: false,
    viewColumns: false,
    serverSide: true,
    print: false,
    download: false,
    // rowsPerPageOptions: rowsPerPageConstant,
    pagination: true,
    // rowsPerPage: rowsPerPage,
    // count: totalElements,
    // page: page,
    // onChangePage: handleChangePage,
    // onChangeRowsPerPage: handleChangeRowsPerPage,
    search: true,
    sort: true,
    // searchText: search, // Set the searchText option to control the search term
    onSearchChange: (searchText) => handleSearchChange(searchText), // Add the onSearchChange handler
    onColumnSortChange: (changedColumn, direction) =>
      handleSortChange(changedColumn, direction),
  };

  const handleSearchChange = debounce((searchTerm) => {
    handleSearch(searchTerm);
  }, 300); // 300 milliseconds debounce time

  return (
    <>
      <MUIDataTable
        options={{ ...options, responsive: "scroll" }}
        data={data}
        columns={headings}
      />
    </>
  );
};

export default UserTable;
