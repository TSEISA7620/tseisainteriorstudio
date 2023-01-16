//show nav bar
function menu_pop() {
    document.getElementById('toggle_links').style.display="block";
    document.getElementById('toggle_links').style.animation="animation: nav_in 0.8s forwards 0s linear;";
    document.getElementById('toggle-btn').style.display="none";
    document.getElementById('close-btn').style.display="block";
    
}

//hide nav bar
function menu_close() {
    document.getElementById('toggle_links').style.display="none";
    document.getElementById('toggle-btn').style.display="flex";
    document.getElementById('close-btn').style.display="none";
}
