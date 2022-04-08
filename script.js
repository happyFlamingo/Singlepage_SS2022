// Aufgabenblatt 1

// Inhalt der page1 und page2 in Variablen gespeichert
let page1content = "<p> Test: Hier geht es zur nächsten Seite </p> <a onclick=\"navTo('./page2.html')\" </a>";
let page2content = "<p> Test: Hier geht es zurück zur Startseite </p> <a onclick=\"navTo('./page1.html')\" </a>";

// Funktion navTo wird hier behandelt
function navTo(page) {

    window.location = page;

    // test, ob in navTo Methode springt
    console.log("navTo Methode! :)");
    if (page === "./page1.html") {
        // test, in welchem if ich mich befinde
        console.log("if statement page 1");
        // div container Teil id html wird durch page1content oben ausgetauscht
        let container = document.getElementById("container");
        container.innerHTML = page1content;
        // URL wird optisch noch angepasst
        history.pushState(undefined, "", "./page1.html")
    }

    if (page === "./page2.html") {
        // test, in welchem if ich mich befinde
        console.log("if statement page 2");
        // div container Teil id html wird durch page2content oben ausgetauscht
        let container = document.getElementById("container");
        container.innerHTML = page2content;
        // URL wird optisch noch angepasst
        history.pushState(undefined, "", "./page2.html")
    }
}

