import { Component, OnInit } from '@angular/core';
import { Rayon } from 'src/app/models/Rayon';
import { RayonsService } from 'src/app/services/rayons.service';

@Component({
  selector: 'app-rayon-list',
  templateUrl: './rayon-list.component.html',
  styleUrls: ['./rayon-list.component.css']
})
export class RayonListComponent implements OnInit {
  rayonList !: Rayon[];
  constructor(private rayonService : RayonsService) { }

  ngOnInit(): void {
    this.rayonService.getRayonList().subscribe((data)=>{this.rayonList = data});
  }

}
