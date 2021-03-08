// Add cursor-pointer class to headers
for(let h of ["h1", "h2", "h3"]){
    for(let item of document.querySelectorAll(`${h}`)){
        if(item.id){
            if(!item.classList.contains("cursor-pointer")) item.classList.add("cursor-pointer")
        }
    }
}

// Setup gravatar images
if(document.URL.indexOf("contribuidores") !== -1 || document.URL.indexOf("autor") !== -1){
    for(let img of document.querySelectorAll("img")){
        if(img.attributes.gravatar){
            let md5Hash = MD5(img.attributes.gravatar.value)
            let size = img.attributes.size ? img.attributes.size.value : 80
            img.src = `https://www.gravatar.com/avatar/${md5Hash}?s=${size}`
        }
    }
}


function toggleSearch(){
    let el = document.getElementById("searchmodal")
    if(!el.classList.contains("hidden")){
        el.classList.add("hidden")
        enableScroll()
        document.body.style.overflow = 'visible';
    }else{
        el.classList.remove("hidden")
        disableScroll()
        document.body.style.overflow = 'hidden';
    }
}



let keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}