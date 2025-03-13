import { Component, OnInit, HostListener } from '@angular/core';
import { ScreenSizeCheckService } from '../../../services/screen-size-check/screen-size-check.service';

interface UserProfile {
  fullname: string;
  email: string;
  password: string;
  newpassword: string;
  confirmnewpassword: string;
}

class EditMode {
  private editMode: boolean;

  constructor(){
    this.editMode = false;
  }

  GetEdit() {
    return this.editMode;
  }

  Show (){
    if(this.editMode === false){
      this.editMode = true;
    }else{
      this.editMode = false;
    }
  }
}

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  
  user: UserProfile = {
    fullname: 'Fullname',
    email: 'email@email.com',
    password: '',
    newpassword: '',
    confirmnewpassword: '',
  };
  personaldata = new EditMode();
  updatepassword = new EditMode();

  public isScreenSize: boolean = false;
  public theScreenSize: number = 576;

  constructor(private screenSizeCheckService: ScreenSizeCheckService) {}
  
  ngOnInit() {
    this.isScreenSize = this.screenSizeCheckService.sizeCheck(this.theScreenSize);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isScreenSize = this.screenSizeCheckService.sizeCheck(this.theScreenSize);
  }

}
