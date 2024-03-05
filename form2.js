const tweetLink = document.querySelector('#tweetLink');
const username = document.querySelector('#username');
const tweets = document.querySelector('#tweetinput');
const tweetsLi = document.querySelector('#tweetlist');

tweetLink.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("Tweet Posted");

  const newUsername = username.value;
  console.log(newUsername);

  const extractedTweet = tweetinput.value;
  console.log(extractedTweet);

  const list = document.createElement('li');

  //tweetsLi.innerText = newUsername;
  tweetsLi.innerText = extractedTweet;
  tweetsLi.append(`${list} - ${newUsername}`);


});