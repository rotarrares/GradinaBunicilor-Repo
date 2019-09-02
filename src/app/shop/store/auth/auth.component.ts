import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user;
  
  modal;
  constructor(private modalService: NgbModal,
  public afAuth: AngularFireAuth,
  ) {
    this.afAuth.auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log("User Authentificated");
      this.modal.close();
    }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  open(content) {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit() {
  }

}