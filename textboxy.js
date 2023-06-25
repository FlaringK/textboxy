
const genTextbox = () => {
  document.getElementById("output").src = ""

  let url = "https://vercel-generator.vercel.app/homestuck/"

  url += document.getElementById("char").value

  let message = ""

  message += "!" + document.getElementById("expr").value + " "

  message += document.getElementById("message").value

  url += encodeURIComponent(message)

  document.getElementById("output").src = url
}