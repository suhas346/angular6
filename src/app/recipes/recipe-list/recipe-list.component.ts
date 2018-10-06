import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is a simply test',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201309-xl-filipino-grilled-chicken.jpg%3Fitok%3De9G7Zq9x&w=900&q=85'),
    new Recipe ('A Test Recipe', 'This is a simply test',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201309-xl-filipino-grilled-chicken.jpg%3Fitok%3De9G7Zq9x&w=900&q=85')
  ];
  constructor() { }

  ngOnInit() {
  }

}
