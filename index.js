toString

document.body.oncontextmenu = function() {
    return false
}

let shootCounter = 0
let statCounter = 0
let timeCounter = 60
let now = 0

let divMain = document.createElement('div');
divMain.style.backgroundImage = "url('./pic/backgroundTutorial.jpg')"
divMain.style.backgroundRepeat = 'no-repeat'
divMain.style.fontSize = '70px'

let divMenu = document.createElement('div')
divMenu.style.height = '800px'
divMenu.style.width = '800px'
divMenu.style.margin = 'auto'

let tableMenu = document.createElement('table')
tableMenu.style.border = 'solid'
tableMenu.style.width = '400px'
tableMenu.style.height = '600px'
tableMenu.style.marginTop = '10%'
tableMenu.style.marginLeft = '10%'
tableMenu.style.backgroundColor = 'green'

let tRowMenu = document.createElement('tr')
tRowMenu.style.border = 'solid'
tRowMenu.style.height = '200px'
tRowMenu.style.width = '200px'
tRowMenu.style.margin = 'auto'

let tRowMenu2 = document.createElement('tr')
tRowMenu2.style.border = 'solid'

let tDatMenu = document.createElement('td')
tDatMenu.style.border = 'solid'
tDatMenu.style.height = '200px'
tDatMenu.style.width = '200px'
tDatMenu.style.margin = 'auto'
tDatMenu.style.backgroundColor = 'brown'
tDatMenu.style.textAlign = 'center'
tDatMenu.style.fontWeight = 'bold'
tDatMenu.style.fontSize = '50px'

let logoDat1 = document.createElement('p')
logoDat1 = 'Новая игра'

let divFone = document.createElement('div');
divFone.style.backgroundImage = "url('./pic/foneImg.jpg')"
divFone.style.margin = 'auto'
divFone.style.width = '800px'
divFone.style.height = '800px'
divFone.hidden = true

let divStat = document.createElement('div')
divStat.style.display = 'flex'
divStat.style.justifyContent = 'space-between'

let divTimer = document.createElement('div')
divTimer.style.fontSize = '70px'
divTimer.style.marginRight = '10%'
divTimer.style.display = 'flex'
divTimer.style.justifyContent = 'space-between'

let divRealTimer = document.createElement('div')
divRealTimer.style.marginRight = '10px'
divRealTimer.hidden = true

let divBulet = document.createElement('div')

let imgAim = document.createElement('img');
imgAim.src = './pic/aim.png'

let bulet1 = document.createElement('img')
bulet1.src = './pic/bulet.png'

let bulet2 = document.createElement('img')
bulet2.src = './pic/bulet.png'

let bulet3 = document.createElement('img')
bulet3.src = './pic/bulet.png'

let bulet4 = document.createElement('img')
bulet4.src = './pic/bulet.png'

let bulet5 = document.createElement('img')
bulet5.src = './pic/bulet.png'

let bulet6 = document.createElement('img')
bulet6.src = './pic/bulet.png'

let bulet7 = document.createElement('img')
bulet7.src = './pic/bulet.png'

let table = document.createElement('table')
table.style.tableLayout = 'fixed'
    // table.style.border = 'solid'
table.style.width = '800px'
table.style.height = '800px'

let tRow1 = document.createElement('tr')
tRow1.style.height = '200px'

let tRow2 = document.createElement('tr')
tRow2.style.height = '200px'

let tRow3 = document.createElement('tr')
tRow3.style.height = '200px'

let tDat1 = document.createElement('td')
tDat1.style.height = '200px'

let tDat2 = document.createElement('td')
tDat2.style.height = '200px'

let tDat3 = document.createElement('td')
tDat3.style.height = '200px'

let tDat4 = document.createElement('td')
tDat4.style.height = '200px'

let tDat5 = document.createElement('td')
tDat5.style.height = '200px'

let tDat6 = document.createElement('td')
tDat6.style.height = '200px'

let tDat7 = document.createElement('td')
tDat7.style.height = '200px'

let tDat8 = document.createElement('td')
tDat8.style.height = '200px'

let tDat9 = document.createElement('td')
tDat9.style.height = '200px'

let madRabbit1 = document.createElement('img')
madRabbit1.src = './pic/madRabbit.png'
madRabbit1.style.marginLeft = 'auto'
madRabbit1.style.marginRight = 'auto'
madRabbit1.style.display = 'none'

let madRabbit2 = document.createElement('img')
madRabbit2.src = './pic/madRabbit.png'
madRabbit2.style.marginLeft = 'auto'
madRabbit2.style.marginRight = 'auto'
madRabbit2.style.display = 'none'

let madRabbit3 = document.createElement('img')
madRabbit3.src = './pic/madRabbit.png'
madRabbit3.style.marginLeft = 'auto'
madRabbit3.style.marginRight = 'auto'
madRabbit3.style.display = 'none'

let madRabbit4 = document.createElement('img')
madRabbit4.src = './pic/madRabbit.png'
madRabbit4.style.marginLeft = 'auto'
madRabbit4.style.marginRight = 'auto'
madRabbit4.style.display = 'none'

let madRabbit5 = document.createElement('img')
madRabbit5.src = './pic/madRabbit.png'
madRabbit5.style.marginLeft = 'auto'
madRabbit5.style.marginRight = 'auto'
madRabbit5.style.display = 'none'

let madRabbit6 = document.createElement('img')
madRabbit6.src = './pic/madRabbit.png'
madRabbit6.style.marginLeft = 'auto'
madRabbit6.style.marginRight = 'auto'
madRabbit6.style.display = 'none'

let madRabbit7 = document.createElement('img')
madRabbit7.src = './pic/madRabbit.png'
madRabbit7.style.marginLeft = 'auto'
madRabbit7.style.marginRight = 'auto'
madRabbit7.style.display = 'none'

let madRabbit8 = document.createElement('img')
madRabbit8.src = './pic/madRabbit.png'
madRabbit8.style.marginLeft = 'auto'
madRabbit8.style.marginRight = 'auto'
madRabbit8.style.display = 'none'

let madRabbit9 = document.createElement('img')
madRabbit9.src = './pic/madRabbit.png'
madRabbit9.style.marginLeft = 'auto'
madRabbit9.style.marginRight = 'auto'
madRabbit9.style.display = 'none'

let deadRabbit1 = document.createElement('img')
deadRabbit1.src = './pic/deadRabbit.png'
deadRabbit1.style.marginLeft = 'auto'
deadRabbit1.style.marginRight = 'auto'
deadRabbit1.style.display = 'none'

let deadRabbit2 = document.createElement('img')
deadRabbit2.src = './pic/deadRabbit.png'
deadRabbit2.style.marginLeft = 'auto'
deadRabbit2.style.marginRight = 'auto'
deadRabbit2.style.display = 'none'

let deadRabbit3 = document.createElement('img')
deadRabbit3.src = './pic/deadRabbit.png'
deadRabbit3.style.marginLeft = 'auto'
deadRabbit3.style.marginRight = 'auto'
deadRabbit3.style.display = 'none'

let deadRabbit4 = document.createElement('img')
deadRabbit4.src = './pic/deadRabbit.png'
deadRabbit4.style.marginLeft = 'auto'
deadRabbit4.style.marginRight = 'auto'
deadRabbit4.style.display = 'none'

let deadRabbit5 = document.createElement('img')
deadRabbit5.src = './pic/deadRabbit.png'
deadRabbit5.style.marginLeft = 'auto'
deadRabbit5.style.marginRight = 'auto'
deadRabbit5.style.display = 'none'

let deadRabbit6 = document.createElement('img')
deadRabbit6.src = './pic/deadRabbit.png'
deadRabbit6.style.marginLeft = 'auto'
deadRabbit6.style.marginRight = 'auto'
deadRabbit6.style.display = 'none'

let deadRabbit7 = document.createElement('img')
deadRabbit7.src = './pic/deadRabbit.png'
deadRabbit7.style.marginLeft = 'auto'
deadRabbit7.style.marginRight = 'auto'
deadRabbit7.style.display = 'none'

let deadRabbit8 = document.createElement('img')
deadRabbit8.src = './pic/deadRabbit.png'
deadRabbit8.style.marginLeft = 'auto'
deadRabbit8.style.marginRight = 'auto'
deadRabbit8.style.display = 'none'

let deadRabbit9 = document.createElement('img')
deadRabbit9.src = './pic/deadRabbit.png'
deadRabbit9.style.marginLeft = 'auto'
deadRabbit9.style.marginRight = 'auto'
deadRabbit9.style.display = 'none'

let mainThem = new Audio();
mainThem.src = './sound/mainThem.mp3'
mainThem.preload = 'auto'
mainThem.volume = '0.5'

let shootSound = new Audio();
shootSound.src = './sound/shoot.mp3'
shootSound.preload = 'auto'

let reloadSound = new Audio();
reloadSound.src = './sound/reload.mp3'
reloadSound.preload = 'auto'

let shootFalse = new Audio();
shootFalse.src = './sound/shootFalse.mp3'
shootFalse.preload = 'auto'

let dead = new Audio();
dead.src = './sound/dead.mp3'
dead.preload = 'auto'

let spawn = new Audio();
spawn.src = './sound/spawn.mp3'
spawn.preload = 'auto'


document.body.append(divMain)
divMain.append(divStat)
divStat.append(divBulet)
divStat.append(divTimer)
divTimer.append(statCounter)
divMain.append(divFone)
divMain.append(divRealTimer)
divFone.append(table)
divMain.append(divMenu)
divMenu.append(tableMenu)
tableMenu.append(tRowMenu)
tableMenu.append(tRowMenu2)
tRowMenu.append(tDatMenu)
tDatMenu.append(logoDat1)
divRealTimer.append(timeCounter)

table.append(tRow1)
table.append(tRow2)
table.append(tRow3)
tRow1.append(tDat1)
tRow1.append(tDat2)
tRow1.append(tDat3)
tRow2.append(tDat4)
tRow2.append(tDat5)
tRow2.append(tDat6)
tRow3.append(tDat7)
tRow3.append(tDat8)
tRow3.append(tDat9)

tDat1.append(madRabbit1)
tDat2.append(madRabbit2)
tDat3.append(madRabbit3)
tDat4.append(madRabbit4)
tDat5.append(madRabbit5)
tDat6.append(madRabbit6)
tDat7.append(madRabbit7)
tDat8.append(madRabbit8)
tDat9.append(madRabbit9)

tDat1.append(deadRabbit1)
tDat2.append(deadRabbit2)
tDat3.append(deadRabbit3)
tDat4.append(deadRabbit4)
tDat5.append(deadRabbit5)
tDat6.append(deadRabbit6)
tDat7.append(deadRabbit7)
tDat8.append(deadRabbit8)
tDat9.append(deadRabbit9)

divBulet.append(bulet1)
divBulet.append(bulet2)
divBulet.append(bulet3)
divBulet.append(bulet4)
divBulet.append(bulet5)
divBulet.append(bulet6)
divBulet.append(bulet7)

divFone.onmouseover = function() {
    divFone.style.cursor = "url('./pic/aim.png'), auto"
}

divFone.onclick = function() {
    if (shootCounter <= 6) {
        shootCounter++
        shootSound.play()
        hideBulet()
    } else {
        shootFalse.play()
    }
}

function hideBulet() {
    if (shootCounter == 1) {
        bulet7.hidden = true
    } else if (shootCounter == 2) {
        bulet6.hidden = true
    } else if (shootCounter == 3) {
        bulet5.hidden = true
    } else if (shootCounter == 4) {
        bulet4.hidden = true
    } else if (shootCounter == 5) {
        bulet3.hidden = true
    } else if (shootCounter == 6) {
        bulet2.hidden = true
    } else if (shootCounter == 7) {
        bulet1.hidden = true
    }

}


divFone.oncontextmenu = function() {
    shootCounter = 0
    reloadSound.play()
    bulet1.hidden = false
    bulet2.hidden = false
    bulet3.hidden = false
    bulet4.hidden = false
    bulet5.hidden = false
    bulet6.hidden = false
    bulet1.hidden = false

}

madRabbit1.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit1.style.display = 'none'
        deadRabbit1.style.display = 'block'
        setTimeout(() => deadRabbit1.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit2.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit2.style.display = 'none'
        deadRabbit2.style.display = 'block'
        setTimeout(() => deadRabbit2.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit3.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit3.style.display = 'none'
        deadRabbit3.style.display = 'block'
        setTimeout(() => deadRabbit3.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit4.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit4.style.display = 'none'
        deadRabbit4.style.display = 'block'
        setTimeout(() => deadRabbit4.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit5.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit5.style.display = 'none'
        deadRabbit5.style.display = 'block'
        setTimeout(() => deadRabbit5.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit6.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit6.style.display = 'none'
        deadRabbit6.style.display = 'block'
        setTimeout(() => deadRabbit6.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit7.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit7.style.display = 'none'
        deadRabbit7.style.display = 'block'
        setTimeout(() => deadRabbit7.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit8.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit8.style.display = 'none'
        deadRabbit8.style.display = 'block'
        setTimeout(() => deadRabbit8.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}

madRabbit9.onclick = function() {
    if (shootCounter <= 6) {
        madRabbit9.style.display = 'none'
        deadRabbit9.style.display = 'block'
        setTimeout(() => deadRabbit9.style.display = 'none', 1000)
        dead.play()
        statCounter++
        divTimer.innerHTML = statCounter
    }
}


function rabbitsNum() {
    let lastNumber = 0
    let now = 0
    now = Math.random() * 10
    now = Math.floor(now)

    if (now !== lastNumber) {
        lastNumber = now
        return lastNumber
    }
}

function uncoverRabbit(number) {
    if (number == 1) {
        madRabbit1.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit1.style.display = 'none', 1000)
    } else if (number == 2) {
        madRabbit2.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit2.style.display = 'none', 1000)
    } else if (number == 3) {
        madRabbit3.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit3.style.display = 'none', 1000)
    } else if (number == 4) {
        madRabbit4.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit4.style.display = 'none', 1000)
    } else if (number == 5) {
        madRabbit5.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit5.style.display = 'none', 1000)
    } else if (number == 6) {
        madRabbit6.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit6.style.display = 'none', 1000)
    } else if (number == 7) {
        madRabbit7.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit7.style.display = 'none', 1000)
    } else if (number == 8) {
        madRabbit8.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit8.style.display = 'none', 1000)
    } else if (number == 9) {
        madRabbit9.style.display = 'block'
        spawn.play()
        setTimeout(() => madRabbit9.style.display = 'none', 1000)
    }
}

function gameTimer() {
    if (timeCounter >= 0) {
        timeCounter = timeCounter - 1
    }
    return timeCounter
}

tDatMenu.onclick = function() {
    divMenu.hidden = true
    divMain.style.backgroundImage = 'none'
    divFone.hidden = false
    divRealTimer.hidden = false
    mainThem.play()
    let game = setInterval(() => uncoverRabbit(rabbitsNum()), 1000)
    setTimeout(() => clearInterval(game), 60 * 1000)
    setTimeout(() => endGame(), 63 * 1000)
    let timer = setInterval(() => gameTimer(), 1000)
    setInterval(() => divRealTimer.innerHTML = timeCounter, 1000)
    setTimeout(() => clearInterval(timer), 60 * 1000)

}

function endGame() {
    divMenu.hidden = false
    divFone.hidden = true
}