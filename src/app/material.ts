import { NgModule } from '@angular/core';
import { 
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule
        } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule
    ],
    exports: [
            MatIconModule,
            MatButtonModule,
            MatCardModule,
            MatSnackBarModule,
            MatDialogModule
            ],
})

export class MaterialModule {}