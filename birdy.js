var user = prompt("You are sitting at home, working or watching a movie, then suddenly, a bird flies in your window. What do you do? KILL it, CAPTURE it, FEED it or HIDE simply?").toLowerCase();
switch(user) {
    case "kill":
        var murderer = prompt("Have you ever killed an animal before (apart from bugs)? Yes or no?").toLowerCase();
        var sorry = prompt("Do you feel sorry that you want to kill it? Yes or no?");
        if (murderer === "yes" || sorry === "no") {
        console.log("You are a heartless creature. You have just killed an innocent little bird.");
        } 
        else {
            console.log("You can still save your humanity. Listen to your insticts and don't kill the bird!");
        }
        break;
    case "capture":
        var ugyes = prompt("Are you resourceful? Yes or no.").toLowerCase();
        var captivity = prompt("Have you ever kept a bird in captivity before? Yes or no.").toLowerCase();
        if (ugyes === "yes" || captivity === "yes") {
            console.log("Well, this wasn't an easy task, but you did it. Now you have a beautiful little bird in a cage. Think though...wouldn't it be better for it to be free?");
        }
        else {
            console.log("Well, I don't know how you expected to capture it, if you're not resourceful and you don't have experience. These birds are really quick, they always fly away.");
        }
        break;
    case "feed":
        var food = prompt("Do you have any bird-food at home? Yes or no.");
        if (food === "yes") {
            console.log("The little birdy is not hungry or just doesn't like your food. Sorry...");
        }
        else {
            console.log("How do you expect to feed a bird without bird-food? You don't even have worms? That's unacceptable.");
        }
        break;
    case "hide":
        var place = prompt("Do you have a place to hide? Yes or no.").toLowerCase();
        var call = prompt ("Do you hide until you call someone to help you with the bird? Yes or no.").toLowerCase();
        if (place === "yes" && call === "yes") {
            console.log("Ok. You can wait until someone comes, but what if they don't pick up? You have to start solving problems on your own.");
        }
        else {
            console.log("How do you expect the bird to go out of your living room, if you just wait? Do something!");
        }
        break;
    default:
        console.log("I don't understand your answer, try to refresh and choose KILL, CAPTURE, FEED or HIDE");
}