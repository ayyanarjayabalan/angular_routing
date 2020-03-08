import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { CourseDeatailComponent } from './course-deatail/course-deatail.component';
import { StudentHistoryComponent } from './student-history/student-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    HomeComponent,
    PageNotFoundComponent,
    StudentDetailComponent,
    CourseDeatailComponent,
    StudentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
