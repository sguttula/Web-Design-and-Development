count();
function count() {
    countingWordsList = ['hi', 'hi', 'hello', 'world', 'hello', 'hi' , 'greetings'];
    var objectArray = 0;
    var isolate = null;
    countingWordsList.sort();
    for (var words = 0 ; words < countingWordsList.length ; words++) {
        if (countingWordsList[words] != isolate) {
            if (objectArray > 0) {
                console.log('{ ' + isolate + ' : ' + objectArray + ' }');
            }
            isolate = countingWordsList[words];
            objectArray = 1;
        } 
        else {
            objectArray++;
        }
    }
    if (objectArray > 0) {
        console.log('{ ' + isolate + ' : ' + objectArray + ' }');
    }
}