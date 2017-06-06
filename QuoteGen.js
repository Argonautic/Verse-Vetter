var quotes = [
	{
		lyrics: "I'll take a quiet life a handshake of carbon monoxide",
		singer: "Thom Yorke",
		song: "No Surprises",
		spotLink: "https://open.spotify.com/track/1bSpwPhAxZwlR2enJJsv7U",
	},

	{
		lyrics: "When I was told, you lied to me, I hung my head in shame", 
		singer: "Hamilton Leithauser",
		song: "No Christmas While I'm Talking",
		spotLink: "https://open.spotify.com/track/6wYHoJUCDNk4fQ1YOyNJHp",
	},

	{
		lyrics: "Live my life in self defense, you know I love the past 'cause I hate suspense", 
		singer: "Ezra Koenig",
		song: "Diane Young",
		spotLink: "https://open.spotify.com/track/104pmtTQOlmW8Zt2BipGKH",
	},

	{
		lyrics: "I'm a wife in watercolor, I can wash away",
		singer: "Annie Clark",
		song:  "Save Me From What I Want",
		spotLink: "https://open.spotify.com/track/3jdgYB99xF0EIWHkSzpYVt",
	},

	{
		lyrics: "EEEEEDDDDDDDDDDD",
		singer: "Ed O'Brien",
		song: "Weird Fishes",
		spotLink: "https://open.spotify.com/track/4Iyo50UoYhuuYORMLrGDci",
	},

	{
		lyrics: "Someone sent a runner through the weather that I'm under for the feeling that I lost today",
		singer: "Matt Berninger",
		song: "England",
		spotLink: "https://open.spotify.com/track/1HWfQwxh9ADFMDDPv4lsYm",
	},

	{
		lyrics: "I need a gun to keep myself from harm. The poor people are burning in the sun",
		singer:  "A Bunch of Kids",
		song: "Dirty Harry",
		spotLink: "https://open.spotify.com/track/2bfGNzdiRa1jXZRdfssSzR",
	},

	{
		lyrics: "Got dirt got air got water and I know you can carry on",
		singer: "Isaac Brock",
		song: "The Good Times Are Killing Me",
		spotLink: "https://open.spotify.com/track/1fBO9S4vo5cfCfRK1Ofaxa",
	},

	{
		lyrics: "When I'm feeling lazy, it's probably because I'm saving all my energy to pick up when you move into my airspace",
		singer: "Paul Banks",
		song: "Say Hello To The Angels",
		spotLink: "https://open.spotify.com/track/0MNZdXMEKeeLkWXNO872hp",
	},

	{
		lyrics: "Tell her there's not a chance, you're ever gonna change the world",
		singer: "Ryan Miller",
		song: "Red Oyster Cult",
		spotLink: "https://open.spotify.com/track/1nub5g3CMHJZ9eIgfA71rU",
	},

	{
		lyrics: "I don't keep friends, I keep acquainted. I'm not a prophet but I'm here to profit, that's all",
		singer: "Nate Ruess",
		song: "At Least I'm Not As Sad As I Used To Be",
		spotLink: "https://open.spotify.com/track/58tLjHjw21htk7syEWJIYt",
	},

	{
		lyrics: "Do you remember when 21 years old?",
		singer: "Thomas Mars",
		song: "Countdown",
		spotLink: "https://open.spotify.com/track/6Nhw01s7PmqAqCl0ca8Fwg",
	},

	{
		lyrics: "Oh the night's like a whirlwind, somebody's girlfriend is talking to me, but it's alright she's saying that he's not going to slap me or try to attack me, he's not the jealous type",
		singer: "Alex Turner",
		song: "The Bad Thing",
		spotLink: "https://open.spotify.com/track/48ucaKjccruxDbi3Au5ZaH",
	},

	{
		lyrics: "Move your body, you got all you need",
		singer: "Kyp Malone",
		song: "Golden Age",
		spotLink: "https://open.spotify.com/track/038A1NyyetJslykmlBKyGo",
	},

	{
		lyrics: "Eucalyptus and orange trees are blooming, in that dream there's no darkness a'loomin'",
		singer: "Robin Pecknold",
		song: "Grown Ocean",
		spotLink: "https://open.spotify.com/track/3HKV2xAAQjNbYh8PMBgG60",
	},
];

$(() => {		

	var audioElement = document.createElement('audio');
	audioElement.volume = 0.1;
    
    $('#play').click(function()    {	audioElement.play();	});    
    $('#pause').click(function()   {	audioElement.pause();	});    
    $('#restart').click(function() {	audioElement.currentTime = 0;	});

	function getRandomInt(min, max) {
		min = Math.ceil(min);
	 	max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
	}	

	function nextQuote(a) {
		if ($('#quote').css("font-size") != '30px') {
			$('#quote').css("font-size", '30px')
		}

		if (a.length === 0) {
			a = quotes.slice();
			console.log('yi');
		}

		var i = Math.floor(Math.random() * a.length);
		var rndSong = a.splice(i, 1)[0];

		$("#quote").html(rndSong.lyrics);		
		$("#singer").html('- ' + rndSong.singer);
		$("#song-name").html(rndSong.song);
		$("#song-name").attr("href", rndSong.spotLink);

		if ($('#quote')[0].scrollHeight >  $('#quote')[0].clientHeight) {
			var scaledFontSize = Math.floor(30 * ($('#quote')[0].clientHeight / $('#quote')[0].scrollHeight)) + 'px';
			$('#quote').css("font-size", scaledFontSize);
		}		

		$("#twitter-share-button").click(() => {
			var lyricsURL = escape(rndSong.lyrics);
			var singerURL = escape(rndSong.singer);
			$('#twitter-share-button').prop('href', "https://twitter.com/intent/tweet?text=\""
				+ lyricsURL + "\" -" + singerURL + " %23versevetter");
		});

		audioElement.setAttribute('src', "audio/" + rndSong.song + ".mp3");
		setTimeout(() => {
			audioElement.play(); }, 500);

		$("#next").click(() => {
			$("#next").off();
			nextQuote(a)			
		});
	}

	nextQuote([]);

});
