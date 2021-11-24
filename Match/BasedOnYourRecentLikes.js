let minAge = parseInt(18);
let maxAge = parseInt(38);
let bigLoop;

for( bigLoop=0; bigLoop<3; bigLoop++) {
let ageCity = document.getElementsByClassName("profile-infos__age-city")[0].textContent;
let age = parseInt(ageCity.substring(0,2));

if(age < minAge && age > maxAge) {
document.getElementsByClassName("shuffle-card__interaction shuffle-card__interaction--no")[0].click();
}
else if (document.getElementsByClassName("sc-fyGvY") {
document.getElementsByClassName("sc-fyGvY fSqUWE")[0].click();
}
else {
var element = document.getElementsByClassName("ProfileFullDealbreakers__DealbreakersList-sc-l04px0-0");

let onlyFirstProfile = 0;
const profileValues = [];
let elementLoop;

for(elementLoop = 0; elementLoop < element.length; elementLoop++) {

    if(element[elementLoop].textContent.includes(" km")) {
        onlyFirstProfile++;
        }

    if(onlyFirstProfile > 1) {

    }
        profileValues[elementLoop] = element[elementLoop].textContent;
}

let profileLoop;

    for(profileLoop = 0; profileLoop < profileValues.length; profileLoop++) {

       console.log("profile values: " + profileValues);
    if (profileValues[profileLoop].includes("Har barn")) {
            document.getElementsByClassName("shuffle-card__interaction shuffle-card__interaction--no")[0].click();
             }
    else if ( profileValues[profileLoop].includes("Vill inte ha barn")) {
            document.getElementsByClassName("shuffle-card__interaction shuffle-card__interaction--no")[0].click();
    }
    else if ( profileValues[profileLoop].includes("Kanske")) {
            document.getElementsByClassName("shuffle-card__interaction shuffle-card__interaction--no")[0].click();
        }
    else {
        console.log("kan vara intressant");
        break;
    }
    }
   }
}