import React, { useEffect, useState } from "react";
import "./style.css";
import { FcSearch } from "react-icons/fc";
import Button from "@mui/material/Button";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Users = () => {
  const [Users, setUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);
  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
      let userArr = [];
      snapshot.forEach((Users) => {
        if (user.uid != Users.key) {
          userArr.push({ ...Users.val(), id: Users.key });
        }
      });
      setUsers(userArr);
    });
  }, []);

  const handleUserSearch = (e) => {
    let arr = [];
    if (e.target.value.length === 0) {
      setFilterUser([]);
    }
    Users.filter((item) => {
      if (item.username.toLowerCase().includes(e.target.value.toLowerCase())) {
        arr.push(item);
        setFilterUser(arr);
      }
    });
  };

  return (
    <>
      <div className="user_list">
        <div className="user_list_header">
          <h2>User List</h2>
          <div className="user_list_searchBox">
            <FcSearch />
            <input
              onChange={handleUserSearch}
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="user_list_body">
          {Users.map((item, i) => (
            <div className="user_list_wrapper" key={i}>
              <div className="user_list_img">
                <img src="/assets/avater.png" alt="avater" />
              </div>
              <div className="user_list_titles">
                <h3>{item.username}</h3>
              </div>
              <div className="user_list_join">
                <Button variant="outlined">ADD FRIEND</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
