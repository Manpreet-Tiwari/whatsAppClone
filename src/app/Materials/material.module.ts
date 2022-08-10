import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

const materials = [
    MatIconModule,
    MatButtonModule
]

@NgModule({
    imports: [materials],
    exports: [materials]
})
export class MaterialModule { }