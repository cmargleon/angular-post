import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  
  @ViewChild('deleteDialog') deleteDialog: TemplateRef<any>;

  rows = [];
  getSubscription;
  deleteSubscription;

  columns = [
    { prop: 'title' },
    { prop: 'created_at' },
    { name: 'delete' }
  ];

  constructor(private postService: PostService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getSubscription = this.postService.getPosts()
    .subscribe(res => {
      const sortedData = res.sort(function(a, b) {
        return  +new Date(b.created_at) - +new Date(a.created_at);
      });
      return this.rows = sortedData;
    },
    error => {
      return this.snackBar.open(error)
    });
  }

  openDeleteDialog(postId) {
    const deleteDialog = this.dialog.open(this.deleteDialog);
    deleteDialog.afterClosed().subscribe(res => {
      if (!res) {
        return console.log("No delete");
      }
      return this.deletePost(postId);
    });
  }
  
  deletePost(postId) {
    this.deleteSubscription = this.postService.deletePost(postId)
    .subscribe(res => {
      this.snackBar.open("Post deleted", "", {
        duration: 2000
      });
      return this.deleteRowDataTable(postId, '_id', this.rows);
    },
    error => {
      return this.snackBar.open(error)
    });
  }

  
  private deleteRowDataTable(postId, idColumn, dataSource) {
    const dsData = dataSource;
    const itemIndex = dsData.findIndex(obj => obj[idColumn] === postId);
    let temp = [...this.rows];
    temp.splice(itemIndex, 1);
    return this.rows = temp;
  }

  navigate(event){
    if (event.type === 'click') {
      return window.open(event.row.url);
      }
    return;
  }

  ngOnDestroy() {
    this.getSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
  }

}