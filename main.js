function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function updateCanvas() {
    background("white");
    random_number = Math.floor(Math.random() * quick_draw_data_set.lenght) +

    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById("sketch_name").innerHTML = 'Sketch To be Drawn:' + sketch;
}

function draw() {
    check_sketch() 
    if(drawn_sketch == sketch)
    {
        answer_holder = "set"
        score++;
        document.getElementById('score').innerHTML = 'Score:' + score;
    }
}

function check_sketch() {
    time_counter++;
    document.getElementById('time').innerHTML = 'Timer:' + time_counter;
    console.log(time_counter)
    if(time_counter>400)
    {
        time_counter = 0;
        timer_check = "completed" 
    }
    if(timer_check == "completed" || answer_holder == "set") {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}