const { Wallet } = require('ethers')
const { writeFileSync } = require('fs')

let generateCount = 1000
const fileName = "keys.json"

let keys = []
for (let i = 0; i < generateCount; i++) {
   const wallet = Wallet.createRandom()
   keys.push({ address: wallet.address, key: wallet.privateKey})
   let k = i+1
   console.log("Generated"+k/generateCount)
}

writeFileSync(fileName, JSON.stringify(keys, null, 6), { encoding: 'utf8' })
console.log("Saved"+ generateCount + "keys to "+fileName)