function showOutput(content){
    document.getElementById("output").innerHTML = content;
}

function saveHistory(text){

let historyBox = document.getElementById("history");

historyBox.innerHTML += `
<p>✅ ${text}</p>
`;

}

function generateScript(){

let topic = document.getElementById("topic").value;
let length = document.getElementById("length").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

let script = "";

if(length=="short"){

script = `
${topic} ek bahut hi interesting topic hai.

Aaj hum iske baare me kuch khaas baatein jaanenge.

Video ko like aur subscribe karna mat bhoolna.
`;

}
else if(length=="medium"){

script = `
${topic} duniya ke sabse mashhoor topics me se ek hai.

Lekin kya aap jaante hain ki ${topic} ke baare me bahut si interesting baatein hain?

Aaj ki video me hum ${topic} ki history, achievements aur kuch facts jaanenge.

Video ko end tak zarur dekhiye.
`;

}
else{

script = `
${topic} duniya bhar me jaana pehchaana naam hai.

Bahut se log ${topic} ke baare me jaante hain, lekin iski poori kahani bahut kam logon ko pata hoti hai.

Aaj ki video me hum ${topic} ki history, achievements, records aur kuch aise facts jaanenge jo shayad aapne pehle kabhi na sune hon.

Video ko poora dekhiye kyunki aakhri fact sabse zyada interesting hai.

Like, Share aur Subscribe karna mat bhoolna.
`;

}

showOutput(`
<h3>🎬 Script</h3>

<p id="text">
${script}
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " Script");

}
function generateTitle(){

let topic = document.getElementById("topic").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

showOutput(`
<h3>🔥 Viral Titles</h3>

<p id="text">
🔥 ${topic} Ki Kahani<br><br>

🔥 ${topic} Ke Chaukane Wale Facts<br><br>

🔥 Kya Aap ${topic} Ke Baare Me Ye Jaante Hain?<br><br>

🔥 ${topic} Ka Sabse Bada Raaz<br><br>

🔥 ${topic} Ki Sachchai Jo Sabse Chhupayi Gayi<br><br>

🔥 ${topic} Ne Kaise Badal Di Duniya?<br><br>

🔥 ${topic} Ki Success Story<br><br>

🔥 ${topic} Ke 5 Hairaan Kar Dene Wale Facts<br><br>

🔥 ${topic} Ka Sabse Bada Record<br><br>

🔥 Aakhir Kaun Hai ${topic}?
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " Viral Titles");

}

function generateHashtags(){

let topic = document.getElementById("topic").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

showOutput(`
<h3>#️⃣ Hashtags</h3>

<p id="text">
#shorts #viral #youtube #${topic}
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " Hashtags");

}

function copyText(){
    let text = document.getElementById("text").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied! 🚀");
}

function generateThumbnail(){

let topic = document.getElementById("topic").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

showOutput(`
<h3>🖼️ Thumbnail Prompt</h3>

<p id="text">
A dramatic YouTube thumbnail about ${topic},
bright lighting,
shocked expression,
viral style,
4K quality.
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " Thumbnail");

}
function generateChatGPT(){

let topic = document.getElementById("topic").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

showOutput(`
<h3>🤖 ChatGPT Mode</h3>

<p id="text">
${topic} duniya ke sabse interesting topics me se ek hai.

Is video me hum ${topic} ke baare me detail me jaanenge aur kuch aise facts dekhenge jo aapko hairaan kar sakte hain.

Video ko end tak zarur dekhiye.
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " ChatGPT Mode");

}

function generateGemini(){

let topic = document.getElementById("topic").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

showOutput(`
<h3>💎 Gemini Mode</h3>

<p id="text">
Aaj hum baat karenge ${topic} ki.

Yeh ek aisa topic hai jiske baare me bahut log jaan-na chahte hain.

Aaj hum iske facts aur interesting baatein explore karenge.
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " Gemini Mode");

}
function generateDescription(){

let topic = document.getElementById("topic").value;

if(topic==""){
    showOutput("⚠️ Please Enter A Topic");
    return;
}

showOutput(`
<h3>📝 YouTube Description</h3>

<p id="text">
Aaj ki video me hum ${topic} ke baare me detail me jaanenge.

Is video me aapko ${topic} se jude interesting facts, history aur important information milegi.

Video pasand aaye to Like 👍, Share 📢 aur Channel Subscribe 🔔 karna mat bhoolna.

#${topic} #shorts #youtube
</p>

<button onclick="copyText()">📋 Copy</button>
`);

saveHistory(topic + " Description");

}
function toggleTheme(){

document.body.classList.toggle("light-mode");

}