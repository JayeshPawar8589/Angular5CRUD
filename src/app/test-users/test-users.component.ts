import { Component, OnInit } from '@angular/core';
import { TestuserService } from './shared/testuser.service';
@Component({
  selector: 'app-test-users',
  templateUrl: './test-users.component.html',
  styleUrls: ['./test-users.component.scss'],
  providers: [TestuserService]
})
export class TestUsersComponent implements OnInit {

  constructor(private testuserService : TestuserService) { }

  ngOnInit() {
  }

}
