 const test1 = document.querySelector('.test1');
 const test2 = document.querySelector('.test2');
 const test3 = document.querySelector('.test3');
 const test4 = document.querySelector('.test4');

 const empties = document.querySelectorAll('.empty');


test1.addEventListener('dragstart', dragStart);
test1.addEventListener('dragend', dragEnd);

test2.addEventListener('dragstart', dragStart);
test2.addEventListener('dragend', dragEnd);

test3.addEventListener('dragstart', dragStart);
test3.addEventListener('dragend', dragEnd);

test4.addEventListener('dragstart', dragStart);
test4.addEventListener('dragend', dragEnd);
 
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
 

function dragStart(){
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className='test1';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className='empty';
}
function dragDrop() {
  var target = document.querySelector(".img").cloneNode(true);
  console.log(target);
  this.className='dndtest';
  document.querySelector(".dndtest").innerHTML+=target.innerHTML;
  const inpFile =document.getElementById("inpFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage=previewContainer.querySelector(".image-preview__image");
    const previewDefaultText=previewContainer.querySelector(".image-preview__default-text");

    const myDiv = document.getElementById('myDiv');

    myDiv.contentEditable=true;

    inpFile.addEventListener("change",function(){
      const file = this.files[0];
      console.log(file);
      if(file){
        const reader = new FileReader();

        previewDefaultText.style.display="none";
        previewImage.style.display="block";

        reader.addEventListener("load",function(){
          console.log(this);
          previewImage.setAttribute("src",this.result);
        });

        reader.readAsDataURL(file);
      }else{
        previewDefaultText.style.display=null;
        previewImage.style.display=null;
        previewImage.setAttribute("src","");
      }
    }); 
}

