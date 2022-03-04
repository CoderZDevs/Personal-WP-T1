
var c=3;
var rown=3;
function addelement(a,b,u)



{

    if(c==3){
        rown+=1;
        var element=document.getElementById("nrows");
        element.innerHTML+= `<div class="row" id=${rown}></div>`;
        c=0;
    }
        c+=1;
    var newElement=document.getElementById(rown);
    newElement.innerHTML+= `<div class="col-md-4">
    <div class="service-box">
        <i class="fa fa-user-plus" aria-hidden="true"></i>
        <h3><span>${a}</span></h3>
        <p>${b}</p>
        <a href=${u} target="_blank"><i class="fa fa-external-link"></i></a>
    </div>
</div>`;

    

}

function inter1()
{
    document.getElementById('askval').classList.toggle('active');
}
function inter2()
{
    document.getElementById('askval').classList.toggle('active');
    var name=document.getElementById('name').value;
    var des=document.getElementById('des').value;
    var url=document.getElementById('url').value;

    addelement(name,des,url);


}
