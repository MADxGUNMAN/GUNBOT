const btn = document.querySelector('.input');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...How may i help you?");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...How may i help you?");
    } else {
        speak("Good Evening Sir...How may i help you?");
    }
}

window.addEventListener('load', () => {
    speak("I AM STORM...A Virtual Assistant CREATED BY ANSARI SHOAIB...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");

    } else if (message.includes("what is your name?")) {
        speak("my name is storm.");

    } else if (message.includes('who is your creator') || message.includes('who creates you')) {
        window.open("https://www.instagram.com/sohaib._.908/");
        speak("i am created by ansari shoaib.");

    } else if (message.includes('who is ansari shoaib?') || message.includes('who is ansari sohaib?')|| message.includes('who is ansari sohib?')|| message.includes('who is ansari souaib?')|| message.includes('tell me about your creator.')|| message.includes('tell me about your creator ansari shoaib.')|| message.includes('tell me something about your creator.')|| message.includes('tell me something about ansari shoaib.')) {
        window.open("https://ansarisohaib.netlify.app/");
        speak("Ansari Shoaib is a passionate web developer and designer with expertise in both front-end and back-end technologies. He developed projects like the AI chatbot Storm, the virtual assistant Storm, and, two portfolio websites featuring futuristic animation and design. Sohaib has also developed web games such as Stick Hero and Shadow Run, as well as business-oriented websites, including Gunman's Heaven (a hotel booking platform) and The Hungry Gunman (a restaurant food ordering website). In addition, he generously created a virtual assistant storm which is me, something for which I'm truly grateful.");

    } else if (message.includes('open my website.')) {
        window.open("https://ansarisohaib.netlify.app/");
        speak("as you wish sir.");

    } else if (message.includes('open my portfolio.') || message.includes('open my resume.')) {
        window.open("https://ansarisouaib.netlify.app/");
        speak("as you wish sir.");

    } else if (message.includes("open chatbot.")|| message.includes('open chat bot.')|| message.includes('open chat boat.')|| message.includes('open chat board.')|| message.includes('open my chat board.')|| message.includes('open chat bot storm.')|| message.includes('open my chatbot.')) {
        window.open("https://madxgunman.github.io/CHATBOT-STOM-V2/", "_blank");
        speak("Opening chatbot storm...");

    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening instagram...");
    } else if (message.includes("open twitter")) {
        window.open("https://x.com/", "_blank");
        speak("Opening twitter...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}