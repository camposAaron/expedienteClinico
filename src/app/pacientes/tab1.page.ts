import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private photoService: PhotoService,
    private router: Router
    ) {}

  addPhotoGallery(){
    this.photoService.addNewToGallery();
  }

  navigateToNew(){
    this.router.navigate(['tabs/tab1/nuevo']);
  }
}
