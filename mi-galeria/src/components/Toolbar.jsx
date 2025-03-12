import Button from "./Button";

function Toolbar({ onDeleteImage, onUploadImage }) {
	return (
	  <div>
		<Button onClick={onDeleteImage}>
		  Borrar imagen
		</Button>
		<Button onClick={onUploadImage}>
		  Cargar imagen
		</Button>
	  </div>
	);
  }

export default Toolbar;