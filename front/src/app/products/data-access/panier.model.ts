import { Product } from "./product.model";

export class Panier {
    lignesdecommandes: CommandeLigne[]=[] ;

    constructor( ) {
    }

}

export class CommandeLigne {
     produitComande: Product;
     quantite: number;
     prix: number;

     constructor( produitComd: Product, quantite: number , prix: number ) {
        this.produitComande = produitComd;
        this.quantite = quantite;
        this.prix = prix;
      }
}