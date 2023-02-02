const quoteText = document.querySelector("#Quotes");
const authorName = document.querySelector(".author");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

async function getQuotes() { 
    const url = "https://type.fit//api/quotes";
    try {
        const result = await fetch(url);
        const res = await result.json();
       
        for (const ele of apiQ) {
            document.querySelector("#Quotes").innerHTML = `"${ele.text}"`;
            document.querySelector(".author-name").innerHTML = `- ${ele.author}`;
        }
    }
    catch (error) { 
        console.log(error);
        console.log("There is some error in this program");
    }
}
 getQuotes();


async function Random_Quote() {
     
    const address = "https://type.fit//api/quotes";
    const res =  await fetch(address);
    const noOfQuotes = await res.json();
    const Q = noOfQuotes[Math.floor(Math.random()*noOfQuotes.length)];
    document.querySelector("#Quotes").innerHTML = `"${Q.text}"`;
    document.querySelector(".author").innerHTML = `- ${Q.author}`;

    if(Q.author === null){
        document.querySelector(".author").innerHTML = `- ${Stranger}`;
    }
    document.querySelector(".author").style.margin = "auto";
    
    let img = ['url("./b1.jpg")','url("./b2.jpg")','url("./b3.jpg")' ,'url("./b4.jpg")', 'url("./b5.jpg")', 'url("./b6.jpg")', 'url("./b7.jpg")', 'url("./b8.jpg")', 'url("./b9.jpg")', 'url("./b10.jpg")', 'url("./b11.jpg")'];
    let randomImg =  img[Math.floor(Math.random()*img.length)];
    console.log(randomImg);
    document.body.style.backgroundImage = randomImg;
    document.body.style.backgroundRepeat =" no-repeat";
    document.body.style.backgroundSize =  "cover";
}

soundBtn.addEventListener("click", () => {
    const qt2 = quoteText.textContent;
    const an2 = authorName.textContent;
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.lang = 'hi-IN';
    utterThis.text = `${qt2} by ${an2}`;
    speechSynthesis.speak(utterThis); 
})


copyBtn.addEventListener("click", () => {
    const text = quoteText.textContent;
    const aut = authorName.textContent;
    const fullText = `${text}${aut}`
    navigator.clipboard.writeText(fullText).then(function () {
    })
    });

twitterBtn.addEventListener("click", () => {
    const newText = quoteText.textContent;
    const auth = authorName.textContent;
        const total = `${newText}${auth}`
    let twitterUrl =`https://twitter.com/intent/tweet?url=${total}`
    window.open(twitterUrl, "_blank");
})


