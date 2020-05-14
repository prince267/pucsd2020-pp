import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:9090/webapi/v1";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public GetUserGroups(id: number) {
    return this.httpClient.get(this.REST_API_SERVER + "/user/" + id)
  }


  public GetAllUser() {
    return this.httpClient.get(this.REST_API_SERVER + "/user")
  }

  async GetAllFolders() {
    const response = this.httpClient.get(this.REST_API_SERVER + "/allFolders").toPromise()
    return response
  }

  async GetAllFiles() {
    const response = this.httpClient.get(this.REST_API_SERVER + "/allFiles").toPromise()
    return response
  }

  public GetGroupUsers(id: number) {
    return this.httpClient.get(this.REST_API_SERVER + "/groupUsers/" + id)
  }

  async GetUserFolders(id: number) {
    const response = await this.httpClient.get(this.REST_API_SERVER + "/folders/" + id).toPromise()
    return response
  }
  async GetUserFiles(id: number) {
    const response = await this.httpClient.get(this.REST_API_SERVER + "/files/" + id).toPromise()
    return response
  }

  public GetFileData(path: string) {
    return this.httpClient.get(this.REST_API_SERVER + "/rfile/?path=" + path)
  }

  public WriteIntoFile(path: string, content: string) {
    console.log(path, content)
    return this.httpClient.get(this.REST_API_SERVER + "/wfile/?path=" + path + "&content=" + content)
  }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }

  public getById(id) {
    return this.httpClient.get(this.REST_API_SERVER + '/' + id);
  }

  async CreateFolder(FolderData) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    const response = this.httpClient.post<{ status: number, data: any }>(this.REST_API_SERVER + "/folder", FolderData, options).toPromise()
    return response;
  }

  async CreateFile(FileData) {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    const response = this.httpClient.post<{ status: number, data: any }>(this.REST_API_SERVER + "/file", FileData, options).toPromise()
    return response
  }


  public NewUserFile(UserFileData) {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post(this.REST_API_SERVER + "/userFile", UserFileData, options)
  }


  public NewUserFolder(UserFolderData) {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post(this.REST_API_SERVER + "/userFolder", UserFolderData, options)
  }

  public deleteProduct(id) {
    return this.httpClient.delete(this.REST_API_SERVER + '/' + id).pipe(catchError(this.handleError));
  }

  public updateUser(data, id) {
    console.log("caledd update")
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.put(this.REST_API_SERVER + '/' + id, data, options).pipe(catchError(this.handleError));
  }
}