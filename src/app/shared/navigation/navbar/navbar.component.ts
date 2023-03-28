import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeChange } from '../../services/theme-change.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule ]
})
export class NavbarComponent {
  constructor(private _themeChange:ThemeChange){}

  themeConfig = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'halloween',
    'retro',
    'cyberpunk',
    'garden',
    'forest',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'lemonade',
    'night',
    'winter',
  ];

  changeTheme(theme: string) {
    this._themeChange.setTheme(theme);
  }
}
