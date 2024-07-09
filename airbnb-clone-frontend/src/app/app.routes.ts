import {Routes} from '@angular/router';
import {PropertiesComponent} from "./landlord/properties/properties.component";
import {authorityRouteAccess} from "./core/auth/authority-route-access";
import {HomeComponent} from "./home/home.component";
import {DisplayListingComponent} from "./tenant/display-listing/display-listing.component";
import {BookedListingComponent} from "./tenant/booked-listing/booked-listing.component";
import {ReservationComponent} from "./landlord/reservation/reservation.component";
import { PropertiesCreateComponent } from './landlord/properties-create/properties-create.component';
import { PriceStepComponent } from './landlord/properties-create/step/price-step/price-step.component';
import { TesstComponent } from './layout/tesst/tesst.component';

export const routes: Routes = [
  {
    path: 'landlord/properties',
    component: PropertiesComponent,
    canActivate: [authorityRouteAccess],
    data: {
      authorities: ["ROLE_LANDLORD"]
    }
    // chỉ những người có role là landlord mới được truy cập vào tuyến đường này
    //chủ nhà
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listing',
    component: DisplayListingComponent
  },
  {
    path: "booking",
    component: BookedListingComponent
  },
  {
    path: "landlord/reservation",
    component: ReservationComponent,
    canActivate: [authorityRouteAccess],
    data: {
      authorities: ["ROLE_LANDLORD"]
    }
  },
  {
    path: "create-oke",
    component: PropertiesCreateComponent
  },
  {
    path: "ccc",
    component: TesstComponent
  }
];
