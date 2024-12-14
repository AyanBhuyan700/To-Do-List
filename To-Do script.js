function main() {
    let btn = document.querySelector("#btn");
    let ul = document.querySelector("#list-container");
    var input = document.querySelector("#input-box");

    const getData = JSON.parse(localStorage.getItem('tasks')) || [];
    getData.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
        li.addEventListener("click", () => {
            li.classList.toggle('checked');
        });
    });

    btn.addEventListener("click", () => {
        const value = input.value.trim(); 
        if (value) {
            const li = document.createElement('li');
            li.textContent = value;
            ul.appendChild(li);
            li.addEventListener("click", () => {
                li.classList.toggle('checked');
            });

            
            getData.push(value); 
            localStorage.setItem('tasks', JSON.stringify(getData));

            // localStorage.clear();
            // console.log(value);
            input.value = ""; 
        } else {
            alert("Please enter any task");
        }
    });
}

main();
