

describe("Controller: ListCtrl", function() {
    beforeEach(module("myApp"));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller("ListCtrl");
    }));

    it("should have items available on load", function() {
        expect(ctrl.items).toEqual([
            {id: 1, label: "First", done: true },
            {id: 2, label: "Second", done: false }        
        ]);
    });
    
    it("should have highlight items based on state", function() {
        var item = {id: 1, label: "First", done: true };
        
        var actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeTruthy();
    });
});
