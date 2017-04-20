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
  
Parcour le buffer de la nouvelle image 
 
BOUCLE TANT QUE i < ( nX * nY ) alors :

  

FIN

