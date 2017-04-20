# Rotation-Image-Algo
Procédure de ratotation d'une image en son centre

[TEST](https://devgnode.github.io/rotate/index.html)
[ OTHER ](https://devgnode.github.io/rotate2/index.html)

une imgeA avec une taille width x , height y avec un angle de O° 

  // calcul cosinus et sinus en radiant
  
      rcos = cosinus( pi * angle / 180 )
      rsin = sinus( pi * angle / 180 )
  
  
  <img src="https://github.com/devGnode/Rotation-Image-Algo/blob/master/imgRot.png">
  
puis calculons la dimension de la nouvelle image  par rapport à l'angle souhaité, auparavant nous avions image de dimension de ( imgA.x 64 * imgA.y 32 ) mais avec un nouvel angle notre image changera problablement de taille ici nous allonq passer de ( 64 * 32 ) à ( 32 * 64 ) pour cett exemple la taille du buffer reste le même mais avec des angle diférent est celon les différente variante de taille des image, l'image d'acceuil sera plus ou moins grande.
  
    nX = arrondir( imgA.x * abs( rcos ) + imgA.y * abs( rsin ) )
    nY = arondir( imgA.x * abs( rsin ) + imgA.y * abs( rcos ) )
  
  new buffer [ nX * nY ]
  
### Parcour le buffer de la nouvelle image 


 
    BOUCLE TANT QUE i < ( nX * nY ) alors :  
    
    // ( point central X de imgA ) + ( new point x ) * rcos - ( new point y ) - ( point central new Imge ) * rsin
    x = arrondir( (imgA.x/2)+( arrondir( i%nX ) - nX/2 ) * rcos - ( arrondir( i/4 ) - nY/2 ) * rsin
    
    // ( point central Y de imgA ) + ( new point x ) * rsin - ( new point y ) - ( point central new Imge ) * rcos
    y = arrondir( (imgA.y/2)+( arrondir( i%nX ) - nX/2 ) * rsin - ( arrondir( i/4 ) - nY/2 ) * rcos
    
    si x >= 0 ET x < imgA.X ET y >= 0 ET y < imgA.y alors :
    	OK
         put yellow 
    sinon
    	OVERFLOW / DEPASSEMENT 
          put grey
     FINs Si
     
    BOUCLEFIN

  <img src="https://github.com/devGnode/Rotation-Image-Algo/blob/master/imgRot1.png">

  
      si x >= 0 ET x < imgA.X ET y >= 0 ET y < imgA.y alors :
         
         monitor.putPixel( 
            arrondir( i%nX ), // new X
            arrondir( i/nX ), // new y
            imgeA[ ( y * imageA.x ) + y ] 
         )
         
      sinon
          rien 
   
  
  <img src="https://github.com/devGnode/Rotation-Image-Algo/blob/master/imgRot2.png">
  
  
  ```javascript
// @proc rotate
	//	hprop { __code: dataimg, x: width, y: height, angle: 90 }
	//	x,y -> point of destination
	// @return bool
	var rotate = function( hprop, x, y ){
		var offsetX = x*1, // SPRITE 1 PIXEL offset
		offsetY = y*1, //  sprite 1 pIXEL offset
		i =x=y=0,
			
		// rcos radiant cosinus
		// rsin radiant sinus
		rcos = Math.sin( Math.PI* hprop.angle /180 ),
		rsin = Math.cos( Math.PI* hprop.angle /180 ),
		// size of the new Image buffer
		// x' * y' 
		nX = parseInt( 
			hprop.x * Math.abs( rcos ) + hprop.y * Math.abs( rsin ) 
			),
		nY = parseInt( 
			hprop.x * Math.abs( rsin ) + hprop.y * Math.abs( rcos ) 
			),
		len = nX*nY;
	
		try{
			// Browse new buffer	
			for(; i < len; i++,x++ ){
				
				x = Math.floor(  
					( hprop.x/2)+( (( parseInt( i%nX )  )) - nX/2 ) * rcos - ( ( parseInt( i/nX ) )-(nY/2) ) * rsin 
					);
				y = Math.floor(  
					(hprop.y/2)+( (( parseInt( i%nX )  )) - nX/2 ) * rsin + ( ( parseInt( i/nX ) )-(nY/2) ) * rcos
				);
						
				// gui monitor canvas
				//
				x >= 0 && x < hprop.x && y >= 0 && y < hprop.y ?
				gui.setPixel(
					parseInt( ( parseInt( i%nX ) + offsetX ) - ( nX/2 ) ), // use round or parsInt avoid float addr
					parseInt( ( parseInt( i/nX ) + offsetY ) - ( nY/2 ) ), // use round or parsInt avoid float addr
					hprop.__code[ ( y * hprop.x ) + x ]
				) : void 0;
			}
		gui.refresh( );
		offsetX=offsetY=i=x=y=nX=nY=rcos=rsin=len=null;
		}catch(e){
		return !1;
		}
return !0;		
}
```

