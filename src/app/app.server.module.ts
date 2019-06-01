import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader";
import { InlineStyleComponent } from "./inline-style/inline-style.component";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
  declarations: [InlineStyleComponent]
})
export class AppServerModule {}
