import React, { useEffect, useState } from "react";
import "./List.css";
function List() {
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      await fetch("/info")
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
        });
    };
    fetchingData();
  }, []);

  console.log(Info);

  return (
    <div className="list">
      {Info.map((item) => (
        <div className="data">
          <h4 className="item1 item">{item.id}</h4>
          <h4 className="item2 item">{item.name}</h4>
          <h4 className="item3 item">{item.username}</h4>
          <h4 className="item4 item">{item.email}</h4>
          <p className="item5 item">
            <p>
              {item.address.street}
              {item.address.suite}
            </p>

            <p>
              {item.address.city}
              {item.address.zipcode}
            </p>
          </p>
          <h4 className="item6 item">{item.phone}</h4>
          <h4 className="item7 item">{item.website}</h4>
          <p className="item8 item">
            <h4>{item.company.name}</h4>
            <h6>{item.company.catchPhrase}</h6>
            <h6> {item.company.bs}</h6>
          </p>
        </div>
      ))}
    </div>
  );
}

export default List;
