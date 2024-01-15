import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Table() {

//display function starts

    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        const reqData = await fetch("http://localhost:3000/Student");
        const resData = await reqData.json();
        setUserData(resData);
      };

    useEffect(() => {
     
      getUserData();
    }, []);
    

//Add function starts



    const [formValue, setFormValue] = useState({
      StudID: "",
      StudName: "",
      StudMob: "",
      StudMark: "",
  });

    const handleInput = (e) => {
      const { name, value } = e.target;
      setFormValue({ ...formValue, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const allInputValue = {
        StudID: formValue.StudID,
        StudName: formValue.StudName,
        StudMob: formValue.StudMob,
        StudMark: formValue.StudMark,
      };
      let res = await fetch("http://localhost:3000/Student", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(allInputValue),
      });
      getUserData();
    };


    //delete function starts

const handleDelete = async (StudID) =>{
    let res = await fetch("http://localhost:3000/Student"+StudID, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      });
      getUserData();
}



// update function starts

  const handleUpdate = async (StudID)=>{
    try{
        const reqData = await fetch("http://localhost:3000/Student"+StudID);
    const resData = await reqData.json();
    handleUpdate();
    setFormValue({
        ...formValue,
        StudID: resData.StudID,
        StudName: resData.StudName,
        StudMob: resData.StudMob,
        StudMark: resData.StudMark,
      });
    
    }
    catch(err){}
    
}


const Update = async () => {
    const allInputValue = {
        StudID: formValue.StudID,
        StudName: formValue.StudName,
        StudMob: formValue.StudMob,
        StudMark: formValue.StudMark,
      };
      let res = await fetch("http://localhost:3000/Student", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(allInputValue),
      });
      getUserData();
  };


  return (
    <React.Fragment>
      <div className="container">
        <form>
          <div className="form-group">
            <label for="StudID">Student ID</label>
            <input
              type="text"
              name="StudID"
              className="form-control"
              id="StudID"
              value={formValue.StudID}
              onChange={handleInput}
            />

            <label for="StudName">Student Name</label>
            <input
              id="StudName"
              name="StudName"
              className="form-control"
              value={formValue.StudName}
              onChange={handleInput}
            />

            <label for="StudMob">Student Mobile No.</label>
            <input
              id="StudMob"
              name="StudMob"
              className="form-control"
              value={formValue.StudMob}
              onChange={handleInput}
            ></input>

            <label for="StudMark">Student Marks</label>
            <input
              id="StudMark"
              name="StudMark"
              className="form-control"
              value={formValue.StudMark}
              onChange={handleInput}
            ></input>

            <br />

            <button id="Insert" className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>

            <button id="Update" className="btn btn-primary" onClick={Update}>
              Update
            </button>
          </div>
        </form>
      </div>

      <br />
      <br />
      <br />

      <div className="container">
      <div className="Table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">StudID</th>
              <th scope="col">StudName</th>
              <th scope="col">StudMob</th>
              <th scope="col">StudMark</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((userData, index) => (
              <tr key={index}>
                <td scope="col">{userData.StudID}</td>
                <td>{userData.StudName}</td>
                <td>{userData.StudMob}</td>
                <td>{userData.StudMark}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>handleDelete(userData.StudID)}>Delete</button>&nbsp;&nbsp;
                  <button className="btn btn-warning" onClick={()=>handleUpdate(userData.StudID)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br />
      </div>
    </React.Fragment>
  );
}
export default Table;
