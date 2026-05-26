let end = Date.now() + 0;
let timeGiven = 0;
function setTimer()
{
    timeGiven = (parseInt(document.getElementById("hourT").value) * 3600000) + (parseInt(document.getElementById("minuteT").value) * 60000) + (parseInt(document.getElementById("secondT").value) * 1000);
    end = Date.now() + timeGiven;
    document.getElementById("time").style.color = "black";
}

function updateTime()
{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    let military = false;
    let secVar = seconds;
    let minVar = minute;
    let hourVar = hour;
    let hourType = "AM";
    
    theDate = month+"/"+day+"/"+year;

    if(seconds<=9)
    {
        secVar = "0"+seconds;
    }
    if(minute<=9)
    {
        minVar = "0"+minute;
    }

    let checkGet = document.getElementById("checker").checked;
    if(checkGet == false)
    {
        if(hour >= 12)
        {
            hourType = "PM";
        }
        if(hour > 12)
        {
            hourVar = hour-12;
        }
        if(hour === 0)
        {
            hourVar = 12;
        }
        theTime = hourVar+":"+minVar+":"+secVar+" "+hourType;
    }
    else
    {
        if(hour <= 9 )
        {
            hourVar = "0"+hour;
        }
        theTime = hourVar+""+minVar+":"+secVar
    }

    document.getElementById("date").innerHTML = theDate;
    document.getElementById("time").innerHTML = theTime;

    document.getElementById("percent").innerHTML = Math.round((timeGiven - (end - Date.now())) / timeGiven * 10000) / 100 + "%";
    if(Math.round((timeGiven - (end - Date.now())) / timeGiven * 10000) / 100 >= 90)
    {
        document.getElementById("time").style.color = "blue";
    }
    if(Math.round((timeGiven - (end - Date.now())) / timeGiven * 10000) / 100 >= 100)
    {
        setTimer();
    }
}

setInterval(updateTime, 1);
