import "./App.css";
import UserTable from "./UserTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/Slices/userSlice";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const { userList, status, error } = useSelector((state) => state.users);
  const [searchItem, setsearchItem] = useState("");

  const [dataList, setDataList] = useState([]);

  const headings = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta) => {
          const rowData = dataList[tableMeta.rowIndex];
          return (
            <div className="flex">
              <i
                className={`text-lg gap-2 ${
                  rowData.gender === "n/a"
                    ? "fa fa-android"
                    : "fa fa-user-circle"
                }`}
              ></i>
              <span className="ml-2">{value}</span>
            </div>
          );
        },
      },
    },
    { name: "height", label: "Height" },
    { name: "mass", label: "Mass" },
    { name: "hair_color", label: "Hair Color" },
    { name: "skin_color", label: "Skin Color" },
    { name: "eye_color", label: "Eye Color" },
    { name: "birth_year", label: "Birth Year" },
    { name: "gender", label: "Gender" },
  ];

  useEffect(() => {
    setDataList(userList);
  }, [userList]);

  useEffect(() => {
    dispatch(fetchUsers(searchItem && searchItem));
  }, [searchItem]);

  const handleSearch = (searchItem) => {
    setsearchItem(searchItem);
  };


  return (
    <div className="App">
      <div className="p-10">
        <UserTable
          headings={headings}
          data={dataList}
          handleSearch={handleSearch}
          setDataList={setDataList}
        />
      </div>
    </div>
  );
}

export default App;
