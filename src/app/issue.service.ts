import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private readonly uri = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }

  addIssue (postData : Issue) {
    return this.http.post(`${this.uri}/issues/add`, postData);
  }

  getIssue() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id: string | number) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  updateIssue(id: string | number, updateData: Issue) {
    return this.http.post(`${this.uri}/issues/update/${id}`, updateData);
  }

  deleteIssue(id: string | number) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
