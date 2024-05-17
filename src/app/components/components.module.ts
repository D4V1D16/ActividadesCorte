import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { AgregarCelularComponent } from "./agregar-celular/agregar-celular.component";

@NgModule({
    declarations: [
        AgregarCelularComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        AgregarCelularComponent
    ]
})

export class ComponentsModule { }