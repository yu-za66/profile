const MenuContainer = document.querySelector('.menu_container');
const MenuOpen = document.querySelector('.menu_open');
const MenuClose = document.querySelector('.menu_close');

const SPMenu = document.querySelector('.menu');			
	MenuContainer.addEventListener('click', () => {
        //classList.toggleはクリックしたときに''にふくまれているクラスが自動的に付与されたり外されたりする
		MenuOpen.classList.toggle('active');
		MenuClose.classList.toggle('active');
		SPMenu.classList.toggle('active');
	});