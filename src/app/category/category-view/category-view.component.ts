import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient,
    private route: ActivatedRoute,
    ) { }

  category = {
    title: "",
    desc: "",
    anons: ""
  }

  ngOnInit() {
    this.categoryService
      .loadById(1)
      .subscribe((item) => {
        this.category = item
      });
  }


}
