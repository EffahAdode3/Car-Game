class PhoneControls{
    constructor(canvas) {
        this.canvas = canvas;
        this.tilt = 0;
        this.addListeners();

    }
       addListeners(){
        // window.addEventListener("deviceorientation", (e) =>  {
        //     // console.log(e);
        //     this.tilt = e.beta * Math.PI /180 ;
        //     const canvasAngle = -this.tilt;
        //     this.canvas.style.transform = 
        //     "translate(-50%, -50%) rotate(" + canvasAngle + "rad)";
        // });
        window.addEventListener("devicemotion", (e) =>  {
            // console.log(e);
            this.tilt = Math.atan2(
                e.accelerationIncludingGravity.y,
                e.accelerationIncludingGravity.x
            )
            this.tilt = e.beta * Math.PI /180 ;
            const canvasAngle = -this.tilt;
            this.canvas.style.transform = 
            "translate(-50%, -50%) rotate(" + canvasAngle + "rad)";
        });
    }
}