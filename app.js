const appVue = new Vue({
	// selettore dell'elemento html dove avviare vue
    el: "#app",

  // ConterrĂ  tutti i dati necessari all'applicazione
    data: {
	  // varie chiavi necessarie all'app
		message: "Forza Roma",
		imgSrc: "https://picsum.photos/id/237/200/300",
    },
	
	// ConterrĂ  una serie di funzioni
	methods: {
		// funzioni che useremo nell'app
		changeImage (){
			const newImgId = Math.floor(Math.random() *100);
			this.imgSrc = `https://picsum.photos/id/${newImgId}/200/300`;
		},
	}
});