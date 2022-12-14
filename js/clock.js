const clock = document.querySelector("h2#clock");
const remain_time_2025 = document.querySelector("h2#remain_time_2025");

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


function diffDay_2025() {
    const ksat_time = new Date("2024-11-14");
    const today_time = new Date();

    const diff = ksat_time - today_time;

    const diff_day = String(Math.floor(diff / (1000*60*60*24)));
    const diff_hour = String(Math.floor((diff / (1000*60*60)) % 24));
    const diff_min = String(Math.floor((diff / (1000*60)) % 60));
    const diff_sec = String(Math.floor(diff / 1000 % 60));

    remain_time_2025.innerText = `2025학년도 수능까지 ${diff_day}일 남았습니다.`;
}

diffDay_2025()
setInterval(diffDay_2025, 1000);

getClock();
setInterval(getClock, 1000);