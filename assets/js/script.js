var selectionArray = [{
    name: "numbers",
    char: "0123456789"
}, {
    name: "lowercase letters",
    char: "abcdefghijklmnopqrstuvwxyz"
}, {
    name: "uppercase letters",
    char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}, {
    name: "special characters",
    char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}]

var generate = document.getElementById("generate").addEventListener("click", function () {
    var randomCharacters = "";
    var passwordLength = parseInt(prompt("Please, enter length for your password between 8 and 129 characters long"));
    var password = "";

    if (passwordLength > 8 && passwordLength <= 128) {
        var i;
        for (i = 0; i < selectionArray.length; i++) {
            var userDecision = confirm("Do you want to use " + selectionArray[i].name + " ?")
            if (userDecision) {
                randomCharacters = randomCharacters + selectionArray[i].char;
            }
        };
        console.log(randomCharacters);

    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password does not meet the requirements. Please refresh and try again.");
    } else {
        alert("Enter proper values");
    }

    if (randomCharacters !== "") {
        var i;
        for (i = 0; i < passwordLength; i++) {
            password = password + randomCharacters.charAt(Math.floor(Math.random() * Math.floor((randomCharacters.length) - 1)));

            document.getElementById("password").value = password;
        }
    }
});

var copy = document.getElementById("copy").addEventListener("click", function () {
    /* Get the text field */
    var copyText = document.getElementById("password");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Your password is copied to clipboard!");
})