var Demo;
(function (Demo) {
    var GenericList = (function () {
        function GenericList() {
            this.list = new Array();
        }
        GenericList.prototype.add = function (value) {
            this.list.push(value);
        };
        GenericList.prototype.print = function () {
            this.list.forEach(function (li) { return console.log(li); });
        };
        return GenericList;
    })();
    var DemoItem = (function () {
        function DemoItem(id, name) {
            this.id = id;
            this.name = name;
        }
        return DemoItem;
    })();
    var di = { id: 1, name: "", name2: "" };
    var list = new GenericList();
    list.add(new DemoItem(1, "demo1"));
    list.add(new DemoItem(2, "demo2"));
    list.add(new DemoItem(3, "demo3"));
    list.add(di);
    list.print();
})(Demo || (Demo = {}));
//# sourceMappingURL=generics.js.map