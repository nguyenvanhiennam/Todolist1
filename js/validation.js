function Validation() {
    this.kiemTraRong = function (input, id, mess) {
        if (input === "") {
            getEle(id).style.display = "block";
            getEle(id).innerHTML = mess;
            return false;
        }
        // getEle(id).style.display = "none";
        getEle(id).innerHTML = "";
        return true;
    }
    this.kiemTraTrung = function (arr, input, id, mess) {
        var arr = [];
        if (arr[input] === input) {
            getEle(id).style.display = "block";
            getEle(id).innerHTML = mess;
            return false;
        }
        getEle(id).innerHTML = "";
        return true;
    }
}