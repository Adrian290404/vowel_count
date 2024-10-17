function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let numberVowels = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (vowels.includes(char)) {
            numberVowels++
        }
    }
    return numberVowels
}

document.getElementById("sendText").addEventListener("click", () => {
    let text = document.getElementById("inputText").value;
    let vowels = getCount(text);
    document.getElementById("inputText").value = ""; 
    text !== "" ? document.getElementById("result").innerHTML = "Number of vowels: " + vowels : document.getElementById("result").innerHTML = "Number of vowels: 0";
});