
function calculate(vanus) {
    if (vanus < 18) {
        return 'liiga noor!';
    } else if (vanus >= 100) {
        return 'liiga vana!';
    } else {
        return 'täisealine!';
    }
}
alert('Te olete ' + calculate(21));