import './styles.css';
import HungryBear from './hungrybear.js';

$(document).ready(function(){
  let bear;
  $("#hungryBear").submit(function(){
    event.preventDefault();
    bear = new HungryBear($('#name').val());
    bear.setHunger();
    $('#bearName').text(bear.name);
    $('#foodLevel').text(bear.foodLevel);
    setInterval(function(){
      $('#foodLevel').text(bear.foodLevel);
      if(bear.didYouGetEaten())
        $('#eaten').text(`Sorry... You've been eaten by a very hungry ${bear.name}`);
      }, 1000);
    console.log("set name, set intervals");
    console.log(bear);
  });

  $("#feed").click(function(){
    bear.feed();
    $('#foodLevel').text(bear.foodLevel);
    console.log('feed');
    console.log(bear);
  });
});
