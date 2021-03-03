i = 0

let cont = confirm('Click okay to continue. Click cancel to exit')

while (cont == true) {
    console.log(`This is loop iteration ${i}.`)
    i++
    cont = confirm('Click okay to continue. Click cancel to exit')
}