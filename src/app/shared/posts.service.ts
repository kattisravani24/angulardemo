import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  //Url to get the Mock API
  url:string = 'https://jsonplaceholder.typicode.com/posts';

  fetchUrl:string = 'https://jsonplaceholder.typicode.com/posts?userId=';

  
  constructor(private http:HttpClient) { }

  /**
   * Get posts from Mock API
   */
  getPosts(){
    return this.http.get(this.url);
  }

  /**
   * Deleting the particular post
   * @param post
   * @author Malathi 
   */
  deletePosts(post){
    return this.http.delete(this.url + '/' + post.id);
  }

  /**
   * Adding new post to the top of the array
   * @param newTitle 
   * @autor Malathi
   */
  createPosts(newTitle: HTMLInputElement){
    let reqObj = { title: newTitle.value}
    return this.http.post(this.url, reqObj);
  }

  filterPosts(selectUserId){
    return this.http.get(this.fetchUrl + selectUserId.value);
  }
}
