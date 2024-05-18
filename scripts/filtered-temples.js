   document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        hamburger.classList.toggle('close');
    });

    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new 
    Date(document.lastModified).toLocaleDateString();
    
    document.getElementById("currentYear").innerText = currentYear;
    document.getElementById("lastModified").innerText = `Last Modified: ${lastModifiedDate}`;

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-lds-1885-wallpaper.jpg"
          },
          {
            templeName: "Provo City Center",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-lds-2836-wallpaper.jpg"
          },
          {
            templeName: "Taipei Taiwan",
            location: "Taipei, Taiwan",
            dedicated: "1984, November, 17",
            area: 14850,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-2229-wallpaper.jpg"
          }
        ];
        
        const templeContainer = document.getElementById('templeContainer');
        
        function createTempleCard(temple) {
          const figure = document.createElement('figure');
        
          const img = document.createElement('img');
          img.src = temple.imageUrl;
          img.alt = `${temple.templeName} Temple`;
          img.loading = 'lazy';
        
          const figcaption = document.createElement('figcaption');
          figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
          `;
        
          figure.appendChild(img);
          figure.appendChild(figcaption);
          return figure;
        }
        
        function displayTemples(filteredTemples) {
          templeContainer.innerHTML = '';
          filteredTemples.forEach(temple => {
            const templeCard = createTempleCard(temple);
            templeContainer.appendChild(templeCard);
          });
        }

        function filterOldTemples() {
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          }
          
          function filterNewTemples() {
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
          }
          
          function filterLargeTemples() {
            return temples.filter(temple => temple.area > 90000);
          }
          
          function filterSmallTemples() {
            return temples.filter(temple => temple.area < 10000);
          }

          document.getElementById('home').addEventListener('click', () => displayTemples(temples));
          document.getElementById('old').addEventListener('click', () => displayTemples(filterOldTemples()));
          document.getElementById('new').addEventListener('click', () => displayTemples(filterNewTemples()));
          document.getElementById('large').addEventListener('click', () => displayTemples(filterLargeTemples()));
          document.getElementById('small').addEventListener('click', () => displayTemples(filterSmallTemples()));

          displayTemples(temples);
        });
    