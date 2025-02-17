
const tablinks = document.getElementsByClassName('tab-links')
const tabContent = document.getElementsByClassName('tab-contents')
function opentab(tabname,event){ // There is some magic in event word only event word as argument is working 
for(tablink of tablinks){
        tablink.classList.remove('active-link')
}
for(tabcontent of tabContent){
    console.log(tabcontent)
    tabcontent.classList.remove('active-tab')
}
console.log(event)
event.target.classList.add('active-link')
document.getElementById(tabname).classList.add('active-tab')
}

const sidemenu = document.getElementById('sidemenu')

function closemenu(){
    sidemenu.style.right = '-200px'
}

function openmenu(){
    sidemenu.style.right = '0px'
}