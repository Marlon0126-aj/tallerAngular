import { Component, OnInit } from '@angular/core';
import { Series } from './Series';
import { SeriesService } from './Series.service';

@Component({
  selector: 'app-series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Series> = [];
  promedio: number = 0;

  constructor(private seriesService: SeriesService) { }

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.calcularPromedio();
    });
  }

  calcularPromedio() {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.promedio = totalSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}

