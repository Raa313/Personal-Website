import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { SignInComponent } from '../pages/sign-in/sign-in.component';

@Component({
    standalone: true,
    selector: 'app-vtt-layout',
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './vtt-layout.component.html'
})
export class VttLayoutComponent {}
