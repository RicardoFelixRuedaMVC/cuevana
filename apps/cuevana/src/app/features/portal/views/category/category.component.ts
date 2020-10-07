import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class PortalCategoryComponent implements OnInit {

  codigo: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.codigo = id; */

    this.activatedRoute.paramMap.subscribe(params => {
      this.codigo = +params.get('id');
    });
  }

}
