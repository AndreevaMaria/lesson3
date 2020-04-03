import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private CategoryService: CategoryService) { }

  categorys = []

  ngOnInit() {
    this.CategoryService
      .loadAll()
      .subscribe((items:any[]) => {
        this.categorys = items
      });
  }

}
