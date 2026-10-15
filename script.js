const toggle = document.getElementById("dark-mode-toggle");
const btnContinue = document.getElementById('btn-continue');
const name_input = document.getElementById('input-name');
const start_screen = document.getElementById('start-screen');
const btn_play = document.getElementById('btn-play');
const btn_level = document.getElementById('btn-level')
const cells = document.querySelectorAll('.main-grid-cell')




toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    const isDarkMode =  document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDarkMode);

})

//INITIAL VALUE


let level_index = 0;
let level = CONSTANT.LEVEL[level_index]

btn_level.addEventListener('click', (e) => {
    level_index = level_index + 1 > CONSTANT.LEVEL.length - 1 ? 0 : level_index + 1;
    level = CONSTANT.LEVEL[level_index];
    e.target.innerHTML = CONSTANT.LEVEL_NAME[level_index];
})


btn_play.addEventListener('click', () =>{
    if(name_input.value.trim().length > 0 ){
        alert(`level => ${level}`)
    }else{
        name_input.classList.add('input-err')
        setTimeout(() =>{
            name_input.classList.remove('input-err')
            name_input.focus()
        }, 500)
    }
})

const getGameInfo = () => JSON.parse(localStorage.getItem('game'))


// add space for each 9 cells 

const initGameGrid = () => {
    let index = 0;

    for(let i = 0; i < Math.pow(CONSTANT.GRID_SIZE,2); i++){
        let row = Math.floor(i/CONSTANT.GRID_SIZE);
        let col = i % CONSTANT.GRID_SIZE;
        if(row === 2 || row === 5) cells[index].style.marginBottom = '10px';
        if(col === 2 || col === 5) cells[index].style.marginRight = '10px'

        index++
    }
}
// end add space for each 9 cells 


const init = () =>{
    const darkmode = JSON.parse(localStorage.getItem('darkmode'));
    document.body.classList.add(darkmode ? 'dark' : 'a');

    const game = getGameInfo()    

    btnContinue.style.display = game ? 'grid' : 'none'

    initGameGrid();
}

init()