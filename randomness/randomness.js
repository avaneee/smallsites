let album = document.querySelector('.album');

//  array with each song as an object for multiple pieces of information to be randomised
let songs = [
	{
		src: "pic1.jpg",
		title: "Family Feud by FINNEAS",
		link: "https://open.spotify.com/track/46i6pyJSyfcyU265SSgv7a?si=092c19739a8b4288",
	},
	{
		src: "pic2.jpg",
		title: "You Could Start a Cult by Niall Horan",
		link: "https://open.spotify.com/track/3iVmzeoFR0AZrn8EYFnEsB?si=04db1eaf7a8f47d0"
	},
	{
		src: "pic3.jpg",
		title: "Dream by Shawn Mendes",
		link: "https://open.spotify.com/track/0bZFa5DZcx9HWx25m2Nd19?si=44727c2aa32747a7"
	},
	{
		src: "pic4.jpg",
		title: "ZITTI E BUONI by Måneskin",
		link: "https://open.spotify.com/track/776AftMmFFAWUIEAb3lHhw?si=08983668b2ad4985"
	},
	{
		src: "pic5.jpg",
		title: "Floated By by Peter Cat Recording Co.",
		link: "https://open.spotify.com/track/7IAKxhI1z8Sas7iLcX8YF5?si=6287ad82e67d432b"
	},
	{
		src: "pic6.jpeg",
		title: "Mona Lisa, Mona Lisa by FINNEAS",
		link: "https://open.spotify.com/track/252G7yirQ4pXj6ZD4T9R2W?si=43c3b61aba994da7"
	},
	{
		src: "pic7.jpeg",
		title: "Could Cry Just Thinking About You by Troye Sivan",
		link: "https://open.spotify.com/track/3H7oAhHxkEkSf9iomv2mbG?si=7c296b03e2d0474d"
	},
	{
		src: "pic8.jpeg",
		title: "Walking in the Wind by One Direction",
		link: "https://open.spotify.com/track/1ZycJRpLOazlLcoFGxGROO?si=bb8c36ab8bac4f57"
	},
	{
		src: "pic9.jpeg",
		title: "Vienna by Billy Joel",
		link: "https://open.spotify.com/track/4U45aEWtQhrm8A5mxPaFZ7?si=362fe37ae2d24464"
	},
	{
		src: "pic10.jpeg",
		title: "Grapejuice by Harry Styles",
		link: "https://open.spotify.com/track/4j6kId9QIqhoXvqHKgSKa0?si=dafb430d6d5c4d6a"
	},
	{
		src: "pic11.jpeg",
		title: "Peach Pit by Peach Pit",
		link: "https://open.spotify.com/track/0ZK8TGOsngrstVPsnrHbK1?si=3c79944380734a98"
	},
	{
		src: "pic12.jpg",
		title: "American Girls by Harry Styles",
		link: "https://open.spotify.com/track/7gtG45ieyQzKtNKobfLd49?si=f1efa8d96e0b4353"
	},
	{
		src: "pic13.jpg",
		title: "Ma Tnsani by Vanco, AYA",
		link: "https://open.spotify.com/track/01WFjqzUwrD4nfSQsHMVNm?si=5f2d7322eeaa498d"
	},
	{
		src: "pic14.jpg",
		title: "NUEVAYoL by Bad Bunny",
		link: "https://open.spotify.com/track/5TFD2bmFKGhoCRbX61nXY5?si=e76f11c7596e4899"
	},
	{
		src: "pic15.png",
		title: "Sofia by Clairo",
		link: "https://open.spotify.com/track/0za55KLGfhCOr2TC4RM6dr?si=686a8d2db27d4098"
	},
	{
		src: "pic16.png",
		title: "Dreamland by Glass Animals",
		link: "https://open.spotify.com/track/2LiDZmGERLzjrtBTCofj2G?si=d9286013a51c4783"
	},
	{
		src: "pic17.png",
		title: "I Can Die Now by Ruel",
		link: "https://open.spotify.com/track/5cwslMvLevVazYTJGCMPfo?si=47b446404b9d4627"
	},
	{
		src: "pic18.png",
		title: "Nice to Each Other by Olivia Dean",
		link: "https://open.spotify.com/track/7qEiBWlztvDFrILdizFULx?si=020edc5dc76f4f66"
	},
	{
		src: "pic19.png",
		title: "Stockholm Syndrome by One Direction",
		link: "https://open.spotify.com/track/6AzCBeiDuUXGXjznBufswB?si=c8f46c3313d5437a"
	},
	{
		src: "pic20.jpg",
		title: "Slipfast by ROLE MODEL",
		link: "https://open.spotify.com/track/2kbTNUg1DDA5JuLk2h9PP9?si=90cd3a84898c4d02"
	},
	{
		src: "pic21.png",
		title: "Siren Sounds by Tate McRae",
		link: "https://open.spotify.com/track/181yGUB8xEh4LfK8KhC4Wa?si=18bffd8b62164184"
	}
]

// pick random song from array of all songs
let random = songs[Math.floor(Math.random() * songs.length)];

// everything actually showing up (link, image, p)
album.innerHTML = `<a href="${random.link}" target="_blank">
    <img src="${random.src}" alt="${random.caption}"></a>
	<p class="caption">${random.title}</p>`;
