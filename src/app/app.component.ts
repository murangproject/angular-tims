import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeChange } from './shared/services/theme-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  $theme: Observable<string> = this._themeChanger.getTheme();

  title = 'Application';

  constructor(private _themeChanger: ThemeChange) {}

  ngOnInit(): void {
    this._themeChanger.setTheme(localStorage.getItem('theme') ?? 'light');
  }
}
