import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  allPosts:any;
  showSpinner:boolean;
  ids:number[];
  show:boolean = false;
  selectedUserID;
  constructor(private service: PostsService) { }

  /**
   * To get posts after the component is loaded
   * @author Malathi
   */
  ngOnInit(): void {
    this.ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Subscribe to get posts response
    this.service.getPosts().subscribe(res => {
      this.posts = res;
      this.allPosts = res;
      this.posts.forEach(val => {
        val.showSpinner = false;
      });
    })
  }

  /**
   * Filtering the data based on the user ID
   * @param selectUserId - Used to capture the user selected userId
   * @author Malathi
   */
  filterPosts(selectUserId){
    this.service.filterPosts(selectUserId).subscribe(res => {
      this.posts = res;
    })
  }
  
  /**
   * To delete a particular post 
   * @param post 
   * @author Malathi
   */
  deletePost(post){
    post.showSpinner = true;
    this.service.deletePosts(post).subscribe(res => {
      post.showSpinner = false;
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    })
  }

  /**
   * To add new post at the starting of the list
   * @param newTitle 
   * @author Malathi
   */
  addTitle(newTitle:HTMLInputElement){
    this.showSpinner = true;
    this.service.createPosts(newTitle).subscribe(res => {
      this.posts.unshift(res);
      this.showSpinner = false;
      newTitle.value = '';
    })
  }

  /**
   * To toggle boolean value 'show' 
   */
  toggle(){
    this.show = !this.show;
    this.posts = this.allPosts;
  }
}