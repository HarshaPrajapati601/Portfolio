import { Component, OnInit } from '@angular/core'; 
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  isLoading:boolean
  name = 'Angular';
  album:any = [];
  paintType:string = 'water';
  loader:string='https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif';
  albumWater:any =[
    {src:'../../assets/images/Myart/b.jpg','thumb':'../../assets/images/Myart/b.jpg'},
    {src:'../../assets/images/Myart/b1.jpg','thumb':'../../assets/images/Myart/b1.jpg'}

  ];
  albumAbstract:any= [
    {src:'../../assets/images/Myart/0.jpg','thumb':'../../assets/images/Myart/0.jpg'},
    {src:'../../assets/images/Myart/34.jpg','thumb':'../../assets/images/Myart/34.jpg'},
    {src:'../../assets/images/Myart/a1.jpg','thumb':'../../assets/images/Myart/a1.jpg'},
    {src:'../../assets/images/Myart/c4.jpg','thumb':'../../assets/images/Myart/c4.jpg'},
    {src:'../../assets/images/Myart/o.jpg','thumb':'../../assets/images/Myart/o.jpg'},
    {src:'../../assets/images/Myart/a23.jpg','thumb':'../../assets/images/Myart/a23.jpg'},
  ]
  sketeches:any=[
    {src:'../../assets/images/Myart/c.jpg','thumb':'../../assets/images/Myart/c.jpg'},
    {src:'../../assets/images/Myart/d.jpg','thumb':'../../assets/images/Myart/d.jpg'},
    {src:'../../assets/images/Myart/m.jpg','thumb':'../../assets/images/Myart/m.jpg'},
    {src:'../../assets/images/Myart/a24.jpg','thumb':'../../assets/images/Myart/a24.jpg'},
  ]
  constructor(private _lightbox: Lightbox) {
    this.isLoading = true;
    this.album.push({'src':'../../assets/images/Myart/l.jpg','caption':'Image 11','thumb':'../../assets/images/Myart/l.jpg'});
    this.album.push({'src':'../../assets/images/Myart/q.jpg','caption':'Image 1','thumb':'../../assets/images/Myart/q.jpg'});
    this.album.push({'src':'../../assets/images/Myart/r.jpg','caption':'Image 1','thumb':'../../assets/images/Myart/r.jpg'});
    this.album.push({'src':'../../assets/images/Myart/rs.jpg','caption':'Image 1','thumb':'../../assets/images/Myart/rs.jpg'});
    this.album.push({'src':'../../assets/images/Myart/rt.jpg','caption':'Image 2','thumb':'../../assets/images/Myart/rt.jpg'});
    this.album.push({'src':'../../assets/images/Myart/y.jpg','caption':'Image 2','thumb':'../../assets/images/Myart/y.jpg'});
    this.album.push({'src':'../../assets/images/Myart/e.jpg','caption':'Image 5','thumb':'../../assets/images/Myart/e.jpg'});
    this.album.push({'src':'../../assets/images/Myart/f.jpg','caption':'Image 6','thumb':'../../assets/images/Myart/f.jpg'});
    this.album.push({'src':'../../assets/images/Myart/g.jpg','caption':'Image 7','thumb':'../../assets/images/Myart/g.jpg'});
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album, index);
    console.log("this.album",this.album , index)
  }
  emitType(typeOfpaint){
    this.paintType = typeOfpaint;
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  hideLoader(){
    this.isLoading=false;
  }

  ngOnInit() {
  }

}
