import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// top-level routes
import { routes } from './app.routes';

// entry component
import { AppComponent } from './app.component';

// other components
import { PageLoadProgressComponent } from './components/page-load-progress/page-load-progress.component';

@NgModule({
  declarations: [AppComponent, PageLoadProgressComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
