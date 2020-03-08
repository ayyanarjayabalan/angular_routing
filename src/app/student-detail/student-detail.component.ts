import { Component, OnInit, Input, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { StudentHistoryComponent } from '../student-history/student-history.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, AfterContentInit {
 
  @ContentChild(StudentHistoryComponent) studentHistory: StudentHistoryComponent;

  @ContentChildren(StudentHistoryComponent) studentHistoryList: QueryList<StudentHistoryComponent>;

  @Input() student:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      //this.studentHistory.history.year = 2020;

      this.studentHistoryList.toArray().forEach((comp) => {
        comp.history.year = 2019;
      });
    }, 0);
  }


}
