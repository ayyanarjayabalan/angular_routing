import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
 
  @ViewChild(StudentDetailComponent) studentDetail: StudentDetailComponent;
  @ViewChildren(StudentDetailComponent) studentDetailList: QueryList<StudentDetailComponent>;

  histories = [
    {
      year: 2006,
      school: 'ABC School'
    },
    {
      year: 2010,
      school: 'XYZ School'
    }
  ];

  students = [
    {
      id: 1,
      name: 'Ayyanar',
      grade: 10,
      histories: this.histories
    },
    {
      id: 2,
      name: 'Subash',
      grade: 9,
      histories: this.histories
    },
    {
      id: 3,
      name: 'John',
      grade: 11,
      histories: this.histories
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      //this.studentDetail.student.name = 'Rajesh';
      this.studentDetailList.toArray().forEach((comp) => {
        comp.student.grade = 12;
      });
    }, 0);
  }


}
