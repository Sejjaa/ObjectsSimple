class GetData{
	static go(url){
		return new Promise( function (resolve,reject)  {
			let xml=new XMLHttpRequest();
			xml.open('get',url);
			xml.onreadystatechange=()=>{
				if(xml.status==200 && xml.readyState==4){
					resolve( xml.responseText  )
				}
			}

			xml.send();

		})
	}

}

let texts=GetData.go(' https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt ');

var AllObj;

texts.then( (res) =>  {

	AllObj=res.split('\n');

	setTimeout( CreateObj,100 );

	
})

/////Ovo gore nije bitno Uglavnom gore selektuje odnosno sa njihove stranice skidas filove


///Kreiranje classe za objekte 
class Studenti{
			constructor( Name,Adresa,Telefon,Kurs ){

				this.Name=Name;
				this.Adresa=Adresa;
				this.Telefon=Telefon;
				this.Kurs=Kurs;
				
			}

	}


///Globalne varijable
var student1,student2,student3,student4,student5;


///Razvrstavanje AllObj odnosno izlacenje podataka iz Arreya i
//	pravnjene objekata iz arreya podataka 
function CreateObj(){

	// for loop dok god je let i manje od AllObj.length ti i ++ a i=0;

	//if statment kada je (kada je i==4) onda i = 4 Onda AllObj[4-4] pa je to AllObj[0]

	//Tako je i za ostale AllObj[i-3] a to je AllObj[4-3] pa je to AllObj[1]

	//i nakraju znaci kada to i==4 ti napravi objekat student1

	// kada i==8 onda napravi drugi student2
	for(let i=0;i<AllObj.length;i++){

		if(i==4){
			student1=new Studenti( AllObj[i-4],AllObj[i-3],AllObj[i-2],AllObj[i-1] );	
		}else if(i==8){
			student2=new Studenti( AllObj[i-4],AllObj[i-3],AllObj[i-2],AllObj[i-1] );
		}else if(i==12){
			student3=new Studenti( AllObj[i-4],AllObj[i-3],AllObj[i-2],AllObj[i-1] );	
		}else if(i==16){
			student4=new Studenti( AllObj[i-4],AllObj[i-3],AllObj[i-2],AllObj[i-1] );	
		}else{
			student5=new Studenti( AllObj[i-3],AllObj[i-2],AllObj[i-1],AllObj[i] );		
		}
	

	}


// Kada sve bude gotovo i budes napravio sve studente onda pogkreni ovu funkciju 
//Prikazi objekte

	DisplayObjects();


}

