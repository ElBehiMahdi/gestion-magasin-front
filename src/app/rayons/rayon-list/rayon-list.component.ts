import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Products';
import { Rayon } from 'src/app/models/Rayon';
import { ProductService } from 'src/app/services/product.service';
import { RayonsService } from 'src/app/services/rayons.service';

@Component({
  selector: 'app-rayon-list',
  templateUrl: './rayon-list.component.html',
  styleUrls: ['./rayon-list.component.css']
})
export class RayonListComponent implements OnInit {
  [x: string]: any;
  rayonList : Rayon[] =[];
  productList : Product[]=[];
  list : string[] = [];
  lists : Array<[string[]]> =[];
  
  constructor(private rayonService : RayonsService,private productService : ProductService
    ,private router : Router) { }

  ngOnInit(): void {
    this.rayonService.getRayonList().subscribe((data)=>{
      var lr : Rayon[] = [];
      this.rayonList = lr.concat(data)
    });
    this.productService.getProductList().subscribe((data)=>{
      var lp : Product[]=[]; 
      this.productList = lp.concat(data)
    this.productList.forEach(product =>
    this.list.push(product.libelle))});


   /* this.rayonService.getRayonList().subscribe((data)=>{this.rayonList = data
      this.rayonList.forEach(rayon => {
        this.productService.getProductList().subscribe((data)=>{this.productList = data
          this.productList.forEach(product =>{
            this.list.push(product.libelle)
              if (rayon.libelle==product.libelle) {
                var lt = [];   
                lt.push(product.libelle)
                
                this.lists.push([lt]);
              }
          })
        });

      })
    });
    console.log(this.lists);*/
  }

  updateRayons(id: number) {
    this.router.navigate(['rayon/edit', id]);
  }

  
  drop(event: CdkDragDrop<string[]>) {
    //moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}