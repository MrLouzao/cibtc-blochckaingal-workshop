import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule, MatSnackBarModule, MatTableModule, MatIconModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header.component';
import { BlockchainConnectionDataComponent } from './blockchain-connection-data/blockchain-connection-data.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        RouterModule,
        UtilModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule
      ],
      declarations: [HeaderComponent, BlockchainConnectionDataComponent],
      exports: [HeaderComponent, BlockchainConnectionDataComponent]
})
export class HeaderModule {
}
