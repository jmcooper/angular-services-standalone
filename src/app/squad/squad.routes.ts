import { Route } from "@angular/router";
import { SquadCatalogComponent } from "./squad-catalog/squad-catalog.component";
import { CartComponent } from "@shared/cart/cart.component";

export const squadRoutes: Route[] = [
  { path: 'bot-squad', component: SquadCatalogComponent, title: "Bot Squad - Joe's Robot Shop" },
  { path: 'squad-cart', component: CartComponent, title: "Squad Cart - Joe's Robot Shop" },
]
