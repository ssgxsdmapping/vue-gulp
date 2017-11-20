
    let {component} = require('../src/components/XsdComponent')
    beforeEach(function(){
        let {component} = require('../src/components/XsdComponent')
        for (let property in component.data()){
            component.methods[property] = component.data()[property];
        }
    })

    describe("xsd-component", function(){
        it("detect file input", function(){
            let fileEvent = {
                target: {
                    files : "FILES"
                }
            }

            console.log(component.methods)
    
            component.methods.fileHandle(fileEvent);
            expect(component.methods.files).toBe("FILES");
        })
    })