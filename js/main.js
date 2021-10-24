
window.addEventListener('click', (event) => {
    if (!(event.target.matches("#navbar") || event.target.matches("#sideNavBtnShow") || event.target.matches("#sideNavBtnShow-label"))) {
        document.querySelector("#sideNavBtnShow").checked = false;
        document.querySelector("#sideNavBtnCancel").checked = true;
        document.querySelector("#navbar").style.left = "-100%";
    }
});