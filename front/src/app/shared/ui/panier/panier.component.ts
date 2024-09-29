import { CommonModule } from "@angular/common";
import {
    Component,
    inject,
    Input,
    OnInit,
  } from "@angular/core"; 
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { Product } from "app/products/data-access/product.model";
import { PanierService } from "app/products/data-access/panier.service";
import { CommandeLigne } from "app/products/data-access/panier.model";
import { FormsModule } from "@angular/forms";

const emptyProduct: Product = {
  id: 0,
  code: "",
  name: "",
  description: "",
  image: "",
  category: "",
  price: 0,
  quantity: 0,
  internalReference: "",
  shellId: 0,
  inventoryStatus: "INSTOCK",
  rating: 0,
  createdAt: 0,
  updatedAt: 0,
};
  @Component({
    selector: "panier",
    standalone: true,
    imports: [ CardModule, ButtonModule,  CommonModule, FormsModule ],
    templateUrl: "./panier.component.html",

  })
  export class PanierComponent  implements OnInit {
    private readonly panierService = inject(PanierService);

    //cart$: Observable<Product[]>;
    public  products : CommandeLigne[]=[];

    ngDoCheck() {
        this.products= this.panierService.get() ;
    }

    ngOnInit() {

    }

  }
  