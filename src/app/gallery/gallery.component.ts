import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myArtimage:any[]=[
    {'path':'../../assets/images/Myart/a.jpg', 'title':''},
    {'path':'../../assets/images/Myart/b.jpg', 'title':''},
    {'path':'../../assets/images/Myart/c.jpg', 'title':''},
    {'path':'../../assets/images/Myart/d.jpg', 'title':''},
    {'path':'../../assets/images/Myart/e.jpg', 'title':''},
    {'path':'../../assets/images/Myart/f.jpg', 'title':''},
    {'path':'../../assets/images/Myart/g.jpg', 'title':''},
    {'path':'../../assets/images/Myart/h.jpg', 'title':''},
    {'path':'../../assets/images/Myart/i.jpg', 'title':''},
    {'path':'../../assets/images/Myart/k.jpg', 'title':''},
    {'path':'../../assets/images/Myart/l.jpg', 'title':''},
    {'path':'../../assets/images/Myart/m.jpg', 'title':''},

  ]

  constructor() { }

  ngOnInit() {
  }

}
