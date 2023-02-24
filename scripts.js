window.addEventListener("load", function () {
    let takeoff = document.querySelector("#takeoff");
    let landing = document.querySelector("#landing");
    let missionAbort = document.querySelector("#missionAbort");
    let flightStatus = document.querySelector("#flightStatus");
    let shuttleBackground = document.querySelector("#shuttleBackground");
    let spaceShuttleHeight = document.querySelector("#spaceShuttleHeight");
    let up = document.querySelector("#up");
    let down = document.querySelector("#down");
    let right = document.querySelector("#right");
    let left = document.querySelector("#left");

    let spaceShuttleUp = document.querySelector("#up");
    let rocketPosition = document.querySelector("#rocket");

    // console.log(getAttribute(rocketPosition.style.position));
    // console.log(test);
    //console.log(rocketPosition.style.bottom);

    takeoff.addEventListener("click", function (event) {
        //event.preventDefault();
        let confirmStatus = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
        }
    });
    landing.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = "0";
        rocketPosition.style.bottom = 0 + "px";
        rocketPosition.style.left = 260 + "px";
    });
    missionAbort.addEventListener("click", function () {
        let confirmStatus = confirm("Do you want to abort?");
        if (confirm) {
            flightStatus.textContent = "The Shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = "0";
            rocketPosition.style.bottom = 0 + "px";
            rocketPosition.style.left = 260 + "px";
        }
    });
    up.addEventListener("click", function () {
        let rocketStyle = window.getComputedStyle(rocketPosition);
        let bottomPosition = rocketStyle.getPropertyValue("bottom");
        let absolutePosition = parseInt(bottomPosition);
        if (absolutePosition + 10 <= 250) {
            rocketPosition.style.bottom = absolutePosition + 10 + "px";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000;
        }
    })
    down.addEventListener("click", function () {
        let rocketStyle = window.getComputedStyle(rocketPosition);
        let bottomPosition = rocketStyle.getPropertyValue("bottom");
        let absolutePosition = parseInt(bottomPosition);
        if (absolutePosition - 10 > 0) {
            rocketPosition.style.bottom = absolutePosition - 10 + "px";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000;
        }
    })
    left.addEventListener("click", function () {
        let rocketStyle = window.getComputedStyle(rocketPosition);
        let leftPosition = rocketStyle.getPropertyValue("left");
        let absolutePosition = parseInt(leftPosition);
        if (absolutePosition - 10 > -20) {
            rocketPosition.style.left = absolutePosition - 10 + "px";
        }
    })
    right.addEventListener("click", function () {
        let rocketStyle = window.getComputedStyle(rocketPosition);
        let leftPosition = rocketStyle.getPropertyValue("left");
        let absolutePosition = parseInt(leftPosition);
        if (absolutePosition + 10 <= 400) {
            rocketPosition.style.left = absolutePosition + 10 + "px";
        }
    })

})