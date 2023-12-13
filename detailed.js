//get mbti infomation
import mbtiContent from './personality.js';


//set the overlay function model box
var imageContainer = document.getElementById("functionModel");
var descriptionOverlay = document.getElementById("description-overlay");
descriptionOverlay.style.display = 'none'; //default none

functionModel.addEventListener("click", function () {
        // Toggle the display of the description overlay
    descriptionOverlay.style.display = (descriptionOverlay.style.display === "none") ? "block" : "none"; //when click: none--> show / show-->none
});



//customize mbti personalities
document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const mbtiType = params.get('mbti');

    // Get the content for the specific MBTI type from the imported module
    const content = mbtiContent[mbtiType];

    if (content) {
        // Set content based on the MBTI type
        document.getElementById('environment').src = content.environmentImage;
        document.getElementById('functionModel').getElementsByTagName('img')[0].src = content.functionImage;
        document.getElementById('description-overlay').getElementsByTagName('p')[0].textContent = content.description;
        document.getElementById('mbti').textContent = content.mbtiTitle;
        document.getElementById('character').textContent = content.characterTitle;
        document.getElementsByClassName('introduction')[0].textContent = content.introduction;
    } else {
        // Handle the case when the MBTI type is not recognized
        const errorElement = document.createElement('p');
        errorElement.textContent = 'MBTI type not recognized.';
        document.body.appendChild(errorElement);
    }
});
