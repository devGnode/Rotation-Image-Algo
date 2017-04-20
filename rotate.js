	// @proc rotate
	//	hprop { __code: dataimg, x: width, y: height, angle: 90 }
	//	x,y -> point of destination
	// @return bool
	var rotate = function( hprop, x, y ){
		var offsetX = x*1, // 1dot offset
			offsetY = y*1, // 1dot offset
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
			
			//pksl.val(nY+" // "+nX+" addr "+(( parseInt( i%nX ) + offsetX ) - ( nX/2 ))+"\r\n",1);
			try{
				// Browse new buffer	
				var img= new Array( len ).fill( 0 );
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
					) :gui.setPixel(
						parseInt( ( parseInt( i%nX ) + offsetX ) - ( nX/2 ) ),
						parseInt( ( parseInt( i/nX ) + offsetY ) - ( nY/2 ) ),
						0xFFAAFF55
					);
				}
			gui.refresh( );
			offsetX=offsetY=i=x=y=nX=nY=rcos=rsin=len=null;
			}catch(e){
			return !1;
			}
	return !0;		
	}
