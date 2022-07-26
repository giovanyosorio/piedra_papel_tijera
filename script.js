      // 1 piedra,2 papel, 3 tijera
        function aleatorio(min,max) {
            return Math.floor(Math.random()*(max-min+1)+min)
        }

        function eleccion(jugada) {
            let result=""
            result = (jugada==1 ? "PIEDRA ✊" : jugada==2 ? "PAPEL  📄" :jugada==3 ?"TIJERA ✂️  ":"NULO" )
            return result
        }

        let jugador=0
        let pc= 0
        let triunfos=0
        let perdidas =0

        while (triunfos<=3 && perdidas <=3 ) {
            pc= aleatorio(1,3)
        jugador= prompt("escoge 1 piedra,2 papel, 3 tijera")

        alert("PC elige" + eleccion(pc) )
        alert("tu elijes" + eleccion(jugador) )
        //Combate
       // alert(pc==jugador ? "EMPATE" : ((jugador==1 && pc==3) || (jugador==2 && pc==1) ||(jugador==3 && pc==2)) ? ("GANASTE")  (triunfos=triunfos+1)  : ("PERDISTE"));
        // COMBATE
        if(pc == jugador) {
            alert("EMPATE")
        } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc ==1) || (jugador ==3& pc ==2)) {
            triunfos++
            alert("GANASTE")
        } else {
            perdidas++
            alert("PERDISTE")
        }
        alert('ganaste' + triunfos +  ' veces. Perdiste  '+ perdidas + 'veces')
            
        }
        
  

