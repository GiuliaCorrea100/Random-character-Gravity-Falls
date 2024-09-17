
var randomNumber = Math.floor(Math.random() * 24) + 1;

var randomCharacter = "../chracters/" + "img" + randomNumber + ".png";

var imageResult = document.querySelector(".imgResult");
imageResult.setAttribute("src", randomCharacter);

//--------------------------------------------------------------------------

var characterName = document.querySelector(".nameC");

var key = randomCharacter;

function textAppear(key) {
    switch (key) {
        case "../chracters/img1.png":
            characterName.innerHTML = "Dipper Pines";
            break;
        case "../chracters/img2.png":
            characterName.innerHTML = "Mable Pines";
            break;
        case "../chracters/img3.png":
            characterName.innerHTML = "Grunkle Stan";
            break;
        case "../chracters/img4.png":
            characterName.innerHTML = "Soos";
            break;
        case "../chracters/img5.png":
            characterName.innerHTML = "Wendy";
            break;
        case "../chracters/img6.png":
            characterName.innerHTML = "Sheriff Blubs";
            break;
        case "../chracters/img7.png":
            characterName.innerHTML = "Old Man McGucket";
            break;
        case "../chracters/img8.png":
            characterName.innerHTML = "Deputy Durland";
            break;
        case "../chracters/img9.png":
            characterName.innerHTML = "Toby Determinated";
            break;
        case "../chracters/img10.png":
            characterName.innerHTML = "Lazy Susan";
            break;
        case "../chracters/img11.png":
            characterName.innerHTML = "Manly Dan";
            break;
        case "../chracters/img12.png":
            characterName.innerHTML = "Grenda";
            break;
        case "../chracters/img13.png":
            characterName.innerHTML = "Candy";
            break;
        case "../chracters/img14.png":
            characterName.innerHTML = "Waddles";
            break;
        case "../chracters/img15.png":
            characterName.innerHTML = "Stanford Pines";
            break;
        case "../chracters/img16.png":
            characterName.innerHTML = "Robbie";
            break;
        case "../chracters/img17.png":
            characterName.innerHTML = "Gideon";
            break;
        case "../chracters/img18.png":
            characterName.innerHTML = "Bill";
            break;
        case "../chracters/img19.png":
            characterName.innerHTML = "Blending Blanding";
            break;
        case "../chracters/img20.png":
            characterName.innerHTML = "Pacifica Northwest";
            break;
        case "../chracters/img21.png":
            characterName.innerHTML = "Duck-Tective";
            break;
        case "../chracters/img22.png":
            characterName.innerHTML = "Jeff";
            break;
        case "../chracters/img23.png":
            characterName.innerHTML = "Summerween Trickster";
            break;
        case "../chracters/img24.png":
            characterName.innerHTML = "Gompers";
            break;
        default:
            console.log
            break;
    }
}

textAppear(key);
