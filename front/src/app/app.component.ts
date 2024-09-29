import {
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { PanierComponent } from "./shared/ui/panier/panier.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent,PanierComponent, CommonModule ],
})
export class AppComponent {

  title = "ALTEN SHOP";
  isPanierBtnClicked = false; // Start collapsed
  @Output() onBtnClicked = new EventEmitter<boolean>();

  onPanierBtnClicked() {
     this.isPanierBtnClicked ? this.isPanierBtnClicked=false :this.isPanierBtnClicked= true ;
     this.onBtnClicked.emit(this.isPanierBtnClicked);     
     console.log("get"+this.isPanierBtnClicked);
     return this.isPanierBtnClicked;
  }



}
