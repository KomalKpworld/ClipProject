

async function init() {
let rustApp = null
try{
rustApp = await import('../pkg')
}catch(e){
console.error(e)
return; 
}
console.log(rustApp)
    const input = document.getElementById('upload')
    console.log("fvgikjl")
    console.log(input)
    const fileReader = new FileReader()


    

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, '')
 let img_data_url = rustApp.grayscale(base64)
 document.getElementById('new-imag').setAttribute('src',img_data_url)
        }
        input.addEventListener('change', () => {
            fileReader.readAsDataURL(input.files[0])
        })
    
}
init()