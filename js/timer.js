console.log("Ajax- Async, Callback & Promise");
function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds()+ "Secs";
    }

    function showSessionExpire(){
        console.log("Activity-B: Your session expired at "+showTime());
    }
    
    console.log("Activity-A: Trigerring Activity-B at "+showTime());
    /**
     * called the callback method setTimeout which will display showSessionExpire() exactly 
     * because of asynchronous nature after 5 seconds
     */
    setTimeout(showSessionExpire, 5000);
    console.log("Actiivity-A: Triggered Activity-B at "+showTime()+" will execute after 5 seconds"); 