import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router'; // 1. Añadimos Router aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  
  // 2. Inyectamos el servicio Router para poder navegar por código
  constructor(private router: Router) {}

  secciones = [
    { titulo: 'Yo', desc: 'Conóceme y a las personas que amo', ruta: '/yo', link: 'Ver más', cargando: false },
    { titulo: 'Mi Infancia', desc: 'Conoce un poco sobre mi infancia', ruta: '/infancia', link: 'Ver más', cargando: false },
    { titulo: 'Hobbies', desc: 'Puedes conocer cómo desarrollé mis hobbies', ruta: '/hobbies', link: 'Explorar', cargando: false },
    { titulo: 'Mi Carrera', desc: 'Conoce la razón extraña por la que elegí mi carrera', ruta: '/carrera', link: 'Ver detalles', cargando: false },
    { titulo: 'Personalidad', desc: 'Te hablo de mi personalidad y mis gustos', ruta: '/personalidad', link: 'Conóceme', cargando: false }
  ];

  irASeccion(seccion: any) {
    seccion.cargando = true; 
    
    setTimeout(() => {
      seccion.cargando = false;
      
      // 3. ¡ESTA ES LA MAGIA! Esto cambia la sección en el router-outlet
      this.router.navigate([seccion.ruta]); 
      
      console.log('Navegando a:', seccion.ruta);
    }, 1500);
  }

isDarkMode = false;

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  const theme = this.isDarkMode ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

  
  
}