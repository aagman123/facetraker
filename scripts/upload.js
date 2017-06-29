function previewFile() {

    var preview = document.querySelector('#source_image'); //selects the query named img
    var file = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader = new FileReader();
    //var orignialpreview = document.querySelector('img').files[1];

    reader.onloadend = function () {
        preview.src = reader.result;
        orignialpreview = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL

    }
    else {
        preview.src = "";
        //orignialpreview.src = "";
    }
}