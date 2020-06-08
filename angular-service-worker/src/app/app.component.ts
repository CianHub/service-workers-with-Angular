import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-service-worker';
  data: Todo[];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (data: Todo[]) => {
        console.log(data[0]);
        this.data = data;
      },
      (error) => console.log(error)
    );
  }
}
