//Caching URLs
let mainCacheName = 'ines-mcbride-portfolio-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(mainCacheName).then (cache => {
		return cache.addAll([
			'./',
			'./index.html',
			'./Face-Play.html',
			'./Park-Me.html',
			'./McBride-Sillig.html',
			'./Art-Lens.html',
			'./Memory-Game.html',
			'./Restaurant-review.html',
			'./About.html',
			'./Images/ALHome.jpg',
			'./Images/FPHome',
			'./Images/MGHome.jpg',
			'./Images/MGHomev2.jpg',
			'./Images/MSHome',
			'./Images/PMHome',
			'./Images/RRHome.jpg',
			'./Images/RestaurantReview/HomeScreen.jpg',
			'./Images/RestaurantReview/HomeX.jpg',
			'./Images/RestaurantReview/RestReview.jpg',
			'./Images/RestaurantReview/ReviewScreen2.jpg',
			'./Images/ParkMe/DemoVideo.mp4',
			'./Images/ParkMe/FirstFrame.jpg',
			'./Images/ParkMe/How.jpg',
			'./Images/ParkMe/DemoVideo.mp4'
			'./Images/ParkMe/Interaction.jpg',
			'./Images/ParkMe/Mockup2.jpg',
			'./Images/ParkMe/Mockup3.jpg',
			'./Images/ParkMe/Users.jpg',
			'./Images/ParkMe/Wire.jpg',
			'./Images/MemoryGame/Anim.mp4',
			'./Images/MemoryGame/MG-Home.jpg',
			'./Images/MemoryGame/MemoryGameWrong.jpg',
			'./Images/MemoryGame/HalfWayGame.jpg',
			'./Images/MemoryGame/GameModal.jpg',
			'./Images/MemoryGame/Anim.mp4',
			'./Images/McBrideSillig/About.jpg',
			'./Images/McBrideSillig/DevilsAdvocate.jpgContact1.0.jpg',
			'./Images/McBrideSillig/FrancRose.jpg',
			'./Images/McBrideSillig/Home.jpg',
			'./Images/McBrideSillig/iMacHome.jpg',
			'./Images/FacePLAY/HomeFrame',
			'./Images/FacePLAY/Info.jpg',
			'./Images/FacePLAY/Interaction.jpg',
			'./Images/FacePLAY/Results.jpg',
			'./Images/FacePLAY/UserPersonas.jpg',
			'./Images/FacePLAY/Video',
			'./Images/artlens/FrontHome.jpg',
			'./Images/artlens/Interaction2.jpg',
			'./Images/artlens/Process.jpg',
			'./Images/artlens/Process2.jpg',
			'./js/register.js',
			'./IMStyling.css'
		])
		.then(console.log('it worked'))
		.catch(error => {
			console.log(error);
		})
    })
  );
});

//Refreshing caches with updates on reload
self.addEventListener('activate', (event => {
  event.waitUntil(
    caches.keys().then(function(cacheNames){
    return Promise.all(
    	cacheNames.filter(function(cacheName){
    		return cacheName.startsWith('restaurant-review') &&
    		cacheName != mainCacheName;
    	}).map(function(cacheName){
    		return caches.delete(cacheName);
    		})
		);
  	})
    );
}));


//Returning cached urls when offline
self.addEventListener('fetch', (event => {
  event.respondWith(
	caches.match(event.request).then(function(response){
		if(response) return response;
		return fetch(event.request);
	})
	);
}));

