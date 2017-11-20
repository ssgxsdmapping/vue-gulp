module.exports = (function(){
    let logFileEvent = function(fileEvent){
        for (let index = 0; index < fileEvent.target.files.length; index++) {
            const element = fileEvent.target.files[index];
            console.log(`File : ${element.name} loaded.`);
        }
    };

    return {
        logFileEvent:logFileEvent
    };
})();