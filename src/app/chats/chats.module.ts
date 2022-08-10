import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../Materials/material.module";
import { ChatsRoutingModule } from "./chats-routing.module";
import { ChatsComponent } from "./chats.component";

@NgModule({
    declarations: [ChatsComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ChatsRoutingModule
    ],
    exports: []
})
export class ChatsModule {}