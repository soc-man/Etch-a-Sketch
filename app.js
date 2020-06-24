
for (let row = 0; row < 16; row++){
    for (let column = 0; column < 16; column++){
      const container = document.querySelector('.container');
      const grid = document.createElement('div');
      container.appendChild(grid);
      grid.style.width = '58px';
      grid.style.height = '58px';
      grid.addEventListener('mouseenter', () => {
        grid.style.backgroundColor = 'blue';
      });
    }
}

function newGrid(number){
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
    number = prompt('Enter the number of squares for your grid', number);
    const size = 960/number ; 
    for (let row = 0; row < number; row++){
        for (let column = 0; column < number; column++){
          const grid = document.createElement('div');
          container.appendChild(grid);
          grid.style.width = (size-2)  + 'px';
          grid.style.height = (size-2)  + 'px';
          grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = 'blue';
          });
        }
    }

}

const clearPad = document.querySelector('.clear');
clearPad.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.remove();
    newGrid();
})