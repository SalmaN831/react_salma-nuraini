class kendaraan{
    constructor(totalroda, kecepatanperjam){
        this.totalroda = totalroda;
        this.kecepatanperjam = kecepatanperjam;
    } 
    deskripsikendaraan(){
        return `Ada kendaraan dengan roda ${this.totalroda} dengan kecepatan ${this.kecepatanperjam} km/jam`
    }
}

class mobil extends kendaraan{
    constructor(kecepatanperjam, kecepatanbaru){
        super(kecepatanperjam, kecepatanbaru)
        this.kecepatanbaru = kecepatanbaru;
        this.kecepatanperjam = kecepatanperjam;
    };

    tambahkecepatan () {
        return `Kemudian ada kendaraan tersebut melaju dengan kecepatan baru ${this.kecepatanbaru} km/jam
        sehingga memiliki kecepatan akhir sebesar ${this.kecepatanbaru + this.kecepatanperjam} km/jam` 
    }
}
mobillamban = new kendaraan(4, 20);
mobilcepat = new mobil(20, 30)
    console.log(mobillamban.deskripsikendaraan());
    console.log(mobilcepat.tambahkecepatan());
