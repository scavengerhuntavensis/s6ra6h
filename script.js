window.onload = () => {

    let correct = document.getElementById("correct");
    let secondCont = document.getElementById("secondContainer");
    let mainContent = document.getElementById("mainContainer");
    let second = document.getElementById("second");
    let secondCorrect = document.getElementById("secondCorrect");
    let secondaNS = document.getElementById("secondAns");
    let thirdRiddle = document.getElementById("thirdRiddle");

    document.getElementById("enrollment").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, second, input, secondaNS, thirdRiddle);
    });

}


const checkAns = (correct, mainContent, second, input, secondAns, thirdRiddle) => {
    if(md5(input) == "08226be64e1830ccecf7a033b77d7108"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "Yes you are right, lets move to next clue";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "Always broken at a young age by dudly and fixed by magic. Without these harry would went frantic";
            secondAns.style.visibility = "visible";

            secondAns.addEventListener("input", (e) => {
                let input = e.target.value;
                if(md5(input) == "7f7e864a8bf180a5ad6ac841ec1f5196" || md5(input) == "861d2b5ca10a0dd590753e48001f93ab" || md5(input) == "a08ecec277db4a6ed0b3635cfadc9af1" || md5(input) == "360d214e899b88b8fe54a260668c2f48" || md5(input) == "948d483dc4137355b5622851d72ba9ed" || md5(input) == "922c9b36443c4cf8af0a4cc6801bbaa3"){
                    thirdRiddle.style.visibility = "visible";
                    thirdRiddle.innerHTML = "Now for getting the prop, head to the room near the factory equipment without a doubt"
                    correct.style.height = 0;
                    correct.style.visibility = "hidden";
                    secondAns.style.visibility = "hidden";
                }
            });

        }, 3500);
    }
}
