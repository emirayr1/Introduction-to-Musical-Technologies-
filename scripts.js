window.onload = function () {
  showContent('intro') // Sayfa adı: intro

};


function showContent(topic) {    // SAYFA DEĞİŞTİRME VE AKTİFLİK AYARLAMA - SETCONTAİNERHEİGHT VE SETANİAMTİONPAGE --
  // Hide all content divs
  const sections = document.querySelectorAll('.content > div');
  sections.forEach(section => section.style.display = 'none');

  // Show the selected content div
  document.getElementById(topic).style.display = 'block';


  // SET CONTAINER HEIGHT


  // Remove 'active' class from all sidebar links
  const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
  sidebarLinks.forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked link
  const activeLink = document.querySelector(`.sidebar ul li a[onclick="showContent('${topic}')"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  setContainerHeight(topic);
  setAnimationPage(topic)
  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

function showMenus(menuId) {
  // Tüm container'ları seç
  const menus = document.querySelectorAll('.menus');

  // Hepsini gizle
  menus.forEach(menus => {
    menus.classList.remove('active');
  });

  // Tıklanan container'ı göster
  const activeMenus = document.getElementById(menuId);
  if (activeMenus) {
    activeMenus.classList.add('active');
  }

  const sidebarButtons = document.querySelectorAll('.sidebar button');

  // Tüm butonlardan aktif sınıfını kaldır
  sidebarButtons.forEach(button => {
    button.classList.remove('active-button');
  });

  // Tıklanan butona aktif sınıfını ekle
  const clickedButton = Array.from(sidebarButtons).find(button =>
    button.getAttribute('onclick').includes(menuId)
  );
  if (clickedButton) {
    clickedButton.classList.add('active-button');
  }
}

function setContainerHeight(page) {
  const container = document.querySelector('.container');
  const textCanvasAlt = document.querySelector('.text_canvasAlt');

  if (page === 'intro') {
    container.style.height = '200vh';
    textCanvasAlt.height = '50px';
    // Introduction sayfası
  } else if (page === 'signals') {
    container.style.height = '200vh';
    textCanvasAlt.height = '1000px';
  } else if (page == 'HALAT') {
    container.style.height = '200vh';
    textCanvasAlt.height = '1000px';
  } else if (page == 'BirimÇember') {
    container.style.height = '200vh';
    textCanvasAlt.height = '1000px';
  } else if (page == 'MOLEKÜL') {
    container.style.height = '200vh';
    textCanvasAlt.height = '1000px';
  }
  else {
    container.style.height = 'auto';
    textCanvasAlt.height = 'auto' // Diğer sayfalarda otomatik
  }
}

function setAnimationPage(page) {

  stopAnimation();
  resetMolecules();
  resetLines();
  stopRopeAnimation();

  if (page == 'MOLEKÜL') {
    createMolecules();
    time = 0;
    startAnimation();
  }
  else if (page == 'HALAT') {
    startRopeAnimation();

    animSpring();
  }
  else if (page == 'BirimÇember') {
    console.log("tamamglddik")
  }
  else {
    stopAnimation();
  }
}




// Footer navigation logic
const sectionsOrder = ['intro', 'Trigonometri', 'BirimÇember', 'Temelkavramlar', 'Vector',
  'Kuvvet', 'Basınç', 'Güçenerji', 'Sesnedir', 'Sesoluşumu', 'Periyodikhareket',
  'Birimçembervesinüs', 'Dalgakavramı', 'Sesdalgalarıvesinüs', 'Sinüsformülü',
  'Hareketinegöredalga', 'Enerjidalga', 'Sesdalgasıçeşitleri', 'Sesdalgakatısıvı',
  'Sesdalgagaz', 'Sesdalgaenerji', 'Sesdalgaşiddet', 'Sesşiddetidüzeyi', 'Girişim',
  'HALAT', 'MOLEKÜL'
];

function navigateToNext() {
  const currentSection = getCurrentVisibleSection();
  const currentIndex = sectionsOrder.indexOf(currentSection);
  if (currentIndex < sectionsOrder.length - 1) {
    showContent(sectionsOrder[currentIndex + 1]);
  }
}

function navigateToPrev() {
  const currentSection = getCurrentVisibleSection();
  const currentIndex = sectionsOrder.indexOf(currentSection);
  if (currentIndex > 0) {
    showContent(sectionsOrder[currentIndex - 1]);
  }
}

function getCurrentVisibleSection() {
  const sections = document.querySelectorAll('.content > div');
  for (let section of sections) {
    if (section.style.display === 'block') {
      return section.id;
    }
  }
  return null; // Default case if no section is visible
}

// Add event listeners to footer buttons
document.getElementById('nextButton').addEventListener('click', navigateToNext);
document.getElementById('prevButton').addEventListener('click', navigateToPrev);