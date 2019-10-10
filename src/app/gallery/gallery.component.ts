import { Component, OnInit } from '@angular/core'; 
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myArtimage:any[]=[
    {'path':'../../assets/images/Myart/a.jpg', 'caption':'Imag1','thumb':'../../assets/images/Myart/a.jpg'},
    {'path':'../../assets/images/Myart/b.jpg', 'caption':'Imag1','thumb':'../../assets/images/Myart/a.jpg'},
    {'path':'../../assets/images/Myart/c.jpg', 'caption':'Imag1','thumb':'../../assets/images/Myart/a.jpg'}
    // {'path':'../../assets/images/Myart/d.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/e.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/f.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/g.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/h.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/i.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/k.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/l.jpg', 'title':''},
    // {'path':'../../assets/images/Myart/m.jpg', 'title':''},

  ]

 
  
  name = 'Angular';
  album:any = [];
  constructor(private _lightbox: Lightbox) {

    this.album.push({'src':'../../assets/images/Myart/a.jpg','caption':'Image 1','thumb':'../../assets/images/Myart/a.jpg'});

    this.album.push({'src':'../../assets/images/Myart/b.jpg','caption':'Image 2','thumb':'../../assets/images/Myart/b.jpg'});

    this.album.push({'src':'../../assets/images/Myart/c.jpg','caption':'Image 3','thumb':'../../assets/images/Myart/c.jpg'});
    this.album.push({'src':'../../assets/images/Myart/d.jpg','caption':'Image 4','thumb':'../../assets/images/Myart/d.jpg'});

    this.album.push({'src':'../../assets/images/Myart/e.jpg','caption':'Image 5','thumb':'../../assets/images/Myart/e.jpg'});

    this.album.push({'src':'../../assets/images/Myart/f.jpg','caption':'Image 6','thumb':'../../assets/images/Myart/f.jpg'});

    this.album.push({'src':'../../assets/images/Myart/g.jpg','caption':'Image 7','thumb':'../../assets/images/Myart/g.jpg'});

    this.album.push({'src':'../../assets/images/Myart/h.jpg','caption':'Image 8','thumb':'../../assets/images/Myart/h.jpg'});
    this.album.push({'src':'../../assets/images/Myart/i.jpg','caption':'Image 9','thumb':'../../assets/images/Myart/i.jpg'});
    this.album.push({'src':'../../assets/images/Myart/l.jpg','caption':'Image 11','thumb':'../../assets/images/Myart/l.jpg'});
    this.album.push({'src':'../../assets/images/Myart/m.jpg','caption':'Image 11','thumb':'../../assets/images/Myart/m.jpg'});
    this.album.push({'src':'../../assets/images/Myart/n.jpg','caption':'Image 10','thumb':'../../assets/images/Myart/n.jpg'});
    





  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


  ngOnInit() {
  }

}
