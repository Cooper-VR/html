// jshint esversion: 7
(function() {
    'use strict';

document.addEventListener('DOMContentLoaded', function(){

const body = document.body;
let header = document.createElement('div');

header.setAttribute('id', 'header');
body.append(header);

let section;
let sectionParagraph;
for (let i = 0; i < 10; i++){
    section = document.createElement('div');
    section.setAttribute('class', 'section');

    header.append(section);

    
}



let sections =  header.querySelectorAll('.section');
Array.from(sections).forEach(function(e){
    sectionParagraph = document.createElement('p');
    sectionParagraph.textContent = 'asdfasdf';
    e.append(sectionParagraph);

});

body.style.display = 'flex';
body.style.justifyContent = 'center';

header.style.width = '100%';
header.style.textAlign = 'center';

body.style.backgroundColor = 'rgb(10, 10, 10)';



});
})();