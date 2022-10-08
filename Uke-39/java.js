const forsidebilde = document.querySelector('.forsidebilde')
const slider = document.querySelector('.slider')
const topp = document.querySelector('.topp')
const svg = document.querySelector('.svg')
const pil = document.querySelector('.pil')

const tl = new TimelineMax();

tl.fromTo(forsidebilde,1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut })
.fromTo(forsidebilde,1.2, {width:"100%"}, {width:"90%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(topp, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0 }, "-=0.5")
.fromTo(svg, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0 }, "-=0.5")
.fromTo(pil, 0.5, {opacity:0, y: 30}, {opacity: 1, y: 0 }, "-=0.6");



const overskrift =document.querySelectorAll('#overskrift path');

for(let i = 0; i<overskrift.length; i++){
  console.log(`Letter ${i} is ${overskrift[i].getTotalLength()}`);
}
          

          //Graf 3

        const ctx2 = document.getElementById('Graf3').getContext('2d');
    
        //Gradient
        let gradient3 = ctx.createLinearGradient(0,0,0,600);
        gradient3.addColorStop(0,"rgba(41, 98, 255,0.3)")
        gradient3.addColorStop(1,"rgba(50, 98, 255,0.8)");
    
        const Graf3 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Nov', 'Des', 'Jan', 'Feb', 'Mars', 'Apr','Mai','juni','juli','Aug','Sep','Okt'],
                datasets: [{
                    label: 'BGF World Energy A2(%)',
                    data: [3.27, 4.20, 5.17, 21, 26.70, 34.31, 42.09, 63.44, 43.91, 44.36, 51.94, 57.09],
                    fill:true,
                    backgroundColor: gradient3,
                    borderColor:"black",
                    borderWidth: 1.5
                }]
            },
           
        });
    
        const Fond = document.getElementById('Fond');
        Fond.addEventListener('change', salesTracker);
        function salesTracker(){
          const label = Fond.options[Fond.selectedIndex].text;
          Graf3.data.datasets[0].label = label;
          Graf3.data.datasets[0].data = Fond.value.split(',');
    
          Graf3.update();
        }
       
    
       