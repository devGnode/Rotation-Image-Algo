# Rotation-Image-Algo
Procédure de ratotation d'une image en son centre

Algo :

une imgeA width 64 , height 32 avec un angle de 90° 

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
         put yellow
    sinon
          put grey
  
  

FIN

  <img src="https://github.com/devGnode/Rotation-Image-Algo/blob/master/imgRot1.png">

  
      si x >= 0 ET x < imgA.X ET y >= 0 ET y < imgA.y alors :
         
         monitor.putPixel( 
            arrondir( i%nX ), // new X
            arrondir( i/nX ), // new y
            imgeA[ ( y * imageA.x ) + y ] 
         )
         
      sinon
          rien 
     
