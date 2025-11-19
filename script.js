function volume_sphere(e) {
	e.preventDefault();
	let vol="";
	let rad=parseInt(document.querySelector("#radius").value);
	if(rad>=0) vol=parseFloat((4/3)*Math.PI*rad*rad*rad);
	else vol=NaN;
	console.log(vol);
	document.querySelector("#volume").value=vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
