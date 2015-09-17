$(document).ready(function() {
    /// static array of data for feed
    var feedsArr = [];
    feedsArr = buildStaticData(); // build data
    paintFeedData(feedsArr); // paint from data
});


function buildStaticData() { 
    var feedsArr = [];
    // loops - for to while 
    // for loops, while loop, if/else, doubts
    // buildStaticData 

    var json1 = {};
    json1.postername = "Megha Sharma";
    json1.posterimage = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p32x32/10288707_905752769498063_2590150531994259410_n.jpg?oh=21b6951c5677c7606c14fa933b574ccf&oe=5622CBEF&__gda__=1445381188_dede558f3dc7f316b71f3cc58a9787b8";
    json1.post = "1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
    json1.posttime = new Date();
    feedsArr.push(json1);

    var json2 = {};
    json2.postername = "Saurabh  Sharma";
    json2.posterimage = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p32x32/10288707_905752769498063_2590150531994259410_n.jpg?oh=21b6951c5677c7606c14fa933b574ccf&oe=5622CBEF&__gda__=1445381188_dede558f3dc7f316b71f3cc58a9787b8";
    json2.post = "2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
    json2.posttime = new Date();
    feedsArr.push(json2);

    var json3 = {};
    json3.postername = "Saranya  Sharma";
    json3.posterimage = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p32x32/10288707_905752769498063_2590150531994259410_n.jpg?oh=21b6951c5677c7606c14fa933b574ccf&oe=5622CBEF&__gda__=1445381188_dede558f3dc7f316b71f3cc58a9787b8";
    json3.post = "3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
    json3.posttime = new Date();
    feedsArr.push(json3);

    return feedsArr;
}


function paintFeedData(feedsArr) {
    // paintFeedData(arr)
    // iterate over array of json
    var feedStr = '';
    var i = 0;
    while (i < 3) {
        //for	(var i = 0; i < feedsArr.length; i++){
        //for (var i = feedsArr.length - 1; i >= 0; i--) {
        // for(count = 0; count < 10; count++)
        // // var count = 0;
        //        document.write("Starting Loop ");

        //        while (count < 10){
        var json = feedsArr[i];
        feedStr += '<div id="post">';
        feedStr += '<img src="' + json.posterimage + '"><a href="#">' + json.postername + '</a>';
        feedStr += '<br> ' + json.post + ' ... <a href="#">More</a>';
        feedStr += '<br>';
        feedStr += '<div id="dateTimePost">' + json.posttime + '</div>';
        feedStr += '<a href="#">Like</a> &nbsp;';
        feedStr += '<a href="#">Comment</a> &nbsp;';
        feedStr += '<a href="#">Share</a>';
        feedStr += '<div id="post">';
        feedStr += '<br>';
        feedStr += '</div>';

        i++;
    };

    console.debug(feedStr)

    document.querySelector("#feed").innerHTML = feedStr;
}
