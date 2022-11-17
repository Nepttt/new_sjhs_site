const clock = document.querySelector("h2#clock");
const remain_time = document.querySelector("h2#remain_time");

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const days = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${year}년 ${month}월 ${days}일 ${hours}:${minutes}:${seconds}`;
}

function diffDay() {
    const ksat_time = new Date("2023-11-16");
    const today_time = new Date();

    const diff = ksat_time - today_time;

    const diff_day = String(Math.floor(diff / (1000*60*60*24)));

    remain_time.innerText = `2024학년도 수능까지 ${diff_day}일 남았습니다.`;
}

diffDay();
setInterval(diffDay, 1000);

getClock();
setInterval(getClock, 1000);