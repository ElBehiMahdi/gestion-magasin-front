import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../service/client.service';
declare var google:any ;
@Component({
  selector: 'app-stat-client',
  templateUrl: './stat-client.component.html',
  styleUrls: ['./stat-client.component.css']
})
export class StatClientComponent implements OnInit {

  
  constructor(private serv: ClientService) { }

  @ViewChild('pieChart') pieChart!: ElementRef;

    drawChart = () => {
  
  
      const data = google.visualization.arrayToDataTable([
        ['Profession', 'Profession per client'],
        ['docteur', this.docteur],
        ['ingenieur', this.ingenieur],
        ['etudiant', this.etudiant],
        ['cadre', this.cadre],
        ['commercial', this.commercial],
        ['autre', this.autre]
      ]);
      
    
  
      const options = {
        title: 'Répartition des professions par client',
        legend: {position: 'top'}
      }
  
  
      const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
  
       chart.draw(data, options);
 

  
    }
    
  
    ingenieur=0;
    docteur=0;
    cadre=0;    
    commercial=0;
    autre=0;
    etudiant=0;


    
    ngOnInit() {
      this.serv.retrieveAllClients().subscribe(
        data =>{
          console.log(data);
          data.forEach(e=>{

            console.log(e.profession);
            if(e.profession=='etudiant')
              this.etudiant ++;
             
            else if(e.profession=='cadre')
              this.cadre ++;

            else if(e.profession=='docteur')
              this.docteur ++;

            else if(e.profession=='ingenieur')
              this.ingenieur ++;
        
            else if(e.profession=='autre')
              this.autre ++;

            else if(e.profession=='commercial')
              this.commercial ++;
          })
          console.log(this.ingenieur);
          console.log(this.commercial);
          this.drawChart() })
   
    }
   
    ngAfterViewInit(): void {
      google.charts.load('current', {packages: ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart);
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(this.drawChart);
    }

}
