import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resident-evil',
    loadChildren: () => import('./resident-evil/resident-evil.module').then( m => m.ResidentEvilPageModule)
  },
  {
    path: 'blazing-beaks',
    loadChildren: () => import('./blazing-beaks/blazing-beaks.module').then( m => m.BlazingBeaksPageModule)
  },
  {
    path: 'the-invisible-hand',
    loadChildren: () => import('./the-invisible-hand/the-invisible-hand.module').then( m => m.TheInvisibleHandPageModule)
  },
  {
    path: 'hood-outlwas',
    loadChildren: () => import('./hood-outlwas/hood-outlwas.module').then( m => m.HoodOutlwasPageModule)
  },
  {
    path: 'monster-harvest',
    loadChildren: () => import('./monster-harvest/monster-harvest.module').then( m => m.MonsterHarvestPageModule)
  },
  {
    path: 'interest',
    loadChildren: () => import('./interest/interest.module').then( m => m.InterestPageModule)
  },
  {
    path: 'interest-blazing-beaks',
    loadChildren: () => import('./interest-blazing-beaks/interest-blazing-beaks.module').then( m => m.InterestBlazingBeaksPageModule)
  },
  {
    path: 'interest-invisible-hand',
    loadChildren: () => import('./interest-invisible-hand/interest-invisible-hand.module').then( m => m.InterestInvisibleHandPageModule)
  },
  {
    path: 'interest-outlaws',
    loadChildren: () => import('./interest-outlaws/interest-outlaws.module').then( m => m.InterestOutlawsPageModule)
  },
  {
    path: 'interest-monster-harvest',
    loadChildren: () => import('./interest-monster-harvest/interest-monster-harvest.module').then( m => m.InterestMonsterHarvestPageModule)
  },
  {
    path: 'number-of-games-wanted',
    loadChildren: () => import('./number-of-games-wanted/number-of-games-wanted.module').then( m => m.NumberOfGamesWantedPageModule)
  },
  {
    path: 'list-of-consoles',
    loadChildren: () => import('./list-of-consoles/list-of-consoles.module').then( m => m.ListOfConsolesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
