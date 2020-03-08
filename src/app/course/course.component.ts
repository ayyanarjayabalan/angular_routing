import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses = [];

  constructor(private courseService: CourseService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  getCourse(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}
