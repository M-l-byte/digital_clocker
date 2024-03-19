window.onload =() =>{
   function clocker(){
    let time=new Date();

    let hr=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()
    let day=time.getDay();

    hr=hr<10?"0"+hr:hr;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;

    let days=['MONDAY','TUESDAY','WEDNESDAY','THRUSDAY','FRIDAY','SATURDAY','SUNDAY'];
    document.querySelector('#hr').innerText=hr;
    document.querySelector("#min").innerText=min;
    document.querySelector("#sec").innerText=sec;
    document.querySelector(".day").innerText=days[day-1]
    setTimeout(clocker,1000);
   }
   clocker();
}