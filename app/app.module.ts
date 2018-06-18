import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppModule as C13Module }   from './customer-list/app.module';

import { AppComponent, SectionViewDirective } from './app.component';

// in-mem-web-api and its test-data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // for future routing features
    C13Module,

    // By making this the last thing that we import,
    // it always overrides whatever in memory data a previous module loaded
    InMemoryWebApiModule.forRoot(InMemoryDataService) // register in-mem-web-api and its data
  ],

  declarations: [AppComponent, SectionViewDirective],
  // entryComponents: would list the dynamically loaded components
  // for AOT/dead-code-removal but not needed for this JIT-only harness
  bootstrap: [AppComponent]
})
export class AppModule { }
