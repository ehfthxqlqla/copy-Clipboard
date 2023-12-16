const queryString = new URLSearchParams(window.location.search)
const copyTarget = queryString.get("copy")

// const newTextArea = document.createElement("textarea")
const titleTag = document.querySelector("title")
const spanTag = document.querySelector(".notice")

titleTag.innerText = `복사하기 - ${copyTarget}`

// if (!navigator.clipboard) {
//     spanTag.innerText = `복사됨! 이 창을 닫아주세요.`
//     newTextArea.style.position = "absolute"
//     newTextArea.style.top = "-9999px"
//     newTextArea.innerText = copyTarget
//     newTextArea.select()
//     newTextArea.setSelectionRange(0, 9999)
//     document.execCommand("copy")
//     window.open('', '_self').close()
// } else {
//     navigator.clipboard.writeText(newTextArea.innerText).then(() => {
//         const spanTag = document.querySelector(".notice")
//         spanTag.innerText = `복사됨! 이 창을 닫아주세요.`
//         window.open('', '_self').close()
//     })
// }

spanTag.innerHTML = `${copyTarget}`
