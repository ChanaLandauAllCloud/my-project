import { Component, OnInit } from '@angular/core';
import { contactsList } from 'src/app/contact-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ObjectIssue } from '../models/ObjectIssue.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  objectIssue: ObjectIssue[] = [];
  filterObjectIssue: ObjectIssue[] = [];
  isSearch = false;
  contacts: any;
  displayedColumns: string[] = ['ID', 'Name'];
  freeSearchValue: string = '';
  constructor(
    private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}
  dataSource: any;
  ngOnInit(): void {
    this.apiService.getIssues().subscribe((res) => {
      debugger;
      if (res != null) this.objectIssue = res;
    });

    this.dataSource = new MatTableDataSource(this.objectIssue);
    // this. dataSource = this.objectIssue;
  }

  openMoreInfoModal(objIssue: ObjectIssue) {
    const dialogRef = this.dialog.open(ContactDetailsComponent, {
      data: { objIssue },
    });
  }

  RouterLinkClick(id: any) {
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigateByUrl('/hello/' + id);
    });
  }
  checkFreeSearch() {
    if (!this.freeSearchValue) {
      this.filterObjectIssue = [];
      this.isSearch = false;
    }
  }
  search() {
    this.apiService
      .getIssuesByFreeSearch(this.freeSearchValue)
      .subscribe((res) => {
        this.isSearch = true;
        this.filterObjectIssue = res;
      });
  }
  
}
