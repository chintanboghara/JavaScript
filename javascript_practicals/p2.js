const accountId = 1312

let accountEmail = "chintan@google.com"
var accountPassword = '1234' /* Not useable because of issue in block scope and functional scope */
accountCity = "Ahmedabad" /* this is variable but not prefer */
let accountState; /* Value not define */

console.log(accountId) /* print */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) /* print all in table */