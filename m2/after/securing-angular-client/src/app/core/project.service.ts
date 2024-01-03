import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Constants } from '../constants';
import { Project } from '../model/project';
import { Observable } from 'rxjs/Observable';
import { Milestone } from '../model/milestone';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { UserPermission } from '../model/user-permission';
import { UserProfile } from '../model/user-profile';
import { MilestoneStatus } from '../model/milestone-status';

@Injectable()
export class ProjectService {
    constructor(private httpClient: HttpClient) { }
    
    getProjects(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(Constants.apiRoot + 'Projects');
    }

    getProject(projectId: number): Observable<Project> {
        return this.httpClient.get<Project>(Constants.apiRoot + 'Projects/' + projectId);
    }

    getProjectUsers(projectId: number): Observable<UserProfile[]> {
        return this.httpClient.get<UserProfile[]>(Constants.apiRoot + 'Projects/' + projectId + '/Users');
    }

    addProject(project: Project): Observable<Project> {
        return this.httpClient.post<Project>(Constants.apiRoot + 'Projects', project);
    }

    deleteProject(project: Project): Observable<object> {
        return this.httpClient.delete(Constants.apiRoot + 'Projects/' + project.id);
    }

    addUserPermission(userPermission: UserPermission) {
        return this.httpClient.post(Constants.apiRoot + 'UserPermissions', userPermission);
    }

    removeUserPermission(userId: string, projectId: number) {
        return this.httpClient.delete(`${Constants.apiRoot}UserPermissions/?userId=${userId}&projectId=${projectId}`);
    }

    updateUserPermission(userPermission) {
        return this.httpClient.put(`${Constants.apiRoot}UserPermissions`, userPermission);
    }

    getMilestones(projectId: number): Observable<Milestone[]> {
        return this.httpClient.get<Milestone[]>(Constants.apiRoot + 'Milestone');
    }

    getMilestoneStatuses() {
        return this.httpClient.get<MilestoneStatus[]>(`${Constants.apiRoot}Projects/MilestoneStatuses`);
    }

    addMilestone(milestone: Milestone) {
        return this.httpClient.post(`${Constants.apiRoot}Projects/Milestones`, milestone);
    }

    deleteMilestone(id: number) {
        return this.httpClient.delete(`${Constants.apiRoot}Projects/Milestones/${id}`);
    }

    updateMilestone(milestone: Milestone) {
        return this.httpClient.put(`${Constants.apiRoot}Projects/Milestones/${milestone.id}`, milestone);
    }
}