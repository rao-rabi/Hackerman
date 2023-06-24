let askuser = prompt('Tell me the Ip adress');
let details = document.getElementById('hacking-details');
 
let hacker = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>Hi! I am Hackerman I Will provide you details about this user's Instagram......</p>`
            resolve(10)
        }, 2000)
    })
}
let hacker1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>The Model of this phone is Iphone 8......</p>`
            resolve(10)
        }, 5000)
    })
}
let hacker2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>The Instagram Account is being hacked.Please wait......</p>`
            resolve(10)
        }, 8000)
    })
}
let hacker3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>We are Almost reached there!.....</p>`
            resolve(10)
        }, 6000)
    })
}
let hacker4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>Thanks! For your Patience......</p>`
            resolve(10)
        }, 5000)
    })
}
let hacker5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>The Username and Password has benn sent to your Gmail account You can now access this account easily.</p>`
            resolve(10)
        }, 3000)
    })
}
let hacker6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            details.innerHTML += `<p>Be Happpy!</p>`
            resolve(10)
        }, 2000)
    })
}


let callHacking = async () => {
    await hacker();
    await hacker1();
    await hacker2();
    await hacker3();
    await hacker4();
    await hacker5();
    await hacker6();
}

callHacking()