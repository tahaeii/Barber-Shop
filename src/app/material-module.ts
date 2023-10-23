// Import Angular-Material
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
     imports:[
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        


     ],
     exports:[
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        

     ]
})

export class MaterialModul{
    
}