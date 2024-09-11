import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../iuser';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'phone', 'website'];
  dataSource: MatTableDataSource<IUser>;

  constructor(private _service: UserService) {
    this.dataSource = new MatTableDataSource<IUser>();
  }

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => {
        this.dataSource.data = response;
      }
    );
  }
}