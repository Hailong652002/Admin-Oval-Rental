/***** xu li Responsive ************************/
iconmenu = document.querySelector('.js-open-nav')
nav = document.querySelector('.container-list-group')
i=0
iconmenu.onclick = function(){    
  if (i==0) nav.classList.add('open');
  else  nav.classList.remove('open');
}
/******* code chuyen panel ************************/

var control=document.querySelectorAll('.js-item')
  var panels=document.querySelectorAll('.js-panel')
  var btn_addroom = document.querySelector('.js-addroom')

  const name = document.querySelector('.js-name');
  const cost = document.querySelector('.js-cost');
  const image = document.querySelector('.js-image');
  const describe = document.querySelector('.js-describe');
   
//set attribute
  for (var i=0;i<control.length;i++)
    control[i].setAttribute('key',i);
  
//dong tat ca panel ngoai tru panel danh muc
  for (var i = 1 ; i < panels.length; i++){
    panels[i].classList.add('close')
  }
//tao ham mo panel[i]
    function Openpanel(n){
    for (var i = 0 ; i < control.length; i++){
      if(control[i].getAttribute('key')==n){
        panels[i].classList.remove('close')
      }
      else panels[i].classList.add('close')
    }
  }
 

  for (var i=0;i<control.length;i++)
  control[i].addEventListener('click',function(e){
      switch(e.target.getAttribute('key')){
//--------------------------------------------------------------------------------
      case '0'://danh muc
        panels[0].classList.add('open');
        Openpanel(0)
        console.log(control[0].getAttribute('key'))
        break;
//--------------------------------------------------------------------------------
      case '1'://thanh toan
         panels[1].classList.add('open');
        Openpanel(1)
        btn=document.querySelector(".js-btn")
        inp = document.querySelectorAll(".form-receipt")
        err = 0;
        btn.onclick = function(){
          if (inp[0].value=="") {
          a = document.querySelector('.name');
          a.classList.add('err-open');
          err++;
          }
          if (inp[1].value==""){
          b = document.querySelector('.room-number')
          b.classList.add('err-open')
          err++;
          }
          if (inp[2].value==""){
          c=document.querySelector('.rental-date')
          c.classList.add('err-open')
          err++;
          }
          if (inp[3].value==""){
          d=document.querySelector('.check-out-rental')
          d.classList.add('err-open')
          err++;
          }
          if (inp[4].value==""){
          g=document.querySelector('.total-money')
          g.classList.add('err-open')
          err++;
          }
          if (err==0){
            alert("thanh toan thanh cong")
          }
          else err=0;
          for (i=0;i<inp.length;i++){
            inp[i].value="";
          }
          
          
            
          
        }
        break;
//--------------------------------------------------------------------------------
      case '2'://Thanh toan
         panels[2].classList.add('open');
      Openpanel(2)
        break;
//--------------------------------------------------------------------------------
      case '3'://them phong
         panels[3].classList.add('open');
      Openpanel(3)
    name.onchange = function(){
      title.innerHTML=name.value;
    }
    image.onchange = function(){
      var filename = "./assets/image/"+ image.value.slice(image.value.lastIndexOf('\\')+1,image.value.length)
      img.src=filename;
      console.log(filename)
    }


    i = document.createElement('div')
    i.classList.add('card')
    var img =document.createElement('img')
    
    img.classList.add('card-img-top')
    var text = document.createElement('div');
    text.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add("card-title")
    text.appendChild(title)
    i.appendChild(img)
    i.appendChild(text)
      
    const btn_addroom = document.querySelector('.js-addroom') 
    btn_addroom.addEventListener('click',function(){
      name.value=""
      cost.value=""
      image.value=""
      describe.value=""
      panels[0].appendChild(i)
    })
        break;
//--------------------------------------------------------------------------------
     
      case '4'://Danh sach phong dang cho thue
         panels[4].classList.add('open');
        Openpanel(4)
        break;
//--------------------------------------------------------------------------------
      case '5'://danh sach phong dat truoc
        panels[5].classList.add('open');
        Openpanel(5)
        //xoa danh muc
        iconsDelete =  document.querySelectorAll('.js-icon-delete')
        listitem = document.querySelectorAll('.js-prop-person')
        for (var i=0;i<iconsDelete.length;i++)
        iconsDelete[i].setAttribute('key',i);
        for (var i = 0;i<iconsDelete.length;i++)
        iconsDelete[i].addEventListener('click',function(e){
        switch(e.target.getAttribute('key')){
          case '0':
            listitem[0].classList.add('close');
            break;
          case '1':
            listitem[1].classList.add('close');
            break;
          case '2':
            listitem[2].classList.add('close');
            break;
          case '3':
            listitem[3].classList.add('close');
            break;
          case '4':
            listitem[4].classList.add('close');
          break;
          }
        })

          //sua danh muc
          iconsfix = document.querySelectorAll('.js-icon-fix')
          inp_name = document.querySelector('.js-inp-name')
          inp_phone = document.querySelector('.js-inp-phone')
          inp_guests = document.querySelector('.js-inp-guests')
          inp_email = document.querySelector('.js-inp-email')
          btn_submit = document.querySelector('.js-btn-submit')
          inp_room = document.querySelectorAll('.js-Room')
          
          for (var i=0;i<iconsfix.length;i++)
            iconsfix[i].setAttribute('key',i);
          for (var i=0;i<iconsfix.length;i++)
          iconsfix[i].addEventListener('click',function(e){
            switch(e.target.getAttribute('key')){
          case '0':
            list = document.querySelectorAll('td')//list[] = thong tin khach hang
              inp_name.value=list[0].innerHTML
              inp_phone.value=list[1].innerHTML
              inp_guests.value=list[2].innerHTML
              inp_email.value=list[3].innerHTML
            btn_submit.onclick = function(){
              list[0].innerHTML=inp_name.value
              list[1].innerHTML=inp_phone.value
              list[2].innerHTML=inp_guests.value
              list[3].innerHTML=inp_email.value
            }
           
            break;
          case '1':
            list = document.querySelectorAll('td')//list[] = thong tin khach hang
              inp_name.value=list[6].innerHTML
              inp_phone.value=list[7].innerHTML
              inp_guests.value=list[8].innerHTML
              inp_email.value=list[9].innerHTML
            btn_submit.onclick = function(){
              list[6].innerHTML=inp_name.value
              list[7].innerHTML=inp_phone.value
              list[8].innerHTML=inp_guests.value
              list[9].innerHTML=inp_email.value
            }
            break;
          case '2':
          list = document.querySelectorAll('td')//list[] = thong tin khach hang
              inp_name.value=list[12].innerHTML
              inp_phone.value=list[13].innerHTML
              inp_guests.value=list[14].innerHTML
              inp_email.value=list[15].innerHTML
            btn_submit.onclick = function(){
              list[12].innerHTML=inp_name.value
              list[13].innerHTML=inp_phone.value
              list[14].innerHTML=inp_guests.value
              list[15].innerHTML=inp_email.value
            }
            break;
          case '3':
          list = document.querySelectorAll('td')//list[] = thong tin khach hang
              inp_name.value=list[18].innerHTML
              inp_phone.value=list[19].innerHTML
              inp_guests.value=list[20].innerHTML
              inp_email.value=list[21].innerHTML
            btn_submit.onclick = function(){
              list[18].innerHTML=inp_name.value
              list[19].innerHTML=inp_phone.value
              list[20].innerHTML=inp_guests.value
              list[21].innerHTML=inp_email.value
            }
            break;
          case '4':
          list = document.querySelectorAll('td')//list[] = thong tin khach hang
              inp_name.value=list[24].innerHTML
              inp_phone.value=list[25].innerHTML
              inp_guests.value=list[26].innerHTML
              inp_email.value=list[27].innerHTML
            btn_submit.onclick = function(){
              list[24].innerHTML=inp_name.value
              list[25].innerHTML=inp_phone.value
              list[26].innerHTML=inp_guests.value
              list[27].innerHTML=inp_email.value
            }
          break;
            }
          })

        break;
//--------------------------------------------------------------------------------
      case '6'://tai khoan
          Openpanel(6)
          panels[6].classList.add('open');
        break;
//--------------------------------------------------------------------------------
      default:
    }
  })

