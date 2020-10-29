//click simulating function
function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

//Javascript is weird
  function setTimedInterval(callback, delay, timeout){
    var id=window.setInterval(callback, delay);
    window.setTimeout(function(){
        window.clearInterval(id);
    }, timeout);
  }
//               left: 10px;

//top: $10px;
//This CSS is hard-coded because I wanted whole bot to work with only one file
let windowStyle = document.createElement(`style`);
    windowStyle.type = `text/css`;
    let css = `
            #wfbBox {
              position: absolute;
              border: 3px solid black;
              padding: 5px;
              text-align: center;
              background: url(https://i.imgur.com/PiNRrND.jpg);
              width: 256;
              height: 256;
              z-index: 390;
              color: white;
            }
            .wfbInputs {
              -webkit-box-sizing: content-box;
              -moz-box-sizing: content-box;
              box-sizing: content-box;
              margin: 0 auto;
              margin-bottom: 3px;
              padding: 2px;
              cursor: pointer;
              border: 2px solid black;
              -webkit-border-radius: 5px;
              border-radius: 5px;
              color: black;
              display: block;
            }
              input[id=wfbStartingField] {
                  text-align: center;
              }
              input[id=wfbFields] {
                  text-align: center;
              }
        `;
//This CSS is hard-coded because I wanted whole bot to work with only one file

//Bot box initiation
    let box = document.createElement(`div`);
        box.id = `wfbBox`;
    box.innerHTML = "WolniFarmerzyBot by Factual</br></br>";
    box.innerHTML += "Size of a single field</br>";
  //selection box
    let select = document.createElement(`select`);
        select.id = `wfbList`;
        select.classList.add(`wtbInputs`);
        select.setAttribute(
          `tip`,
          `Wybierz wielkosc`
        );
        let option1x1 = document.createElement(`option`);
          option1x1.setAttribute(`value`, "1x1");
          option1x1.text = "1x1";
          select.appendChild(option1x1);
        let option2x1 = document.createElement(`option`);
          option2x1.setAttribute(`value`, "2x1");
          option2x1.text = "2x1";
          select.appendChild(option2x1);
        let option2x2 = document.createElement(`option`);
          option2x2.setAttribute(`value`, "2x2");
          option2x2.text = "2x2";
          select.appendChild(option2x2);

    box.appendChild(select);
    box.innerHTML += "</br></br>Start field ID";
  //Starting field input box
    let startingField = document.createElement(`input`);
        startingField.type = `number`;
        startingField.id = `wfbStartingField`;
        startingField.classList.add(`wfbInputs`);

    box.appendChild(startingField);
    box.innerHTML += "</br>Number of fields";
  //Fields count input box
    let numberOfFields = document.createElement(`input`);
        numberOfFields.type = `number`;
        numberOfFields.id = `wfbFields`;
        numberOfFields.classList.add(`wfbInputs`);

    box.appendChild(numberOfFields);
    box.innerHTML += "</br>Press start when ready";
  //Start button
    let runButton = document.createElement(`button`);
        runButton.id = "wfbStart";
        runButton.innerHTML = "START CLICKING";
        runButton.classList.add(`wfbInputs`);
        box.appendChild(runButton);
  //Show grid button
    let gridButton = document.createElement(`button`);
        gridButton.id = "wfbGrid";
        gridButton.innerHTML = "SHOW GRID";
        gridButton.classList.add(`wfbInputs`);
        box.appendChild(gridButton);
  //Append to side of the game screen
    document.getElementById("questbarcontrol").appendChild(box);
  //Append style
    windowStyle.appendChild(document.createTextNode(css));
    document.head.appendChild(windowStyle);


//Loops in CS are weird ;_;
  var loopCounter = 0;
//Start buttion (main) function 
  document.getElementById("wfbStart").addEventListener("click", function() {
    var startF = document.getElementById("wfbStartingField").value;
    var fieldsF = document.getElementById("wfbFields").value;
    switch(document.getElementById("wfbList").value){
      case "1x1":
        loopCounter = startF;
        setTimedInterval(function(){
          eventFire(document.getElementById("b" + loopCounter), 'click');
          loopCounter++;
        }, 100, 100+(100*(fieldsF)));
      break;
      case "2x1":
        loopCounter = startF;
        setTimedInterval(function(){
          eventFire(document.getElementById("b" + loopCounter), 'click');
          loopCounter += 2;
        }, 100, 100+(102*(fieldsF)));
      break;
    }
  }); 

//Show grid function - display fields IDs (helps with calculating)
  document.getElementById("wfbGrid").addEventListener("click", function() {
    for (i = 1; i < 133; i++) {
      document.getElementById("field" + i).innerHTML = "🠗" + i + document.getElementById("field" + i).innerHTML;
      document.getElementById("field" + i).style.color = "white";
    } 
  }); 