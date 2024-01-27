window.onload = () => {

    let correct = document.getElementById("correct");
    let secondCont = document.getElementById("secondContainer");
    let mainContent = document.getElementById("mainContainer");
    let second = document.getElementById("second");
    let secondCorrect = document.getElementById("secondCorrect");

    document.getElementById("enrollment").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, second, input);
    });

}


const checkAns = (correct, mainContent, second, input) => {
    if(input == "310780"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "Yes you are right, lets move to next clue";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "Always broken by Dudley's tease, Magic's cured with gentle ease. To find the key without a doubt, Near the factory, seek it out.";
        }, 2000);
    }
}