import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contactsList } from 'src/app/contact-data';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ObjectIssue } from '../models/ObjectIssue.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  objIssue = new ObjectIssue();
  constructor(private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ContactDetailsComponent>) { }

  ngOnInit(): void {

    if (this.data && this.data.objIssue) {
      this.objIssue = this.data.objIssue;
      debugger
    }

  }

}
