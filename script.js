let string = "Anushka, I am Tarang your Tarang. I want to say some stuffs. I can't thank you enough. I feel so happy when I'm around you. I laugh so much. The most blissful and joyous moments i have is with you. You always seem to enlighten my mood. Just like the water evaporates from the wet cloth in a sunny afternoon making it light and it swings with the wind, you evaporate all my heavy thoughts and worries making me light and fly again. I want to see the world with you. We'll have so much fun together. I have so many plans so many dreams. I hope we will make them true. The last day of practicals when i was with you all day. I had so much fun. That was the best day of all the previous ones. I know what you are thinking right now... but i wanted to go home early. Yes i does. As looking at my face you could have easily sensed i was upset. But i dont regret it slightest bit. It was good. That day went by just fine. I had not puked or felt ill apart from some small feelings of dizziness and chest pain. But the point is I enjoyed that day with you and im super happy and proud actually that i stayed and we shared a good time together before you left in the next morning. So yaayyyyy I am so happy about it lmao. I just wanted to say this small thing lol. Now that ive done with my forceful puppetry, i am handling the control over to you.. ";


let ind = 1;
let textbox = document.getElementById("textarea");
textbox.addEventListener("keydown", (event) => {
    // console.log(event.key);
    // console.log(ind);
    // console.log(string.slice(0, ind));
    if (ind > string.length) {
        string += event.key;
        textbox.value = string;
    }
    textbox.value = string.slice(0, ind);
    textbox.value = textbox.value.slice(0, textbox.value.length - 1);
    ind += 1;
    
});
