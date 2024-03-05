
const tweetLink  = document.querySelector('#tweetLink');

tweetLink.addEventListener('submit', function(e) {
   e.preventDefault(); 
   
   const username = tweetLink.elements.username.value;
   const tweet = tweetLink.elements.tweetinput.value;

   const list = document.createElement('li');
   const btag = document.createElement('b');

   btag.append(username);
   list.append(btag);
   list.append(`- ${tweet}`);
    console.log(list);
    
});




















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