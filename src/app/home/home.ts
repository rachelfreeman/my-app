import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  styleUrl: './home.css',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Enter a to do item to add" />
        <button class="primary" type="button">Add</button>
      </form>
    </section>
  `,
})
export class Home {

}
