$(document).ready(() =>
{
	document.querySelector('.nav').submenu({nested:true});
});

function linkTo(url, blank = false)
{
	if (blank) window.open(url, '_blank');
	else window.location = url;
}