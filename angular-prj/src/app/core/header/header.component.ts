import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSelect(tab: string) {
    this.tabSelected.emit(tab);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipeData();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    this.authService.isAuthenticated();
  }


}
