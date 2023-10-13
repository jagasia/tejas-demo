
export const Jag = () => {
    function onChangeHandler(event) {
        console.log(event.target.files[0])
        console.log(event)

        // const blob = new Blob([JSON.stringify(response[index])], { type: "text/json;charset=utf-8" });
        var FileSaver = require('file-saver');
        FileSaver.saveAs(event.target.files[0], event.target.files[0].name);
        // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        // FileSaver.saveAs(file);
    }
    return (
        <div>
            <input type="file" name="upload" onChange={onChangeHandler} />
        </div>
    )
}