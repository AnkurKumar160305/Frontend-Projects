let theme=document.getElementById('theme');
let day=document.querySelectorAll('.day');
let h=document.querySelector('.hour');
let m=document.querySelector('.minute');
let s=document.querySelector('.second');
let pmam=document.querySelector('.pmam');



theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    if (document.body.classList.contains('dark')) {
        theme.textContent = 'Dark Mode';
    } else {
        theme.textContent = 'Light Mode';  // if in dark, show option to switch back
    }
});


const showTime=()=>{
    let now=new Date();
    let time=now.toLocaleTimeString();
    let [hrs,min,sec]=time.split(':');
    let dur=hrs>=12? 'PM' : 'AM';
    h.textContent=hrs%12 || 12;
    m.textContent=min.toString().padStart(2,'0');
    s.textContent=sec.toString().padStart(2,'0');
    pmam.textContent=dur;

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayIndex=now.getDay();
    let dayName=days[dayIndex];

    
    day.forEach((d,i)=>{
        if(d.textContent!==dayName){
            d.style.color='rgb(192, 192, 192)';
        }else{
            d.style.color='white';
        }
    })
}

window.onload=function(){
    setInterval(showTime,1000);
    document.body.classList.add('light');   // default theme
    theme.textContent = 'Light Mode'; 
};