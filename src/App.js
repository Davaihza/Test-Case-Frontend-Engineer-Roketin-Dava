import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardStats from "./components/DashboardStats";
import UserTable from "./components/UserTable";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [nationalities, setNationalities] = useState({});

  useEffect(() => {
    // AMBIL 25 DATA USER
    axios.get("https://randomuser.me/api/?results=25")
      .then(res => setUsers(res.data.results));

    // AMBIL KODE KEWARGANEGARAAN (kode bendera)
    axios.get("https://flagcdn.com/en/codes.json")
      .then(res => setNationalities(res.data));
  }, []);

  return (
    <div className="container">
      <div className="section-top">
        <h2>Member Dashboard</h2>
        <DashboardStats users={users} />
      </div>
      <div className="section-bottom">
        <UserTable users={users} nationalities={nationalities} />
      </div>
    </div>
  );
}

export default App;