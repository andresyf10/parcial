import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { ContentComponent } from './content/content.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuBarComponent,ContentComponent]
})
export class AppComponent {
  title = 'parcial';
}
