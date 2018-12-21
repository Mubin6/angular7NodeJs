import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from 'src/app/issue.service';
import { Issue } from 'src/app/issue.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  public issue  = {} as Issue;
  constructor(
    private issueService: IssueService,
    private fb: FormBuilder,
    private router: Router
    ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: ''
    });
  }
  addIssue(title: string, responsible: string, description: string, severity: string) {
    this.issue.title = title;
    this.issue.responsible = responsible;
    this.issue.description = description;
    this.issue.severity = severity;
    this.issueService.addIssue(this.issue).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
  ngOnInit() {
  }


}
