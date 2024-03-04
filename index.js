const fetchTodos = async() => {
   try{ 
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let todos = await res.json();
        console.log(todos,'xyz');
        let tBody = document.getElementById('tBody');
        let h1 = document.querySelector('h1');
        let thead = document.querySelector('thead');
        h1.style.display = 'block';
        thead.style.display = 'table-row-group'
        todos.forEach((el) => {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            
            td1.textContent = el.id;
            td2.textContent = el.title;
            td3.textContent = el.completed;
            tr.append(td1, td2, td3);
            tBody.append(tr);

        });
        btn.style.display='none';
    }
    catch(err){
        console.log(err);
    } 
}
let btn = document.querySelector('button');
btn.addEventListener('click',fetchTodos);