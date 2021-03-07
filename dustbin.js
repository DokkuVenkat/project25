class dustbin
{
		constructor(x,y,width,height){
			var option= {
				isStatic:true
			}
			this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
			World.add(world,this.dustbinObject);
			this.width=width;
			this.height=height;
			this.image=loadImage("dustbingreen.png");
			
		}
		display()
		{
			fill("black");
			noStroke();
			rectMode(CENTER);
			rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);
		}
	}
		
		

			
		

	
