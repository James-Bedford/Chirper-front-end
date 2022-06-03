import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const moment = require("moment");

let initialChirps = [
  {
    username: `davePrince@yahoo.com`,
    message: "Has anyone got a petrol lawnmower I can borrow?",
    timeStamp: moment().subtract(8, "days").format("LL"),
    id: uuidv4(),
  },
  {
    username: `bobJone45@sky.co.uk`,
    message: "Looks like the weather maybe good tomorrow",
    timeStamp: moment().subtract(2, "days").format("LL"),
    id: uuidv4(),
  },
  {
    username: `summerangel21@hotmail.com`,
    message: " VW Camper for sale $4000 ono!",
    timeStamp: moment().subtract(2, "hours").add(24, "minutes").calendar(),
    id: uuidv4(),
  },
];

const App = () => {
  ///was start/top

  let [userName, setName] = useState("");
  let [userThought, setThought] = useState("");
  let [userthoughtsTime, setThoughtsTime] = useState("");
  let [userId, setUserId] = useState("");

  //useEffect updates the props immediatley - without it takes 2 clicks to update the chirps
  let specialId = uuidv4();
  useEffect(() => {
    setName(userName);
  }, [userName]);

  useEffect(() => {
    setThought(userThought);
  }, [userThought]);

  useEffect(() => {
    setThoughtsTime(userthoughtsTime);
  }, [userthoughtsTime]);

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  let chirpIt = () => {
    setName(userName);
    setThought(userThought);
    setThoughtsTime(moment().calendar());
    setUserId(uuidv4()); //fails first time button pressed
    //remove the first object as we only want three to appear
    let idToRemove = initialChirps[0].id;
    let removeElement = document.getElementsByClassName(idToRemove);

    while (removeElement.length > 0) {
      removeElement[0].parentNode.removeChild(removeElement[0]);
    }

    initialChirps.shift();
    //add new message
    let timeRecorded = moment().calendar();
    let seq = uuidv4();
    initialChirps.push({
      username: userName,
      message: userThought,
      timeStamp: timeRecorded,
      id: seq,
    });
    /*
    for (let key in initialChirps) {
      console.log(
        `test ${initialChirps[key].username}${initialChirps[key].message}${initialChirps[key].timeStamp}${initialChirps[key].id}`
      );
    }
*/
    seedChirps(userName, userThought, timeRecorded, seq);
    setName("");
    setThought("");
  };
  useEffect(() => {
    for (let key in initialChirps) {
      seedChirps(
        initialChirps[key].username,
        initialChirps[key].message,
        initialChirps[key].timeStamp,
        initialChirps[key].id
      );
    }
  }, []);
  return (
    <>
      <div class="container mt-3">
        <div class="jumbotron text-center bg-info text-white">
          <h1>Post a Chirp</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 ">
          <div class="card m-1">
            <div class="card-body">
              <h1 class="card-title jumbotron text-center bg-success text-white">
                Chirper
              </h1>

              <textarea
                class="form-control mt-2"
                id="username"
                rows="1"
                placeholder="Username"
                onChange={(event) => setName(event.target.value)}
                value={userName}
              ></textarea>

              <textarea
                class="form-control mt-2"
                id="Textarea1"
                rows="1"
                placeholder="Your thoughts ..."
                onChange={(event) => setThought(event.target.value)}
                value={userThought}
              ></textarea>
              <a href="#" class="btn btn-success mt-2" onClick={chirpIt}>
                Chirp It
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-1">
            <div class="card-body">
              <h1 class="card-title jumbotron text-center bg-warning text-white">
                Chirps
              </h1>
              <div id="chirpy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

function seedChirps(user, message, time, idSeq) {
  let element = document.getElementById("chirpy");
  let userNameP = document.createElement("div");
  let uniqueId = idSeq;
  userNameP.innerHTML = '<div class="card" ></div>';
  userNameP.style.color = "Black";
  userNameP.style.fontWeight = "bold";
  userNameP.setAttribute("class", uniqueId);
  let userNameH = document.createTextNode(user);
  userNameP.appendChild(userNameH);
  let userMessageP = document.createElement("p");
  userMessageP.setAttribute("class", uniqueId);
  let userMessagePText = document.createTextNode(message);
  userMessageP.appendChild(userMessagePText);
  let userTimeP = document.createElement("p");
  userTimeP.setAttribute("class", uniqueId);
  let userTimeText = document.createTextNode(time);
  userTimeP.style.color = "Grey";
  userTimeP.appendChild(userTimeText);
  element.appendChild(userNameP);
  element.appendChild(userMessageP);
  element.appendChild(userTimeP);
}
