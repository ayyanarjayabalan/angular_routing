import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { CourseDeatailComponent } from './course-deatail/course-deatail.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'course', component: CourseComponent
  },
  {
    path: 'course/:id', component: CourseDeatailComponent
  },
  {
    path: 'student', component: StudentComponent,
    children: [
      {
        path: 'detail', component: StudentDetailComponent
      }
    ]
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
