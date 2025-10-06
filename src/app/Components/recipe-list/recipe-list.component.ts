import { Component, inject, input, Signal } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { IRecipe } from '../../Interfaces/IRecipe.interface';
import { RecipeListService } from '../../Services/recipeList.service';
import { AddNewRecipeBtnComponent } from '../add-new-recipe-btn/add-new-recipe-btn.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeCardComponent, AddNewRecipeBtnComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  private recipeListService = inject(RecipeListService);

  searched_value = input<string>('');

  list: Signal<IRecipe[]> = this.recipeListService.list;
  list_length: Signal<Number> = this.recipeListService.list_length;
}
