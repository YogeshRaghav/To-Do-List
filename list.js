let a = [];
let btn = document.getElementById('addBtn')
let input = document.getElementById('input') 
let outerDiv = document.getElementById('output')

let counter = 0;
btn.addEventListener('click', ()=>{
    let inputValue = input.value
    if(inputValue){
        a.push(inputValue)
        input.value = ''

        for(let i = counter; i < a.length; i++){
            console.log('inside loop')  
            let entryDiv = document.createElement('div')
            entryDiv.className = 'entry'
    
            let p = document.createElement('p')
            p.innerText = a[i] 
            
            entryDiv.appendChild(p)
            
            let innerDiv2 = document.createElement('div')
            innerDiv2.className = 'innerDiv2'
            
            let btn1 = document.createElement('button')

            let btn2 = document.createElement('button')
            
            btn1.innerText = 'Edit'
            btn2.innerText = 'Delete'
            
            let innerDivSpan1 = document.createElement('span')
            innerDivSpan1.appendChild(btn1)
            
            let innerDivSpan2 = document.createElement('span')
            innerDivSpan2.appendChild(btn2)
            
            innerDiv2.appendChild(innerDivSpan1)
            innerDiv2.appendChild(innerDivSpan2)
    
            entryDiv.appendChild(innerDiv2)
                        
            outerDiv.appendChild(entryDiv)
    

            // Add an event listener to the "Edit" button
            btn1.addEventListener('click',()=>{
                let editInput = document.createElement('input')
                editInput.value = a[i]

                // Replace the text with the input field
                p.innerText = ''
                p.appendChild(editInput)

                // Replace the "Edit" button with a "Save" button
                innerDivSpan1.removeChild(btn1)
                btn2.disable = true;

                let saveButton = document.createElement('button')
                saveButton.innerText = 'Save'

                saveButton.addEventListener('click',()=>{
                    a[i] = editInput.value;
                    p.innerText = editInput.value
                
                    // Remove the "Save" button after saving
                    innerDivSpan1.removeChild(saveButton)

                    innerDivSpan1.appendChild(btn1); // Restore the "Edit" button
                    btn2.disabled = false;
                })
                innerDivSpan1.appendChild(saveButton);
            })

            btn2.addEventListener('click',()=>{
                a.splice(i,1)
                outerDiv.removeChild(entryDiv)
                counter--
            })


            counter++;
            }
    }
    else{
        alert('Please enter a value')
    }

    console.log(a)
})


