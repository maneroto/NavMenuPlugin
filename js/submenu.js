Element.prototype.submenu = function(options = {})
{
	const constructor = (options) => 
	{
		options.submenu = options.submenu || '.submenu';
		options.displayer = options.displayer || '.submenuDisplayer';
		options.nested = options.nested || false;

		return options;
	}; options = constructor(options);

	let displayers = this.querySelectorAll(options.displayer);
	let submenus = this.querySelectorAll('.nav .submenu');

	for (let i = 0; i < displayers.length; i ++) displayers[i].addEventListener('click', function(e)
	{
		let currentSubmenu = this.parentElement.querySelector('.submenu');

		if (options.nested) 
		{
			submenus = this.parentElement.dataset.layer;
			submenus = document.querySelectorAll('[data-layer="'+submenus+'"] > .submenu');
		}

		if(e.target == this)
		{
			submenus.forEach(sub => console.log(sub.classList));
			for(let i = 0; i < submenus.length; i ++) if (submenus[i] != currentSubmenu) submenus[i].classList.remove('active');
			currentSubmenu.classList.toggle('active');
		}
	});
}

NodeList.prototype.submenu = HTMLCollection.prototype.submenu = function(options) {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i]) {
            this[i].submenu(options);
        }
    }
}