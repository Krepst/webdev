// 1 UZDUOTIS

const allDivs = document.querySelectorAll('.app > div')


allDivs.forEach((element, i) => {
    element.addEventListener("mouseout", () => {
        element.setAttribute("id", i)
        const newId = document.querySelector(`.classNumber${i}`);
        const newPara = newId ? null : element.innerHTML += `<p class="classNumber${i}"> element id: ${i} </p>`;

        
    })

    console.log(element)

})

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const allPara = document.querySelectorAll("p");

allPara.forEach(para => {
    para.addEventListener("click", () => {
        const clonePara = para.cloneNode(true)
        insertAfter(clonePara, para)
    })
})




allDivs.forEach((element, i) => {
    element.addEventListener("dblclick", () => {
        const arr = Array.from(allDivs);
       const index = arr.indexOf(arr[i])

       const div = document.getElementById(index)
       div.remove()
        
        
    })
})



const greenblock = document.querySelector(".block-purple")


 window.onload = function() {
    greenblock.innerHTML = `<p> screen height is ${window.innerHeight} </p>
    <p>screen width is ${window.innerWidth} </p>
    <p> document height is ${document.body.clientHeight} </p>
    <p> document width is ${document.body.clientWidth} </p>`;
};

window.onresize = function() {
    greenblock.innerHTML = `<p> screen height is ${window.innerHeight} </p>
    <p>screen width is ${window.innerWidth} </p>
    <p> document height is ${document.body.clientHeight} </p>
    <p> document width is ${document.body.clientWidth} </p>`;

}