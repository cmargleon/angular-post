import { NgModule } from '@angular/core';
import { 
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule } from '@angular/material';
    import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatPaginatorModule
    ],
    exports: [MatProgressSpinnerModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatSortModule,
            MatTableModule,
            MatButtonModule,
            MatCardModule,
            MatSnackBarModule,
            MatDialogModule,
        MatPaginatorModule
        ],
})

export class MaterialModule {}