import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})


export class PostService {
  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // GET Request
  // 1) Many get request
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
  // 2) Single get request
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`)
  }

  // POST Request
  addPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post)
  }

  // PUT Request
  updatePost(post: Post) {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post)
  }

  // DELETE Request
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }



}
