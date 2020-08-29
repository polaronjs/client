import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// top-level routes
import { routes } from './app.routes';

// entry component
import { AppComponent } from './app.component';

// other components
import { PageLoadProgressComponent } from './components/page-load-progress/page-load-progress.component';

@NgModule({
  declarations: [AppComponent, PageLoadProgressComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
