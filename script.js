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

async function Random_Quote(){
    const address = "https://type.fit//api/quotes";
    const res =  await fetch(address);
    const noOfQuotes = await res.json();
    const Q = noOfQuotes[Math.floor(Math.random()*noOfQuotes.length)];
    document.querySelector("#Quotes").innerHTML = `"${Q.text}"`;
    document.querySelector(".author").innerHTML = `- ${Q.author}`;

    if(Q.author == null){
        document.querySelector(".author").innerHTML = `- ${Stranger}`;
    }
     document.querySelector(".author").style.margin = "auto";
   
}
