import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatButtonModule} from '@angular/material/button';
import { UserService } from '../../shared/user.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user;
  faCoffee = faCoffee;
  modal:NgbModalRef;
  constructor(private modalService: NgbModal,
  private afAuth: AngularFireAuth,
  private userService: UserService,
  ) {
      this.afAuth.auth.onAuthStateChanged(function(user) {
      if(user) {
        modalService: NgbModal;
        modalService.dismissAll();
        
      }
    });
  }
 googleLogin(){
   this.userService.googleLogin();
 }

 facebookLogin(){
   this.userService.facebookLogin();
 }

 logout(){
   this.userService.logout();
 }

  open(content) {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    
  }

  ngOnInit() {
  }

}