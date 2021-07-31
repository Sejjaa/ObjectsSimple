var body;


///Prikazivanje svih podatak od objekata

//Pokretanje Funkcije
function DisplayObjects(){
	body=$('body');


// Pogledaj i ovo moze se pisati i vako ako zelis to su 2 nacina pisanja

// var Test='<div class="holder holder1"><h5> '+student1.Name+'</h5> </div>  ';

//Napomena mozes pisati na dva nacina html code ovaj gore i ovaj dole nacin DisplayStudents



// Var u kojoj je smjesten cisti Html code sa podacima 
	var DisplayStudents=`

	<div class="holders holder1">
	<h5>${student1.Name}</h5>  
	<h5>${student1.Adresa}</h5>
	<h5>${student1.Telefon}</h5>
	<h5>${student1.Kurs}</h5>
	</div>


	<div class="holders holder2">
	<h5>${student2.Name}</h5>  
	<h5>${student2.Adresa}</h5>
	<h5>${student2.Telefon}</h5>
	<h5>${student2.Kurs}</h5>
	</div>


	<div class="holders holder3">
	<h5>${student3.Name}</h5>  
	<h5>${student3.Adresa}</h5>
	<h5>${student3.Telefon}</h5>
	<h5>${student3.Kurs}</h5>
	</div>


	<div class="holders holder4">
	<h5>${student4.Name}</h5>  
	<h5>${student4.Adresa}</h5>
	<h5>${student4.Telefon}</h5>
	<h5>${student4.Kurs}</h5>
	</div>


	<div class="holders holder5">
	<h5>${student5.Name}</h5>  
	<h5>${student5.Adresa}</h5>
	<h5>${student5.Telefon}</h5>
	<h5>${student5.Kurs}</h5>
	</div>

	`;
		
	body.append(DisplayStudents);


///Css rad u css sredivanje class holders


//Selektovanje svih holdera

//Posto svi imaju istu classu holders

//kada ih selektujemo ima ih 5

var Holders=$('.holders');

//Posto ih ima 5 loopamo kroz Arrey i sredujemo ih sve isto
for(let i=0;i<Holders.length;i++){

	$(Holders[i]).css({ border:'1px solid black',background:'orange',
	marginTop:'20px',marginLeft:'auto',marginRight:'auto',width:'200px',textAlign:'center'	


	 })

}

}