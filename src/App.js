// import logo from "./logo.svg";
import { BsFillSendFill } from "react-icons/bs";
import "./App.css";
import { FaRobot } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [sendmsg, setSendmsg] = useState("");
  const [arrayOfmsg, setArrayOfmsg] = useState([
    {
      type: true,
      msg: "ask anything about tradePhlo",
    },
    {
      type: true,
      msg: "what is tradePhlo",
    },
    {
      type: false,
      msg: "tradePhlo is declaration (Import/export website)",
    },
    {
      type: true,
      msg: "How tradePhlo managing it",
    },
    {
      type: false,
      msg: "tradePhlo has different form for import and export and it has sells team and very hardworking software developer team which are working day and night to make importer or exporter work very easy",
    },
  ]);
  useEffect(() => {}, [sendmsg]);
  const onclickOfsend = () => {
    let newArr = [...arrayOfmsg];
    newArr[newArr.length] = {
      type: true,
      msg: sendmsg,
    };
    setSendmsg("");
    setArrayOfmsg(newArr);
    console.log("arrayofmsg", sendmsg, arrayOfmsg);
  };

  return (
    <div className="App">
      <div className="header">
        <p className="headerPicon">
          {" "}
          <FaRobot />{" "}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          /* height: 627px; */
          height: "78%",
        }}
      >
        <div className="msgContent">
          {arrayOfmsg.map((data, index) => {
            return (
              <div
                key={index}
                className={
                  data.type ? "msgDivContainersend" : "msgDivContainerreceive"
                }
              >
                <div
                  className={
                    data.type
                      ? "msgSpanContainersend"
                      : "msgSpanContainerreceive"
                  }
                >
                  <p className={data.type ? "spansend" : "spanrec"}>
                    {data.msg}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sender">
        <div>
          <span style={{ display: "flex", justifyContent: "center" }}>
            <input
              className="inputofsender"
              placeholder="Type question"
              value={sendmsg}
              onChange={(e) => {
                console.log(e.target.value);
                setSendmsg(e.target.value);
              }}
            />
            <p
              style={{ marginLeft: "-30px", display: "flex", color: "#5d5959" }}
              onClick={onclickOfsend}
              onKeyDown={(e) => (e.keyCode === 13 ? { onclickOfsend } : "")}
            >
              <BsFillSendFill
              // onClick={onclickOfsend}
              />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
