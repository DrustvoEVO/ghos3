// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();


// Handlebars helpers

// HH - Reccomendation Letters

// Handlebars.registerHelper('reccomendationAffiliation', function(content) {
//     console.log(content);
//     const affiliationRegEx = /Affiliation: ([^\n]*)\n/;
//     var affiliation = content.match(affiliationRegEx);
//     console.log(affiliation);
//     return new Handlebars.SafeString(affiliation[1]);
// });