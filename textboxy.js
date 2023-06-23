
const genTextbox = () => {
  document.getElementById("output").src = ""

  let url = "https://vercel-generator.vercel.app/homestuck/"

  url += document.getElementById("char").value

  let message = ""

  message += "!" + document.getElementById("expr").value + " "

  message += document.getElementById("message").value

  url += encodeURI(message).replace(/#/g, "%23")

  document.getElementById("output").src = url
}