/**
 * Created by KyrLouca on 12/12/2015.
 */
$(document).ready(
function(){
    alert('ready');

alert('hellow scritp');
var lockBtn = document.getElementById('b1');
lockBtn.addEventListener('click', nextPage);

    function pressButton(){
    alert('pressedw');
}

    var tabs = document.getElementById('tabs');
    tabs.addEventListener('iron-select', switchPage);


    function switchPage(event) {
        var obj = Polymer.dom(event).localTarget;
        var page=obj.selected;

        var pages=document.getElementById('pages')
        pages.selected=page;
    }
    function nextPage(){
        var pg=document.getElementById("pages");
        //alert('pages');
        pg.selectNext();
    }
})
