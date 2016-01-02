module Demo {
    interface GenericListItem {
        id: number;
        name: string;
    }

    class GenericList<T extends GenericListItem> {
        private list: Array<T>;
        constructor() {
            this.list = new Array<T>();
        }

        add(value: T): void {
            this.list.push(value);
        }

        print() {
            this.list.forEach(li=> console.log(li));
        }
    }

    class DemoItem implements GenericListItem {
        id: number;
        name: string;
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    var di = { id: 1, name: "", name2: "" };
    var list = new GenericList<DemoItem>();
    list.add(new DemoItem(1, "demo1"));
    list.add(new DemoItem(2, "demo2"));
    list.add(new DemoItem(3, "demo3"));
    list.add(di);
    list.print();
}