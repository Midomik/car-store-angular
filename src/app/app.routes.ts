import { Routes } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CatalogPageComponent,
      },

      {
        path: 'favorite',
        component: FavoritesPageComponent,
      },
    ],
  },
];
