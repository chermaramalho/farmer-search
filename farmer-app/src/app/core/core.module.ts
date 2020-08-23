import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FarmerService } from '@app/core/services/farme.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})

export class CoreModule {
  /* Tendo Certeza que o CoreModele só esta sendo importado pelo AppModule (apenas uma NGModule) */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule já foi carregado. Importar somente no AppModule.');
    }
  }
}
