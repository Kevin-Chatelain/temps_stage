function calcTime(time) {
            let days = time / (3600 * 24);
            let hours = (time % (3600 * 24)) / 3600;
            let minutes =  ((time % (3600 * 24)) % 3600) / 60;
            let seconds = (((time % (3600 * 24)) % 3600) % 60) % 60;
            return Math.floor(days)+","+Math.floor(hours)+","+Math.floor(minutes)+","+Math.floor(seconds);
        }

        function getJours(time) {
            let jours = Math.floor(time / (3600 * 24));

            return jours;
        }




     
        function getTime(){
            let fin = new Date(2022, 5, 10, 18, 0);
            let maintenant = new Date();
            let debut = new Date(2022, 3, 4, 8, 0);





            // CALCUL DE LA DUREE TOTALE

            let duree_totale =  fin.getTime() - debut.getTime();
            duree_totale /= 1000;
            jours_totaux = getJours(duree_totale);






            // CALCUL DE LA DUREE RESTANTE

            let duree_restante =  fin.getTime() - maintenant.getTime();
            duree_restante /= 1000;
            jours_restants = getJours(duree_restante);

            document.getElementById('jours_restantes').innerText = jours_restants;




            // CALCUL DE LA DUREE ECOULEE

            jours_ecoules = jours_totaux - jours_restants;

            document.getElementById('jours_ecoulees').innerText = jours_ecoules;


            // MISE EN PLACE DE LA BARRE
            // Aucune convertion est nécessaire, j'utilise directement les ms B)
            // Avec un -100 pour inverser l'opération sinon on obtient le temps restant et non écoulé !

            let barre_width = 100 - ((duree_restante * 100) / duree_totale);
            document.querySelector('.barre>div').style.width = barre_width+"%";


            //POURCENTAGE

            document.getElementById('pourcentage').innerText = barre_width.toFixed(1)+"%";

            //LOGIQUE DU TIMER

            let time_str = calcTime(duree_restante);
            time_table = time_str.split(",");
            

            document.querySelector('.timer>div:nth-child(1)').innerText = time_table[0][0];
            document.querySelector('.timer>div:nth-child(2)').innerText = time_table[0][1];
            document.querySelector('.timer>div:nth-child(3)').innerText = time_table[1][0];
            document.querySelector('.timer>div:nth-child(4)').innerText = time_table[1][1];
            document.querySelector('.timer>div:nth-child(5)').innerText = time_table[2][0];
            document.querySelector('.timer>div:nth-child(6)').innerText = time_table[2][1];
            document.querySelector('.timer>div:nth-child(7)').innerText = time_table[3][0];
            document.querySelector('.timer>div:nth-child(8)').innerText = time_table[3][1];
			
			
			//Une petit système pour inverser les chiffres en cas de manque de dizaine pour eviter 
			//d'avoir des 80h heures au lieu de 8.

            document.querySelectorAll('.timer>div').forEach(div => {
                if(div.innerText === 'undefined') {
					div.innerText = 0;
					
					let div_content = div.innerText;
					let wrong_div = div.previousElementSibling.innerText;
					
					div.innerText = wrong_div;
					div.previousElementSibling.innerText = div_content;
				}
            })


            
        }

        

       setInterval(getTime, 1000);


       let colors = ["rgb(255, 121, 121)", "rgb(121, 159, 255)", "rgb(61, 190, 61)", "rgb(190, 61, 82)"];

       let random = Math.floor( colors.length * Math.random());

       document.documentElement.style.setProperty('--main_color', colors[random]);