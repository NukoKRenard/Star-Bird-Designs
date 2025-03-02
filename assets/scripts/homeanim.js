const animationtime = 2000;
const tilesize = 70;

function populateGrid(element) {
	const tilesh = Math.floor(element.clientWidth / tilesize);
	const tilesv = Math.floor(element.clientHeight / tilesize);

	element.style.setProperty("--rows", tilesh);
	element.style.setProperty("--columns", tilesv);

	for (i = 0; i < tilesh*tilesv; i+=1) {
        tile = document.createElement("div");
        tile.classList.add("gridmember");

        let choice = Math.random()
        if (choice > .95) {
            tile.style.background = "var(--primary-color-dark)";
        }
        else if (choice > .9) {
            tile.style.background = "var(--secondary-color-dark)";
        }

        element.appendChild(tile);
    }
}

function face(element,x,y) {
    const xnorm = child.offsetLeft+(tilesize/2)-x
    const ynorm = child.offsetTop+(tilesize/2)-y
    const xdist = element.offsetLeft-x
    const ydist = element.offsetTop-y
    const len = Math.sqrt((xdist**2) + (ydist**2))
    const maxlen = element.clientWidth
    let perc = (1/((len/300-1)**2+1))
    let rot = perc*50;

    element.style.transform = "perspective(100px) rotate3d("+ynorm/len+","+-xnorm/len+","+0+","+rot+"deg) translate3d(0,0,"+-perc*50+"px)";
}

function gridface(element, x, y)
{
    for (child of element.children) {
        face(child,x,y);
    }
}

function griddistort(element, x, y) {
    for (child of element.children) {
        const len = Math.sqrt((child.offsetLeft+(tilesize/2)-x)*(child.offsetLeft+(tilesize/2)-x) + (child.offsetTop+(tilesize/2)-y)*(child.offsetTop+(tilesize/2)-y));
            
        window.setTimeout((obj) => {
            let prevtransform = obj.style.transform;
            obj.style.transform = "none";
            window.setTimeout(() => {obj.style.transform = prevtransform},300);
        },(len/element.clientWidth)*1000,child);
    }
}

document.querySelectorAll(".revealgrid").forEach(populateGrid);
window.onmousemove = (event) => {
    gridface(document.querySelector(".revealgrid"),event.clientX,event.clientY);
};

window.onclick = (event) => {
    griddistort(document.querySelector(".revealgrid"),event.clientX,event.clientY);
};

function transferToLinks() {
    document.querySelectorAll(".first").forEach((element) => {
       element.classList.add("fadeout"); 
    });

    document.querySelectorAll(".second").forEach((element) => {
        element.classList.remove("fadeout");
    });
}