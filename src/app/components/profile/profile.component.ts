import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  yourPostList = [
    {
      id: 1,
      title: "Blender for Swap",
      swapperEmail: ""
    },
    {
      id: 2,
      title: "Iphone 5",
      swapperEmail: ""
    }];

  inTransactionPosts = [
    {
      id: 1,
      title: "EarPhone"
    },
    {
      id: 2,
      title: "Old desk"
    }
];

  historyPosts = [
    {
      id: 4,
      title: "HCI book",
      date: "10-16-2018"
    },
    {
      id: 5,
      title: "Head phone",
      date: "9-24-2018"
    }];

  wishlist = [
    {
      id: 5,
      title: "Chair",
    },
    {
      id: 6,
      title: "Table",
    },
    {
      id: 3,
      title: "Lamp",
    },
  ];

<<<<<<< HEAD

  deletePost(i) {
    this.yourPostList.splice(i, 1);
  }

  cancelTransaction(i) {
    let myPost = this.inTransactionPosts[i];
    this.inTransactionPosts.splice(i, 1);
    this.yourPostList.push(myPost);

  }

  completeTransaction(i) {
    let myPost = this.inTransactionPosts[i];
    this.inTransactionPosts.splice(i, 1);
    let myDate = new Date();
    this.historyPosts.push({
      id: myPost.id,
      title: myPost.title,
      date: (myDate.getMonth() + 1) + '-' + myDate.getDate() + '-' + myDate.getFullYear()
    });
  }


  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
  }

  openReviewModal(){
    document.getElementById('#reviewModal');
  }

  logout(){
    this.router.navigate(['login']);
  }

  sendInvitation(post) {
    this.yourPostList = this.yourPostList.filter(aPost => aPost.title != post.title);
    this.inTransactionPosts.unshift(post);
  }


}
