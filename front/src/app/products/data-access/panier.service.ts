import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { CommandeLigne, Panier } from "./panier.model";

@Injectable({
    providedIn: "root"
}) export class PanierService {

    panier: Panier= new Panier(); 

    public get():  CommandeLigne[]  {
        return this.panier.lignesdecommandes;
    }

    public add( product: Product)  {
        return this.panier.lignesdecommandes.push(new CommandeLigne(product, 1,product.price ) );
    }
    /* public delete( product:Product)  {
        return this.panier.lignesdecommandes.pop(product.id);
    } */
}