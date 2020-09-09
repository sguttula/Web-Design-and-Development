const todos = [{
    name: 'get coffee',
    priority: 90
},
{
    name: 'clean room',
    priority: null
},
{
    name: 'go to CS4220',
    priority: 40
},
{
    name: 'do homework before due date',
    priority: 80
}]

const checkPriority = ({ name, priority }, callback) => {
    setTimeout(() => {
       // const error = !priority ? `${name}` : null
        if(priority == null) {
            callback(`Missing Priority: `)
        }
        callback(`{ name: ${name}, priority: ${priority} }`)
    }, priority || 90)
}
console.log("Priority: ");
const makePriorityList = (name) => {
    name.forEach((name) => {
        checkPriority(name, (error, result) => {
            if (error)
                console.log(error)
            else
                console.log(result)
        })
    })
}

function add(previous, next) {
    return previous + next;
}
function adder() {
    var array = [1, 2, 3, 5, 8, 13, 21];

    return new Promise(resolve => {
        setTimeout(() => {
          resolve(array.reduce(add));
        }, 1000);
      });
  }
  async function iterateNumbers() {
    var strings = ('Total: ');
    var result = await adder();
    console.log(" ");
    console.log(strings);
    console.log(result);
  }

makePriorityList(todos);
iterateNumbers();









// checkPriority({ name: 'get coffee', priority: 90 }, (err, result) => {
//     console.log(result)
// })
// checkPriority({ name: 'clean room', priority: null }, (err, result) => {
//     console.log(result)
// })
// checkPriority({ name: 'go to CS4220', priority: 40 }, (err, result) => {
//     console.log(result)
// })
// checkPriority({ name: 'do homework before due date', priority: 80 }, (err, result) => {
//     console.log(result)
// })