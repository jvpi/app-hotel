let btn = document.getElementById('btn')
let modal = document.getElementById('modal')
let cerarrModal = document.getElementById('cerrar-modal')

function abrirModal() {
	
	btn.addEventListener('click',function() {
		modal.classList.add('modal--show')
		document.body.style.overflow = 'hidden'
	})
}

function cerrarModal() {
	cerarrModal.addEventListener('click',function() {
		modal.classList.remove('modal--show')
		document.body.style.overflow = 'visible'
	})
}
// abrirModal()
// cerrarModal()
