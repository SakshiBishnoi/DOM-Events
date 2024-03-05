const tweetLink  = document.querySelector('#tweetLink');
const tweetC = document.querySelector('#tweetlist');
// const username = document.querySelector( '#username' );
// const tweet = document.querySelector("#tweet");

tweetLink.addEventListener('submit', function(e) {
   e.preventDefault(); 
   
   const usernameInput = tweetLink.elements.username;
   const tweetInput = tweetLink.elements.tweet;

   addTweet(usernameInput.value, tweetInput.value);
   usernameInput.value="";
   tweetInput.value="";
    
});


const addTweet = (username, tweet) => {
    const list = document.createElement('li');
   const btag = document.createElement('b');

   btag.append(username);
   list.append(btag);
   list.append(`- ${tweet}`);
    console.log(list);
    tweetC.append(list);
}







// const tweetLink = document.querySelector('#tweetLink');
// const username = document.querySelector('#username');
// const tweets = document.querySelector('#tweetinput');
// const tweetsLi = document.querySelector('#tweetlist');


// tweetLink.addEventListener('submit', function(e) {
//   e.preventDefault();
//   console.log("Tweet Posted");

//   const newUsername = username.value;
//   console.log(newUsername);

//   const extractedTweet = tweetinput.value;
//   console.log(extractedTweet);

//   const list = document.createElement('li');
  
//   tweetsLi.innerText = newUsername;
//   tweetsLi.innerText = extractedTweet;
  
//   tweetsLi.append(`${newUsername} - ${list}`);


// });