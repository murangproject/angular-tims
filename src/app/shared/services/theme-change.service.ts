import { BehaviorSubject, Observable, shareReplay } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeChange  {
    private $theme = new BehaviorSubject<string>('');

    public getTheme(): Observable<string> {
        return this.$theme.pipe(shareReplay(0));
    }

    public setTheme(theme: string) {
        localStorage.setItem('theme', theme);
        this.$theme.next(theme);
    }
}