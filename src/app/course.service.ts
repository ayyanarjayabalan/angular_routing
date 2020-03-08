import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    {
      id: 1,
      name: 'Angular',
      price: 100
    },
    {
      id: 2,
      name: 'React',
      price: 200
    },
    {
      id: 3,
      name: 'Dotnet',
      price: 300
    }
  ];

  constructor() { }


  getCourses() : any[] {
    return this.courses;
  }

  getCourse(id: number) : any {
    return this.courses.filter((data) => data.id === id)[0];
  }
}
