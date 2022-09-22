const app = ()=>{
    const clockViewer=document.querySelector(".clock");

    //날짜
    const dateComponent = document.createElement('div');
    dateComponent.classList.add("date");
    dateComponent.classList.add("clockStyle");

    //시간
    const timeComponent = document.createElement('div');
    timeComponent.classList.add("time");
    timeComponent.classList.add("clockStyle");

    //요일
    const dayOfWeekComponent = document.createElement('div');
    dayOfWeekComponent.classList.add("day-of-week");
    dayOfWeekComponent.classList.add("clockStyle");

    clockViewer.append(dateComponent);
    clockViewer.append(dayOfWeekComponent);
    clockViewer.append(timeComponent);

    function displayNowTime(){
        const today = new Date();
        const nowDate = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;
        const nowTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        let dayOfWeek;

        switch(today.getDay()){
            case 1:dayOfWeek = "MON";break;
            case 2:dayOfWeek ='TUE';break;
            case 3: dayOfWeek ='WED';break;
            case 4: dayOfWeek ='THU';break;
            case 5: dayOfWeek ='FRI';break;
            case 6: dayOfWeek ='SAT';break;
            case 7: dayOfWeek ='SUN';break;
            default:alert("있지 않은 요일입니다...굳이 따지자면...무요일?");break;
        }

        dayOfWeekComponent.innerHTML = dayOfWeek;
        dateComponent.innerHTML = nowDate;
        timeComponent.innerHTML = nowTime;
    }

    setInterval(displayNowTime,500);
}
window.onload=app;


