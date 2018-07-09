import _ from 'lodash';
import './style.css';
import printMe from './print.js';
// import mapVol from './mapVol.png';
// import Data from './data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to our existing div.
    // var myIcon = new Image();
    // myIcon.src = mapVol;
    // element.appendChild(myIcon);
    // console.log(Data);

    var btn = document.createElement('button');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());