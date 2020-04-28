import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string = 'https://jsonplaceholder.typicode.com/posts'; // To get the Mock API

  fetchUrl:string = 'https://jsonplaceholder.typicode.com/posts?userId='; // To get the Mock API
  
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
   * @author Malathi
   */
  createPosts(newTitle: HTMLInputElement){
    let reqObj = 
              { 
                title: newTitle.value
              }
    return this.http.post(this.url, reqObj);
  }

  /**
   * To filter the posts with selected User ID
   * @param selectUserId - To get User ID
   * @author Malathi
   */
  filterPosts(selectUserId){
    return this.http.get(this.fetchUrl + selectUserId.value);
  }
}