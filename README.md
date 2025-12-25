# Vanguard Agro Export - Landing Page

Sitio web institucional para Vanguard Agro Export, empresa especializada en la exportación de soya y sus derivados desde Bolivia.

## 📋 Descripción

Landing page informativa y responsive que presenta los servicios y productos de Vanguard Agro Export. El sitio incluye:

- Información institucional
- Catálogo de productos de soya (grano, aceite, harina, galletas, pellets)
- Secciones informativas sobre servicios
- Botón flotante de WhatsApp para contacto directo
- Diseño responsive (mobile-first)

**NOTA:** Este es un sitio informativo únicamente. NO incluye funcionalidades de ecommerce (carrito, pagos, precios).

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsive
- **JavaScript (Vanilla)** - Interactividad
- **Google Fonts** - Tipografía (Montserrat, Open Sans)

## 📁 Estructura del Proyecto

```
VanguardAgroExport/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   └── main.js            # Funcionalidad JavaScript
├── assets/                # Imágenes y recursos
│   ├── logo.png
│   ├── aceite.png
│   ├── grano.png
│   ├── harina.png
│   ├── hojuelas.png
│   ├── pellets.png
│   ├── img-1.png
│   ├── img-2.png
│   └── img-3.png
└── README.md              # Este archivo
```

## 🎨 Características

### Header / Navegación
- Logo de Vanguard Agro Export
- Menú de navegación: Inicio, Servicios, Nuestros Productos, Nuestra compañía y visión
- Botón "Contactanos"
- Menú hamburguesa responsive para móviles

### Sección Hero
- Título principal: "El futuro de la soja en el mundo"
- Subtítulo descriptivo
- Botón CTA: "Deseo conocer más"
- Galería de imágenes de productos

### Productos
- Banner destacado: "¡IMPORTA SOJA DE BOLIVIA YA!"
- 5 productos principales con íconos circulares:
  - Grano de soja
  - Aceite de soja
  - Harina de soja
  - Galleta de soja
  - Pellets de soja

### Barra de Navegación Secundaria
- Derivados de soya
- Legales y requisitos
- Contactanos
- Descuentos de temporada

### Tarjetas de Contenido
- 6 tarjetas visuales con gradientes
- Diseño en grid responsive

### Footer
- Columnas de información
- Enlaces a secciones
- Redes sociales
- Logo institucional

### Botón Flotante de WhatsApp
- Visible en todo momento (fixed)
- Mensaje prellenado automático
- Animación de pulso

## 🔧 Instalación y Uso Local

### Opción 1: Abrir directamente
1. Descarga o clona el proyecto
2. Abre `index.html` en tu navegador web
3. ¡Listo! El sitio está funcionando

### Opción 2: Servidor local (recomendado)
Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre `http://localhost:8000` en tu navegador.

Con Node.js y `http-server`:
```bash
npx http-server
```

## 📱 Configuración de WhatsApp

**IMPORTANTE:** Debes configurar el número de WhatsApp antes de publicar.

### Pasos:
1. Abre `index.html`
2. Busca la línea del botón flotante de WhatsApp (línea ~229):
   ```html
   <a href="https://wa.me/59112345678?text=Hola,%20quiero%20información...
   ```
3. Reemplaza `59112345678` con el número real de WhatsApp (incluye código de país)
   - Formato: código de país + número (sin espacios, guiones ni símbolos)
   - Ejemplo Bolivia: `59171234567`

4. También actualiza el número en `js/main.js` (línea ~66):
   ```javascript
   const phoneNumber = '59112345678'; // Reemplazar aquí
   ```

## 🌐 Despliegue / Deploy

### Netlify (Recomendado)
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. ¡Listo! Recibirás una URL pública instantáneamente

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Guarda y espera unos minutos

### Hosting Tradicional (cPanel, Hostinger, etc.)
1. Comprime todo el contenido del proyecto en un ZIP
2. Sube vía FTP o panel de control
3. Descomprime en el directorio `public_html`

## 🎯 Navegación

- **#inicio** - Sección Hero
- **#servicios** - Navegación secundaria
- **#productos** - Banner de productos
- **#compania** - Footer con información institucional
- **#derivados** - Sección de cards
- **#legales** - (Por definir contenido)
- **#contacto** - Abre WhatsApp
- **#descuentos** - (Por definir contenido)

## ✅ Criterios de Aceptación Cumplidos

- ✅ Diseño responsive (mobile-first)
- ✅ Sin errores en consola
- ✅ Botón WhatsApp flotante funcional
- ✅ Mensaje prellenado en WhatsApp
- ✅ Navegación smooth scroll
- ✅ Menú hamburguesa en móviles
- ✅ Diseño fiel al mockup
- ✅ Animaciones y transiciones

## 🔄 Próximas Mejoras Sugeridas

- [ ] Agregar contenido real a las tarjetas de información
- [ ] Implementar formulario de contacto (opcional)
- [ ] Añadir sección de testimonios
- [ ] Integrar Google Analytics
- [ ] Optimizar imágenes (WebP format)
- [ ] Agregar meta tags para SEO
- [ ] Implementar página 404 personalizada

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta a través de:
- WhatsApp: [Configurar número]
- Email: [Configurar email]

## 📄 Licencia

© 2024 Vanguard Agro Export. Todos los derechos reservados.

---

**Desarrollado por:** [Tu nombre/empresa]  
**Versión:** 1.0.0  
**Última actualización:** Diciembre 2024
