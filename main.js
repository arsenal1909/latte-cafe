const burgerFunc = (btnClass, navClass, showClass) =>{
    let btn = document.getElementById(btnClass);

    let nav = document.getElementById(navClass);

    btn.onclick = () =>{
        if(nav.className.includes(showClass)){
            nav.className = navClass
        } else {
            nav.className += ' ' + showClass
        }
    }
}

burgerFunc('burger-btn', 'header-nav', 'header-nav-show')