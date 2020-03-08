import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-course-deatail',
  templateUrl: './course-deatail.component.html',
  styleUrls: ['./course-deatail.component.css']
})
export class CourseDeatailComponent implements OnInit {

  course: any;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'));
      const value = param.get('value');
      console.log('Value is ', value);
      this.course = this.courseService.getCourse(id);
    });
  }

  goToPrevious() {
    this.router.navigate(['../', this.course.id - 1, {'value': 'test'}], {relativeTo: this.route});
  }

  goToNext() {
    this.router.navigate(['../', this.course.id + 1, {'value': 'test'}], {relativeTo: this.route});
  }

}
