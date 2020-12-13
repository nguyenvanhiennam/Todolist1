function taskList() {
    this.arr = [];

    this.themTask = function (name) {
        this.arr.push(name);
    }
    this.timViTriTask = function (name) {
        return this.arr.findIndex(function (item) {
            return name === item.name;
        });
    };
    this._xoaTask = function (name) {
        var viTri = this.timViTriTask(name);
        if (viTri != -1) {
            return this.arr.splice(viTri, 1);
        }
    };
    this.timId = function (name){
        var i = this.timViTriTask(name);
        if(i !== -1)
            return this.arr[i];
    };

    this.updateTask = function(name){
        var arr = this.timId(name);
        if(arr.status === "todo")
            return arr.status = "completed";
    }
}