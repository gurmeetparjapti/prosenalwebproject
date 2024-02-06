import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public ngOnInit(){
    // TypeScript
const toggleButton = document.getElementById('toggleButton') as HTMLDivElement;
const elementToToggle = document.getElementById('elementToToggle') as HTMLDivElement;

toggleButton.addEventListener('click', () => {
  // Toggle the display property
  elementToToggle.style.display = (elementToToggle.style.display === 'block') ? 'none' : 'block';
});
}




}
