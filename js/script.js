

const app = new Vue({
  // qui si inserisce TUTTO il codice Vue
  // el è un parametro obbligatorio e punta a un ID
  el: '#app',

  // tutte le nostre variabili le dichiariamo in data
  // da a sua volta è un oggetto
  data : {
    messaggio: 'ciao mondo',
    mioColore: '',
    mioStile: 'grassetto',
    isGrassetto : false
  },

  // le funzioni vanno messe demtro la proprietà methods
  methods: {
    funzioneEstesa: function(){
      console.log('sono la funzione estesa', this);
      console.log('messaggio', this.messaggio);
    },
    funzioneCompatta(){
      console.log('sono la funzione compatta', this);
      console.log('messaggio', this.messaggio);
    },
    // le arrow function non si usano come methods perché non accedo ai data
    arrowFunction : () => {
      console.log('sono la arrow function', this);
      console.log('messaggio', this.messaggio);
    },
    toggleGrassetto(){
      this.isGrassetto = ! this.isGrassetto;
    },
    cambiaMessaggio(nuovoMessaggio){
      this.messaggio = nuovoMessaggio;
    }
  }
});

