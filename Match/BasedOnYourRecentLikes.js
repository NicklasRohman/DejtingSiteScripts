let minAge = parseInt(18);
let maxAge = parseInt(37);
let numberOfProfiles = parseInt(10);

let ageCity = document.getElementsByClassName("profile-infos__age-city")[0].textContent;
let age = parseInt(ageCity.substring(0,2));

if(age < minAge && age > maxAge) {
document.getElementsByClassName("shuffle-card__interaction shuffle-card__interaction--no")[0].click();
}
else {

var element = document.getElementsByClassName("IconChip__StyledText-sc-lwjjbr-2 cmsPci");

let onlyFirstProfile = 0;
const profileValues = [];

for(let i = 0; i < element.length; i++) {

    if(element[i].textContent.includes(" km")) {
        onlyFirstProfile++;
        }

    if(onlyFirstProfile > 1) {
    break;
    }
        profileValues[i] = element[i].textContent;
}

    for(let i = 0; i < profileValues.length; i++) {

    if ((profileValues[i].includes("Har barn"))|| (profileValues[i].includes("Kanske")) || (profileValues[i].includes("Vill inte ha barn"))) {
            console.log("No button");
            document.getElementsByClassName("shuffle-card__interaction shuffle-card__interaction--no")[0].click();
            break;
        } else {
            nextProfile = false;
            console.log("This might interest you");
        }
    }
   }