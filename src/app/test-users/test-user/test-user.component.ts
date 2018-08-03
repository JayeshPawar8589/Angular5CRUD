import { Component, OnInit } from '@angular/core';
import { TestuserService } from '../shared/testuser.service';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.scss']
})
export class TestUserComponent implements OnInit {

  constructor(private testuserService : TestuserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.testuserService.selectedTestUser = {
      Id: 0,
      Name: '',
      Address: '',
      EmailId: '',
      MobileNo: null,
    }
  }
 
  onSubmit(form: NgForm) {
    if (form.value.Id == 0) {
      this.testuserService.postTestUser(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.testuserService.getTestUserList();
          this.toastr.success('New Record Added Succcessfully', 'User Register');
        })
    }
    else {
      this.testuserService.putTestUser(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.testuserService.getTestUserList();
        this.toastr.info('Record Updated Successfully!', 'User Register');
      });
    }
  }
}
