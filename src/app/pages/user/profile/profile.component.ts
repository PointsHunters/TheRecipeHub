import { Component } from '@angular/core';

interface UserProfile {
  avatar: string;
  username: string;
  fullname: string;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: UserProfile = {
    avatar: '',
    username: 'Username',
    fullname: 'Fullname',
    email: 'email@email.com',
    password: ''
  };
  editMode = false;
  public avatar: string = './assets/img/profile.jpg';

  startEdit() {
    this.editMode = true;
  }

  stopEdit() {
    this.editMode = false;
  }

  saveProfile() {
    // Save profile logic here
    this.editMode = false;
  }

 /**
  Sets the user's avatar to the data URL of the selected image file.

  @param {any} event - The event object that contains the selected file.
 
  - This function is called when a file is selected using the input element.
  - It gets the selected file from the event object and checks if it exists.
  - If the file exists, it creates a new FileReader object to read the file content.
  - The FileReader object reads the file as a data URL and sets it as the user's avatar.
  - The data URL represents the file content as a string, which can be used as the source of an <img> element.
  */
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatar = this.user.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }  
}