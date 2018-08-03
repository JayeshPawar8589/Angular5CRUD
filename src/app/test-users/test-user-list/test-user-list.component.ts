import { Component, OnInit } from '@angular/core';
import { TestuserService } from '../shared/testuser.service';
import { Testuser } from '../shared/testuser.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-test-user-list',
  templateUrl: './test-user-list.component.html',
  styleUrls: ['./test-user-list.component.scss']
})
export class TestUserListComponent implements OnInit {

  constructor(private testuserService : TestuserService,private toastr : ToastrService) { }

  ngOnInit() {
    this.testuserService.getTestUserList();
  }
  showForEdit(emp: Testuser) {
    this.testuserService.selectedTestUser = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.testuserService.deleteTestUser(id)
      .subscribe(x => {
        this.testuserService.getTestUserList();
        this.toastr.warning("Deleted Successfully","User Register");
      })
    }
  }
}
